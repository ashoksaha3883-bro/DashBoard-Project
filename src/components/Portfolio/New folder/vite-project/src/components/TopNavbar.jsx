import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModea";
import { useCart } from "../context/CartContext";

function TopNavbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  return (
    <>
      <nav className="w-full bg-gray-100 text-gray-800 py-2 px-4 md:px-8 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            NextGen Fashion
          </h1>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={() => setOpenLogin(true)}
              className="bg-cyan-400 rounded-lg px-3 md:px-4 py-1 md:py-2 text-sm md:text-base font-bold hover:bg-orange-500 hover:text-white transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => navigate("/cart")}
              className="relative hover:bg-orange-500 hover:text-white py-1 md:py-2 px-3 md:px-4 rounded-lg font-bold transition-colors"
            >
              Cart 🛒
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
}

export default TopNavbar;