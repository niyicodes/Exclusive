import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <section className='flex items-center gap-8 w-full my-8 h-full font-inter'>
     <div className="w-[60%] hidden sm:block ">
     <Image src="/SideImage.png" alt="sideimage" width="2000" height="2000" className="w-[85%] h-[80%]"/>
     </div>
     <div className="xs:w-full sm:w-[40%]">
      <h3 className='font-medium text-2xl pb-3'>Log in to Exclusive</h3>
      <p className='text-base pb-8'>Enter your details below</p>
      <form action="" className='flex flex-col gap-10'>
       <input type="text" name="" id="" className="border-b-2 border-wild-sand-700 outline-none py-4" placeholder='Email or Phone Number'/>
       <input type="password" name="" id="" className="border-b-2 border-wild-sand-700 outline-none py-4" placeholder='Password'/>
       <div className="flex justify-between items-center">
        <input type="submit" value="Log in" className='bg-valencia-500 px-8 py-4 text-white font-medium hover:bg-valencia-400 cursor-pointer rounded-md'/>
        <a href="http://" className='text-valencia-500 font-medium'>Forgot Password?</a>
       </div>
      </form>
     </div>
    </section>
  )
}

export default Login