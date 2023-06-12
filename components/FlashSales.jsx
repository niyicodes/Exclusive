import { groq, createClient } from 'next-sanity'
import React, { useEffect, useState } from 'react'
import Product from './Product'

const clientConfig = {
  projectId: "vzcw8bsk",
  dataset: "production",
  apiVersion: "2023-06-07",
  useCdn: false,
 };
 
 const client = createClient(clientConfig);

const FlashSales = () => {
  const [flashSales, setFlashSales] = useState([])

  useEffect(()=>{
    const getFlashSales = async () =>{
      const flashSales = await client.fetch(groq`*[discount != null]{
        name,
        _id,
        "slug":slug.current,
        "image": image.asset->url,
        price,
        discount,
        rating,
        countInStock,
      }`);
      setFlashSales(flashSales) 
    }
    getFlashSales()
   },[])

  return (
   <section className="my-12">
   <h3 className="text-valencia-500 text-2xl mb-8 font-bold font-poppins">
    <span className="border-l-[15px] rounded-md mr-2 border-l-valencia-500 text-valencia-500"></span>{" "}
    Today's
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">Flash Sales</h3>
    <p>Count down `(coming)`</p>
   </div>
   <div className="flex mt-10 mb-[30px] pb-8 gap-8 items-center overflow-x-scroll">
   {flashSales.map((flashSale) => {
     return (
      <Product
       key={flashSale._id}
       image={flashSale.image}
       product_name={flashSale.name}
       product_inStock={flashSale.countInStock}
       price={flashSale.price}
       rating={flashSale.rating}
       discount={flashSale.discount}
      />
     );
    })}
   </div>
  </section>
  )
}

export default FlashSales