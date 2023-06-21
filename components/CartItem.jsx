"use client";
import {
 decreaseQuantity,
 increaseQuantity,
 removeItem,
} from "@/Redux/Features/cartSlice";
import React from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";

const CartItem = ({ id, thumbnail, price, title, quantity }) => {
 const dispatch = useDispatch();

 return (
  <article className="cartItem">
   {/* div1 */}
   <div className="cartItemImageText">
    <img
     src={thumbnail}
     alt={id}
     className="w-[48px] h-[48px] object-contain"
    />
    <h3 className="cartItemTitle">
     {title}
    </h3>
   </div>
   {/* div2 */}
   <div>
    <h3 className="font-medium text-xl">${price}</h3>
   </div>
   {/* div3 */}
   <div className="cartItemQuantity">
    <p className="font-medium text-lg">{quantity}</p>
    <div className="cartItemControls">
     <button type="button" onClick={() => dispatch(increaseQuantity({ id }))}>
      <BiUpArrow />
     </button>
     <button
      type="button"
      onClick={() => {
       if (quantity === 1) {
        dispatch(removeItem(id));
        return;
       }
       dispatch(decreaseQuantity({ id }));
      }}
     >
      <BiDownArrow />
     </button>
    </div>
   </div>
   {/* div4 */}
   <div>
    <h3 className="font-medium text-xl">${price * quantity}</h3>
   </div>
  </article>
 );
};

export default CartItem;
