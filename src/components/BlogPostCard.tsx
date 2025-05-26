
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  categories: string[];
  image: string;
  link: string;
  source: string;
  featured?: boolean;
}

const BlogPostCard = ({ title, excerpt, publishedAt, categories, image, link, source, featured }: BlogPostCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <motion.article 
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group 
        ${featured ? "border-l-4 border-blue-500" : ""}
        hover:border-l-4 hover:border-blue-500 border-transparent`}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {featured && (
        <Badge className="mb-3" variant="default">
          Latest
        </Badge>
      )}
      
      {image && (
        <div className="overflow-hidden h-48 rounded-lg mb-4 relative">
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center"
            whileHover={{ 
              scale: 1.1,
              filter: "brightness(1.2) contrast(1.1)"
            }}
            transition={{ duration: 0.6 }}
          />
        </div>
      )}
      
      <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      </h2>
      
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 flex-wrap gap-y-2">
        <Badge variant="outline" className="mr-3 bg-gray-50 dark:bg-gray-700">
          {source}
        </Badge>
        <span className="flex items-center mr-4">
          <Calendar size={14} className="mr-1" />
          {formatDate(publishedAt)}
        </span>
        <span className="flex items-center">
          <Clock size={14} className="mr-1" />
          {getReadTime(excerpt)}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {excerpt}
      </p>
      
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.slice(0, 3).map((category, index) => (
            <Badge key={index} variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
              {category}
            </Badge>
          ))}
        </div>
      )}
      
      <Separator className="my-4" />
      
      <div className="flex justify-end">
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Read on Medium
          <ExternalLink className="ml-1.5 h-4 w-4" />
        </motion.a>
      </div>
    </motion.article>
  );
};

export default BlogPostCard;
