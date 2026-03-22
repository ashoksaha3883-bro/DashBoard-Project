import React from "react";
import { useNavigate } from "react-router-dom";

function Winter() {
  const navigate = useNavigate();

  const products = [
    { id: 501, img: "image94.jpg", name: "Gray Green Chill Cotton Jacket", rating: 5.0, reviews: 20, price: 1000.00 },
    { id: 502, img: "image95.jpg", name: "Gray Cotton Gloves", rating: 5.0, reviews: 5, price: 1700.00 },
    { id: 503, img: "image105.jpg", name: "Full t-Shirt", rating: 4.0, reviews: 18, price: 500.00 },
    { id: 504, img: "image93.jpg", name: "Green cotton", rating: 4.5, reviews: 10, price: 700.00 },
    { id: 505, img: "image91.jpg", name: "Brown-Green Shirt", rating: 5.0, reviews: 25, price: 499.00 },
    { id: 506, img: "image97.jpg", name: "Deep-blue + Blue", rating: 4.5, reviews: 19, price: 600.00 },
    { id: 507, img: "image98.jpg", name: "Black and white t-shirt", rating: 4.0, reviews: 30, price: 800.00 },
    { id: 508, img: "image102.jpg", name: "white + Black half t-shirt", rating: 5.0, reviews: 50, price: 999.00 },
    { id: 509, img: "image101.jpg", name: "white full t-shirt", rating: 5.0, reviews: 200, price: 1200.00 },
    { id: 510, img: "image104.jpg", name: "Blue + white Combo", rating: 4.0, reviews: 145, price: 500.00 },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="p-4 bg-orange-400 shadow-sm shadow-black">
        <button
          onClick={() => navigate("/")}
          className="px-2 py-1 mb-5 mr-3 font-bold text-4xl md:text-5xl text-white rounded-lg hover:bg-orange-600"
        >
          ←
        </button>
        <h1 className="text-3xl md:text-4xl font-bold p-2 ml-0 md:ml-10 mb-5">Winter Collection 2025</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="overflow-hidden">
              <img 
                src={product.img} 
                alt={product.name}
                className="w-full h-48 md:h-56 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-sm md:text-base mb-1">{product.name}</h3>
              <div className="flex items-center gap-1 text-yellow-500 text-sm">
                <span>{'★'.repeat(Math.floor(product.rating))}</span>
                <span className="text-gray-500 text-xs">({product.reviews})</span>
              </div>
              <p className="text-lg font-bold mt-2 text-orange-600">RS. {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Winter;