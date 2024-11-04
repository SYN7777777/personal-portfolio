import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true });

  const experiences = [
    {
      title: 'Self-Initiated Projects',
      description:
        'To enhance my skills as a MERN stack developer, I took the initiative to build real-world projects independently. This experience has given me practical knowledge in frontend and backend development, user experience design, and responsive layouts, as well as proficiency in React and Tailwind CSS.',
    },
    {
      title: 'Continuous Learning',
      description:
        'Through my self-driven learning journey, I’ve actively explored industry-standard practices in web development, including state management, animations, and optimized API integration. I keep myself updated with the latest trends and tools in the MERN stack ecosystem.',
    },
    {
      title: 'Problem-Solving and Adaptability',
      description:
        'While working on self-initiated projects, I developed problem-solving skills and adaptability. Each project presented unique challenges, helping me become proficient in troubleshooting, debugging, and optimizing code for better performance and scalability.',
    },
  ];

  return (
    <section id="experience" className="py-12">
      {/* Title with Scroll-Based Animation */}
      <motion.h2
        ref={titleRef}
        className="text-3xl text-slate-400 font-bold text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            ref={experienceRef}
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl text-neutral-400 font-semibold mb-2">{experience.title}</h3>
            <p className="text-gray-700">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
