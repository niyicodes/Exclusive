"use client";
import CartItem from "@/components/CartItem";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Empty from "@/components/Empty";
import Shipping from "@/components/Shipping";
import AddCoupon from "@/components/AddCoupon";
import { calculateTotals } from "@/Redux/Features/cartSlice";

const Cart = () => {
 const router = useRouter();
 const { cartItems, totalPrice, quantity } = useSelector((store) => store.cart);

 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(calculateTotals());
 }, [cartItems, quantity]);

 return (
  <main>
   {cartItems.length === 0 ? (
    <Empty title={"cart"} />
   ) : (
    <>
     <section>
      {/* Table Head */}
      <article className="carttablehead">
       {/* div1 */}
       <div className="">
        <h3 className="cartheader">Products</h3>
       </div>
       {/* div2 */}
       <div>
        <h3 className="cartheader">Price</h3>
       </div>
       {/* div3 */}
       <div className="">
        <p className="cartheader">Quantity</p>
       </div>
       {/* div4 */}
       <div>
        <h3 className="cartheader">SubTotal</h3>
       </div>
      </article>
      {/* cart Items */}
      <div>
       {cartItems.map((cartItem) => {
        return (
         <CartItem
          id={cartItem.id}
          key={cartItem.id}
          title={cartItem.product_name}
          quantity={cartItem.quantity}
          price={cartItem.price}
          thumbnail={cartItem.image}
         />
        );
       })}
      </div>

      <button
       type="submit"
       onClick={() => router.push("/")}
       className="returntoshop"
      >
       Return To Shop
      </button>
     </section>
     {/* checkout section */}
     <section className="proceedtocheckout">
      <AddCoupon />
      <div className="cartcheckout">
       <h3 className="font-bold text-xl mb-3">Cart Total</h3>
       <Shipping subTotal={totalPrice} totalPrice={totalPrice} />
       <button
        type="submit"
        className="checkoutbutton"
        onClick={() => router.push("/checkout")}
       >
        Proceed to checkout
       </button>
      </div>
     </section>
    </>
   )}
  </main>
 );
};

export default Cart;
