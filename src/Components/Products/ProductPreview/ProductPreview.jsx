import React, {useState} from "react";
import style from "./ProductPreview.module.css";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import {useNavigate} from "react-router-dom";


function ProductPreview(props) {
  const [showModalState, setShowModal] = useState(false);
  const showModal = () => setShowModal(true);
  const hideModal = () => setShowModal(false);

  const navigate = useNavigate();
  const openMore = (id) => {
    navigate({
      pathname: "/shop-online/aboutGuitar",
      search: `?id=${id}`
    })
  }
  return (
      <div className={style.card} style={props.catalogStyles}>
        <img className={style.picGuitar} src={props.picture} alt={props.alt}/>
        <h4>{props.title}</h4>
        <p>${props.price}</p>
        <Button btnText={props.btnText} оnClick={() => openMore(props.id)}/>
        {/*<Modal title={props.title}*/}
        {/*       image={props.picture}*/}
        {/*       price={props.price}*/}
        {/*       brand={props.brand}*/}
        {/*       model={props.model}*/}
        {/*       type={props.type}*/}
        {/*       strings={props.strings}*/}
        {/*       year={props.year}*/}
        {/*       info={props.aboutGuitar}*/}
        {/*       active={showModalState}*/}
        {/*       onClose={hideModal}*/}
        {/*       btnTextForModal={props.btnTextForModal}*/}

        {/*/>*/}
      </div>
  )
}

export default ProductPreview;