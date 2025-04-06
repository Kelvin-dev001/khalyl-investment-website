import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import testimonialsData from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => 
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => 
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about our work
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 sm:p-12 shadow-md relative overflow-hidden">
            {/* Floating decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full"></div>
            
            <Quote className="text-primary opacity-20 w-12 h-12 absolute top-4 left-4" />
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
              >
                <p className="text-lg sm:text-xl italic text-gray-700 mb-8">
                  "{testimonialsData[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <motion.img
                    src={testimonialsData[currentIndex].avatar}
                    alt={testimonialsData[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  <h4 className="font-bold text-lg">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonialsData[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-primary" size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-primary" size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}