import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import ProductPage from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
