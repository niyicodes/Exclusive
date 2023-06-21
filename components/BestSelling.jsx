import React, { useEffect, useState } from "react";
import Product from "./Product";
import { groq } from "next-sanity";
import SkeletonProduct from "./SkeletonProduct";
import { client } from "@/client";


const BestSelling = () => {
 const [bestSelling, setBestSelling] = useState([]);
 const skeletonarray = [1, 2, 3, 4, 5];
 const [loading, setLoading] = useState(true);

//  FETCH BESTSELLING
 useEffect(() => {
  setTimeout(() => {
   const getBestSelling = async () => {
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
    setBestSelling(bestSelling);
   };
   getBestSelling();
   setLoading(false);
  }, 4000);
 }, []);


 return (
  <section className="my-12">
   <h3 className="title">
    <span className="thickLeftBorder"></span>{" "}
    This Month
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">
     Best Selling Products
    </h3>
   </div>
   <div className="bestSelling">
    {loading ? (
     <>
      {skeletonarray.map((n) => (
       <SkeletonProduct key={n} />
      ))}
     </>
    ) : (
     <>
      {bestSelling.map((best) => {
       return (
        <Product
         key={best._id}
         id={best._id}
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
     </>
    )}
   </div>
  </section>
 );
};

export default BestSelling;
