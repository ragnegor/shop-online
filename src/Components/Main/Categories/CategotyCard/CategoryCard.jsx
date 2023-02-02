import React from "react";
import style from "./CategoryCard.module.css";
import {Link} from "react-router-dom";

function CategoryCard(props) {
  return (
    <div className={style.card}>
      <img src={props.img} alt={props.alt}/>
      <div className={style.categoryItem}>
        <Link to={props.link}>{props.item}</Link>
      </div>
    </div>
  )
}

export default CategoryCard;