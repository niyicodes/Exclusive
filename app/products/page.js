"use client";
import React, { useEffect, useState } from "react";
import { groq, createClient } from "next-sanity";
import Product from "@/components/Product";
import SkeletonProduct from "@/components/SkeletonProduct";
import { client } from "@/client";

const page = () => {
 const [categories, setCategories] = useState([]);
 const [selectedCategory, setSelectedCategory] = useState(null);
 const [brands, setBrands] = useState([]);
 const [selectedbrand, setSelectedBrand] = useState(null);
 const [priceRange, setPriceRange] = useState(0);
 const [products, setProducts] = useState([]);
 const [selectedDiscount, SetSelectedDiscount] = useState(null);
 const [selectedRating, setSelectedRating] = useState([]);
 const [loading, setLoading] = useState(true);
 const skeletonarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 // load first 20 products
 const itemsPerPage = 20;
 const [currentPage, setCurrentPage] = useState(1);
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
    //  for all products
    let query = groq`*[_type == 'product']{
      name,
      _id,
      "slug":slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      price,
      discount,
      rating,
      countInStock,
    }`;

    // based on category
    if (selectedCategory) {
     query = groq`*[_type == 'product' && category == "${selectedCategory}"]{
        name,
        _id,
        "slug":slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        discount,
        rating,
        countInStock,
      }`;
    }

    // based on brand
    if (selectedbrand) {
     query = groq`*[_type == 'product' && brand == "${selectedbrand}"]{
        name,
        _id,
        "slug":slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        discount,
        rating,
        countInStock,
      }`;
    }

    // based on price
    if(priceRange){
      query = groq`*[_type == 'product' && price <= ${priceRange}] {
        name,
        _id,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        discount,
        rating,
        countInStock
      }`;
    }

    // based on discount
    if (selectedDiscount === "<= 20") {
      query = groq`*[_type == 'product' && discount <= 20] {
        name,
        _id,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        discount,
        rating,
        countInStock
      }`;
    } else if (selectedDiscount === "> 20") {
      query = groq`*[_type == 'product' && discount > 20] {
        name,
        _id,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        discount,
        rating,
        countInStock
      }`;
    } else if (selectedDiscount === "> 30") {
      query = groq`*[_type == 'product' && discount > 30] {
        name,
        _id,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        discount,
        rating,
        countInStock
      }`;
    }

    // based on rating
    if (selectedRating === "<= 2") {
      query = groq`*[_type == 'product' && rating <= 2] {
        name,
        _id,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        rating,
        rating,
        countInStock
      }`;
    } else if (selectedRating === "> 2") {
      query = groq`*[_type == 'product' && rating > 2] {
        name,
        _id,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        discount,
        rating,
        countInStock
      }`;
    } else if (selectedRating === "> 3") {
      query = groq`*[_type == 'product' && rating > 3] {
        name,
        _id,
        "slug": slug.current,
        "image": image.asset->url,
        "alt": image.alt,
        price,
        discount,
        rating,
        countInStock
      }`;
    }

    const products = await client.fetch(query);
    const randomizedProducts = [...products].sort(() => Math.random() - 0.5);
    setProducts(randomizedProducts);
   };
   getProducts();
   setLoading(false);
  }, 3000);
 }, [selectedCategory, selectedbrand, priceRange, selectedDiscount, selectedRating]);

 // Filter selection
 const handleFilterChange = (value, filterType) => {
  switch (filterType) {
   case "category":
    setSelectedCategory(value);
    break;
   case "brand":
    setSelectedBrand(value);
    break;
   case "discount":
    SetSelectedDiscount(value);
    break;
   case "rating":
    setSelectedRating(value);
    break;
   // Add cases for other filters
   default:
    break;
  }
 };
