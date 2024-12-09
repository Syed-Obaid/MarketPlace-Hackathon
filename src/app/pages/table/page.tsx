import React from 'react'

function Table() {
  return (
    <>
     <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 bg-[#FAF4F4]'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-around items-center pb-5'>
   <div>
    <div className='relative'>
        <img src="/table1.png" alt="" />
       <div className='absolute bottom-2 lg:bottom-16 left-24'>
       <h1 className='text-[36px] pb-4 font-medium text-black'>Side table</h1>
       <button className='text-[20px] border-b-2 border-black font-medium text-black'>Shop Now</button>
       </div>
    </div>
   </div>


   <div>
   <div className='relative'>
        <img src="/table2.png" alt="" />
        <div className='absolute bottom-2 lg:bottom-16 left-24'>
       <h1 className='text-[36px] pb-4 font-medium text-black'>Side table</h1>
       <button className='text-[20px] border-b-2 border-black font-medium text-black'>Shop Now</button>
       </div>
    </div>
   </div>


        </div>
        
        </section> 
    </>
  )
}

export default Table
