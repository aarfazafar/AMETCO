import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset all ScrollTriggers (very important)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Allow DOM + GSAP to finish before scrolling
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" }); // change to 'smooth' if needed
    }, 100); // Adjust delay if needed (100–200ms is best)

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
