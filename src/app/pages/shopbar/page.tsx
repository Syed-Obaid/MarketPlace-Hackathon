"use client";
import React from "react";
import { TbAlignCenter } from "react-icons/tb";
import { PiGridFourFill } from "react-icons/pi";
import { MdOutlineViewDay } from "react-icons/md";

function Shopbar() {
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-1 sm:px-6 md:px-8 bg-[#FAF4F4]">
        <section className=" py-5  max-w-screen-2xl mx-auto flex flex-wrap justify-center  sm:justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-5">
            <p className="text-[20px] flex items-center gap-5 text-black">
              <TbAlignCenter /> Filter <PiGridFourFill /> <MdOutlineViewDay />
            </p>
            <p className="px-2 text-[20px] text-black">|</p>
            <p className="text-[16px] text-black">Showing 1–16 of 32 results</p>
          </div>
          <div className="flex flex-wrap  gap-4">
            <p className="text-[20px] text-black">
              Show{" "}
              <span className="h-10 w-14 p-2 bg-white text-[20px] text-[#9F9F9F]">
                16
              </span>
            </p>
            <p className="text-[20px] text-black">
              Short by{" "}
              <span className="h-10 w-14 p-2 pr-10 bg-white text-[20px] text-[#9F9F9F]">
                Default
              </span>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Shopbar;
