"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { ToggleIt } from "./toggle-it";

const MotionDiv = () => {
  return (
    <ToggleIt btn="Show animation">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn("bg-blue-500 rounded w-fit p-2 text-white text-center")}
      >
        Framer One
      </motion.div>
    </ToggleIt>
  );
};

const AnimateProp = () => {
  return (
    <ToggleIt btn="Move Right">
      <motion.div animate={{ x: 100 }}>Framer One</motion.div>
    </ToggleIt>
  );
};

const Rotate = () => {
  return (
    <ToggleIt btn="Rotate">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <div className="h-10 w-10 bg-slate-900 rounded-full border-none relative">
          <div className="h-2 w-2 bg-slate-100 rounded-full border-none absolute top-0 left-0"></div>
          <div className="h-2 w-2 bg-slate-100 rounded-full border-none absolute top-0 right-0"></div>
          <div className="h-2 w-2 bg-slate-100 rounded-full border-none absolute bottom-0 left-0"></div>
          <div className="h-2 w-2 bg-slate-100 rounded-full border-none absolute bottom-0 right-0"></div>
        </div>
      </motion.div>
    </ToggleIt>
  );
};

const AutoAnimateOnValueChange = () => {
  const [count, setCount] = useState(0);

  return (
    <ToggleIt btn="Animate on value change">
      <div className="flex flex-row space-x-2">
        <motion.div animate={{ x: count * 10 }}>{count}</motion.div>
        <Button onClick={() => setCount((prev) => prev + 1)}>Increment</Button>
      </div>
    </ToggleIt>
  );
};

const Gestures = () => {
  return (
    <div className="flex space-x-3">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.01 }}
        whileFocus={{ backgroundColor: "green" }}
      >
        <Button>Tap Me</Button>
      </motion.div>

      <motion.div drag="x" dragConstraints={{ left: -100, right: 100 }}>
        <Button>Drag Me</Button>
      </motion.div>
    </div>
  );
};

const Variants = () => {
  const [hidden, setHidden] = useState(false);
  const list = {
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    hidden: {
      x: -10,
      opacity: 0,
    },
  };

  return (
    <div className="flex space-x-4">
      <Button onClick={() => setHidden((hidden) => !hidden)}>
        {hidden ? "Show" : "Hide"}
      </Button>
      <motion.div
        className="flex flex-row space-x-3"
        animate={hidden ? "hidden" : "visible"}
        variants={list}
      >
        <motion.p variants={item}>Yo</motion.p>
        <motion.p variants={item}>Yo</motion.p>
        <motion.p variants={item}>Yo</motion.p>
      </motion.div>
    </div>
  );
};

const ScrollAnimations = () => {
  return (
    <div className="overflow-y-auto h-32 border border-green-600">
      {Array.from({ length: 15 }).map((item, index) => (
        <div key={index}>{index}</div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Button>I appear on Scroll</Button>
      </motion.div>
    </div>
  );
};

export function Basics() {
  return (
    <div className="flex flex-col space-y-6 bg-slate-500 h-full w-full p-4">
      <MotionDiv />
      <Separator />
      <AnimateProp />
      <Separator />
      <Rotate />
      <Separator />
      <AutoAnimateOnValueChange />
      <Separator />
      <Gestures />
      <Separator />
      <Variants />
      <Separator />
      <ScrollAnimations />
    </div>
  );
}
