import React from 'react'

function Toppicks() {
  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-8 bg-white'>
        <div className='text-center'>
<h1 className='text-[36px] font-medium text-black'>Top Picks For You</h1>
<p className='text-[16px] text-[#9F9F9F] font-medium pt-2'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>

        </div>
<section className='flex flex-wrap justify-evenly items-center'>
  <div>
    <img src="/toppick1.png" alt="" />
    <p className='text-[16px]'>Trenton modular sofa_3</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/toppick2.png" alt="" />
    <p className='text-[16px]'>Granite dining table with dining chair</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/toppick3.png" alt="" />
    <p className='text-[16px]'>Outdoor bar table and stool</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>

  <div>
    <img src="/toppick4.png" alt="" />
    <p className='text-[16px]'>Plain console with teak mirror</p>
    <p className='text-[24px] font-medium'>Rs. 25,000.00</p>
  </div>
</section>
<div className='text-center py-10'>
<button className='text-[20px] border-b-2 border-black font-medium'>Shop Now</button>
</div>

      </section>
    </>
  )
}

export default Toppicks
