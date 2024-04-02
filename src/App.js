import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import ProductPage from "./pages/Product";
import ContactUsPage from "./pages/ContactUs";
import ScrollToTopOnRedirect from "./utils/scrollToTopOnRedirect";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header/Header";
import HeaderStatic from "./components/Header/HeaderStatic";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTopOnRedirect />
      {location.pathname === "/" ? (
        <Header />
      ) : (
        <HeaderStatic activeMenu={location.pathname} />
      )}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductPage />} />
        {/* <Route path="/products/:id" element={<ProductDetailsPage />} /> */}
        <Route path="/contact-us" element={<ContactUsPage />} />

        {/* Redirect any unmatched route to HomePage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Static Footer */}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
