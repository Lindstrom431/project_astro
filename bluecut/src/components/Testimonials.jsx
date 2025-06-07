import { useState, useEffect } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [visibleStart, setVisibleStart] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    { text: "Mechatron provided CNC parts with outstanding precision. Truly impressive!", name: "Mwangi Kamau" },
    { text: "Their 3D printing service helped us iterate designs quickly. Highly recommend.", name: "Achieng Otieno" },
    { text: "Exceptional attention to detail. Mechatron has become our go-to for precision manufacturing.", name: "Mutiso Njoroge" },
    { text: "Fast turnaround, great customer service, and top-tier quality.", name: "Wanjiku Ndungu" },
    { text: "Excellent collaboration throughout the prototyping process.", name: "Omondi Okello" },
    { text: "We saved time and money thanks to their machining efficiency.", name: "Nyambura Kibet" },
    { text: "The team was incredibly supportive and delivered beyond expectations.", name: "Baraka Kiptoo" },
    { text: "Unmatched quality and fast delivery every time.", name: "Zawadi Muthoni" }
  ];

  const colors = [
    "bg-red-100", "bg-yellow-100", "bg-green-100", "bg-blue-100",
    "bg-purple-100", "bg-pink-100", "bg-indigo-100", "bg-teal-100"
  ];

  const handleScroll = (dir) => {
    const max = isMobile ? testimonials.length - 1 : testimonials.length - 2;
    if (dir === "left" && visibleStart > 0) {
      setDirection(-1);
      setVisibleStart(visibleStart - 1);
    } else if (dir === "right" && visibleStart < max) {
      setDirection(1);
      setVisibleStart(visibleStart + 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.5 }
    })
  };

  // Handle responsiveness
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsToShow = isMobile ? 1 : 2;

  return (
    <section id="testimonials" className="py-16 bg-gray-200 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left Panel */}
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-3xl font-bold text-blue-900 ">What Our Clients Are Saying</h2>
          <p className="text-gray-600">
            Our partners share how Mechatron has helped transform their manufacturing process through precision and reliability.
          </p>
          <div className="flex gap-4 mt-4">
            <button onClick={() => handleScroll("left")} className="text-gray-700 hover:text-rose-700 cursor-pointer ">
              <ArrowLeftCircle size={36} />
            </button>
            <button onClick={() => handleScroll("right")} className="text-gray-700 hover:text-rose-700 cursor-pointer">
              <ArrowRightCircle size={36} />
            </button>
          </div>
        </div>

        {/* Right Panel with Animated Testimonials */}
        <div className="relative w-full md:w-2/3 min-h-[340px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={`${visibleStart}-${cardsToShow}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`flex ${isMobile ? "justify-center" : "space-x-6"} absolute w-full px-4`}
            >
              {testimonials.slice(visibleStart, visibleStart + cardsToShow).map((t, idx) => (
                <div
                  key={idx}
                  className={`${colors[(visibleStart + idx) % colors.length]} p-6 rounded-3xl shadow w-[300px] min-h-[220px]`}
                >
                  <p className="text-gray-700 mb-2">“{t.text}”</p>
                  <p className="font-bold">— {t.name}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
