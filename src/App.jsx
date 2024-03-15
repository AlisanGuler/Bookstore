import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />

        <Route path="/ürün/:id" element={<DetailPage />} />

        <Route path="/ekstra" element={<Layout/>}>
          <Route path="kategoriler" element={<h1>Kategoriler</h1>} />
          <Route path="kampanyalar" element={<h1>Kampanyalar</h1>} />
          <Route path="ayarlar" element={<h1>Ayarlar</h1>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
