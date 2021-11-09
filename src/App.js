import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
