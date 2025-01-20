'use client';

export default function ContactUs() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Us Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="mb-2">Email: support@yourwebsite.com</p>
                    <p className="mb-2">Phone: +1 (123) 456-7890</p>
                    <p className="mb-2">Address: 123 Business St, City, Country</p>
                </div>

                {/* Services Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li>✓ Fast Delivery</li>
                        <li>✓ Secure Payments</li>
                        <li>✓ 24/7 Customer Support</li>
                        <li>✓ Easy Returns</li>
                        <li>✓ Gift Cards</li>
                    </ul>
                </div>

                {/* Customer Support Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
                    <p className="mb-2">Have any questions? We're here to help!</p>
                    <p className="mb-2">Call us at: +1 (123) 456-7890</p>
                    <p className="mb-2">Or email: help@yourwebsite.com</p>
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Follow Us:</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                className="hover:text-blue-500"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                className="hover:text-blue-500"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="hover:text-pink-500"
                            >
                                Instagram
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="hover:text-blue-600"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-10 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Your Website. All rights reserved.
            </div>
        </footer>
    );
}
