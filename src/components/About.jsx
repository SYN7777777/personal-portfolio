import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import sutha from "../assets/sutha.jpg";

const About = () => {
  // Set up intersection observers for different sections
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <div className="lg:px-24 px-4 py-16 mt-20 w-full">
      {/* Title with Scroll-Based Animation */}
      <motion.h1
        ref={titleRef}
        className="text-4xl sm:text-5xl text-white font-semibold text-center my-6"
        initial={{ opacity: 0, y: -30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About <span className="text-amber-800">Me</span>
      </motion.h1>

      <div className="flex flex-col lg:flex-row justify-center items-center py-10 gap-10">
        
        {/* Left - Image with Scroll-Based Animation */}
        <motion.div
          ref={imageRef}
          className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-10"
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={sutha} className="w-[250px] sm:w-[300px] rounded-xl" alt="Suthakar" />
        </motion.div>
        
        {/* Right - Text with Scroll-Based Animation */}
        <motion.div
          ref={textRef}
          className="w-full lg:w-1/2 text-white max-w-2xl px-4 lg:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-thin text-sm sm:text-base">
            I am a dedicated MERN Stack Developer passionate about creating efficient, scalable, and dynamic web applications. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in crafting full-stack solutions that are both user-friendly and highly functional. My journey in web development has fueled my commitment to building applications that not only look great but also perform seamlessly across all devices.
            <br /><br />
            On the front end, I focus on creating intuitive and interactive user interfaces that enhance user experience. Using React, I design components that are both reusable and optimized for performance. On the back end, my skills in Node.js and Express allow me to develop robust server-side applications that handle data efficiently. Integrating MongoDB, I ensure a smooth data flow that supports the unique needs of each project.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
