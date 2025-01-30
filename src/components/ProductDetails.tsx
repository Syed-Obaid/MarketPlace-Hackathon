"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleRight, FaStar } from "react-icons/fa";
import { Product } from "../../types/products";
import { useCart } from "react-use-cart";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div>
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 bg-white">
        {/* Breadcrumb */}
        <div className="text-[16px] px-4 flex flex-wrap gap-4 md:gap-0 items-center space-x-2 text-[#9f9f9f] py-2 my-3 font-medium">
          <Link className="flex items-center" href="/">
            Home <FaAngleRight className="pl-2" />
          </Link>
          <Link className="flex items-center" href="../shop">
            <span className="font-light">Shop </span>
            <FaAngleRight />
          </Link>
          <span className="text-[20px] px-2">|</span>
          <span className="text-black">{product.name}</span>
        </div>

        {/* Product Details */}
        <section className="flex flex-wrap justify-evenly items-center py-12 my-5">
          {/* Image Section */}
          <div>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-5">
                {[
                  product.image,
                  product.image,
                  product.image,
                  product.image,
                ].map((img, index) => (
                  <div key={index} className="bg-[#FFF9E5]">
                    {img && (
                      <Image
                        src={urlFor(img).url()}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-lg shadow-md"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-[#FFF9E5]">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={350}
                    height={350}
                    className="rounded-lg shadow-md"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div>
            <h1 className="text-[42px] text-black max-w-md">{product.name}</h1>
            <p className="text-[24px] text-[#9F9F9F]">Rs. ${product.price}</p>
            <p className="flex space-x-2 text-[#FFDA5B] text-[20px]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p className="text-[13px] text-[#9F9F9F] max-w-sm py-2">
              {product.description}
            </p>
            <p className="text-[14px] text-[#9F9F9F]">Size</p>
            <div className="flex space-x-5">
              {["L", "XL", "XS"].map((size) => (
                <p
                  key={size}
                  className={`text-[13px] ${
                    size === "L" ? "bg-[#FFF9E5]" : "bg-[#e9e7e7]"
                  } w-10 p-2 text-center rounded`}
                >
                  {size}
                </p>
              ))}
            </div>
            <p className="text-[14px] text-[#9F9F9F]">Color</p>
            <div className="flex space-x-3">
              {["#CDBA7B", "#000000", "#816DFA"].map((color, index) => (
                <p
                  key={index}
                  style={{ backgroundColor: color }}
                  className="text-[13px] w-5 p-3 text-center rounded-full"
                />
              ))}
            </div>
            <div className="flex space-x-5 py-5">
              <div className="flex justify-evenly items-center space-x-4 text-[16px] border-2 border-[#9F9F9F] max-w-[130px] text-black px-2 content-center rounded">
                <button onClick={decrement} className="p-2">
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={increment} className="p-2">
                  +
                </button>
              </div>
              <button
                key={product._id}
                onClick={() =>
                  addItem({
                    id: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1, // Default quantity for adding to cart
                  })
                }
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProductDetails;
