"use client";
import Empty from "@/components/Empty";
import Product from "@/components/Product";
import { clearWishlist } from "@/Redux/Features/wishlistSlice";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const page = () => {
 const { wishListItems, wishes } = useSelector((store) => store.wishlist);
 const dispatch = useDispatch()
 return (
  <main>
   {wishListItems.length === 0 ? (
    <Empty title={"wishlist"} />
   ) : (
    <>
     <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
       <h3 className="text-xl font-medium">My wishlist</h3>
       <span>({wishes})</span>
      </div>
      <div>
       <button
        type="button"
        className="couponbutton"
        onClick={() => dispatch(clearWishlist())}
       >
        Clear Wishes
       </button>
      </div>
     </div>
     <section className="wishlist">
      {wishListItems.map((wish) => {
       return (
        <Product
         key={wish.id}
         id={wish.id}
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
