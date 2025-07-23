import React from "react";
import { motion } from "framer-motion";
import { Building2, Home, Droplets, Factory, Hammer } from "lucide-react";
import { useAppData } from "../../context/AppDataContext";
// const project = [
//   {
//     title: "Government & Private Buildings",
//     icon: <Building2 className="w-10 h-10 text-slate-700" />,
//     description:
//       "Design and construction of residential, commercial, and institutional buildings for both government and private clients, ensuring compliance with local standards and sustainable practices.",
//   },
//   {
//     title: "Villa Renovations",
//     icon: <Home className="w-10 h-10 text-slate-700" />,
//     description:
//       "Comprehensive renovation and remodeling of villas, including structural modifications, interior upgrades, and exterior enhancements tailored to client preferences.",
//   },
//   {
//     title: "Effluent Treatment Plants (ETP)",
//     icon: <Droplets className="w-10 h-10 text-slate-700" />,
//     description:
//       "Design, supply, installation, and commissioning of Effluent Treatment Plants for industrial and commercial facilities, ensuring environmental compliance and wastewater management.",
//   },
//   {
//     title: "Sewage Treatment Plants (STP)",
//     icon: <Factory className="w-10 h-10 text-slate-700" />,
//     description:
//       "Complete STP solutions including design, fabrication, and maintenance services for residential communities, industries, and municipal requirements.",
//   },
//   {
//     title: "Fabrication Projects",
//     icon: <Hammer className="w-10 h-10 text-slate-700" />,
//     description:
//       "MS/GRP Water Tanks\nSteel Sheds and Structures\nParking Sheds\nIndustrial Sheds\nCustom fabrication using quality materials, designed for durability",
//   },
// ];
const ProjectCard = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl border border-slate-200"
  >
    {/* <div className="mb-4">{icon}</div> */}
    <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 whitespace-pre-line leading-relaxed">{description}</p>
  </motion.div>
);

const Projects = () => {
  const { projects } = useAppData();
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 my-6">
          Our{" "}
          <span className="text-gradient bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          We specialize in delivering high-quality engineering and construction
          projects across various sectors. Some of our key project areas
          include:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
