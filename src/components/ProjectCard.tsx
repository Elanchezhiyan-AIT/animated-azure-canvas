
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-l-0 group hover:border-l-4 hover:border-blue-500">
        <div className="relative overflow-hidden h-48">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-blue-500/90 text-white">
              {project.category}
            </Badge>
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 flex items-end p-4"
            whileHover={{ opacity: 1 }}
          >
            <motion.h3 
              className="text-white font-bold text-lg"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              View Details
            </motion.h3>
          </motion.div>
        </div>
        
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
            {project.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pb-3 flex-grow">
          <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Badge
                  variant="outline"
                  className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <motion.a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View Project Details
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.1 }}
            >
              <ExternalLink className="ml-1 h-3.5 w-3.5" />
            </motion.div>
          </motion.a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
