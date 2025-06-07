
const CNCConsulting = () => {
  return (
    <section className="py-20 bg-gray-200 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-white rounded-3xl p-4 md:p-10 shadow-md">
        
        {/* Left Text Content */}
        <div className="flex-1 md:pr-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4 text-rose-700">Manufacturing Consulting</h2>
            <p className="text-gray-700 mb-4">
              Personalized engineering guidance to help optimize your production processes, reduce waste, and maximize machining efficiency.
            </p>
            <p className="text-gray-700 mb-6">
              Our experts support you in designing sustainable workflows, selecting the right materials, and achieving reliable, repeatable precision.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition duration-300 cursor-pointer">
              Schedule a Free Consultation
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full mt-8 md:mt-0">
          <img
            src="https://img.freepik.com/free-vector/workplace-culture-abstract-concept-vector-illustration-shared-values-belief-systems-attitude-work-company-team-corporate-culture-high-performance-employee-health-abstract-metaphor_335657-4191.jpg?uid=R202406983&ga=GA1.1.184300153.1748601699&semt=ais_hybrid&w=740"
            alt="CNC Consulting"
            className="w-full h-auto max-h-96 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CNCConsulting;
