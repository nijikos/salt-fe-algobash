import React, { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function TopBar() {
  const [showMenus, setShowMenus] = useState(false);

  return (
    <div className='z-100 bg-white py-3 px-7 flex flex-row items-center justify-between fixed top-0 left-0 right-0 shadow-sm'>
      <Image src={`/images/logo.svg`} width={160} height={100} alt='logo' />
      <div
        className='md:hidden block cursor-pointer'
        onClick={() => {
          setShowMenus(!showMenus);
        }}
      >
        <Menu />
      </div>

      {/* ---- desktop menus */}
      <div className='md:flex hidden flex-row items-center gap-6'>
        <a className='hover:text-sky-400' href='#about'>
          About Us
        </a>
        <a className='hover:text-sky-400' href='#core'>
          Core Values
        </a>
        <a className='hover:text-sky-400' href='#specialties'>
          Specialties
        </a>
      </div>

      {/* ---- mobile menus */}
      <div
        className={`absolute w-full right-0 left-0 bg-white flex flex-col items-end gap-6 py-10 px-8 ${
          showMenus ? "z-50 top-12 opacity-100" : "z-0 top-[-400%] opacity-0"
        } transition-all`}
      >
        <a
          className={`hover:text-sky-400 ${showMenus ? "" : "opacity-0"}`}
          onClick={() => {
            setShowMenus(false);
          }}
          href='#about'
        >
          About Us
        </a>
        <a
          className={`hover:text-sky-400 ${showMenus ? "" : "opacity-0"}`}
          onClick={() => {
            setShowMenus(false);
          }}
          href='#core'
        >
          Core Values
        </a>
        <a
          className={`hover:text-sky-400 ${showMenus ? "" : "opacity-0"}`}
          onClick={() => {
            setShowMenus(false);
          }}
          href='#specialties'
        >
          Specialties
        </a>
      </div>
    </div>
  );
}
