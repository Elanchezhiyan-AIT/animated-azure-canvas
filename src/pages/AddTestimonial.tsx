
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { addTestimonial } from "../data/testimonials";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddTestimonial = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    text: "",
    author: "",
    position: "",
    company: "",
    avatar: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await addTestimonial(formData);
      if (success) {
        toast({
          title: "Success!",
          description: "Testimonial added successfully.",
        });
        setFormData({
          text: "",
          author: "",
          position: "",
          company: "",
          avatar: ""
        });
      } else {
        throw new Error("Failed to add testimonial");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add testimonial. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Add New Testimonial</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="text">Testimonial Text</Label>
                  <Textarea
                    id="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Enter the testimonial text..."
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="author">Author Name</Label>
                  <Input
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Enter author name"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Enter job position"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="avatar">Avatar URL (Optional)</Label>
                  <Input
                    id="avatar"
                    name="avatar"
                    value={formData.avatar}
                    onChange={handleChange}
                    placeholder="Enter avatar image URL"
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Adding..."
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Add Testimonial
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddTestimonial;
