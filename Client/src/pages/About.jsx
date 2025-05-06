import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBriefcase, FaRocket, FaHandHoldingHeart, FaLightbulb } from 'react-icons/fa6';
import { FaTrophy, FaPercent } from 'react-icons/fa6';
import { FiZap } from "react-icons/fi";
import { FaGem ,FaHeart, FaLeaf, FaUser} from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { HiCog6Tooth } from "react-icons/hi2";

import { FaBook } from 'react-icons/fa'; // This is from the regular FA set.


const AboutUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl w-full space-y-10">
        {/* Main Heading */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-6 tracking-tight">
            About Our Vision
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
            We envision a future where sustainable transportation is not a niche concept,
            but the norm.  Our company is dedicated to driving this paradigm shift
            by developing and deploying cutting-edge retrofitting solutions that
            breathe new life into existing vehicle fleets. We aim to be at the forefront
            of the electric vehicle revolution, making it accessible to a broader
            audience and accelerating the transition to a cleaner, greener world.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-2xl border border-gray-700"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-6 mb-6">
            <FaRocket className="text-blue-400 w-10 h-10" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-blue-300">Our Mission</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
            Our mission is to provide comprehensive and transformative retrofitting
            solutions that empower vehicle owners to enhance their vehicles' performance,
            extend their lifespan, and reduce their environmental impact.  We are committed
            to rigorous research and development, strategic partnerships, and
            unwavering customer support to ensure seamless adoption of our technologies.
            We strive to be a catalyst for change, fostering a culture of innovation
            within the automotive industry and contributing to a more sustainable future.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          className="bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-2xl border border-gray-700"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-6 mb-6">
            <FaUsers className="text-green-400 w-10 h-10" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-green-300">Who We Are</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
            We are a multidisciplinary team of seasoned engineers, visionary designers,
            and forward-thinking automotive experts.  Our collective expertise spans
            decades, encompassing a deep understanding of vehicle systems, advanced
            materials science, and cutting-edge software development.  We are united
            by a shared passion for innovation and a relentless pursuit of excellence
            in the field of sustainable mobility.  Our team's strength lies in its
            collaborative spirit, its commitment to continuous learning, and its
            ability to translate complex technological concepts into practical,
            user-friendly solutions.
          </p>
        </motion.div>

        {/* What We Do */}
        <motion.div
          className="bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-2xl border border-gray-700"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-6 mb-6">
            <FaBriefcase className="text-purple-400 w-10 h-10" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-purple-300">What We Do</h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
            We provide a comprehensive ecosystem of solutions designed to facilitate
            the seamless transition to electric mobility.  Our core offerings include:
          </p>
          <ul className="list-inside list-disc ml-8 mt-6 space-y-3 text-lg sm:text-xl text-gray-200">
            <li className="flex items-start space-x-2">
              <HiCog6Tooth className="text-blue-400 mt-1" size={20} />
              <div><strong>Comprehensive Vehicle Assessment:</strong> We conduct detailed evaluations of vehicle
                systems and structural integrity to determine optimal retrofitting strategies.
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <HiCog6Tooth className="text-blue-400 mt-1" size={20} />
              <div><strong>Strategic Retrofitting Partnerships:</strong> We forge alliances with certified workshops
                and automotive specialists to ensure high-quality installations and ongoing
                support.
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <HiCog6Tooth className="text-blue-400 mt-1" size={20} />
              <div><strong>Advanced Retrofitting Kits:</strong>  We develop and provide state-of-the-art
                kits comprising high-performance batteries, efficient electric motors,
                intelligent control systems, and user-friendly interfaces.
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <HiCog6Tooth className="text-blue-400 mt-1" size={20} />
              <div><strong>End-to-End Project Management:</strong>  We offer guidance and support throughout the
                entire retrofitting journey, from initial consultation and design to
                final testing and certification.
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Our Values */}
        <motion.div
          className="bg-gray-800 bg-opacity-70 p-8 rounded-xl shadow-2xl border border-gray-700"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-6 mb-6">
            <FaHandHoldingHeart className="text-red-400 w-10 h-10" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-red-300">Our Core Values</h2>
          </div>
          <ul className="list-inside list-disc ml-8 mt-6 space-y-3 text-lg sm:text-xl text-gray-200">
            <li className="flex items-start space-x-2">
              <FaLightbulb className="text-yellow-400 mt-1" size={20} />
              <div>
                <strong>Pioneering Innovation:</strong> We are driven by a spirit of exploration,
                constantly seeking and developing groundbreaking technologies that redefine
                the boundaries of electric vehicle retrofitting.
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <FaTrophy className="text-yellow-400 mt-1" size={20} />
              <div>
                <strong>Uncompromising Quality:</strong> We adhere to the most stringent quality
                standards in the design, manufacturing, and deployment of our solutions,
                ensuring optimal performance, reliability, and safety.
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <FaLeaf className="text-yellow-400 mt-1" size={20} />
              <div>
                <strong>Deep-Rooted Sustainability:</strong>  We are deeply committed to environmental
                stewardship, actively promoting solutions that minimize carbon emissions,
                conserve resources, and contribute to a healthier planet.
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <FaUsers className="text-yellow-400 mt-1" size={20} />
              <div><strong>Customer-Centric Approach:</strong> We place our customers at the heart of
                everything we do, striving to exceed their expectations through personalized
                service, proactive communication, and continuous support.
              </div>
            </li>
            <li className="flex items-start space-x-2">
              <FaHandHoldingHeart className="text-yellow-400 mt-1" size={20} />
              <div><strong>Ethical Foundation:</strong>  We conduct our business with the utmost
                integrity, transparency, and ethical responsibility, building trust
                with our stakeholders and fostering a culture of accountability.
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;