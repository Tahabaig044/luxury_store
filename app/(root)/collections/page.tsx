import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

interface CollectionType {
  _id: string;
  title: string;
  description?: string;
  image: string;
}

const Collections = async () => {
  const collections = await getCollections();

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-12 bg-[#f8f3ed]">
      <div className="max-w-7xl mx-auto">
        {/* Luxurious Header with Gold Accent */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#2a2a2a] mb-6 tracking-wider">
            OUR COLLECTIONS
          </h1>
          <div className="relative inline-block">
            <div className="w-24 h-px bg-[#b89d7a] mx-auto"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#b89d7a] rotate-45"></div>
          </div>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((collection: CollectionType) => (
            <div key={collection._id} className="group relative">
              <Link
                href={`/collections/${collection._id}`}
                className="block overflow-hidden"
              >
                {/* Image Container with Elegant Overlay */}
                <div className="relative aspect-[8/4] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Link>

              {/* Collection Info with Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center translate-y-0 group-hover:-translate-y-4 transition-transform duration-500">
                <h2 className="font-serif text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2 tracking-wider">
                  {collection.title}
                </h2>
                <Link
                  href={`/collections/${collection._id}`}
                  className="inline-block text-xs tracking-widest text-white border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:border-white"
                >
                  EXPLORE COLLECTION
                </Link>
              </div>

              {/* Static Title Below */}
              <div className="mt-4 text-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="font-serif text-lg text-[#3a3a3a] tracking-wider">
                  {collection.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Luxurious View All Button */}
        <div className="text-center mt-20">
          <Link
            href="/collections"
            className="inline-block border border-[#b89d7a] text-[#b89d7a] px-10 py-4 font-light tracking-widest text-sm hover:bg-[#b89d7a] hover:text-white transition-all duration-500 relative overflow-hidden group"
          >
            <span className="relative z-10">VIEW ALL COLLECTIONS</span>
            <span className="absolute inset-0 bg-[#b89d7a] transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;

// import { getCollections } from "@/lib/actions/actions";
// import Image from "next/image";
// import Link from "next/link";

// const Collections = async () => {
//   const collections = await getCollections();

//   return (
//     <div className="px-6 py-8 overflow-x-auto scrollbar-hide bg-gray-50">
//       <p className="text-heading1-bold">Collections</p>
//       {!collections || collections.length === 0 ? (
//         <p className="text-body-bold">No collections found</p>
//       ) : (
//         <div className="flex flex-wrap items-center justify-center gap-8">
//           {collections.map((collection: CollectionType) => (
//             <Link href={`/collections/${collection._id}`} key={collection._id}>
//               <Image
//                 key={collection._id}
//                 src={collection.image}
//                 alt={collection.title}
//                 width={350}
//                 height={200}
//                 className="rounded-lg cursor-pointer"
//               />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Collections;
