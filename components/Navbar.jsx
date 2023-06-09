"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
 const [isMobileOpen, setIsMobileOpen] = useState(false);

 const pathname = usePathname();
 const router = useRouter();

 const isCurrentLink = (link) => {
  return pathname === link;
 };

 const toggleMenu = () => {
  setIsMobileOpen(!isMobileOpen);
 };

 return (
  <nav className="bg-white relative text-black font-inter border-b-2 border-b-zinc-500">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-around items-center py-4 ">
    <div>
     <h3 className="font-bold text-2xl">Exclusive</h3>
    </div>
    <div className="hidden lg:block">
     <ul className="flex flex-row items-center">
      <li className="pr-6">
       <Link href="/" className={`${
         isCurrentLink("/")
          ? "border-b-[6px] text-valencia-700 font-bold"
          : ""
        }`}>Home</Link>
      </li>
      <li className="px-6">
       <Link href="/contact" className={`${
         isCurrentLink("/contact")
          ? "border-b-[4px] text-valencia-700 font-bold"
          : ""
        }`}>Contact</Link>
      </li>
      <li className="px-6">
       <Link href="/about" className={`${
         isCurrentLink("/about")
          ? "border-b-[4px] text-valencia-700 font-bold"
          : ""
        }`}>About</Link>
      </li>
      <li className="pl-6">
       <Link href="/signup" className={`${
         isCurrentLink("/signup")
          ? "border-b-[4px] text-valencia-700 font-bold"
          : ""
        }`}>Sign Up</Link>
      </li>
     </ul>
    </div>
    <div className="hidden lg:flex flex-row justify-between items-center gap-8">
     <div className="relative flex flex-row items-center bg-zinc-200 rounded-md">
      <input
       type="text"
       name="search"
       id=""
       placeholder="what are you looking for?"
       className="bg-transparent text-black py-[3px] px-2 outline-none"
      />
      <AiOutlineSearch className="absolute right-[4px] font-medium cursor-pointer" />
     </div>
     <div className="relative">
      <AiOutlineHeart className="text-2xl cursor-pointer" />
      <p className="absolute bottom-[13px] -right-3 z-30 bg-valencia-400 rounded-full text-center px-2 py-1 text-xs">0</p>
     </div>
     <div className="relative">
      <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
      <p className="absolute bottom-[13px] -right-3 z-30 bg-valencia-400 rounded-full text-center px-2 py-1 text-xs">0</p>
     </div>
    </div>
    <div className="flex lg:hidden ml-auto justify-between gap-8">
    <div className="relative">
      <MdOutlineShoppingCart className="text-[30px]" />
      <p className="absolute bottom-[13px] -right-3 z-30 bg-valencia-400 rounded-full text-center px-2 py-1 text-xs">0</p>
     </div>
     <button type="button" className="" onClick={toggleMenu}>
     {isMobileOpen ? (
      <RxCross2 className="block h-[30px] w-[30px]" aria-hidden="true" />
     ) : (
      <GiHamburgerMenu className="block h-[30px] w-[30px]" aria-hidden="true" />
     )}
     </button>
    </div>
   </div>
   <Transition
    show={isMobileOpen}
    enter="transition duration-300 ease-in-out transform"
    enterFrom="-translate-x-full"
    enterTo="translate-x-0"
    leave="transition duration-200 ease-in transform"
    leaveFrom="translate-x-0"
    leaveTo="-translate-x-full"
   >
    <div
     className={`fixed inset-0 flex items-center justify-center z-50 w-full h-screen bg-picton-blue-200 glass font-poppins`}
    >
      <div className="w-full text-center mx-4">
     <ul className="flex flex-col gap-10 text-[35px] items-center overflow-y-scroll text-white font-bold">
      <li className="">
       <Link href="/" onClick={toggleMenu}>Home</Link>
      </li>
      <li className="">
       <Link href="/contact" onClick={toggleMenu}>Contact</Link>
      </li>
      <li className="">
       <Link href="/about" onClick={toggleMenu}>About</Link>
      </li>
      <li className="">
       <Link href="/signup" onClick={toggleMenu}>Sign Up</Link>
      </li>
     </ul>
    </div>
    </div>
   </Transition>
  </nav>
 );
};

export default Navbar;

