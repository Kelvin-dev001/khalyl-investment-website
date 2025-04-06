// ... (previous imports remain the same)
import { motion } from 'framer-motion';
export default function About({ expanded = false }) {
  return (
    <section id="about" className={`py-20 ${expanded ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* About Content */}
          <motion.div
            // ... (previous motion props remain the same)
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {expanded ? 'Our Story' : 'About'} <span className="text-primary">Khalyl Investment</span>
            </h2>
            
            {expanded ? (
              <>
                <p className="text-lg mb-4 text-gray-600">
                  Khalyl Investment Limited was founded in 2010 with a vision to revolutionize the construction industry in Kenya by combining innovative design with practical solutions.
                </p>
                <p className="text-lg mb-4 text-gray-600">
                  What started as a small team of passionate builders has grown into a full-service construction company known for quality workmanship and exceptional customer service.
                </p>
                <p className="text-lg mb-6 text-gray-600">
                  Today, we serve both residential and commercial clients across the country, delivering projects that stand the test of time.
                </p>
              </>
            ) : (
              <>
                <p className="text-lg mb-6 text-gray-600">
                  Khalyl Investment Limited is a premier construction and renovation company dedicated to delivering exceptional quality and craftsmanship in every project we undertake.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                  Founded with a vision to transform spaces into functional and beautiful environments, we combine innovative design with practical solutions to meet our clients' diverse needs.
                </p>
              </>
            )}
            
            {!expanded && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/about"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Learn More About Us
              </motion.a>
            )}
          </motion.div>

          {/* Features Grid */}
          {/* ... (rest of the component remains the same) */}
        </div>
      </div>
    </section>
  );
}