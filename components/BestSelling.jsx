import React from 'react'
import Product from './Product'

const BestSelling = () => {
  return (
   <section className="my-12">
   <h3 className="text-valencia-500 text-2xl mb-8 font-bold font-poppins">
    <span className="border-l-[15px] rounded-md mr-2 border-l-valencia-500 text-valencia-500"></span>{" "}
    This Month
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">
     Best Selling Products
    </h3>
   </div>
   <div className="flex mt-10 mb-[30px] pb-8 gap-8 justify-center items-center overflow-x-scroll">
    <Product />
    <Product />
    <Product />
    <Product />
   </div>
  </section>
  )
}

export default BestSelling