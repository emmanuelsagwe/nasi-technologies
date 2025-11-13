import { Link } from "react-router-dom";

export default function WebSystemDev() {
  return (
    <section className="py-24 px-6 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-nasi-maroon mb-6">
          Web & System Development
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          We design and develop customized websites and management systems
          tailored to meet your business needs. From e-commerce to enterprise
          dashboards, NASI Technologies builds scalable, secure, and user-friendly
          digital solutions that drive results.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-gray-200 text-nasi-maroon font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Back Home
          </Link>
          <Link
            to="/contact?service=Web & System Development"
            className="bg-nasi-maroon text-white font-semibold px-6 py-3 rounded-lg hover:bg-nasi-dark transition"
          >
            Contact Us About This Service
          </Link>
        </div>
      </div>
    </section>
  );
}
