import { useEffect, useState } from "react";
import Product from "./Product";
import Footer from "../Footer/Footer";
const Products = () => {
    const [accessories, setAccessories] = useState([]);
    const [clothing, setClothing] = useState([]);
    const [electronics, setelectronics] = useState([]);

    useEffect(() => {
        fetch('Accessories.json')
            .then(res => res.json())
            .then(data => setAccessories(data))
            .catch(error => console.error("Error fetching data:", error)); 
    }, []);

    useEffect(() => {
        fetch('Clothing.json')
            .then(res => res.json())
            .then(data => setClothing(data))
            .catch(error => console.error("Error fetching data:", error)); 
    }, []);

    useEffect(() => {
        fetch('Electronics.json')
            .then(res => res.json())
            .then(data => setelectronics(data))
            .catch(error => console.error("Error fetching data:", error)); 
    }, []);

    return (
        <div>
            <div className="font-bold flex justify-center items-center">
                <h1 className=" font-bold text-2xl">Accessories</h1>
            </div>

            <div className="grid grid-cols-4 mt-4 gap-10">
                {accessories.map(accessory => (
                    <Product key={accessory.id} product={accessory} />
                ))}
            </div>

            <div className="font-bold flex justify-center items-center mt-10">
                <h1 className=" font-bold text-2xl mt-6">Clothing</h1>
            </div>

            <div className="grid grid-cols-4 mt-4 gap-10">
                {clothing.map(cloth => (
                    <Product key={cloth.id} product={cloth} />
                ))}
            </div>

            <div className="font-bold flex justify-center items-center mt-12">
                <h1 className=" font-bold text-2xl mt-6"> Electronics</h1>
            </div>

            <div className="grid grid-cols-4 mt-4 gap-10">
                {electronics.map(electic => (
                    <Product key={electic.id} product={electic} />
                ))}
            </div>
            <Footer ></Footer>
        </div>
    );
};

export default Products;


