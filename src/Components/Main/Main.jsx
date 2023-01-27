import React from "react";
import "./Main.module.css";
import CheckStore from "./CheckStore/CheckStore";
import Categories from "./Categories/Categories";
import BestBrands from "./BestBrands/BestBrands";


function Main (props) {
  return (
    <main>
      <CheckStore data={props.data.chekStore}/>
      <Categories data={props.data.categories}/>
      <BestBrands data={props.data.bestBrands}/>
    </main>
  )
}

export default Main;