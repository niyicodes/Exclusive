import { groq, createClient } from "next-sanity";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SkeletonProduct from "./SkeletonProduct";

const clientConfig = {
 projectId: "vzcw8bsk",
 dataset: "production",
 apiVersion: "2023-06-07",
 useCdn: false,
};

const client = createClient(clientConfig);

const FlashSales = () => {
 const [flashSales, setFlashSales] = useState([]);
 const skeletonarray = [1, 2, 3, 4, 5];
 const [loading, setLoading] = useState(true);
 const router = useRouter();

 useEffect(() => {
  setTimeout(() => {
   const getFlashSales = async () => {
    const flashSales = await client.fetch(groq`*[discount != null]{
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
    setFlashSales(flashSales);
   };
   getFlashSales();
   setLoading(false)
  }, 6000);
 }, []);

 const parent = {
  visible: { x: 0, transition: { staggerChildren: 0.5, delayChildren: 0.5 } },
  hidden: { x: 50 },
 };
 const child = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
 };

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
   {/* products area */}
   <motion.div
    className="flex mt-10 mb-[30px] pb-8 gap-8 items-center overflow-x-scroll"
    initial="hidden"
    animate="visible"
    variants={parent}
   >
    {loading ? (
     <>
      {skeletonarray.map((n) => (
       <SkeletonProduct key={n} />
      ))}
     </>
    ) : (
     <>
      {flashSales.map((flashSale) => {
       return (
        <Product
         key={flashSale._id}
         id={flashSale._id}
         image={flashSale.image}
         product_name={flashSale.name}
         product_inStock={flashSale.countInStock}
         price={flashSale.price}
         rating={flashSale.rating}
         slug={flashSale.slug}
         alt={flashSale.alt}
         discount={flashSale.discount}
         variants={child}
        />
       );
      })}
     </>
    )}
   </motion.div>
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

export default FlashSales;
