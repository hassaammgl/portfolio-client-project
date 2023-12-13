import React from 'react'
import style from "@/styles/home.module.scss";
import {FaHandPeace} from "react-icons/fa"

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.left}>
        <div className={style.box}>
        <FaHandPeace className={style.hand} />
        Hi There! I'm Monster Programming
        </div>
        <div className={style.heading}>
            <h1>A <span>Frontend Engineer.</span>I Help Startups <span>Launch</span>And <span>Grow</span> Their Products</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
