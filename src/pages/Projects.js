import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import ProjectCategories from '../components/ProjectCategories'; // You'll need to create this component
import CtaSection from '../components/CtaSection';

export default function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section for Projects Page */}
      <section className="relative h-96 flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-primary">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Explore our portfolio of completed projects showcasing our expertise
          </motion.p>
        </div>
      </section>

      {/* Project Categories */}
      <ProjectCategories />

      {/* Main Projects Content */}
      <Projects expanded={true} /> {/* Pass expanded prop to show all projects */}

      {/* Call to Action */}
      <CtaSection 
        title="Have a Project in Mind?"
        description="Let's discuss how we can bring your vision to life."
        buttonText="Contact Us"
        buttonLink="#contact"
      />
    </motion.main>
  );
}