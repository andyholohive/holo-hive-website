'use client';

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
  inView: boolean;
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function StatsGrid({ stats, inView }: StatsGridProps) {
  return (
    <motion.div 
      className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      variants={staggerContainer}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={stat.label}
          className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-800/50"
          variants={fadeInUp}
        >
          <div className="text-4xl font-bold text-[#3e8692] mb-2">{stat.value}</div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}