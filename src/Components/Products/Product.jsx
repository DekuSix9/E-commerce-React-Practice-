/* eslint-disable react/prop-types */

const Product = ({ product }) => {
    const { model_name, product_photo, price_bdt, add_to_cart_icon } = product;

    return (
        <div>
            <div className="max-w-sm mt-4 rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
            <div className="relative">
                <img src={product_photo} alt={model_name} className="w-32 h-32 object-cover mx-auto" />
                <img src={add_to_cart_icon} alt="Add to Cart" className="w-8 h-8 absolute top-2 right-2 cursor-pointer transition-transform transform hover:scale-110" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 truncate text-center">{model_name}</h3>
                <p className="text-lg font-medium text-green-500 text-center">{price_bdt}</p>
                <button className=" w-full bg-blue-500 h-10 rounded-lg font-bold hover:bg-blue-700">Buy Now</button>
            </div>
        </div>

        </div>
       
    );
};

export default Product;
