"use client";
import style from "@/styles/quote.module.scss";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Quote = () => {
  return (
    <div className={style.quote}>
      <div className={style.box}>
        <FaQuoteLeft className={style.iconleft} />
        <p>
          There&apos;s No Nobility In Playing <br /> Small.Be Different
        </p>
        <FaQuoteRight className={style.iconright} />
      </div>
    </div>
  );
};

export default Quote;
