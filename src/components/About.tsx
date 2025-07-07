import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionizing Healthcare Access
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to make comprehensive health monitoring accessible to everyone, 
            especially in remote and underserved communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Health First</h3>
            <p className="text-gray-600">
              Prioritizing patient wellbeing through continuous, non-invasive monitoring of vital signs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessible Care</h3>
            <p className="text-gray-600">
              Making advanced healthcare monitoring affordable and available to communities worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:col-span-2 lg:col-span-1"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
            <p className="text-gray-600">
              Connecting patients and healthcare providers across distances through innovative technology.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Challenge We're Solving</h3>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg">
              Healthcare accessibility remains a critical challenge, especially in remote areas where 
              specialist care is limited. Traditional monitoring devices are expensive, bulky, and 
              often require frequent hospital visits.
            </p>
            <p className="text-lg">
              Healthily addresses this gap by providing an affordable, comprehensive wearable solution 
              that monitors multiple vital signs continuously. Our device enables healthcare providers 
              to monitor patients remotely, reducing costs and improving outcomes.
            </p>
            <p className="text-lg">
              With features like solar charging, mesh connectivity, and non-invasive monitoring, 
              we're making advanced healthcare technology accessible to everyone, regardless of 
              their location or economic status.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;