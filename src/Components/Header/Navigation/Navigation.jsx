import React from "react";
import style from "./Navigation.module.css";
import {Link} from "react-router-dom";

function Navigation(props) {
  return (
    <nav className={style.navigation}>
      <ol>
        <li><Link to={props.data.logoShop.link}><img src={props.data.logoShop.logo} alt={props.data.logoShop.alt}/></Link></li>
        {
          props.data.nav.map(link =>
          <li key={link.id}>
            <Link to={link.link}>{link.item}</Link>
          </li>
          )
        }
      </ol>
    </nav>
  )
}

export default Navigation;