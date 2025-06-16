"use client";

import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // cubic-bezier for smoothness
        type: "spring",
        stiffness: 60,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}
