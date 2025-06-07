import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-10 font-sans">
      <div className="flex flex-wrap justify-between gap-10">
        {/* Left Side */}
        <div className="bg-white rounded-2xl p-8 flex-1 min-w-[300px] shadow-md">
          <h2 className="text-[#DC2626] text-xl font-bold">Mechatron</h2>
          <div className="flex flex-wrap gap-20 my-5">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="text-[#003b3b] hover:underline">About</a>
              <a href="#" className="text-[#003b3b] hover:underline">Services</a>
              <a href="#" className="text-[#003b3b] hover:underline">Therapists</a>
              <a href="#" className="text-[#003b3b] hover:underline">Resources</a>
              <a href="#" className="text-[#003b3b] hover:underline">Contact</a>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="text-[#003b3b] hover:underline">Instagram</a>
              <a href="#" className="text-[#003b3b] hover:underline">Facebook</a>
              <a href="#" className="text-[#003b3b] hover:underline">YouTube</a>
              <a href="#" className="text-[#003b3b] hover:underline">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="text-[#003b3b] hover:underline">Terms Of Use</a>
              <a href="#" className="text-[#003b3b] hover:underline">Privacy Policy</a>
            </div>
          </div>
          <p className="text-xs text-gray-400 ">© [2025] Mechatron. All Rights Reserved.</p>
        </div>

        {/* Right Side */}
        <div className="bg-[#003b3b] text-white rounded-2xl p-8 flex-1 min-w-[300px] flex gap-6 overflow-hidden">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-start gap-5 w-1/2">
            <h3 className="text-3xl font-bold leading-snug">
              Find <br />Support,<br />Guidance,<br />and Balance.
            </h3>
            <button className="bg-white text-[#003b3b] font-bold text-sm py-3 px-6 rounded-full hover:bg-gray-200 cursor-pointer">
              Find Support Now
            </button>
          </div>

          {/* Image */}
          <div className="w-1/2 h-full flex items-center justify-center ">
            <img
              src="https://img.freepik.com/free-vector/organic-flat-customer-support_23-2148881015.jpg?uid=R202406983&ga=GA1.1.184300153.1748601699&semt=ais_hybrid&w=740"
              alt="Support Graphic"
              className="w-full h-full object-cover rounded-xl "
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;