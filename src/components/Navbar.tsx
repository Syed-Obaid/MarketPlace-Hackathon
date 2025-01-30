"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { useCart } from "react-use-cart";
function Navbar() {
  const { totalItems } = useCart();
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  const pathname = usePathname();

  // Dynamic styles for the navbar
  const navbarStyle =
    pathname === "/" ? "bg-[#FBEBB5] text-black" : "bg-white text-black";

  return (
    <>
      <nav className={` ${navbarStyle}`}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center h-16">
            <div>{/* <img src="/Logo.png" alt="" /> */}</div>
            <div className=" hidden md:block">
              <div className="flex items-center  space-x-14 text-base">
                <Link className="hover:underline p-2" href="/">
                  Home
                </Link>
                <Link className="hover:underline p-2" href="/pages/shop">
                  Shop
                </Link>
                <Link className="hover:underline p-2" href="/pages/blogdetail">
                  Blog
                </Link>
                <Link className="hover:underline p-2" href="/pages/contact">
                  Contact
                </Link>
              </div>
            </div>

            <section className="hidden md:block ">
              <div className="flex items-center space-x-8 relative text-lg">
                <Link href="../pages/Account">
                  <button>
                    <FaRegUser />
                  </button>
                </Link>
                <IoSearch />
                <FaRegHeart />

                <Link href="/pages/cart" className="relative">
                  <IoCartOutline className="w-6 h-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1  -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </section>

            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-black  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6112 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className=" md:hidden bg-white">
            <div className="space-y-4 flex flex-col justify-center items-center">
              <Link className="hover:underline block text-black p-2" href="/">
                Home
              </Link>
              <Link
                className="hover:underline block text-black p-2"
                href="/pages/shop"
              >
                Shop
              </Link>
              <Link
                className="hover:underline block text-black p-2"
                href="/pages/blogdetail"
              >
                Blog
              </Link>
              <Link
                className="hover:underline block text-black p-2"
                href="/pages/contact"
              >
                Contact
              </Link>

              <div className="flex  justify-center items-center space-x-6 relative">
                <Link href="../pages/Account">
                  <button>
                    <FaRegUser />
                  </button>
                </Link>
                <IoSearch />
                <FaRegHeart />
                <Link href="../pages/cart">
                  {" "}
                  <IoCartOutline />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
