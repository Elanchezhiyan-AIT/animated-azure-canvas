
export interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}

export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const response = await fetch('/src/data/testimonials.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: TestimonialsData = await response.json();
    return data.testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

export const addTestimonial = async (testimonial: Omit<Testimonial, 'id'>): Promise<boolean> => {
  try {
    // In a real app, this would make an API call to add the testimonial
    console.log("Adding testimonial:", testimonial);
    // For now, we'll just return true to simulate success
    return true;
  } catch (error) {
    console.error("Error adding testimonial:", error);
    return false;
  }
};
