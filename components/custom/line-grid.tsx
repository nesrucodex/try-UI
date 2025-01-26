"use client";
import React from "react";
import { motion } from "framer-motion";

const LineGrid = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.4 }}
      transition={{
        duration: 2,
      }}
      className="fixed inset-0 -z-[999] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
    />
  );
};

export default LineGrid;
