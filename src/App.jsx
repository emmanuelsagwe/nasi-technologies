import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetail from "./pages/ServiceDetail";
import ThankYou from "./components/ThankYou"; // import the ThankYou page

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
              <About />
              <Services />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/thankYou" element={<ThankYou />} /> {/* added Thank You route */}
      </Routes>
    </div>
  );
}
