
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
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300">
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
        </div>
        
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
        </CardHeader>
        
        <CardContent className="pb-3 flex-grow">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <motion.a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View Project Details
            <ExternalLink className="ml-1 h-3.5 w-3.5" />
          </motion.a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
