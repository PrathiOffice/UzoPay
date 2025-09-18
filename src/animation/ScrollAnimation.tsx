// src/components/ScrollAnimation.tsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/ScrollAnimation.css";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out"
    | "rotate"
    | "flip"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "bounce"
    | "swing"
    | "tilt";
  once?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = "fade-up",
  once = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [once]);

  return (
    <div ref={ref} className={`${animation} ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
