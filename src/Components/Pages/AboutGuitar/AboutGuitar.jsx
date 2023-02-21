import React, {useEffect, useState} from "react";
import style from "./AboutGuitar.module.css";
import headerStyles from "../../Header/Header.module.css";
import Carousel from "../../Carousel/Carousel";
import Button from "../../Button/Button";
import {useSearchParams} from "react-router-dom";
import dataAllGuitars from "../../../data/dataAllGuitars";

function AboutGuitar(props) {
  console.log(props)
  const [search,] = useSearchParams();
  const [currentId, setCurrentId] = useState(null);
  const [currentItem, setCurrentItem] = useState([]);

  useEffect(() => {
    document.getElementById("header").className = headerStyles.head;
  }, []);

  useEffect(() => {
    setCurrentId(search.get("id"));
  }, [search]);

  useEffect(() => {
    setCurrentItem(dataAllGuitars.allGuitars.find(item => item.id == currentId));
  }, [currentId]);

  return (
    <div className={style.aboutContainer}>
      <h2>{currentItem?.model}</h2>
      <div className={style.head}>
        <div className={style.carousel}>
          <Carousel slide1={currentItem?.slide1}
                    slide2={currentItem?.slide2}
                    slide3={currentItem?.slide3}
          />
        </div>
        <div className={style.info}>
          <div>
            <h3>${currentItem?.price}</h3>
            <Button textAddCart={props.data.btnTextCard}/>
          </div>
          <div className={style.characteristics}>
            <h3>Characteristics</h3>
            <p>Brand: {currentItem?.brand}</p>
            <p>Model: {currentItem?.model}</p>
            <p>Type: {currentItem?.type}</p>
            <p>Number of strings: {currentItem?.strings}</p>
            <p>Year of issue: {currentItem?.year}</p>
          </div>
          <div className={style.form}>
            <div className={style.login}>
              <p>Sign in<br/> with help</p>
              <div>
                <a href="#"><img src={props.data.formLogin.facebook} alt="fb"/></a>
                <a href="#"><img src={props.data.formLogin.google} alt="google"/></a>
              </div>
            </div>
            <h3>{props.data.formNote}</h3>
            <form action="" method="post">
              <input id="name" type="text" placeholder="Name"/>
              <input id="email" type="email" placeholder="E-mail"/>
              <textarea placeholder="Message"></textarea>
              <Button textReview={props.data.btnTextReiview}/>
            </form>
          </div>
        </div>
      </div>
      <div className={style.fullDescription}>
        <div className={style.description}>
          <p>{currentItem?.aboutGuitar}</p>
        </div>
        <div className={style.video}>
          <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen height="100%" src={currentItem?.video}
                  title="YouTube video player" width="100%" data-gtm-yt-inspected-9="true"></iframe>
        </div>
      </div>
      <div className={style.rating}>
        <div className={style.stars}>
          <img id="1" src={props.data.rating.star} alt="star1"/>
          <img id="2" src={props.data.rating.star} alt="star2"/>
          <img id="3" src={props.data.rating.star} alt="star3"/>
          <img id="4" src={props.data.rating.star} alt="star4"/>
          <img id="5" src={props.data.rating.star} alt="star5"/>
        </div>
        <Button btnText={props.data.rating.btnText}/>
      </div>
    </div>
  )
}

export default AboutGuitar;