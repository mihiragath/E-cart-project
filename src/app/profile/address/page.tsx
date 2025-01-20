'use client';

import { useState } from 'react';

type Address = {
    id: number;
    fullName: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
};

export default function AddressMenu() {
    const [addresses, setAddresses] = useState<Address[]>([
        {
            id: 1,
            fullName: 'John Doe',
            street: '123 Main St',
            city: 'Los Angeles',
            state: 'CA',
            postalCode: '90001',
            phone: '123-456-7890',
        },
    ]);

    const [newAddress, setNewAddress] = useState<Address>({
        id: 0,
        fullName: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        phone: '',
    });

    // Handle input changes for the new address form
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewAddress((prev) => ({ ...prev, [name]: value }));
    };

    // Handle adding a new address
    const handleAddAddress = () => {
        if (
            newAddress.fullName &&
            newAddress.street &&
            newAddress.city &&
            newAddress.state &&
            newAddress.postalCode &&
            newAddress.phone
        ) {
            setAddresses((prev) => [
                ...prev,
                { ...newAddress, id: prev.length + 1 },
            ]);
            setNewAddress({
                id: 0,
                fullName: '',
                street: '',
                city: '',
                state: '',
                postalCode: '',
                phone: '',
            });
        } else {
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Manage Addresses</h2>

            {/* List of Addresses */}
            <div className="space-y-6">
                {addresses.map((address) => (
                    <div
                        key={address.id}
                        className="bg-gray-100 shadow-md rounded-md p-4"
                    >
                        <h3 className="font-semibold">{address.fullName}</h3>
                        <p>{address.street}</p>
                        <p>
                            {address.city}, {address.state} - {address.postalCode}
                        </p>
                        <p>Phone: {address.phone}</p>
                    </div>
                ))}
            </div>

            {/* Add Address Form */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Add a New Address</h3>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={newAddress.fullName}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                    <input
                        type="text"
                        name="street"
                        placeholder="Street Address"
                        value={newAddress.street}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={newAddress.city}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={newAddress.state}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={newAddress.postalCode}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={newAddress.phone}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                    />
                </div>
                <button
                    onClick={handleAddAddress}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Add Address
                </button>
            </div>
        </div>
    );
}
