import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import projectsData from '../data/projects';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group overflow-hidden rounded-xl shadow-lg"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? 'brightness(0.7)' : 'brightness(0.9)'
          }}
          transition={{ duration: 0.5 }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 p-6 text-white"
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
        >
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p>{project.location}</p>
        </motion.div>
        
        <motion.div
          className="absolute top-4 right-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : -20,
            opacity: isHovered ? 1 : 0
          }}
        >
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
            {project.category}
          </span>
        </motion.div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <button 
            className="absolute inset-0 w-full h-full opacity-0 focus:opacity-100"
            aria-label={`View ${project.title} details`}
          />
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-h-[80vh] overflow-y-auto"
            >
              {/* Project details modal content */}
              <div className="h-64 sm:h-96 bg-gray-100 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                  <span className="text-gray-600">
                    {project.location}
                  </span>
                  <span className="text-gray-600">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6">{project.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {project.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                
                {project.images.length > 1 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-bold mb-4">Gallery</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {project.images.slice(1).map((image, i) => (
                        <motion.img
                          key={i}
                          src={image}
                          alt={`${project.title} - ${i + 1}`}
                          className="w-full h-32 object-cover rounded-lg cursor-pointer hover:shadow-md transition-all"
                          whileHover={{ scale: 1.02 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section id="projects" className="py-20 bg-gray-50 relative">
      {/* Floating construction elements */}
      <motion.img
        src="/assets/images/crane.png"
        alt="Construction crane"
        className="absolute top-20 left-10 w-24 opacity-10 lg:opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 2, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {['all', 'residential', 'commercial', 'industrial'].map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white hover:bg-gray-100 text-gray-700 shadow-sm'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {projectsData
              .filter(p => activeFilter === 'all' || p.category === activeFilter)
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}