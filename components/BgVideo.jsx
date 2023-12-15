
import React from 'react'
import style from "@/styles/video.module.scss";
const BgVideo = () => {
  return (
    <video className={style.video} src={require('@/public/video.mp4')} autoPlay muted loop />
  )
}

export default BgVideo
