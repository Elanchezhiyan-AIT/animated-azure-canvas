
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-20 h-20"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 2, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full border-t-4 border-blue-600 rounded-full"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full border-r-4 border-purple-600 rounded-full"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
        
        <motion.div 
          className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Loading...
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;
