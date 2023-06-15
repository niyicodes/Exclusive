"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const AnimationWrapper = ({ children }) => {
 return (
  <>
   <AnimatePresence>
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: 30 }}
     transition={{ delay: 0.15, duration: 2, ease: "linear" }}
    >
     {children}
    </motion.div>
   </AnimatePresence>
  </>
 );
};

export default AnimationWrapper;
