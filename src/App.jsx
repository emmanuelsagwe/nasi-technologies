import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import ThankYou from "./components/ThankYou";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 scroll-smooth">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/thankYou" element={<ThankYou />} />
      </Routes>

      {/* WhatsApp button appears on all pages */}
      <WhatsAppButton />
    </div>
  );
}
