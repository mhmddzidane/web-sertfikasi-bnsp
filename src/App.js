import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Article from "./pages/Article";
import ArticleDetail from "./pages/ArticleDetail";
import Clients from "./pages/Clients";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/clients" element={<Clients />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/article/:id" element={<ArticleDetail />}></Route>
            <Route path="/store" element={<Store />}></Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
