"use client";
import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import style from "@/styles/header.module.scss";
import style2 from "@/styles/menu.module.scss";
import img from "@/public/nav.png"
import { Fade as HamburgerIcon } from 'hamburger-react';


function Header() {

  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={style.header}>
        <div className={style.innermenu}>
          <Image className={style.img} src={img} alt='' />
          <div>
            <HamburgerIcon toggled={open} toggle={setOpen} />
          </div>
        </div>
      </div>
      {open && <Menu menuOptions={{ open, setOpen }} />}
    </>
  )
}

const Menu = ({ menuOptions }) => {
  return (
    <div className={style2.menu}>
      <div className={style2.box}>hello</div>
      <div className={style2.box}>hello</div>
      <HamburgerIcon toggled={menuOptions.open} toggle={menuOptions.setOpen} />
    </div>
  )
}

export default Header
