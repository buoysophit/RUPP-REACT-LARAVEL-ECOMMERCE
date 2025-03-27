import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Blog from "./components/Blog";
import TrendingProducts from "./components/TrendingProducts";
import BestSelling from "./components/BestSelling";
import TopRated from "./components/TopRated";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/trending" element={<TrendingProducts />} />
          <Route path="/best-selling" element={<BestSelling />} />
          <Route path="/top-rated" element={<TopRated />} />
        </Routes>
        <Footer />
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      </div>
    </BrowserRouter>
  );
};

export default App;