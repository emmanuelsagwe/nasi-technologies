import { useParams, Link } from "react-router-dom";

const SERVICE_DATA = {
  cctv: {
    title: "CCTV Installation",
    summary:
      "Comprehensive CCTV design, installation, and maintenance for residential, commercial, and industrial setups.",
    details:
      "We ensure crystal-clear surveillance with HD cameras, night vision, motion detection, and remote monitoring. Options include local NVR/DVR storage, cloud backup, analytics (people counting, perimeter detection), and mobile app access. Our team does site surveys, camera placement planning, and offers training and maintenance contracts.",
  },
  alarms: {
    title: "Alarm Systems",
    summary:
      "State-of-the-art alarm systems with real-time alerts and intelligent detection.",
    details:
      "NASI Technologies delivers integrated alarm solutions for intrusion, fire, and environmental monitoring. Features include wired/wireless sensors, panic buttons, GSM/VoIP reporting, and integration with CCTV and smart devices. We configure notification workflows, monitoring options, and periodic testing to ensure reliability.",
  },
  isp: {
    title: "ISP Solutions",
    summary:
      "Reliable, high-performance internet connectivity for homes and businesses.",
    details:
      "Our ISP services include fiber and wireless broadband with SLAs for uptime and support. We provide bandwidth planning, static IPs, managed routers, QoS for critical apps, and tailored packages for SMEs and enterprise clients. Onboarding includes site assessment, installation, and ongoing service-level support.",
  },
  network: {
    title: "Network Design & Deployment",
    summary:
      "End-to-end network architecture, structured cabling, and deployment services.",
    details:
      "We provide professional network design, including site surveys, capacity planning, VLAN and security planning, structured cabling, switch and router deployment, Wi-Fi site surveys and controller-based solutions. Post-deployment we offer monitoring, documentation, and floor-plan mapping so your network is performant and scalable.",
  },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const key = (id || "").toLowerCase();

  const service = SERVICE_DATA[key];

  if (!service) {
    return (
      <section className="py-20 px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-nasi-maroon">
          Service not found
        </h1>
        <p className="text-gray-700 mb-6">
          The service you requested does not exist. Return to the homepage to view available offerings.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-nasi-maroon text-white px-6 py-2 rounded-lg shadow-md hover:bg-maroon-800 hover:shadow-lg transition-all duration-300"
        >
          <span className="text-lg"></span>
          <span>Back to Home</span>
        </Link>
      </section>
    );
  }

  return (
    <section className="py-20 px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-nasi-maroon">{service.title}</h1>
      <p className="text-gray-700 mb-6">{service.summary}</p>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">What we offer</h2>
        <p className="text-gray-700 leading-relaxed">{service.details}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-nasi-maroon text-white px-6 py-2 rounded-lg shadow-md hover:bg-maroon-800 hover:shadow-lg transition-all duration-300"
        >
          <span className="text-lg"></span>
          <span>Back to Home</span>
        </Link>

        {/* Contact button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-nasi-maroon text-white px-6 py-2 rounded-lg shadow-md hover:bg-maroon-800 hover:shadow-lg transition-all duration-300"
        >
          <span>Contact Us about {service.title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
