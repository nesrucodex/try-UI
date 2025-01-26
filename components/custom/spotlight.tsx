"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";
type Props = {
  className?: string;
  radialSize: string;
  radialColor: string;
};
const Spotlight: FC<Props> = ({
  className,
  radialSize = "10rem",
  radialColor = "#ffffff25",
}) => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className={cn(
        "absolute left-1/2 top-1/2 -z-[99] size-[10rem] rounded-full lg:size-[15rem]",
        className,
      )}
      style={{
        background: `radial-gradient(${radialSize}, ${radialColor}, transparent)`,
      }}
    />
  );
};

export default Spotlight;
