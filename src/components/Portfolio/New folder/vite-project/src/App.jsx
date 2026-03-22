import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import TopNavbar from "./components/TopNavbar";
import Second from "./components/Second";
import Hero from "./components/Hero";
import HomeProduct from "./components/HomeProducts";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Winter from "./components/Winter";
import Hoodies from "./components/Hoodies";
import Brand from "./components/Brand";
import Categories from "./components/Categories";
import Choose from "./components/Choose";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <HashRouter>
      <CartProvider>
        <div className="overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TopNavbar />
                  <Second />
                  <Hero />
                  <Categories />
                  <HomeProduct />
                  <Choose />
                  <Testimonial />
                  <Footer />
                </>
              }
            />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/winter" element={<Winter />} />
            <Route path="/hoodies" element={<Hoodies />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>
    </HashRouter>
  );
}

export default App;