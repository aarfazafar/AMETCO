import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const linkRefs = useRef([]);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        display: "flex",
      });
      gsap.fromTo(
        linkRefs.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0,
          delay: 0,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = "none";
          }
        },
      });
    }
  }, [isOpen]);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PROJECTS", path: "/projects" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CAREERS", path: "/careers" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#F1F2ED] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between md:justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="AMETCO"
            className="h-16 md:h-20 transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map(({ name, path }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                className={`group relative text-[#333] font-medium transition 
                  ${isActive ? "text-black" : "hover:text-black"}`}
              >
                {name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black transition-all duration-300
                    ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden z-[10001]">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#F1F2ED] flex-col items-center justify-center hidden md:hidden z-[10000]"
        style={{ opacity: 0 }}
      >
        <img
          src={logo}
          alt="AMETCO"
          className="h-30 mb-8 transition-all duration-300"
        />
        <div className="flex flex-col items-center gap-6 text-lg font-semibold mr-2">
          {links.map(({ name, path }, i) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                onClick={() => setIsOpen(false)}
                ref={(el) => (linkRefs.current[i] = el)}
                className={`group relative text-[#333] hover:text-black transition text-xl 
                  ${isActive ? "text-black" : ""}`}
              >
                {name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black transition-all duration-300
                    ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}`}
                ></span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
