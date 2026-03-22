import React from "react";
import { useNavigate } from "react-router-dom";

function Hoodies() {
  const navigate = useNavigate();

  const products = [
    { id: 601, img: "image106.jpg", name: "Gray Chill Cotton Jacket", rating: 5.0, reviews: 10, price: 700.00 },
    { id: 602, img: "image107.jpg", name: "Brown cotton", rating: 4.0, reviews: 15, price: 800.00 },
    { id: 603, img: "image110.jpg", name: "black wool", rating: 5.0, reviews: 8, price: 500.00 },
    { id: 604, img: "image111.jpg", name: "Blue Green", rating: 4.5, reviews: 15, price: 400.00 },
    { id: 605, img: "image112.jpg", name: "brown cotton", rating: 5.0, reviews: 23, price: 650.00 },
    { id: 606, img: "image113.jpg", name: "Deep-blue + Black", rating: 4.5, reviews: 62, price: 900.00 },
    { id: 607, img: "image114.jpg", name: "Yellow Cotton", rating: 4.0, reviews: 40, price: 1200.00 },
    { id: 608, img: "image115.jpg", name: "Pink Cotton", rating: 4.0, reviews: 20, price: 1290.00 },
    { id: 609, img: "image116.jpg", name: "Green cotton", rating: 5.0, reviews: 200, price: 1000.00 },
    { id: 610, img: "image117.jpg", name: "white cotton", rating: 5.0, reviews: 70, price: 1200.00 },
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
        <h1 className="text-3xl md:text-4xl font-bold p-2 ml-0 md:ml-10 mb-5">Hoodies Collection</h1>
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

export default Hoodies;