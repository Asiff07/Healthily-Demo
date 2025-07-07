import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Droplets, 
  Sun, 
  Zap, 
  Shield, 
  Wifi 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: 'In-wrist BP',
      description: 'Continuous blood pressure monitoring without the need for external cuffs, providing real-time cardiovascular insights.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Droplets,
      title: 'Non-invasive Glucose',
      description: 'Revolutionary glucose monitoring technology that eliminates the need for finger pricks and blood samples.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sun,
      title: 'Solar Charging',
      description: 'Sustainable power solution with solar charging capabilities, ensuring continuous operation even in remote areas.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Detachable ECG Probes',
      description: 'Advanced ECG monitoring with detachable probes for detailed cardiac rhythm analysis and heart health tracking.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Fall Detection',
      description: 'AI-powered fall detection system that automatically alerts emergency contacts and healthcare providers.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Wifi,
      title: 'BLE Mesh Connectivity',
      description: 'Bluetooth Low Energy mesh network for reliable data transmission and extended battery life.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology packed into a single wearable device, 
            designed to monitor your health comprehensively and continuously.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;