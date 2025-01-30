"use client";
import { useCart } from "react-use-cart";
import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";


export default function CheckoutPage() {
  const { cartTotal, items } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    zipCode: "",
    city: "",
    address1: "",
    address2: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert("Your order has been placed successfully!");
    }, 2000);
  };

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
            <p className="text-[48px] font-medium text-black">Checkout</p>
            <button className="text-[16px] flex items-center shadow-slate-400 py-2 rounded-3xl my-3 text-black">
              <Link href="../">Home</Link> <FaAngleRight />
              <Link href="../pages/shop">Checkout</Link>
            </button>
          </div>
        </div>
      </section>


    
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
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
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
            <p className="font-medium">
              ${(item.price * (item.quantity ?? 1)).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Shipping Form */}
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Pakistan">Pakistan</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-xs">{errors.country}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-xs">{errors.zipCode}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              />
            {errors.city && (
              <p className="text-red-500 text-xs">{errors.city}</p>
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium">Address 1</label>
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              />
            {errors.address1 && (
              <p className="text-red-500 text-xs">{errors.address1}</p>
            )}
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium">
              Address 2 (Optional)
            </label>
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </form>
      </div>

      {/* Checkout Button */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
      </div>

      <button
        onClick={handleCheckout}
        disabled={isProcessing}
        className={`mt-6 w-full bg-blue-500 text-white px-6 py-3 rounded ${
          isProcessing ? "bg-gray-400 cursor-not-allowed" : ""
        }`}
      >
        {isProcessing ? "Processing..." : "Place Order"}
      </button>
    </div>
          </>
  );
}
