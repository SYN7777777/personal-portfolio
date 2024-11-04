import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaServer } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const bubbleAnimation = {
  animate: {
    y: [0, -40, 0], // Increased vertical movement for an ultra-high bubbling effect
    transition: {
      duration: 1.2, // Adjusted duration for faster bubbling
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const headingAnimation = {
  animate: {
    y: [0, -10, 0], // Slight bouncing effect for the heading
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Technologies = () => {
  return (
    <div className="lg:px-24 border-b border-neutral-800 px-4 py-16">
      <motion.h1
        className="text-4xl text-yellow-100 text-center my-16 font-semibold"
        {...headingAnimation}
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-20">

        {/* React */}
        <motion.div
          className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300"
          {...bubbleAnimation}
        >
          <FaReact className="text-blue-500 text-6xl" />
          <span className="mt-2 text-xl text-blue-500">React</span>
        </motion.div>

        {/* Node.js */}
        <motion.div
          className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300"
          {...bubbleAnimation}
        >
          <FaNodeJs className="text-green-500 text-6xl" />
          <span className="mt-2 text-xl text-green-500">Node.js</span>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300"
          {...bubbleAnimation}
        >
          <FaDatabase className="text-green-600 text-6xl" />
          <span className="mt-2 text-xl text-green-600">MongoDB</span>
        </motion.div>

        {/* Express */}
        <motion.div
          className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300"
          {...bubbleAnimation}
        >
          <FaServer className="text-gray-700 text-6xl" />
          <span className="mt-2 text-xl text-gray-700">Express</span>
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div
          className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300"
          {...bubbleAnimation}
        >
          <SiTailwindcss className="text-cyan-400 text-6xl" />
          <span className="mt-2 text-xl text-cyan-400">Tailwind CSS</span>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          className="flex flex-col items-center transition-transform transform hover:scale-110 duration-300"
          {...bubbleAnimation}
        >
          <SiJavascript className="text-yellow-400 text-6xl" />
          <span className="mt-2 text-xl text-yellow-400">JavaScript</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
