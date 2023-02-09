import React from "react";
import style from "./ProductPreview.module.css";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";


function ProductPreview(props) {
  console.log(props)
  return (
      <div className={style.card} style={props.catalogStyles}>
        <img src={props.picture} alt={props.alt}/>
        <h4>{props.title}</h4>
        <p>${props.price}</p>
        <Button btnText={props.btnText} modalOnClick={props.modalClick}/>
        <Modal title={props.title}

        />
      </div>
  )
}

export default ProductPreview;