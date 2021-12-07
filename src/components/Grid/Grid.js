import React, { useContext } from "react";
import styled from "styled-components";
import { useProductCategories } from "utils/hooks/useProductCategories";
import { MdOutlineAddShoppingCart, MdOutlineMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { Row, Col } from "StyledComponents";
import CartContext from "state/CartContext";

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
  const { products, setProducts, setTotalProducts } = useContext(CartContext);

  console.log("info", productsInfo);

  const getCategoryName = (cateogryId) =>
    categoriesInfo.results?.find((category) => category.id === cateogryId).data
      .name;

  const addProductToCart = (productInfo) => {
    const productExists = products.some((prod) => prod.id === productInfo.id);
    if (productExists) {
      setProducts((prevProducts) =>
        prevProducts.map((prod) =>
          prod.id === productInfo.id
            ? { ...prod, cartAmount: prod.cartAmount + 1 }
            : prod
        )
      );
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...productInfo, cartAmount: 1 },
      ]);
    }

    setTotalProducts((prevTotal) => (prevTotal += 1));
  };

  return (
    <>
      <br />
      <Row>
        {isLoading && <h2>Loading products</h2>}
        {error ? (
          <h2>Woops! Something went wrong...</h2>
        ) : (
          productsInfo?.map((prdouct) => (
            <Col key={prdouct.id}>
              <ProductCard>
                <ProductImg
                  src={prdouct.data.mainimage.url}
                  alt={prdouct.data.mainimage.alt}
                />
                <ProductDesc>
                  <h3>{prdouct.data.name}</h3>
                  <p>Category: {getCategoryName(prdouct.data.category.id)}</p>
                  <p>Price: ${prdouct.data.price}</p>
                </ProductDesc>
                <ProductCardFooter>
                  <ProductCardButton onClick={() => addProductToCart(prdouct)}>
                    <MdOutlineAddShoppingCart />
                    <span style={{ marginLeft: 5 }}> Add to cart </span>
                  </ProductCardButton>
                  <Link
                    to={`/product/${prdouct.id}`}
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
          ))
        )}
      </Row>
    </>
  );
}

export default Grid;
