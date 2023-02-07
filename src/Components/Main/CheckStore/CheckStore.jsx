import React, {useState} from "react";
import style from "./CheckStore.module.css";
import dataProductsOnBoard from "../../../data/dataProductsOnBoard";
import dataProductsBestSale from "../../../data/dataProductsBestSale";
import ProductsContainer from "./ProductsContainer/ProductsContainer";
import Modal from "../../Modal/Modal";


function CheckStore(props) {
  const [modalActive, setModalActive] = useState(true)
  return (
    <section className={style.checkStore}>
      <button onClick={() => setModalActive(true)}>modal</button>
      <Modal active={modalActive} setActive={setModalActive}/>
      <h2>{props.data.h2} <span>{props.data.span}</span></h2>

      <ProductsContainer title={props.data.onBoard.h3}
                         viewAll={props.data.onBoard.link.item}
                         viewAlllink={props.data.onBoard.link.link}
                         btnText={props.data.onBoard.button}
                         products={dataProductsOnBoard}

      />

      <ProductsContainer title={props.data.bestSale.h3}
                         viewAll={props.data.onBoard.link.item}
                         viewAlllink={props.data.onBoard.link.link}
                         btnText={props.data.onBoard.button}
                         products={dataProductsBestSale}
      />
    </section>
  )
}

export default CheckStore;