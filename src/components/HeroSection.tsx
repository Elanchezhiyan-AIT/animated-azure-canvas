
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileImage from "./ProfileImage";

const HeroSection = () => {
  return (
    <motion.section 
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div 
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ProfileImage 
            src="/lovable-uploads/e0bfa469-4fc1-4fca-ab3a-a3fd6aef3458.png" 
            alt="Developer Profile" 
            fallback="EP"
            size="xl"
          />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          .NET Full Stack Developer
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          6+ years of experience building robust Azure-based solutions with ReactJS and NestJS
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Passionate about exploring and implementing cutting-edge technologies in enterprise projects. 
          I continuously familiarize myself with emerging tools and frameworks to deliver innovative solutions 
          that drive business growth and enhance user experiences.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/about" 
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Learn More About Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-md text-blue-600 bg-white border border-blue-200 hover:bg-blue-50 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
