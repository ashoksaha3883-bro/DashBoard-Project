import React from "react";
import { useNavigate } from "react-router-dom";

function Men() {
  const navigate = useNavigate();

  const products = [
    { id: 101, img: "boy1.jpg", name: "Brown Half t-shirt", rating: 4.0, reviews: 10, price: 300.00 },
    { id: 102, img: "boy2.jpg", name: "Green Cotton half t-shirt", rating: 4.0, reviews: 12, price: 500.00 },
    { id: 103, img: "boy4.jpg", name: "Brown Half t-Shirt", rating: 4.0, reviews: 4, price: 300.00 },
    { id: 104, img: "boy6.jpg", name: "Green + Gray Half t-Shirt", rating: 4.5, reviews: 5, price: 400.00 },
    { id: 105, img: "boy9.jpg", name: "Brown t-Shirt", rating: 4.0, reviews: 23, price: 500.00 },
    { id: 106, img: "boy11.jpg", name: "Deep-black + Gray shirt", rating: 4.5, reviews: 17, price: 500.00 },
    { id: 107, img: "boy12.jpg", name: "Gray + Brown Half t-shirt", rating: 5.0, reviews: 47, price: 900.00 },
    { id: 108, img: "boy13.jpg", name: "Brown half t-shirt", rating: 5.0, reviews: 53, price: 499.00 },
    { id: 109, img: "boy14.jpg", name: "Brown white Green Black combo", rating: 5.0, reviews: 400, price: 3000.00 },
    { id: 110, img: "boy16.jpg", name: "Blue + Brown", rating: 4.0, reviews: 300, price: 500.00 },
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
        <h1 className="text-3xl md:text-4xl font-bold p-2 ml-0 md:ml-10 mb-5">Men's Clothing</h1>
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

export default Men;