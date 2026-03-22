import React from "react";
import { useNavigate } from "react-router-dom";

function Kids() {
  const navigate = useNavigate();

  const products = [
    { id: 301, img: "kid1.jpg", name: "Gray Chill Cotton Jacket", rating: 4.0, reviews: 20, price: 600.00 },
    { id: 302, img: "kid3.jpg", name: "Green Cotton half Gloves", rating: 3.0, reviews: 5, price: 700.00 },
    { id: 303, img: "kid5.jpg", name: "Gray-Blue Shirt", rating: 5.0, reviews: 8, price: 500.00 },
    { id: 304, img: "kid6.jpg", name: "Green Half t-Shirt", rating: 3.5, reviews: 5, price: 200.00 },
    { id: 305, img: "kid7.jpg", name: "Blue-Green Shirt", rating: 4.5, reviews: 23, price: 450.00 },
    { id: 306, img: "kid9.jpg", name: "Deep-blue + Blue half t-shirt", rating: 2.5, reviews: 12, price: 200.00 },
    { id: 307, img: "kid10.jpg", name: "Black and white t-shirt", rating: 4.0, reviews: 40, price: 800.00 },
    { id: 308, img: "kid14.jpg", name: "Gray + Blue half t-shirt", rating: 5.0, reviews: 50, price: 999.00 },
    { id: 309, img: "kid15.jpg", name: "Brown white full t-shirt", rating: 5.0, reviews: 200, price: 2000.00 },
    { id: 310, img: "kid17.jpg", name: "Blue + white Combo", rating: 5.0, reviews: 100, price: 2500.00 },
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
        <h1 className="text-3xl md:text-4xl font-bold p-2 ml-0 md:ml-10 mb-5">Kids Clothing</h1>
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

export default Kids;