import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Copy, ExternalLink, Linkedin } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    { type: "Phone", value: "+91 6299941463", icon: <Phone className="w-5 h-5" /> },
    { type: "Phone", value: "+91 8851709634", icon: <Phone className="w-5 h-5" /> },
    { type: "Phone", value: "+91 9953799793", icon: <Phone className="w-5 h-5" /> },
    { type: "Phone", value: "+91 9540058948", icon: <Phone className="w-5 h-5" /> },
    { type: "Email", value: "corporate@saarkconsulting.com", icon: <Mail className="w-5 h-5" /> },
  ];

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${text} copied to clipboard`);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f7fbf7] via-white to-[#f1f8f4] px-4 sm:px-6 md:px-12 py-12 mt-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-full max-w-3xl mx-auto flex flex-col items-center"
  >
    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-800 text-center">
      Get in Touch
    </h1>
    <p className="mt-4 text-base sm:text-lg text-gray-600 text-center">
      We're here to answer your queries, provide solutions, and collaborate on exciting projects. Reach out through phone or email anytime.
    </p>

    {/* Contact Cards */}
    <div className="mt-8 w-full flex flex-col gap-4">
      {contacts.map((c, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm hover:shadow-lg w-full"
        >
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex-shrink-0">
            {c.icon}
          </div>
          <div className="flex-1 text-left break-words">
            <div className="text-sm font-semibold text-emerald-800">{c.type}</div>
            <div className="mt-1 text-gray-700 font-medium">{c.value}</div>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0 flex-wrap">
            <button onClick={() => {
      if (navigator.clipboard && window.isSecureContext) {
        // Clipboard API works
        navigator.clipboard.writeText(c.value)
          .then(() => alert(`${c.value} copied to clipboard`))
          .catch(() => alert("Copy failed, try long press"));
      } else {
        // Fallback: select text
        const input = document.createElement("input");
        input.value = c.value;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
        alert(`${c.value} copied to clipboard`);
      }
    }}
            className="p-1 rounded-md">
              <Copy className="w-4 h-4 text-gray-400" />
            </button>
            {c.type === "Email" && (
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${c.value}`} className="p-1 rounded-md" target="_blank">
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            )}
           
          </div>
        </motion.div>
      ))}
    </div>

    {/* Social Media */}
    <motion.div className="mt-6 w-full flex justify-center">
      <a
        href="https://www.linkedin.com/company/saark-consulting-private-limited"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 w-full max-w-xs justify-center"
      >
        <Linkedin className="w-5 h-5 flex-shrink-0" />
        <span className="truncate">Connect on LinkedIn</span>
      </a>
    </motion.div>

    {/* Address & Timing */}
    <div className="mt-8 w-full flex flex-col sm:flex-row gap-4 sm:gap-6">
      <div className="flex items-start sm:items-center gap-2 text-gray-600 flex-1 break-words">
        <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
        <span>
          400-A, 4th Floor, 12 Ajit Singh House, <br />
          Yusuf Sarai Commercial Complex, New Delhi 110016, <br />
          Near Green Park Metro Station Exit-2
        </span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
        <span>Mon - Sat • 9:00 AM to 7:00 PM</span>
      </div>
    </div>
  </motion.div>
</section>

  );
}