import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us","Services","Contact","Case studies"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-green-500 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            {[
              "Cloud Services",
              "System Integration",
              "Consulting Services",
              "Managed Services",
              "Software Services",
            ].map((service, index) => (
              <li key={index}>
                <a href="#" className="hover:text-green-500 transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green-500 mt-1" />
              <p>
                400-A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai Commercial Complex,
                <br />
                New Delhi 110016, 
                <br/>
                Near Green Park Metro Station Exit-2
              </p>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500" />
              <a href="tel:+911244611750" className="hover:text-green-500 transition">
                +91-9540058948
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-green-500" />
              <a href="mailto:sales@aletheconsulting.com" className="hover:text-green-500 transition">
                corporate@saarkconsulting.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Saark Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
