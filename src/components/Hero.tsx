import Image from "next/image";
import React from "react";

type HeroProps = {
  test?: string;
};

export default function Hero({ test }: HeroProps) {
  return (
    <div className='w-full pt-12 bg-sky-600 md:bg-white pb-72 md:pb-0 relative md:items-center overflow-hidden'>
      <Image
        className='w-full md:max-h-[600px]  md:object-cover'
        src='/images/hero.png'
        alt='Hero'
        width={800}
        height={800}
      />

      <div className='relative w-full h-full md:h-fit  md:absolute bottom-0'>
        {/* -------- ornaments start */}
        <div className='md:hidden absolute bg-sky-400 ro w-full h-32 -rotate-12 translate-x-16 translate-y-2'></div>
        <div className='md:hidden absolute bg-sky-600 ro w-[700px] h-32 rotate-12 -translate-x-16 -translate-y-6'></div>
        {/* -------- ornaments end */}
        {/* -------- Hero Section Start */}
        <div className=' absolute md:static top-10 bg-sky-600 pt-0 pb-20 px-10 md:py-10 md:px-16 text-white md:max-w-[600px]'>
          <h1 className='w-80 md:w-full text-5xl font-semibold mb-2 md:mb-4'>
            Discover Your Wonder
          </h1>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        {/* -------- Hero Section End */}
      </div>
    </div>
  );
}
