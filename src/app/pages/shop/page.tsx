"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/quries";
import { Product } from "../../../../types/products";
import ProductListing from "@/components/ProductListing";
import PageController from "@/components/pageController";
import SearchAndFilter from "@/components/SearchAndFilter";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Shopbar from "../shopbar/page";
import Shopservices from "../shopservices/page";
import Image from "next/image";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await client.fetch(allProducts);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilter = (filtered: Product[]) => {
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page
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
            <p className="text-[48px] font-medium text-black">Shop</p>
            <button className="text-[16px] flex items-center shadow-slate-400 py-2 rounded-3xl my-3 text-black">
              <Link href="../">Home</Link> <FaAngleRight />
              <Link href="../pages/shop">Shop</Link>
            </button>
          </div>
        </div>
      </section>
      <Shopbar />
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 pb-10">
        <h1 className="text-4xl font-bold text-gray-600 text-center my-6">
          Shop
        </h1>
        <SearchAndFilter products={products} onFilter={handleFilter} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <ProductListing products={product} key={product._id} />
          ))}
        </div>
        <PageController
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
      <Shopservices />
    </>
  );
};

export default Shop;
