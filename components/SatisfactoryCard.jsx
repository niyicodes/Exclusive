import React from "react";

const SatisfactoryCard = ({ icon, value, text }) => {
 return (
  <div className="satcard group w-auto border-2 py-8 px-2 flex flex-col gap-4 items-center justify-center cursor-pointer rounded-md shadow-md hover:bg-valencia-600 hover:text-white">
   <span className="bg-black   group-hover:border-wild-sand-100 rounded-full p-4 inline-block z-50 font-medium border-[15px] border-wild-sand-400">
    {icon}
   </span>

   <h1 className="text-xl font-bold group-hover:text-white">{value}</h1>
   <p className="font-medium text-lg text-center group-hover:text-white">{text}</p>
  </div>
 );
};

export default SatisfactoryCard;
