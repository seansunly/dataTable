import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      {/* Illustration or Icon */}
      <div className="text-center mb-6">
        <img
          src="https://via.placeholder.com/400x300.png?text=404+Not+Found"
          alt="404 Not Found"
          className="w-full max-w-md mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="inline-block rounded-lg bg-cyan-700 px-6 py-3 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 transition duration-300 ease-in-out"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
}
