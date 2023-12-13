import React from 'react'
import {BiMenuAltRight} from "react-icons/bi";
import Image from 'next/image';
import style from "@/styles/header.module.scss";
import img from "@/public/nav.png"
function Header() {
  return (
    <div className={style.header}>
      <Image src={img} alt='' />
      <BiMenuAltRight className={style.icon} />
    </div>
  )
}

export default Header
