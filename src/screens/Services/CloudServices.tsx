import { useState } from "react";
import {
  Cloud,
  Layers,
  Map,
  ShieldCheck,
  Wallet,
  Activity,
  RefreshCcw,
   HardDrive,
  Database,
  Shuffle,
  Upload,
  CloudCog,
  ServerCog,
} from "lucide-react";
import userflow from "../../assets/flowdiagram.webp"
import ModernWorkSolution from "../../components/ui/ModernWorkSolution";
import { motion } from "framer-motion";


const services = [
  {
    title: "Cloud Readiness Assessment",
    description:
      "Understand the organization's business goals, existing IT infrastructure, and challenges.",
    icon: Layers, // layered stack = assessing infra
  },
  {
    title: "Cloud Service Selection",
    description:
      "Choose the best cloud services to meet performance, security, and scalability needs.",
    icon: Cloud, // obvious cloud icon
  },
  {
    title: "Cloud Strategy and Roadmap",
    description:
      "Design a clear, actionable migration and implementation strategy tailored to your business.",
    icon: Map, // roadmap metaphor
  },
  {
    title: "Security and Compliance",
    description:
      "Protect data and operations with enterprise-grade security and regulatory compliance.",
    icon: ShieldCheck, // secure shield
  },
  {
    title: "Cost Optimization",
    description:
      "Analyze and reduce cloud costs while maximizing performance and resource utilization.",
    icon: Wallet, // finance/cost saving
  },
  {
    title: "Monitoring and Support",
    description:
      "Ensure uptime and reliability with proactive monitoring and 24/7 support.",
    icon: Activity, // heartbeat-style activity icon
  },
  {
    title: "Continuous Improvement",
    description:
      "Regularly review, optimize, and modernize your cloud setup to stay ahead.",
    icon: RefreshCcw, // loop/iteration symbol
  },
];

const migrationServices = [
  {
    title: "Hybrid Cloud Solutions",
    description:
      "Integrate on-premises infrastructure with cloud services for a hybrid cloud model, providing flexibility and scalability.",
    icon: CloudCog, // cloud + settings (integration feel)
  },
  {
    title: "Cloud Storage Integration",
    description:
      "Connect on-premises storage systems with cloud storage services for seamless data access and backup.",
    icon: HardDrive, // storage symbol
  },
  {
    title: "Infra & Database Migration",
    description:
      "Facilitate the migration of applications and data to the cloud while ensuring compatibility and data security.",
    icon: Database, // database migration
  },
  {
    title: "Application Modernization",
    description:
      "Re-architect legacy apps for the cloud to improve scalability, performance, and user experience.",
    icon: Shuffle, // transformation/modernization
  },
  {
    title: "Data Migration Services",
    description:
      "Securely move structured and unstructured data from legacy systems into cloud environments.",
    icon: Upload, // upload/move data
  },
  {
    title: "Server & VM Migration",
    description:
      "Migrate virtual machines and on-premises servers to the cloud with minimal downtime.",
    icon: ServerCog, // server + settings
  },
];

 //@ts-expect-error: s
export function FlipCard({ service }) {
  const { title, description, icon: Icon } = service;
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full max-w-[16rem] h-[14rem] mx-auto cursor-pointer rounded-2xl overflow-hidden border border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((s) => !s);
        }
      }}
      aria-pressed={flipped}
    >
      <div
        className={`flip-card-inner relative w-full h-full ${
          flipped ? "is-flipped" : ""
        }`}
      >
        {/* Front */}
        <div className="flip-card-face flip-card-front absolute inset-0 flex flex-col items-center justify-center bg-white p-5">
          <Icon className="w-12 h-12 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 text-center leading-snug">
            {title}
          </h3>
        </div>

        {/* Back */}
        <div className="flip-card-face flip-card-back absolute inset-0 flex items-center justify-center bg-green-50 text-gray-800 p-5 text-sm font-medium">
          <p className="text-center leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function CloudServices() {
  return (
    <div className="py-16 bg-gray-50 mt-14">
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 text-center">
        Our Cloud Services
      </h1>
      <p className="mt-4 text-lg text-center text-gray-600 max-w-2xl mx-auto">
        Empowering your business with reliable and scalable technology solutions.
      </p>

      {/* Cards Grid */}
      <div>
         <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
        <h2 className="text-3xl font-bold text-center text-gray-900 mt-16">
        Cloud Consulting
      </h2>

      <div className="mt-10 px-6 md:px-12">
        <div className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:overflow-visible snap-x snap-mandatory">
          {services.map((s) => (
            <div key={s.title} className="flex-shrink-0 snap-center w-64 sm:w-auto">
              <FlipCard service={s} />
            </div>
          ))}
        </div>
      </div>

      </motion.div>
      </div>

      <style>{`
        /* Flip Card Animation */
        .flip-card { perspective: 1000px; }
        .flip-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.5s ease-in-out;
          will-change: transform;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-inner.is-flipped {
          transform: rotateY(180deg);
        }
        .flip-card-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          position: absolute;
          inset: 0;
          border-radius: inherit;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

    <div>

             <h2 className="text-3xl font-bold text-center text-gray-900 mt-16">
  Cloud Migration & Integration
</h2>
              <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className=" overflow-hidden flex flex-col"
    >
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-12">
  {migrationServices.map((s) => (
    <FlipCard key={s.title} service={s} />
  ))}
</div>
</motion.div>
    </div>

<div className="flex flex-col items-center justify-center text-center mt-16">
  <h2 className="text-3xl font-bold text-gray-900">
    Cloud Managed Services
  </h2>
  <p className="mt-4 text-lg text-gray-600 max-w-2xl">
    Managing Infrastructure and Application can be complex. Keeping in line with our mission of helping clients succeed through innovative solutions, Alethe, with its unique, insight-led, mindful thinking process, enables organizations to achieve operational efficiency.
  </p>
  <img src={userflow} alt="Workflow" className="mt-6 w-3/4 max-w-5xl"  />
</div>

  <div className="mt-12">
    <ModernWorkSolution/>
  </div>

    </div>
  );
}
