import React from 'react'
import image5 from "../assets/image5.jpg";

const Choose = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "We source the finest materials for lasting comfort and style",
      icon: "✨"
    },
    {
      title: "Fast Delivery",
      description: "Free shipping on orders over $50, delivered in 2-3 days",
      icon: "🚚"
    },
    {
      title: "24/7 Support",
      description: "Dedicated customer service ready to help anytime",
      icon: "💬"
    },
    {
      title: "Easy Returns",
      description: "30-day money-back guarantee, no questions asked",
      icon: "🔄"
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose NextGen Fashion?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our premium service and quality products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={image5}
                alt="Why Choose Us"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Features side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose