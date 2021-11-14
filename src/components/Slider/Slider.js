import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const SliderImg = styled.img`
  height: 20vh;
  object-fit: cover;
  object-position: center;
`;

function Slider({ bannersInfo }) {
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
      {bannersInfo.map(
        ({
          id,
          data: {
            main_image: { alt, url },
          },
        }) => (
          <SliderImg src={url} alt={alt} key={id} />
        )
      )}
    </SlickSlider>
  );
}

export default Slider;
