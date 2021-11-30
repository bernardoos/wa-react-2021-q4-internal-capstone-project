import React from "react";
import styled from "styled-components";
import { useProductCategories } from "utils/hooks/useProductCategories";
import { MdOutlineAddShoppingCart, MdOutlineMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { Row, Col } from "StyledComponents";

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

const ProductCardFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProductCardButton = styled.button`
  padding: 10px;
  color: white;
  background-color: black;
  border-radius: 8px;
  cursor: pointer;
  margin: 15px;
  font-size: medium;
  display: flex;
  align-items: center;
`;

function Grid({ productsInfo, isLoading, error }) {
  const { data: categoriesInfo = [] } = useProductCategories();

  console.log("prod", productsInfo);

  const getCategoryName = (cateogryId) =>
    categoriesInfo.results?.find((category) => category.id === cateogryId).data
      .name;

  return (
    <>
      <br />
      <Row>
        {isLoading && <h2>Loading products</h2>}
        {error ? (
          <h2>Woops! Something went wrong...</h2>
        ) : (
          productsInfo?.map(
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
                  <ProductCardFooter>
                    <ProductCardButton>
                      <MdOutlineAddShoppingCart />
                      <span style={{ marginLeft: 5 }}> Add to cart </span>
                    </ProductCardButton>
                    <Link
                      to={`/product/${id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ProductCardButton>
                        <MdOutlineMore />
                        <span style={{ marginLeft: 5 }}> Product detail </span>
                      </ProductCardButton>
                    </Link>
                  </ProductCardFooter>
                </ProductCard>
              </Col>
            )
          )
        )}
      </Row>
    </>
  );
}

export default Grid;
