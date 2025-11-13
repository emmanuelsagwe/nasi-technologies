import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-nasi-maroon mb-6">
          Our Company
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
          NASI Technologies is dedicated to delivering top-notch security, connectivity & Tech solutions 
          for our clients. We specialize in CCTV installation, alarm systems, ISP solutions, 
          network design & deployment, tech support, web & system development. 
        </p>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Our mission is to provide reliable, cutting-edge technology solutions that keep our clients 
          secure, connected, and empowered. Trust, innovation, and customer satisfaction are at the core 
          of everything we do.
        </p>
      </div>
    </section>
  );
}
