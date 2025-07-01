"use client"

import Loader from "@/components/Loader"
import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard"
import { getProductDetails } from "@/lib/actions/actions"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { Heart } from "lucide-react"
import Link from "next/link"

interface ProductType {
  _id: string;
  title: string;
  name: string;
  category: string;
  price: number;
  expense: number;
  media: string[];
}

const Wishlist = () => {
  const { user } = useUser()
  const [loading, setLoading] = useState(true)
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null)
  const [wishlist, setWishlist] = useState<ProductType[]>([])

  const getUser = async () => {
    try {
      const res = await fetch("/api/users")
      const data = await res.json()
      setSignedInUser(data)
      setLoading(false)
    } catch (err) {
      console.log("[users_GET]", err)
    }
  }

  useEffect(() => {
    if (user) {
      getUser()
    }
  }, [user])

  const getWishlistProducts = async () => {
    setLoading(true)
    if (!signedInUser) return

    try {
      const wishlistProducts = await Promise.all(
        signedInUser.wishlist.map(async (productId) => {
          const res = await getProductDetails(productId)
          return res
        })
      )
      setWishlist(wishlistProducts)
    } catch (error) {
      console.error("Error fetching wishlist products:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts()
    }
  }, [signedInUser])

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser)
    // Refresh wishlist after update
    getWishlistProducts()
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      {/* <Navbar /> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Luxurious Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-light text-[#2a2a2a] mb-4 tracking-wider">
            YOUR WISHLIST
          </h1>
          <div className="w-24 h-px bg-[#b89d7a] mx-auto"></div>
        </div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <div className="flex justify-center mb-6">
              <Heart className="w-16 h-16 text-gray-300" strokeWidth={1} />
            </div>
            <p className="text-lg text-gray-600 mb-6">Your wishlist is currently empty</p>
            <Link
              href="/collections"
              className="inline-block border border-[#b89d7a] text-[#b89d7a] px-8 py-3 font-light tracking-widest text-sm hover:bg-[#b89d7a] hover:text-white transition-all duration-300"
            >
              BROWSE COLLECTIONS
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <ProductCard 
                key={product._id} 
                product={product} 
                updateSignedInUser={updateSignedInUser} 
                showRemoveFromWishlist={true}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export const dynamic = "force-dynamic"
export default Wishlist