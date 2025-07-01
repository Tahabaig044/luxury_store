import ProductCard from '@/components/ProductCard'
import { getSearchedProducts } from '@/lib/actions/actions'

interface ProductType {
  _id: string;
  title: string;
  name: string;
  category: string;
  price: number;
  expense: number;
  media: string[];
}

const SearchPage = async ({ params }: { params: { query: string }}) => {
  const searchedProducts = await getSearchedProducts(params.query)
  const decodedQuery = decodeURIComponent(params.query)

  return (
    <div className='max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      {/* Page Header */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-2'>
          Search Results for "{decodedQuery}"
        </h1>
        <p className='text-gray-500'>
          {searchedProducts?.length || 0} items found
        </p>
      </div>

      {/* No Results Message */}
      {!searchedProducts || searchedProducts.length === 0 && (
        <div className='text-center py-20'>
          <p className='text-lg text-gray-600 mb-4'>No results found for "{decodedQuery}"</p>
          <button className='px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors'>
            Continue Shopping
          </button>
        </div>
      )}

      {/* Products Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {searchedProducts?.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {/* Load More Button (optional) */}
      {searchedProducts && searchedProducts.length > 0 && (
        <div className='text-center mt-12'>
          <button className='px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors'>
            Load More
          </button>
        </div>
      )}
    </div>
  )
}

export const dynamic = "force-dynamic";
export default SearchPage