"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CyclingTypingAnimation } from "@/components/cycling-typing-animation";
import DotPattern from "@/components/magicui/dot-pattern";
import { BorderBeam } from "@/components/magicui/border-beam";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.a
      href="#"
      className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
        📣 25% off
      </div>
      <p className="text-xs font-medium text-primary sm:text-sm">
        on all cases till April 30th 2025
      </p>
      {/* <svg
        width="12"
        height="12"
        className="ml-1"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
          fill="hsl(var(--primary))"
        />
      </svg> */}
    </motion.a>
  );
}

function HeroTitles() {
  const legalTexts = [
    "Appeals, Writs, Petitions",
    "Responses to Regulatory Bodies",
    "Written Arguments",
    "Precedent Research",
    "Translations",
  ];

  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center space-y-8 py-20">
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
      >
        <span className="mr-2">⚡</span>
        AI-Powered Legal Excellence
      </motion.div>

      {/* Main content with gradient background */}
      <motion.div
        className="relative w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease,
        }}
      >
        {/* Gradient glow effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[200px] w-[80%] bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
        
        <div className="relative">
          {/* Main typing animation */}
          <div className="mb-6 flex justify-center">
            <CyclingTypingAnimation
              texts={legalTexts}
              className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight min-h-[1.2em] text-center"
              typingSpeed={60}
              delayBetweenTexts={2500}
            />
          </div>
          
          {/* Subtitle with enhanced styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="space-y-2"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
              With <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Legal × Indic AI</span>
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your legal practice with cutting-edge AI technology
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats or features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
        className="flex flex-wrap justify-center gap-8 pt-8"
      >
        {[
          { value: "24hr", label: "Turnaround" },
          { value: "95%", label: "Accuracy" },
          { value: "500+", label: "Cases Handled" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <Link
          href="https://app.nyayanidhi.com"
          className={cn(
            buttonVariants({ variant: "default", size: "lg" }),
            "group relative overflow-hidden px-8"
          )}
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
        <Link
          href="mailto:nyayanidhi18@gmail.com"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "px-8 border-primary/20 hover:border-primary/40"
          )}
        >
          Schedule Demo
        </Link>
      </motion.div>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="https://app.nyayanidhi.com"
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
          Get started for free
        </Link>
      </motion.div>
      <motion.p
        className="mt-5 text-sm text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        AI-powered solutions trusted by India's top legal minds. <br /> Automated drafting, expert research, seamless translations under 24 Hours. We empower you to win.
      </motion.p>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/dashboard.png"
        thumbnailAlt="Hero Video"
        className="border rounded-lg shadow-lg max-w-screen-lg mt-16"
      />
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <DotPattern
        className={cn(
          "absolute inset-0 -z-20 h-full w-full",
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
        )}
      />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl animation-delay-2000" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-pink-500/10 blur-3xl animation-delay-4000" />
      </div>

      <div className="relative z-10 flex w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <HeroTitles />
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/60 to-transparent" />
    </section>
  );
}
