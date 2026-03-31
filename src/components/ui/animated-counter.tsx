"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "4.9/5", "+1.000", "20+"
  className?: string;
}

export default function AnimatedCounter({
  value,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric part
    const match = value.match(/([+]?)(\d+[.,]?\d*)(.*)/);
    if (!match) return;

    const prefix = match[1];
    const numStr = match[2];
    const suffix = match[3];
    const hasDecimal = numStr.includes(".");
    const hasDot = numStr.includes(",");
    const target = parseFloat(numStr.replace(",", ""));

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      if (hasDecimal) {
        setDisplay(`${prefix}${current.toFixed(1)}${suffix}`);
      } else if (hasDot) {
        setDisplay(
          `${prefix}${Math.floor(current)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}${suffix}`
        );
      } else {
        setDisplay(`${prefix}${Math.floor(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
