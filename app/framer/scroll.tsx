"use client";
import { TestOverflow } from "@/components/test-overflow";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollBox = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef(null);
  console.log(scrollRef);
  const { scrollY, scrollYProgress } = useScroll({
    container: scrollRef,
  });
  console.log(scrollYProgress);

  const bgColor = useTransform(scrollYProgress, [1, 75], ["green", "blue"]);

  return (
    <motion.div
      className={cn("overflow-y-auto h-64 ring p-4 rounded ring-sky-300")}
      ref={scrollRef}
      style={{
        backgroundColor: bgColor,
        overflow: "scroll",
      }}
    >
      {children}
    </motion.div>
  );
};

function Component() {
  const scrollRef = useRef(null);

  return (
    <div ref={scrollRef} style={{ overflow: "scroll" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      >
        <TestOverflow />
      </motion.div>
    </div>
  );
}

const FirstComponent = () => {
  return (
    <ScrollBox>
      <motion.div></motion.div>
      <TestOverflow />
    </ScrollBox>
  );
};

export function Scroll() {
  return (
    <div className="flex flex-col space-y-6 bg-slate-500 h-full w-full p-4">
      <Component />
    </div>
  );
}
