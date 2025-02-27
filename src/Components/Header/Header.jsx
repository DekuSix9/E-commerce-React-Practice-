import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div >
             <nav className="fixed top-0 left-0 w-full bg-black p-4 shadow-md z-50 ">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-lg font-bold">Logo</a>
            <ul className="flex space-x-6">
                <Link to="/"><a href="#" className="text-white hover:text-gray-400">Home</a></Link>
                <Link to="/products"><a href="#" className="text-white hover:text-gray-400">Products</a></Link>
                <Link to="/contact"><a href="#" className="text-white hover:text-gray-400">Contact</a></Link>
                <Link to="/cart"><a href="#" className="text-white hover:text-gray-400">Cart</a></Link>
            </ul>
        </div>
    </nav>
        </div>
    );
};

export default Header;