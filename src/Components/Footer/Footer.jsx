import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white text-center p-4 mt-10">
    <p>&copy; 2025 E-Commerce Store. All rights reserved.</p>
    <div className="flex justify-center gap-4 mt-2">
     
      <Link to="/contact" className="hover:underline">Contact Us</Link>
      <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
    </div>
    </footer>
        </div>
    );
};

export default Footer;