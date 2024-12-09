import Link from 'next/link';
import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
function Blog() {
  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-8 bg-white'>
        <div className='text-center pb-10'>
<h1 className='text-[36px] font-medium text-black'>Our Blogs</h1>
<p className='text-[16px] text-[#9F9F9F] font-medium pt-2'>Find a bright ideal to suit your taste with our great selection</p>

        </div>
<section className='flex flex-wrap justify-evenly items-center gap-4'>
  <div className='text-center'>
    <img src="/blog1.png" alt="" />
    <p className='text-[20px] pt-4 text-black'>Going all-in with millennial design</p>
    <p className='text-[24px] font-medium max-w-[120px] text-center mx-auto border-b-2 border-black text-black'>Read More</p>
    <p className='text-[13px] flex items-center justify-center space-x-2 py-3 text-black'><FaRegClock /> 5 min <FaBagShopping /> 12th Oct 2022
    </p>
  </div>

  <div className='text-center'>
    <img src="/blog2.png" alt="" />
    <p className='text-[20px] pt-4 text-black'>Going all-in with millennial design</p>
    <p className='text-[24px] font-medium max-w-[120px] text-center mx-auto border-b-2 border-black text-black'>Read More</p>
    <p className='text-[13px] flex items-center justify-center space-x-2 py-3 text-black'><FaRegClock /> 5 min <FaBagShopping /> 12th Oct 2022
    </p>
  </div>

  <div className='text-center'>
    <img src="/blog3.png" alt="" />
    <p className='text-[20px] pt-4 text-black'>Going all-in with millennial design</p>
    <p className='text-[24px] font-medium max-w-[120px] text-center mx-auto border-b-2 border-black text-black'>Read More</p>
    <p className='text-[13px] flex items-center justify-center space-x-2 py-3 text-black'><FaRegClock /> 5 min <FaBagShopping /> 12th Oct 2022
    </p>
  </div>

  {/* <div>
    <img src="/toppick4.png" alt="" />
    <p className='text-[16px]'>Plain console with teak mirror</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div> */}
</section>
<div className='text-center py-10'>
<Link href="../pages/blogdetail"><button className='text-[20px] border-b-2 border-black font-medium text-black'>View All Post</button></Link>
</div>

      </section>
    </>
  )
}

export default Blog
