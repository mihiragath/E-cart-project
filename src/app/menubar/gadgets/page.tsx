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
    src="https://th.bing.com/th/id/R.dcf23a175cc9da3fe2a41d7153dd7094?rik=q%2bdlOl1%2fumv31w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fwatch-png-wristwatch-png-image-643.png&ehk=aN%2fyUqnvxc8sxH%2fbw46mATP%2fgXcvC%2bdwe52mrWdQLt4%3d&risl=&pid=ImgRaw&r=0"
    alt="kishan katchup"
    className="mx-auto mb-3 h-36 w-36 object-cover rounded-lg"
  />
  <h3 className="text-lg font-bold mb-3 text-gray-800 text-center">
        watch
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
