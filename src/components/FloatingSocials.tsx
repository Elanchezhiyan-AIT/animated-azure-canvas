
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, FileText, ChevronRight, ChevronLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "Medium", icon: FileText, url: "https://medium.com" },
];

const FloatingSocials = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(true);
  const [position, setPosition] = useState<"left" | "right">("left");

  if (!isMobile) return null;

  return (
    <motion.div
      className={`fixed ${position === "left" ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 z-30`}
      animate={{ x: isOpen ? 0 : position === "left" ? "-90%" : "90%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={`flex ${position === "left" ? "flex-row" : "flex-row-reverse"}`}>
        <div className={`flex flex-col space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-r-lg py-4 px-3 ${position === "left" ? "" : "rounded-r-none rounded-l-lg"}`}>
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
          className={`self-center ${position === "right" ? "rounded-l-md -mr-1" : "rounded-r-md -ml-1"} bg-white dark:bg-gray-800 p-1 shadow-md`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? 
            (position === "left" ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />) : 
            (position === "left" ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />)
          }
        </motion.button>
        
        {/* Position Toggle */}
        <AnimatePresence>
          {isOpen && (
            <motion.button
              onClick={() => setPosition(position === "left" ? "right" : "left")}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-xs text-gray-600 dark:text-gray-300">
                {position === "left" ? "→" : "←"}
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default FloatingSocials;
