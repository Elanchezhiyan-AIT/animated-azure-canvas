
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BlogPostCard, { BlogPostCardProps } from "./BlogPostCard";
import { fetchBlogPosts } from "../data/blog-posts";

const BlogGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPostCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      setLoading(true);
      try {
        const posts = await fetchBlogPosts();
        // Sort by date (newest first)
        const sortedPosts = posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        // Mark the first post as featured
        const postsWithFeatured = sortedPosts.map((post, index) => ({
          ...post,
          featured: index === 0
        }));
        setBlogPosts(postsWithFeatured);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const filteredPosts = searchQuery.trim() === "" 
    ? blogPosts 
    : blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categories.some(category => category.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  if (loading) {
    return (
      <div className="text-center p-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-600 dark:text-gray-400 mt-4">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <>
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
          <BlogPostCard key={post.id} {...post} />
        ))}
        
        {filteredPosts.length === 0 && !loading && (
          <div className="text-center p-10 col-span-full">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts found matching your search.
            </p>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default BlogGrid;
