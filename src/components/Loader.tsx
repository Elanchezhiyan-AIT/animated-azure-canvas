
import { motion } from "framer-motion";

const Loader = () => {
  // Define animations for the code brackets
  const bracketVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.1, 1],
      transition: { 
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 1.5,
      }
    }
  };

  // Text appearing animation with typewriter effect
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.5 + i * 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Floating animation for name
  const nameVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 1.5,
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  // Rotating animation for the brackets
  const rotateVariants = {
    animate: {
      rotateY: [0, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const codeText = ".NET Developer";
  const name = "Elanchezhiyan P";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Name Display */}
        <motion.div
          className="mb-8"
          variants={nameVariants}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-center">
            {name}
          </h1>
        </motion.div>

        <motion.div className="relative flex items-center justify-center">
          {/* Left bracket with rotation */}
          <motion.div
            className="text-5xl font-mono text-blue-600"
            variants={bracketVariants}
            initial="initial"
            animate="animate"
          >
            <motion.span
              variants={rotateVariants}
              animate="animate"
              style={{ display: "inline-block" }}
            >
              {"<"}
            </motion.span>
          </motion.div>
          
          {/* Text characters with staggered animation */}
          <div className="flex mx-4">
            {codeText.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                custom={index}
                variants={textVariants}
                initial="initial"
                animate="animate"
                whileHover={{ 
                  scale: 1.2,
                  color: "#3B82F6",
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          
          {/* Right bracket with rotation */}
          <motion.div
            className="text-5xl font-mono text-purple-600"
            variants={bracketVariants}
            initial="initial"
            animate="animate"
          >
            <motion.span
              variants={rotateVariants}
              animate="animate"
              style={{ display: "inline-block" }}
            >
              {"/>"}
            </motion.span>
          </motion.div>
        </motion.div>
        
        {/* Enhanced progress bar with gradient animation */}
        <motion.div 
          className="mt-8 h-2 w-48 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner"
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          Loading Portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;
