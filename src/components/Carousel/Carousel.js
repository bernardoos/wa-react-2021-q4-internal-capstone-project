import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CategoriesSrc from "mocks/en-us/product-categories";
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
  padding-left: 30%;
  padding-right: 30%;
`;

function Carousel() {
  const { results: categoriesInfo } = CategoriesSrc;

  console.log("ca", categoriesInfo);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <br />
      <h2>Categories</h2>
      <CarouselContainer>
        <SlickSlider {...settings}>
          {categoriesInfo.map((category) => (
            <CarouselImg
              src={category.data.main_image.url}
              alt={category.data.main_image.alt}
            />
          ))}
        </SlickSlider>
      </CarouselContainer>
    </>
  );
}

export default Carousel;
