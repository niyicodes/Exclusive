import React from 'react'
import {BiPhoneCall} from "react-icons/bi"
import {MdOutlineEmail} from "react-icons/md"

const Contact = () => {
  return (
    <main className='font-poppins'>
      <section className="flex xl:flex-row flex-col gap-8 items-center bg-white w-full justify-center mt-8">
        <section className="flex flex-col gap-8 py-10 px-8 xl:px-2 justify-center items-center w-[95%] xl:w-[30%] shadow-lg">
        <div className="flex flex-col gap-3 items-left w-[80%]">
          <div className="flex flex-row gap-6 items-center">
            <span className='bg-valencia-500 rounded-full p-4'>
            <BiPhoneCall className='text-white font-bold text-xl'/>
            </span>
            <h3>Call To Us</h3>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +2349058507523</p>
        </div>
        <hr />
        <div className="flex flex-col gap-3 items-left w-[80%]">
          <div className="flex flex-row gap-6 items-center">
            <span className='bg-valencia-500 rounded-full p-4'>
            <MdOutlineEmail className='text-white font-bold text-xl'/>
            </span>
            <h3>Write To Us</h3>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <a href="mailto:officiallyomoniyi@gmail.com">Emails: customer@exclusive.com</a>
          <a href="mailto:officiallyomoniyi@gmail.com">Emails: support@exclusive.com</a>
        </div>
        </section>
        <section className='bg-white w-[90%] xl:w-[70%] shadow-lg'>
          <form action="" className='p-6 flex flex-col gap-8'>
            <div className='flex flex-col xl:flex-row gap-8 justify-between'>
              <input type="text" name="" id="" className='bg-wild-sand-100 rounded-md p-3 text-black' placeholder='Your Name'/>
              <input type="email" name="" id="" className='bg-wild-sand-100 rounded-md p-3 text-black' placeholder='Your Email'/>
              <input type="tel" name="" id="" className='bg-wild-sand-100 rounded-md p-3 text-black' placeholder='Your Phone Number'/>
            </div>
            <textarea name="" id="" cols="30" rows="10" className='bg-wild-sand-100 rounded-md p-3 text-black' placeholder='Your Message'/>
            <button type="submit" className='ml-auto px-7 py-3 text-white bg-valencia-500 rounded-md'>Send message</button>
          </form>
        </section>
      </section>
    </main>
  )
}

export default Contact