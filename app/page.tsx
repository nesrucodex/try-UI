"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Hero from "@/components/custom/home/hero";
import { WordRotate } from "@/components/custom/word-rotate";
import Footer from "@/components/custom/footer";
import ProjectList from "./_components/project-list";
import CategoryList from "./_components/catagory-list";

const CATAGORIES =
  `works seamlessly with custom Tailwind configurations and because its just a Prettier plugin it works anywhere Prettier works means that any classes in the base layer will be sorted first followed by classes in the components layer and then finally classes in the utilities laye`
    .split(" ")
    .map((word) => word.trim())
    .filter((word) => word.length > 5);

const Page = () => {
  const [activeCatagory, setActiveCatagory] = useState(CATAGORIES[0]);

  return (
    <>
      <main>
        <Hero
          title={
            <motion.h1
              layout
              transition={{
                layout: { duration: 0.5 },
              }}
              className="my-4 h-[10rem] max-w-lg text-center text-5xl font-bold md:max-w-2xl md:text-6xl"
            >
              Showcase and{" "}
              <WordRotate
                className="text-orange-500"
                words={["Celebrate", "Show Off", "Elevate", "Inspire"]}
              />{" "}
              Your{" "}
              <WordRotate
                className="text-orange-500"
                words={["Animation", "Styling", "Creativity", "Design"]}
              />{" "}
              Skills.
            </motion.h1>
          }
          content="Share your projects, get recognized for your creativity, and connect with developers who appreciate your unique talents."
          buttons={{
            mainText: "Discover More",
            secondaryText: "Start Sharing",
            onMainClick: () => {},
          }}
        />
        <section>
          <CategoryList
            CATEGORIES={CATAGORIES}
            activeCategory={activeCatagory}
            onCategoryClick={setActiveCatagory}
          />

          <ProjectList />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
