import React from 'react'

function Hero() {
  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 bg-[#FBEBB5]'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
            <div className=' mx-auto '>
 <div className='text-center sm:text-start   '>
    <h1  className='text-[64px] max-w-xl text-black font-medium'>Rocket single </h1>
    <h1  className='text-[64px] max-w-xl text-black font-medium'>seater</h1>
    <button className='text-[24px] border-b-2 text-black border-black'>Shop Now</button>
 </div>

 

            </div>
            <div>
                <div>
                    <img src="/hero.png" alt="" />
                </div>
            </div>

        </div>

      </section>
    </>
  )
}

export default Hero
