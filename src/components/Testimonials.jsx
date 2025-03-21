import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimationControls, useMotionValue, useTransform } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    { 
      id: 1, 
      name: "Priyansh Manglik", 
      role: "Designer", 
      text: "Their all the products are amazing and easy to use.", 
      rating: 5, 
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=male1" 
    },
    { 
      id: 2, 
      name: "Sarthak Bansal", 
      role: "Developer", 
      text: "I love the simplicity.", 
      rating: 5, 
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=male2" 
    },
    { 
      id: 3, 
      name: "Vinayak Bhardwaj", 
      role: "CEO", 
      text: "Great for our team.", 
      rating: 5, 
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=male3" 
    },
    { 
      id: 4, 
      name: "Shivanand Prajapati", 
      role: "Manager", 
      text: "Super efficient!", 
      rating: 5, 
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=female1" 
    },
    { 
      id: 5, 
      name: "Sachin Chaubey", 
      role: "Founder", 
      text: "Highly recommended!", 
      rating: 5, 
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=male4" 
    }
  ];

// Create a seamless loop by repeating the array multiple times
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function TestimonialCarousel() {
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: ["0%", "-40%"],
        transition: { repeat: Infinity, duration: 45, ease: "linear" },
      });
    }
  }, [isHovered, controls]);

 

  return (
    <div className="py-32">
     <div className="container">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            
            <h2 className="text-3xl font-medium md:text-5xl">
              Our Client Reviews
            </h2>

         
          </div>
        </div>
        </div>
    <div className="relative w-full overflow-hidden py-10">
      
      <motion.div
        className="flex gap-4"
        animate={controls}
        style={{ x, width: "max-content" }}
      >
        {infiniteTestimonials.map((t, i) => (
          <Card key={i} className="w-[300px] md:w-[320px] lg:w-[350px] p-4">
            <CardContent className="flex flex-col items-center text-center">
            <div className="w-20 h-20 overflow-hidden rounded-full bg-gray-200">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
            </div>
              <div className="flex gap-1 text-yellow-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <h3 className="font-bold">{t.name}</h3>
              
              <p className="text-muted-foreground md:max-w-2xl italic">"{t.text}"</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
    </div>
  );
}