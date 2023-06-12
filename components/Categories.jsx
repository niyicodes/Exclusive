import React from 'react'
import Category from './Category'

const Categories = () => {
  return (
   <section className="my-12 border-t-2 border-b-2 border-t-wild-sand-500 border-b-wild-sand-400 py-16">
   <h3 className="text-valencia-500 text-2xl mb-8 font-bold font-poppins">
    <span className="border-l-[15px] rounded-md mr-2 border-l-valencia-500 text-valencia-500"></span>{" "}
    Categories
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">Browse By Category</h3>
   </div>
   <div className="flex mt-10 mb-[30px] pb-8 gap-8 xl:w-[90%] mx-auto items-center overflow-x-scroll">
     <Category/>
     <Category/>
     <Category/>
     <Category/>
     <Category/>
     <Category/>
     <Category/>
     <Category/>
     <Category/>
   </div>
  </section>
  )
}

export default Categories