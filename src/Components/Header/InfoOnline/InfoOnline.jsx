import React from "react";
import style from "./InfoOnline.module.css";


function InfoOnline(props) {
  return (
    <div className={style.infoOnline}>
      <h1>{props.data.infoOnline.h1}</h1>
      <p>{props.data.infoOnline.p}</p>
      <div className={style.getApp}>
        <button>{props.data.infoOnline.button}</button>
        <a href={props.data.infoOnline.playmarket.link}><img src={props.data.infoOnline.playmarket.icon} alt={props.data.infoOnline.playmarket.alt}/></a>
        <a href={props.data.infoOnline.applestore.link}><img src={props.data.infoOnline.applestore.icon} alt={props.data.infoOnline.applestore.alt}/></a>
      </div>
    </div>
  )
}

export default InfoOnline;