"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SlideItem {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/new_arrivals.png",
    url: "/collections/676518238e2779ab899eb999",
    bg: "bg-cover",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/trending.png",
    url: "/collections/676517f88e2779ab899eb993",
    bg: "bg-cover",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/fashion.png",
    url: "/collections/6765175d8e2779ab899eb980",
    bg: "bg-cover",
  },
  {
    id: 4,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/spring.png",
    url: "/collections/674b0682fb5dc48b8e51bc34",
    bg: "bg-cover",
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual slide selection
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative lg:h-[calc(100vh-80px)] h-[calc(50vh-80px)] overflow-hidden">
      {/* Slides container */}
      <div
        className="flex w-max h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className={`w-screen ${slide.bg}`}>
            <Image
              src={slide.img}
              alt={slide.title}
              width={2000}
              height={1000}
              className="w-full h-full object-cover"
              priority={slide.id === 1} // Only prioritize first image for performance
            />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 transition-all duration-300 ${
              currentSlide === index ? "scale-150" : "scale-100"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && (
              <span className="w-1.5 h-1.5 block bg-gray-600 rounded-full m-auto" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slide;