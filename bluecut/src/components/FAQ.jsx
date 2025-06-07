import React, { useState } from 'react';

const faqs = [
  {
    question: 'How do I submit a file for CNC machining or 3D printing?',
    answer:
      'You can upload your design files (e.g., STL, DXF, STEP) directly on our website or send them via email for review and quotation.',
  },
  {
    question: 'What materials can be used in laser cutting?',
    answer:
      'Our laser cutters support materials such as acrylic, plywood, MDF, cardboard, and some fabrics. Metal cutting is available on request.',
  },
  {
    question: 'What’s the difference between CNC machining and 3D printing?',
    answer:
      'CNC machining is a subtractive process that removes material from a block, while 3D printing is additive, building parts layer by layer.',
  },
  {
    question: 'Do you offer design support or prototyping?',
    answer:
      'Yes, we assist with file preparation, optimization for manufacturability, and offer rapid prototyping services for all technologies.',
  },
  {
    question: 'Can I combine laser cutting, CNC, and 3D printing in one project?',
    answer:
      'Absolutely! We specialize in hybrid fabrication projects and can help you integrate all technologies for your custom builds.',
  },
  {
    question: 'How long does production usually take?',
    answer:
      'Lead time depends on project complexity, but most jobs are completed within 2–5 business days. Express service is available.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-gray-200 font-sans p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
      {/* Left Column */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-rose-700 mb-4">
          Frequently<br />Asked Questions
        </h2>
        <p className="text-[#333] mb-8 text-lg max-w-md">
          Find answers to common questions about CNC machining, laser cutting, and 3D printing services.
        </p>
        <img
          src="https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148922528.jpg?uid=R202406983&ga=GA1.1.184300153.1748601699&semt=ais_hybrid&w=740"
          alt="People Asking Questions"
          className="rounded-xl w-full max-w-sm"
        />
      </div>

      {/* Right Column: FAQ Accordion */}
      <div className="md:w-1/2 space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-4">
            <button
              className="w-full text-left flex justify-between items-center font-medium text-[#083c3f] cursor-pointer text-lg"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span className="text-xl">{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-sm text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
