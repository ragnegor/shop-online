import React, {useEffect} from "react";
import style from "./Header.module.css";
import Navigation from "./Navigation/Navigation";



function Header (props) {

  return (
    <header id="header" className={style.header}>
      <Navigation data={props.data.navigation}/>
    </header>
  )
}

export default Header;