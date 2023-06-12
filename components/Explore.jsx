import Product from './Product'
import React, { useEffect, useState } from 'react'
import { groq, createClient } from 'next-sanity'

const clientConfig = {
  projectId: "vzcw8bsk",
  dataset: "production",
  apiVersion: "2023-06-07",
  useCdn: false,
 };
 
 const client = createClient(clientConfig);


const Explore = () => {
  const [explore, setExplore] = useState([])

  useEffect(()=>{
    const getExplore = async () =>{
      const explore = await client.fetch(groq`*[price < 150][10...18]{
        name,
        _id,
        "slug":slug.current,
        "image": image.asset->url,
        price,
        discount,
        rating,
        countInStock,
      }`);
      setExplore(explore) 
    }
    getExplore()
   },[])
  return (
   <section className="my-12">
   <h3 className="text-valencia-500 text-2xl mb-8 font-bold font-poppins">
    <span className="border-l-[15px] rounded-md mr-2 border-l-valencia-500 text-valencia-500"></span>{" "}
    Our Products
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">
     Explore Our Products
    </h3>
   </div>
   <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center my-16">
   {explore.map((item) => {
     return (
      <Product
       key={item._id}
       image={item.image}
       product_name={item.name}
       product_inStock={item.countInStock}
       price={item.price}
       rating={item.rating}
       discount={item.discount}
      />
     );
    })}

    <button
     type="submit"
     className="text-center px-10 text-lg font-medium py-3 bg-valencia-500 text-white hover:bg-valencia-700 rounded-md my-8"
    >
     View more products
    </button>
   </div>
  </section>
  )
}

export default Explore