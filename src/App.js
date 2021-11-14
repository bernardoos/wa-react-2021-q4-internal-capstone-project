import "./App.css";
import Header from "./layout/Header/Header";
import Content from "./layout/Content/Content";
import Footer from "./layout/Footer/Footer";

function App() {
  // Using mock files for now
  // const { data, isLoading } = useFeaturedBanners();
  // console.log(data, isLoading);

  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
