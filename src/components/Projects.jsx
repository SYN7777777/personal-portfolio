import React from 'react';
import { FaPencilRuler, FaShoppingCart, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });

  const projects = [
    {
      title: 'Architect Firm Website',
      description:
        'Responsive website built with React and Tailwind CSS to showcase architectural projects, with smooth animations and a user-friendly interface.',
      icon: <FaPencilRuler className="text-indigo-500 text-4xl mb-4" />,
      link: 'https://github.com/yourusername/architect-firm-website',
    },
    {
      title: 'E-commerce Website',
      description:
        'A dynamic e-commerce platform with product catalog, cart functionality, and filter options. Designed for a clean and seamless shopping experience.',
      icon: <FaShoppingCart className="text-green-500 text-4xl mb-4" />,
      link: 'https://github.com/yourusername/e-commerce-website',
    },
    {
      title: 'Chat App',
      description:
        'Real-time chat application with messaging and user authentication with JWT authorization, offering an interactive UI and responsive design.',
      icon: <FaComments className="text-blue-500 text-4xl mb-4" />,
      link: 'https://github.com/yourusername/chat-app',
    },
  ];

  return (
    <section id="projects" className="py-16 border-b border-neutral-800">
      {/* Title with Scroll-Based Animation */}
      <motion.h2
        ref={titleRef}
        className="text-3xl font-bold text-center mb-8 text-neutral-200"
        initial={{ opacity: 0, y: -30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h2>
      
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            ref={projectsRef}
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-sm text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>{project.icon}</div>
            <h3 className="text-xl font-semibold mt-2 mb-2 text-neutral-300">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:underline"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
