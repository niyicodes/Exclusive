"use client"
import { logInWithEmailAndPassword } from "@/Firebase/firebase";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/Redux/Features/authSlice";

const Login = () => {
 const dispatch = useDispatch();
 const navigate = useRouter();

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const logIn = async (e) =>{
  e.preventDefault();

  if (!email || !password) {
   alert("Please fill in all the fields");
   return;
  }
  try {
    const user = await logInWithEmailAndPassword(email, password);
    console.log(user)
    dispatch(setUser(user));
    // Clear the form fields
    setEmail("");
    setPassword("");
    // navigate to last page
    navigate.back();
   } catch (error) {
    console.error("Error login in:", error);
   }
 }
 return (
  <section className="flex items-center gap-8 w-full my-8 h-full font-inter">
   <div className="w-[60%] hidden sm:block ">
    <Image
     src="/SideImage.png"
     alt="sideimage"
     width="500"
     height="500"
     className="w-[85%] h-[80%]"
    />
   </div>
   <div className="xs:w-full sm:w-[40%]">
    <h3 className="font-medium text-2xl pb-3">Log in to Exclusive</h3>
    <p className="text-base pb-8">Enter your details below</p>

    <form onSubmit={logIn} className="flex flex-col gap-10">
     {/* email */}
     <input
      type="text"
      name=""
      id="email"
      className="border-b-2 border-wild-sand-700 outline-none py-4"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     />
     {/* password */}
     <input
      type="password"
      name=""
      id="password"
      className="border-b-2 border-wild-sand-700 outline-none py-4"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />

     <div className="flex justify-between items-center">
      <input
       type="submit"
       value="Log in"
       className="bg-valencia-500 px-8 py-4 text-white font-medium hover:bg-valencia-400 cursor-pointer rounded-md"
      />

      <a href="http://" className="text-valencia-500 font-medium">
       Forgot Password?
      </a>
     </div>
    </form>
   </div>
  </section>
 );
};

export default Login;
