import React, {useEffect} from "react";
import style from "./Basket.module.css";
import headerStyles from "../../Header/Header.module.css";
import d from "../../../assets/img/basket.svg"


function Basket () {
  useEffect(() => {
    document.getElementById("header").className=headerStyles.head
  })
  return (
    <div className={style.basket}>
      <h2>Your Basket</h2>

    </div>
  )
}

export default Basket;