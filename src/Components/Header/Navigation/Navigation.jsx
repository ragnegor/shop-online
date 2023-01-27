import React from "react";
import style from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={style.navigation}>
      <ol>
        <li><a href={props.data.logoShop.link}><img src={props.data.logoShop.logo} alt={props.data.logoShop.alt}/></a></li>
        <li><a href={props.data.nav.link1.link}>{props.data.nav.link1.item}</a></li>
        <li><a href={props.data.nav.link2.link}>{props.data.nav.link2.item}</a></li>
        <li><a href={props.data.nav.link3.link}>{props.data.nav.link3.item}</a></li>
      </ol>
    </nav>
  )
}

export default Navigation;