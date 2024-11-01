"use client"; // For Next.js to avoid hydration issues

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimatedSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: -50, scale: 1 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 5,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: element,
          start: "top 60%", // When the top of the element is 80% down the viewport
          end: "top 50%", // When it scrolls up to 30% of the viewport
          scrub: true, // Smooth animation linked to scroll position
          toggleActions: "play none none none", // Play only on scroll down
          once: true, // Ensure the animation triggers only once
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className={`${styles.animatedSection} w-full`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
