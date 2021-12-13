import Carousel from "components/Carousel/Carousel";
import Grid from "components/Grid/Grid";
import React from "react";
import Slider from "components/Slider/Slider";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFeaturedProducts } from "utils/hooks/useFeaturedProducts";
import { ContentContainer } from "StyledComponents";

const ViewButton = styled.button`
  background-color: black;
  color: white;
  font-size: larger;
  padding: 15px;
  margin-bottom: 5rem;
  border-radius: 15px;
  cursor: pointer;
`;

function Homepage() {
  const { data: productsInfo = [], isLoading, error } = useFeaturedProducts();

  return (
    <>
      <Slider />
      <ContentContainer>
        <Carousel />
        <h2>Featured Products</h2>
        <Grid
          productsInfo={productsInfo.results}
          isLoading={isLoading}
          error={error}
        />
      </ContentContainer>

      <Link to="/products">
        <ViewButton>View All Products</ViewButton>
      </Link>
    </>
  );
}

export default Homepage;