//  Price change
const handlePriceRangeChange = (event) => {
  const selectedPrice = event.target.value;
  setPriceRange(selectedPrice);
};
// Clear Filters
const clearFilters = () => {
  setSelectedCategory("");
  setSelectedBrand("");
  setPriceRange("");
  SetSelectedDiscount("");
  setSelectedRating("");
};

 return (
  <main>
   <div className="mt-8 mb-12 font-inter flex items-center justify-between">
    <div>
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
    <button type='button' className="border-2 border-valencia-500 rounded-md p-2 text-lg" onClick={clearFilters}>Clear Filters</button>
   </div>
   <section className="productsContainer">
    {/* filter section large screens*/}
    <section className="desktopFilter">
     <h3>Filter here</h3>
     {/* filter by Category */}
     <div>
      <h3 className="desktopFilterTitle">Category</h3>
      <div className="desktopFilterDiv">
       {categories.map((category, index) => {
        return (
         <p
          key={index}
          className="py-2 text-center text-base cursor-pointer"
          onClick={() => handleFilterChange(category.name, "category")}
         >
          {category.name}
         </p>
        );
       })}
      </div>
     </div>
     {/* filter by Brand */}
     <div>
      <h3 className="desktopFilterTitle">Brand</h3>
      <div className="desktopFilterDiv">
       {brands.map((brand, index) => {
        return (
         <p
          key={index}
          className="py-2 text-center text-base cursor-pointer"
          onClick={() => handleFilterChange(brand.brand, "brand")}
         >
          {brand.brand}
         </p>
        );
       })}
      </div>
     </div>
     {/* filter by Price */}
     <div>
      <h3 className="desktopFilterTitle">Price</h3>
      <div className="w-[200px] h-auto p-1">
      <div className="flex justify-between">
      <input
        type="range"
        name="priceRange"
        min="4"
        max="40000" // Adjust the min and max values based on your price range
        value={priceRange}
        onChange={handlePriceRangeChange}
        className="border-2 px-3 py-2"
      />
      <span className="mx-2">{priceRange}</span>
    </div>
      </div>
     </div>
     {/* filter by Discount */}
     <div>
      <h3 className="desktopFilterTitle">Discount</h3>
      <div className="w-auto h-auto p-1">
        <select name="" id="" value={selectedDiscount || ''} onChange={(e)=> handleFilterChange(e.target.value, 'discount')}>
          <option value="">Select discount</option>
          <option value="<= 20">Discount below 20%</option>
          <option value="> 20">Discount more than 20%</option>
          <option value="> 30">Discount more than 30%</option>
        </select>
      </div>
     </div>
     {/* filter by Rating */}
     <div>
      <h3 className="desktopFilterTitle">Rating</h3>
      <div className="w-[200px] h-[200px]">
      <select name="" id="" value={selectedRating || ''} onChange={(e)=> handleFilterChange(e.target.value, 'rating')}>
          <option value="">Select Rating</option>
          <option value="<= 2">Less than 2 stars</option>
          <option value="> 2">More than 2 stars</option>
          <option value="> 3">Less than 3 stars</option>
        </select>
      </div>
     </div>
    </section>

    {/* filter section small screens */}
    <section className="mobileFilter">
     {/* filter by category */}
     <div className="mobileFilterDiv">
      <h3 className="mobileFilterTitle">Category</h3>
      <div className="">
       <select
        name="catgory"
        id=""
        className="border-2 px-3 py-2"
        value={selectedCategory || ""}
        onChange={(event) => handleFilterChange(event.target.value, "category")}
       >
        {categories.map((category, index) => {
         return (
          <option
           key={index}
           className="py-2 text-center text-base cursor-pointer"
           value={category.name}
          >
           {category.name}
          </option>
         );
        })}
       </select>
      </div>
     </div>
     {/* filter by Brand */}
     <div className="mobileFilterDiv">
      <h3 className="mobileFilterTitle">Brand</h3>
      <div className="">
       <select
        name="brand"
        id=""
        className="border-2 px-3 py-2"
        value={selectedbrand || ""}
        onChange={(event) => handleFilterChange(event.target.value, "brand")}
       >
        {brands.map((brand, index) => {
         return (
          <option
           key={index}
           className="py-2 text-center text-base cursor-pointer"
           value={brand.brand}
          >
           {brand.brand}
          </option>
         );
        })}
       </select>
      </div>
     </div>

     {/* filter by Price */}
     <div className="mobileFilterDiv">
      <h3 className="mobileFilterTitle">Price</h3>
      <div className="flex justify-between">
      <input
        type="range"
        name="priceRange"
        min="4"
        max="40000" // Adjust the min and max values based on your price range
        value={priceRange}
        onChange={handlePriceRangeChange}
        className="border-2 px-3 py-2"
      />
      <span className="mx-2">{priceRange}</span>
    </div>
     </div>

     {/* filter by Discount */}
     <div className="mobileFilterDiv">
      <h3 className="mobileFilterTitle">Discount</h3>
      <div className="">
      <select name="" id="" value={selectedDiscount || ''} onChange={(e)=> handleFilterChange(e.target.value, 'discount')}>
          <option value="">Select discount</option>
          <option value="<= 20">Discount below 20%</option>
          <option value="> 20">Discount more than 20%</option>
          <option value="> 30">Discount more than 30%</option>
        </select>
      </div>
     </div>

     {/* filter by Rating */}
     <div className="mobileFilterDiv">
      <h3 className="mobileFilterTitle">Rating</h3>
      <div className="">
      <select name="" id="" value={selectedRating || ''} onChange={(e)=> handleFilterChange(e.target.value, 'rating')}>
          <option value="">Select Rating</option>
          <option value="<= 2">Less than 2 stars</option>
          <option value="> 2">More than 2 stars</option>
          <option value="> 3">Less than 3 stars</option>
        </select>
      </div>
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
