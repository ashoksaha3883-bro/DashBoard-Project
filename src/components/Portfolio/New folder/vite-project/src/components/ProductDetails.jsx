import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl text-center mb-4">Product Not Found</h1>
        <button 
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-orange-500 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="p-4 md:p-8 lg:p-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-2xl hover:text-orange-500 transition-colors flex items-center gap-2"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-7xl mx-auto">
        {/* LEFT IMAGE */}
        <div className="bg-gray-100 rounded-xl overflow-hidden">
          <img 
            src={product.image} 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" 
            alt={product.name} 
          />
        </div>

        {/* RIGHT DETAILS */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-lg">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="text-2xl md:text-3xl mt-4 font-semibold text-orange-600">
            ${product.price}
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-semibold">Size:</span>
              <select className="border rounded-md px-3 py-2">
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold">Color:</span>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-black rounded-full cursor-pointer border-2 border-gray-300"></div>
                <div className="w-8 h-8 bg-gray-500 rounded-full cursor-pointer border-2 border-gray-300"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border-2 border-gray-300"></div>
              </div>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="mt-8 px-8 py-4 bg-black text-white rounded-lg hover:bg-orange-500 transition-colors duration-300 text-lg font-semibold"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;