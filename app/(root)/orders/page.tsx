import { getOrders } from "@/lib/actions/actions";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Orders = async () => {
  const { userId } = auth();
  const orders = await getOrders(userId as string);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-serif font-light text-[#2a2a2a] mb-4 tracking-wider">
          YOUR ORDERS
        </h1>
        <div className="w-24 h-px bg-[#b89d7a] mx-auto"></div>
      </div>

      {/* Empty State */}
      {!orders || orders.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-gray-600 mb-6">You haven't placed any orders yet</p>
          <Link
            href="/collections"
            className="inline-block border border-[#b89d7a] text-[#b89d7a] px-8 py-3 font-light tracking-widest text-sm hover:bg-[#b89d7a] hover:text-white transition-all duration-300"
          >
            SHOP COLLECTIONS
          </Link>
        </div>
      ) : (
        <div className="space-y-12">
          {orders?.map((order: OrderType) => (
            <div key={order._id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Order Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-sm text-gray-500 tracking-widest">ORDER NUMBER</p>
                  <p className="text-base font-medium">{order._id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 tracking-widest">TOTAL</p>
                  <p className="text-lg font-serif text-[#b89d7a]">${order.totalAmount.toFixed(2)}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="divide-y divide-gray-100">
                {order.products.map((orderItem: OrderItemType) => (
                  <div key={orderItem._id} className="p-6 flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="relative aspect-square w-full sm:w-32 flex-shrink-0">
                      <Image
                        src={orderItem.product.media[0]}
                        alt={orderItem.product.title}
                        fill
                        className="object-cover rounded"
                        quality={100}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-[#2a2a2a] mb-2">{orderItem.product.title}</h3>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        {orderItem.color && (
                          <div>
                            <span className="font-medium">Color:</span> {orderItem.color}
                          </div>
                        )}
                        {orderItem.size && (
                          <div>
                            <span className="font-medium">Size:</span> {orderItem.size}
                          </div>
                        )}
                        <div>
                          <span className="font-medium">Price:</span> ${orderItem.product.price.toFixed(2)}
                        </div>
                        <div>
                          <span className="font-medium">Qty:</span> {orderItem.quantity}
                        </div>
                        <div className="col-span-2">
                          <span className="font-medium">Subtotal:</span> ${(orderItem.product.price * orderItem.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-right">
                <Link
                  href={`/orders/${order._id}`}
                  className="inline-block text-sm tracking-widest text-[#b89d7a] border-b border-[#b89d7a]/50 pb-1 hover:border-[#b89d7a] transition-colors duration-300"
                >
                  VIEW ORDER DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;

export const dynamic = "force-dynamic";