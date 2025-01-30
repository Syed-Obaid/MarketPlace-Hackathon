import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Blogdetailhero from "../blogdetailhero/page";
import Shopservices from "../shopservices/page";
import Link from "next/link";
import Image from "next/image";

function Blogdetail() {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8  pb-10">
        <div
          className=""
          style={{
            backgroundImage: "url('/shop.png')",
            backgroundSize: "cover",

            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex  flex-col items-center justify-center py-32">
          <Image src={"/shoplogo.png"} alt="logo" width={70} height={70}/>

            <p className="text-[48px] font-medium text-black">Blog</p>
            <button className="text-[16px] flex items-center space-x-2 shadow-slate-400 py-2 rounded-3xl my-3 font-medium text-black">
              <Link href="../">Home</Link> <FaAngleRight className="pl-2" />
              <span className="font-light">
                <Link href="../pages/blogdetail">Blog</Link>
              </span>
            </button>
          </div>
        </div>
      </section>
      <Blogdetailhero />
      <Shopservices />
    </>
  );
}

export default Blogdetail;
