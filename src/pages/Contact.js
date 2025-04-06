import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import ContactInfo from '../components/ContactInfo'; // You'll need to create this component
import MapSection from '../components/MapSection'; // You'll need to create this component

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section for Contact Page */}
      <section className="relative h-96 flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Get in touch for inquiries, estimates, or to discuss your project
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <ContactInfo />

      {/* Main Contact Form */}
      <Contact expanded={true} /> {/* Pass expanded prop to show full contact form */}

      {/* Map Section */}
      <MapSection />
    </motion.main>
  );
}