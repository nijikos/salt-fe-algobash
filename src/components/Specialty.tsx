import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButtons";

type SpecialtyProps = {
  test?: string;
};

export default function Specialty({ test }: SpecialtyProps) {
  const [current, setCurrent] = useState(1);

  const images = [
    {
      id: 0,
      left: 0,
      text: "High Technology",
      imagePath: "/images/Exhaust.svg",
    },
    {
      id: 1,
      left: 220,
      text: "Self Improvment",
      imagePath: "/images/Speed Improvement.svg",
    },
    {
      id: 2,
      left: 440,
      text: "Quality First",
      imagePath: "/images/Accesories.svg",
    },
  ];

  return (
    <div id='specialties' className='bg-sky-600 p-10 md:p-16'>
      <div className='bg-white p-10'>
        <p className='section-title uppercase mb-4'>Our Specialty</p>
        <p className='font-light'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </p>
        {/* ------- SLIDES START */}
        <div className=''>
          <div className='my-16 w-full flex flex-row items-start justify-center gap-10'>
            {images.map((image: any, index: number) => {
              return (
                <div
                  key={index}
                  className={` flex flex-col items-center  `}
                  style={{
                    left: image.left,
                    display:
                      (image.id === 0 && current === 2) ||
                      (image.id === 2 && current === 0)
                        ? "none"
                        : "block",
                  }}
                >
                  <Image
                    src={image.imagePath}
                    width={300}
                    height={300}
                    alt='special'
                    className={`${
                      image.id === current
                        ? "w-48 opacity-100"
                        : "w-12 md:w-48 opacity-10"
                    } h-48 object-cover`}
                  />
                  <p className={`text-center `}>
                    {image.id === current ? image.text : ""}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* ------- SLIDES END */}
        <p className='font-light text-gray-400 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </p>
        {/* ------- CONTROLS START */}
        <div className='flex flex-row justify-between items-center my-12'>
          <button
            className='cursor-pointer'
            onClick={() => {
              if (current > 0) {
                setCurrent((prev: any) => prev - 1);
              }
            }}
          >
            <MoveLeft />
          </button>
          <div className='flex flex-row gap-4'>
            <CustomButton current={current} id={0} />
            <CustomButton current={current} id={1} />
            <CustomButton current={current} id={2} />
          </div>
          <button
            className='cursor-pointer'
            onClick={() => {
              if (current < 2) {
                setCurrent((prev: any) => prev + 1);
              }
            }}
          >
            <MoveRight />
          </button>
        </div>
        {/* ------- CONTROLS END */}
      </div>
    </div>
  );
}
