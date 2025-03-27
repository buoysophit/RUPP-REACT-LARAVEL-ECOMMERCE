import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {data.map((item) => (
        <div key={item.id} className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/product/${item.id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
            <img 
              className="peer absolute top-0 right-0 h-full w-full object-cover" 
              src={item.img} 
              alt={item.title} 
            />
            <img 
              className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" 
              src={item.img} 
              alt={item.title} 
            />
            <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
              <path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" />
            </svg>
          </Link>
          <div className="mt-4 px-5 pb-5">
            <Link to={`/product/${item.id}`}>
              <h5 className="text-xl tracking-tight text-slate-900 dark:text-white">{item.title}</h5>
            </Link>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900 dark:text-white">${item.price}</span>
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600">
              <FaShoppingCart className="mr-2 h-6 w-6" />
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
