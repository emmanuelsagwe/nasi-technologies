import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-nasi-maroon text-white text-center py-24 px-6 rounded-b-3xl shadow-lg"
    >
      <div className="max-w-4xl mx-auto">
        {/* Headline / Tagline */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 italic tracking-tight">
          Peace of mind through technology
        </h1>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="NASI Technologies Logo"
            className="h-64 w-64 rounded-2xl shadow-md"
          />
        </div>

        {/* Buttons (commented out) */}
        {/*
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="bg-white text-nasi-maroon font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-nasi-maroon transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
        */}
      </div>
    </section>
  );
}
