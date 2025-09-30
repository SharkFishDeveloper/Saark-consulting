import { motion } from "framer-motion";
import {
  HardDrive,
  Database,
  RefreshCcw,
  ShieldCheck,
  CloudDownload,
  FileClock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Databackup() {
  const navigate = useNavigate();
  const features = [
    {
      icon: <HardDrive className="w-8 h-8 text-green-600" />,
      title: "Reliable Backups",
      desc: "Automated and scheduled backups to ensure critical data is always protected."
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Multiple Storage Options",
      desc: "Support for on-premises, cloud, and hybrid storage solutions for flexibility."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "Secure Encryption",
      desc: "End-to-end encryption of backups to safeguard sensitive business data."
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-green-600" />,
      title: "Disaster Recovery",
      desc: "Comprehensive recovery plans to minimize downtime and ensure business continuity."
    },
    {
      icon: <CloudDownload className="w-8 h-8 text-green-600" />,
      title: "Cloud Integration",
      desc: "Seamless integration with AWS, Azure, and GCP for scalable cloud backup."
    },
    {
      icon: <FileClock className="w-8 h-8 text-green-600" />,
      title: "Historical Restore",
      desc: "Restore files and databases to any previous version with point-in-time recovery."
    }
  ];

  // Animation variants
  const containerAnim = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 140, damping: 18 }
    }
  };

  return (
    <section className="min-h-screen bg-white py-16 px-6 text-gray-900 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
            Data Backup & Recovery
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Ensure business continuity with reliable backup strategies, secure storage,
            and fast recovery solutions tailored to your organization.
          </p>
        </motion.header>

        {/* Features */}
        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
               //@ts-expect-error: s
              variants={cardAnim}
              whileHover={{
                y: -6,
                scale: 1.05,
                boxShadow:
                  "0px 8px 20px rgba(0, 128, 0, 0.2), 0px 4px 10px rgba(0,0,0,0.05)"
              }}
              className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-sm transition"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-green-700">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800">
            Ready to Safeguard Your Data?
          </h2>
          <p className="mt-2 text-gray-600">
            Contact us to build a backup & recovery strategy that ensures resilience
            and peace of mind.
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 rounded-xl bg-green-600 text-white font-medium shadow-md hover:bg-green-700 transition"
          >
             <p
              onClick={() => navigate("/contact")}
              className=""
            >
              Get Started
            </p>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
