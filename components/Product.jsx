import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";



const Product = ({image,price, product_name, product_inStock, discount}) => {
  return (
    <div className='w-[280px] h-[280px] font-poppins product cursor-pointer shadow-md'>
     <figure className="bg-wild-sand-100 relative py-3 mb-2 rounded-sm">
      <img src='/camera.png' alt="camera" className='m-auto w-[50%]'/>
      <p className='bg-valencia-500 text-white rounded-md px-2 py-1 absolute top-2 left-2 text-sm'>-40%</p>
      <div className="icons absolute top-2 right-2 flex flex-col gap-3">
      <AiOutlineHeart className='bg-white rounded-full p-1 text-[25px]'/>
   <MdOutlineShoppingCart className='bg-white rounded-full p-1 text-[25px] '/>
      </div>
      <button type='button' className='btn absolute bottom-0 py-1 w-full text-center xs:hidden bg-black text-white'>Add To Cart</button>
     </figure>
     <div className="details">
      <p className="font-bold">HAVIT HV-G92 Gamepad</p>
      <div className="flex flex-col gap-2">
       <div className="price flex gap-4">
       <h5 className='text-valencia-500 font-bold'>$120</h5>
       <h5 className='text-wild-sand-600 font-medium line-through'>$160</h5>
       </div>
       <small className="text-wild-sand-700">(35)</small>
      </div>
     </div>
    </div>
  )
}

export default Product