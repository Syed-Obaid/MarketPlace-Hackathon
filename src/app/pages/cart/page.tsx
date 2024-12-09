import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Navbar2 from '../navbar2/page';
import Cartdetail from '../carddetail/page';
import Shopservices from '../shopservices/page';
import Footer from '../footer/page';
import Link from 'next/link';

function Cart() {
  return (
    <>
    <Navbar2/>
       <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8  pb-10'>
        <div className=''  style={{
        backgroundImage: "url('/shop.png')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: "60vh",
        // width: "100%",

      }}>
            {/* <img src="/instagram.png" alt="" /> */}
            <div className='flex  flex-col items-center justify-center py-32'>
                <h1 className='text-[60px] font-bold '><img src="/shoplogo.png" alt="" /></h1>
                <p className='text-[48px] font-medium text-black'>Cart</p>
                <button className='text-[16px] flex items-center space-x-2 shadow-slate-400 py-2 rounded-3xl my-3 font-medium'><Link href="../">Home</Link> <FaAngleRight className='pl-2'/>
                <span className='font-light'><Link href="../pages/cast">Cart</Link></span></button>
            </div>
        </div>
      </section>
      <Cartdetail/>
      <Shopservices/>
      <Footer/>
    </>
  )
}

export default Cart
