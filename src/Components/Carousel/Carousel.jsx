import Carousel from 'react-bootstrap/Carousel';
import style from "./Carousel.module.css";
import dd from "../../assets/img/headerBg.png"
import rr from "../../assets/img/aboutGuitarBg.jpg";
import ee from "../../assets/img/basketBg.jpg";




function CarouselFadeExample(props) {
  return (
    <Carousel fade className={style.carousel}>
      <Carousel.Item interval={4000} className={style.carouselItem}>
        <img
          className={style.img}
          src={ee}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000} className={style.carouselItem}>
        <img
          className={style.img}
          src={rr}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000} className={style.carouselItem}>
        <img
          className={style.img}
          src={dd}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;