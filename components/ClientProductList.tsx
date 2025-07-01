"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

interface ProductType {
  _id: string;
  name: any;
  price: number;
  image: string;
  quantity?: number;
  title: string;
  category: string;
  expense: number;
  media: any;
}

const ClientProductList = ({ products }: { products: ProductType[] }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4">
          Our Collection
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover exquisite pieces crafted with precision and passion
        </p>
      </div>

      <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
        <div className="text-sm text-gray-500">
          Showing {Math.min(visibleCount, products.length)} of {products.length} products
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-gray-600 mb-4">No products available</p>
          <button className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
            View New Arrivals
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleCount).map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {visibleCount < products.length && (
        <div className="text-center mt-16">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ClientProductList;
