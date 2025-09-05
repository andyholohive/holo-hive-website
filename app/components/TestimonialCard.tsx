'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  index?: number;
  inView: boolean;
}

export default function TestimonialCard({
  quote,
  author,
  title,
  company,
  index = 0,
  inView
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-800/50"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <blockquote className="text-gray-300 mb-6 text-lg leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-[#3e8692] to-[#357a85] rounded-full flex items-center justify-center mr-4">
          <span className="text-white font-semibold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <div className="text-white font-semibold">{author}</div>
          <div className="text-gray-400 text-sm">{title}</div>
          <div className="text-[#3e8692] text-sm font-medium">{company}</div>
        </div>
      </div>
    </motion.div>
  );
}