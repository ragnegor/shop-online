import React from "react";
import style from "./Button.module.css";

function Button (props) {
  return (
    <button className={style.button} onClick={props.modalOnClick}>{props.btnText} </button>
  )
}

export default Button;