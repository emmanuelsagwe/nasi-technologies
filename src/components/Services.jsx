import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Wifi, Camera, Network } from "lucide-react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const services = [
    {
      icon: <Camera size={40} />,
      title: "CCTV Installation",
      short:
        "High-definition surveillance systems for homes, offices, and enterprises.",
      details:
        "We provide advanced CCTV systems with remote monitoring, motion detection, night vision, and cloud storage options. Our expert technicians ensure a seamless setup for maximum security coverage.",
      link: "/services/cctv",
    },
    {
      icon: <Shield size={40} />,
      title: "Alarm Systems",
      short:
        "Smart and reliable alarm systems that protect your property 24/7.",
      details:
        "NASI Technologies designs and installs modern alarm systems with real-time alerts, fire and intrusion detection, and smart home integration. Stay protected, wherever you are.",
      link: "/services/alarms",
    },
    {
      icon: <Wifi size={40} />,
      title: "ISP Solutions",
      short: "Reliable internet connectivity for homes and businesses.",
      details:
        "We deliver scalable broadband and fiber internet solutions with guaranteed uptime and top-tier customer support. Perfect for homes, enterprises, and organizations that demand speed and reliability.",
      link: "/services/isp",
    },
    {
      icon: <Network size={40} />,
      title: "Network Design & Deployment",
      short: "Professional wired and wireless network setup.",
      details:
        "From planning to implementation, we offer structured cabling, router configuration, and enterprise Wi-Fi systems tailored to your needs — optimized for performance and scalability.",
      link: "/services/network",
    },
  ];

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // ✅ Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 text-nasi-maroon">
        Our Services
      </h2>

      <div
        ref={containerRef}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            onClick={() => toggleCard(index)}
            className={`cursor-pointer relative bg-nasi-maroon text-white rounded-2xl p-6 shadow-md border-t-4 transition-all duration-300 
              ${
                activeIndex === index
                  ? "border-white shadow-[0_0_25px_rgba(128,0,0,0.5)] scale-105"
                  : "border-transparent hover:shadow-lg hover:scale-105"
              }`}
            whileHover={{ scale: activeIndex === index ? 1.05 : 1.03 }}
          >
            <div className="flex justify-center mb-4 text-white transition-colors">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold text-center mb-2">
              {service.title}
            </h3>

            <p className="text-gray-100 text-center text-sm leading-relaxed">
              {service.short}
            </p>

            {/* Expanded details section */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 bg-white text-nasi-maroon rounded-xl p-4 text-sm leading-relaxed overflow-hidden"
                >
                  <p className="mb-4">{service.details}</p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card collapse
                      window.location.href = service.link; // navigate to service page
                    }}
                    className="block w-full text-center bg-nasi-maroon text-white font-medium py-2 rounded-lg hover:bg-nasi-dark transition"
                  >
                    Learn More
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
