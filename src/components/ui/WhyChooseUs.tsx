import { motion } from "framer-motion";
import { ShieldCheck, Clock, TrendingUp, Award } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified & Experienced IT Professionals",
    description:
      "Our team of experts holds top industry certifications to deliver reliable, cutting-edge solutions.",
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description:
      "Round-the-clock assistance ensures your business runs smoothly without disruptions.",
  },
  {
    icon: TrendingUp,
    title: "Scalable & Cost-Effective Solutions",
    description:
      "We design IT strategies that grow with your business while keeping costs under control.",
  },
  {
    icon: Award,
    title: "Proven Track Record Across Industries",
    description:
      "Trusted by businesses across healthcare, finance, retail, and more with measurable results.",
  },
];

const WhyChooseUs = () => {
  return (
     <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
    >
    <section className="py-16 bg-gray-50" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 animate-rise">
          Why Choose <span className="text-green-600">Saark Consulting?</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto animate-rise delay-[200ms]">
          We go beyond IT services — we build lasting partnerships by providing
          secure, scalable, and future-ready solutions.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition animate-rise"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <reason.icon className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default WhyChooseUs;
