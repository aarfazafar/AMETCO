import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useAppData } from "../../context/AppDataContext";


const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const intervalRef = useRef(null);
  const {gallery} = useAppData();
  const categories = ["All", ...new Set(gallery.map((img) => img.category))];

  const filteredImages =
    activeCategory === "All"
      ? gallery
      : gallery.filter((img) => img.category === activeCategory);

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

        <div className="flex flex-wrap justify-center gap-4 mb-10 z-40">
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
