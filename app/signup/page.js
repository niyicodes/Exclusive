import Image from 'next/image'
import React from 'react'
import {FcGoogle} from "react-icons/fc"

export const metadata = {
  title: 'Sign up | Let us know who you are',
  description: 'Join us at Exclusive to Shop for quality products without stress',
}

const SignUp = () => {
  return (
    <section className='flex items-center gap-8 w-full my-8 h-full font-inter'>
      
     <div className="w-[60%] hidden sm:block ">
     <Image src="/SideImage.png" alt="sideimage" width="2000" height="2000" className="w-[85%] h-[80%]"/>
     </div>

     <div className="xs:w-full sm:w-[40%]">
      <h3 className='font-medium text-2xl pb-3'>Create an account</h3>
      <p className='text-base pb-8'>Enter your details below</p>
      <form action="" className='flex flex-col gap-10'>

       <input type="text" name="" id="" className="border-b-2 border-wild-sand-700 outline-none py-2" placeholder='Name'/>
       <input type="text" name="" id="" className="border-b-2 border-wild-sand-700 outline-none py-2" placeholder='Email or Phone Number'/>
       <input type="password" name="" id="" className="border-b-2 border-wild-sand-700 outline-none py-2" placeholder='Password'/>
       
       <div className="flex flex-col justify-between gap-4">
        <input type="submit" value="Sign up" className='bg-valencia-500 px-8 py-4 text-white font-medium hover:bg-valencia-400 cursor-pointer rounded-md'/>
        <button type="submit" className='flex justify-center items-center gap-2 px-8 py-4 font-bold hover:bg-black hover:text-white border-2 rounded-md'>
          <FcGoogle /> Sign up with Google
        </button>
        <p className="text-center">Already have account? <a href="/login" className=' font-medium text-underline'>Log in</a></p>
        
       </div>

      </form>
     </div>
    </section>
  )
}

export default SignUp