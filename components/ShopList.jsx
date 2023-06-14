import React from 'react'
import Link from "next/link"
const ShopList = () => {
  return (
    <div className='font-poppins sm:w-[30%] lg:w-[20%] hidden sm:block'>
     <ul className='flex flex-col gap-3'>
       <Link href="#">Women Fashion</Link>
       <Link href="#">Men Fashion</Link>
       <Link href="#">Electronics</Link>
       <Link href="#">Home & Lifestyle</Link>
       <Link href="#">Sports & Outdoor</Link>
       <Link href="#">Baby's Products</Link>
       <Link href="#">Health & Beauty</Link>
       <Link href="#">Phones</Link>
       <Link href="#">Computers</Link>
       <Link href="#">Gaming</Link>
     </ul>
    </div>
  )
}

export default ShopList