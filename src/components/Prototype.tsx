import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Prototype = () => {
  return (
    <section id="prototype" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Prototype Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to reality - see the evolution of our Healthily wearable device 
            through our prototype development stages.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="relative aspect-video bg-gray-900">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/images/video-thumbnail.jpg"
              >
                <source src="/videos/Healthily2ndPrototype.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Healthily Prototype v2.0 Demo
              </h3>
              <p className="text-gray-600">
                Complete demonstration of multi-vital monitoring capabilities, 
                including BP, glucose, ECG, and fall detection features.
              </p>
            </div>
          </motion.div>

          {/* Prototype Images Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* First Prototype */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/FIRSTP.jpg"
                alt="First Prototype"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">First Prototype</h4>
                <p className="text-gray-600">
                  Initial concept and basic functionality implementation with core vital sign monitoring capabilities.
                </p>
              </div>
            </div>

            {/* Second Prototype */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/SECONDP.jpg"
                alt="Second Prototype"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Second Prototype</h4>
                <p className="text-gray-600">
                  Enhanced version with improved design, additional sensors, and refined user interface for better performance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Development Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Concept & Design</h4>
              <p className="text-gray-600 text-sm">
                Initial research, user needs analysis, and technical feasibility studies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-sky-600 font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Development & Testing</h4>
              <p className="text-gray-600 text-sm">
                Iterative prototyping with continuous testing and refinement of features.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Validation & Optimization</h4>
              <p className="text-gray-600 text-sm">
                Clinical validation and performance optimization for real-world deployment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prototype;
