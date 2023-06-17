import React from "react";

const FormElement = ({ type, label, handleChange, value, name }) => {
 return (
  <div className="flex flex-col gap-1 my-2">
   <label htmlFor={name} className="flex gap-0 text-wild-sand-400">
    {label}
    <span className="text-valencia-400">*</span>
   </label>
   <input
    type={type}
    name={name}
    id={name}
    className="py-1 px-2 bg-wild-sand-200 rounded-md outline-none"
    value={value}
    onChange={handleChange}
   />
  </div>
 );
};

export default FormElement;
