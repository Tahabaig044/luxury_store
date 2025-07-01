"use client";

import useCart from "@/lib/hooks/useCart";
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface ProductType {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

const Navbar = () => {
  const [wishlist, setWishlist] = useState<ProductType[]>([]);
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const fetchWishlist = async () => {
    if (user) {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setWishlist(data.wishlist || []);
      } catch (err) {
        console.log("[wishlist_FETCH]", err);
      }
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  const [query, setQuery] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query) {
      router.push(`/search/${query}`);
    }
  };

  return (
    <div className="sticky top-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-[#f9f5f0] border-b border-[#e8e3dc]">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/sara2.png"
          alt="Website logo"
          width={140}
          height={80}
          className="w-auto h-10 md:h-12"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex gap-8 text-sm tracking-wider font-medium">
        <Link
          href="/"
          className={`hover:text-[#b89d7a] transition-colors duration-300 ${
            pathname === "/" && "text-[#b89d7a]"
          }`}
        >
          HOME
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-[#b89d7a] transition-colors duration-300 ${
            pathname === "/orders" && "text-[#b89d7a]"
          }`}
        >
          ORDERS
        </Link>
        <Link
          href="/collections"
          className={`hover:text-[#b89d7a] transition-colors duration-300 ${
            pathname === "/collections" && "text-[#b89d7a]"
          }`}
        >
          COLLECTIONS
        </Link>
        <Link
          href="/about"
          className={`hover:text-[#b89d7a] transition-colors duration-300 ${
            pathname === "/about" && "text-[#b89d7a]"
          }`}
        >
          ABOUT
        </Link>
        <Link
          href="/contact"
          className={`hover:text-[#b89d7a] transition-colors duration-300 ${
            pathname === "/contact" && "text-[#b89d7a]"
          }`}
        >
          CONTACT
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center justify-between gap-2 bg-white border border-[#e8e3dc] p-2 rounded-sm flex-1 max-w-md mx-8">
        <input
          className="flex-1 bg-transparent outline-none pl-2 text-sm tracking-wider"
          placeholder="Search our collection..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button
          disabled={query === ""}
          onClick={() => query && router.push(`/search/${query}`)}
          className="text-[#b89d7a] hover:text-[#3a3a3a] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Wishlist */}
        <Link 
          href={user ? "/wishlist" : "/sign-in"} 
          className="hidden md:flex items-center relative"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3a3a3a] hover:text-[#b89d7a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#b89d7a] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
              {wishlist.length}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link href="/cart" className="hidden md:flex items-center relative">
          <ShoppingCart className="h-6 w-6 text-[#3a3a3a] hover:text-[#b89d7a] transition-colors" />
          {cart.cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#b89d7a] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
              {cart.cartItems.length}
            </span>
          )}
        </Link>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu className="text-[#3a3a3a] text-2xl cursor-pointer" />
            </SheetTrigger>
            <SheetContent className="bg-[#f9f5f0] border-l border-[#e8e3dc]">
              <div className="flex flex-col h-full pt-12">
                {/* Mobile Search */}
                <div className="flex items-center justify-between gap-2 bg-white border border-[#e8e3dc] p-2 rounded-sm mb-8">
                  <input
                    className="flex-1 bg-transparent outline-none pl-2 text-sm"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleSearch}
                  />
                  <button
                    disabled={query === ""}
                    onClick={() => query && router.push(`/search/${query}`)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#b89d7a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Navigation */}
                <ul className="flex flex-col gap-6 font-medium text-[#3a3a3a] tracking-wider">
                  <li>
                    <Link 
                      href="/" 
                      className={`py-2 border-b border-[#e8e3dc] block ${pathname === "/" && "text-[#b89d7a]"}`}
                      onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={user ? "/orders" : "/sign-in"} 
                      className={`py-2 border-b border-[#e8e3dc] block ${pathname === "/orders" && "text-[#b89d7a]"}`}
                      onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}
                    >
                      ORDERS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/collections" 
                      className={`py-2 border-b border-[#e8e3dc] block ${pathname === "/collections" && "text-[#b89d7a]"}`}
                      onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}
                    >
                      COLLECTIONS
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      className={`py-2 border-b border-[#e8e3dc] block ${pathname === "/about" && "text-[#b89d7a]"}`}
                      onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      className={`py-2 border-b border-[#e8e3dc] block ${pathname === "/contact" && "text-[#b89d7a]"}`}
                      onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}
                    >
                      CONTACT
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href={user ? "/wishlist" : "/sign-in"} 
                      className="py-2 border-b border-[#e8e3dc] flex items-center gap-2"
                      onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}
                    >
                      WISHLIST
                      {wishlist.length > 0 && (
                        <span className="bg-[#b89d7a] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {wishlist.length}
                        </span>
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/cart" 
                      className="py-2 border-b border-[#e8e3dc] flex items-center gap-2"
                      onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}
                    >
                      CART
                      {cart.cartItems.length > 0 && (
                        <span className="bg-[#b89d7a] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {cart.cartItems.length}
                        </span>
                      )}
                    </Link>
                  </li>
                </ul>

                <div className="mt-auto pt-6 border-t border-[#e8e3dc]">
                  {user ? (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#3a3a3a]">Signed in as</span>
                      <UserButton afterSignOutUrl="/sign-in" />
                    </div>
                  ) : (
                    <Link 
                      href="/sign-in" 
                      className="flex items-center gap-2 text-[#3a3a3a] hover:text-[#b89d7a] transition-colors"
                      onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))}
                    >
                      <CircleUserRound className="h-5 w-5" />
                      SIGN IN
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* User Auth */}
        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in" className="hidden md:block">
            <CircleUserRound className="h-6 w-6 text-[#3a3a3a] hover:text-[#b89d7a] transition-colors" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;