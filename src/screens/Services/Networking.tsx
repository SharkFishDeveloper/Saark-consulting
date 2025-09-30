import React from "react";
import { motion } from "framer-motion";
import { Zap, Wifi, Cloud, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

// IT Infrastructure Cards
// Single-file React component using Tailwind CSS + Framer Motion.
// Theme: green, black, white, gray. 4 animated cards in a responsive grid.

export default function ITInfrastructureCards() {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "IT Infrastructure Assessment",
      icon: <Zap className="w-6 h-6" />,
      desc:
        "Evaluate existing infrastructure to surface strengths, weaknesses, and opportunities for improvement.",
      bullets: [
        "Inventory & health checks",
        "Performance and capacity analysis",
        "Risk & compliance review",
        "Strategic recommendations"
      ]
    },
    {
      id: 2,
      title: "Network & Security Design",
      icon: <Wifi className="w-6 h-6" />,
      desc:
        "Design secure, scalable wired and wireless networks that balance performance with defense-in-depth.",
      bullets: [
        "Segmentation & VLAN strategy",
        "Firewall & IDS/IPS architecture",
        "Wireless planning (RF, capacity)",
        "Zero Trust foundation"
      ]
    },
    {
      id: 3,
      title: "Cloud Migration & Integration",
      icon: <Cloud className="w-6 h-6" />,
      desc:
        "Migrate workloads thoughtfully and integrate cloud services with on-prem systems for hybrid flexibility.",
      bullets: [
        "Migration strategy (lift-and-shift, refactor)",
        "Identity & networking integration",
        "Cost & governance planning",
        "Data sync and hybrid connectivity"
      ]
    },
    {
      id: 4,
      title: "Project Implementation & Deployment",
      icon: <Play className="w-6 h-6" />,
      desc:
        "Convert design into reality with disciplined project management, testing and phased rollouts.",
      bullets: [
        "PMO & agile delivery",
        "Testing, staging, cutover plans",
        "Change management & training",
        "Post-deployment support" 
      ]
    }
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 160, damping: 18 } }
  };

  return (
    <section className="min-h-screen bg-white py-12 px-6 text-gray-900 mt-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-green-700">
            IT Infrastructure Services
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Practical capabilities across assessment, secure network design, cloud migration and
            dependable project delivery.
          </p>
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {cards.map((c) => (
            <motion.article
              key={c.id}
              variants={cardAnim}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-lg"
              aria-labelledby={`card-${c.id}-title`}
              role="article"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-transparent via-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />

              <div className="relative z-10 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-600/20 to-green-800/10 ring-1 ring-green-400/10">
                  <div className="text-green-600">{c.icon}</div>
                </div>

                <div className="flex-1">
                  <h3 id={`card-${c.id}-title`} className="text-lg font-semibold text-gray-900">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{c.desc}</p>

                  <ul className="mt-4 grid gap-2 text-sm text-gray-700">
                    {c.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 text-green-600">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-3">
                    <button
                    onClick={() => navigate("/contact")}
                      className="inline-flex items-center gap-2 rounded-md border border-green-500/20 bg-transparent px-3 py-1.5 text-sm font-medium text-green-700 shadow-sm hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500/30"
                      aria-label={`Learn more about ${c.title}`}
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>

                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <footer className="mt-8 text-center text-sm text-gray-500">
        </footer>
      </div>
    </section>
  );
}