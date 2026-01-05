import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTailwindcss
} from 'react-icons/si';
import { motion } from 'framer-motion';
import AnimatedStars from './AnimatedStars';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", icon: <FaReact />, level: 80, color: "text-blue-600" },
        { name: "Python", icon: <FaPython />, level: 75, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, level: 70, color: "text-yellow-400" },
        { name: "MATLAB", icon: <FaDatabase />, level: 65, color: "text-orange-500" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 85, color: "text-orange-600" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 80, color: "text-blue-500" },
        { name: "React", icon: <FaReact />, level: 70, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 75, color: "text-cyan-500" }
      ]
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 75, color: "text-orange-600" },
        { name: "AutoCAD", icon: <FaDatabase />, level: 70, color: "text-red-500" },
        { name: "Proteus", icon: <FaDatabase />, level: 80, color: "text-blue-600" },
        { name: "Arduino IDE", icon: <FaDatabase />, level: 85, color: "text-teal-500" }
      ]
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
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 relative overflow-hidden">
      {/* Animated Stars */}
      <AnimatedStars count={22} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.h2 
          className="text-center text-4xl mb-12 text-white relative font-bold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-300 to-cyan-300 rounded-full"></span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 border border-white/30"
              variants={itemVariants}
            >
              <h3 className="text-2xl text-white mb-6 text-center font-semibold">{category.title}</h3>
              
              <div className="flex flex-col gap-6">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-white/20 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-white/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                        <span className="font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="font-semibold text-yellow-300 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-yellow-300 to-cyan-300 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: idx * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;