import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Homepage from "pages/Homepage/Homepage";
import ProductList from "pages/ProductList/ProductList";
import { useState } from "react";

function App() {
  // Using mock files for now
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Header setPage={setPage} />
      {page === "home" && <Homepage setPage={setPage} />}
      {page === "products" && <ProductList />}
      <Footer />
    </div>
  );
}

export default App;
