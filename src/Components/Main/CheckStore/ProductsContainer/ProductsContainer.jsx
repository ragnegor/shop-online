import React from "react";
import style from "./ProductsContainer.module.css";
import ProductPreview from "../../../Products/ProductPreview/ProductPreview";

function ProductsContainer (props) {
  return(
    <div className={style.newOnTheBoard}>
      <div className={style.header}>
        <h3>{props.title}</h3>
        <a href={props.viewAlllink}>{props.viewAll}</a>
      </div>
      <div className={style.products}>
        {
          props.products.map(product =>
            <div key={product.id}>
              {product.text}
              <ProductPreview picture={product.image}
                              alt={product.alt}
                              title={product.title}
                              price={product.price}
                              btnText={props.btnText}/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ProductsContainer;