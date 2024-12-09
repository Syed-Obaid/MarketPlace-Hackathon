import React from 'react'

import { FaAngleRight } from "react-icons/fa";
import Navbar2 from '../navbar2/page';
import Shopbar from '../shopbar/page';
import Shopservices from '../shopservices/page';
import Footer from '../footer/page';
import Link from 'next/link';

function Shop() {
  return (
    <>
      <Navbar2/>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8  pb-10'>
        <div className=''  style={{
        backgroundImage: "url('/shop.png')",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
        // backgroundPosition: "center",
        // height: "100vh",
        // width: "100%",

      }}>
            {/* <img src="/instagram.png" alt="" /> */}
            <div className='flex  flex-col items-center py-32'>
                <h1 className='text-[60px] font-bold '><img src="/shoplogo.png" alt="" /></h1>
                <p className='text-[48px] font-medium text-black'>Shop</p>
                <button className='text-[16px] flex items-center  shadow-slate-400 py-2 rounded-3xl my-3 text-black'><Link href="../">Home</Link> <FaAngleRight />
                <Link href="../pages/shop">Shop</Link></button>
            </div>
        </div>
      </section>
<Shopbar/>
<Shopservices/>
<Footer/>

    </>
  )
}

export default Shop
