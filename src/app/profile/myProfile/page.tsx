'use client';

import React, { useState } from 'react';
import ProfileInformation from '../profileInformation/page';
import MyOrders from '../myorder/page';
import WishList from '../wishList/page';
import ManageAddress from '../address/page';
//import PaymentPage from '../../payment/page';
//import Login from '../../auth/login/page';
import Link from 'next/link';

export default function ProfilePage() {
    const [activeMenu, setActiveMenu] = useState('ProfileInformation');

    const renderContent = () => {
        switch (activeMenu) {
            case 'ProfileInformation':
                return <ProfileInformation />;
            case 'MyOrders':
                return <MyOrders />;
            case 'WishList':
                return <WishList />;
            case 'ManageAddress':
                return <ManageAddress />;
            // case 'Payments':
            //     return <PaymentPage />;
            // case 'Logout':
            //     return <Login />;
            default:
                return <ProfileInformation />;
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gray-100 p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-6">Hello, Mihir Agath</h2>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <button
                                onClick={() => setActiveMenu('ProfileInformation')}
                                className={`text-gray-700 hover:text-blue-500 ${
                                    activeMenu === 'ProfileInformation' ? 'text-blue-500 font-bold' : ''
                                }`}
                            >
                                Profile Information
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveMenu('MyOrders')}
                                className={`text-gray-700 hover:text-blue-500 ${
                                    activeMenu === 'MyOrders' ? 'text-blue-500 font-bold' : ''
                                }`}
                            >
                                My Orders
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveMenu('WishList')}
                                className={`text-gray-700 hover:text-blue-500 ${
                                    activeMenu === 'WishList' ? 'text-blue-500 font-bold' : ''
                                }`}
                            >
                                Wish List
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveMenu('ManageAddress')}
                                className={`text-gray-700 hover:text-blue-500 ${
                                    activeMenu === 'ManageAddress' ? 'text-blue-500 font-bold' : ''
                                }`}
                            >
                                Manage Address
                            </button>
                        </li>
                        <li>
                            <Link href={'/payment'}>
                            <button
                                onClick={() => setActiveMenu('Payments')}
                                className={`text-gray-700 hover:text-blue-500 ${
                                    activeMenu === 'Payments' ? 'text-blue-500 font-bold' : ''
                                }`}
                            >
                                Payments
                            </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/auth/login'}>
                            <button
                                onClick={() => setActiveMenu('Logout')}
                                className={`text-gray-700 hover:text-blue-500 ${
                                    activeMenu === 'Logout' ? 'text-blue-500 font-bold' : ''
                                }`}
                            >
                                Logout
                            </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">{renderContent()}</main>
        </div>
    );
}
