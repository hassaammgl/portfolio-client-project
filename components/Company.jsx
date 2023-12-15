import style from "@/styles/company.module.scss";
import React from "react";
import Image from "next/image";
import img from "@/public/rename.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

const Company = () => {
  return (
    <div className={style.company}>
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
              <span>Dec 13,2023</span>
              <FaArrowRightLong className={style.icon} />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
