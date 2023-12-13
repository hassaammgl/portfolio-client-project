import React from 'react'
import Image from 'next/image';
import style from "@/styles/header.module.scss";
import img from "@/public/nav.png"
import Hamburger from './Hamburger';


function Header() {
  return (
    <div className={style.header}>
      <div className={style.innermenu}>
        <Image className={style.img} src={img} alt='' />
        <Hamburger />
      </div>
    </div>
  )
}

export default Header
