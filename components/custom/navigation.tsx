"use client";

import { Activity, Component, HomeIcon, Package, SunMoon } from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/custom/dock";
import { useRouter } from "next/navigation";

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Products",
    icon: (
      <Package className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "/products",
  },
  {
    title: "Components",
    icon: (
      <Component className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Activity",
    icon: (
      <Activity className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Theme",
    icon: (
      <SunMoon className="h-full w-full text-neutral-200 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end bg-transparent pb-3">
        {data.map((item, idx) => (
          <DockItem
            onClick={() => {
              router.push(item.href);
            }}
            key={idx}
            className="aspect-square rounded-full bg-gray-200/10 dark:bg-neutral-800"
          >
            <DockLabel className="border-none bg-transparent text-white">
              {item.title}
            </DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
};

export default Navigation;
