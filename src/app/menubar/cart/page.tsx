'use client';
import Link from "next/link";
import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  platform: string;
  price: number;
  quantity: number;
  image: string;
};

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Fifa 19",
      platform: "PS4",
      price: 44.0,
      quantity: 2,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Glacier White 500GB",
      platform: "PS4",
      price: 249.99,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 3,
      name: "Platinum Headset",
      platform: "PS4",
      price: 119.99,
      quantity: 1,
      image: "https://via.placeholder.com/60",
    },
  ]);

  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const updateQuantity = (id: number, increment: number): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + increment),
            }
          : item
      )
    );
  };

  const removeItem = (id: number): void => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const applyPromoCode = (): void => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(0.1 * totalCost);
      alert("Promo code applied successfully!");
    } else {
      alert("Invalid promo code.");
    }
  };

  const shippingCost = totalCost > 100 ? 0 : 5; 

  return (
<div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen p-6 flex justify-center">
  <div className="container mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
    <div className="flex flex-col lg:flex-row">
      {/* Shopping Cart Section */}
      <div className="w-full p-8 bg-gradient-to-r from-white to-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-wide text-center">
          Shopping Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600 italic">Your cart is empty!</p>
        ) : (
          <div>
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <p className="text-gray-700 font-medium">
                {cartItems.length} Items
              </p>
              <a
                href="#"
                className="text-pink-600 text-sm font-semibold hover:underline"
              >
                Continue Shopping
              </a>
            </div>
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt="Product"
                      className="w-20 h-20 object-cover rounded-lg shadow-md"
                    />
                    <div>
                      <h3 className="text-gray-800 font-semibold">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{item.platform}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-xs hover:underline font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-gray-500 hover:text-gray-700 font-bold"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={item.quantity}
                      readOnly
                      className="w-8 text-center border rounded bg-gray-100 font-medium"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-gray-500 hover:text-gray-700 font-bold"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-800">£{item.price.toFixed(2)}</p>
                  <p className="text-gray-800 font-bold">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Order Summary Section */}
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 p-8 text-center shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700">Items</p>
        <p className="text-gray-900 font-semibold">{cartItems.length}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-900 font-semibold">
          £{shippingCost.toFixed(2)}
        </p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-600 mb-2">Promo Code</label>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter your code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1 border rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-inner"
          />
          <button
            onClick={applyPromoCode}
            className="bg-pink-500 text-white px-4 rounded-r-lg hover:bg-pink-600 transition shadow-md"
          >
            Apply
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center font-bold text-lg mb-6">
        <p>Total Cost</p>
        <p>£{(totalCost - discount + shippingCost).toFixed(2)}</p>
      </div>
      <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-bold hover:bg-purple-600 transition shadow-lg">
        Checkout
      </button>
    </div>

    {/* Go to Home Button */}
    <div className="flex items-center justify-center bg-gray-100 p-6 mt-8 rounded-lg shadow-md">
      <Link href="/">
        <button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition transform hover:scale-105">
          Go To Home Page
        </button>
      </Link>
    </div>
  </div>
</div>

  );
}
