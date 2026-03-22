import { useState, useEffect } from "react";

// Import images
import image71 from "../assets/image71.jpg";
import image72 from "../assets/image72.jpg";
import image73 from "../assets/image73.jpg";
import image24 from "../assets/image24.jpg";
import image12 from "../assets/image12.jpg";

function Hero() {
  const images = [image71, image72, image73];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section with overlay text */}
      <section className="relative h-[70vh] md:h-[80vh] mx-4 md:mx-8 mt-4 rounded-3xl overflow-hidden shadow-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 transform scale-105 hover:scale-110"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 text-white">
          <p className="text-orange-400 font-semibold text-lg mb-2">Welcome to NextGen Fashion</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your<br />Unique Style</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">Shop the latest trends in fashion with premium quality and exclusive designs</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Shop Now →
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Two Boxes Section with better design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-8 mt-12">
        {/* Left Box */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl group h-[300px]">
          <img
            src={image24}
            alt="Luxury Collection"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Luxury Collection</h3>
            <p className="mb-4">Where dreams meet couture</p>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors">
              Explore →
            </button>
          </div>
        </div>

        {/* Right Box */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl group h-[300px]">
          <img
            src={image12}
            alt="Women's Fashion"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Women's Fashion</h3>
            <p className="mb-4">Enchanting styles for every woman</p>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors">
              Shop Women →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;