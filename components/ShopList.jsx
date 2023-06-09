import React from 'react'
import Link from "next/link"
const ShopList = () => {
  return (
    <div className='font-poppins'>
     <ul>
       <Link href="/women">Women Fashion</Link>
       <Link href="/men">Men Fashion</Link>
       <Link href="/electronics">Electronics</Link>
       <Link href="/home-lifestyle">Home `&` Lifestyle</Link>
       <Link href="/sports">Sports `&` Outdoor</Link>
       <Link href="/baby">Baby's Products</Link>
       <Link href="/health">Health `&` Beauty</Link>
       <Link href="/phones">Phones</Link>
       <Link href="/computer">Computers</Link>
       <Link href="/gaming">Gaming</Link>
     </ul>
    </div>
  )
}

export default ShopList