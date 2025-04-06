import { motion } from 'framer-motion';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import TeamSection from '../components/TeamSection'; // You'll need to create this component
import StatsSection from '../components/StatsSection'; // You'll need to create this component

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section for About Page */}
      <section className="relative h-96 flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About <span className="text-primary">Our Company</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Learn more about our history, values, and the team behind Khalyl Investment Limited
          </motion.p>
        </div>
      </section>

      {/* Main About Content */}
      <About expanded={true} /> {/* Pass expanded prop to show more content */}

      {/* Team Section */}
      <TeamSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <Testimonials />
    </motion.main>
  );
}