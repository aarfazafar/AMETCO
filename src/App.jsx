// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { useLenis } from "../hooks/useLenis";
import Loader from "./Preloader/Loader";
import Layout from "./Layout/Layout";

// Page Components
import Hero from "./Components/HeroSection/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Service";
import Gallery from "./Components/Gallery/Gallery";
import Projects from "./Components/Projects/Projects";
import { Careers } from "./Components/Careers/Careers";
import ContactUs from "./Components/ContactUs/ContactUs";

// Admin
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import ProtectedRouteForAdmin from "./protectedRoutes/protectedRouteForAdmin";
import CarousalManager from "./Components/AdminPanel/CarousalManager";
import ProjectsManager from "./Components/AdminPanel/ProjectsManager";
import GalleryManager from "./Components/AdminPanel/GalleryManager";
import { AppDataProvider } from "./context/AppDataContext";

const App = () => {
  useLenis();
  const [showLoader, setShowLoader] = useState(true);

  return (
    <AppDataProvider>
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
      {!showLoader && (
        <Routes>
          {/* Public layout with Navbar + Footer */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="projects" element={<Projects />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>

          {/* Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Admin Protected */}
          <Route
            path="/admin"
            element={
              <ProtectedRouteForAdmin>
                <AdminPanel />
              </ProtectedRouteForAdmin>
            }
          >
            <Route path="carousel" element={<CarousalManager />} />
            <Route path="projects" element={<ProjectsManager />} />
            <Route path="gallery" element={<GalleryManager />} />
          </Route>
        </Routes>
      )}
    </AppDataProvider>
  );
};

export default App;
