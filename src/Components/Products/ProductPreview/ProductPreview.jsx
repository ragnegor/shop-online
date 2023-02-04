import React from "react";
import style from "./ProductPreview.module.css";
import Button from "../../Button/Button";

function ProductPreview(props) {
  return (
      <div className={style.card} style={props.catalogStyles}>
        <img src={props.picture} alt={props.alt}/>
        <h4>{props.title}</h4>
        <p>${props.price}</p>
        <Button btnText={props.btnText}/>
      </div>
  )
}

export default ProductPreview;