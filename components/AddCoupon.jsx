import React from "react";

const AddCoupon = () => {
 return (
  <div className="flex items-center gap-4">
   <input
    type="text"
    name=""
    id=""
    placeholder="Enter Coupon"
    className="border-2 outline-none px-2 py-3"
   />
   <button type="submit" className="couponbutton">
    Apply Coupon
   </button>
  </div>
 );
};

export default AddCoupon;
