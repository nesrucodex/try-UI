import React, { ReactNode } from "react";

import { motion } from "framer-motion";

type Props = {
  title: ReactNode;
  content: string;
};

const Hero = ({ title, content }: Props) => {
  return (
    <section className="flex h-[calc(100dvh-5rem)] flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ x: "-50vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          type: "spring",
          damping: 10,
        }}
      >
        {title}
      </motion.div>
      <motion.p
        initial={{ x: "50vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.35,
          type: "spring",
          damping: 10,
        }}
        className="max-w-xl px-8 text-center font-extralight text-neutral-400/50 md:text-lg"
      >
        {content}
      </motion.p>
    </section>
  );
};

export default Hero;
