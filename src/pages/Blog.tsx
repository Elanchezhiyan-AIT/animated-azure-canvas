
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";

const blogPosts = [
  {
    id: 1,
    title: "From Zero to InvoicePilot: My First NestJS App with PDF Generation & Email Delivery",
    excerpt: "Hello NestJS—A Beginner's Journey As a developer exploring NestJS for the first time, I set out to build something real, functional, and scalable—not just another tutorial app...",
    date: "May 21, 2024",
    readTime: "8 min read",
    platform: "Medium",
    tags: ["NestJS", "PDF", "NodeJS", "Email"],
    featured: true
  },
  {
    id: 2,
    title: "Building a Clean .NET 8 Minimal API with DTOs—No Frameworks, No Swagger",
    excerpt: "Building a Clean .NET 8 Minimal API with DTOs—No Frameworks, No Swagger My first dive into Minimal APIs in .NET 8—with handcrafted DTOs and Scalar for OpenAPI...",
    date: "May 8, 2025",
    readTime: "6 min read",
    platform: "Medium",
    tags: [".NET", "API", "Minimal"]
  },
  {
    id: 3,
    title: "The New Visual Studio SLNX Solution File: A Leap Forward in .NET Development",
    excerpt: "For years, Visual Studio's solution file format (.sln) has been widely criticized for being clunky, hard to merge, and limited in functionality...",
    date: "Mar 14, 2025",
    readTime: "10 min read",
    platform: "Medium",
    tags: ["Visual Studio", ".NET", "Development"]
  },
  {
    id: 4,
    title: "Azure Identity Management: Best Practices for Enterprise Applications",
    excerpt: "Learn the best practices for implementing and managing identity in Azure-based enterprise applications, covering Azure AD, Key Vault integration, and more...",
    date: "Feb 27, 2025",
    readTime: "12 min read",
    platform: "Medium",
    tags: ["Azure", "Security", "Identity"]
  },
  {
    id: 5,
    title: "Building Microservices with .NET 8: A Comprehensive Guide",
    excerpt: "Explore the process of designing, implementing, and deploying microservices using the latest features in .NET 8...",
    date: "Jan 15, 2025",
    readTime: "14 min read",
    platform: "Medium",
    tags: [".NET", "Microservices", "Architecture"]
  }
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = searchQuery.trim() === "" 
    ? blogPosts 
    : blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Articles</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on .NET development, Azure cloud services, 
            and software architecture.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              className="pl-10 py-6 rounded-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-blue-500"
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-8 max-w-4xl mx-auto"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {filteredPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                post.featured ? "border-l-4 border-blue-500" : ""
              }`}
            >
              {post.featured && (
                <Badge className="mb-3" variant="default">
                  Latest
                </Badge>
              )}
              
              <h2 className="text-2xl font-bold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <a href="#">{post.title}</a>
              </h2>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 flex-wrap gap-y-2">
                <Badge variant="outline" className="mr-3 bg-gray-50 dark:bg-gray-700">
                  {post.platform}
                </Badge>
                <span className="flex items-center mr-4">
                  <Calendar size={14} className="mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {post.readTime}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-end">
                <motion.a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Read on Medium
                  <ExternalLink className="ml-1.5 h-4 w-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
          
          {filteredPosts.length === 0 && (
            <div className="text-center p-10">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No blog posts found matching your search.
              </p>
            </div>
          )}
        </motion.div>
      </main>
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Blog;
