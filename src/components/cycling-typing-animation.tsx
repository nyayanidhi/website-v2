"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CyclingTypingAnimationProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  delayBetweenTexts?: number;
}

export function CyclingTypingAnimation({
  texts,
  className,
  typingSpeed = 50,
  delayBetweenTexts = 2000,
}: CyclingTypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing
      if (displayedText.length < currentFullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, typingSpeed / 2);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, currentTextIndex, texts, isDeleting, typingSpeed, delayBetweenTexts]);

  return (
    <div className={cn("block text-left", className)}>
      <span>{displayedText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </div>
  );
}
