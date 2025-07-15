"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SlideUpOverlay({ children, className = "" }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      className={`absolute top-full left-0 w-full min-h-screen ${className}`}
      initial={{ y: 300, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}>
      {children}
    </motion.section>
  );
}
