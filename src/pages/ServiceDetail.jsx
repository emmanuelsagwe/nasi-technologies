import { useParams, Link } from "react-router-dom";

export default function ServiceDetail() {
  const { id } = useParams();

  const serviceDetails = {
    cctv: {
      title: "CCTV Installation",
      description: `
        Our CCTV installation service provides high-definition video surveillance 
        designed to protect your home, business, or organization. 
        We specialize in both IP and analog camera systems with remote monitoring capability, 
        motion detection, and real-time alerts. 
        NASI Technologies ensures professional setup, optimal camera positioning, and 
        continuous support for maintenance and system upgrades.`,
    },
    alarms: {
      title: "Alarm Systems",
      description: `
        We deliver reliable, smart alarm systems that keep your property secure 24/7. 
        Our solutions include motion sensors, door and window alarms, 
        and mobile notification integrations to ensure instant alerts when needed. 
        Every installation is tailored to fit your space and security requirements.`,
    },
    isp: {
      title: "ISP Solutions",
      description: `
        As part of our ISP solutions, NASI Technologies offers fast, stable, and 
        scalable internet connectivity for homes, offices, and enterprises. 
        We design and deploy network infrastructures with guaranteed uptime, 
        performance monitoring, and professional technical support to ensure 
        seamless digital operations.`,
    },
    network: {
      title: "Network Design & Deployment",
      description: `
        Our team provides professional network design and deployment services for 
        wired and wireless environments. 
        We plan, implement, and optimize LAN/WAN infrastructures, 
        ensuring high performance, reliability, and security. 
        Whether for small businesses or large enterprises, our solutions scale with your growth.`,
    },
    webdev: {
      title: "Web & System Development",
      description: `
        NASI Technologies builds custom web and system solutions designed to improve 
        your organization’s efficiency and online presence. 
        From dynamic websites to complete enterprise systems, 
        we handle design, development, deployment, and support — ensuring your 
        digital platforms are fast, secure, and tailored to your business goals.`,
    },
    techsupport: {
      title: "Tech Support",
      description: `
        We provide professional, on-demand technical support for individuals 
        and organizations. 
        Our services include software troubleshooting, hardware diagnostics, 
        system optimization, and remote assistance. 
        NASI Technologies ensures that your systems stay functional, 
        secure, and optimized for peak performance.`,
    },
  };

  const service = serviceDetails[id];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-3xl font-bold text-nasi-maroon mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-6">
          The service you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/#services"
          className="bg-nasi-maroon text-white px-6 py-3 rounded-lg hover:bg-maroon-800 transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6 flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-nasi-maroon mb-6">
          {service.title}
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-10 whitespace-pre-line">
          {service.description}
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/#services"
            className="bg-nasi-maroon text-white font-semibold px-6 py-3 rounded-lg hover:bg-maroon-800 transition"
          >
            Back to Services
          </Link>

          {/* WhatsApp Contact Button */}
          <a
            href={`https://wa.me/254708950444?text=${encodeURIComponent(
              `Hello, I am interested in your ${service.title} service.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
