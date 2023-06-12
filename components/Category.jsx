import React from 'react'
import { Computer } from './iconSVG'

const Category = () => {
  return (
    <div className='category flex flex-col gap-4 w-[150px] items-center px-12 py-6 text-center group hover:bg-valencia-500 border-[2px] border-wild-sand-300  cursor-pointer'>
     <span className="group-hover:text-white">
     <Computer />
     </span>
     <h5 className='text-black font-bold group-hover:text-white'>Phones</h5>
    </div>
  )
}

export default Category