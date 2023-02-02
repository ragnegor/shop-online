import React from "react";
import style from "./CheckBoxLabel.module.css";


function CheckBoxLabel(props) {
  return (
    <div className={style.checkBox}>
      <input type={props.checkbox} id={props.id} name="check"/>
      <label htmlFor={props.htmlFor}>{props.item}</label>
    </div>
  )
}

export default CheckBoxLabel;