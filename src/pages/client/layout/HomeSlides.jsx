import React, { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const HomeSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "https://intphcm.com/data/upload/mau-banner-noi-bat.jpg",
    "https://i.pinimg.com/736x/3b/00/b4/3b00b4a1a0caa5bf2bf27917f0cc09d7.jpg",
    "https://treobangron.com.vn/wp-content/uploads/2022/09/banner-khuyen-mai-42.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-5xl h-[70vh] mx-auto relative mt-4 rounded-sm">
      <div className="overflow-hidden h-[70vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 ease-in-out absolute inset-0`}
          >
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-[-2rem] transform -translate-y-1/2 transparent p-2"
        onClick={prevSlide}
      >
        <GrPrevious className="text-xl" />
      </button>
      <button
        className="absolute top-1/2 right-[-2rem] transform -translate-y-1/2 bg-transparent p-2"
        onClick={nextSlide}
      >
        <GrNext className="text-xl" />
      </button>
    </div>
  );
};

export default HomeSlides;
