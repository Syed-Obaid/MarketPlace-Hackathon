import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import Shopservices from '../shopservices/page';
import Footer from '../footer/page';
import Navbar2 from '../navbar2/page';
function Checkout() {
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
                {/* <h1 className='text-[60px] font-bold '> */}
                    <img src="/shoplogo.png" alt="" />
                    {/* </h1> */}
                <p className='text-[48px] font-medium text-black'>Checkout </p>
                <button className='text-[16px] flex items-center space-x-2 shadow-slate-400 py-2 rounded-3xl my-3 font-medium text-black'>Home <FaAngleRight className='pl-2'/>
                <span className='font-light'>Checkout</span></button>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly mx-auto py-10  gap-5 md:gap-0 bg-white'>
            <div className=' mx-auto'>
                <div className='flex flex-col justify-center  gap-8 p-5'>
                    <h1 className='text-[36px] font-semibold text-black'>Billing details</h1>

                    <div className='flex space-x-3'>
<div>
<p className='text-[16px] font-medium text-black'>First Name</p>
<input type="text" name="" id="" className='py-2 ps-2 border-2 w-[6rem] md:w-[8rem] rounded' />
</div>
<div>
<p className='text-[16px] font-medium text-black'>Last Name</p>
<input type="text" name="" id="" className='py-2 ps-2 border-2 w-[6rem] md:w-[8rem] rounded' />
</div>
</div>

<div>
<p className='text-[16px] font-medium text-black'>Company Name (Optional)</p>
<input type="text"  name="" id="" className='py-2 ps-2 border-2 w-[12rem] md:w-[18rem] rounded' />

</div>
<div>
<p className='text-[16px] font-medium text-black'>Country / Region</p>
<input type="text"  name="" id="" className='py-2 ps-2 border-2 w-[12rem] md:w-[18rem] rounded' />

</div>
<div>
<p className='text-[16px] font-medium text-black'>Street address</p>
<input type="text"  name="" id="" className='py-2 ps-2 border-2 w-[12rem] md:w-[18rem] rounded' />

</div>

<div>
<p className='text-[16px] font-medium text-black'>Town / City</p>
<input type="text"  name="" id="" className='py-2 ps-2 border-2 w-[12rem] md:w-[18rem] rounded' />

</div>

<div>
<p className='text-[16px] font-medium text-black'>Province</p>
<input type="text"  name="" id="" className='py-2 ps-2 border-2 w-[12rem] md:w-[18rem] rounded' />

</div>

<div>
<p className='text-[16px] font-medium text-black'>ZIP code</p>
<input type="text" name="" id="" className='py-2 ps-2 border-2 w-[12rem] md:w-[18rem] rounded' />

</div>

<div>
<p className='text-[16px] font-medium text-black'>Phone</p>
<input type="text"  name="" id="" className='py-2 ps-2 border-2 w-[12rem] md:w-[18rem] rounded' />

</div>

<div>
<p className='text-[16px] font-medium text-black'>Email address</p>
<input type="text"  name="" id="" className='py-2 ps-2 border-2 w-[12rem] md:w-[18rem] rounded' />

</div>

<div>
<p className='text-[16px] font-medium'></p>
<input type="text"  name="" id="" className='py-2 ps-2 border-2 w-[12rem] md:w-[18rem] rounded' />

</div>

{/* <div className=''>
    <input type="checkbox" name="" id="" className='w-5 h-4'/> <span>Remember me</span>
</div>
<div>
    <button className='text-[20px] border-2 border-black rounded py-1 px-8'>Log In</button> <span className='text-[16px]'>Lost Your Password?</span>
</div> */}


                </div>
            </div>

            <div className=' mx-auto max-w-sm'>
                <div className='flex flex-col justify-center  gap-5 p-5'>
                   <div className='flex justify-evenly'>
                   <h1 className='text-[24px] font-medium text-black'>Product</h1>
                   <h1 className='text-[24px] font-medium text-black'>Subtotal</h1>
                   </div>

                    <div className='flex justify-evenly'>
<p className='text-[16px] font-medium text-[#9F9F9F]'>Asgaard sofa</p>
<p className='text-[16px] font-medium text-[#9F9F9F]'>Rs. 250,000.00</p>


</div>
                    <div className='flex justify-evenly'>
<p className='text-[16px] font-medium text-[#9F9F9F]'>Subtotal</p>
<p className='text-[16px] font-medium text-[#9F9F9F]'>Rs. 250,000.00</p>


</div>
                    <div className='flex justify-evenly items-center'>
<p className='text-[16px] font-medium text-[#9F9F9F]'>Total</p>
<p className='text-[24px] font-medium text-[#B88E24]'>Rs. 250,000.00</p>


</div>
<div className='border-t-2 py-8'>
    <div className='flex space-x-4 items-center'>
        <p className='w-3 h-3 bg-black rounded-full'></p>
    <p className='text-[16px] text-black'>Direct Bank Transfer</p>

   
    </div>
    <div>
    <p className='text-[16px] font-light text-[#9f9f9f]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

    <p className='text-[16px] font-light text-[#9f9f9f] py-2'>Direct Bank Transfer</p>
    <p className='text-[16px] font-light text-[#9f9f9f] '>Cash On Delivery</p>
    </div>

</div>
<div>
    <p className='text-[16px] text-black'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'> privacy policy.</span></p>
</div>

<div className='text-center'>
    <button className='text-[20px] border-2 border-black rounded-xl py-1 px-8 text-black'>Place order</button> 
</div>


                </div>
            </div>


        </div>




      </section>
<Shopservices/>
<Footer/>

    </>
  )
}

export default Checkout
