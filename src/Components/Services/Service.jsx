import React, { useLayoutEffect, useRef } from "react";
import {
  Building2,
  Wrench,
  Droplets,
  TreePine,
  Home,
  Factory,
  Hammer,
  Settings,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import service from "../../assets/servicesImages/service.png";
import service1 from "../../assets/servicesImages/service1.png";
import service2 from "../../assets/servicesImages/service2.png";
import service3 from "../../assets/servicesImages/service3.jpg";
import service4 from "../../assets/servicesImages/service4.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Services = () => {
  const heroRef = useRef(null);
  const wrapperRef = useRef(null);
  const servicesRef = useRef(null);
  const buildingRef = useRef(null);
  const renovationRef = useRef(null);
  const waterRef = useRef(null);
  const exteriorRef = useRef(null);
  const galleryRef = useRef(null);

  // Framer Motion variants for section animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure initial visibility for all animated elements
      gsap.set(".service-card, .gallery-image", { opacity: 1, y: 0, scale: 1 });

      // Hero Animation
      const heroTimeline = gsap.timeline();

      gsap.to(wrapperRef.current, {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });

      heroTimeline
        .fromTo(
          heroRef.current?.querySelector(".hero-logo"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        )
        .fromTo(
          heroRef.current?.querySelector(".hero-title"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .fromTo(
          heroRef.current?.querySelector(".hero-subtitle"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .fromTo(
          heroRef.current?.querySelector(".hero-image img"),
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.7"
        );

      // Service cards animation
      gsap.utils.toArray(".service-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Hover animations
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            y: -5,
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });

      // Gallery images animation
      gsap.utils.toArray(".gallery-image").forEach((img, index) => {
        gsap.fromTo(
          img,
          {
            scale: 0.9,
            opacity: 0,
            rotationY: index % 2 === 0 ? -15 : 15,
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Floating background elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-slate-200/10 to-slate-300/10 rounded-full blur-lg"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/10 to-indigo-300/10 rounded-full blur-lg"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-slate-200/10 to-slate-400/10 rounded-full blur-lg"></div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-26 overflow-hidden"
      >
        {/* Background container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-slate-100/80"></div>
          <img
            src={service3}
            alt="Hero Visual"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-20 mix-blend-multiply pointer-events-none"
          />
        </div>

        <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <div className="hero-logo mb-6 flex justify-center lg:justify-start">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl shadow-2xl">
              <Settings className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
            Our{" "}
            <span className="text-gradient bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text">
              Services
            </span>
          </h1>

          <p className="hero-subtitle text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Comprehensive construction, renovation, and engineering solutions
            tailored to meet your specific needs.
          </p>
        </div>

        <div className="hidden lg:block relative z-10 w-full lg:w-1/2 pl-12">
          <div className="hero-image overflow-hidden rounded-3xl shadow-2xl max-w-lg mx-auto">
            <img
              src={service3}
              alt="Electrical work"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Building Construction Section */}
      <motion.section
        ref={buildingRef}
        className="py-24 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={useInView(buildingRef, { once: true, amount: 0.2 }) ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">
                  Building Construction
                </h2>
              </div>

              <div className="space-y-6">
                <div className="service-card bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Residential Projects
                      </h3>
                      <p className="text-slate-800">
                        Villas, Apartments, and luxury homes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Commercial Projects
                      </h3>
                      <p className="text-slate-800">
                        Offices, Retail outlets, Hotels, and restaurants.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Industrial Construction
                      </h3>
                      <p className="text-slate-800">
                        Warehouses, Factories, Distribution centers, and other
                        Industrial buildings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-image">
              <img
                src={service2}
                alt="Construction work"
                className="w-full h-[75vh] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Renovation & Remodeling Section */}
      <motion.section
        ref={renovationRef}
        className="py-24 bg-gradient-to-br from-slate-50 to-gray-50"
        initial="hidden"
        animate={useInView(renovationRef, { once: true, amount: 0.2 }) ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gallery-image order-2 lg:order-1">
              <img
                src={service1}
                alt="Interior renovation"
                className="w-full h-[75vh] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                  <Hammer className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">
                  Renovation & Remodeling
                </h2>
              </div>

              <div className="space-y-6">
                <div className="service-card bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Home Renovations
                      </h3>
                      <p className="text-slate-800">
                        Kitchen and bathroom makeovers, Basement conversions,
                        Rooftop Garden Lounge, Smart Homes and whole-house
                        renovations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Commercial Renovations
                      </h3>
                      <p className="text-slate-800">
                        Office redesigns, Retail and hospitality improvements,
                        Space optimizations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Structural
                      </h3>
                      <p className="text-slate-800">
                        Modifications and expansions of structural works
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Water Treatment Plants Section */}
      <motion.section
        ref={waterRef}
        className="py-24 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={useInView(waterRef, { once: true, amount: 0.2 }) ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">
                  Water Treatment Plants
                </h2>
              </div>

              <div className="space-y-6">
                <div className="service-card bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Sewage Treatment Plant (STP)
                      </h3>
                      <p className="text-slate-800">
                        Conventional, MBBR, SBR, and MBR-based STPs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Effluent Treatment Plant (ETP)
                      </h3>
                      <p className="text-slate-800">
                        Customized solutions for treating industrial wastewater
                        to meet discharge or reuse standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Reverse Osmosis Plant (RO)
                      </h3>
                      <p className="text-slate-800">
                        Industrial, commercial & residential RO systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-image">
              <img
                src={service4}
                alt="Water treatment facility"
                className="w-full h-[75vh] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Exterior Services Section */}
      <motion.section
        ref={exteriorRef}
        className="py-24 bg-gradient-to-br from-slate-50 to-gray-50"
        initial="hidden"
        animate={useInView(exteriorRef, { once: true, amount: 0.2 }) ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gallery-image order-2 lg:order-1">
              <img
                src={service}
                alt="Exterior construction work"
                className="w-full h-[75vh] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900">
                  Exterior Services
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="service-card bg-gray-50 p-4 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-slate-800 font-medium">
                      Decks, Patios, and Outdoor Living Areas
                    </p>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-4 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-slate-800 font-medium">
                      Siding & Stucco Replacement
                    </p>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-4 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-slate-800 font-medium">
                      Window & Door Upgrades
                    </p>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-4 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-10 text-green-600 flex-shrink-0" />
                    <p className="text-slate-800 font-medium">
                      Concrete Block Boundary Walls
                    </p>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-4 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-slate-800 font-medium">
                      Security Fencing Integration
                    </p>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-4 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-slate-800 font-medium">
                      Gates & Entryway Structures
                    </p>
                  </div>
                </div>

                <div className="service-card bg-gray-50 p-4 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-slate-800 font-medium">
                      Driveways and Landscaping Enhancements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Contact us today to discuss your construction, renovation, or
            engineering needs.
          </p>

          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Link to="/projects">Get Started</Link>
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;