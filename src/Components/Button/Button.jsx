import React from "react";
import style from "./Button.module.css";

function Button (props) {
  return (
    <button className={style.button} onClick={props.оnClick}>{props.btnText} {props.textBuyNow} </button>
  )
}

export default Button;