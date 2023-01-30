import React from "react";
import style from "./StoreCatalog.module.css";
import Philters from "./Philters/Philters";

function StoreCatalog () {
  return (
    <div className={style.store}>
      <h2>CHOOSE YOUR <span>GUITAR</span></h2>
      <Philters/>

    </div>
  )
}

export default StoreCatalog;