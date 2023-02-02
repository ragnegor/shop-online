import React from "react";
import style from "./BrandElement.module.css";
import {Link} from "react-router-dom";


function BrandElement(props) {
  return (
    <Link to={props.link}><img src={props.brandLogo} alt={props.alt}/></Link>
  )
}

export default BrandElement;