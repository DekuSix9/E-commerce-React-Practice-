

const FeatureProducts = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-7xl m-auto mt-10 ">
            <h1 className=" font-bold text-2xl ">Feature Products</h1>
            <div className=" flex gap-20 mt-6 ">
                <div className=" border-1 border-gray-300  w-64 h-20 text-center py-4 hover:bg-gray-100">
                    <h1 className=" font-bold">Laptop</h1>
                    <p>High-performance laptop</p>
                </div>

                <div  className=" border-1 border-gray-300 w-64 h-20 text-center py-4 hover:bg-gray-100">
                    <h1 className=" font-bold">Smartphone</h1>
                    <p>Latest model smartphone</p>
                </div>

                <div  className=" border-1 border-gray-300 w-64 h-20 text-center py-4 hover:bg-gray-100">
                    <h1 className=" font-bold">Headphones</h1>
                    <p>Noise-canceling headphones</p>
                </div>

            </div>
          
        </div>
    );
};

export default FeatureProducts;