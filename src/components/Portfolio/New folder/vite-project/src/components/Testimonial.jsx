import React from 'react'
import image10 from "../assets/image10.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Michael L.",
      location: "London, UK",
      rating: 5,
      text: "Absolutely love the quality! The clothes are stylish and comfortable. Fast shipping and great customer service.",
      product: "Smart Home Assistant"
    },
    {
      name: "Sarah J.",
      location: "New York, USA",
      rating: 5,
      text: "Best online fashion store I've ever used. The fits are perfect and the prices are unbeatable. Highly recommended!",
      product: "Fashion Designer"
    },
    {
      name: "David K.",
      location: "Sydney, AUS",
      rating: 5,
      text: "Amazing collection and premium quality. The customer support team helped me choose the perfect size. Will shop again!",
      product: "Style Enthusiast"
    },
    {
      name: "Emma W.",
      location: "Paris, FR",
      rating: 5,
      text: "The clothes exceeded my expectations. Great fabric quality and perfect stitching. My new favorite store!",
      product: "Fashion Blogger"
    }
  ];

  return (
    <div className='w-full py-16 px-4 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4'>
          What Our Customers Say
        </h2>
        <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
          Join thousands of satisfied customers who trust NextGen Fashion
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2'>
              <div className="flex items-center mb-4">
                <img 
                  src={image10}
                  className='w-12 h-12 rounded-full border-2 border-orange-500 object-cover' 
                  alt={testimonial.name}
                />
                <div className="ml-3">
                  <h3 className='font-semibold text-gray-800'>{testimonial.name}</h3>
                  <p className='text-sm text-gray-500'>{testimonial.location}</p>
                </div>
              </div>
              
              <div className='flex text-yellow-400 mb-3'>
                {'★'.repeat(testimonial.rating)}
              </div>
              
              <p className='text-gray-600 mb-4 text-sm leading-relaxed'>
                "{testimonial.text}"
              </p>
              
              <p className='text-xs text-orange-500 font-semibold'>
                - {testimonial.product}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial