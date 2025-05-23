
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Resilient Azure Applications",
    excerpt: "Learn how to develop cloud applications that gracefully handle failures and maintain service availability.",
    date: "June 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 2,
    title: "React Performance Optimization Techniques",
    excerpt: "Discover advanced strategies to make your React applications blazing fast and responsive.",
    date: "May 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 3,
    title: "Microservices with .NET and Docker",
    excerpt: "A practical guide to implementing microservices architecture using .NET Core and Docker containers.",
    date: "May 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const BlogPosts = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {blogPosts.map((post) => (
        <motion.div key={post.id} variants={itemVariants}>
          <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="overflow-hidden h-48">
              <motion.img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover object-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2 flex-grow">
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-2">
              <motion.a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogPosts;
