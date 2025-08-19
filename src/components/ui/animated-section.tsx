import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  amount?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.3,
}: AnimatedSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -100 };
      case "right":
        return { opacity: 0, x: 100 };
      case "up":
        return { opacity: 0, y: 50 };
      case "down":
        return { opacity: 0, y: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: false, amount }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
