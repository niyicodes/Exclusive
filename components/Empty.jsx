import { useRouter } from 'next/navigation'
import React from 'react'

const Empty = ({title}) => {
 const navigate = useRouter()
  return (
   <div className='xs:w-full md:w-[80%] mx-auto text-center flex flex-col justify-center h-[50vh]'>
   <h3 className='xs:text-4xl md:text-5xl text-regent-st-blue-600  mb-3 font-extrabold'>Your <span className='capitalize'>{title}</span> is currently empty</h3>
   <p className='text-xl mb-8 font-medium italic'>Kindly go back to add a product or multiple products to your {title}</p>
   <div>
   <button type="button" className='bg-black text-white px-10 py-3 text-lg hover:bg-white hover:text-black font-medium hover:outline-black' onClick={()=> navigate.push('/')}>Return Home</button>
   </div>
  </div>
  )
}

export default Empty