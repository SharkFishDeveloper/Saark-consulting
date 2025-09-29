import type { FC } from 'react';
import { CheckCircle, Zap, Star } from "lucide-react";
import { motion } from 'framer-motion';
import handshake from "../assets/handshake.jpg"

const AboutUs: FC = () => {
  return (
    <div className="bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            We are a team of passionate professionals dedicated to delivering innovative solutions.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative">
        <img
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            src={handshake}
            alt="Our Story"
        />
        </div>

  
        <div className="flex flex-col justify-center">
            <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-2xl overflow-hidden flex flex-col"
    >
            <h2 className="text-3xl font-semibold text-gray-900">Who We Are</h2>
            <p className="mt-4 text-lg text-gray-600">
            Saark Consulting is a trusted IT services provider delivering end-to-end technology solutions that help businesses operate smarter, faster, and safer. We specialize in cloud services, cybersecurity, system integration, and managed IT solutions tailored to your needs.
            </p>
            <p className="mt-4 text-lg text-gray-600">
            Our certified team works closely with clients to ensure seamless IT operations, robust security, and scalable solutions that reduce downtime and enhance productivity. We combine industry expertise with innovative technology to drive measurable business results.
            </p>
            <p className="mt-4 text-lg text-gray-600">
            Partnering with us means gaining a reliable IT advisor committed to supporting your long-term success and growth.
            </p>
            </motion.div>
        </div>
        </div>


        {/* Mission and Values Section */}
        <div className="mt-16">
    <h2 className="text-3xl font-semibold text-gray-900 text-center">Our Mission & Values</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center">
            <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
            <p className="mt-2 text-gray-600">
                We uphold the highest standards of integrity in all of our actions.
            </p>
            </div>
            <div className="text-center flex flex-col items-center">
            <Zap className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
            <p className="mt-2 text-gray-600">
                We pursue innovation that drives progress and adds value.
            </p>
            </div>
            <div className="text-center flex flex-col items-center">
            <Star className="w-16 h-16 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
            <p className="mt-2 text-gray-600">
                We strive for excellence in every project we undertake.
            </p>
            </div>
        </div>
        </div>  

    {/* Why Choose Saark Section */}
        <div className="mt-16 mb-3">
        <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-gray-50 rounded-2xl shadow-md overflow-hidden flex flex-col"
    >
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Why Choose Saark Consulting?</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="border-4 border-black-400 rounded-lg p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold text-gray-900">Proven Expertise</h3>
            <p className="mt-2 text-gray-600">
            Our team of certified IT professionals has a proven track record of delivering successful solutions across cloud, cybersecurity, and managed services.
            </p>
        </div>

        <div className="border-4 border-black-400 rounded-lg p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold text-gray-900">Customer-Centric Approach</h3>
            <p className="mt-2 text-gray-600">
            We focus on understanding your unique business needs and provide tailored IT solutions that align with your goals.
            </p>
        </div>

        <div className="border-4 border-black-400 rounded-lg p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold text-gray-900">Innovation & Reliability</h3>
            <p className="mt-2 text-gray-600">
            We continuously update our technology solutions and processes to incorporate the latest advancements while ensuring reliable performance.
            </p>
        </div>

        <div className="border-4 border-black-400 rounded-lg p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-bold mb-4">4</div>
            <h3 className="text-xl font-semibold text-gray-900">24/7 Support</h3>
            <p className="mt-2 text-gray-600">
            Our dedicated support team is available around the clock to resolve issues and ensure your IT infrastructure operates seamlessly.
            </p>
        </div>

        </div>
       </motion.div>
        </div>


      </div>
    </div>
  );
};

export default AboutUs;
