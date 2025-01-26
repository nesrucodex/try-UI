"use client";
import React from "react";
import { motion } from "framer-motion";

import Hero from "@/components/custom/home/hero";
import { WordRotate } from "@/components/custom/word-rotate";
import Spotlight from "@/components/custom/spotlight";

const Page = () => {
  return (
    <main>
      <Hero
        title={
          <motion.h1
            layout
            transition={{
              layout: { duration: 0.5 },
            }}
            className="my-4 max-w-lg text-center text-5xl font-bold md:max-w-2xl md:text-6xl"
          >
            Showcase and
            <WordRotate
              className="text-orange-500"
              words={["Celebrate", "Show Off", "Elevate", "Inspire"]}
            />
            Your
            <WordRotate
              className="text-orange-500"
              words={["Animation", "Styling", "Creativity", "Innovation"]}
            />
            Skills.
          </motion.h1>
        }
        content="Share your projects, get recognized for your creativity, and connect with developers who appreciate your unique talents."
      />
    </main>
  );
};

export default Page;
