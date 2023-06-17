import Billing from '@/components/Billing'
import React from 'react'
import CheckoutItem from '@/components/CheckoutItem'
import Shipping from '@/components/Shipping'

const checkOut = () => {
  return (
    <main>
     <h3 className='text-2xl font-medium font-inter'>Billing Details</h3>
     <section className='flex justify-between w-full mt-8'>
      <div className='w-[40%]'>
       <Billing />
      </div>
      <section className='w-[35%]'>
       {/* checkout items */}
       <div className='h-[250px] overflow-y-scroll mb-3 shadow py-3 px-2'>
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
       </div>
       {/* item cost */}
       <div>
        <Shipping />
       </div>
       {/* payment method */}
       <div className='paymentmethod'>
        <label htmlFor="bank" className='payment'>
         <input type="radio" name="" id="" /> Bank
        </label>
        <label htmlFor="bank" className='payment'>
         <input type="radio" name="" id="" /> Cash on delivery
        </label>
       </div>

       <button type="submit" className='checkoutbutton'>Place Order</button>

      </section>
     </section>
    </main>
  )
}

export default checkOut