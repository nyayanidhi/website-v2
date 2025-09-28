"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = false,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const shouldStart = startOnView ? isInView : true;

  useEffect(() => {
    if (!shouldStart) return;

    const timeout = setTimeout(() => {
      if (currentIndex < children.length) {
        const interval = setInterval(() => {
          setDisplayedText((prev) => prev + children[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, duration);

        return () => clearInterval(interval);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [children, currentIndex, delay, duration, shouldStart]);

  return (
    <Component ref={ref} className={cn(className)}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="inline-block ml-0.5"
      >
        |
      </motion.span>
    </Component>
  );
}
