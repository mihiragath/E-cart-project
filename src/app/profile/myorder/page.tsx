'use client';

import { useState } from 'react';

type Order = {
    id: number;
    name: string;
    image: string;
    price: number;
};

export default function MyOrders() {
    // Sample order data
    const [orders, setOrders] = useState<Order[]>([
        {
            id: 1,
            name: 'Wireless Headphones',
            image: '/images/headphones.jpg',
            price: 99.99,
        },
        {
            id: 2,
            name: 'Smartphone Case',
            image: '/images/case.jpg',
            price: 19.99,
        },
        {
            id: 3,
            name: 'Gaming Mouse',
            image: '/images/mouse.jpg',
            price: 49.99,
        },
    ]);

    // Add to Cart handler
    const handleAddToCart = (order: Order) => {
        // Logic to add the item to the cart
        alert(`${order.name} has been added to your cart.`);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
            <div className="space-y-6">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-white shadow-md rounded-md overflow-hidden flex items-center space-x-6 p-4"
                    >
                        {/* Order Image */}
                        <img
                            src={order.image}
                            alt={order.name}
                            className="w-24 h-24 object-cover rounded-md"
                        />
                        
                        {/* Order Details */}
                        <div className="flex-1">
                            <h3 className="text-lg font-medium">{order.name}</h3>
                            <p className="text-gray-600">Price: ${order.price}</p>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                            onClick={() => handleAddToCart(order)}
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
