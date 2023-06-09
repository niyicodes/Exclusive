import Product from "./Product";
import React, { useEffect, useState } from "react";
import { groq, createClient } from "next-sanity";
import { useRouter } from "next/navigation";
import SkeletonProduct from "./SkeletonProduct";
import { client } from "@/client";


const Explore = () => {
 const [explore, setExplore] = useState([]);
 const skeletonarray = [1, 2, 3, 4, 5, 6, 7, 8];
 const [loading, setLoading] = useState(true);
 const router = useRouter();

//  fetch products
 useEffect(() => {
  setTimeout(() => {
   const getExplore = async () => {
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
    setExplore(explore);
   };
   getExplore();
   setLoading(false);
  }, 6000);
 }, []);


 return (
  <section className="my-16">
   <h3 className="title">
    <span className="thickLeftBorder"></span>{" "}
    Our Products
   </h3>
   <div className="flex gap-10 items-center">
    <h3 className="font-inter font-medium text-[30px]">Explore Our Products</h3>
   </div>
   {/* prodcuts area */}
   <div className="xs:flex xs:overflow-x-scroll xs:items-center sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center my-16">
    {loading ? (
     <>
      {skeletonarray.map((n) => (
       <SkeletonProduct key={n} />
      ))}
     </>
    ) : (
     <>
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
     </>
    )}
   </div>
   <button
    type="submit"
    className="text-center px-10 text-lg font-medium py-3 bg-valencia-500 text-white hover:bg-valencia-700 rounded-md my-8 flex justify-center mx-auto"
    onClick={() => router.push("/products")}
   >
    View more products
   </button>
  </section>
 );
};

export default Explore;
