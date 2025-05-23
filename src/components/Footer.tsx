
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  { name: "Medium", icon: FileText, url: "https://medium.com" },
];

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
  >
    {children}
  </Link>
);

const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="font-bold text-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Dev.Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
              A passionate .NET Full Stack Developer with over 6 years of experience, 
              specializing in Azure-based solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/about">About</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">info@example.com</p>
            <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Dev.Portfolio. All rights reserved.
          </p>
          
          {/* Social links shown only on desktop */}
          {!isMobile && (
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
