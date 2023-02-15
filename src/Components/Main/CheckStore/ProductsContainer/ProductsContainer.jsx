import React from "react";
import style from "./ProductsContainer.module.css";
import ProductPreview from "../../../Products/ProductPreview/ProductPreview";

function ProductsContainer (props) {
  return(
    <div className={style.ProductsContainer}>
      <div className={style.header}>
        <h3>{props.title}</h3>
        <a href={props.viewAlllink}>{props.viewAll}</a>
      </div>
      <div className={style.products}>
        {
          props.products.map(product =>
            <div className={style.card} key={product.id}>
              <ProductPreview picture={product.image}
                              alt={product.alt}
                              title={product.title}
                              price={product.price}
                              id={product.id}
                              brand={product.brand}
                              model={product.model}
                              type={product.type}
                              strings={product.strings}
                              aboutGuitar={product.aboutGuitar}
                              year={product.year}
                              btnText={props.btnText}
                              btnTextForModal={props.btnTextForModal}
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ProductsContainer;