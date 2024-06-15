"use client";
import { motion } from "framer-motion";
import { ToggleIt } from "./toggle-it";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FiGithub as GitHubIcon } from "react-icons/fi";

const TransitionBasics = () => {
  return (
    <ToggleIt btn="Basic Transition">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100, scale: 1.3 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "anticipate",
          repeat: 2,
          repeatDelay: 1,
          repeatType: "mirror",
        }}
      >
        <GitHubIcon className="h-10 w-10" />
      </motion.div>
    </ToggleIt>
  );
};

const LoadingPingPong = () => {
  return (
    <ToggleIt btn="Loading">
      <div className="w-full bg-primary h-4 rounded">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 300 }}
          transition={{
            duration: 2,
            ease: "anticipate",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="w-6 rounded h-full bg-secondary"
        ></motion.div>
      </div>
    </ToggleIt>
  );
};

const TransitionSpring = () => {
  return (
    <ToggleIt>
      <motion.div
        animate={{ x: 100 }}
        transition={{
          type: "spring",
          stiffness: 100,
        }}
      >
        <GitHubIcon className="h-10 w-10" />
      </motion.div>
    </ToggleIt>
  );
};

const ValueSpecificTransitions = () => {
  return (
    <ToggleIt btn="Value Specific Transition">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100, scale: 1.3 }}
        transition={{
          x: { delay: 0.3, duration: 1, ease: "anticipate" },
          scale: {
            type: "spring",
            stiffness: 88,
          },
        }}
      >
        <GitHubIcon className="h-10 w-10" />
      </motion.div>
    </ToggleIt>
  );
};

export function Transistion() {
  return (
    <div className="flex flex-col space-y-6 bg-slate-500 h-full w-full p-4">
      <TransitionBasics />
      <Separator />
      <LoadingPingPong />
      <Separator />
      <TransitionSpring />
      <Separator />
      <ValueSpecificTransitions />
    </div>
  );
}
