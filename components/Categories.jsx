import React, { useEffect, useState } from "react";
import Category from "./Category";
import { createClient, groq } from "next-sanity";

const clientConfig = {
 projectId: "vzcw8bsk",
 dataset: "production",
 apiVersion: "2023-06-07",
 useCdn: false,
};

const client = createClient(clientConfig);

const Categories = () => {
  
 const [categories, setCategories] = useState([]);

 useEffect(()=>{
  const getCategories = async () =>{
    const categories = await client.fetch(groq`*[_type == 'category']{
      name,
      _id,
      "image": image.asset->url,
      "alt":image.alt,
    }`);
    setCategories(categories) 
  }
  getCategories()
 },[])

 return (
  <section className="my-12 border-t-2 border-b-2 border-t-wild-sand-500 border-b-wild-sand-400 py-16">
   <h3 className="text-valencia-500 text-2xl mb-8 font-bold font-poppins">
    <span className="border-l-[15px] rounded-md mr-2 border-l-valencia-500 text-valencia-500"></span>{" "}
    Categories
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">Browse By Category</h3>
   </div>
   <div className="flex mt-10 mb-[30px] pb-8 gap-8 xl:w-[90%] mx-auto items-center overflow-x-scroll">
    {categories.map((category) => {
     return (
      <Category
       key={category._id}
       image={category.image}
       title={category.name}
      />
     );
    })}
   </div>
  </section>
 );
};

export default Categories;
