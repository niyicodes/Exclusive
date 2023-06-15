"use client";
import Empty from "@/components/Empty";
import Product from "@/components/Product";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
 const { wishListItems, wishes } = useSelector((store) => store.wishlist);
 return (
  <main>
   {wishListItems.length === 0 ? (
    <Empty title={"wishlist"} />
   ) : (
    <>
    <div className="flex items-center gap-3">
     <h3 className="text-xl font-medium">My wishlist</h3>
     <span>({wishes})</span>
    </div>
     <section className="xs:flex overflow-x-scroll md:grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
      {wishListItems.map((wish) => {
       return (
        <Product
         key={wish._id}
         id={wish._id}
         image={wish.image}
         product_name={wish.product_name}
         product_inStock={wish.countInStock}
         price={wish.price}
         rating={wish.rating}
         slug={wish.slug}
         alt={wish.alt}
         discount={wish.discount}
        />
       );
      })}
     </section>
    </>
   )}
  </main>
 );
};

export default page;
