import React, { useContext, useEffect, useState } from "react";
import CartContext from "state/CartContext";
import styled from "styled-components";

const OrderTableContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const OrderTable = styled.table`
  border-collapse: collapse;
  background-color: white;
  margin-right: 8rem;
`;

const OrderTableTd = styled.td`
  border: thin black solid;
  font-size: x-large;
  padding: 0.75rem;
`;

const OrderTableHeaderTd = styled.td`
  padding: 10px;
  border: thin black solid;
  background-color: black;
  color: white;
  font-size: x-large;
  padding: 0.75rem;
`;

const OrderTableNoBorderTd = styled.td`
  border: none;
  font-size: x-large;
  padding-top: 10px;
`;

function OrderSummary() {
  const { products } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const auxTotal = products.reduce(
      (accumTotal, currentProduct) =>
        accumTotal + currentProduct.cartAmount * currentProduct.data.price,
      0
    );

    setTotal(auxTotal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <OrderTableContainer>
        <OrderTable>
          <tr>
            <OrderTableHeaderTd>Product</OrderTableHeaderTd>
            <OrderTableHeaderTd>Quantity</OrderTableHeaderTd>
            <OrderTableHeaderTd>Subtotal</OrderTableHeaderTd>
          </tr>
          {products.map((product) => (
            <tr>
              <OrderTableTd>{product.data.name}</OrderTableTd>
              <OrderTableTd>{product.cartAmount}</OrderTableTd>
              <OrderTableTd>
                ${product.cartAmount * product.data.price}
              </OrderTableTd>
            </tr>
          ))}
          <OrderTableNoBorderTd></OrderTableNoBorderTd>
          <OrderTableNoBorderTd></OrderTableNoBorderTd>
          <OrderTableNoBorderTd>Total: ${total}</OrderTableNoBorderTd>
        </OrderTable>
      </OrderTableContainer>
    </>
  );
}

export default OrderSummary;
