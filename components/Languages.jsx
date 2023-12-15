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
            <h2>TECHNOLOGIES</h2>
            <div className={style.tech}>
                <div>
                    <FaReact className={style.icons} />

                    <p> React</p>
                </div>
                <div>
                    <FaAngular className={style.icons} />
                    <p> Angular</p>
                </div>
                <div>
                    <FaNodeJs className={style.icons} />
                    <p> Node</p>
                </div>
                <div>
                    <DiMongodb className={style.icons} />
                    <p> MongoDB</p>
                </div>
                <div>
                    <IoLogoJavascript className={style.icons} />
                    <p>   Javascript</p>
                </div>
                <div>
                    <IoLogoFigma className={style.icons} />
                    <p>  Figma</p>
                </div>
                <div>
                    <FaSass className={style.icons} />
                    <p> Sass</p>
                </div>
                <div>
                    <SiTypescript className={style.icons} />
                    <p> Typescript</p>
                </div>
                <div>
                    <SiSolidity className={style.icons} />
                    <p>  Solidity</p>
                </div>
                <div>
                    <TbPolygon className={style.icons} />
                    <p> Polygon</p>
                </div>
            </div>
        </div>
    );
};

export default Languages;
