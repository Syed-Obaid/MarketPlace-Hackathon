"use client";

import { FaAngleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const Asgardsofa = () => {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 bg-white">
        <div className="text-[16px] px-4 flex flex-wrap gap-4 md:gap-0 items-center space-x-2 text-[#9f9f9f] py-2  my-3 font-medium ">
          <Link href="../">Home </Link> <FaAngleRight className="pl-2" />
          <span className="font-light">
            <Link href="../pages/shop">Shop</Link>{" "}
          </span>{" "}
          <span>
            <FaAngleRight className="" />
          </span>{" "}
          <span className="text-[20px] px-2">|</span>{" "}
          <span className="text-black">Asgaard sofa</span>{" "}
        </div>

        <section className="flex flex-wrap justify-evenly items-center py-12 my-5">
          <div>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-5">
                <div className="bg-[#FFF9E5]">
                  <Image src={"/sofaa2.png"} alt="sofa" width={80} height={80}/>
                </div>
                <div className="bg-[#FFF9E5]">
                  <Image src={"/sofaa1.png"} alt="sofa" width={80} height={80}/>
                </div>
                <div className="bg-[#FFF9E5]">
                  <Image src={"/sofaa4.png"} alt="sofa" width={80} height={80}/>
                </div>
                <div className="bg-[#FFF9E5]">
                  <Image src={"/sofaa3.png"} alt="sofa" width={80} height={80}/>
                </div>
              </div>
              <div className="bg-[#FFF9E5]">
                <Image src={"/bigasgard.png"} alt="sofa" width={350} height={350}/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-[42px] text-black">Asgaard sofa</h1>
              <p className="text-[24px] text-[#9F9F9F]">Rs. 250,000.00</p>
              <p className="flex space-x-2 text-[#FFDA5B] text-[20px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
              <p className="text-[13px] text-[#9F9F9F] max-w-sm py-2">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <p className="text-[14px] text-[#9F9F9F]">Size</p>
              <div className="flex space-x-5">
                <p className="text-[13px] bg-[#FFF9E5] w-10 p-2 text-center rounded">
                  L
                </p>
                <p className="text-[13px] bg-[#e9e7e7] w-10 p-2 text-center rounded">
                  XL
                </p>
                <p className="text-[13px] bg-[#e9e7e7] w-10 p-2 text-center rounded">
                  XS
                </p>
              </div>
              <p className="text-[14px] text-[#9F9F9F]">Color</p>
              <div className="flex space-x-3">
                <p className="text-[13px] bg-[#CDBA7B] w-5 p-3 text-center rounded-full"></p>
                <p className="text-[13px] bg-[#000000] w-5 p-3 text-center rounded-full"></p>
                <p className="text-[13px] bg-[#816DFA] w-5 p-3 text-center rounded-full"></p>
              </div>
              <div className="flex space-x-5 py-5">
                <div className="flex justify-evenly items-center space-x-4 text-[16px] border-2 border-[#9F9F9F] max-w-[90px] text-black px-2 content-center rounded">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
                {/* <button  className=''> */}

                <Sheet>
                  <SheetTrigger className="py-2 px-8 border-2 border-black rounded text-black">
                    Add To Cart
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="text-[24px] text-black pb-4 border-b-2">
                        Shopping Cart
                      </SheetTitle>
                      <SheetDescription>
                        <div className="flex flex-col sm:flex-row gap-4 items-center py-8 justify-evenly">
                          <img src="/addcart1.png" alt="" />
                          <div>
                            <p className="text-[16px] text-black">
                              Asgaard sofa
                            </p>
                            <p className="text-[#B88E24] text-[12px]">
                              Rs. 250,000.00
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 py-8 justify-evenly">
                          <p className="text-[16px] text-black">Subtotal</p>
                          <p className="text-[16px] text-[#B88E24]">
                            Rs. 250,000.00
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 py-8 justify-evenly">
                          <Link href="../pages/cart">
                            <p className="text-[12px] text-black border-2 border-black w-28 rounded-2xl py-1 px-3 text-center">
                              View Cart
                            </p>
                          </Link>
                          <Link href="../pages/checkout">
                            <p className="text-[12px] text-black border-2 border-black w-28 rounded-2xl py-1 px-3 text-center">
                              Checkout
                            </p>
                          </Link>
                        </div>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                {/* </button> */}
              </div>
            </div>
          </div>
        </section>

        <section className=" flex flex-wrap justify-evenly max-w-4xl mx-auto">
          <div className="text-[24px] text-black">Description</div>
          <div className="text-[24px] text-[#9F9F9F]">
            Additional Information
          </div>
          <div className="text-[24px] text-[#9F9F9F]">Reviews [5]</div>
        </section>
        <section className="max-w-5xl mx-auto py-10">
          <p className="text-[16px] text-[#9F9F9F] pb-10">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[16px] text-[#9F9F9F]">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </section>

        <section className="flex flex-wrap justify-evenly items-center">
          <div className="bg-[#FFF9E5]">
            <img src="/whitesofa1.png" alt="" />
          </div>
          <div className="bg-[#FFF9E5]">
            <img src="/whitwsofa2.png" alt="" />
          </div>
        </section>

        <section className="py-10">
          <div className="text-center pt-4">
            <h1 className="text-[36px] font-medium text-black">
              Related Products
            </h1>
          </div>
          <section className="flex flex-wrap justify-evenly items-center">
            <div>
              <img src="/toppick1.png" alt="" />
              <p className="text-[16px] text-black">Trenton modular sofa_3</p>
              <p className="text-[24px] font-medium text-black">
                Rs. 25,000.00
              </p>
            </div>

            <div>
              <img src="/toppick2.png" alt="" />
              <p className="text-[16px] text-black">
                Granite dining table with dining chair
              </p>
              <p className="text-[24px] font-medium text-black">
                Rs. 25,000.00
              </p>
            </div>

            <div>
              <img src="/toppick3.png" alt="" />
              <p className="text-[16px] text-black">
                Outdoor bar table and stool
              </p>
              <p className="text-[24px] font-medium text-black">
                Rs. 25,000.00
              </p>
            </div>

            <div>
              <img src="/toppick4.png" alt="" />
              <p className="text-[16px] text-black">
                Plain console with teak mirror
              </p>
              <p className="text-[24px] font-medium text-black">
                Rs. 25,000.00
              </p>
            </div>
          </section>
          <div className="text-center py-10">
            <button className="text-[20px] border-b-2 border-black font-medium text-black">
              Shop Now
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Asgardsofa;
