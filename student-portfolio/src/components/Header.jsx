import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaMoon, FaSun, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import AnimatedStars from './AnimatedStars';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialRef = useRef(null);

  // Animated words for typewriter effect
  const animatedWords = ['EEE Student', 'Tech Enthusiast', 'Future Engineer', 'Problem Solver'];

  // Typewriter effect for subtitle
  useEffect(() => {
    const currentWord = animatedWords[currentWordIndex];
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setDisplayedText(currentWord.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          // Clear text and move to next word
          let clearIndex = displayedText.length;
          const clearTextInterval = setInterval(() => {
            clearIndex--;
            setDisplayedText(currentWord.slice(0, clearIndex));
            if (clearIndex <= 0) {
              clearInterval(clearTextInterval);
              setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentWordIndex, animatedWords, displayedText.length]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(socialRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const themeClasses = isDark 
    ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900' 
    : 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500';

  const navClasses = isDark
    ? 'bg-gray-900/20 backdrop-blur-xl border-b border-gray-700/30'
    : 'bg-white/10 backdrop-blur-xl border-b border-white/20';

  // Animation variants for text
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <header className={`${themeClasses} text-white min-h-screen relative transition-all duration-700`}>
      {/* Animated Stars */}
      <AnimatedStars count={20} />
      
      {/* Colorful Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        className={`${navClasses} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="nav-brand"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Md Monirul Islam
              </h2>
            </motion.div>
            
            <div className="flex items-center gap-6">
              <ul className="hidden md:flex gap-8 list-none">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-white/90 hover:text-cyan-300 no-underline font-medium transition-all duration-300 hover:scale-110 relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }} className="text-white/90 hover:text-cyan-300 no-underline font-medium transition-all duration-300 hover:scale-110 relative group">
                  Education
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="text-white/90 hover:text-cyan-300 no-underline font-medium transition-all duration-300 hover:scale-110 relative group">
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white/90 hover:text-cyan-300 no-underline font-medium transition-all duration-300 hover:scale-110 relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </a></li>
              </ul>
              
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDark ? (
                  <FaSun className="text-yellow-400 text-xl" />
                ) : (
                  <FaMoon className="text-blue-200 text-xl" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen relative z-10 pt-20" ref={heroRef}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left Side - Text Content */}
            <div className="text-left lg:text-left order-2 lg:order-1">
              {/* Animated Main Title */}
              <div className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight" ref={titleRef}>
                <motion.div 
                  className="block text-white/90 mb-2 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {"Hi, I'm".split('').map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                      style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.div>
                
                {/* Glitch Name Animation */}
                <motion.div 
                  className="block relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent relative z-10"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    {"Md Monirul Islam".split('').map((char, i) => (
                      <motion.span
                        key={i}
                        custom={i + 8}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-block relative"
                        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: Math.random() * 10 - 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                        
                        {/* Glitch layers for each character */}
                        <motion.span
                          className="absolute inset-0 text-red-400 opacity-0"
                          animate={{
                            x: [0, 2, -2, 0],
                            opacity: [0, 0.3, 0, 0.2, 0]
                          }}
                          transition={{
                            duration: 0.1,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 3 + 1
                          }}
                        >
                          {char}
                        </motion.span>
                        <motion.span
                          className="absolute inset-0 text-cyan-400 opacity-0"
                          animate={{
                            x: [0, -2, 2, 0],
                            opacity: [0, 0.3, 0, 0.2, 0]
                          }}
                          transition={{
                            duration: 0.1,
                            repeat: Infinity,
                            repeatDelay: Math.random() * 3 + 2
                          }}
                        >
                          {char}
                        </motion.span>
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.div>
              </div>
              
              {/* Animated Subtitle with Typewriter Effect */}
              <motion.div 
                className="text-xl md:text-2xl lg:text-3xl mb-6 font-light text-white/90 h-12 flex items-center"
                ref={subtitleRef}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent relative">
                  {displayedText}
                  <motion.span
                    className="inline-block w-0.5 h-8 bg-cyan-300 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </span>
              </motion.div>
              
              {/* Animated Description */}
              <motion.div 
                className="text-lg md:text-xl mb-8 leading-relaxed text-white/80 overflow-hidden" 
                ref={descriptionRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                {"Passionate Electrical and Electronic Engineering student at Pabna University of Science and Technology. Exploring the fascinating world of circuits, power systems, and emerging technologies.".split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.5 + (i * 0.05),
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      color: "#22d3ee",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              
              {/* Enhanced Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8" 
                ref={buttonsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <motion.a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Get In Touch</span>
                </motion.a>
                
                <motion.a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-white/30 hover:border-cyan-400 text-white hover:text-cyan-300 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <FaDownload className="text-lg" />
                  </motion.span>
                  <span className="relative z-10">Download CV</span>
                </motion.a>
              </motion.div>
              
              {/* Enhanced Social Links */}
              <motion.div 
                className="flex gap-4" 
                ref={socialRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <motion.a 
                  href="https://github.com/monirulislam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  />
                  <FaGithub className="text-xl text-white transition-colors duration-300 relative z-10" />
                </motion.a>
                
                <motion.a 
                  href="https://linkedin.com/in/monirulislam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.2, y: -5, rotate: -360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  />
                  <FaLinkedin className="text-xl text-white transition-colors duration-300 relative z-10" />
                </motion.a>
                
                <motion.a 
                  href="mailto:monirul.islam@example.com"
                  className="group relative p-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <FaEnvelope className="text-xl text-white transition-colors duration-300 relative z-10" />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <motion.div
                className="relative"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Animated Gradient Border */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-3xl p-1"
                    animate={{ 
                      background: [
                        "linear-gradient(45deg, #fbbf24, #ec4899, #8b5cf6)",
                        "linear-gradient(90deg, #06b6d4, #10b981, #f59e0b)",
                        "linear-gradient(135deg, #ef4444, #8b5cf6, #06b6d4)",
                        "linear-gradient(180deg, #10b981, #f59e0b, #ec4899)",
                        "linear-gradient(45deg, #fbbf24, #ec4899, #8b5cf6)"
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
                            "linear-gradient(90deg, transparent 0%, rgba(255,0,0,0.1) 50%, transparent 100%)",
                            "linear-gradient(90deg, transparent 0%, rgba(0,255,0,0.1) 50%, transparent 100%)",
                            "linear-gradient(90deg, transparent 0%, rgba(0,0,255,0.1) 50%, transparent 100%)",
                            "linear-gradient(90deg, transparent 0%, transparent 50%, transparent 100%)"
                          ],
                          x: [-100, 400, -100]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex flex-col items-center justify-center text-gray-700" style={{display: 'none'}}>
                        <FaGraduationCap size={80} className="mb-4 text-purple-600" />
                        <p className="text-lg font-medium text-gray-800">EEE Student</p>
                        <p className="text-sm text-gray-600 mt-2 text-center px-4">Pabna University of Science & Technology</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Floating Elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-60 blur-xl"
                    animate={{ 
                      y: [0, -15, 0], 
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-60 blur-xl"
                    animate={{ 
                      y: [0, 15, 0], 
                      rotate: [360, 180, 0],
                      scale: [1, 0.8, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-60 blur-lg"
                    animate={{ 
                      x: [0, 20, 0], 
                      scale: [1, 1.3, 1],
                      rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute top-1/4 -right-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50 blur-md"
                    animate={{ 
                      y: [0, -10, 10, 0], 
                      x: [0, 10, -5, 0],
                      scale: [1, 1.5, 0.8, 1]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;