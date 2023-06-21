import React from "react";

const Category = ({ image, title }) => {
 return (
  <div
   className="category"
   style={{
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
   }}
  >
   <h5 className="text-white font-bold text-center">{title}</h5>
  </div>
 );
};

export default Category;
