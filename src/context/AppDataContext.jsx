import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const AppDataContext = createContext();

export const useAppData = () => useContext(AppDataContext);

export const AppDataProvider = ({ children }) => {
  const [carousel, setCarousel] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [carouselSnap, gallerySnap, projectsSnap] = await Promise.all([
        getDocs(collection(db, "carousel")),
        getDocs(collection(db, "gallery")),
        getDocs(collection(db, "projects")),
      ]);

      setCarousel(carouselSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setGallery(gallerySnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setProjects(projectsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (err) {
      console.error("Failed to fetch app data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppDataContext.Provider value={{ carousel, gallery, projects, loading }}>
      {children}
    </AppDataContext.Provider>
  );
};
