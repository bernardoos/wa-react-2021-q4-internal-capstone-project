import React from "react";

import styled from "styled-components";

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gainsboro;
  border: black thin solid;
  margin: 4rem;
  border-radius: 10px;
  max-width: 80%;
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
  flex-basis: 33%;
`;

function Grid({ productsInfo }) {
  return (
    <>
      <br />
      <h2>Featured Products</h2>
      <Row>
        {productsInfo.map(
          ({
            data: {
              name,
              price,
              category: { slug },
              mainimage: { url, alt },
            },
          }) => (
            <Col>
              <ProductCard>
                <ProductImg src={url} alt={alt} />
                <ProductDesc>
                  <h3>{name}</h3>
                  <p>Category: {slug}</p>
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
