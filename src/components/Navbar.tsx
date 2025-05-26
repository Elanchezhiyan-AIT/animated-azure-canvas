
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Elanchezhiyan P
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 focus:outline-none">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 mt-10">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.path)}
                      className={`text-lg font-medium px-4 py-2 rounded-md transition-colors text-left ${
                        location.pathname === item.path
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <nav className="flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative px-4 py-2 rounded-md font-medium transition-colors`}
                >
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-md z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className={`relative z-10 ${
                    location.pathname === item.path
                      ? "text-blue-700 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}>
                    {item.name}
                  </span>
                </button>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
