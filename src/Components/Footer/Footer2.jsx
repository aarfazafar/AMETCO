import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Globe,
} from "lucide-react";
import logo from '../../assets/Images/logo.png'
// import { useForm, ValidationError } from "@formspree/react";
// import { toast } from "react-hot-toast";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // const [state, handleSubmit] = useForm("mldbdwwe");
  const [state, handleSubmit] = useState(null);
  const formRef = useRef(null);

  const customSubmit = async (e) => {
    e.preventDefault();

    // await handleSubmit(e);
    // toast.success("Subscribed successfully!");
    // formRef.current.reset();
  };
  return (
    <footer className="bg-slate-800 text-white px-4 py-16 font-sans">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 lg:px-30">
        {/* Brand Section */}
        <div className="flex flex-col justify-start">
          <div className="flex items-center mb-8">
            {/* <div className="w-14">
              <img src={logo} alt="" className="w-full" />
            </div> */}
            <h1 className="text-3xl font-serif text-[#fbf7f6]">AMETCO</h1>
          </div>
          <p className="mb-6 leading-relaxed text-gray-300 tracking-wide text-md font-extralight">
            SAGILoom blends Indian tradition with modern style. We create
            premium, limited-edition ethnic wear that’s timeless, elegant, and
            made to stand out.
          </p>
          <div className="text-gray-400">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">MON - FRI</span>
              <span>10:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="text-gray-400 min-w-65">
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-semibold">SAT, SUN & PUBLIC HOLIDAYS</span>
              <span>CLOSED </span>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="mt-1">
          <div className="md:ml-12 ml-0">
            <h3 className="text-xl font-semibold playfair-display tracking-wide text-white mb-6">
              Explore
            </h3>
            <ul className="space-y-3 text-gray-300 tracking-wide text-md">
              <li>
                <Link to="/productpage" className="hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919942237797"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
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

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-semibold playfair-display tracking-wide text-white mb-6">
            Contact Info
          </h3>
          <div className="text-gray-300 space-y-6">
            <a href="tel:+968 98042651" className="flex gap-4 items-start">
              <Phone size={20} className="text-white/80 mt-1" />
              <p>+968 98042651</p>
            </a>
            <a
              className="flex gap-4 items-start"
              href="mailto:support@sagiloom.com?subject=Support%20Request&body=Hi%20Team%2C%0A%0AI%20need%20help%20with..."
              target="_blank"
            >
              <Mail size={20} className="text-white/80 mt-1" />
              <p>info@ametcoglobal.com</p>
            </a>
            <a href="www.ametcoglobal.com" className="flex gap-4 items-start">
              <Globe className="w-5 h-5 text-blue-400" />
              <span>www.ametcoglobal.com</span>
            </a>
            <div className="flex gap-4 items-start tracking-wide text-md">
              <MapPin size={20} className="text-white/80 mt-1" />
              <div>
                Bousher, Muscat <br />
                P.O. - 10 P.C. - 411
              </div>
            </div>
            {/* <div className="flex gap-4 mt-10">
              <Link
                to="https://www.instagram.com/__sagiloom_/"
                aria-label="Instagram"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={25} />
              </Link>
              <Link to="#" aria-label="Facebook" className="hover:text-white">
                <Facebook size={25} />
              </Link>
              <Link to="#" aria-label="Twitter" className="hover:text-white">
                <Twitter size={25} />
              </Link>
              <Link to="#" aria-label="Youtube" className="hover:text-white">
                <Youtube size={25} />
              </Link>
            </div> */}
          </div>
        </div>

        {/* Newsletter Section */}

        <div>
          <h3 className="text-xl font-semibold playfair-display tracking-wide text-white mb-6">
            Newsletter
          </h3>
          <p className="text-gray-400 mb-6 tracking-wide text-sm">
            Join our subscribers list to get the latest news and special offers.
          </p>

          <form
            ref={formRef}
            onSubmit={customSubmit}
            className="flex flex-col gap-4"
          >
            <div className="flex gap-2">
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-700 bg-transparent text-white rounded-md placeholder:text-gray-400 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                // disabled={state.submitting}
                className="px-5 py-3 bg-white text-[#1a1d21] font-semibold rounded-md hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </div>
{/* 
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              id="message"
              name="message"
              placeholder="Optional message"
              className="w-full px-4 py-3 border border-gray-700 bg-transparent text-white rounded-md placeholder:text-gray-400 focus:outline-none focus:border-white"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            /> */}

            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <input
                type="checkbox"
                id="privacy"
                required
                className="accent-white mt-1"
              />
              <label htmlFor="privacy">
                I agree to the{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="underline hover:text-white"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-screen-xl mx-auto mt-12 pt-8 border-t border-gray-600 flex flex-col sm:flex-row justify-between items-center text-gray-400 px-4">
        <p className="text-center text-sm sm:text-left mb-4 sm:mb-0">
          © Copyright 2025 AMETCO. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
