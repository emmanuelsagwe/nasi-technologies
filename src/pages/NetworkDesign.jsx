import { Link } from "react-router-dom";

export default function NetworkDesign() {
  return (
    <section className="py-24 px-6 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-nasi-maroon mb-6">
          Network Design & Deployment
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          We specialize in designing and deploying secure, scalable network
          infrastructures for organizations of all sizes. Our solutions include
          structured cabling, routers, access points, and optimized connectivity
          for reliable business communication.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-gray-200 text-nasi-maroon font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Back Home
          </Link>
          <Link
            to="/contact?service=Network Design & Deployment"
            className="bg-nasi-maroon text-white font-semibold px-6 py-3 rounded-lg hover:bg-nasi-dark transition"
          >
            Contact Us About This Service
          </Link>
        </div>
      </div>
    </section>
  );
}
