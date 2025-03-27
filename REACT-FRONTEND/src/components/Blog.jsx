import React from "react";
import Blogs from "./Blogs/Blogs";

const Blog = () => {
  return (
    <div className="pt-20">
      <div className="container">
        {/* Blog Header */}
        <div className="max-w-3xl mx-auto my-10 text-center">
          <h1 className="text-3xl font-bold mb-6">Our Blog Posts</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Discover the latest news, tips and user guidelines with our blog posts.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Featured Posts</h2>
          <Blogs />
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Stay updated with our latest blog posts and product updates.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/80">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
