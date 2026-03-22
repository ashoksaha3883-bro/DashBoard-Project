import React from "react";
import { useNavigate } from "react-router-dom";

function Women() {
  const navigate = useNavigate();

  const products = [
    { id: 201, img: "girl1.jpg", name: "Black and White Jacket", rating: 5.0, reviews: 26, price: 700.00 },
    { id: 202, img: "girl4.jpg", name: "Shorts", rating: 4.0, reviews: 8, price: 200.00 },
    { id: 203, img: "girl6.jpg", name: "Black Shirt", rating: 5.0, reviews: 9, price: 300.00 },
    { id: 204, img: "girl18.jpg", name: "White t-Shirt", rating: 4.5, reviews: 9, price: 300.00 },
    { id: 205, img: "girl8.jpg", name: "Blue t-Shirt", rating: 4.0, reviews: 23, price: 250.00 },
    { id: 206, img: "girl10.jpg", name: "Brown green cote", rating: 3.5, reviews: 42, price: 400.00 },
    { id: 207, img: "girl11.jpg", name: "Gray t-shirt", rating: 4.0, reviews: 40, price: 800.00 },
    { id: 208, img: "girl12.jpg", name: "Gray + Blue half t-shirt", rating: 5.0, reviews: 50, price: 999.00 },
    { id: 209, img: "girl13.jpg", name: "Brown white full t-shirt", rating: 5.0, reviews: 200, price: 2000.00 },
    { id: 210, img: "girl17.jpg", name: "Blue + white Combo", rating: 5.0, reviews: 100, price: 2500.00 },
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
        <h1 className="text-3xl md:text-4xl font-bold p-2 ml-0 md:ml-10 mb-5">Women's Clothing</h1>
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

export default Women;