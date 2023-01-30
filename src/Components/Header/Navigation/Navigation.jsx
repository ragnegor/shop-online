import React from "react";
import style from "./Navigation.module.css";
import {Link} from "react-router-dom";

function Navigation(props) {
  return (
    <nav className={style.navigation}>
      <ol>
        <li><Link to={props.data.logoShop.link}><img src={props.data.logoShop.logo} alt={props.data.logoShop.alt}/></Link></li>
        <li><Link to={props.data.nav.link1.link}>{props.data.nav.link1.item}</Link></li>
        <li><a href={props.data.nav.link2.link}>{props.data.nav.link2.item}</a></li>
        <li><a href={props.data.nav.link3.link}>{props.data.nav.link3.item}</a></li>
      </ol>
    </nav>
  )
}

export default Navigation;