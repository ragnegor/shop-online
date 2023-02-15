import React from "react";
import style from "./Products.module.css";
import ProductPreview from "../../../Products/ProductPreview/ProductPreview";


function Products(props) {
  return (
    <div className={style.productsContainer}>
      {
        props.data.allGuitars.map(guitars =>
          <ProductPreview key={guitars.header}
                          picture={guitars.image}
                          alt={guitars.alt}
                          title={guitars.title}
                          brand={guitars.brand}
                          model={guitars.model}
                          type={guitars.type}
                          strings={guitars.strings}
                          id={guitars.id}
                          year={guitars.year}
                          aboutGuitar={guitars.aboutGuitar}
                          price={guitars.price}
                          btnText={props.btnText}
                          btnTextForModal={props.btnTextForModal}
                          className={style.catalogView}
                          catalogStyles={props.catalogStyles}
          />
        )
      }

    </div>
  )
}


export default Products;