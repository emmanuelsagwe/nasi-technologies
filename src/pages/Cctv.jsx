import { useNavigate } from "react-router-dom";

export default function Cctv() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact?service=CCTV Installation");
  };

  const handleBack = () => {
    navigate("/#services");
  };

  return (
    <section className="py-20 px-6 bg-gray-50 min-h-screen text-center">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h2 className="text-4xl font-bold text-nasi-maroon mb-6">
          CCTV Installation
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          NASI Technologies provides professional CCTV installation services
          designed to safeguard your home, business, or organization. Our
          surveillance systems use high-definition cameras and modern
          monitoring solutions to ensure maximum security coverage day and
          night. Whether you need a simple setup for your home or a fully
          integrated enterprise surveillance network, our expert team will
          deliver a reliable, efficient, and scalable solution.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleBack}
            className="bg-white border-2 border-nasi-maroon text-nasi-maroon font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Back to Services
          </button>

          <button
            onClick={handleContact}
            className="bg-nasi-maroon text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-nasi-dark transition-all duration-300"
          >
            Contact Us About CCTV Installation
          </button>
        </div>
      </div>
    </section>
  );
}
