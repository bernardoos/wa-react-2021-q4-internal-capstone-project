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

function App() {
  return (
    <div className="App">
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
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
