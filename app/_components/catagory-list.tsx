import React, { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  CATEGORIES: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
};

const CategoryList: FC<Props> = ({
    CATEGORIES,
  activeCategory,
  onCategoryClick,
}) => {
  return (
    <section className="mx-auto mt-4 flex max-w-4xl flex-wrap justify-center gap-4 px-4">
      {CATEGORIES.map((category, index) => (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: index * 0.2,
            duration: 1,
            type: "spring",
          }}
          key={index}
          onClick={() => onCategoryClick(category)}
          className={cn(
            "cursor-pointer select-none rounded-md border border-white/5 px-4 py-2 capitalize text-neutral-400 transition duration-500 hover:text-white hover:shadow-[0_0_30px_10px_#ffffff22]",
            {
              "bg-white text-black hover:text-black":
                category === activeCategory,
            }
          )}
        >
          {category}
        </motion.p>
      ))}
    </section>
  );
};

export default CategoryList;
