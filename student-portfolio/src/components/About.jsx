import React from 'react';
import { FaCode, FaGraduationCap, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedStars from './AnimatedStars';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const highlightVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Stars */}
      <AnimatedStars count={18} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-cyan-500/10 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.h2 
          className="text-center text-4xl md:text-5xl mb-16 text-white relative font-bold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
          <motion.span 
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="lg:col-span-2 text-lg leading-relaxed" variants={itemVariants}>
            <motion.p className="text-2xl font-medium text-white mb-6" variants={itemVariants}>
              I'm a passionate Electrical and Electronic Engineering student with a strong 
              interest in technology and innovation. I love learning about circuits, programming, 
              and how technology can solve real-world problems.
            </motion.p>
            
            <motion.p className="mb-8 text-white/90" variants={itemVariants}>
              Currently pursuing my degree in EEE, I'm building a strong foundation in both 
              theoretical knowledge and practical skills. I'm eager to explore emerging 
              technologies and contribute to meaningful projects in the future.
            </motion.p>
            
            <motion.div className="mt-8 flex flex-col gap-6" variants={containerVariants}>
              <motion.div 
                className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:translate-x-2 border border-white/20 hover:border-cyan-400/50 hover:bg-white/15 group" 
                variants={highlightVariants} 
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <FaCode className="text-4xl text-yellow-400 min-w-[50px] group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="mb-2 text-white font-semibold text-xl">Problem Solving</h4>
                  <p className="text-white/80 m-0">Analytical thinking and creative solutions</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:translate-x-2 border border-white/20 hover:border-green-400/50 hover:bg-white/15 group" 
                variants={highlightVariants} 
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <FaGraduationCap className="text-4xl text-green-400 min-w-[50px] group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="mb-2 text-white font-semibold text-xl">Continuous Learning</h4>
                  <p className="text-white/80 m-0">Always eager to learn new technologies</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:translate-x-2 border border-white/20 hover:border-pink-400/50 hover:bg-white/15 group" 
                variants={highlightVariants} 
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <FaLightbulb className="text-4xl text-pink-400 min-w-[50px] group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h4 className="mb-2 text-white font-semibold text-xl">Innovation</h4>
                  <p className="text-white/80 m-0">Passionate about technological advancement</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Professional Image Section */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Animated Gradient Border - Similar to Header */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl p-1"
                animate={{ 
                  background: [
                    "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
                    "linear-gradient(90deg, #10b981, #f59e0b, #06b6d4)",
                    "linear-gradient(135deg, #ef4444, #06b6d4, #10b981)",
                    "linear-gradient(180deg, #8b5cf6, #ec4899, #f59e0b)",
                    "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                  {/* Glitch Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    animate={{
                      background: [
                        "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.15) 50%, transparent 100%)",
                        "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.15) 50%, transparent 100%)",
                        "linear-gradient(90deg, transparent 0%, rgba(236,72,153,0.15) 50%, transparent 100%)",
                        "linear-gradient(90deg, transparent 0%, transparent 50%, transparent 100%)"
                      ],
                      x: [-100, 400, -100]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Professional Profile Image */}
                  <motion.img 
                    src="/images/mmi.jpeg" 
                    alt="Md Monirul Islam - EEE Student" 
                    className="w-full h-full object-cover object-center filter brightness-105 contrast-110"
                    animate={{
                      filter: [
                        "brightness(105%) contrast(110%) saturate(110%)",
                        "brightness(110%) contrast(115%) saturate(120%)",
                        "brightness(105%) contrast(110%) saturate(110%)"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/30 to-purple-500/30 flex flex-col items-center justify-center text-gray-700" style={{display: 'none'}}>
                    <FaGraduationCap size={80} className="mb-4 text-purple-600" />
                    <p className="text-lg font-medium text-gray-800">EEE Student</p>
                    <p className="text-sm text-gray-600 mt-2 text-center px-4">Pabna University of Science & Technology</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Enhanced Floating Elements - Similar to Header */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 blur-xl"
                animate={{ 
                  y: [0, -12, 0], 
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 blur-xl"
                animate={{ 
                  y: [0, 12, 0], 
                  rotate: [360, 180, 0],
                  scale: [1, 0.8, 1]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-teal-400 to-green-500 rounded-full opacity-60 blur-lg"
                animate={{ 
                  x: [0, 15, 0], 
                  scale: [1, 1.3, 1],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-1/4 -right-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-50 blur-md"
                animate={{ 
                  y: [0, -8, 8, 0], 
                  x: [0, 8, -4, 0],
                  scale: [1, 1.4, 0.9, 1]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-1/4 -right-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-40 blur-sm"
                animate={{ 
                  y: [0, 6, -6, 0], 
                  x: [0, -6, 6, 0],
                  scale: [1, 1.2, 0.8, 1]
                }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;