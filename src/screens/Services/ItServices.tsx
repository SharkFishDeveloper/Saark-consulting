import { ShieldCheck, Cloud, Network, Server, Laptop, Database, Users, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ItServicesHome() {
  const navigate = useNavigate();
  const services = [
    {
      title: "Managed IT Services",
      desc: "24/7 monitoring, maintenance, and support.",
      icon: Laptop,
    },
    {
      title: "Cloud Solutions",
      desc: "Migration, hosting, and optimization.",
      icon: Cloud,
    },
    {
      title: "Cybersecurity",
      desc: "Protection against threats with proactive defense.",
      icon: ShieldCheck,
    },
    {
      title: "Networking & Infrastructure",
      desc: "Reliable setup, upgrades, and management.",
      icon: Network,
    },
    {
      title: "IT Consulting",
      desc: "Strategic guidance to align IT with your business goals.",
      icon: Users,
    },
    {
      title: "Data Backup & Recovery",
      desc: "Ensure business continuity with secure solutions.",
      icon: Database,
    },
    {
      title: "Server Management",
      desc: "Installation, configuration, and performance optimization.",
      icon: Server,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white text-gray-900 mt-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
          Empowering Your Business with Reliable IT Solutions
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          From cloud services to cybersecurity, we deliver end-to-end technology
          solutions that keep your business running smarter, faster, and safer.
        </p>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          We are a trusted IT services provider helping businesses of all sizes
          transform through technology. Our certified professionals ensure
          seamless operations, robust security, and scalable solutions tailored
          to your needs.
        </p>
      </div>

      {/* Services Scroll/Grid */}
      <div className="mt-12 px-4 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Services
        </h2>
        <div className="mt-8 flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-visible snap-x snap-mandatory">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex-shrink-0 snap-center w-72 sm:w-auto bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition p-6 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-100 text-green-700 mb-4">
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20 px-6 max-w-5xl mx-auto text-center">
  <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us?</h2>
  <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
    Partner with Saark Consulting and unlock the full potential of your IT.
  </p>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      "Certified & Experienced IT Professionals",
      "24/7 Customer Support",
      "Scalable & Cost-Effective Solutions",
      "Proven Track Record Across Industries",
    ].map((point, idx) => (
      <div
        key={idx}
        className="flex items-center gap-3 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
      >
        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
        <span className="text-gray-800 font-medium text-left">{point}</span>
      </div>
    ))}
  </div>
</div>

      {/* Testimonials */}
      <div className="mt-16 bg-gray-100 rounded-2xl shadow-inner p-10 max-w-3xl mx-auto text-center">
        <p className="text-xl italic text-gray-800">
          “Their support team is amazing—our IT downtime has dropped by 90%.”
        </p>
        <span className="mt-4 block font-semibold text-green-700">
          – Client Testimonial
        </span>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Let’s Build Your IT Future Together
        </h2>
        <p className="mt-3 text-lg text-gray-700">
          Talk to our experts today and discover how we can simplify your
          technology journey.
        </p>
         <button
      className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition"
      onClick={() => navigate("/contact")}
    >
      Contact Us
    </button>
      </div>
    </section>
  );
}
