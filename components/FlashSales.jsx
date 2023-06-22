import { groq, createClient } from "next-sanity";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import SkeletonProduct from "./SkeletonProduct";
import SalesCountdown from "./SalesCountdown";

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
   setLoading(false);
  }, 3000);
 }, []);

 // Framer motion
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
   <h3 className="title">
    <span className="thickLeftBorder"></span> Today's
   </h3>
   <div className="flashsalesTimerArea">
    <h3 className="font-inter font-medium text-[30px]">Flash Sales</h3>
    <SalesCountdown />
   </div>
   {/* products area */}
   <motion.div
    className="flashsales"
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
    className="flashsalesBtn"
    onClick={() => router.push("/products")}
   >
    View more products
   </button>
  </section>
 );
};

export default FlashSales;
