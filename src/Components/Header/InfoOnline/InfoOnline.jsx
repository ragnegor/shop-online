import React from "react";
import style from "./InfoOnline.module.css";
import Button from "../../Button/Button";

function InfoOnline(props) {
  return (
    <div className={style.infoOnline}>
      <h1>{props.infoOnline.h1}<span>{props.infoOnline.span}</span> {props.infoOnline.h1afterSpan}</h1>
      <p>{props.infoOnline.p}</p>
      <div className={style.getApp}>
        <Button btnText={props.infoOnline.button}/>
        <a href={props.infoOnline.playmarket.link}><img src={props.infoOnline.playmarket.icon} alt={props.infoOnline.playmarket.alt}/></a>
        <a href={props.infoOnline.applestore.link}><img src={props.infoOnline.applestore.icon} alt={props.infoOnline.applestore.alt}/></a>
      </div>
    </div>
  )
}

export default InfoOnline;