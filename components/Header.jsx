"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import style from "@/styles/header.module.scss";
import style2 from "@/styles/menu.module.scss";
import img from "@/public/nav.png";
import { Fade as HamburgerIcon } from "hamburger-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaTelegram,
  FaLinkedin,
  FaHandPointRight,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={style.header}>
        <div className={style.innermenu}>
          <Image className={style.img} src={img} alt="" />
          <div>
            <HamburgerIcon toggled={open} toggle={setOpen} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && <Menu menuOptions={{ open, setOpen }} />}
      </AnimatePresence>
    </>
  );
}

const Menu = ({ menuOptions }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={style2.menu}
    >
      <div className={style2.links}>
        <div className={style2.icon}>
          <HamburgerIcon
            toggled={menuOptions.open}
            toggle={menuOptions.setOpen}
          />
        </div>
        <div className={style2.pages}>
          <Link href={"/"}>
            <FaHandPointRight className={style2.activeicon} />
            Home{" "}
          </Link>
          <Link href={"/Projects"}>
            <FaHandPointRight className={style2.activeicon} />
            Projects{" "}
          </Link>
          <Link href={"/"}>
            <FaHandPointRight className={style2.activeicon} />
            Resume{" "}
          </Link>
          <Link href={"/"}>
            <FaHandPointRight className={style2.activeicon} />
            Personal Info{" "}
          </Link>
          <Link href={"/"}>
            <FaHandPointRight className={style2.activeicon} />
            Background{" "}
          </Link>
        </div>
      </div>
      <div className={style2.socials}>
        <motion.Link
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={style2.social}
          href={"/"}
        >
          <span>Github</span>
          <FaGithub className={style2.icon} />
        </motion.Link>
        <motion.Link
          initial={{ scale: 0 }} // Initial scale set to 0
          animate={{ scale: 1 }}
          className={style2.social}
          href={"/"}
        >
          <span>Linkedin</span>
          <FaLinkedin className={style2.icon} />
        </motion.Link>

        <motion.Link
          initial={{ scale: 0 }} // Initial scale set to 0
          animate={{ scale: 1 }}
          className={style2.social}
          href={"/"}
        >
          <span>Twitter</span>
          <BsTwitterX className={style2.icon} />
        </motion.Link>
        <motion.Link
          initial={{ scale: 0 }} // Initial scale set to 0
          animate={{ scale: 1 }}
          className={style2.social}
          href={"/"}
        >
          <span>Telegram</span>
          <FaTelegram className={style2.icon} />
        </motion.Link>
      </div>
    </motion.div>
  );
};

export default Header;
