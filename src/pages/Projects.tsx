
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatbotWidget from "../components/ChatbotWidget";

const projectCategories = [
  "All Projects",
  "Open Source",
  "NuGet Packages",
  "Client Work",
  "Personal Projects"
];

const projects = [
  {
    id: 1,
    title: "Seahorse Analytics",
    description: "A high-performance analytics platform designed for Seahorse metabolic analyzers. Delivers real-time data visualization and interactive dashboards for biological assay insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Client Work",
    technologies: ["C#", ".NET Core", "Azure", "React", "D3.js"]
  },
  {
    id: 2,
    title: "MPS Applications - Finance",
    description: "Enterprise-grade financial module within the MPS platform enabling seamless transaction control, live reporting, and data-driven decision-making for clients.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Client Work",
    technologies: ["ASP.NET MVC", "SQL Server", "Azure DevOps", "TypeScript"]
  },
  {
    id: 3,
    title: "Query Builder",
    description: "A Windows-based GUI application enabling users to construct and test SQL queries visually with drag-and-drop capabilities, syntax validation, and result preview.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "Personal Projects",
    technologies: ["WPF", "C#", "LINQ", "SQL"]
  },
  {
    id: 4,
    title: "Azure Resource Manager",
    description: "Open-source utility for managing Azure resources efficiently. Provides templates and automation for resource deployment and management.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    category: "Open Source",
    technologies: ["Azure CLI", "PowerShell", "Terraform", "ARM Templates"]
  },
  {
    id: 5,
    title: "Entity Framework Extensions",
    description: "A collection of NuGet packages extending Entity Framework Core with additional functionality for improved performance and developer experience.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    category: "NuGet Packages",
    technologies: [".NET Core", "Entity Framework", "C#"]
  },
  {
    id: 6,
    title: "Data Validation Framework",
    description: "A comprehensive framework for data validation in .NET applications with a focus on performance and flexibility.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    category: "NuGet Packages",
    technologies: [".NET Standard", "C#", "Reflection"]
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  
  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of .NET and Azure projects, including open-source contributions, 
            NuGet packages, and client work.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-10"
        >
          <Tabs defaultValue="All Projects" className="justify-center flex">
            <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              {projectCategories.map((category) => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="px-4 py-2 rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </main>
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Projects;
