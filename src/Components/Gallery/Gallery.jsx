import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import bg from "../../assets/images/heroBg.jpg";
import diagram from "../../assets/Images/diagram.jpg";
import aboutImg1 from "../../assets/aboutImages/about-1.png";
import aboutImg2 from "../../assets/aboutImages/about-2.png";
import aboutImg3 from "../../assets/aboutImages/about-3.png";
import aboutImg4 from "../../assets/aboutImages/about-4.png";
import logo from "../../assets/Images/logo.png";
import city from "../../assets/Images/bg-city.jpg";
import worker from "../../assets/Images/worker.jpg";
import service from "../../assets/servicesImages/service.png";
import service1 from "../../assets/servicesImages/service1.png";
import service2 from "../../assets/servicesImages/service2.png";
import service3 from "../../assets/servicesImages/service3.jpg";
import service4 from "../../assets/servicesImages/service4.png";

const images = [
  { id: 1, url: bg, title: "Modern Interior", category: "Interior" },
  { id: 2, url: diagram, title: "Staircase Design", category: "Architecture" },
  { id: 3, url: aboutImg1, title: "Smart Home Setup", category: "Smart Home" },
  { id: 4, url: aboutImg2, title: "Facade Work", category: "Facade" },
  { id: 5, url: aboutImg3, title: "Office Facade", category: "Facade" },
  { id: 6, url: aboutImg4, title: "Modern Facade", category: "Facade" },
  // { id: 7, url: city, title: "Urban View", category: "Cityscape" },
  { id: 8, url: service, title: "Service Showcase", category: "Services" },
  { id: 9, url: service1, title: "Maintenance", category: "Services" },
  { id: 10, url: service2, title: "Renovation", category: "Services" },
  { id: 11, url: service3, title: "Restoration", category: "Services" },
  { id: 12, url: service4, title: "Plumbing", category: "Services" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const intervalRef = useRef(null);

  const categories = ["All", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const nextImage = () => {
    setSelected((prev) => {
      if (prev === null || prev >= filteredImages.length - 1) return prev;
      return prev + 1;
    });
  };

  const prevImage = () => {
    setSelected((prev) => {
      if (prev === null || prev <= 0) return prev;
      return prev - 1;
    });
  };

  useEffect(() => {
    if (selected !== null && !isHovered) {
      intervalRef.current = setInterval(() => {
        setSelected((prev) => {
          if (prev === null || prev >= filteredImages.length - 1) {
            clearInterval(intervalRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }

    return () => clearInterval(intervalRef.current);
  }, [selected, isHovered, filteredImages.length]);

  return (
    <section className="pt-30 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Our
          <span className="text-gradient bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent"> Gallery</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-medium border border-slate-300 transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-slate-800 text-white"
                  : "text-slate-700 hover:bg-slate-200"
              }`}
              onClick={() => {
                setActiveCategory(cat);
                setSelected(null);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {filteredImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className="relative w-full overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => setSelected(i)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full transition-all duration-300 group-hover:brightness-85"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center text-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-150 flex items-center justify-center"
              onClick={() => setSelected(null)}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black"
                onClick={() => setSelected(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full px-4"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={filteredImages[selected].url}
                  alt="Large view"
                  className="w-full h-[75vh] object-contain rounded-xl"
                />
                <p className="text-white text-lg mt-4 text-center">
                  {filteredImages[selected].title}
                </p>

                {selected > 0 && (
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {selected < filteredImages.length - 1 && (
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
