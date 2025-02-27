import { Link } from 'react-router-dom';
import BannerImg from '../../assets/Image/banner7.jpg';

const Banner = () => {
    return (
      <div className=' max-w-7xl m-auto '>
        <div
      className="   h-[500px] bg-cover items-center bg-center flex flex-col justify-center text-white font-bold text-lg shadow-md"
      style={{ backgroundImage: `url(${BannerImg})` }} >
        
        <h2 className=' text-white text-5xl'>Welcome to Our Store </h2>
      <p className=' text-amber-50 mt-2'>Find the best products at unbeatable prices!</p>
      <Link to="/products">  
      <button className="mt-4 bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 transition">
        Shop Now
      </button>
      </Link>
        </div>
    
      </div>
       
    );
};

export default Banner;