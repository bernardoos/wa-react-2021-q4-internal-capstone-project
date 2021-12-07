import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Homepage from "pages/Homepage/Homepage";
import ProductList from "pages/ProductList/ProductList";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ProductDetail from "pages/ProductDetail/ProductDetail";
import SearchResults from "pages/SearchResults/SearchResults";
import CartContext from "state/CartContext";
import { useState } from "react";
import ShoppingCart from "pages/ShoppingCart/ShoppingCart";
import Checkout from "pages/Checkout/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  // useEffect(() => {
  //   console.log("cart products", products);
  //   console.log("total prods", totalProducts);
  // }, [products]);

  return (
    <div className="App">
      <CartContext.Provider
        value={{ products, setProducts, totalProducts, setTotalProducts }}
      >
        <Router>
          <Header />
          <Switch>
            <Redirect
              from="/wa-react-2021-q4-internal-capstone-project"
              to="/home"
            />
            <Route exact path={["/", "/home"]}>
              <Homepage />
            </Route>
            <Route exact path="/product/:id">
              <ProductDetail />
            </Route>
            <Route exact path="/products">
              <ProductList />
            </Route>
            <Route path="/search">
              <SearchResults />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </CartContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
