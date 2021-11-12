import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannersSrc from "mocks/en-us/featured-banners.json";
import styled from "styled-components";
import React from "react";

const SliderImg = styled.img`
  height: 20vh;
  object-fit: cover;
  object-position: center;
`;

function Slider() {
  const { results: bannersInfo } = BannersSrc;

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SlickSlider {...settings}>
      {bannersInfo.map((banner) => (
        <SliderImg
          src={banner.data.main_image.url}
          alt={banner.data.main_image.alt}
        />
      ))}
    </SlickSlider>
  );
}

export default Slider;
