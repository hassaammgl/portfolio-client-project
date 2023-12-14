"use client";
import style from "@/styles/quote.module.scss";
import React from 'react'
import Image from "next/image";
import bg from "@/public/bg.jpg"

const Quote = () => {
  return (
    <div className={style.quote}>
      <div className={style.box}>
          <Image src={bg} alt="" />
          <div className={style.text}>
        <p>There&apos;s No Nobility In Playing <br /> Small.Be Different</p>
          </div>
      </div>
    </div>
  )
}

export default Quote
