import { Phone, Mail, Globe, MapPin } from "lucide-react";

import stairsImg from "../../assets/footerImages/stairs.png";
import doorsImg from "../../assets/footerImages/gate.png";
import smartHomeImg from "../../assets/footerImages/smart-home.png";
import windowsImg from "../../assets/footerImages/windows.png";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-8 lg:gap-2 px-6 sm:px-30 xl:px-50 py-12">
        <section className="col-span-1 flex justify-center w-full md:w-[30vw] bg-white/2 backdrop-blur-md p-6 md:p-8 shadow-lg">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-4 flex justify-center">
              <div className="h-30 w-30 lg:h-50 lg:w-50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                <img
                  src={logo}
                  className="w-full h-full object-contain  bg-[#F1F2ED]"
                  alt=""
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl text-center md:text-2xl font-bold text-white leading-tight mb-3">
              ABU MUSA ENGINEERING & <br />
              <span className="text-gradient bg-gradient-to-r from-slate-300 to-white bg-clip-text text-transparent">
                TRADING CO. SPC.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm text-white/80 leading-relaxed">
              Construction, Building Maintenance & Trading Company
            </p>
          </div>
        </section>
        <div className="col-span-2 flex justify-center gap-10 sm:gap-18">
          {/* Contact */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* <p className="text-xl italic font-light text-gray-100 leading-relaxed">
            "Thank you for taking the time to learn about us!"
          </p> */}

            <div className="space-y-4">
              <h3 className="text-lg font-bold tracking-wide">CONTACT US</h3>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+968 98042651</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@ametcoglobal.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>www.ametcoglobal.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  Bousher, Muscat <br />
                  P.O. - 10 P.C. - 411
                </div>
              </div>
            </div>
          </div>
          {/* Explore Section */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-6">
              <h3 className="text-lg font-bold tracking-wide">EXPLORE</h3>
              <ul className="space-y-3 text-gray-300 tracking-wide text-md">
                <li>
                  <Link to="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:support@sagiloom.com?subject=Support%20Request&body=Hi%20Team%2C%0A%0AI%20need%20help%20with..."
                    target="_blank"
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-screen-xl mx-auto py-8 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center text-gray-400 px-4">
        <p className="w-full text-center text-sm">
          Copyright © 2025 Ametco - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
