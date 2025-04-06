import { motion } from 'framer-motion';
import Services from '../components/Services';
import ServiceProcess from '../components/ServiceProcess'; // You'll need to create this component
import CtaSection from '../components/CtaSection'; // You'll need to create this component

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section for Services Page */}
      <section className="relative h-96 flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive construction and renovation solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Main Services Content */}
      <Services expanded={true} /> {/* Pass expanded prop to show all services */}

      {/* Service Process */}
      <ServiceProcess />

      {/* Call to Action */}
      <CtaSection 
        title="Ready to Start Your Project?"
        description="Contact us today for a free consultation and estimate."
        buttonText="Get a Free Estimate"
        buttonLink="#contact"
      />
    </motion.main>
  );
}