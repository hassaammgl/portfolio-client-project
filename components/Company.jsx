// Import necessary dependencies and styles
"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import img from "@/public/rename.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import style from "@/styles/company.module.scss";

const Company = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Adjust this threshold based on your preference
    const triggerPoint = windowHeight * 0.7;

    if (scrollY > triggerPoint) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: "100%", opacity: 0 });
    }
  };

  useEffect(() => {
    controls.start({ x: "100%", opacity: 0 });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className={style.company}
      initial={{ x: "100%", opacity: 0 }}
      animate={controls}
      transition={{duration: .8}}
    >
      <div className={style.btn}>
        <h2>Company</h2>
      </div>
      <div className={style.robot}>
        <Image src={img} alt="" />
        <div className={style.text}>
          <div className={style.top}>
            <p>
              Publisher: <span>Monster Programming</span>
            </p>
          </div>
          <div className={style.bottom}>
            <h4>
              An Intro to Algorithms and Data Structures (Javascript Edition)
            </h4>
            <p>
              <span>Dec 13, 2023</span>
              <FaArrowRightLong className={style.icon} />{" "}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Company;