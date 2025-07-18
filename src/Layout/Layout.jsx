// src/Layout/Layout.jsx
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollTop from "../ScrollTop/ScrollTop";
import ScrollToTopButton from "../ScrollTop/ScrollToTopButton";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollTop />
      <ScrollToTopButton />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
