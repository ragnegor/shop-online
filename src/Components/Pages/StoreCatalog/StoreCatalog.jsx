import React from "react";
import style from "./StoreCatalog.module.css";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";


function StoreCatalog (props) {
  const styles = {width: "30%"}
  return (
    <div className={style.store}>
      <h2>CHOOSE YOUR <span>GUITAR</span></h2>
      <div className={style.catalog}>
        <Filters filters={props.data}/>
        <Products data={props.dataGuitars}
                  btnText={props.btnText}
                  catalogStyles={styles}
        />
      </div>
    </div>
  )
}

export default StoreCatalog;