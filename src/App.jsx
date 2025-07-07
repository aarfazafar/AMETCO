import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSection/Hero";
import Loader from "./Preloader/Loader";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { useLenis } from "../hooks/useLenis";
import About from "./Components/About/About";
import { Route, Routes } from "react-router-dom";
import Services from "./Components/Services/Service";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Projects from "./Components/Projects/Projects";
import ScrollTop from "./ScrollTop/ScrollTop";
import ScrollToTopButton from "./ScrollTop/ScrollToTopButton";
import { ProtectedRouteForAdmin } from "./protectedRoutes/protectedRoutesForAdmin";
import { AdminPanel } from "./Components/AdminPanel/AdminPanel";
import { Careers } from "./Components/Careers/Careers";
import ContactUs from "./Components/ContactUs/ContactUs";
const App = () => {
  useLenis();
  const [showLoader, setShowLoader] = useState(true);

  return (
    // <h1 className='bg-amber-600'>App</h1>
    <>
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}
      {/* {!showLoader && ( */}
      <>
        <ScrollTop />
        <ScrollToTopButton/>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route
          path="/admin/*"
          element={
            <ProtectedRouteForAdmin>
              <AdminPanel />
            </ProtectedRouteForAdmin>
          }
        />
        </Routes>
        <Footer />
        {/* <div className="w-full h-100 bg-gray-600"></div> */}
         
      </>
      {/* )} */}
    </>
  );
};
export default App;
