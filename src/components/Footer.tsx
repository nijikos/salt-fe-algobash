import { Select } from "antd";
import Image from "next/image";
import React from "react";

type FooterProps = {
  test?: string;
};

export default function Footer({ test }: FooterProps) {
  return (
    <div className='bg-sky-900'>
      <div className='section-padding !pb-12'>
        <Image
          src={`/images/logo-white.svg`}
          width={240}
          height={100}
          alt='logo'
        />

        <div className='bg-white p-10 mt-10'>
          <Select
            defaultValue='TECHNOLOGY'
            className='w-full text-red-500'
            options={[
              { value: "TECHNOLOGY", label: "TECHNOLOGY DEPARTMENT" },
              { value: "DESIGN", label: "DESIGN DEPARTMENT" },
              { value: "DATA", label: "DATA DEPARTMENT" },
            ]}
          />

          <div className='mt-10'>
            <p className='text-sky-600'>Jl. Lembong No 8</p>
            <p className='text-sky-600'>Kel. Braga Kec. Sumur</p>
            <p className='text-sky-600'>Bandung, Kota Bandung,</p>
            <p className='text-sky-600'>Jawa Barat</p>
          </div>
        </div>
      </div>

      <div className='w-full overflow-hidden relative z-50'>
        <Image
          src={`/images/vector-c.svg`}
          width={1000}
          height={1000}
          alt='logo'
        />
        <div className='flex flex-col gap-8 text-white z-100 absolute bottom-24 px-8'>
          <a href='#about'>Who We Are</a>
          <a href='#core'>Our Values</a>
          <a href='#specialties'>The Perks</a>
        </div>
      </div>
    </div>
  );
}
