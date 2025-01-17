"use client";
import { useState, useEffect } from "react";

export default function Home() {
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
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>
        <div className="container mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Buy now and get up to 60% off
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Did you want to explore? Then go to the explore button
          </p>
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Explore more
          </a>
        </div>
      </section>

      <div className="text-center text-4xl font-bold text-gray-800 mb-8">Offers</div>
      {/* Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className={`rounded-lg shadow-lg p-8 transition-all duration-500 grid md:grid-cols-2 items-center ${slides[currentSlide].bgColor}`}
          >
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-extrabold mb-4 text-gray-800">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Image Content */}
            <div className="text-center">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="rounded-lg shadow-md w-64 h-64 object-cover mx-auto" // Adjusted size here
              />
            </div>
          </div>

          {/* Dots for Navigation */}
          <div className="flex justify-center mt-6 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full ${
                  currentSlide === index ? "bg-green-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Mint. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
