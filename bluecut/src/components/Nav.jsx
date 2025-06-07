import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const offset = 120; // adjust this based on your navbar height
    const target = document.getElementById(targetId);
    if (target) {
      const topPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
      setIsMenuOpen(false); // also close mobile menu
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0b112b] shadow-md p-4 md:p-6">
      <div className="flex items-center justify-between">
        {/* Left Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-white font-bold">
          <li>
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className="cursor-pointer hover:text-[crimson]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="cursor-pointer hover:text-[crimson]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="cursor-pointer hover:text-[crimson]"
            >
              Services
            </a>
          </li>
        </ul>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <video
            src="/Untitled design.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <div className="leading-tight">
            <div className="text-lg sm:text-xl font-bold text-white">MECHATRON</div>
            <div className="text-xs sm:text-sm font-semibold text-gray-500">INDUSTRIES</div>
          </div>
        </div>

        {/* Right Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-white font-bold">
          <li>
            <a
              href="#partners"
              onClick={(e) => handleSmoothScroll(e, 'partners')}
              className="cursor-pointer hover:text-[crimson]"
            >
              Partners
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, 'testimonials')}
              className="cursor-pointer hover:text-[crimson]"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="cursor-pointer hover:text-[crimson]"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 max-w-xs bg-[#0b112b] text-white z-40 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-gray-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-4 flex flex-col gap-6 font-semibold text-lg">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className="cursor-pointer hover:text-[crimson]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="cursor-pointer hover:text-[crimson]"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, 'services')}
            className="cursor-pointer hover:text-[crimson]"
          >
            Services
          </a>
          <a
            href="#partners"
            onClick={(e) => handleSmoothScroll(e, 'partners')}
            className="cursor-pointer hover:text-[crimson]"
          >
            Partners
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleSmoothScroll(e, 'testimonials')}
            className="cursor-pointer hover:text-[crimson]"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="cursor-pointer hover:text-[crimson]"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
