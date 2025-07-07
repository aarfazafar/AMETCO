import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-8 py-20 
                bg-transparent backdrop-blur-md 
                 border border-white/30 rounded-2xl shadow-xl"

    >
      
      <Sparkles className="h-16 w-16 text-slate-200 mb-4 animate-bounce-slow" />

      <h1 className="text-4xl md:text-5xl font-bold text-white grotesk mb-3">
        Coming Soon!
      </h1>

      <p className="text-md md:text-lg text-slate-300 grotesk leading-relaxed">
        This section is under design refinement.{" "}
        <br className="hidden sm:block" />
        Stay tuned — beautiful things are on the way ✨
      </p>
    </motion.div>
  );
};

export default ComingSoon;
