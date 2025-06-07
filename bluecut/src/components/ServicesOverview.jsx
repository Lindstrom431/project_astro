// Services.jsx
import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-200 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12 ">
        <h2 className="text-3xl font-bold text-rose-700 mb-3">Our Core Services</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          We specialize in precision and efficiency across modern digital fabrication processes.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch p-4">
  {/* Service 1: 3D Printing */}
  <div
    className="flex-1 max-w-md bg-cover bg-center rounded-3xl shadow-xl p-8 min-h-[350px] flex flex-col justify-start text-left text-white"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-vector/duotone-lines-background-crossing-diagonally-with-text-space_1017-27054.jpg?uid=R202406983&ga=GA1.1.2104345002.1749133096&semt=ais_hybrid&w=740')"
    }}
  >
    <h3 className="text-2xl font-bold mb-4">3D Printing</h3>
    <p className="text-base">
      We offer high-quality 3D printing for rapid prototyping and low-volume production, using durable materials 
      to transform your digital designs into accurate physical models.
    </p>
  </div>

  {/* Service 2: CNC Milling & Turning */}
  <div
    className="flex-1 max-w-md bg-cover bg-center rounded-3xl shadow-xl p-8 min-h-[350px] flex flex-col justify-start text-left text-white"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-vector/modern-abstract-virtual-techology-with-colorful-round-shape-left-side-flat_1284-49200.jpg?uid=R202406983&ga=GA1.1.2104345002.1749133096&semt=ais_hybrid&w=740')"
    }}
  >
    <h3 className="text-2xl font-bold mb-4 text-black">CNC Milling & Turning</h3>
    <p className="text-base text-gray-900">
      Our CNC machining services deliver precision-cut parts with tight tolerances, ideal for both prototypes 
      and fully functional components in metal or plastic.
    </p>
  </div>
</div>

    </section>
  );
};

export default Services;
