'use client';

import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  index?: number;
  inView: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function FeatureCard({ 
  title, 
  description, 
  icon,
  index = 0,
  inView 
}: FeatureCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800/50 hover:border-[#3e8692]/30 transition-colors"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      {icon && (
        <div className="w-12 h-12 bg-[#3e8692]/10 rounded-lg flex items-center justify-center mb-4">
          <span className="text-[#3e8692] text-xl">{icon}</span>
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}