import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  return (
    <section id="contact" className='py-16 flex flex-col justify-center items-center space-y-4 text-neutral-400'>
      {/* Title with Scroll-Based Animation */}
      <motion.h1
        ref={titleRef}
        className='uppercase font-semibold'
        initial={{ opacity: 0, y: -30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        ref={contactRef}
        initial={{ opacity: 0, y: 30 }}
        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Sivaganga, India
      </motion.p>
      <motion.p
        className='text-sm'
        initial={{ opacity: 0, y: 30 }}
        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        +91 9344813787
      </motion.p>
      <motion.p
        className='border-b border-neutral-400'
        initial={{ opacity: 0, y: 30 }}
        animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a href="mailto:suthakar0708@gmail.com">suthakar0708@gmail.com</a>
      </motion.p>
    </section>
  );
}

export default Contact;
