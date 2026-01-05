import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedStars from './AnimatedStars';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Stars */}
      <AnimatedStars count={19} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.h2 
          className="text-center text-4xl mb-12 text-white relative font-bold"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-300 to-cyan-300 rounded-full"></span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl text-white mb-4">Let's Connect!</h3>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              I'm always interested in new opportunities, collaborations, and 
              interesting projects. Whether you have a question or just want to 
              say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-sm transition-transform duration-300 hover:translate-x-2 border border-white/30"
                whileHover={{ x: 10 }}
              >
                <FaEnvelope className="text-2xl text-yellow-300 min-w-[30px]" />
                <div>
                  <h4 className="text-white mb-1 font-medium">Email</h4>
                  <a href="mailto:monirul.islam@example.com" className="text-cyan-300 hover:text-yellow-300 transition-colors">
                    monirul.islam@example.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-sm transition-transform duration-300 hover:translate-x-2 border border-white/30"
                whileHover={{ x: 10 }}
              >
                <FaPhone className="text-2xl text-green-300 min-w-[30px]" />
                <div>
                  <h4 className="text-white mb-1 font-medium">Phone</h4>
                  <a href="tel:+8801234567890" className="text-cyan-300 hover:text-yellow-300 transition-colors">
                    +880 123 456 7890
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-sm transition-transform duration-300 hover:translate-x-2 border border-white/30"
                whileHover={{ x: 10 }}
              >
                <FaMapMarkerAlt className="text-2xl text-pink-300 min-w-[30px]" />
                <div>
                  <h4 className="text-white mb-1 font-medium">Location</h4>
                  <span className="text-white/90">Dhaka, Bangladesh</span>
                </div>
              </motion.div>
            </div>
            
            <div className="flex gap-4">
              <motion.a 
                href="https://linkedin.com/in/monirulislam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/30"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://github.com/monirulislam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.form 
            className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/30" 
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-white/30 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-yellow-300 bg-white/20 backdrop-blur-sm text-white placeholder-white/70"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-blue-500 bg-white"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-blue-500 bg-white"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors duration-300 focus:outline-none focus:border-blue-500 bg-white resize-vertical min-h-[120px]"
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-none rounded-xl text-lg font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;