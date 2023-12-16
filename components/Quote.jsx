// Import necessary dependencies and styles
"use client";

// Import necessary dependencies and styles

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import style from "@/styles/quote.module.scss";

const Quote = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Adjust this threshold based on your preference
    const triggerPoint = windowHeight * 0.7;

    if (scrollY > triggerPoint) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.8 });
    }
  };

  useEffect(() => {
    controls.start({ opacity: 0, scale: 0.8 });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className={style.quote}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      transition={{duration: 1.2}}
    >
      <div className={style.box}>
        <FaQuoteLeft className={style.iconleft} />
        <p>
          There&apos;s No Nobility In Playing <br /> Small. Be Different
        </p>
        <FaQuoteRight className={style.iconright} />
      </div>
    </motion.div>
  );
};

export default Quote;