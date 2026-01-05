import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedStars from './AnimatedStars';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-purple-900 to-indigo-900 text-white py-12 relative overflow-hidden">
      {/* Animated Stars */}
      <AnimatedStars count={12} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-2xl mb-4 text-yellow-300 font-semibold">Md Monirul Islam</h3>
            <p className="text-gray-300 leading-relaxed">
              EEE Student passionate about technology and innovation
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-gray-100 font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">About</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Education</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-gray-100 font-medium">Connect With Me</h4>
            <div className="flex gap-4">
              <motion.a 
                href="https://github.com/monirulislam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 text-gray-300 rounded-full text-xl transition-all duration-300 hover:bg-yellow-300 hover:text-gray-800 hover:-translate-y-1"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/monirulislam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-white/10 text-gray-300 rounded-full text-xl transition-all duration-300 hover:bg-yellow-300 hover:text-gray-800 hover:-translate-y-1"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="mailto:monirul.islam@example.com"
                className="flex items-center justify-center w-10 h-10 bg-white/10 text-gray-300 rounded-full text-xl transition-all duration-300 hover:bg-yellow-300 hover:text-gray-800 hover:-translate-y-1"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-300 flex items-center justify-center gap-2 flex-wrap">
            Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            by Md Monirul Islam © 2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;