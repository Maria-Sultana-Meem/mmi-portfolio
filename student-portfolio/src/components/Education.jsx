import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedStars from './AnimatedStars';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Electrical and Electronic Engineering",
      institution: "University of Engineering & Technology",
      location: "Dhaka, Bangladesh",
      period: "2022 - 2026",
      gpa: "3.7/4.0",
      relevant: [
        "Circuit Analysis",
        "Digital Electronics",
        "Microprocessors",
        "Power Systems",
        "Control Systems",
        "Signal Processing"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka College",
      location: "Dhaka, Bangladesh",
      period: "2020 - 2022",
      gpa: "5.0/5.0",
      relevant: [
        "Physics",
        "Mathematics",
        "Chemistry",
        "Higher Mathematics"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-green-400 via-teal-500 to-blue-600 relative overflow-hidden">
      {/* Animated Stars */}
      <AnimatedStars count={16} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.h2 
          className="text-center text-4xl mb-12 text-white relative font-bold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full"></span>
        </motion.h2>
        
        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-300 to-pink-400"></div>
          
          {educationData.map((edu, index) => (
            <motion.div 
              key={index} 
              className="relative mb-12 flex items-start gap-8"
              variants={itemVariants}
            >
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-pink-500/30">
                <FaGraduationCap />
              </div>
              
              <motion.div 
                className="flex-1 bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-white/30"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl text-white mb-2 font-semibold">{edu.degree}</h3>
                <h4 className="text-xl text-yellow-300 mb-4 font-medium">{edu.institution}</h4>
                
                <div className="flex flex-wrap gap-6 mb-6 text-sm text-white/90">
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {edu.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt /> {edu.period}
                  </span>
                  <span className="bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full font-semibold border border-yellow-300/30">
                    GPA: {edu.gpa}
                  </span>
                </div>
                
                <div>
                  <h5 className="text-white mb-3 font-medium">Relevant Coursework:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.relevant.map((course, idx) => (
                      <div key={idx} className="bg-white/10 px-4 py-2 rounded-full text-sm text-white/90 border-l-4 border-yellow-300">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;