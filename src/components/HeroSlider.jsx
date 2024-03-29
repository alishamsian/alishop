import React, { useState , useEffect , useCallback} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from './Button'

const HeroSlider = (props) => {
  const data = props.data;

  const timeout = props.timeout ? props.timeout : 3000

  const [activeSlide, setActiveSlide] = useState(0);



  const nextSlide = useCallback(
    () => {
        const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1
        setActiveSlide(index)
    },
    [activeSlide , data],
  )
  

  const prevSlide = () =>{
      const index = activeSlide - 1 < 0 ? 0 : activeSlide + 1
      setActiveSlide(index)
  }

  useEffect(() => {
    if (props.auto) {
        const slideAuto = setInterval(() => {
            nextSlide()
        }, timeout);
        return () => {
            clearInterval(slideAuto)
        }
    }
}, [nextSlide, timeout, props])

  return (
    <div className="hero-slider">
      {data.map((item, index) => (
        <HeroSliderItem
          key={index}
          item={item}
          active={index === activeSlide}
        />
      ))}
      {props.control ? (
        <div className="hero-slider__control">
          <div className="hero-slider__control__item">
            <i className="bx bx-chevron-left" onClick={prevSlide}></i>
          </div>
          <div className="hero-slider__control__item">
            <div className="index">
                {activeSlide + 1}/{data.length}
            </div>
          </div>
          <div className="hero-slider__control__item" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};



HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeout: PropTypes.number,
};



const HeroSliderItem = (props) => (
  <div className={`hero-slider__item ${props.active ? "active" : ""}`}>
    <div className="hero-slider__item__info">
      <div
        className={`hero-slider__item__info__title color-${props.item.color}`}
      >
        <span>{props.item.title}</span>
      </div>
      <div className="hero-slider__item__info__description">
        <span>{props.item.description}</span>
      </div>
      <div className="hero-slider__item__info__btn">
        <Link to={props.item.btn}>
          <Button
            background_color={props.item.color}
            icon="bx bx-cart"
            animate={true}
          >
            click me
          </Button>
        </Link>
      </div>
    </div>
    <div className="hero-slider__item__image">
      <div className={`shape bg-${props.item.color}`}></div>
      <img src={props.item.img} alt="" />
    </div>
  </div>
);

export default HeroSlider;
