export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-nasi-maroon text-white text-center py-24 px-6 rounded-b-3xl shadow-lg"
    >
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Secure. Connect. Empower.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
          NASI Technologies delivers trusted <span className="font-semibold">CCTV</span>,{" "}
          <span className="font-semibold">Alarm Systems</span>,{" "}
          <span className="font-semibold">ISP Solutions</span>, and{" "}
          <span className="font-semibold">Network Design & Deployment</span> — ensuring
          security, speed, and connectivity for homes and businesses.
        </p>

        {/* Buttons */}
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
      </div>
    </section>
  );
}
