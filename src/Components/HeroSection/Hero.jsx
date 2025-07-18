import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import bg from "../assets/images/IMG-20250625-WA0012.jpg";
import bg from "../../assets/Images/heroBg.jpg";
import diagram from "../../assets/Images/diagram.jpg";
import LocationBar from "../LocationBar/LocationBar";
import HeroCarousel from "../Carousals/HeroCarousal";
import AboutCard from "../About/AboutCard";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const mainTextRef = useRef(null);
  const oneRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const mainText = mainTextRef.current;
    const one = oneRef.current;

    // Scroll animation only on larger screens
    if (window.innerWidth > 768 && one && mainText) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: one,
            start: "top top",
            end: "+=200%",
            scrub: 1.5,
            pin: mainText,
            markers: false,
          },
        })
        .to(mainText, {
          y: -200,
          opacity: 0,
          ease: "power2.out",
        });

      gsap.to(one, {
        scrollTrigger: {
          trigger: one,
          start: "120% 100%",
          end: "160% 100%",
          scrub: 2,
        },
        opacity: 0,
        ease: "power2.out",
      });
    }

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
        <div
          id="one"
          ref={oneRef}
          className="relative w-full md:w-[85%] h-[40vh] md:h-[130vh] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Background gradient overlay */}
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

          {/* Newsletter Button */}
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
        </div>
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
