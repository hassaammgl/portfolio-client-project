"use client";
import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import style from "@/styles/header.module.scss";
import style2 from "@/styles/menu.module.scss";
import img from "@/public/nav.png"
import { Fade as HamburgerIcon } from 'hamburger-react';
import Link from 'next/link';


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
      <div className={style2.links}>
        <div className={style2.icon}>
          <HamburgerIcon toggled={menuOptions.open} toggle={menuOptions.setOpen} />
        </div>
        <div className={style2.pages}>
          <Link href={"/"}>Home</Link>
          <Link href={"/Projects"}>Projects</Link>
          <Link href={"/"}>Resume</Link>
          <Link href={"/"}>Personal Info</Link>
          <Link href={"/"}>Background</Link>
        </div>
      </div>
      <div className={style2.social}>
        <Link href={"/"} className={style2.link}>Github</Link>
        <Link href={"/"} className={style2.link}>Linkedin</Link>
        <Link href={"/"} className={style2.link}>Twitter</Link>
        <Link href={"/"} className={style2.link}>Calendly</Link>
      </div>
    </div>
  )
}

export default Header
