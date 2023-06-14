"use client";
import CartItem from "@/components/CartItem";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Cart = async () => {
 const router = useRouter();
 const { cartItems, totalPrice, quantity } = useSelector((store) => store.cart);

 return (
  <main>
   <section>
    {/* Table Head */}
    <article className="flex justify-between items-center h-[90px] px-4 py-12 mt-8 mb-10 shadow-md font-poppins">
     {/* div1 */}
     <div className="">
      <h3 className="sm:text-xl xs:text-lg font-medium">Products</h3>
     </div>
     {/* div2 */}
     <div>
      <h3 className="font-medium sm:text-xl xs:text-lg">Price</h3>
     </div>
     {/* div3 */}
     <div className="">
      <p className="font-medium sm:text-xl xs:text-lg">Quantity</p>
     </div>
     {/* div4 */}
     <div>
      <h3 className="font-medium sm:text-xl xs:text-lg">SubTotal</h3>
     </div>
    </article>
    {/* cart Items */}
    <div>
     {cartItems.map((cartItem, index) => {
      return (
       <CartItem
       id={cartItem.id}
        key={index}
        title={cartItem.product_name}
        quantity={cartItem.quantity}
        price={cartItem.price}
        thumbnail={cartItem.image}
       />
      );
     })}

     <button
      type="submit"
      onClick={() => router.push("/")}
      className="px-5 py-3 border-2 hover:bg-black hover:text-white hover:scale-75 transition duration-300 ease-in text-black font-medium rounded-md"
     >
      Return To Shop
     </button>
    </div>
   </section>
   {/* checkout section */}
   <section className="flex xs:flex-col xs:gap-10 md:flex-row justify-between font-inter items-start my-10">
    <div className="flex items-center gap-4">
     <input
      type="text"
      name=""
      id=""
      placeholder="Enter Coupon"
      className="border-2 outline-none px-2 py-3"
     />
     <button
      type="submit"
      className="bg-valencia-600 text-white hover:bg-valencia-400 hover:text-black rounded-md xs:text-sm md:text-lg font-medium xs:px-3 md:px-6 py-3 hover:scale-90 transition duration-300 ease-in"
     >
      Apply Coupon
     </button>
    </div>
    <div className="border-2 border-wild-sand-800 px-8 py-10 xs:w-auto md:w-[400px] rounded-md">
     <h3 className="font-bold text-xl mb-3">Cart Total</h3>
     <section className="grid grid-cols-1 gap-4 divide-y-2 divide-valencia-700">
      <div className="flex items-center justify-between">
       <h3>SubTotal</h3>
       <span>${totalPrice}</span>
      </div>
      <div className="flex items-center justify-between pt-3">
       <h3>Shipping</h3>
       <span>Free</span>
      </div>
      <div className="flex items-center justify-between pt-3">
       <h3>Total</h3>
       <span>$</span>
      </div>
     </section>
     <button
      type="submit"
      className="bg-valencia-600 text-white hover:bg-valencia-400 hover:text-black rounded-md font-medium px-6 py-3 mt-5 hover:scale-90 transition duration-300 ease-in"
     >
      Proceed to checkout
     </button>
    </div>
   </section>
  </main>
 );
};

export default Cart;
