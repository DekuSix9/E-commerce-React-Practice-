import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className=" flex flex-col items-center justify-center max-w-7xl m-auto mt-10 ">
            <h1 className=" font-bold text-2xl ">Categories</h1>
            <div className=" flex gap-12 mt-6 ">
                <Link>
                <button className=" w-28 h-12 bg-gray-300 rounded-md hover:bg-gray-400">Electronics</button>
                </Link>
                <Link>
                <button className=" w-28 h-12 bg-gray-300 rounded-md hover:bg-gray-400">Clothing</button>
                </Link>
                <Link>
                <button className=" w-28 h-12 bg-gray-300 rounded-md hover:bg-gray-400">Accessories</button>
                </Link>
            </div>
        </div>
    );
};

export default Categories;