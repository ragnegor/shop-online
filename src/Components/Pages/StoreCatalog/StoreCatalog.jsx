import React from "react";
import style from "./StoreCatalog.module.css";
import Filters from "./Filters/Filters";

function StoreCatalog (props) {
  console.log(props)
  return (
    <div className={style.store}>
      <h2>CHOOSE YOUR <span>GUITAR</span></h2>

      <Filters filters={props.data}/>

    </div>
  )
}

export default StoreCatalog;