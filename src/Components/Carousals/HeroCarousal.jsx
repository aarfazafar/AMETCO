import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import diagram from "../../assets/Images/diagram.jpg";
import aboutImg1 from "../../assets/aboutImages/about-1.png";
import aboutImg2 from "../../assets/aboutImages/about-2.png";
import aboutImg3 from "../../assets/aboutImages/about-3.png";

const slides = [
  {
    title: "",
    image: diagram,
  },
  {
    title: "Smart Electrical Wiring",
    image: aboutImg1,
  },
  {
    title: "Modern Construction",
    image: aboutImg2,
  },
  {
    title: "Interior Renovation",
    image: aboutImg3,
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const pause = () => clearTimeout(timeoutRef.current);

  const startAutoSlide = () => {
    pause();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return pause;
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 py-12 z-[-1]">
      <div className="relative w-full max-w-6xl mx-auto h-[80vh] overflow-hidden shadow-xl">
        {/* Slide wrapper */}
        <div
          className="flex w-full h-full transition-transform duration-1000 ease-in-out z-1"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 relative h-full brightness-90"
              onMouseEnter={pause}
              onMouseLeave={startAutoSlide}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <h2 className="text-3xl md:text-5xl font-light text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
                  {slide.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full z-20 backdrop-blur"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full z-20 backdrop-blur"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/50 ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
