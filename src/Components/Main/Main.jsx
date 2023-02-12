import React, {useEffect} from "react";
import "./Main.module.css";
import CheckStore from "./CheckStore/CheckStore";
import Categories from "./Categories/Categories";
import BestBrands from "./BestBrands/BestBrands";
import InfoOnline from "./InfoOnline/InfoOnline";
import headerStyles from  '../Header/Header.module.css';


function Main (props) {
  useEffect(() => {
     document.getElementById("header").className=headerStyles.header
  })
  return (
    <main>
      <InfoOnline infoOnline={props.dataInfo}/>
      <CheckStore data={props.data.chekStore}/>
      <Categories data={props.data.categories}/>
      <BestBrands data={props.data.bestBrands}/>
    </main>
  )
}

export default Main;