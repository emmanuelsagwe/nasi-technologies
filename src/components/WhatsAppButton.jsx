import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show button 1 second after page load
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "+254708950444"; // Your WhatsApp number
  const message = "Hello! I would like to chat with NASI Technologies."; // Default message
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    visible && (
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center animate-bounce"
        style={{ zIndex: 1000 }}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    )
  );
}
