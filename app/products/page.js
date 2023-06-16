"use client";
import React, { useEffect, useState } from "react";
import { groq, createClient } from "next-sanity";
import Product from "@/components/Product";
import SkeletonProduct from "@/components/SkeletonProduct";

// const metadata = {
//  title: "Our Products | Browse for quality products",
//  description: "Shop for quality products on Exclusive",
// };

const clientConfig = {
 projectId: "vzcw8bsk",
 dataset: "production",
 apiVersion: "2023-06-07",
 useCdn: false,
};

const client = createClient(clientConfig);

const page = () => {
 const [categories, setCategories] = useState([]);
 const [brands, setBrands] = useState([]);
 const [price, setPrice] = useState([]);
 const [products, setProducts] = useState([]);
 const [discount, setDiscount] = useState([]);
 const [rating, setRating] = useState([]);
 const [loading, setLoading] = useState(true);
 const skeletonarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const itemsPerPage = 20;
 const [currentPage, setCurrentPage] = useState(1);
 // load first 20 products
 const startIndex = (currentPage - 1) * itemsPerPage;
 const endIndex = startIndex + itemsPerPage;
 const displayedProducts = products.slice(startIndex, endIndex);

 // load next 20
 const getNextProducts = () => {
  setCurrentPage((prevPage) => prevPage + 1);
 };

 // Get brands and Categories
 useEffect(() => {
  const getFilters = async () => {
   const brand = await client.fetch(
    groq`*[_type == 'product'][brand != ""]{brand}`
   );
   const category = await client.fetch(groq`*[_type == 'category']{name}`);
   setBrands(brand);
   setCategories(category);
  };
  getFilters();
 }, []);

 // Get products
 useEffect(() => {
  setTimeout(async () => {
   const getProducts = async () => {
    const products = await client.fetch(groq`*[_type == 'product']{
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
    const randomizedProducts = [...products].sort(() => Math.random() - 0.5);
    setProducts(randomizedProducts);
   };
   getProducts();
   setLoading(false);
  }, 6000);
 }, []);

 return (
  <main>
   <div className="mt-8 mb-12 font-inter">
    <h1 className="text-3xl text-sunglo-500 font-extrabold">
     All Our Products
    </h1>
    <p className="my-2 text-xl">
     <span className="italic text-regent-st-blue-700 font-bold">
      {products.length}{" "}
     </span>
     {""}products found
    </p>
   </div>
   <section className="flex xs:flex-col lg:flex-row xs:divide-y-2 lg:divide-x-2 gap-8 w-full">
    {/* filter section large screens*/}
    <section className="hidden lg:flex w-[20%]  flex-col gap-4 font-inter">
     <h3>Filter here</h3>
     {/* filter by Category */}
     <div>
      <h3 className="text-2xl text-valencia-700 font-bold mb-3">Category</h3>
      <div className="w-[200px] overflow-y-scroll h-[200px] bg-wild-sand-50 px-6 py-8">
       {categories.map((category, index) => {
        return (
         <p key={index} className="py-2 text-center text-base cursor-pointer">
          {category.name}
         </p>
        );
       })}
      </div>
     </div>
     {/* filter by Brand */}
     <div>
      <h3 className="text-2xl text-valencia-700 font-bold mb-3">Brand</h3>
      <div className="w-[200px] h-[200px] overflow-y-scroll bg-wild-sand-50 px-6 py-8">
       {brands.map((brand, index) => {
        return (
         <p key={index} className="py-2 text-center text-base cursor-pointer">
          {brand.brand}
         </p>
        );
       })}
      </div>
     </div>

     {/* filter by Price */}

     <div>
      <h3 className="text-2xl text-valencia-700 font-bold mb-3">Price</h3>
      <div className="w-[200px] h-auto bg-wild-sand-50"></div>
     </div>

     {/* filter by Discount */}

     <div>
      <h3 className="text-2xl text-valencia-700 font-bold mb-3">Discount</h3>
      <div className="w-[200px] h-[200px] bg-wild-sand-50"></div>
     </div>

     {/* filter by Rating */}

     <div>
      <h3 className="text-2xl text-valencia-700 font-bold mb-3">Rating</h3>
      <div className="w-[200px] h-[200px] bg-wild-sand-50"></div>
     </div>
    </section>

    {/* filter section small screens */}
    <section className="lg:hidden flex justify-between gap-6 items-center overflow-x-scroll py-3 my-6">
     {/* filter by category */}
     <div className="flex items-center gap-4 mx-2">
      <h3 className="text-lg text-valencia-700 font-bold mb-3">Category</h3>
      <div className="">
       <select name="catgory" id="" className="border-2 px-3 py-2">
        {categories.map((category, index) => {
         return (
          <option
           key={index}
           className="py-2 text-center text-base cursor-pointer"
          >
           {category.name}
          </option>
         );
        })}
       </select>
      </div>
     </div>
     {/* filter by Brand */}
     <div className="flex items-center gap-4 mx-2">
      <h3 className="text-lg text-valencia-700 font-bold mb-3">Brand</h3>
      <div className="">
       <select name="brand" id="" className="border-2 px-3 py-2">
        {brands.map((brand, index) => {
         return (
          <option
           key={index}
           className="py-2 text-center text-base cursor-pointer"
          >
           {brand.brand}
          </option>
         );
        })}
       </select>
      </div>
     </div>

     {/* filter by Price */}
     <div className="flex items-center gap-4 mx-2">
      <h3 className="text-lg text-valencia-700 font-bold mb-3">Price</h3>
      <div className=""></div>
     </div>

     {/* filter by Discount */}
     <div className="flex items-center gap-4 mx-2">
      <h3 className="text-lg text-valencia-700 font-bold mb-3">Discount</h3>
      <div className=""></div>
     </div>

     {/* filter by Rating */}
     <div className="flex items-center gap-4 mx-2">
      <h3 className="text-lg text-valencia-700 font-bold mb-3">Rating</h3>
      <div className=""></div>
     </div>
    </section>

    {/* Products section */}
    <section className="xs:w-full lg:w-[80%]">
     <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center mb-8">
      {loading ? (
       <>
        {skeletonarray.map((n) => (
         <SkeletonProduct key={n} />
        ))}
       </>
      ) : (
       <>
        {displayedProducts &&
         displayedProducts.map((product) => {
          return (
           <Product
            key={product._id}
            id={product._id}
            image={product.image}
            product_name={product.name}
            product_inStock={product.countInStock}
            price={product.price}
            rating={product.rating}
            slug={product.slug}
            alt={product.alt}
            discount={product.discount}
           />
          );
         })}
       </>
      )}
     </div>
     <button
      type="submit"
      onClick={getNextProducts}
      className="bg-regent-st-blue-500 px-6 py-3 text-white rounded-md hover:bg-regent-st-blue-800 text-bold text-lg font-inter flex mx-auto"
     >
      Load more Products
     </button>
    </section>
   </section>
  </main>
 );
};

export default page;
