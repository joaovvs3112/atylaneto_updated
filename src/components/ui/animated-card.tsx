"use client";

import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverY?: number;
  delay?: number;
}

export default function AnimatedCard({
  children,
  className = "",
  hoverY = -8,
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: hoverY,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
