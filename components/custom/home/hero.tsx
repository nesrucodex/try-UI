import React, { ReactNode } from "react";

import { motion } from "framer-motion";

type Props = {
  title: ReactNode;
  content: string;
  buttons: {
    mainText: string;
    secondaryText: string;
    onMainClick: () => void;
  };
};

const Hero = ({ title, content, buttons }: Props) => {
  return (
    <section className="flex h-[calc(100dvh-5rem)] flex-col items-center justify-center">
      {title}
      <p className="max-w-md text-center text-neutral-400 md:text-lg">
        {content}
      </p>

      <div className="mt-10 flex gap-x-8">
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
          className="cursor-pointer rounded-full border border-white px-8 py-3 font-semibold text-white transition duration-700 hover:shadow-[0_0_25px_5px_#ffffff44,0_0_25px_5px_#ffffff44]"
        >
          {buttons.secondaryText}
        </motion.button>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
          className="cursor-pointer rounded-full bg-white px-8 py-3 font-semibold text-black transition duration-700 hover:shadow-[0_0_25px_5px_#ffffff44,0_0_25px_5px_#ffffff44]"
        >
          {buttons.mainText}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
