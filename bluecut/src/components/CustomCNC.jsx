import React from "react";

export default function CncLanding() {
  return (
    <section id="about" className="flex justify-center items-center min-h-[75vh] bg-gray-200">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-xl max-w-5xl w-full">
        <div className="flex-1 p-10 bg-[#f8f9f7]">
          <h5 className="uppercase text-xs text-gray-600 tracking-wider mb-2">How It Works</h5>
          <h1 className="text-3xl text-rose-700 font-bold mb-5">
            Custom CNC Machining<br />for Industrial Needs
          </h1>
          <p className="text-base text-gray-700 leading-relaxed mb-8">
            From prototyping to production, we deliver high-precision machining
            services tailored for your specifications.
          </p>
          <button className="bg-[#083c3a] hover:bg-[#06514c] text-white py-3 px-6 rounded-full text-sm transition-colors duration-300 cursor-pointer">
            Request a Quote
          </button>
        </div>
        <div className="flex-1 bg-[#003d3b] flex items-center justify-center">
          <img
            src="https://img.freepik.com/premium-vector/manufacture-concept-illustration-stylish-beautiful_1266046-2640.jpg?uid=R202406983&ga=GA1.1.184300153.1748601699&semt=ais_hybrid&w=740"
            alt="CNC Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
