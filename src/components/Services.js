import { motion } from 'framer-motion';
import { useState } from 'react';
import servicesData from '../data/services';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="glass-card h-full border border-white/10 overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            animate={{
              opacity: isHovered ? 0.7 : 1
            }}
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-300 mb-4">{service.description}</p>
          
          <motion.div
            animate={{
              x: isHovered ? 5 : 0
            }}
            transition={{ type: "spring" }}
            className="flex flex-wrap gap-2"
          >
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hover shine effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)`
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
      background: url('/assets/images/khalyl-blueprint-pattern.svg');
background-size: 200px 200px;
opacity: 0.1;
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Our <span className="text-primary">Services</span>
            </h2>
            <motion.div
              className="absolute -bottom-1 left-0 h-2 bg-secondary/30 w-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        {/* Animated tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {['all', 'construction', 'renovation', 'interior'].map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData
            .filter(s => activeTab === 'all' || s.category === activeTab)
            .map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}