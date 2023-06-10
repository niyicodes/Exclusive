import { DollarBag, Shop, Dollar, Bag, Delivery, Service, Secure } from '@/components/iconSVG'
import PersonCard from '@/components/PersonCard'
import SatisfactoryCard from '@/components/SatisfactoryCard'
import Team from '@/components/Team'
import Image from 'next/image'
import React from 'react'


const AboutPage = () => {
  const dollarbagicon = <DollarBag />
  const shopicon = <Shop />
  const dollaricon = <Dollar />
  const bagicon = <Bag />
  const deliveryicon = <Delivery />
  const serviceicon = <Service />
  const secureicon = <Secure />
  return (
    <main className='font-poppins'>

      <section className='flex xs:flex-col lg:flex-row items-center gap-8 my-14'>
        <div className="xs:w-full lg:w-[40%] flex flex-col gap-4">
          <h1 className="text-[40px] font-bold pb-4">Our Story</h1>
          <p className='text-xl text-justify leading-7 tracking-wider'>
          Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          </p>
          <p className='text-xl text-justify leading-7 tracking-wider'>
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>

        <div className='w-[90%] md:w-[60%]'>
          <Image src="/aboutSide.png" alt="aboutSide" width="2000" height="2000" className='w-full'/>
        </div>
      </section>

      <section className='grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 place-content-center my-14'>
        <SatisfactoryCard text={"Sellers actively using our site"} icon={shopicon} value="10.5k"/>
        <SatisfactoryCard text="Monthly Product Sale" icon={dollaricon} value="33k"/>
        <SatisfactoryCard text="Active Customers" icon={bagicon} value="45.5k"/>
        <SatisfactoryCard text="Gross Sale" icon={dollarbagicon} value="35k"/>
      </section>

      <section className='my-[80px] xs:w-[90%] xl:w-[85%] mx-auto'>
        <Team />
      </section>

      <section className='grid w-[80%] mx-auto xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-content-center my-14'>
        <SatisfactoryCard text={"Free delivery for all orders over $140"} icon={deliveryicon} value="FREE AND FAST DELIVERY"/>
        <SatisfactoryCard text="Friendly 24/7 customer support" icon={serviceicon} value="24/7 CUSTOMER SERVICE"/>
        <SatisfactoryCard text="We return money within 30 days" icon={secureicon} value="MONEY BACK GUARANTEE"/>
      </section>

    </main>
  )
}

export default AboutPage