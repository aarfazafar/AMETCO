import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const AboutCard = ({ aboutRef, img, readMore }) => {
  return (
    <section
      ref={aboutRef}
      className="flex justify-center bg-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-8 mt-15">
              About <span className="">Us</span>
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
              {readMore && (
                <>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative pl-6"
                  >
                    Our team of experienced professionals specializes in
                    construction, renovation, and comprehensive building
                    maintenance services.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6"
                  >
                    Dynamic and technology-driven organization specializing in
                    end-to-end solutions. With a focus on delivering
                    cutting-edge technologies and reliable infrastructure, we
                    empower businesses to operate efficiently, securely and
                    competitively in today's digital landscape.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl shadow-inner border border-slate-200 hover:scale-[1.05] transition-all duration-500"
                  >
                    <p className="text-slate-800">
                      Our company combines technical expertise, strong vendor
                      partnerships and a client-first approach to offer tailored
                      services and genuine products across various industries.
                    </p>
                  </motion.div>
                </>
              )}
              {!readMore && (
                <Link
                  to="/about"
                  className="mt-2 inline-block text-lg text-blue-600 font-medium hover:underline hover:scale-[1.01] transition"
                >
                  Read More →
                </Link>
              )}
            </div>
          </div>

          <div className="relative">
            <div
              className={`w-full relative overflow-hidden shadow-2xl ${
                readMore ? "h-auto sm:h-[120vh]" : "h-auto"
              }`}
            >
              <img
                src={img}
                alt="Modern living room interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
