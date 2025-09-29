import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, Monitor, Users, FileText } from "lucide-react";

export default function ModernWorkSolution() {
  const services = [
    {
      title: "Microsoft 365",
      icon: <FileText className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Azure Virtual Desktop",
      icon: <Monitor className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Azure Active Directory",
      icon: <Users className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Identity and Access Management",
      icon: <ShieldCheck className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Threat Protection",
      icon: <AlertTriangle className="w-12 h-12 text-green-600" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
    >
  <div className="py-12 px-6 bg-gray-50">
    <h2 className="text-3xl font-bold text-center text-green-900 mb-10">
      Modern Work Solution
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-xl hover:scale-105 transition transform p-8 flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
            {service.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {service.title}
          </h3>
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 shadow-sm hover:shadow-md transition">
            View more
          </button>
        </div>
      ))}
    </div>

    <p className="text-center text-gray-700 mt-12 max-w-2xl mx-auto">
      Implementation, Integration with third-party services, Migration and Advance Support
    </p>
  </div>
  </motion.div>
);
}