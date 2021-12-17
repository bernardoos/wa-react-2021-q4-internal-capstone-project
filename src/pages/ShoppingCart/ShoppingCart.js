import React, { useContext, useEffect, useState } from "react";
import CartContext from "state/CartContext";
import styled from "styled-components";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const ContentContainer = styled.div`
  min-height: calc(100vh - 158px);
  text-align: left;
`;

const CartTable = styled.table`
  border-collapse: collapse;
`;

const CartTableTd = styled.td`
  border: thin black solid;
`;

const CartTableNoBorderTd = styled.td`
  border: none;
`;

const CartTableHeaderTd = styled.td`
  padding: 10px;
  border: thin black solid;
  background-color: gainsboro;
  color: black;
`;

const SectionContainer = styled.div`
  margin: 50px 50px 50px 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const CartProductImg = styled.img`
  width: 8em;
  height: 8em;
  object-fit: cover;
`;

const ProductQuantityInput = styled.input`
  line-height: 2em;
  width: 2.5em;
  font-size: medium;
  border-radius: 5px;
`;

const RemoveFromCartButton = styled.button`
  padding: 10px;
  color: white;
  background-color: crimson;
  border-radius: 8px;
  cursor: pointer;
  margin: 15px;
  font-size: 1.5em;
  border: crimson;
`;

const CheckoutButton = styled.button`
  padding: 15px;
  color: white;
  background-color: black;
  border-radius: 8px;
  cursor: pointer;
  margin: 15px;
  font-size: 1.3em;
  border: black;
`;

function ShoppingCart() {
  const { products, setProducts, setTotalProducts } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const auxProductInfo = products.reduce(
      ({ totalAmount, totalQuantity }, currentProduct) => {
        return {
          totalAmount:
            totalAmount + currentProduct.cartAmount * currentProduct.data.price,
          totalQuantity: totalQuantity + currentProduct.cartAmount,
        };
      },
      { totalAmount: 0, totalQuantity: 0 }
    );

    setTotal(auxProductInfo.totalAmount);
    setTotalProducts(auxProductInfo.totalQuantity);
  }, [products, setTotalProducts]);

  const updateQuantity = (event, productId) => {
    const { value } = event.target;
    const cartProduct = products.find((prod) => prod.id === productId);

    if (cartProduct.data.stock < Number(value)) {
      alert("Not enough stock for this product");
    } else {
      setProducts((prevProducts) =>
        prevProducts.map((prod) =>
          prod.id === productId ? { ...prod, cartAmount: Number(value) } : prod
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prod) => prod.id !== productId)
    );
  };

  return (
    <ContentContainer>
      <SectionContainer>
        <CartTable>
          <tbody>
            <tr>
              <CartTableNoBorderTd></CartTableNoBorderTd>
              <CartTableHeaderTd>Name</CartTableHeaderTd>
              <CartTableHeaderTd>Unit price</CartTableHeaderTd>
              <CartTableHeaderTd>Quantity</CartTableHeaderTd>
              <CartTableHeaderTd>Subtotal</CartTableHeaderTd>
              <CartTableNoBorderTd></CartTableNoBorderTd>
            </tr>
            {products?.map((product) => (
              <tr key={product.id} title="productInfoRow">
                <CartTableTd>
                  <CartProductImg src={product.data.mainimage.url} />
                </CartTableTd>
                <CartTableTd>{product.data.name}</CartTableTd>
                <CartTableTd>${product.data.price}</CartTableTd>
                <CartTableTd>
                  <ProductQuantityInput
                    title="productQtyInput"
                    type="number"
                    value={product.cartAmount}
                    min={0}
                    max={product.data.stock}
                    onChange={(e) => updateQuantity(e, product.id)}
                  />
                </CartTableTd>
                <CartTableTd title="productSubtotal">
                  ${product.data.price * product.cartAmount}
                </CartTableTd>
                <CartTableTd>
                  <RemoveFromCartButton
                    onClick={() => removeFromCart(product.id)}
                    title="removeFromCartButton"
                  >
                    <MdOutlineRemoveShoppingCart />
                  </RemoveFromCartButton>
                </CartTableTd>
              </tr>
            ))}
            <tr>
              <CartTableNoBorderTd />
              <CartTableNoBorderTd />
              <CartTableNoBorderTd />
              <CartTableNoBorderTd />
              <CartTableNoBorderTd title="realTotal">
                <h2>Total: ${total}</h2>
              </CartTableNoBorderTd>
              <CartTableNoBorderTd />
            </tr>
          </tbody>
        </CartTable>
        <Link to="/checkout">
          <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Link>
      </SectionContainer>
    </ContentContainer>
  );
}

export default ShoppingCart;
