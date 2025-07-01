"use client"

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f5f0] flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-12 rounded-lg shadow-sm border border-[#e8e3dc] text-center">
        {/* Success Icon */}
        <div className="mx-auto w-24 h-24 flex items-center justify-center bg-[#b89d7a]/10 rounded-full mb-8">
          <CheckCircle className="w-16 h-16 text-[#b89d7a]" strokeWidth={1.5} />
        </div>

        {/* Success Message */}
        <h1 className="font-serif text-3xl text-[#3a3a3a] tracking-wider mb-4">
          PAYMENT SUCCESSFUL
        </h1>
        <div className="w-16 h-px bg-[#b89d7a] mx-auto mb-6"></div>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
          A confirmation email has been sent to your registered address.
        </p>

        {/* Continue Shopping Button */}
        <Link
          href="/"
          className="inline-block border border-[#3a3a3a] text-[#3a3a3a] hover:bg-[#3a3a3a] hover:text-white px-8 py-3 font-light tracking-widest text-sm transition-all duration-300"
        >
          CONTINUE SHOPPING
        </Link>

        {/* Order Help */}
        <p className="text-xs text-gray-400 mt-8">
          Need help? <a href="#" className="underline hover:text-[#b89d7a]">Contact us</a>
        </p>
      </div>
    </div>
  );
};

export default SuccessfulPayment;