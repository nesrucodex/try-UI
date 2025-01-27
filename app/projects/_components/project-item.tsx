import React, { FC } from "react";

import styles from "./_styles/index.module.css";
// import Link from "next/link";
import { Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
  classNames?: {
    container?: ClassValue;
  };
};

const ProjectItem: FC<Props> = ({ title, classNames }) => {
  return (
    <article
      className={cn(
        "flex h-full w-full flex-col gap-y-4",
        styles["container"],
        classNames?.container,
      )}
    >
      <section className="flex h-[3rem] items-center justify-between">
        <p className={`${styles["title"]}`}>{title}</p>
        <div className="flex items-center gap-x-2">
          {/* <Button
            size="icon"
            variant={"ghost"}
            className="hover:scale-110 hover:bg-transparent hover:text-white"
          >
            <Expand size={20} />
          </Button> */}
          <Button
            size="icon"
            variant={"ghost"}
            className="hover:scale-110 hover:bg-transparent hover:text-white"
          >
            <Expand size={20} />
          </Button>
        </div>
      </section>

      <section className="flex-1 rounded-[1rem] border-[1.5px] border-neutral-200/10"></section>
    </article>
  );
};

export const ProjectThumbnail: FC<Props> = ({ title, classNames }) => {
  return (
    <article
      className={cn(
        `${styles["thumbnail"]} w-full cursor-pointer`,
        classNames?.container,
      )}
    >
      <h2 className="line-clamp-2">{title}</h2>
    </article>
  );
};

export default ProjectItem;
