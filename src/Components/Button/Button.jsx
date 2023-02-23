import React from "react";
import style from "./Button.module.css";

function Button(props) {
  return (
    <button className={style.button}
            onClick={props.onClick}>
            {props.btnText}
            {props.textBuyNow}
            {props.textAddCart}
            {props.textReview}

    </button>
  )
}

export default Button;