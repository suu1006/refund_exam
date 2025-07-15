"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SlideUpSectionProps = {
  children: ReactNode;
  className?: string;
  offset?: number; // 추가적인 y 거리 조정
};

export default function SlideUpSection({
  children,
  className = "",
  offset = 100,
}: SlideUpSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center ${className}`}
      initial={{ opacity: 0, y: offset }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}>
      {children}
    </motion.section>
  );
}
