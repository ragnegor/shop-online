import React, {useEffect} from "react";
import style from "./AboutGuitar.module.css";
import headerStyles from "../../Header/Header.module.css";
import Carousel from "../../Carousel/Carousel";


function AboutGuitar(props) {
  useEffect(() => {
    document.getElementById("header").className=headerStyles.head
  })
  return (
    <div className={style.aboutContainer}>
      <h2>ddddd</h2>
      <div className={style.carousel}>
        <Carousel />
      </div>
    </div>
  )
}

export default AboutGuitar;