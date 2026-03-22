// Import all images at the top
import image48 from "./assets/image48.jpg";
import image54 from "./assets/image54.jpg";
import image44 from "./assets/image44.jpg";
import image45 from "./assets/image45.jpg";
import image51 from "./assets/image51.jpg";

const products = [
  {
    id: 1,
    name: "Gray Chill Jacket",
    price: 99.00,
    image: image48,  // Use imported variable
    description: "Warm and premium quality jacket perfect for chilly evenings.",
    rating: 4.5,
    reviews: 20
  },
  {
    id: 2,
    name: "Green Cotton Half Gloves",
    price: 20.00,
    image: image54,  // Use imported variable
    description: "Soft cotton gloves for daily use and comfort.",
    rating: 4.0,
    reviews: 15
  },
  {
    id: 3,
    name: "Gray-Blue Shirt",
    price: 45.00,
    image: image44,  // Use imported variable
    description: "Lightweight and durable shirt for casual occasions.",
    rating: 5.0,
    reviews: 8
  },
  {
    id: 4,
    name: "Green Half T-Shirt",
    price: 20.00,
    image: image45,  // Use imported variable
    description: "Casual green half sleeve T-shirt for everyday wear.",
    rating: 4.2,
    reviews: 12
  },
  {
    id: 5,
    name: "Blue-Green Shirt",
    price: 45.00,
    image: image51,  // Use imported variable
    description: "Stylish combination shirt with modern design.",
    rating: 4.8,
    reviews: 23
  }
];

export default products;