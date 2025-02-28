import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center mt-5">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          {cart.map((item) => (
            <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
              <img src={item.product_photo} alt={item.model_name} className="w-32 h-32 object-cover mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 text-center">{item.model_name}</h3>
              <p className="text-lg font-medium text-green-500 text-center">{item.price_bdt} BDT</p>
              <button
               
                className="w-[45%] bg-red-500 text-white font-bold py-2 mt-2 rounded hover:bg-red-700"
              >
               Buy
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-[45%] bg-red-500 text-white font-bold py-2 mt-2 ml-2 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
