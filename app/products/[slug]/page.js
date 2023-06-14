"use client";
import { createClient, groq } from "next-sanity";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
import Product from "@/components/Product";
import { useDispatch } from "react-redux";
// import { decrease, increase } from "@/app/Redux/Features/cartSlice";

const clientConfig = {
 projectId: "vzcw8bsk",
 dataset: "production",
 apiVersion: "2023-06-07",
 useCdn: false,
};
const client = createClient(clientConfig);

const ProductDetails = () => {
 const [product, setProduct] = useState("");
 const [related, setRelated] = useState([]);
 const { slug } = useParams();
 const { category, _id } = product;
 const dispatch = useDispatch()
 // get product and related products
 useEffect(() => {
  // get product
  const getProduct = async () => {
   const productArray =
    await client.fetch(groq`*[_type == 'product' && slug.current == "${slug}"]{
    name,
     _id,
     brand,
     category,
     "slug":slug.current,
     "image": image.asset->url,
     price,
     description,
     discount,
     rating,
     "alt": image.alt,
     countInStock,
   }`);
   const relatedArray =
    await client.fetch(groq`*[_type == 'product' && category == "${category}" && slug.current != "${slug}"][0...7]{
    name,
    _id,
    "slug":slug.current,
    "image": image.asset->url,
    price,
    discount,
    rating,
    "alt": image.alt,
    countInStock,
  }`);
   const product = productArray[0];
   setProduct(product);
   setRelated(relatedArray);
  };
  getProduct();
  document.title = `${product.name}`;
 }, [slug, category]);

 const discountedPrice = `${
  product.price - (product.price * product.discount) / 100
 }`;

 return (
  <main>
   <section className="flex xs:flex-col md:flex-row xl:w-[80%] xl:justify-center xl:mx-auto flex-row gap-8 w-full font-poppins mt-10 mb-16">
    {/* image area */}
    <figure className="md:w-[50%] shadow-md">
     <Image
      src={product.image}
      width="500"
      height="500"
      className="w-full"
      alt={product.alt}
      priority={true}
     />
    </figure>
    {/* product details */}
    <div className="md:w-[45%]">
     <h3 className="text-xl font-bold mb-1">{product.name}</h3>
     <article className="flex items-center gap-10 mb-3">
      {/* <ReactStars
       count={rating}
       size={25}
       color1="#FFAD33"
       color2="#9a9a9a"
       edit={false}
       half={true}
      /> */}
      <p className="text-regent-st-blue-700 italic font-medium">
       ({product.countInStock}) product(s) left
      </p>
      <p className="text-bold text-regent-st-blue-700">
       Brand: <span className="italic text-valencia-600">{product.brand}</span>
      </p>
     </article>
     <div className="flex items-center gap-10">
      <h3 className="text-2xl font-bold my-3">
       $
       {product.discount ? (
        <span>{discountedPrice}</span>
       ) : (
        <span>{product.price}</span>
       )}
      </h3>
      {product.discount && (
       <h3 className="text-valencia-800 font-medium line-through text-2xl">
        ${product.price}
       </h3>
      )}
     </div>
     <p className="text-justify text-lg border-b-2 border-b-wild-sand-900 pb-8">
      {product.description}
     </p>
     {/* buttons */}
     <div className="flex items-center gap-6 mt-8">
      <div className="flex items-center px-5 py-2 gap-4 text-lg border-2 border-valencia-700 rounded-md">
       <AiOutlineMinus className="cursor-pointer hover:scale-95 transition-all duration-300 ease-out" />
       <p>2</p>
       <AiOutlinePlus className="cursor-pointer hover:scale-95 transition-all duration-300 ease-out" />
      </div>
      <button
       type="submit"
       className="bg-valencia-500 text-white w-[50%] py-2 text-bold rounded-md hover:bg-valencia-800 hover:scale-90 transition-all duration-300 ease-out"
      >
       Buy Now
      </button>
      <div className="border-2 py-2 px-4 text-xl border-valencia-700 rounded-md">
       <AiOutlineHeart className="cursor-pointer hover:scale-95" />
      </div>
     </div>
    </div>
   </section>

   {/* related item */}

   <section className="my-12">
    <h3 className="text-valencia-500 text-2xl mb-8 font-bold font-poppins">
     <span className="border-l-[15px] rounded-md mr-2 border-l-valencia-500 text-valencia-500"></span>{" "}
     Related Products
    </h3>
    <div className="flex items-center gap-6 overflow-x-scroll">
     {related.map((product) => {
      return (
       <Product
        key={product._id}
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
    </div>
   </section>
  </main>
 );
};

export default ProductDetails;
