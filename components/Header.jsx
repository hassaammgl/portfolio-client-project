import React from 'react'
import Image from 'next/image';
import style from "@/styles/header.module.scss";
import img from "@/public/nav.png"
import Hamburger from './Hamburger';


function Header() {
  return (
    <div className={style.header}>
      <Image src={img} alt='' />
      <Hamburger />
    </div>
  )
}

export default Header
