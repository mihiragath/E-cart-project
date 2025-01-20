'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type WishlistItem = {
    id: number;
    name: string;
    image: string;
    price: number;
};

export default function Wishlist() {
    const router = useRouter();

    // Sample wishlist data
    const [wishlist, setWishlist] = useState<WishlistItem[]>([
        {
            id: 1,
            name: 'Smartwatch',
            image: '/images/smartwatch.jpg',
            price: 199.99,
        },
        {
            id: 2,
            name: 'Bluetooth Speaker',
            image: '/images/speaker.jpg',
            price: 49.99,
        },
        {
            id: 3,
            name: 'Wireless Earbuds',
            image: '/images/earbuds.jpg',
            price: 89.99,
        },
    ]);

    // Handle Add to Cart
    const handleAddToCart = (item: WishlistItem) => {
        alert(`${item.name} has been added to your cart.`);
        // Add additional logic if needed
    };

    // Handle Redirect to Product
    const handleRedirect = (item: WishlistItem) => {
        router.push(`/product/${item.id}`);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>
            <div className="space-y-6">
                {wishlist.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-md overflow-hidden flex items-center space-x-6 p-4"
                    >
                        {/* Wishlist Item Image */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-md"
                        />
                        
                        {/* Wishlist Item Details */}
                        <div className="flex-1">
                            <h3 className="text-lg font-medium">{item.name}</h3>
                            <p className="text-gray-600">Price: ${item.price}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-4">
                            {/* Add to Cart Button */}
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            >
                                Add to Cart
                            </button>

                            {/* View Product Button */}
                            <button
                                onClick={() => handleRedirect(item)}
                                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
                            >
                                View Product
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
