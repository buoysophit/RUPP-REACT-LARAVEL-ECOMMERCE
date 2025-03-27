<?php

namespace App\Http\Controllers\admin;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Lararavel\Sanctum\HasApiTokens;

class AuthController extends Controller
{
    public function authenticate(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors(),
            ],400);
        }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = User::find(Auth::user()->id);
            if($user->role_as == 'admin') {
                $token = $user->createToken($user->email.'_AdminToken')->plainTextToken;
                return response()->json([
                    'status' => 200,
                    'username' => $user->name,
                    'token' => $token,
                    'message' => 'Logged In Successfully',
                ]);
            } else {
                return response()->json([
                    'status' => 401,
                    'message' => 'You are not authorized to access admin panel.',
                ],401); 
            }
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Invalid email or password is incorrect.',
            ],401);
        }
    }
   
}
