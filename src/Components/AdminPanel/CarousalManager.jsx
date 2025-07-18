// src/Components/AdminPanel/CarouselManager.jsx
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { uploadToCloudinary } from "../../cloudinaryUpload";
import { Loader } from "../../Preloader/MiniLoader";

const CarouselManager = () => {
  const [slides, setSlides] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({ title: "", image: null });
  const [loading, setLoading] = useState(false);

  const fetchSlides = async () => {
    const snapshot = await getDocs(collection(db, "carousel"));
    setSlides(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { fetchSlides(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const imageUrl = await uploadToCloudinary(form.image);
      await addDoc(collection(db, "carousel"), {
        title: form.title,
        imageUrl,
      });
      setForm({ title: "", image: null });
      setFormVisible(false);
      fetchSlides();
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "carousel", id));
    fetchSlides();
  };

  return (
    <div className="text-white space-y-6 mt-4">
      <h2 className="text-2xl font-bold mb-4">Manage Carousel</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map(slide => (
          <div key={slide.id} className="bg-slate-800 p-4 rounded-xl shadow-xl space-y-2">
            <img src={slide.imageUrl} alt="slide" className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-semibold">{slide.title || "No Title"}</h3>
            <button
              onClick={() => handleDelete(slide.id)}
              className="text-red-400 hover:text-red-600 text-sm font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => setFormVisible(!formVisible)}
        className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold"
      >
        {formVisible ? "Cancel" : "Add Slide"}
      </button>

      {formVisible && (
        <form onSubmit={handleAdd} className="mt-6 space-y-4 bg-slate-800 p-6 rounded-xl shadow-xl">
          <input
            type="text"
            placeholder="Title (optional)"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            className="w-full p-3 rounded bg-slate-700 border border-slate-600 text-white"
          />
          <input
            type="file"
            onChange={e => setForm({ ...form, image: e.target.files[0] })}
            className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-600 file:text-white hover:file:bg-slate-700"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md font-semibold"
            disabled={loading}
          >
            {loading ? <Loader /> : "Upload Slide"}
          </button>
        </form>
      )}
    </div>
  );
};

export default CarouselManager;
