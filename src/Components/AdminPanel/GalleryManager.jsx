// src/Components/AdminPanel/GalleryManager.jsx
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { uploadToCloudinary } from "../../cloudinaryUpload";
import { Loader } from "../../Preloader/MiniLoader";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const GalleryManager = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({ title: "", category: "", image: null });
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    const snapshot = await getDocs(collection(db, "gallery"));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setImages(data);
    const uniqueCategories = [
      "All",
      ...new Set(data.map(img => img.category.trim().toLowerCase()))
    ];
    setCategories(uniqueCategories);
    setFilteredImages(data);
  };

  useEffect(() => { fetchImages(); }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category.trim().toLowerCase() === selectedCategory));
    }
  }, [selectedCategory, images]);

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imageUrl = await uploadToCloudinary(form.image);
    await addDoc(collection(db, "gallery"), {
      title: form.title,
      category: form.category,
      url: imageUrl,
    });
    setForm({ title: "", category: "", image: null });
    setFormVisible(false);
    fetchImages();
    setLoading(false);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "gallery", id));
    fetchImages();
  };

  return (
    <div className="text-white space-y-8 relative mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Gallery</h2>
        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow"
          onClick={() => setFormVisible(true)}
        >
          <Plus className="w-5 h-5" />
          Add Image
        </button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border border-blue-500 text-sm capitalize transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "text-blue-400 hover:bg-blue-700 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredImages.map((img) => (
          <div
            layout
            key={img.id}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            className="bg-slate-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h4 className="text-lg font-semibold mb-1 truncate capitalize">{img.title}</h4>
            <p className="text-sm text-slate-300 italic capitalize">{img.category}</p>
            <button
              onClick={() => handleDelete(img.id)}
              className="text-red-400 hover:text-red-600 text-sm font-medium mt-3"
            >
              Delete
            </button>
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {formVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.form
              onSubmit={handleAdd}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-slate-800 p-6 rounded-xl shadow-2xl w-[90%] max-w-md space-y-4"
            >
              <button
                type="button"
                className="absolute top-3 right-3 text-white hover:text-red-400"
                onClick={() => setFormVisible(false)}
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-lg font-semibold mb-2 text-white">Add Image</h3>
              <input
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                className="w-full p-3 rounded bg-slate-700 border border-slate-600 placeholder:text-slate-300"
                required
              />
              <input
                type="text"
                placeholder="Category"
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
                className="w-full p-3 rounded bg-slate-700 border border-slate-600 placeholder:text-slate-300"
                required
              />
              <input
                type="file"
                onChange={e => setForm({ ...form, image: e.target.files[0] })}
                className="w-full text-slate-300"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
                disabled={loading}
              >
                {loading ? <Loader /> : "Upload Image"}
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryManager;
