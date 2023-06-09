"use client"
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Topnav = () => {
 
 return (
  <nav className="bg-black text-white font-medium py-[7px] px-2 mb-1 flex xs:flex-col sm:flex-row items-center justify-center">
   <div className="flex xs:text-xs md:text-base justify-between items-center gap-12">
    <p className="">
     Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
     <a href="http://">ShopNow</a>
    </p>
    <LanguageSwitcher />
   </div>
  </nav>
 );
};

export default Topnav;
