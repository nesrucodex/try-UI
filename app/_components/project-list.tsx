import ProjectCard from "@/components/custom/project-card";
import React, { FC } from "react";

const ProjectList: FC = () => {
  return (
    <section className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 px-8 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        title="Amharic Converter"
        category="Libraries"
        description="A powerful library to convert Amharic text seamlessly with support for multiple formats."
        likes={120}
        comments={35}
        githubUrl="https://github.com/yourusername/amharic-converter"
        liveDemoUrl="https://amharic-converter-demo.com"
      />
      <ProjectCard
        title="Portfolio Builder"
        category="Web Tools"
        description="Easily create and share your portfolio online with customizable themes and templates."
        likes={85}
        comments={12}
        githubUrl="https://github.com/yourusername/portfolio-builder"
      />
      <ProjectCard
        title="CSS Animator"
        category="Design Tools"
        description="A tool to simplify creating stunning CSS animations with a live preview feature."
        likes={200}
        comments={45}
        githubUrl="https://github.com/yourusername/css-animator"
      />
    </section>
  );
};

export default ProjectList;
