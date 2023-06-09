"use client";
import { createClient, groq } from "next-sanity";
import React, { useState } from "react";

const clientConfig = {
 projectId: "vzcw8bsk",
 dataset: "production",
 apiVersion: "2023-06-07",
 useCdn: false,
};

const client = createClient(clientConfig);
function getProducts() {
 return client.fetch(groq`*[_type == 'product']{
  name,
  _id,
  "slug":slug.current,
  "image": image.asset->url,
  description,
  "alt":image.alt,
}`);
}

const Cart = async () => {
 const products = await getProducts();
 return (
  <div>
   {products.map((product) => {
    return <p key={product._id}>{product.name}</p>;
   })}
   <p>{products.length}</p>
  </div>
 );
};

export default Cart;
