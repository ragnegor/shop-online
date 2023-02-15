import React, {useEffect} from "react";
import style from "./AboutGuitar.module.css";
import headerStyles from "../../Header/Header.module.css";
import Carousel from "../../Carousel/Carousel";
import Button from "../../Button/Button";




function AboutGuitar(props) {
  console.log(props)
  useEffect(() => {
    document.getElementById("header").className=headerStyles.head
  })
  return (
    <div className={style.aboutContainer}>
      <h2>{props.model}</h2>
      <div className={style.head}>
        <div className={style.carousel}>
          <Carousel />
        </div>
        <div className={style.info}>
          <div>
            <h3>${props.price}</h3>
            <Button textAddCart={props.data.btnTextCard}/>
          </div>
          <div className={style.characteristics}>
            <h3>Characteristics</h3>
            <p>Brand: {props.brand}</p>
            <p>Model: {props.model}</p>
            <p>Type: {props.type}</p>
            <p>Number of strings: {props.strings}</p>
            <p>Year of issue: {props.year}</p>
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
          <p>{props.aboutGuitar}</p>
        </div>
        <div className={style.video}>
          <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen height="100%" src="https://www.youtube.com/embed/B6s9NfiaSGw"
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