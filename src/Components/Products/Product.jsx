/* eslint-disable react/prop-types */

import { useCart } from "../Context/CartContext";

const Product = ({ product }) => {
  const { model_name, product_photo, price_bdt } = product;
  const { addToCart } = useCart();
 

  const handleBuyNow = () => {
    addToCart(product);
  
  };

  return (
    <div className="max-w-sm mt-4 rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
      <div className="relative">
        <img src={product_photo} alt={model_name} className="w-32 h-32 object-cover mx-auto" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate text-center">{model_name}</h3>
        <p className="text-lg font-medium text-green-500 text-center">{price_bdt} BDT</p>
        <button 
          onClick={handleBuyNow} 
          className="w-full bg-blue-500 h-10 rounded-lg font-bold hover:bg-blue-700 mt-2"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
