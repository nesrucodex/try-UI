"use client";

import { motion } from "framer-motion";
const Spotlight = () => {
  return (
    <motion.div
      initial={{ scale: 0.2 }}
      animate={{ scale: 1.5 }}
      transition={{
        duration: 2,
      }}
      className="absolute left-1/4 top-[8rem] -z-[99] h-[20rem] w-[20rem] rounded-full"
      style={{
        background: "radial-gradient(150px, #ffffff44, transparent)",
      }}
    />
  );
};

export default Spotlight;
