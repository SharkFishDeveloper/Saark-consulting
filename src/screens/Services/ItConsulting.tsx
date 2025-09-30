import { motion } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Server,
  HardDrive,
  Cloud,
  Users,
  Wifi,
  Lock,
  // Layers,
  // Wallet,
  // RefreshCcw
} from "lucide-react";

export default function ItConsulting() {

//   const services = [
//   {
//     title: "Cloud Readiness Assessment",
//     description:
//       "Understand the organization's business goals, existing IT infrastructure, and challenges.",
//     icon: Layers, // layered stack = assessing infra
//   },
//   {
//     title: "Cloud Service Selection",
//     description:
//       "Choose the best cloud services to meet performance, security, and scalability needs.",
//     icon: Cloud, // obvious cloud icon
//   },
//   {
//     title: "Cloud Strategy and Roadmap",
//     description:
//       "Design a clear, actionable migration and implementation strategy tailored to your business.",
//     icon: Map, // roadmap metaphor
//   },
//   {
//     title: "Security and Compliance",
//     description:
//       "Protect data and operations with enterprise-grade security and regulatory compliance.",
//     icon: ShieldCheck, // secure shield
//   },
//   {
//     title: "Cost Optimization",
//     description:
//       "Analyze and reduce cloud costs while maximizing performance and resource utilization.",
//     icon: Wallet, // finance/cost saving
//   },
//   {
//     title: "Monitoring and Support",
//     description:
//       "Ensure uptime and reliability with proactive monitoring and 24/7 support.",
//     icon: Activity, // heartbeat-style activity icon
//   },
//   {
//     title: "Continuous Improvement",
//     description:
//       "Regularly review, optimize, and modernize your cloud setup to stay ahead.",
//     icon: RefreshCcw, // loop/iteration symbol
//   },
// ];


  const sections = [
    {
      title: "Network & Security Consulting",
      icon: <ShieldCheck className="w-7 h-7 text-green-600" />,
      services: [
        {
          name: "Risk Assessment and Analysis",
          desc:
            "Identify potential vulnerabilities and analyze impact and likelihood of risks to prioritize mitigation.",
          icon: <Activity className="w-5 h-5 text-green-500" />
        },
        {
          name: "Security Architecture and Design",
          desc:
            "Design secure infrastructures aligned with business goals and compliance standards.",
          icon: <Lock className="w-5 h-5 text-green-500" />
        },
        {
          name: "Network Design and Optimization",
          desc:
            "Assist in performance, scalability and reliability of network architectures.",
          icon: <Wifi className="w-5 h-5 text-green-500" />
        },
        {
          name: "Security Audits and Compliance",
          desc:
            "Assess compliance gaps and recommend remediation for standards and regulations.",
          icon: <ShieldCheck className="w-5 h-5 text-green-500" />
        },
        {
          name: "Security Awareness Training",
          desc:
            "Educate staff on best practices, phishing, and social engineering tactics.",
          icon: <Users className="w-5 h-5 text-green-500" />
        },
        {
          name: "Penetration Testing",
          desc:
            "Perform tests to uncover vulnerabilities in network and applications.",
          icon: <Activity className="w-5 h-5 text-green-500" />
        },
        {
          name: "SIEM Implementation",
          desc:
            "Centralize and analyze logs for real-time security visibility.",
          icon: <Server className="w-5 h-5 text-green-500" />
        },
        {
          name: "Identity & Access Management (IAM)",
          desc:
            "Guide on IAM strategy, authentication, and provisioning solutions.",
          icon: <Users className="w-5 h-5 text-green-500" />
        },
        {
          name: "Network Access Control (NAC)",
          desc:
            "Deploy NAC to control and monitor access with integrated security.",
          icon: <Lock className="w-5 h-5 text-green-500" />
        },
        {
          name: "Cloud Security Consulting",
          desc:
            "Enable secure cloud adoption and compliance configuration.",
          icon: <Cloud className="w-5 h-5 text-green-500" />
        },
        {
          name: "Wireless Security Consulting",
          desc:
            "Evaluate and secure Wi-Fi to prevent unauthorized access.",
          icon: <Wifi className="w-5 h-5 text-green-500" />
        },
        {
          name: "Managed Security Services",
          desc:
            "Provide ongoing threat monitoring, detection, and response.",
          icon: <ShieldCheck className="w-5 h-5 text-green-500" />
        }
      ]
    },
    {
      title: "Platform & Storage Consulting",
      icon: <Server className="w-7 h-7 text-green-600" />,
      services: [
        {
          name: "Platform Architecture & Design",
          desc:
            "Recommend scalable, resilient platforms that align with business needs.",
          icon: <Server className="w-5 h-5 text-green-500" />
        },
        {
          name: "Server Virtualization",
          desc:
            "Implement virtualization to enhance flexibility and resource utilization.",
          icon: <HardDrive className="w-5 h-5 text-green-500" />
        },
        {
          name: "Cloud Platform Integration",
          desc:
            "Guide adoption of IaaS/PaaS, workload migration, and cost optimization.",
          icon: <Cloud className="w-5 h-5 text-green-500" />
        },
        {
          name: "Storage Architecture & Optimization",
          desc:
            "Design optimized NAS, SAN, or DAS solutions with resilience.",
          icon: <HardDrive className="w-5 h-5 text-green-500" />
        },
        {
          name: "High Availability & Disaster Recovery",
          desc:
            "Plan for continuous operation and fast recovery from outages.",
          icon: <Activity className="w-5 h-5 text-green-500" />
        },
        {
          name: "Data Backup & Restoration",
          desc:
            "Safeguard critical data with reliable backup strategies.",
          icon: <HardDrive className="w-5 h-5 text-green-500" />
        },
        {
          name: "Storage Virtualization",
          desc:
            "Centralize storage resources for better flexibility and management.",
          icon: <Server className="w-5 h-5 text-green-500" />
        },
        {
          name: "Performance Monitoring & Tuning",
          desc:
            "Implement tools and tuning to enhance responsiveness.",
          icon: <Activity className="w-5 h-5 text-green-500" />
        },
        {
          name: "Platform & Storage Security",
          desc:
            "Protect infrastructure with encryption, access controls, and patching.",
          icon: <Lock className="w-5 h-5 text-green-500" />
        },
        {
          name: "Capacity Planning",
          desc:
            "Analyze resource needs to ensure scalability.",
          icon: <Activity className="w-5 h-5 text-green-500" />
        },
        {
          name: "Vendor & Technology Evaluation",
          desc:
            "Select optimal hardware/software by evaluating vendors and trends.",
          icon: <Users className="w-5 h-5 text-green-500" />
        },
        {
          name: "Integration with Applications",
          desc:
            "Ensure seamless integration of platforms with workloads.",
          icon: <Server className="w-5 h-5 text-green-500" />
        },
        {
          name: "Documentation & Training",
          desc:
            "Create documentation and train IT staff for operations.",
          icon: <Users className="w-5 h-5 text-green-500" />
        },
        {
          name: "Ongoing Support & Maintenance",
          desc:
            "Provide proactive monitoring, updates, and issue resolution.",
          icon: <ShieldCheck className="w-5 h-5 text-green-500" />
        }
      ]
    }
  ];

  const cardAnim = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } }
  };

  return (
    <section className="min-h-screen bg-white py-12 px-6 text-gray-900 mt-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-4xl font-extrabold text-green-700">
            Consulting Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Expertise across network & security, and platform & storage consulting to help your business
            scale securely and efficiently.
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section, si) => (
            <div key={si}>
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h3 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.services.map((srv, i) => (
                  <motion.div
                    key={i}
                     //@ts-expect-error: s
                    variants={cardAnim}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {srv.icon}
                      <h4 className="text-md font-semibold text-green-700">
                        {srv.name}
                      </h4>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{srv.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}