import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails, getRelatedProducts } from "@/lib/actions/actions";

const ProductDetails = async ({ params }: { params: { productId: string }}) => {
  const productDetails = await getProductDetails(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);

  return (
    <div className="min-h-screen bg-[#f9f5f0]">
      {/* <Navbar /> */}
      
      {/* Main Product Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <Gallery productMedia={productDetails.media} />
          </div>
          
          <div className="w-full lg:w-1/2">
            <ProductInfo productInfo={productDetails} />
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#e8e3dc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-[#3a3a3a] tracking-wider mb-4">
              COMPLETE YOUR LOOK
            </h2>
            <div className="w-24 h-px bg-[#b89d7a] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {relatedProducts?.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default ProductDetails;