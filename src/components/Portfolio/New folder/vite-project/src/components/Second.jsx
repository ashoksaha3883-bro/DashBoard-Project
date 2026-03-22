import React, { useState } from "react";
import { Link } from "react-router-dom";

function Second() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  
  return (
    <nav className="w-full bg-white text-gray-800 py-3 shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 gap-4">
        {/* Left Section */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center px-4 py-2 rounded-2xl border-2 border-orange-200 text-sm md:text-base"
            >
              Categories <span className="ml-2 md:ml-32 font-bold">﹀</span>
            </button>
            {showDropdown && (
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                  <Link to="/men">🔷 Men's Clothing</Link>
                </li>
                <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                  <Link to="/women">🔷 Women's Clothing</Link>
                </li>
                <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                  <Link to="/kids">🔷 Kids' Clothing</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowDrop(!showDrop)}
              className="flex items-center px-4 py-2 rounded-2xl border-2 border-orange-200 text-sm md:text-base"
            >
              New Product <span className="ml-2 md:ml-10 font-bold">﹀</span>
            </button>
            {showDrop && (
              <ul className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                  <Link to="/winter">🔶 Winter 2025</Link>
                </li>
                <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">
                  <Link to="/hoodies">🔶 Hoodies</Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Middle Section - Search */}
        <div className="flex-1 max-w-md w-full md:mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-4 pr-10 rounded-2xl border-2 border-orange-200 focus:outline-none focus:border-orange-400"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl">
              🔍
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link to="/men" className="hover:text-orange-500 font-medium">Men</Link>
          <Link to="/women" className="hover:text-orange-500 font-medium">Women</Link>
          <Link to="/kids" className="hover:text-orange-500 font-medium">Children</Link>
          <Link to="/brand" className="hover:text-orange-500 font-medium">Brands</Link>
        </div>
      </div>
    </nav>
  );
}

export default Second;