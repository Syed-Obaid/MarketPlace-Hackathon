"use client";
import { useCart } from "react-use-cart";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaAngleRight } from "react-icons/fa";

export default function CartPage() {
  const {
    isEmpty,
    items,
    totalItems,
    totalUniqueItems,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  if (isEmpty) {
    return (
      <p className="text-center text-xl font-semibold mt-10">
        Your cart is empty.
      </p>
    );
  }

  return (
    <>
<section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 pb-10">
        <div
          className=""
          style={{
            backgroundImage: "url('/shop.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col items-center py-32">
            <h1 className="text-[60px] font-bold">
              <Image src={"/shoplogo.png"} alt="logo" width={70} height={70}/>
            </h1>
            <p className="text-[48px] font-medium text-black">Cart</p>
            <button className="text-[16px] flex items-center shadow-slate-400 py-2 rounded-3xl my-3 text-black">
              <Link href="../">Home</Link> <FaAngleRight />
              <Link href="../pages/shop">Cart</Link>
            </button>
          </div>
        </div>
      </section>




    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
        Your Cart
      </h2>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 gap-4"
          >
            {/* Product Details */}
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              {item.image && (
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded"
                  />
              )}
              <div>
                <p className="font-medium text-center sm:text-left">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500 text-center sm:text-left">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-500 text-center sm:text-left">
                  Price: ${item.price.toFixed(2)} each
                </p>
              </div>
            </div>

            {/* Quantity Controls & Total Price */}
            <div className="flex items-center space-x-4">
              <p className="font-medium hidden sm:block">
                ${(item.price * (item.quantity ?? 0)).toFixed(2)}
              </p>
              <button
                onClick={() =>
                  updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
                }
                className="px-3 py-1 bg-gray-200 rounded text-lg font-semibold"
              >
                +
              </button>
              <button
                onClick={() => {
                  if ((item.quantity ?? 0) > 1) {
                    updateItemQuantity(item.id, (item.quantity ?? 0) - 1);
                  }
                }}
                className="px-3 py-1 bg-gray-200 rounded text-lg font-semibold"
                disabled={item.quantity === 1} // Disable button if quantity is 1
                >
                -
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Cart Total & Checkout Button */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
        <Link
          href="./checkout"
          className="bg-blue-500 text-white px-6 py-3 rounded w-full sm:w-auto text-center"
          >
          Proceed to Checkout
        </Link>
      </div>
    </div>
          </>
  );
}
