import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import bg from "../assets/images/IMG-20250625-WA0012.jpg";
import bg from "../../assets/Images/hero.jpg";
import logo from "../../assets/Images/logo.png";
import city from "../../assets/Images/bg-city.jpg";
import worker from "../../assets/Images/worker.jpg";
import diagram from "../../assets/Images/diagram.jpg";
import LocationBar from "../LocationBar/LocationBar";
import HeroCarousel from "../Carousals/HeroCarousal";
import AboutCard from "../About/AboutCard";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);

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
        )
        .fromTo(
          heroRef.current?.querySelector(".hero-tagline"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
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

    // Newsletter hover effect
    const newsletter = document.getElementById("newsletter");
    const mailIcon = document.querySelector(".ri-mail-line");
    const sendIcon = document.querySelector(".ri-send-plane-fill");

    // ✅ Hover Effect
    const handleMouseMove = () => {
      if (mailIcon && sendIcon) {
        mailIcon.style.display = "none";
        sendIcon.style.display = "inline";
      }
    };
    const handleMouseLeave = () => {
      if (mailIcon && sendIcon) {
        mailIcon.style.display = "inline";
        sendIcon.style.display = "none";
      }
    };

    if (newsletter) {
      newsletter.addEventListener("mousemove", handleMouseMove);
      newsletter.addEventListener("mouseleave", handleMouseLeave);
    }

    // ✅ Scroll-triggered Fade Out
    if (heroRef.current && newsletter) {
      gsap.to(newsletter, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "center center",
          end: "bottom top",
          toggleActions: "play none none reverse",
          onEnterBack: () => {
            gsap.to(newsletter, {
              opacity: 1,
              pointerEvents: "auto",
              duration: 0.5,
              ease: "power2.out",
            });
          },
        },
      });
    }

    // ✅ Cleanup
    return () => {
      if (newsletter) {
        newsletter.removeEventListener("mousemove", handleMouseMove);
        newsletter.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <div
        id="onef"
        className="relative w-full min-h-[100vh] flex justify-center items-center overflow-hidden"
      >
        {/* Floating background elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-xl"></div>
          <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-amber-300/20 rounded-full blur-xl"></div>
          <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-slate-200/20 to-gray-300/20 rounded-full blur-xl"></div>
          <div className="floating-element absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-xl"></div>
        </div>
        {/* <div
          id="one"
          ref={oneRef}
          className="relative w-full md:w-[85%] h-[40vh] md:h-[130vh] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-slate-100/20 z-0"></div>

          <div
            id="overlay"
            className="absolute inset-0 bg-transparent flex justify-center z-10"
          >
            <div
              id="maintext"
              ref={mainTextRef}
              className="text-[#F1F2ED] text-center z-20 relative min-h-[80vh] overflow-hidden"
            >
              <div className="w-full h-[50vh] md:h-[80vh] flex flex-col items-center justify-center md:justify-end">
                <h1 className="text-[clamp(3rem,20vw,14rem)] font-light leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  AMETCO
                </h1>
                <p className="text-lg md:text-[2.5vw] mt-4 backdrop-blur-xs p-2 md:p-0 drop-shadow-[0_4px_8px_rgba(0,0,0,0.75)]">
                Complete Construction & Renovation Solutions Under One Roof
                </p>
              </div>
            </div>
          </div>


        </div> */}
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="w-full relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
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

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              ABU MUSA ENGINEERING & <br />
              <span className="text-gradient bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
                TRADING CO. SPC.
              </span>
            </h1>

            <p className="hero-subtitle text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Construction, Building Maintenance & Trading Company
            </p>
            <div className="hero-tagline text-slate-600 text-2xl italic font-[cursive] text-center">
              "Complete Construction & Renovation Solutions Under One Roof"
            </div>

            <div className="absolute right-[30%] my-4 m:my-0 md:bottom-20 md:right-50 w-[130px] m:w-[150px] animate-bounce z-20">
              <div className="relative w-full">
                <img
                  src={worker}
                  alt="Character"
                  className="w-full opacity-100"
                />
                <div className="absolute top-[60%] left-[10%] md:left-[8%] w-[120px] text-center text-slate-800 font-medium text-lg font-handwritten leading-snug">
                  Making your
                  <br />
                  Dreams
                </div>
              </div>
            </div>
          </div>
          {/* Newsletter */}
          <div
            id="newsletter"
            className="fixed right-[2%] bottom-[1%] w-[220px] h-[80px] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center px-6 rounded-full z-50 hover:scale-[1.02] transition-all"
          >
            <div
              id="ncircle"
              className="relative w-[50px] h-[50px] rounded-full border-2 border-[#f1f2ed] mr-[25px]"
            >
              <i className="ri-mail-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm"></i>
              <i className="ri-send-plane-fill hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm"></i>
            </div>
            <div id="ntext" className="text-white text-sm tracking-wider">
              <h1 className="font-light leading-tight">NEWSLETTER</h1>
              <h2 className="font-sans text-[10px]">let's subscribe</h2>
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
      </div>

      <HeroCarousel />
      <LocationBar />
      <div className="w-full py-6">
        <AboutCard ref={aboutRef} img={diagram} readmore="false" />
      </div>
    </>
  );
};

export default Hero;
