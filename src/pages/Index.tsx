
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedProject from "../components/FeaturedProject";
import Loader from "../components/Loader";
import ChatbotWidget from "../components/ChatbotWidget";
import Testimonials from "../components/Testimonials";
import ProfileImage from "../components/ProfileImage";
import { fetchProjects, Project } from "../data/projects";
import { fetchBlogPosts, BlogPost } from "../data/blog-posts";
import ProjectCard from "../components/ProjectCard";
import BlogPostCard from "../components/BlogPostCard";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Load featured projects
        const projectsData = await fetchProjects();
        const featured = projectsData.projects.filter(project => project.featured);
        setFeaturedProjects(featured);

        // Load recent blog posts (latest 3)
        const blogs = await fetchBlogPosts();
        const sortedBlogs = blogs.sort((a, b) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        setRecentBlogs(sortedBlogs.slice(0, 3));
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        // Simulate loading time
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
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

        {/* Featured Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Check out my latest enterprise-grade Azure cloud solutions showcasing modern development practices
            </p>
          </motion.div>
          
          {featuredProjects.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <FeaturedProject />
          )}
          
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
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
          </motion.div>
        </motion.section>

        {/* Recent Blog Posts Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">Recent Blog Posts</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Latest insights on .NET, Azure, modern web development, and emerging technologies
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {recentBlogs.map((post, index) => (
              <motion.div
                key={post.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
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
          </motion.div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <Testimonials />
        </motion.section>
      </main>
      
      <Footer />
      <ChatbotWidget />
    </motion.div>
  );
};

export default Index;
