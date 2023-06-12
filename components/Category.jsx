import React from "react";

const Category = ({ image, title }) => {
 return (
  <div
   className="category flex flex-col gap-4 w-[220px] h-[100px] items-center px-12 py-6 text-center group border-[2px] border-wild-sand-300  cursor-pointer group backdrop-blur-3xl bg-wild-sand-900 bg-blend-overlay"
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
