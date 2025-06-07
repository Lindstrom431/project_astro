export default function ContactCTA() {
  const resources = [
    {
      title: "Prototyping Guides",
      description:
        "Learn how to prepare your designs for CNC machining or 3D printing — from CAD models to material choices.",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Precision Tips",
      description:
        "Get expert advice on optimizing part accuracy, tolerance settings, and production efficiency.",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Live Demos & Sessions",
      description:
        "Attend webinars where our engineers walk you through real-world manufacturing processes and Q&A sessions.",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <section id="ContactCTA" className="bg-gray-200 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">
          Empower Your Product Journey
        </h2>
        <p className="text-lg text-gray-600">
          Access hands-on guidance, professional tips, and live support to bring your hardware ideas to life with Mechatron.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition duration-300"
          >
            <div>
              <h3 className="text-xl flex justify-center font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm mb-6">{item.description}</p>
            </div>
            <div className="flex justify-center mt-auto">
              <button
                className={`text-white px-5 py-2 cursor-pointer rounded-full font-medium text-sm transition duration-300 ${item.buttonColor}`}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
