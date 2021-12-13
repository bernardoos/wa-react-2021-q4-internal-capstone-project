import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFeaturedBanners } from "utils/hooks/useFeaturedBanners";
import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const SliderImg = styled.img`
  height: 20vh;
  object-fit: cover;
  object-position: center;
`;

function Slider() {
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

  const { data: bannersInfo = [], isLoading, error } = useFeaturedBanners();

  return (
    <>
      {isLoading && <h2>Loading banner</h2>}
      {error ? (
        <h2>Woops! Something went wrong...</h2>
      ) : (
        <SlickSlider {...settings}>
          {bannersInfo.results?.map(
            ({
              id,
              data: {
                main_image: { alt, url },
              },
            }) => (
              <SliderImg src={url} alt={alt} key={id} title="slider-img" />
            )
          )}
        </SlickSlider>
      )}
    </>
  );
}

export default Slider;
