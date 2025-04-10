"use client"; // Needed for client-side animations in Next.js

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimatedSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = sectionRef.current;

      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 60%",
            scrub: false, // smoother experience — scrub: true is best for parallax, not fades
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <div ref={sectionRef} className={`${styles.animatedSection} w-full`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
