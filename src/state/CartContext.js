import React from "react";

const CartContext = React.createContext({
  totalProducts: 0,
  setTotalProducts: () => {},
  products: [],
  setProducts: () => {},
});

export default CartContext;
