"use client"

import React, { useEffect, useState }  from "react";
import style from "@/styles/video.module.scss";
import style2 from "@/styles/home.module.scss";
import front from "@/public/front.jpg";
import Image from "next/image";

const BgVideo = () => {
  const [isFront, setIsFront] = useState(true);
  useEffect(() => {
    const yourFunction = () => {
      console.log("Function is running!");
      const timeoutId = setTimeout(() => {
        setIsFront(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    };

    yourFunction();
  }, []);
  return (
    <>
    <video
      className={style.video}
      src={require("@/public/video.mp4")}
      autoPlay
      muted
      loop
      />
      {isFront && <DisplayImage />}
      </>
  );
};


const DisplayImage = () => {
  return (
    <>
      <Image className={style2.intro} src={front} alt="" />
    </>
  );
};

export default BgVideo;
