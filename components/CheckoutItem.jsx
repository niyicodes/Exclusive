import React from 'react'

const CheckoutItem = ({image,title, id, price}) => {
  return (
    <div className='flex justify-between my-4 py-3 px-2 shadow-md'>
     <div className='flex gap-3'>
     <img
     src={"./camera.png"}
     alt={"id"}
     className="w-[38px] h-[38px] object-contain"
    />
    <h3 className="text-lg font-bold xs:w-[80px] sm:w-[100px] md:w-[140px] lg:w-[180px] truncate">
     {"camera"}
    </h3>
     </div>
     <div>
      <h3>{"$200"}</h3>
     </div>
    </div>
  )
}

export default CheckoutItem