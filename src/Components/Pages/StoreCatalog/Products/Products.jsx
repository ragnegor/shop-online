import React from "react";
import style from "./Products.module.css";
import ProductPreview from "../../../Products/ProductPreview/ProductPreview";


function Products(props) {
  console.log(props)
  return (
    <div className={style.productsContainer}>
      {
        props.data.allGuitars.map(guitars =>
          <ProductPreview key={guitars.header}
                          picture={guitars.image}
                          alt={guitars.alt}
                          title={guitars.title}
                          price={guitars.price}
                          btnText={props.btnText}
                          className={style.catalogView}
                          catalogStyles={props.catalogStyles}
          />
        )
      }

    </div>
  )
}


export default Products;