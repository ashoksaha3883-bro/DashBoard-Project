import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import image25 from "../assets/image25.jpg";
import image41 from "../assets/image41.jpg";
import image37 from "../assets/image37.jpg";
import image34 from "../assets/image34.jpg";

const Categories = () => {
  const navigate = useNavigate();

  const items = [
    { id: 1, img: image25, label: "Kids Collection", type: "cold", items: "150+ items" },
    { id: 2, img: image41, label: "Casual Shirts", type: "hot", items: "200+ items" },
    { id: 3, img: image37, label: "Formal Wear", type: "cold", items: "100+ items" },
    { id: 4, img: image34, label: "Women's Fashion", type: "hot", items: "300+ items" },
  ];

  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? items : items.filter((i) => i.type === filter);

  const handleCategoryClick = (label) => {
    if (label === "Kids Collection") navigate("/kids");
    if (label === "Casual Shirts") navigate("/brand");
    if (label === "Formal Wear") navigate("/men");
    if (label === "Women's Fashion") navigate("/women");
  };

  return (
    <div className="w-full px-4 md:px-10 py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Shop by Categories
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore our wide range of collections tailored just for you
      </p>

      {/* Filter Buttons with better design */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
            filter === "all"
              ? "bg-orange-500 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
          }`}
        >
          All Categories
        </button>
        <button
          onClick={() => setFilter("cold")}
          className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
            filter === "cold"
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
          }`}
        >
          ❄️ Cold Wear
        </button>
        <button
          onClick={() => setFilter("hot")}
          className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
            filter === "hot"
              ? "bg-red-500 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
          }`}
        >
          🔥 Hot Wear
        </button>
      </div>

      {/* Category Cards with better design */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCategoryClick(item.label)}
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <div className="relative h-80">
              <img 
                src={item.img} 
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{item.label}</h3>
              <p className="text-sm text-gray-200 mb-3">{item.items}</p>
              <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                <span className="text-sm font-semibold">Shop Now</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Type badge */}
            <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
              item.type === 'cold' ? 'bg-blue-500' : 'bg-red-500'
            } text-white shadow-lg`}>
              {item.type === 'cold' ? '❄️ Cold' : '🔥 Hot'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;