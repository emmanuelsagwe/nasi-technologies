import { Link } from "react-router-dom";

export default function IspSolutions() {
  return (
    <section className="py-24 px-6 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-nasi-maroon mb-6">
          ISP Solutions
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          NASI Technologies provides reliable internet solutions for homes,
          businesses, and institutions. We deliver high-speed, low-latency
          connectivity with full technical support to keep you connected at all
          times.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-gray-200 text-nasi-maroon font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Back Home
          </Link>
          <Link
            to="/contact?service=ISP Solutions"
            className="bg-nasi-maroon text-white font-semibold px-6 py-3 rounded-lg hover:bg-nasi-dark transition"
          >
            Contact Us About This Service
          </Link>
        </div>
      </div>
    </section>
  );
}
