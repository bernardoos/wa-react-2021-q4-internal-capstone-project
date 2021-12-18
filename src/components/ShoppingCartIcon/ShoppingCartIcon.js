import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartContext from "state/CartContext";
import styled from "styled-components";

const ShoppingCartIconContainer = styled.div`
  .badge {
    position: absolute;
    top: 2px;
    right: 8px;
    padding: 4px 8px;
    border-radius: 50%;
    background: crimson;
    color: white;
    font-size: 0.9em;
  }
`;

const CartIcon = styled(MdOutlineShoppingCart)`
  font-size: 30px;
  position: "relative";
  display: "inline-block";
`;

function ShoppingCartIcon() {
  const { totalProducts } = useContext(CartContext);

  return (
    <ShoppingCartIconContainer>
      <CartIcon />

      {totalProducts > 0 && (
        <span className="badge" data-testid="cartBadge">
          {totalProducts}
        </span>
      )}
    </ShoppingCartIconContainer>
  );
}

export default ShoppingCartIcon;
