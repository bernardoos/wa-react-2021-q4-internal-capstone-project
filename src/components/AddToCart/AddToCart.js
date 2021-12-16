import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import CartContext from "state/CartContext";

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
  :disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

function AddToCart({ productInfo }) {
  const { products, setProducts, setTotalProducts } = useContext(CartContext);
  const [error, setError] = useState("");
  const [addButtonDisabled, setaddButtonDisabled] = useState(false);
  const [addAmount, setAddAmount] = useState(1);

  useEffect(() => {
    if (productInfo.data?.stock === 0) {
      setError("Not enough stock available");
      setaddButtonDisabled(true);
    }
  }, [productInfo.data?.stock]);

  const handleAmountInput = (e) => {
    const { value } = e.target;
    const existingProduct = products.find((prod) => prod.id === productInfo.id);

    let amount = existingProduct
      ? existingProduct.cartAmount + Number(value)
      : value;

    if (productInfo.data.stock < amount) {
      setError("Not enough stock available");
      setaddButtonDisabled(true);
    } else {
      setError(undefined);
      setaddButtonDisabled(false);
    }

    setAddAmount(Number(value));
  };

  const addProductsToCart = () => {
    const productExists = products.some((prod) => prod.id === productInfo.id);
    if (productExists) {
      setProducts((prevProducts) =>
        prevProducts.map((prod) =>
          prod.id === productInfo.id
            ? { ...prod, cartAmount: prod.cartAmount + Number(addAmount) }
            : prod
        )
      );
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...productInfo, cartAmount: Number(addAmount) },
      ]);
    }

    setTotalProducts((prevTotal) => (prevTotal += Number(addAmount)));
  };

  return (
    <AddToCartCard>
      <h2>Buy now</h2>
      <AddToCartInput
        type="number"
        value={addAmount}
        onChange={handleAmountInput}
        max={productInfo.data?.stock}
        min={1}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ProductCardButton
        onClick={addProductsToCart}
        disabled={addButtonDisabled}
      >
        <MdOutlineAddShoppingCart />
        <span style={{ marginLeft: 5 }}> Add to cart </span>
      </ProductCardButton>
    </AddToCartCard>
  );
}

export default AddToCart;
