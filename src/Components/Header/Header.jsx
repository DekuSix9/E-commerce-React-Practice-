import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-bold">Logo</a>
        <ul className="flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/products" className="text-white hover:text-gray-400">Products</Link>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
          <Link to="/cart" className="text-white hover:text-gray-400 relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
