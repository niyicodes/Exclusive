import React from 'react'
import { Apple } from './iconSVG'
import {IoIosArrowRoundForward} from "react-icons/io"


const Banner = () => {
  return (
    <div className='w-auto border-2 xs:px-6 md:px-12 py-10 bg-black text-white font-poppins flex flex-row items-center justify-between'>
      <div className='flex flex-col gap-6'>
        <div className='flex gap-3 items-center'>
          <Apple className="text-[30px]"/>
          <p className='xs:text-[15px] lg:text-[20px]'>iPhone 14 Series</p>
        </div>
        <h1 className='xs:text-[20px] lg:text-[35px] xl:text-[55px] xl:w-[70%] font-bold'>Up to 10% off Voucher</h1>
        <a href="#" className='flex items-center gap-1'>
          <span className='underline font-medium xs:text-[10px] md:text-[20px]'>Shop Now</span>
          <IoIosArrowRoundForward className='text-[40px] self-end'/>
        </a>
      </div>
      <div>
        <img src='/bannerimg.png' alt="bannerimg" className='w-auto'/>
      </div>
    </div>
  )
}

export default Banner