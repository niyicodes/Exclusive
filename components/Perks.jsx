import React from 'react'
import SatisfactoryCard from './SatisfactoryCard'
import { Delivery, Service, Secure } from '@/components/iconSVG'

const Perks = () => {

 const deliveryicon = <Delivery />
  const serviceicon = <Service />
  const secureicon = <Secure />
  
  return (
   <section className='grid lg:w-[80%] mx-auto xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-8 place-content-center my-14'>
   <SatisfactoryCard text={"Free delivery for all orders over $140"} icon={deliveryicon} value="FREE AND FAST DELIVERY"/>
   <SatisfactoryCard text="Friendly 24/7 customer support" icon={serviceicon} value="24/7 CUSTOMER SERVICE"/>
   <SatisfactoryCard text="We return money within 30 days" icon={secureicon} value="MONEY BACK GUARANTEE"/>
 </section>
  )
}

export default Perks