import React from "react";
import styled from "styled-components";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const AddToCartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: black thin solid;
  border-radius: 10px;
  margin-bottom: 2rem;
  @media (min-width: 770px) {
    max-width: 80%;
    margin: 4rem;
  }
`;

const AddToCartInput = styled.input`
  background-color: white;
  border: black thin solid;
  line-height: 30px;
  width: 3rem;
  margin: 2rem;
  font-size: large;
  border-radius: 4px;
  text-align: center;
`;

const ProductCardButton = styled.button`
  padding: 10px;
  color: white;
  background-color: black;
  border-radius: 8px;
  cursor: pointer;
  margin: 15px;
  font-size: large;
  display: flex;
  align-items: center;
`;

function AddToCart() {
  return (
    <AddToCartCard>
      <h2>Buy now</h2>
      <AddToCartInput type="number" defaultValue={1} />
      <ProductCardButton>
        <MdOutlineAddShoppingCart />
        <span style={{ marginLeft: 5 }}> Add to cart </span>
      </ProductCardButton>
    </AddToCartCard>
  );
}

export default AddToCart;
