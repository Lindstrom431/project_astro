function Hero() {
  return (
    <section id="home" className="text-center py-20 bg-gray-200 px-6 min-h-[75vh] bg-gray-300">
      <div className="relative max-w-6xl mx-auto h-screen rounded-xl flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://videos.pexels.com/video-files/4941355/4941355-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <h1 className="relative z-10 text-4xl font-bold mb-4 text-rose-500">
          Advanced CNC & Laser Solutions
        </h1>
        <p className="relative z-10 text-lg mb-6 text-white max-w-2xl">
          Empowering precision engineering with expert CNC machining, laser cutting, and 3D printing services.
        </p>
        <button className="relative z-10 bg-[#DC143C] hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-1000 cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
