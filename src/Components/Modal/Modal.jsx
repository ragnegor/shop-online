import React from "react";
import style from "./Modal.module.css";
import picGuitar from "../../assets/img/products/productOnBoard/The Essential Les Paul.png";
import Button from "../Button/Button";
import ii from "../../assets/img/aboutGuitarBg.jpg";

function Modal (props) {
  return (
    <div className={props.active ?  style.modal + " " + style.active : style.modal} onClick={props.onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{props.title}</h2>
       <div className={style.guitarPic}>
         <img src={props.image}/>
       </div>
        <div className={style.infoAboutGuitar}>
          <p>{props.info}</p>
          <div className={style.characteristic}>
          <h3>Characteristic</h3>
            <ol>
              <li>Brand: {props.brand}</li>
              <li>Model: {props.model}</li>
              <li>Type: {props.type}</li>
              <li>Number of strings: {props.strings}</li>
              <li>Year of issue: {props.year}</li>
            </ol>
          </div>
        </div>
        <div className={style.sale}>
          <p>${props.price}</p>
          <Button textBuyNow={props.btnTextForModal}/>
        </div>
      </div>
    </div>
  )
}

export default Modal;