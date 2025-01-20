'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
export default function MobileSection() {
  const slides = [
    {
      title: "Budgets? You betcha",
      description:
        "Effortlessly create budgets that are easy to stick to. We even track your spending for you.",
      image:
        "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg",
      bgColor: "bg-green-100",
    },
    {
      title: "All-in-one? Done",
      description:
        "Conveniently keep all your finances and budgets in one place.",
      image:
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Credit? Checked",
      description:
        "Find out your credit score and learn how to improve it.",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      bgColor: "bg-yellow-100",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div>
      {/* Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div
            className={`rounded-lg shadow-2xl p-8 transition-all duration-500 grid md:grid-cols-2 items-center ${slides[currentSlide].bgColor}`}
          >
            {/* Text Content */}
            <div className="text-left">
              <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <a
                href="#"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
              >
                Learn More
              </a>
            </div>

            {/* Image Content */}
            <div className="text-center">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="rounded-lg shadow-lg w-80 h-80 object-cover mx-auto"
              />
            </div>
          </div>

          {/* Dots for Navigation */}
          <div className="flex justify-center mt-6 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-4 w-4 rounded-full ${
                  currentSlide === index
                    ? "bg-green-500"
                    : "bg-gray-300 hover:bg-gray-400"
                } shadow-lg transition-all`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Centered Card */}
<div className="bg-white p-4 rounded-lg shadow-lg mx-auto w-64 mt-6 transform transition-transform hover:scale-105">
  <img
    src="data:image/jpeg;base64,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"
    alt="iPhone 13 Pro"
    className="mx-auto mb-3 h-36 w-36 object-cover rounded-lg"
  />
  <h3 className="text-lg font-bold mb-3 text-gray-800 text-center">
    Tshirt
  </h3>
  <p>this is iphon 13 buy now</p>
  <a
    href="/menubar/cart"
    className="block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center shadow-md hover:bg-orange-600 transition-transform transform hover:scale-110"
  >
    Add to Cart
  </a>
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
  );
}
