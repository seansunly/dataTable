import React from "react";
import { Card } from "flowbite-react";

export default function CardProduct1({ product, handleProductDetial }) {
  return (
    <div className="w-full md:w-1/4 p-4">
      <Card className="shadow-lg rounded-lg" onClick={handleProductDetial}>
        {/* Product Image Wrapper */}
        <div className="overflow-hidden h-64">
          {/* Product Image with hover zoom effect */}
          <img
            src={product.image}
            alt={product.title}
            className="object-cover h-100% w-full "
          />
        </div>

        {/* Product Details */}
        <div className="p-4">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
              {product.title}
            </h5>
          </a>

          {/* Rating */}
          <div className="flex items-center mb-3">
            {[...Array(Math.floor(product.rating.rate))].map((_, index) => (
              <svg
                key={index}
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-700 dark:text-gray-300">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
