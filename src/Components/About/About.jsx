// Updated About.jsx with GSAP fixes
import aboutImg1 from "../../assets/aboutImages/about-1.png";
import aboutImg2 from "../../assets/aboutImages/about-2.png";
import aboutImg3 from "../../assets/aboutImages/about-3.png";
import aboutImg4 from "../../assets/aboutImages/about-4.png";
import logo from "../../assets/Images/logo.png";
import city from "../../assets/Images/bg-city.jpg";
import worker from "../../assets/Images/worker.jpg";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  Compass,
  Users,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Globe,
  Wrench,
  Home,
  Lightbulb,
} from "lucide-react";
import AboutCard from "./AboutCard";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline();

      heroTimeline
        .fromTo(
          heroRef.current?.querySelector(".hero-logo"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo(
          heroRef.current?.querySelector(".hero-title"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          heroRef.current?.querySelector(".hero-subtitle"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          "-=0.6"
        );

      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
        force3D: true,
        transformOrigin: "center center",
        willChange: "transform",
      });

      gsap.utils.toArray(".image-card").forEach((card, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        });

        tl.fromTo(
          card,
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
            rotationY: index % 2 === 0 ? -10 : 10,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            duration: 0.4,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });

      const sections = [
        aboutRef,
        visionRef,
        missionRef,
        portfolioRef,
        servicesRef,
        contactRef,
      ];

      sections.forEach((sectionRef) => {
        if (sectionRef.current) {
          gsap.fromTo(
            sectionRef.current.children,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                end: "bottom 25%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      gsap.utils.toArray(".text-reveal").forEach((text) => {
        gsap.fromTo(
          text,
          {
            backgroundPosition: "200% 0%",
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, transparent 40%, #f59e0b 50%, transparent 60%, transparent 100%)",
          },
          {
            backgroundPosition: "-200% 0%",
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 🧠 Force ScrollTrigger Refresh after mount
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-amber-300/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-slate-200/20 to-gray-300/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-xl"></div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Background image */}
        <img
          src={city}
          alt="Hero Visual"
          className="absolute inset-0 w-full h-full object-cover object-bottom-left opacity-30 z-0 mix-blend-multiply pointer-events-none"
        />

        <div className="max-w-4xl mx-auto text-center z-20">
          <div className="hero-logo mb-8">
            <div className="inline-flex items-center justify-center h-40 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              <img src={logo} className="w-full h-full" alt="" />
            </div>
          </div>

          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            ABU MUSA ENGINEERING & <br />
            <span className="text-gradient bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              TRADING CO. SPC.
            </span>
          </h1>

          <p className="hero-subtitle text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Construction, Building Maintenance & Trading Company
          </p>
          {/* Bottom character with message */}
          <div className="absolute right-[30%] md:bottom-20 md:right-50 w-[150px] animate-bounce z-10">
            <img
              src={worker}
              alt="Character"
              className="w-full opacity-80 rounded-lg"
            />
            <div className="text-xs mt-2 text-slate-800 font-medium">
              Making your Dreams
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes fade-in-delay {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 1.2s ease-out forwards;
          }

          .animate-fade-in-delay {
            animation: fade-in-delay 1.4s ease-out forwards;
          }

          .animate-slide-up {
            animation: slide-up 1.2s ease-out forwards;
          }

          .animate-bounce {
            animation: bounce 2s infinite;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>

      {/* About Section */}
      {/* <section ref={aboutRef} className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-8">
                About{" "}
                <span className="text-reveal bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                  Us
                </span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  <strong>ABU MUSA ENGINEERING & TRADING CO. SPC.</strong> We
                  are a newly established construction, building maintenance &
                  Trading Company. We are committed to providing high-quality,
                  reliable and cost-effective services. Whether you're building
                  a new structure or maintaining an existing one, we deliver
                  innovative solutions that ensure safety, durability, and
                  long-term value.
                </p>

                <p>
                  Our team of experienced professionals specializes in
                  construction, renovation, and comprehensive building
                  maintenance services.
                </p>

                <p>
                  Dynamic and technology-driven organization specializing in
                  end-to-end solutions. With a focus on delivering cutting-edge
                  technologies and reliable infrastructure, we empower
                  businesses to operate efficiently, securely and competitively
                  in today's digital landscape.
                </p>

                <p>
                  Our company combines technical expertise, strong vendor
                  partnerships and a client-first approach to offer tailored
                  services and genuine products across various industries.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="image-card relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={aboutImg4}
                  alt="Modern living room interior"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section ref={aboutRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-8">
                About{" "}
                <span className="text-reveal bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                  Us
                </span>
              </h2>

              <div className="space-y-10 text-slate-700 leading-relaxed text-lg">
                <div className="border-l-4 border-slate-800 pl-6 italic">
                  <p>
                    <strong className="text-slate-900 font-semibold tracking-wide">
                      ABU MUSA ENGINEERING & TRADING CO. SPC.
                    </strong>{" "}
                    is a newly established construction, building maintenance &
                    trading company — delivering
                    <span className="text-slate-900 font-medium">
                      {" "}
                      high-quality, reliable, and cost-effective services.
                    </span>
                  </p>
                  <p className="mt-2">
                    Whether you're building a new structure or maintaining an
                    existing one, we ensure
                    <span className="text-slate-900 font-medium">
                      {" "}
                      safety, durability, and long-term value
                    </span>{" "}
                    through innovative solutions.
                  </p>
                </div>

                <div className="relative pl-6">
                  <span className="absolute left-0 top-1 text-2xl text-slate-500">
                    •
                  </span>
                  <p>
                    Our experienced team excels in construction, renovation, and
                    full-scale building maintenance.
                  </p>
                </div>

                <div className="relative pl-6">
                  <span className="absolute left-0 top-1 text-2xl text-slate-500">
                    •
                  </span>
                  <p>
                    We're a{" "}
                    <span className="font-semibold text-slate-900">
                      dynamic and tech-driven organization
                    </span>{" "}
                    providing end-to-end solutions. By delivering cutting-edge
                    infrastructure and digital-first strategies, we empower
                    businesses to operate
                    <span className="font-semibold text-slate-900">
                      {" "}
                      efficiently, securely, and competitively.
                    </span>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-inner border border-slate-200">
                  <p className="text-slate-800">
                    At our core, we combine{" "}
                    <span className="font-medium">technical expertise</span>,
                    strong vendor relationships, and a
                    <span className="text-slate-900 font-semibold">
                      {" "}
                      client-first mindset
                    </span>{" "}
                    — offering tailor-made services and authentic solutions
                    across industries.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="image-card relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={aboutImg4}
                  alt="Modern living room interior"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <AboutCard ref={aboutRef} img={aboutImg4} readMore="true"/>

      {/* Vision & Mission */}
      {/* bg-gradient-to-br from-slate-50 to-white */}
      <section className="py-24 bg-gradient-to-br from-slate-600 to-slate-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div ref={visionRef} className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900  rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-lg text-white leading-relaxed">
                To become a leading name in Oman and the region, recognized for
                delivering sustainable construction, cutting-edge
                infrastructure, and technological solutions that drive lasting
                value for communities and industries.
              </p>
            </div>

            <div ref={missionRef} className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900  rounded-xl flex items-center justify-center shadow-lg">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Mission</h3>
              </div>
              <div className="space-y-4 text-lg text-white leading-relaxed text-justify">
                <p>
                  To provide end-to-end construction and maintenance solutions
                  that are safe, efficient, and sustainable.
                </p>
                <p>
                  To deliver genuine products and trusted technologies through
                  strong vendor partnerships.
                </p>
                <p>
                  To build long-term relationships by exceeding client
                  expectations through professionalism, quality, and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section ref={portfolioRef} className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Showcasing our expertise in construction, interior design, and
              smart home solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="image-card group relative overflow-hidden shadow-lg">
              <img
                src={aboutImg1}
                alt="Modern bathroom design"
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-semibold text-lg mb-2">
                    Modern Bathroom
                  </h4>
                  <p className="text-white/80 text-sm">
                    Luxury bathroom renovation with premium fixtures
                  </p>
                </div>
              </div>
            </div>

            <div className="image-card group relative overflow-hidden shadow-lg">
              <img
                src={aboutImg3}
                alt="Kitchen design"
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-semibold text-lg mb-2">
                    Modern Kitchen
                  </h4>
                  <p className="text-white/80 text-sm">
                    Contemporary kitchen with smart appliances
                  </p>
                </div>
              </div>
            </div>

            <div className="image-card group relative overflow-hidden shadow-lg">
              <img
                src={aboutImg2}
                alt="Living room design"
                className="w-full  h-full object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-semibold text-lg mb-2">
                    Elegant Living Space
                  </h4>
                  <p className="text-white/80 text-sm">
                    Sophisticated interior with modern furnishings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Section */}
      {/* <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Smart Home Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Integrating cutting-edge technology for modern living experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Smart Lighting
              </h3>
              <p className="text-slate-600 text-sm">
                Automated lighting control systems
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Home Security
              </h3>
              <p className="text-slate-600 text-sm">
                Advanced security monitoring
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Climate Control
              </h3>
              <p className="text-slate-600 text-sm">Smart HVAC management</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Entertainment
              </h3>
              <p className="text-slate-600 text-sm">Integrated media systems</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end engineering, construction, and environmental solutions
              tailored to your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 text-slate-700">
            {/* Building Construction */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Building Construction
              </h3>
              <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                <li>Residential: Villas, apartments & luxury homes</li>
                <li>Commercial: Offices, retail spaces & hotels</li>
                <li>Industrial: Warehouses, factories & distribution units</li>
              </ul>
            </div>

            {/* Renovation & Remodeling */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Renovation & Remodeling
              </h3>
              <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                <li>Home upgrades: Kitchens, bathrooms, basements</li>
                <li>Modern makeovers & smart home integration</li>
                <li>Commercial redesigns & space optimization</li>
                <li>Structural expansion & modifications</li>
              </ul>
            </div>

            {/* Water Treatment Plants */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Water Treatment Plants
              </h3>
              <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                <li>STP: Conventional, MBBR, SBR, MBR systems</li>
                <li>ETP: Industrial wastewater treatment</li>
                <li>RO Plants: Residential & commercial solutions</li>
              </ul>
            </div>

            {/* Exterior Services */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Exterior Services
              </h3>
              <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                <li>Decks, patios & outdoor structures</li>
                <li>Siding, stucco, window & door upgrades</li>
                <li>Boundary walls & entryway installations</li>
                <li>Driveways, fencing & landscaping</li>
              </ul>
            </div>

            {/* Smart Infrastructure */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Smart Infrastructure
              </h3>
              <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                <li>Energy-efficient systems & IoT controls</li>
                <li>Automation for lighting & climate</li>
                <li>Surveillance & integrated security</li>
              </ul>
            </div>

            {/* Maintenance & Support */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Maintenance & Support
              </h3>
              <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                <li>Ongoing facility & equipment maintenance</li>
                <li>Emergency repair & troubleshooting</li>
                <li>Routine inspections & safety audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <p className="text-2xl sm:text-3xl text-white/90 mb-8 italic leading-relaxed">
              "Thank you for taking the time to learn about us!"
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
            CONTACT US
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col items-center text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg font-medium">+968 98042651</p>
            </div>

            <div className="flex flex-col items-center text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg font-medium">info@ametcoglobal.com</p>
            </div>

            <div className="flex flex-col items-center text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg font-medium">www.ametcoglobal.com</p>
            </div>

            <div className="flex flex-col items-center text-white">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-lg font-medium">
                <p>Bousher, Muscat</p>
                <p className="text-sm text-white/80">P.O. - 10 P.C. - 411</p>
              </div>
            </div>
          </div>

          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span>Get In Touch</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
