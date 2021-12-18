import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";
import { useProductCategories } from "utils/hooks/useProductCategories";
import { Link } from "react-router-dom";

const CarouselImg = styled.img`
  height: 40vh;
  object-fit: cover;
  object-position: center;
`;

const CarouselContainer = styled.div`
  height: 40vh;
  @media (min-width: 770px) {
    margin-left: 30%;
    margin-right: 30%;
  }
`;

const CustomArrow = styled.div`
  background-color: gray;
`;

function Carousel() {
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

  const {
    data: categoriesInfo = [],
    isLoading,
    error,
  } = useProductCategories();

  return (
    <>
      <br />
      <h2>Categories</h2>
      <CarouselContainer>
        {isLoading && <h2>Loading categories</h2>}
        {error ? (
          <h2>Woops! Something went wrong...</h2>
        ) : (
          <SlickSlider {...settings}>
            {categoriesInfo.results?.map(
              ({
                id,
                data: {
                  main_image: { url, alt },
                },
              }) => (
                <Link to={`products?category=${id}`} key={id}>
                  <CarouselImg src={url} alt={alt} title="carousel-img" />
                </Link>
              )
            )}
          </SlickSlider>
        )}
      </CarouselContainer>
    </>
  );
}

export default Carousel;
