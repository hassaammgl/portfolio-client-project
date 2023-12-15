import React from 'react'
import { FaGithub, FaTelegram, FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import style from "@/styles/footer.module.scss";
import Link from 'next/link';
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={style.footer}>
      <h1>CONNET WITH ME</h1>
      <div className={style.links}>
        <Link className={style.social} href={"/"}>
          <span>Github</span>
          <FaGithub className={style.icon} />
        </Link>
        <Link className={style.social} href={"/"}>
          <span>Linkedin</span>
          <FaLinkedin className={style.icon} />
        </Link>
        <Link className={style.social} href={"/"}>
          <span>Twitter</span>
          <BsTwitterX className={style.icon} />
        </Link>
        <Link className={style.social} href={"/"}>
          <span>Telegram</span>
          <FaTelegram className={style.icon} />
        </Link>
      </div>
      <div className={style.shoot}>
        <span>SHOOT ME A MAIL</span>
        <MdAttachEmail />
      </div>
      <div className={style.mainfooter}>
        <p>Built From Scratch with
          <span>
            <FaHeart className={style.hearticon} />{" "}
          </span>
          &copy; Copyright 2023. Monster Programming. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
