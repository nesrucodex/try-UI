"use client";
import { useRef, useState } from "react";
import ProjectItem from "./project-item";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DATA = [
  {
    id: "01",
    title: "Learn TypeScript",
    description: "A comprehensive guide to learning TypeScript from scratch.",
    category: "Education",
    image: "https://example.com/images/typescript-guide.jpg",
    href: "https://typescriptlang.org",
  },
  {
    id: "02",
    title: "Learn Animation",
    description: "A comprehensive guide to learning TypeScript from scratch.",
    category: "Education",
    image: "https://example.com/images/typescript-guide.jpg",
    href: "https://typescriptlang.org",
  },
  {
    id: "03",
    title: "Learn Frame-motion",
    description: "A comprehensive guide to learning TypeScript from scratch.",
    category: "Education",
    image: "https://example.com/images/typescript-guide.jpg",
    href: "https://typescriptlang.org",
  },
];

const ProjectList = () => {
  const projectsUL_Ref = useRef<HTMLUListElement | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const currentSlideIndexRef = useRef<number>(activeSlideIndex);

  const projects = Array.from(
    {
      length: 2,
    },
    (i) => i,
  )
    .map(() => DATA)
    .flat(1);

  const [randX] = useState(() => projects.map((_, i) => i % 2 === 0));

  const handleTransition = (direction: "left" | "right") => {
    if (!projectsUL_Ref.current) {
      // TODO: Notifications
      return;
    }

    if (direction === "right") {
      // Move current slide to the back
      const updatedProjects = [...projects];
      const [currentSlide] = updatedProjects.splice(activeSlideIndex, 1);
      updatedProjects.push(currentSlide);
      projects.splice(0, projects.length, ...updatedProjects);

      setActiveSlideIndex((prevIndex) => {
        return prevIndex >= projects.length - 1 ? 0 : prevIndex + 1;
      });
    }

    if (direction === "left") {
      // Bring the last slide to the front
      const updatedProjects = [...projects];
      const lastSlide = updatedProjects.pop();
      if (lastSlide) {
        updatedProjects.unshift(lastSlide);
      }
      projects.splice(0, projects.length, ...updatedProjects);

      setActiveSlideIndex((prevIndex) => {
        return prevIndex <= 0 ? projects.length - 1 : prevIndex - 1;
      });
    }
  };

  // Drived states

  const isMoveRight = activeSlideIndex > currentSlideIndexRef.current;

  // useEffect(() => {
  //   prevSlideIndexRef.current = activeSlideIndex;
  // }, [activeSlideIndex]);
  return (
    <section className="relative flex-1">
      <ul
        ref={projectsUL_Ref}
        className="relative mx-auto flex h-full w-[90vw] flex-row"
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        <AnimatePresence>
          {projects.map((data, index) => (
            <motion.div
              className={cn("absolute inset-0 left-0 top-0")}
              initial={{
                opacity: 0,
              }}
              id={data.id}
              animate={{
                x: randX[index]
                  ? -Math.abs(index - activeSlideIndex) * 10
                  : Math.abs(index - activeSlideIndex) * 10,
                y: Math.abs(index - activeSlideIndex) * 10,

                opacity: index < activeSlideIndex ? 0 : 1,
                z: -Math.abs(index - activeSlideIndex) * 10,
                zIndex: index === activeSlideIndex ? 10 : -10,
              }}
              style={{
                backdropFilter: `blur(10px)`,
              }}
              transition={{
                duration: 0.7,
              }}
              key={data.id + index}
            >
              {/* <h1 className="text-3xl font-bold text-blue-500">{index + 1}</h1> */}
              <ProjectItem {...data} />
            </motion.div>
          ))}
          <motion.div
            className={cn("absolute inset-0 left-0 top-0")}
            initial={{
              opacity: 1,
            }}
            id={projects[activeSlideIndex].id}
            animate={{}}
            exit={{
              opacity: 0,
              z: 50,
              scale: 0,
              // x: isMoveRight ? "70%" : "-70%",
              // y: 40,
              // rotateZ: isMoveRight ? "35deg" : "-35deg",
              transformOrigin: isMoveRight ? "bottom right" : "bottom left",
            }}
            transition={{
              duration: 1,
            }}
            key={activeSlideIndex}
          >
            <ProjectItem {...projects[activeSlideIndex]} />
          </motion.div>
        </AnimatePresence>
      </ul>

      <section className="absolute bottom-8 right-20 flex items-center gap-x-6">
        <Button
          size="icon"
          variant="ghost"
          className="size-10 rounded-full border border-white/10"
          onClick={() => handleTransition("left")}
        >
          <MoveLeft />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="size-10 rounded-full border border-white/10"
          onClick={() => handleTransition("right")}
        >
          <MoveRight />
        </Button>
      </section>
    </section>
  );
};

export default ProjectList;
