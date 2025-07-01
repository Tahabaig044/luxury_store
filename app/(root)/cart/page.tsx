// "use client";

// import useCart from "@/lib/hooks/useCart";

// import { useUser } from "@clerk/nextjs";
// import { MinusCircle, PlusCircle, Trash } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const Cart = () => {
//   const router = useRouter();
//   const { user } = useUser();
//   const cart = useCart();

//   const total = cart.cartItems.reduce(
//     (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
//     0
//   );
//   const totalRounded = parseFloat(total.toFixed(2));

//   const customer = {
//     clerkId: user?.id,
//     email: user?.emailAddresses[0].emailAddress,
//     name: user?.fullName,
//   }; 

//   const handleCheckout = async () => {
//     try {
//       if (!user) {
//         router.push("sign-in");
//       } else {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
//           method: "POST",
//           body: JSON.stringify({ cartItems: cart.cartItems, customer }),
//         });
//         const data = await res.json();
//         window.location.href = data.url;
//         console.log(data);
//       }
//     } catch (err) {
//       console.log("[checkout_POST]", err);
//     }
//   };

//   return (
//     <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
//       <div className="w-2/3 max-lg:w-full">
//         <p className="text-heading3-bold">Shopping Cart</p>
//         <hr className="my-6" />

//         {cart.cartItems.length === 0 ? (
//           <p className="text-body-bold">No item in cart</p>
//         ) : (
//           <div>
//             {cart.cartItems.map((cartItem) => (
//               <div className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between">
//                 <div className="flex items-center">
//                   <Image
//                     src={cartItem.item.media[0]}
//                     width={100}
//                     height={100}
//                     className="rounded-lg w-32 h-32 object-cover"
//                     alt="product"
//                   />
//                   <div className="flex flex-col gap-3 ml-4">
//                     <p className="text-body-bold">{cartItem.item.title}</p>
//                     {cartItem.color && (
//                       <p className="text-small-medium">{cartItem.color}</p>
//                     )}
//                     {cartItem.size && (
//                       <p className="text-small-medium">{cartItem.size}</p>
//                     )}
//                     <p className="text-small-medium">${cartItem.item.price}</p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 items-center">
//                   <MinusCircle
//                     className="hover:text-red-1 cursor-pointer"
//                     onClick={() => cart.decreaseQuantity(cartItem.item._id)}
//                   />
//                   <p className="text-body-bold">{cartItem.quantity}</p>
//                   <PlusCircle
//                     className="hover:text-red-1 cursor-pointer"
//                     onClick={() => cart.increaseQuantity(cartItem.item._id)}
//                   />
//                 </div>

//                 <Trash
//                   className="hover:text-red-1 cursor-pointer"
//                   onClick={() =>cart.removeItem(cartItem.item._id)}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
//         <p className="text-heading4-bold pb-4">
//           Summary{" "}
//           <span>{`(${cart.cartItems.length} ${
//             cart.cartItems.length > 1 ? "items" : "item"
//           })`}</span>
//         </p>
//         <div className="flex justify-between text-body-semibold">
//           <span>Total Amount</span>
//           <span>$ {totalRounded}</span>
//         </div>
//         <button
//           className="border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white"
//           onClick={handleCheckout}
//         >
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
"use client";

