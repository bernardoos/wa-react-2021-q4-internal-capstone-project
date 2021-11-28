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

const ViewButton = styled.button`
  background-color: black;
  color: white;
  font-size: larger;
  padding: 15px;
  margin-bottom: 5rem;
  border-radius: 15px;
`;

function Homepage({ setPage }) {
  const { results: bannersInfo } = BannersSrc;
  const { results: categoriesInfo } = CategoriesSrc;
  const { results: productsInfo } = FeaturedProductsSrc;

  const navigateToProducts = () => {
    console.log("click", setPage);
    setPage("products");
  };

  return (
    <>
      <Slider bannersInfo={bannersInfo} />
      <ContentContainer>
        <Carousel categoriesInfo={categoriesInfo} />
        <h2>Featured Products</h2>
        <Grid productsInfo={productsInfo} categoriesInfo={categoriesInfo} />
      </ContentContainer>
      <ViewButton onClick={navigateToProducts}>View All Products</ViewButton>
    </>
  );
}

export default Homepage;
