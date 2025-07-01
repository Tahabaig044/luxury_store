"use client";

import Image from "next/image";
import { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="flex flex-col gap-6">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg border border-[#e8e3dc]">
        <Image
          src={mainImage}
          fill
          alt="Product"
          className="object-cover transition-opacity duration-500"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-3 overflow-x-auto pb-2 tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
          <div 
            key={index}
            className={`relative aspect-square w-20 h-20 flex-shrink-0 cursor-pointer transition-all duration-300 ${
              mainImage === image ? "ring-2 ring-[#b89d7a]" : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image}
              fill
              alt={`Thumbnail ${index + 1}`}
              className="object-cover rounded-sm"
              quality={80}
              sizes="80px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;