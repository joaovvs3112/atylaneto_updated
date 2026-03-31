"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  strength = 4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({
      x: x * (strength / rect.width) * 2,
      y: y * (strength / rect.height) * 2,
    });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.2 }}
      className="inline-block"
    >
      <Tag
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={className}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
