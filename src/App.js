import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import Header from "./layout/Header/Header";
import Content from "./layout/Content/Content";
import Footer from "./layout/Footer/Footer";

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
