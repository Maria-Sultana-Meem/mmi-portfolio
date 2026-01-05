import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web App",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/alexjohnson/ecommerce-app",
      demo: "https://ecommerce-demo.netlify.app",
      image: "project1"
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      github: "https://github.com/alexjohnson/task-manager",
      demo: "https://task-manager-demo.netlify.app",
      image: "project2"
    },
    {
      title: "Weather Forecast App",
      description: "A responsive weather application that provides current weather conditions and 7-day forecasts using OpenWeatherMap API.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      github: "https://github.com/alexjohnson/weather-app",
      demo: "https://weather-forecast-demo.netlify.app",
      image: "project3"
    },
    {
      title: "Machine Learning Classifier",
      description: "A Python-based machine learning project that classifies images using convolutional neural networks with TensorFlow.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
      github: "https://github.com/alexjohnson/ml-classifier",
      demo: null,
      image: "project4"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-48 overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex flex-col items-center justify-center text-white gap-4">
                  <FaCode size={40} />
                  <span className="text-sm opacity-80">Project Screenshot</span>
                </div>
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/30 backdrop-blur-md"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                    {project.demo && (
                      <motion.a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/30 backdrop-blur-md"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <FaExternalLinkAlt /> Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl text-gray-800 mb-4 font-semibold">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center p-8 bg-white rounded-2xl shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl text-gray-600 mb-6">Want to see more of my work?</p>
          <motion.a 
            href="https://github.com/alexjohnson" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;