"use client";
import {
 handleGoogleSignIn,
 signUpWithEmailAndPassword,
} from "@/Firebase/firebase";
import { setUser } from "@/Redux/Features/authSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

const SignUp = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const dispatch = useDispatch();
 const navigate = useRouter();

 const handleFormSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !password) {
   alert("Please fill in all the fields");
   return;
  }

  try {
   const user = await signUpWithEmailAndPassword(email, password, name);
   console.log(user)
   dispatch(setUser(user));
   // Clear the form fields
   setName("");
   setEmail("");
   setPassword("");
   // navigate to last page
   navigate.back();
  } catch (error) {
   console.error("Error signing up:", error);
  }
 };

 const handleGoogleSignUp = async () => {
  try {
   const user = await handleGoogleSignIn();
   dispatch(setUser(user));
   // navigate to last page
   navigate.back();
  } catch (error) {
   console.error("Error signing up with Google:", error);
   // Handle sign-up error, such as displaying an error message
  }
 };

 return (
  <section className="flex items-center gap-8 w-full my-8 h-full font-inter">
   <div className="w-[60%] hidden sm:block ">
    <Image
     src="/SideImage.png"
     alt="sideimage"
     width="2000"
     height="2000"
     className="w-[85%] h-[80%]"
    />
   </div>

   <div className="xs:w-full sm:w-[40%]">
    <h3 className="font-medium text-2xl pb-3">Create an account</h3>
    <p className="text-base pb-8">Enter your details below</p>
    <form
     action=""
     className="flex flex-col gap-10"
     onSubmit={handleFormSubmit}
    >
     <input
      type="text"
      name="username"
      id="username"
      className="border-b-2 border-wild-sand-700 outline-none py-2"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
     />
     <input
      type="text"
      name="email"
      id="email"
      className="border-b-2 border-wild-sand-700 outline-none py-2"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     />
     <input
      type="password"
      name="password"
      id="password"
      className="border-b-2 border-wild-sand-700 outline-none py-2"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />

      <input
       type="submit"
       value="Sign up"
       className="bg-valencia-500 px-8 py-4 text-white font-medium hover:bg-valencia-400 cursor-pointer rounded-md"
       onClick={signUpWithEmailAndPassword}
      />
    </form>
     <div className="flex flex-col justify-between gap-4 mt-8">
      <button
       type="submit"
       className="flex justify-center items-center gap-2 px-8 py-4 font-bold hover:bg-black hover:text-white border-2 rounded-md"
       onClick={handleGoogleSignUp}
      >
       <FcGoogle /> Sign up with Google
      </button>
      <p className="text-center">
       Already have account?{" "}
       <a href="/login" className=" font-medium text-underline">
        Log in
       </a>
      </p>
     </div>
   </div>
  </section>
 );
};

export default SignUp;
