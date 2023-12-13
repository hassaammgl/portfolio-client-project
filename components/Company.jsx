"use client";
import style from "@/styles/company.module.scss";
import React from 'react'
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import robots from "@/public/rename.jpeg"

const Company = () => {
    return (
        <div className={style.company}>
            <div className={style.btn}>
                <button>Company</button>
            </div>
            <div className={style.robot}>
                <Image src={robots} alt="" />
                <div className={style.text}>
                    <div className={style.top}>
                        <p>Publisher: <span>Monster Programming</span></p>
                    </div>
                    <div className={style.bottom}>
                        <h4>An Intro to Algorithms and Data Structures (Javascript Edition)</h4>
                        <p>Dec 13,2023 <FaArrowRightLong className={style.icon} /> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company
