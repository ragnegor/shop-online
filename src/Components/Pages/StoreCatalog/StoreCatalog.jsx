import React from "react";
import style from "./StoreCatalog.module.css";
import Filters from "./Filters/Filters";


function StoreCatalog (props) {
  return (
    <div className={style.store}>
      <h2>CHOOSE YOUR <span>GUITAR</span></h2>
      <div className={style.catalog}>
        <Filters filters={props.data}/>
        {/*<Products data={props.dataGuitars}/>*/}
      </div>
    </div>
  )
}

export default StoreCatalog;