import { handleSignOut } from "@/Firebase/firebase";
import { setUser } from "@/Redux/Features/authSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { RxPerson } from "react-icons/rx";
import { TbLogout, TbLogin } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = () => {
 const navigate = useRouter();
 const dispatch = useDispatch()
 const { user } = useSelector((state) => state.auth);

 const LogOut = async () => {
  try {
   await handleSignOut();
   dispatch(setUser(null));
  } catch (error) {
   console.log("Error signing out:", error);
  }
 };

 return (
  <section className="w-[260px] py-3 px-8 font-poppins profileglass text-white font-medium z-50">
   {/* link to account */}
   {user && (
    <div
     className="flex items-center gap-6 my-8"
     onClick={() => navigate.push("/account")}
    >
     <RxPerson className="text-3xl" />
     <h3>Manage Account</h3>
    </div>
   )}
   {/* login and logout */}
   {user ? (
    <button
     type="button"
     className="flex items-center gap-6 my-8"
     onClick={LogOut}
    >
     <TbLogout className="text-3xl" />
     <h3>Logout</h3>
    </button>
   ) : (
    <div
     className="flex items-center gap-6 my-8"
     onClick={() => navigate.push("/login")}
    >
     <TbLogin className="text-3xl" />
     <h3>Login</h3>
    </div>
   )}
  </section>
 );
};

export default Dropdown;
