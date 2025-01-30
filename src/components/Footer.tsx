import React from "react";

function Footer() {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 bg-white">
        <div className="flex flex-wrap gap-5 md:gap-2 justify-evenly items-center  py-5">
          <div className="flex  flex-col  py-8 gap-5">
            <h1 className="text-[16px] text-[#9F9F9F] max-w-[300px]">
              400 University Drive Suite 200 Coral Gables,
            </h1>
            <h1 className="text-[16px] text-[#9F9F9F]">FL 33134 USA</h1>
          </div>
          <div className="flex flex-col h-[18rem] py-8 gap-5">
            <h1 className="text-[16px] font-medium text-[#9F9F9F] ">Links</h1>
            <h1 className="text-[16px] font-medium text-black">Home</h1>
            <h1 className="text-[16px] font-medium text-black">Shop</h1>
            <h1 className="text-[16px] font-medium text-black">About</h1>
            <h1 className="text-[16px] font-medium text-black">Contact</h1>
          </div>

          <div className="flex flex-col h-[18rem] py-8 gap-5">
            <h1 className="text-[16px] font-medium text-[#9F9F9F] ">Help</h1>
            <h1 className="text-[16px] font-medium text-black">
              Payment Options
            </h1>
            <h1 className="text-[16px] font-medium text-black">Returns</h1>
            <h1 className="text-[16px] font-medium text-black">
              Privacy Policies
            </h1>
          </div>
          <div className="flex flex-col  py-8 gap-5">
            <h1 className="text-[16px] font-medium text-[#9F9F9F] ">
              Newsletter
            </h1>
            <p>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                name=""
                id=""
                className="border-b-2 border-black pt-4"
              />{" "}
              <button className="text-[14px] font-medium border-b-2 border-black max-w-[6rem] text-black">
                SUBSCRIBE
              </button>
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-5 border-t-2 flex">
          <h1 className="text-[16px] text-black">
            2022 Meubel House. All rights reverved
          </h1>
        </div>
      </section>
    </>
  );
}

export default Footer;
