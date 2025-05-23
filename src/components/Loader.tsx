
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

  // Text appearing animation
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.3 + i * 0.1,
        duration: 0.5
      }
    })
  };

  const codeText = ".NET Developer";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="relative flex items-center justify-center">
          {/* Left bracket */}
          <motion.div
            className="text-5xl font-mono text-blue-600"
            variants={bracketVariants}
            initial="initial"
            animate="animate"
          >
            {"<"}
          </motion.div>
          
          {/* Text characters with staggered animation */}
          <div className="flex mx-2">
            {codeText.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                custom={index}
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          
          {/* Right bracket */}
          <motion.div
            className="text-5xl font-mono text-purple-600"
            variants={bracketVariants}
            initial="initial"
            animate="animate"
          >
            {"/>"}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-6 h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden"
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="h-full w-full bg-white dark:bg-gray-900 origin-left"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
