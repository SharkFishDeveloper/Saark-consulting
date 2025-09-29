import { motion } from "framer-motion";
import { Server, Network, KeyRound, ShieldCheck, Users, FileSearch } from "lucide-react";

export default function CybersecurityDetails() {
  const services = [
    {
      title: "System Integration & Server Management",
      icon: Server,
      points: [
        "Installation, configuration, and upgrades",
        "OS patching & updates",
        "Performance monitoring & optimization",
        "Virtualization (VMware, Hyper-V, etc.)",
        "Troubleshooting & resolution",
      ],
    },
    {
      title: "Network Management",
      icon: Network,
      points: [
        "LAN/WAN setup & administration",
        "Router, firewall & switch configuration",
        "Wireless optimization",
        "Bandwidth monitoring & control",
        "VPN & remote access solutions",
      ],
    },
    {
      title: "Identity & Access Management (IAM)",
      icon: KeyRound,
      points: [
        "Identity & access management",
        "Single Sign-On (SSO)",
        "Multi-Factor Authentication (MFA)",
        "Onboarding & offboarding automation",
      ],
    },
    {
      title: "AD Security & Audit",
      icon: FileSearch,
      points: [
        "User account & role reviews",
        "Password policy enforcement",
        "Group Policy Objects (GPO) auditing",
        "System updates & compliance checks",
      ],
    },
    {
      title: "Monitoring & Threat Detection",
      icon: ShieldCheck,
      points: [
        "Login attempt tracking",
        "User activity monitoring",
        "File access & AD change logs",
        "Proactive threat detection",
      ],
    },
    {
      title: "Audit Tools & Techniques",
      icon: Users,
      points: [
        "Automated PowerShell / AD auditing",
        "Specialized audit tools",
        "Manual log & system reviews",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white mt-20">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-700">
          Cybersecurity & IT Security Services
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT security services covering infrastructure, access control,
          auditing, and compliance to safeguard your business.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                {service.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </section>
  );
}
