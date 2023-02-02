import React from "react";
import style from "./Categories.module.css";
import CategoryCard from "./CategotyCard/CategoryCard";

function Categories(props) {
  return (
    <div className={style.sectionCategories}>
      <h2>{props.data.h2} <span>{props.data.span}</span></h2>
      <div className={style.categories}>
        {
          props.data.categoryCards.map(card =>
            <div key={card.id}>
            <CategoryCard img={card.picture}
                          alt={card.alt}
                          link={card.link}
                          item={card.text}
            />

            </div>
          )
        }
        {/*<div>*/}
        {/*  <img src={props.data.acoustic.picture} alt={props.data.acoustic.alt}/>*/}
        {/*  <div className={style.categoryItem}>*/}
        {/*    <a href={props.data.acoustic.link}>{props.data.acoustic.text}</a>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={props.data.electric.picture} alt={props.data.electric.alt}/>*/}
        {/*  <div className={style.categoryItem}>*/}
        {/*    <a href={props.data.electric.link}>{props.data.electric.text}</a>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={props.data.basses.picture} alt={props.data.basses.alt}/>*/}
        {/*  <div className={style.categoryItem}>*/}
        {/*    <a href={props.data.basses.link}>{props.data.basses.text}</a>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <img src={props.data.collection.picture} alt={props.data.basses.alt}/>*/}
        {/*  <div className={style.categoryItem}>*/}
        {/*    <a href={props.data.collection.link}>{props.data.collection.text}</a>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default Categories;