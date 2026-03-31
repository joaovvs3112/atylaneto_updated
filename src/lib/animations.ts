import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  },
});

export const fadeLeft = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease },
  },
});

export const fadeRight = (delay = 0): Variants => ({
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease },
  },
});

export const scaleIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay, ease },
  },
});

export const stagger = (staggerChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren },
  },
});

export const viewportConfig = { once: true, amount: 0.15 as const };
