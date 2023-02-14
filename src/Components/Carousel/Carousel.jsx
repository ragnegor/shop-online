import Carousel from 'react-bootstrap/Carousel';
import style from "./Carousel.module.css";
import dd from "../../assets/img/headerBg.png"
import rr from "../../assets/img/aboutGuitarBg.jpg";
import ee from "../../assets/img/basketBg.jpg";




function CarouselFadeExample(props) {
  return (
    <Carousel fade className={style.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ee}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rr}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dd}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;