
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, FileText, ChevronUp, ChevronDown } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "Medium", icon: FileText, url: "https://medium.com" },
];

const FloatingSocials = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState<"top" | "bottom">("bottom");

  return (
    <motion.div
      className={`fixed ${position === "top" ? "top-24" : "bottom-24"} right-6 z-30`}
      animate={{ y: isOpen ? 0 : position === "top" ? "-90%" : "90%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={`flex ${position === "top" ? "flex-col" : "flex-col-reverse"}`}>
        <div className={`flex flex-row space-x-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-3 px-4 ${position === "top" ? "mb-2 rounded-b-lg" : "mt-2 rounded-t-lg"}`}>
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 p-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </div>
        
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`self-center ${position === "top" ? "mb-1" : "mt-1"} rounded-md bg-white dark:bg-gray-800 p-1 shadow-md`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? 
            (position === "top" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />) : 
            (position === "top" ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />)
          }
        </motion.button>
        
        {/* Position Toggle */}
        <AnimatePresence>
          {isOpen && (
            <motion.button
              onClick={() => setPosition(position === "top" ? "bottom" : "top")}
              className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xs text-gray-600 dark:text-gray-300">
                {position === "top" ? "↓" : "↑"}
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FloatingSocials;
