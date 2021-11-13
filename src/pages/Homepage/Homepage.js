import BannersSrc from "mocks/en-us/featured-banners.json";
import Carousel from "components/Carousel/Carousel";
import CategoriesSrc from "mocks/en-us/product-categories";
import FeaturedProductsSrc from "mocks/en-us/featured-products";
import Grid from "components/Grid/Grid";
import React from "react";
import Slider from "components/Slider/Slider";
import styled from "styled-components";

const ContentContainer = styled.div`
  min-height: calc(100vh - 400px);
  padding: 50px;
  text-align: left;
`;

function Homepage() {
  const { results: bannersInfo } = BannersSrc;
  const { results: categoriesInfo } = CategoriesSrc;
  const { results: productsInfo } = FeaturedProductsSrc;

  return (
    <>
      <Slider bannersInfo={bannersInfo} />
      <ContentContainer>
        <Carousel categoriesInfo={categoriesInfo} />
        <Grid productsInfo={productsInfo} categoriesInfo={categoriesInfo} />
      </ContentContainer>
    </>
  );
}

export default Homepage;
