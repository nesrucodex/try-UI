"use client";
import ProjectList from "./_components/project-list";
import { WordRotate } from "@/components/custom/word-rotate";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  return (
    <main className="flex h-screen flex-col overflow-hidden px-4">
      <section className="flex h-[5rem] items-center gap-8">
        <Button
          onClick={() => router.back()}
          variant={"ghost"}
          className="size-[3rem] rounded-full border-2 border-white/10 hover:bg-transparent hover:text-white"
        >
          <ArrowLeft size={50} />
        </Button>
        <h1 className="flex flex-wrap items-center justify-center text-2xl font-semibold leading-tight md:text-4xl">
          Showcase Our{" "}
          <WordRotate
            className="ml-2 text-blue-500"
            words={["Projects", "Ideas", "Innovations"]}
          />
        </h1>
      </section>

      <ProjectList />
    </main>
  );
};

export default Projects;
