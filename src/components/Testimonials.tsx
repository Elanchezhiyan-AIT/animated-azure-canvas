
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Working with this developer was a fantastic experience. Their deep knowledge of Azure and .NET helped us create a robust enterprise solution that exceeded our expectations.",
    author: "Alex Johnson",
    position: "CTO",
    company: "TechSolutions Inc.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    id: 2,
    text: "I've collaborated with many developers, but few have shown such attention to detail and code quality. Their work on our financial platform was exceptional, delivering both performance and reliability.",
    author: "Emma Williams",
    position: "Lead Engineer",
    company: "FinPlus Systems",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: 3,
    text: "Their expertise in React and .NET integration saved our project from significant delays. Not only did they build a beautiful frontend, but they ensured seamless data flow with our backend services.",
    author: "Michael Chen",
    position: "Product Manager",
    company: "DataViz Corp",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6 pb-4 px-6 flex flex-col h-full">
                  <div className="mb-4 text-blue-500 dark:text-blue-400">
                    <Quote size={30} />
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 italic mb-6 flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center mt-2">
                    {testimonial.avatar && (
                      <div className="mr-4">
                        <motion.img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="h-12 w-12 rounded-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
