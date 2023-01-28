import React from "react";
import style from "./CheckStore.module.css";
import dataProductsOnBoard from "../../../data/dataProductsOnBoard";
import dataProductsBestSale from "../../../data/dataProductsBestSale";


function CheckStore(props) {
  return (
    <section className={style.checkStore}>
      <h2>{props.data.h2} <span>{props.data.span}</span></h2>
      <div className={style.header}>
        <h3>{props.data.onBoard.h3}</h3>
        <a href={props.data.onBoard.link.link}>{props.data.onBoard.link.item}</a>
      </div>
      <div className={style.products}>
        {
          dataProductsOnBoard.map(product =>
            <div key={product.id}>
              {product.text}
              <div className={style.card}>
                <img src={product.image} alt={product.alt}/>
                <h4>{product.title}</h4>
                <p>${product.price}</p>
                <button>{props.data.onBoard.button}</button>
              </div>
            </div>
          )
        }
      </div>

      <div className={style.header}>
        <h3>{props.data.bestSale.h3}</h3>
        <a href={props.data.bestSale.link.link}>{props.data.bestSale.link.item}</a>
      </div>
      <div className={style.products}>
        {
          dataProductsBestSale.map(product =>
            <div key={product.id}>
              {product.text}
              <div className={style.card}>
                <img src={product.image} alt=""/>
                <h4>{product.title}</h4>
                <p>${product.price}</p>
                <button>{props.data.bestSale.button}</button>
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default CheckStore;