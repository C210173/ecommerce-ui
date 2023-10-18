import React, { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const HomeSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "https://res.cloudinary.com/dttlhvsas/image/upload/v1697506793/xbmj0svpnpdimbzctck5.png",
    "https://res.cloudinary.com/dttlhvsas/image/upload/v1697506824/trppvkx7m8xg5rxgv4za.png",
    "https://res.cloudinary.com/dttlhvsas/image/upload/v1697506845/m2bpf5jafrgn9uewccxr.png",
    "https://res.cloudinary.com/dttlhvsas/image/upload/v1697506871/qzy6cik95het1vnixcpn.png",
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
    <div className="w-[60%] h-[41vh] relative rounded-md overflow-hidden mt-1">
      <div className="">
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
        className="absolute top-1/2 left-[-0.5rem] transform -translate-y-1/2 bg-transparent hover:bg-slate-400 rounded-md p-1 py-3"
        onClick={prevSlide}
      >
        <GrPrevious className="text-2xl text-white" />
      </button>
      <button
        className="absolute top-1/2 right-[-0.5rem] transform -translate-y-1/2 bg-transparent hover:bg-slate-400 rounded-md px-1 py-3"
        onClick={nextSlide}
      >
        <GrNext className="text-2xl text-white" />
      </button>
    </div>
  );
};

export default HomeSlides;
