import Link from 'next/link';
import React from 'react'
import { IoBag } from "react-icons/io5";

function Cartdetail() {
  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8  pb-10 bg-white'>

        <section className=' max-w-5xl mx-auto flex flex-wrap justify-evenly gap-5 py-5'>

        <div className=' w-[68%] px-5 '>
            <section className='bg-[#FFF9E5]  flex flex-wrap justify-evenly items-center gap-5 px-5 md:gap-0 py-5'>
            <p className='text-[16px] font-medium text-black'>Product</p>
            <p className='text-[16px] font-medium text-black'>Price</p>
            <p className='text-[16px] font-medium text-black'>Quantity</p>
            <p className='text-[16px] font-medium text-black'>Subtotal</p>
            </section>
            <div className='flex flex-col md:flex-row items-center justify-evenly gap-5 md:gap-0 pt-3'>
                <div>
                    <img src="/cartimage.png" alt="" />
                </div>
                <p className='text-[16px] text-[#9F9F9F]'>Asgaard sofa</p>
                <p className='text-[16px] text-[#9F9F9F]'>Rs. 250,000.00</p>
                <p className='h-8 w-8 text-[16px] border-2 border-[#9F9F9F] rounded text-center content-center'>1</p>
                <p className='text-[16px] text-black'>Rs. 250,000.00</p>
                <p className='text-[#FBEBB5]'><IoBag  className='h-[21.88px] w-[21px]'/></p>
            </div>

        </div>
        <div className='bg-[#FFF9E5] p-12'>
            <div className='flex flex-col space-y-5'>
                <h1 className='text-[32px] font-semibold text-black'>Cart Totals</h1>
                <div className='flex space-x-5'>
                    <p className='text-[16px] font-medium text-black'>Subtotal</p>
                    <p className='text-[16px] text-[#9F9F9F]'>Rs. 250,000.00</p>
                </div>
                <div className='flex space-x-5'>
                    <p className='text-[16px] font-medium text-black'>Total</p>
                    <p className='text-[16px] text-[#B88E2F]'>Rs. 250,000.00</p>
                </div>
                <div className='text-center'>
                   <Link href="../pages/checkout"> <button className='text-[20px] border-2 border-black py-1 px-4 text-black'>Check Out</button></Link>
                </div>
            </div>
        </div>

        </section>

      </section>
    </>
  )
}

export default Cartdetail
