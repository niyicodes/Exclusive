"use client"
import React, { useState } from 'react'
import FormElement from './FormElement'

const Billing = () => {
 // form state
 const [billingDetails, setBillingDetails] = useState({
  name: "",
  companyName:"",
  address:"",
  town:"",
  phoneNumber:"",
  email:"",
  checkbox: false
 })
 // function to handle changes in the form
 const handleFormChange = (event) => {
  const { name, value } = event.target;
    setBillingDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
};

const handleCheckboxClick = () => {
 setBillingDetails((prevState) => ({
   ...prevState,
   checkbox: !prevState.checkbox,
 }));
 // send form to state or something
}
  return (
   <form className='font-inter'>
   <FormElement type="text" name="name" handleChange={handleFormChange} label="First Name" value={billingDetails.name}/>
   <FormElement type="text" name="companyName" handleChange={handleFormChange} label="Company Name" value={billingDetails.companyName}/>
   <FormElement type="text" name="address" handleChange={handleFormChange} label="Street Address" value={billingDetails.address}/>
   <FormElement type="text" name="town" handleChange={handleFormChange} label="Town/City" value={billingDetails.town}/>
   <FormElement type="tel" name="phoneNumber" handleChange={handleFormChange} label="Phone Number" value={billingDetails.phoneNumber}/>
   <FormElement type="email" name="email" handleChange={handleFormChange} label="Email Address" value={billingDetails.email}/>
   <div className='flex items-center gap-2 mt-8'>
   <input type="checkbox" name="checkbox" id="" checked={billingDetails.checkbox} onClick={handleCheckboxClick} />
    <p>Save this information for faster check-out next time</p>     
   </div>
  </form>
  )
}

export default Billing