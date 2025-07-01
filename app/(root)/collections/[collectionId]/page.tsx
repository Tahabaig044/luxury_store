import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";

interface ProductType {
  _id: string;
  title: string;
  name: string;
  category: string;
  price: number;
  expense: number;
  media: string[];
}

const CollectionDetails = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionId);

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={collectionDetails.image}
          fill
          alt={collectionDetails.title}
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        <div className="absolute bottom-0 left-0 right-0 p-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white tracking-wider mb-4">
            {collectionDetails.title.toUpperCase()}
          </h1>
          <div className="w-24 h-px bg-[#b89d7a] mx-auto mb-6" />
          <p className="text-white/90 max-w-2xl mx-auto">
            {collectionDetails.description}
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-[#3a3a3a] tracking-wider mb-2">
            COLLECTION PIECES
          </h2>
          <p className="text-gray-500">
            {collectionDetails.products.length} exquisite items
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {collectionDetails.products.map((product: ProductType) => (
            <ProductCard
              key={product._id}
              product={{
                ...product,
                name: product.title,
                expense: product.expense || 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
export const dynamic = "force-dynamic";