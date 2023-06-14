import Product from './Product'
import React, { useEffect, useState } from 'react'
import { groq, createClient } from 'next-sanity'
import { useRouter } from 'next/navigation';

const clientConfig = {
  projectId: "vzcw8bsk",
  dataset: "production",
  apiVersion: "2023-06-07",
  useCdn: false,
 };
 
 const client = createClient(clientConfig);


const Explore = () => {
  const [explore, setExplore] = useState([])
  const router = useRouter()

  useEffect(()=>{
    const getExplore = async () =>{
      const explore = await client.fetch(groq`*[price < 150][30...38]{
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
      setExplore(explore) 
    }
    getExplore()
   },[])
  return (
   <section className="my-16">
   <h3 className="text-valencia-500 text-2xl mb-8 font-bold font-poppins">
    <span className="border-l-[15px] rounded-md mr-2 border-l-valencia-500 text-valencia-500"></span>{" "}
    Our Products
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">
     Explore Our Products
    </h3>
   </div>
   {/* prodcuts area */}
   <div className="xs:flex xs:overflow-x-scroll xs:items-center sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center my-16">
   {explore.map((item) => {
     return (
      <Product
       key={item._id}
       id={item._id}
       image={item.image}
       product_name={item.name}
       product_inStock={item.countInStock}
       price={item.price}
       rating={item.rating}
       slug={item.slug}
       alt={item.alt}
       discount={item.discount}
      />
     );
    })}

   </div>
    <button
     type="submit"
     className="text-center px-10 text-lg font-medium py-3 bg-valencia-500 text-white hover:bg-valencia-700 rounded-md my-8 flex justify-center mx-auto"
     onClick={()=> router.push('/products')}
    >
     View more products
    </button>
  </section>
  )
}

export default Explore