import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div 
        style={{ y: yPos }}
        className="absolute inset-0 z-0"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/construction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      </motion.div>

      {/* Particle Background */}
      <div className="absolute inset-0 z-1">
        <ParticlesBackground />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Heading with Gradient Text */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Building <span className="text-primary">Kenya</span>,<br />
            <motion.span 
              className="text-gradient bg-gradient-to-r from-primary to-secondary"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              With Quality & Trust
            </motion.span>
          </motion.h1>

          {/* Subtle Description Animation */}
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Professional construction and renovation services in Mombasa, Kilifi, Malindi, Kwale and Nairobi Counties with unmatched quality and reliability.
          </motion.p>

          {/* Interactive Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 193, 7, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Get Free Estimate
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(33, 150, 243, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/254722502528"
              target="+254722502528"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              Chat on WhatsApp <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <p className="text-white mb-2">Scroll Down</p>
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Construction Elements Animation */}
     
    </section>
  );
}