import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import ProductPage from "./pages/Product";
import ContactUsPage from "./pages/ContactUs";
import ScrollToTopOnRedirect from "./utils/scrollToTopOnRedirect";

function App() {
  return (
    <div className="App">
      <ScrollToTopOnRedirect />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductPage />} />
        {/* <Route path="/products/:id" element={<ProductDetailsPage />} /> */}
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
