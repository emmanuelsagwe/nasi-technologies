import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could handle sending the message via EmailJS or backend
    // For now, just redirect to Thank You page
    navigate("/thankYou");
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-nasi-maroon mb-4">Contact Us</h2>

      {/* Contact info */}
      <div className="max-w-2xl mx-auto mb-8 text-gray-700 space-y-2">
        <p>
          📞{" "}
          <a href="tel:+254708950444" className="hover:underline text-nasi-maroon">
            +254 708 950 444
          </a>
        </p>
        <p>
          ✉️{" "}
          <a href="mailto:sagwepope@gmail.com" className="hover:underline text-nasi-maroon">
            sagwepope@gmail.com
          </a>
        </p>
      </div>

      <p className="max-w-2xl mx-auto mb-8 text-gray-700">
        Let’s work together to secure and connect your world.  
        Reach out today for a custom consultation or quote.
      </p>

      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-nasi-maroon"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-nasi-maroon"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-nasi-maroon"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-nasi-maroon text-white px-8 py-3 rounded-md shadow-md hover:bg-nasi-dark transition-all"
        >
          Send Message
        </button>

        {/* Clickable statement using React Router Link */}
        <p className="text-nasi-maroon font-medium mt-2">
          <Link to="/thankYou" className="hover:underline">
            With Love & Care from NASI Technologies
          </Link>
        </p>
      </form>
    </section>
  );
}
