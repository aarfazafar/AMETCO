import React from "react";
import ComingSoon from "../ComingSoon/ComingSoon";

export const Careers = () => {
  return (
    <div className="bg-slate-600 w-full min-h-screen flex justify-center items-center">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-amber-300/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-slate-200/20 to-gray-300/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-xl"></div>
      </div>

      <ComingSoon />
    </div>
  );
};
