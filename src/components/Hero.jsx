import React from 'react';
import { motion } from 'framer-motion';
import sutha from '../assets/sutha.jpg';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-24 py-10 w-full">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 space-y-5 mt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl uppercase font-thin tracking-tight text-slate-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Suthakar
        </motion.h1>

        <motion.p
          className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          MERN STACK DEVELOPER
        </motion.p>

        <motion.p
          className="text-slate-300 py-4 sm:py-6 max-w-2xl text-base sm:text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Hello, I’m Suthakar, a skilled MERN Stack Developer with expertise in building dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js. I’m passionate about crafting responsive, user-focused experiences from front to back, ensuring seamless data flow and efficient functionality. With React, I design intuitive interfaces, while my backend skills in Node.js and Express.js allow me to build robust, high-performing server-side applications.
        </motion.p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
      >
        <img src={sutha} className="w-[300px] sm:w-[425px] rounded-sm" alt="Suthakar" />
      </motion.div>
    </div>
  );
};

export default Hero;
