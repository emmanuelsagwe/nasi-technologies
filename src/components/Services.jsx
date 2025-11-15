import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Wifi, Camera, Network, Code, Smartphone } from "lucide-react";
import { Link } from "react-router-dom"; // added Link

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      icon: <Camera size={70} />,
      title: "CCTV Installation",
      short: "High-definition surveillance systems for homes, offices, and enterprises.",
      link: "/services/cctv",
    },
    {
      icon: <Shield size={70} />,
      title: "Alarm Systems",
      short: "Smart and reliable alarm systems that protect your property 24/7.",
      link: "/services/alarms",
    },
    {
      icon: <Wifi size={70} />,
      title: "ISP Solutions",
      short: "Reliable internet connectivity for homes and businesses.",
      link: "/services/isp",
    },
    {
      icon: <Network size={70} />,
      title: "Network Design & Deployment",
      short: "Professional wired and wireless network setup.",
      link: "/services/network",
    },
    {
      icon: <Code size={70} />,
      title: "Web & System Development",
      short: "Custom websites and systems tailored for your business.",
      link: "/services/webdev",
    },
    {
      icon: <Smartphone size={70} />,
      title: "Tech Support",
      short: "Professional IT assistance for businesses and homes.",
      link: "/services/techsupport",
    },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-20 px-6 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12 text-nasi-maroon">
        Our Services
      </h2>

      <div className="relative">
        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center transition-all duration-500`}
          animate={{
            filter: activeIndex !== null ? "blur(6px)" : "blur(0px)",
            opacity: activeIndex !== null ? 0.7 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {services.map((service, index) => {
            const offsetX = (index % 3) * 50 - 50;
            const offsetY = index * -50 - 100;

            return (
              <motion.div
                key={index}
                initial={{ x: offsetX, y: offsetY, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  delay: index * 0.15,
                }}
                onMouseDown={() => handleCardClick(index)}
                onMouseUp={() => setActiveIndex(null)}
                onTouchStart={() => handleCardClick(index)}
                onTouchEnd={() => setActiveIndex(null)}
                className={`relative bg-nasi-maroon text-white rounded-3xl shadow-2xl p-8 text-center cursor-pointer transform transition-all duration-300 ${
                  activeIndex === index ? "scale-110 z-20" : "hover:scale-105"
                }`}
              >
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-100 text-base mb-5 leading-relaxed">
                  {service.short}
                </p>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Link
                    to={`/services/${service.link.split("/").pop()}`}
                    className="block bg-white text-nasi-maroon font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition text-lg"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
