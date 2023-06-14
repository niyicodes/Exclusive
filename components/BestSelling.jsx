import React, { useEffect, useState } from 'react'
import Product from './Product'
import { groq, createClient } from 'next-sanity'

const clientConfig = {
  projectId: "vzcw8bsk",
  dataset: "production",
  apiVersion: "2023-06-07",
  useCdn: false,
 };
 
 const client = createClient(clientConfig);

const BestSelling = () => {
  const [bestSelling, setBestSelling] = useState([])

  useEffect(()=>{
    const getBestSelling = async () =>{
      const bestSelling = await client.fetch(groq`*[price < 80][10...15]{
        name,
        _id,
        "slug":slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        discount,
        rating,
        countInStock,
      }`);
      setBestSelling(bestSelling) 
    }
    getBestSelling()
   },[])
  return (
   <section className="my-12">
   <h3 className="text-valencia-500 text-2xl mb-8 font-bold font-poppins">
    <span className="border-l-[15px] rounded-md mr-2 border-l-valencia-500 text-valencia-500"></span>{" "}
    This Month
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">
     Best Selling Products
    </h3>
   </div>
   <div className="flex mt-10 mb-[30px] pb-8 gap-8 items-center overflow-x-scroll">
   {bestSelling.map((best) => {
     return (
      <Product
       key={best._id}
       image={best.image}
       product_name={best.name}
       product_inStock={best.countInStock}
       price={best.price}
       rating={best.rating}
       slug={best.slug}
       alt={best.alt}
       discount={best.discount}
      />
     );
    })}
   </div>
  </section>
  )
}

export default BestSelling