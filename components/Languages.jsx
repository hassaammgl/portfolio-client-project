import React from 'react'
import { FaReact , FaSass } from "react-icons/fa";
import { TbPolygon } from "react-icons/tb";
import { SiSolidity ,SiTypescript } from "react-icons/si";
import { IoLogoFigma , IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs ,FaAngular } from "react-icons/fa";
import style from "@/styles/language.module.scss";

const Languages = () => {
  return (
    <div className={style.technology}>
        <div className={style.btn}>
        <button>TECHNOLOGIES</button>
        </div>
      <div className={style.tech}>
        <div className={style.techno}>
            <FaReact />
            React
        </div>
        <div className={style.techno}>
            <FaAngular />
            Angular
        </div>
        <div className={style.techno}>
            <FaNodeJs />
            Node
        </div>
        <div className={style.techno}>
            <DiMongodb />
            MongoDB
        </div>
        <div className={style.techno}>
            <IoLogoJavascript />
            Javascript
        </div>
        <div className={style.techno}>
            <IoLogoFigma />
            Figma
        </div>
        <div className={style.techno}>
            <FaSass />
            Sass
        </div>
        <div className={style.techno}>
            <SiTypescript />
            Typescript
        </div>
        <div className={style.techno}>
            <SiSolidity />
            Solidity
        </div>
        <div className={style.techno}>
            <TbPolygon />
            Polygon
        </div>
      </div>
    </div>
  )
}

export default Languages
