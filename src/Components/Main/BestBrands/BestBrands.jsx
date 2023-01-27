import React from "react";
import style from "./BestBrands.module.css";


function BestBrands (props) {
  return (
    <div className={style.sectionBestBrands}>
      <h2>{props.data.h2}</h2>
      <div className={style.brands}>
        <div>
          <a href={props.data.link1.link}><img src={props.data.link1.picture} alt={props.data.link1.alt}/></a>
          <a href={props.data.link2.link}><img src={props.data.link2.picture} alt={props.data.link2.alt}/></a>
          <a href={props.data.link3.link}><img src={props.data.link3.picture} alt={props.data.link3.alt}/></a>
          <a href={props.data.link4.link}><img src={props.data.link4.picture} alt={props.data.link4.alt}/></a>
        </div>
        <div>
          <a href={props.data.link5.link}><img src={props.data.link5.picture} alt={props.data.link5.alt}/></a>
          <a href={props.data.link6.link}><img src={props.data.link6.picture} alt={props.data.link6.alt}/></a>
          <a href={props.data.link7.link}><img src={props.data.link7.picture} alt={props.data.link7.alt}/></a>
          <a href={props.data.link8.link}><img src={props.data.link8.picture} alt={props.data.link8.alt}/></a>
        </div>
      </div>
    </div>
  )
}

export default BestBrands;