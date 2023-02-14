import React, {useEffect} from "react";
import style from "./StoreCatalog.module.css";
import Filters from "./Filters/Filters";
import Products from "./Products/Products";
import headerStyles from "../../Header/Header.module.css";


function StoreCatalog (props) {
  useEffect(() => {
    document.getElementById("header").className=headerStyles.head
  })
  const checkBoxes = document.querySelectorAll("input");
  console.log(checkBoxes)

  const styles = {width: "30%"}
  return (
    <div className={style.store}>
      <h2 id="ee">CHOOSE YOUR <span>GUITAR</span></h2>
      <div className={style.catalog}>
        <Filters filters={props.data}/>
        <Products data={props.dataGuitars}
                  btnText={props.btnText}
                  btnTextForModal={props.btnTextForModal}
                  catalogStyles={styles}
        />
      </div>
    </div>
  )
}

export default StoreCatalog;