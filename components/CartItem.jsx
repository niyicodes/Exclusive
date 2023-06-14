import React from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";

const CartItem = ({ id, thumbnail, price, title, quantity }) => {
 const dispatch = useDispatch();
 return (
  <article className="flex justify-between items-center h-[90px] border px-4 py-12 my-5 shadow-md font-poppins">
   {/* div1 */}
   <div className="flex xs:flex-col lg:flex-row items-center gap-4">
    <img
     src={thumbnail}
     alt={id}
     className="w-[48px] h-[48px] object-contain"
    />
    <h3 className="text-xl font-bold xs:w-[80px] sm:w-[100px] md:w-[140px] lg:w-[180px] truncate">
     {title}
    </h3>
   </div>
   {/* div2 */}
   <div>
    <h3 className="font-medium text-xl">${price}</h3>
   </div>
   {/* div3 */}
   <div className="flex gap-4 items-center border-2 xs:px-2 sm:px-6 xs:py-1 sm:py-4 rounded-md">
    <p className="font-medium text-lg">{quantity}</p>
    <div className="controls flex flex-col gap-3 text-xl">
     <button type="button" >
      <BiUpArrow />
     </button>
     <button type="button" >
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
