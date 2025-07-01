"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";

interface ProductType {
  _id: string;
  title: string;
  name: string;
  category: string;
  price: number;
  expense: number;
  media: string[];
}

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const fallbackImage = "/default-image.jpg";
  const isOnSale = product.expense && product.expense > product.price;

  return (
    <Link 
      href={`/products/${product._id}`} 
      className="w-full flex flex-col group bg-white relative overflow-hidden"
    >
      {/* Sale ribbon */}
      {isOnSale && (
        <div className="absolute top-4 left-4 bg-[#b89d7a] text-white text-xs px-3 py-1 z-30 tracking-widest">
          SALE
        </div>
      )}

      {/* New arrival ribbon (optional) */}
      {/* <div className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 z-30 tracking-widest">
        NEW
      </div> */}

      {/* Image container with elegant hover effect */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {/* Primary image */}
        <Image
          src={product.media[0] || fallbackImage}
          alt={product.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Secondary image overlay (appears on hover) */}
        {product.media[1] && (
          <Image
            src={product.media[1]}
            alt={product.title}
            fill
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
        
        {/* Quick add to cart (appears on hover) */}
        <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <span className="text-sm tracking-widest">QUICK ADD</span>
        </div>
        
        {/* Wishlist button */}
        <div className="absolute top-4 right-4 z-30">
          <HeartFavorite product={product} />
        </div>
      </div>

      {/* Product info */}
      <div className="p-4 flex flex-col gap-1 text-center">
        <h2 className="font-serif text-[15px] text-[#333] tracking-wider mb-1">
          {product.title.toUpperCase()}
        </h2>
        <p className="text-xs text-gray-500 tracking-widest mb-3">
          {product.category.toUpperCase()}
        </p>
        
        {/* Price section */}
        <div className="flex justify-center items-center gap-2">
          {isOnSale ? (
            <>
              <span className="text-gray-400 text-sm line-through">
                ${product.expense.toFixed(2)}
              </span>
              <span className="text-[#b89d7a] text-sm font-medium">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-[#333] text-sm font-medium">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {/* Gold accent border (appears on hover) */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#b89d7a] transition-all duration-300 z-10 pointer-events-none"></div>
    </Link>
  );
};

export default ProductCard;