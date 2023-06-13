import {
 DollarBag,
 Shop,
 Dollar,
 Bag,
} from "@/components/iconSVG";
import Perks from "@/components/Perks";
import SatisfactoryCard from "@/components/SatisfactoryCard";
import Team from "@/components/Team";
import Image from "next/image";
import React from "react";

// export const metadata = {
//  title: 'About Exclusive | Know more about us and the team',
//  description: 'We have nothing to hide from you our great customer',
// }

const AboutPage = () => {
 const dollarbagicon = <DollarBag />;
 const shopicon = <Shop />;
 const dollaricon = <Dollar />;
 const bagicon = <Bag />;

 return (
  <main className="font-poppins">
   <section className="flex xs:flex-col lg:flex-row items-center gap-8 my-14">
    <div className="xs:w-full lg:w-[40%] flex flex-col gap-4">
     <h1 className="text-[40px] font-bold pb-4">Our Story</h1>
     <p className="text-xl text-justify leading-7 tracking-wider">
      Launced in 2015, Exclusive is South Asia’s premier online shopping
      makterplace with an active presense in Bangladesh. Supported by wide range
      of tailored marketing, data and service solutions, Exclusive has 10,500
      sallers and 300 brands and serves 3 millioons customers across the region.
     </p>
     <p className="text-xl text-justify leading-7 tracking-wider">
      Exclusive has more than 1 Million products to offer, growing at a very
      fast. Exclusive offers a diverse assotment in categories ranging from
      consumer.
     </p>
    </div>

    <div className="w-[90%] md:w-[60%]">
     <Image
      src="/aboutSide.png"
      alt="aboutSide"
      width="2000"
      height="2000"
      className="w-full"
     />
    </div>
   </section>

   <section className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 place-content-center my-14">
    <SatisfactoryCard
     text={"Sellers actively using our site"}
     icon={shopicon}
     value="10.5k"
    />
    <SatisfactoryCard
     text="Monthly Product Sale"
     icon={dollaricon}
     value="33k"
    />
    <SatisfactoryCard text="Active Customers" icon={bagicon} value="45.5k" />
    <SatisfactoryCard text="Gross Sale" icon={dollarbagicon} value="35k" />
   </section>

   <section className="my-[80px] xs:w-[90%] xl:w-[85%] mx-auto">
    <Team />
   </section>

   <Perks />
  </main>
 );
};

export default AboutPage;
