import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in learning more about Healthily or partnering with us?
            We'd love to hear from you and discuss how we can work together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 text-lg">
                Whether you're a healthcare provider, investor, or potential partner,
                we're excited to explore how Healthily can make a difference in your community.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-6 p-6 bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Email</h4>
                  <ul className="text-gray-600 text-lg space-y-1">
                    <li>sumanto.roy@stu.adamasuniversity.ac.in</li>
                    <li>anurag1.biswas@stu.adamasuniversity.ac.in</li>
                    <li>soumyadeep.das@stu.adamasuniversity.ac.in</li>
                    <li>sk.asifahmed@stu.adamasuniversity.ac.in</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-6 p-6 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-sky-600" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 text-lg">+91 8617223944</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-6 p-6 bg-gradient-to-r from-emerald-50 to-indigo-50 rounded-2xl"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 text-lg">Kolkata, West Bengal</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;