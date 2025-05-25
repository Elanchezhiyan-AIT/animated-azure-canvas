
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedProject from "../components/FeaturedProject";
import BlogPosts from "../components/BlogPosts";
import Loader from "../components/Loader";
import ChatbotWidget from "../components/ChatbotWidget";
import Testimonials from "../components/Testimonials";
import ProfileImage from "../components/ProfileImage";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="mb-8">
              <ProfileImage 
                src="/lovable-uploads/e0bfa469-4fc1-4fca-ab3a-a3fd6aef3458.png" 
                alt="Developer Profile" 
                fallback="JS"
                size="xl"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              .NET Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              6+ years of experience building robust Azure-based solutions with ReactJS and NestJS
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
              Passionate about exploring and implementing cutting-edge technologies in enterprise projects. 
              I continuously familiarize myself with emerging tools and frameworks to deliver innovative solutions 
              that drive business growth and enhance user experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
            </div>
          </motion.div>
        </section>

        {/* Featured Project Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="py-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Project</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Check out my latest enterprise-grade Azure cloud solution showcasing modern development practices
          </p>
          <FeaturedProject />
          <div className="flex justify-center mt-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/projects" 
                className="inline-flex items-center px-6 py-3 font-medium rounded-md text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-300"
              >
                Explore All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Blog Posts Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="py-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Recent Blog Posts</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            Insights on .NET, Azure, modern web development, and emerging technologies
          </p>
          <BlogPosts />
          <div className="flex justify-center mt-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center px-6 py-3 font-medium rounded-md text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-300"
              >
                Read All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="py-16"
        >
          <Testimonials />
        </motion.section>
      </main>
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
