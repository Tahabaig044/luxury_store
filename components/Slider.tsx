// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const slides = [
//   {
//     id: 1,
//     title: "Summer Collection",
//     description: "Elegant designs for the warm season",
//     img: "/new_arrivals.png",
//     url: "/collections/676518238e2779ab899eb999",
//     textColor: "text-white",
//     cta: "SHOP NOW",
//   },
//   {
//     id: 2,
//     title: "Winter Collection",
//     description: "Luxurious fabrics for colder days",
//     img: "/trending.png",
//     url: "/collections/676517f88e2779ab899eb993",
//     textColor: "text-white",
//     cta: "DISCOVER",
//   },
//   {
//     id: 3,
//     title: "Spring Collection",
//     description: "Fresh patterns and delicate embroidery",
//     img: "/fashion.png",
//     url: "/collections/6765175d8e2779ab899eb980",
//     textColor: "text-white",
//     cta: "EXPLORE",
//   },
//   {
//     id: 4,
//     title: "Festive Collection",
//     description: "Celebration-ready ensembles",
//     img: "/spring.png",
//     url: "/collections/674b0682fb5dc48b8e51bc34",
//     textColor: "text-white",
//     cta: "VIEW COLLECTION",
//   },
// ];

// const Slide = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-[80vh] w-full overflow-hidden">
//       <div
//         className="flex h-full transition-all duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}vw)` }}
//       >
//         {slides.map((slide) => (
//           <div key={slide.id} className="relative w-screen h-full">
//             {/* Image with overlay */}
//             <div className="absolute inset-0 bg-black/30 z-10"></div>
//             <Image
//               src={slide.img}
//               alt={slide.title}
//               fill
//               className="object-cover"
//               priority
//               quality={100}
//             />

//             {/* Text content */}
//             <div className={`absolute z-20 ${slide.textColor} inset-0 flex flex-col justify-center items-center text-center px-4`}>
//               <div className="max-w-2xl space-y-6">
//                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wider mb-2">
//                   {slide.title}
//                 </h2>
//                 <p className="text-lg md:text-xl tracking-wider mb-8">
//                   {slide.description}
//                 </p>
//                 <Link
//                   href={slide.url}
//                   className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 tracking-widest text-sm"
//                 >
//                   {slide.cta}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               current === index ? "bg-white w-6" : "bg-white/50"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Optional: Navigation arrows */}
//       <button
//         onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
//         className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white hover:text-gray-300 transition-colors"
//         aria-label="Previous slide"
//       >
//         <svg xmlns="/new_arrivals.png" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
//       <button
//         onClick={() => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
//         className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white hover:text-gray-300 transition-colors"
//         aria-label="Next slide"
//       >
//         <svg xmlns="/new_arrivals.png" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default Slide;
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "/new_arrivals.png",
    url: "/collections/676518238e2779ab899eb999",
    bg: "bg-cover",
    // bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:h-[calc(100vh-80px)] h-[calc(50vh-80px)] overflow-hidden ">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg}`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            
            {/* IMAGE CONTAINER */}
            {/* <Link href={slide.url}> */}

            
            <div className="">
              <Image
                src={slide.img}
                alt=""
                width={2000} height={1000} className="w-screen object-cover"
                // className=" h-full object-cover rounded-lg shadow-md"
                // className="object-cover"
              />
            </div>
            {/* </Link> */}
          </div>
        ))}
      </div>
      <div className="absolute m-auto lg:bottom-8 flex gap-4 lg:left-[50%] left-[40%]">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
