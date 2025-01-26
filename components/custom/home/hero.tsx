import React, { ReactNode } from "react";

type Props = {
  title: ReactNode;
  content: string;
};

const Hero = ({ title, content }: Props) => {
  return (
    <section className="flex h-[calc(100dvh-5rem)] flex-col items-center justify-center">
      {title}
      <p className="max-w-xl px-8 text-center text-neutral-400 md:text-lg">
        {content}
      </p>
    </section>
  );
};

export default Hero;
