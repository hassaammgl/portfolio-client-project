import React from "react";
import { FaReact, FaSass } from "react-icons/fa";
import { TbPolygon } from "react-icons/tb";
import { SiSolidity, SiTypescript } from "react-icons/si";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaAngular } from "react-icons/fa";
import style from "@/styles/language.module.scss";

const Languages = () => {
    return (
        <div className={style.technology}>
            <div className={style.btn}>
                <button>TECHNOLOGIES</button>
            </div>
            <div className={style.tech}>
                <div className={style.tec}>
                    <div className={style.techno}>
                        <FaReact className={style.icons} />
                        React
                    </div>
                    <div className={style.techno}>
                        <FaAngular className={style.icons} />
                        Angular
                    </div>
                    <div className={style.techno}>
                        <FaNodeJs className={style.icons} />
                        Node
                    </div>
                    <div className={style.techno}>
                        <DiMongodb className={style.icons} />
                        MongoDB
                    </div>
                    <div className={style.techno}>
                        <IoLogoJavascript className={style.icons} />
                        Javascript
                    </div>
                </div>
                <div className={style.tec}>
                    <div className={style.techno}>
                        <IoLogoFigma className={style.icons} />
                        Figma
                    </div>
                    <div className={style.techno}>
                        <FaSass className={style.icons} />
                        Sass
                    </div>
                    <div className={style.techno}>
                        <SiTypescript className={style.icons} />
                        Typescript
                    </div>
                    <div className={style.techno}>
                        <SiSolidity className={style.icons} />
                        Solidity
                    </div>
                    <div className={style.techno}>
                        <TbPolygon className={style.icons} />
                        Polygon
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;
