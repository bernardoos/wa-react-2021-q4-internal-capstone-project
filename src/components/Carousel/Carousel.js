import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const CarouselImg = styled.img`
  height: 40vh;
  object-fit: cover;
  object-position: center;
`;

const CarouselContainer = styled.div`
  height: 40vh;
  margin-left: 30%;
  margin-right: 30%;
`;

const CustomArrow = styled.div`
  background-color: gray;
`;

function Carousel({ categoriesInfo }) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  return (
    <>
      <br />
      <h2>Categories</h2>
      <CarouselContainer>
        <SlickSlider {...settings}>
          {categoriesInfo.map(
            ({
              data: {
                main_image: { url, alt },
              },
            }) => (
              <CarouselImg src={url} alt={alt} />
            )
          )}
        </SlickSlider>
      </CarouselContainer>
    </>
  );
}

export default Carousel;
