import { useRef } from "react";
import { Mail, Send } from "lucide-react";

const ContactUs = () => {
  const formRef = useRef();

  const customSubmit = (e) => {
    e.preventDefault();
    // handle your form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="bg-slate-600 mt-15 py-16 px-4 md:px-8 text-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-amber-300/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-slate-200/20 to-gray-300/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-xl"></div>
      </div>
      <div className="max-w-4xl mx-auto rounded-3xl p-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
        <div className="text-center mb-10">
          <Mail className="w-12 h-12 mx-auto text-slate-300 mb-4 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-semibold playfair-display text-white">
            Get in Touch
          </h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto text-sm md:text-base">
            We'd love to hear from you. Fill out the form below and we’ll get
            back to you shortly.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={customSubmit}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />

          <div className="flex items-start gap-2 text-sm text-slate-300">
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

          <button
            type="submit"
            className="flex items-center gap-2 justify-center w-fit mx-auto bg-white text-slate-800 font-semibold px-6 py-3 rounded-md hover:bg-slate-100 transition shadow-md"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
