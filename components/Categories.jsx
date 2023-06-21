import React, { useEffect, useState } from "react";
import Category from "./Category";
import { groq } from "next-sanity";
import { motion } from "framer-motion";
import { client } from "@/client";

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
   <h3 className="title">
    <span className="thickLeftBorder"></span>{" "}
    Categories
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">Browse By Category</h3>
   </div>
   <motion.div className="categories" initial={{opacity: 0}} whileInView={{opacity:1}} transition={{type: "keyframes", duration: 0.4}}>
    {categories.map((category) => {
     return (
      <Category
       key={category._id}
       image={category.image}
       title={category.name}
      />
     );
    })}
   </motion.div>
  </section>
 );
};

export default Categories;
