import Carousel from 'react-bootstrap/Carousel';
import style from "./Carousel.module.css";
import slide1 from "../../assets/img/11.jpg";
import slide2 from "../../assets/img/22.jpg";
import slide3 from "../../assets/img/33.jpg";



function CarouselFadeExample(props) {
  return (
    <Carousel fade className={style.carousel}>
      <Carousel.Item interval={4000} className={style.carouselItem}>
        <img
          className={style.img}
          src={slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000} className={style.carouselItem}>
        <img
          className={style.img}
          src={slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000} className={style.carouselItem}>
        <img
          className={style.img}
          src={slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;