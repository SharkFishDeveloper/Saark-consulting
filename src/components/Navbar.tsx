import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import saark from "../assets/saark.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={saark}
              alt="Saark Consulting"
              className="h-12 w-12 rounded-md object-cover"
            />
            <span className="text-lg font-bold text-gray-900">
              Saark Consulting
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((l) => {
              const active =
                l.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-base font-medium transition-colors ${
                    active
                      ? "text-green-600 underline underline-offset-4 decoration-2"
                      : "text-gray-800 hover:text-black"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              to="/contact"
              className="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-6 py-4 space-y-3">
            {links.map((l) => {
              const active =
                l.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition ${
                    active
                      ? "text-green-600 bg-gray-100"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
