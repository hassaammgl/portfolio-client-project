"use client";
import style from "@/styles/company.module.scss";
import React from 'react'
import Image from "next/image";
import robots from "@/public/rename.jpeg"

const Company = () => {
    return (
        <div className={style.company}>
            <div className={style.btn}>
                <button>Company</button>
            </div>
        <div className={style.robot}>
        <Image src={robots} alt="" />
        </div>
        </div>
    )
}

export default Company
