import { motion } from 'framer-motion';

const AnimatedStars = ({ count = 15, className = "" }) => {
  // Generate random positions and properties for stars
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    opacity: Math.random() * 0.8 + 0.2
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, star.opacity, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Star shape with glitch effect */}
          <motion.div
            className="relative w-full h-full"
            animate={{
              filter: [
                "hue-rotate(0deg) brightness(100%)",
                "hue-rotate(90deg) brightness(150%)",
                "hue-rotate(180deg) brightness(120%)",
                "hue-rotate(270deg) brightness(100%)",
                "hue-rotate(360deg) brightness(100%)"
              ]
            }}
            transition={{
              duration: star.duration * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Main star */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-400 rounded-full shadow-lg" />
            
            {/* Glitch layers */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-500 rounded-full mix-blend-multiply"
              animate={{
                x: [0, 1, -1, 0],
                opacity: [0, 0.3, 0, 0.2, 0]
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 3 + 1
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply"
              animate={{
                x: [0, -1, 1, 0],
                opacity: [0, 0.3, 0, 0.2, 0]
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 3 + 2
              }}
            />
            
            {/* Sparkle effect */}
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: Math.random() * 4 + 2
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedStars;