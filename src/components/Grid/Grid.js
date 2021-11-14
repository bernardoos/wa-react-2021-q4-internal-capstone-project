import React from "react";

import styled from "styled-components";

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gainsboro;
  border: black thin solid;
  border-radius: 10px;
  margin-bottom: 2rem;
  @media (min-width: 770px) {
    max-width: 80%;
    margin: 4rem;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ProductDesc = styled.div`
  padding: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Col = styled.div`
  flex-basis: 100%;
  @media (min-width: 770px) {
    flex-basis: 33%;
  }
`;

function Grid({ productsInfo, categoriesInfo }) {
  const getCategoryName = (cateogryId) =>
    categoriesInfo.find((category) => category.id === cateogryId).data.name;

  return (
    <>
      <br />
      <h2>Featured Products</h2>
      <Row>
        {productsInfo.map(
          ({
            id,
            data: {
              name,
              price,
              category: { id: categoryId },
              mainimage: { url, alt },
            },
          }) => (
            <Col key={id}>
              <ProductCard>
                <ProductImg src={url} alt={alt} />
                <ProductDesc>
                  <h3>{name}</h3>
                  <p>Category: {getCategoryName(categoryId)}</p>
                  <p>Price: ${price}</p>
                </ProductDesc>
              </ProductCard>
            </Col>
          )
        )}
      </Row>
    </>
  );
}

export default Grid;