import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    if (!user) return router.push("/sign-in");

    if (Object.values(shippingAddress).some(val => val.trim() === "")) {
      alert("Please fill in all shipping address fields.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cartItems: cart.cartItems,
          customer,
          totalAmount: totalRounded,
          shippingAddress: shippingAddress,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        cart.clearCart();
        setIsLoading(true);
        router.push(`/payment_success?orderId=${data.orderId}`);
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to create order');
      }
    } catch (err: any) {
      console.log(err);
      setIsLoading(false);
      alert(`Something went wrong: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-light text-[#3a3a3a] tracking-wider">
            YOUR SHOPPING CART
          </h1>
          <div className="w-24 h-px bg-[#b89d7a] mx-auto mt-4"></div>
        </div>

        {cart.cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-[#3a3a3a] mb-6">Your cart is currently empty</p>
            <button 
              onClick={() => router.push("/")}
              className="border border-[#b89d7a] text-[#b89d7a] px-8 py-3 font-light tracking-widest text-sm hover:bg-[#b89d7a] hover:text-white transition-all duration-300"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="space-y-6">
                {cart.cartItems.map((cartItem) => (
                  <div
                    key={`${cartItem.item._id}-${cartItem.size || ""}-${cartItem.color || ""}`}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-6 rounded-lg shadow-sm border border-transparent hover:border-[#b89d7a] transition-all duration-300 group"
                  >
                    <div className="flex items-start sm:items-center gap-6">
                      <div className="relative w-32 h-32 overflow-hidden">
                        <Image
                          src={cartItem.item.media[0]}
                          fill
                          className="object-cover rounded"
                          alt={cartItem.item.title}
                        />
                      </div>
                      <div>
                        <p className="font-serif text-lg text-[#3a3a3a] group-hover:text-[#b89d7a] transition-colors duration-300">
                          {cartItem.item.title}
                        </p>
                        {cartItem.color && (
                          <p className="text-sm text-gray-500 mt-1">
                            Color: <span className="capitalize">{cartItem.color}</span>
                          </p>
                        )}
                        {cartItem.size && (
                          <p className="text-sm text-gray-500">Size: {cartItem.size}</p>
                        )}
                        <p className="text-lg font-light mt-2">${cartItem.item.price.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                      <MinusCircle
                        className="w-5 h-5 text-gray-400 hover:text-[#b89d7a] cursor-pointer transition-colors"
                        onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                      />
                      <p className="font-medium w-6 text-center">{cartItem.quantity}</p>
                      <PlusCircle
                        className="w-5 h-5 text-gray-400 hover:text-[#b89d7a] cursor-pointer transition-colors"
                        onClick={() => cart.increaseQuantity(cartItem.item._id)}
                      />
                      <Trash
                        className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors ml-2"
                        onClick={() => cart.removeItem(cartItem.item._id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#e8e3dc]">
                <h3 className="font-serif text-xl text-[#3a3a3a] mb-6 pb-2 border-b border-[#e8e3dc]">
                  ORDER SUMMARY
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${totalRounded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-[#e8e3dc]">
                    <span className="font-serif">Total</span>
                    <span className="font-serif text-lg">${totalRounded}</span>
                  </div>
                </div>

                <h4 className="font-serif text-lg text-[#3a3a3a] mb-4 pt-4 border-t border-[#e8e3dc]">
                  SHIPPING ADDRESS
                </h4>
                <div className="space-y-3 mb-6">
                  {["street", "city", "state", "postalCode", "country", "phone"].map((field) => (
                    <input
                      key={field}
                      name={field}
                      type={field === "phone" ? "tel" : "text"}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                      value={(shippingAddress as any)[field]}
                      onChange={handleAddressChange}
                      className="w-full border border-[#e8e3dc] p-3 rounded text-sm focus:border-[#b89d7a] focus:ring-1 focus:ring-[#b89d7a] outline-none transition-all"
                    />
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-md font-light tracking-widest transition-all duration-300 ${
                    isLoading || cart.cartItems.length === 0
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-[#3a3a3a] hover:bg-[#b89d7a] text-white"
                  }`}
                  onClick={handleCheckout}
                  disabled={isLoading || cart.cartItems.length === 0}
                >
                  {isLoading ? "PROCESSING..." : "PLACE ORDER"}
                </button>

                <button 
                  onClick={() => router.push("/")}
                  className="w-full mt-4 border border-[#3a3a3a] text-[#3a3a3a] py-3 rounded-md font-light tracking-widest hover:bg-[#3a3a3a] hover:text-white transition-all duration-300"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;