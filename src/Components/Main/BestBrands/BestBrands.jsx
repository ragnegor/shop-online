import React from "react";
import style from "./BestBrands.module.css";
import BrandElement from "./BrandElement/BrandElement";


function BestBrands(props) {
  return (
    <div className={style.sectionBestBrands}>
      <h2>{props.data.h2} <span>{props.data.span}</span></h2>
      <div className={style.brands}>
        {
          props.data.brands.map(brand =>
            <div key={brand.id}>
              <BrandElement link={brand.link}
                              alt={brand.alt}
                              brandLogo={brand.brandLogo}/>
            </div>
          )
        }
      </div>
    </div>
  )
}


export default BestBrands;