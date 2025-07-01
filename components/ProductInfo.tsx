"use client";

import { useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

const ProductInfo = ({ productInfo }: { productInfo: any }) => {
  const [selectedColor, setSelectedColor] = useState(productInfo.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(productInfo.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();

  return (
    <div className="max-w-[450px] flex flex-col gap-6 p-6 bg-white border border-[#e8e3dc] rounded-lg shadow-sm">
      <div className="flex justify-between items-start border-b border-[#e8e3dc] pb-4">
        <h1 className="font-serif text-3xl text-[#3a3a3a] tracking-wide">
          {productInfo.title}
        </h1>
        <HeartFavorite 
          product={productInfo} 
          // className="text-[#b89d7a] hover:text-[#3a3a3a] transition-colors" 
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 tracking-widest">CATEGORY:</span>
        <span className="text-sm font-medium text-[#3a3a3a]">
          {productInfo.category?.toUpperCase()}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-serif text-2xl text-[#b89d7a]">
          ${productInfo.price?.toFixed(2)}
        </span>
      </div>

      <div className="py-4 border-t border-[#e8e3dc]">
        <h3 className="text-sm text-gray-500 tracking-widest mb-2">DESCRIPTION</h3>
        <p className="text-gray-700 leading-relaxed">{productInfo.description}</p>
      </div>

      {productInfo.colors?.length > 0 && (
        <div className="py-4 border-t border-[#e8e3dc]">
          <h3 className="text-sm text-gray-500 tracking-widest mb-3">COLOR</h3>
          <div className="flex flex-wrap gap-2">
            {productInfo.colors.map((color:any, index:any) => (
              <button
                key={index}
                className={`px-4 py-2 text-xs tracking-wider rounded-sm border transition-all ${
                  selectedColor === color
                    ? "bg-[#3a3a3a] text-white border-[#3a3a3a]"
                    : "bg-white text-[#3a3a3a] border-[#e8e3dc] hover:border-[#b89d7a]"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}

      {productInfo.sizes?.length > 0 && (
        <div className="py-4 border-t border-[#e8e3dc]">
          <h3 className="text-sm text-gray-500 tracking-widest mb-3">SIZE</h3>
          <div className="flex flex-wrap gap-2">
            {productInfo.sizes.map((size:any, index:any) => (
              <button
                key={index}
                className={`w-12 h-12 flex items-center justify-center text-sm rounded-sm border transition-all ${
                  selectedSize === size
                    ? "bg-[#3a3a3a] text-white border-[#3a3a3a]"
                    : "bg-white text-[#3a3a3a] border-[#e8e3dc] hover:border-[#b89d7a]"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="py-4 border-t border-[#e8e3dc]">
        <h3 className="text-sm text-gray-500 tracking-widest mb-3">QUANTITY</h3>
        <div className="flex items-center gap-6">
          <MinusCircle
            className={`w-6 h-6 cursor-pointer transition-colors ${
              quantity === 1 ? "text-gray-300" : "text-[#b89d7a] hover:text-[#3a3a3a]"
            }`}
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <span className="w-8 text-center text-lg">{quantity}</span>
          <PlusCircle
            className="w-6 h-6 text-[#b89d7a] hover:text-[#3a3a3a] cursor-pointer transition-colors"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>

      <button
        className="w-full py-4 bg-[#3a3a3a] text-white tracking-widest text-sm hover:bg-[#b89d7a] transition-all duration-300 rounded-sm mt-4"
        onClick={() => {
          cart.addItem({
            item: productInfo,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductInfo;