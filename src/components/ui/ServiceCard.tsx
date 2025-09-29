import type { FC } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import consultingImg from "../../assets/consulting-min.png";
import itservicesImg from "../../assets/itservices-min.jpg";
import networkingImg from "../../assets/networking-min.png";
import cloudImg from "../../assets/cloud-min.jpg";
import systemImg from "../../assets/cyber-min.jpg";
import securityImg from "../../assets/databackup-min.jpg";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const services: ServiceCardProps[] = [
  {
    image: consultingImg,
    title: "Consulting Services",
    description:
      "We specialize in providing strategic guidance and innovative solutions to propel your business into the digital future.",
  },
  {
    image: itservicesImg,
    title: "Managed Services",
    description:
      "We don't just manage IT; we empower businesses to thrive in the digital age. Experience peace of mind with us.",
  },
  {
    image: networkingImg,
    title: "Software Services",
    description:
      "In an ever-evolving sector, our solutions are tailored to optimize operations, enhance safety, and maximize productivity.",
  },
  {
    image: cloudImg,
    title: "Cloud Services",
    description:
      "Leverage the power of cloud computing for scalable, secure, and flexible IT solutions tailored to your business needs.",
  },
  {
    image: systemImg,
    title: "System Integration",
    description:
      "Integrate your systems seamlessly to ensure smooth operations and unified workflow across your enterprise.",
  },
  {
    image: securityImg,
    title: "Cybersecurity Services",
    description:
      "Protect your digital assets with our cutting-edge cybersecurity solutions, ensuring safety and compliance.",
  },
];

const ServiceCard: FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col w-full mb-6" // Added mb-6
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 md:h-52 object-cover rounded-t-2xl"
      />

      {/* Small screen: only title */}
      <div className="p-4 flex flex-col items-center text-center md:hidden">
        <h4 className="text-sm sm:text-base font-semibold text-gray-900">{title}</h4>
      </div>

      {/* Medium+ screens: title + description + link */}
      <div className="hidden md:flex flex-col text-center p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-base text-gray-600 mb-4">{description}</p> {/* Removed flex-grow */}
        <a
          href="#"
          className="inline-flex items-center text-green-600 font-medium hover:underline"
        >
          View more <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};
const ServicesSection: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-10 flex flex-col items-center text-center w-full">
      <Slider {...settings} className="w-full max-w-6xl">
  {services.map((service, idx) => (
    <div key={idx} className="px-2 w-full">
      <ServiceCard {...service} />
    </div>
  ))}
</Slider>
    </div>
  );
};

export default ServicesSection;
