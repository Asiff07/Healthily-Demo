import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Hack-O-NiT 2025 – 2nd Place',
      subtitle: 'Narula Institute of Technology',
      description: 'Recognized for innovative healthcare technology solution',
      image: '/images/HACKONIT.jpg',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Solvathon 2025 FITT – Top 10 Finalist',
      subtitle: 'Apollo Research Institutes, IIT Delhi • Feb 2025',
      description: 'Selected amongst top 10 finalists nationally in healthcare innovation challenge in collaboration with leading research institutes',
      image: '/images/SOLVATHON.jpg',
      icon: Award,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Adinova – 1st Position',
      subtitle: 'Intercollege Model Making Competition 2025, Adamas University • March 2025',
      description: 'Excellence in medical device prototype development and presentation',
      image: '/images/ADINOVA.jpg',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition from industry leaders and innovation competitions 
            validates our commitment to revolutionizing healthcare technology.
          </p>
        </motion.div>

        {/* Grid Layout for 3 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image section */}
              <div className="h-48 relative rounded-t-2xl overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center shadow-md`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-indigo-600 font-medium mb-3 text-sm">
                  {achievement.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
