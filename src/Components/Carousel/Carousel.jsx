import Carousel from 'react-bootstrap/Carousel';
import style from "./Carousel.module.css";




function CarouselFadeExample(props) {
  return (
    <Carousel fade className={style.carousel}>
      <Carousel.Item interval={4000} className={style.carouselItem}>
        <img
          className={style.img}
          src={props.slide1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000} className={style.carouselItem}>
        <img
          className={style.img}
          src={props.slide2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000} className={style.carouselItem}>
        <img
          className={style.img}
          src={props.slide3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;