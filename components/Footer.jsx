import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSend, AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook,FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
 return (
  <footer className="bg-black font-inter mt-8">
   <section className="mx-[5%] mt-3 pb-12 pt-8 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-wild-sand-600">

    <div className="col-span-1">
     <h3 className="text-xl text-white pb-6 font-bold">Exclusive</h3>
     <p className="font-medium pb-2">Subscribe</p>
     <small className="font-bold">Get 10% off your first order</small>
     <div className="relative mt-2">
      <input type="email" name="" id="" placeholder="Enter your email" className="rounded-md py-2 pl-2"/>
      <AiOutlineSend className="absolute top-2 right-0 text-xl"/>
     </div>
    </div>

    <div>
     <h3 className="text-xl text-white pb-6 font-bold">Support</h3>
     <ul className="font-medium">
      <li className="py-1">11, twitter street, Lagos branch, Nigera</li>
      <li className="py-1">
      <a href="mailto:officiallyomoniyi@gmail.com">
       officiallyomoniyi@gmail.com
      </a> 
      </li>
      <li className="py-1">
      <a href="tel:+2349058507523">+2349058507523</a>
      </li>
     </ul>
    </div>

    <div>
     <h3 className="text-xl text-white pb-6 font-bold">Account</h3>
     <ul className="font-medium">
      <li className="py-1">
       <Link href="/profile">My Account</Link>
      </li>
      <li className="py-1">
       <Link href="/signup">Login / Register</Link>
      </li>
      <li className="py-1">
       <Link href="/cart">Cart</Link>
      </li>
      <li className="py-1">
       <Link href="/wishlist">Wishlist</Link>
      </li>
      <li className="py-1">
       <Link href="/shop">Shop</Link>
      </li>
     </ul>
    </div>

    <div >
     <h3 className="text-xl text-white pb-6 font-bold">Quick Link</h3>
     <ul  className="font-medium">
      <li className="py-1">Privacy Policy</li>
      <li className="py-1">Terms Of Use</li>
      <li className="py-1">FAQ</li>
      <li className="py-1">Contact</li>
     </ul>
    </div>

    <div>
     <h3 className="text-xl text-white pb-6 font-bold">Download App</h3>
     <div>
      <small>Save $3 with App New User Only</small>
      <Image src={"/app.png"} alt="get app" width="200" height="200" style={{width:"200px", height:"auto"}}/>
      <div className="socials flex gap-4 font-extrabold text-3xl mt-4">
       <span>
        <FiFacebook />
       </span>
       <span>
        <CiTwitter />
       </span>
       <span>
        <AiOutlineInstagram />
       </span>
       <span>
        <FiLinkedin />
       </span>
      </div>
     </div>
    </div>
   </section>
  </footer>
 );
};

export default Footer;
