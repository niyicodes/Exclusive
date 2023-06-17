import React from "react";

const Shipping = ({ subTotal, totalPrice }) => {
 return (
  <section className="shipping">
   <div className="shippingItem">
    <h3>SubTotal</h3>
    <span>${subTotal}</span>
   </div>
   <div className="shippingItem pt-3">
    <h3>Shipping</h3>
    <span>Free</span>
   </div>
   <div className="shippingItem pt-3">
    <h3>Total</h3>
    <span>${totalPrice}</span>
   </div>
  </section>
 );
};

export default Shipping;
