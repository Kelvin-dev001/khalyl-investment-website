import { motion } from 'framer-motion';

const categories = [
  {
    name: "Residential",
    description: "Homes, apartments, and private residences",
    icon: "🏠"
  },
  {
    name: "Commercial",
    description: "Offices, retail spaces, and business facilities",
    icon: "🏢"
  },
  {
    name: "Industrial",
    description: "Warehouses, factories, and production facilities",
    icon: "🏭"
  }
];

export default function ProjectCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold mb-2">Project Categories</h2>
          <p className="text-gray-600">Explore our work by project type</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}