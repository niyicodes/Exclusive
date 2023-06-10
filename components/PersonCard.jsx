import React from 'react'
import Image from "next/image"
import {CiInstagram,CiTwitter,CiLinkedin} from "react-icons/ci"
import Link from 'next/link'

const PersonCard = () => {
  return (
    <div className='w-[300px] font-poppins'>
     <figure className='bg-wild-sand-200 h-[70%] mb-3'>
      <Image src="/niyicodes.png" alt="person" width="1000" height="1000" className='w-full h-auto'/>
     </figure>
     <div>
      <h3 className='text-2xl font-bold'>Omoniyi Elijah</h3>
      <p className="font-medium py-2 text-lg">Frontend Dev</p>
      <div className='flex flex-row gap-5 items-left jusify-center text-3xl font-bold'>
       <Link href="twitter.com/_theVeran">
         <CiTwitter />
       </Link>
       <CiInstagram/>
       <CiLinkedin />
      </div>
     </div>
    </div>
  )
}

export default PersonCard