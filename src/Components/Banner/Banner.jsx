import BannerImg from '../../assets/Image/banner4.avif';

const Banner = () => {
    return (
      <div className=' max-w-7xl mx-auto '>
        <div
      className="   h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white font-bold text-lg shadow-md"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <h2 className=' text-purple-800 text-5xl'>Welcome to Our Store </h2>
      <p className=' text-purple-700 mt-2'>Find the best products at unbeatable prices!</p>
      <button className="mt-4 bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600 transition">
        Shop Now
      </button>
    </div>
    
      </div>
       
    );
};

export default Banner;