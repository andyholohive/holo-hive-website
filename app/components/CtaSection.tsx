'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  secondary?: boolean;
  inView: boolean;
}

export default function CtaSection({
  title,
  subtitle,
  buttonText,
  buttonHref,
  secondary = false,
  inView
}: CtaSectionProps) {
  const bgClass = secondary 
    ? "bg-gradient-to-t from-[#111115] to-[#0a0a0b]" 
    : "bg-gradient-to-t from-[#0a0a0b] to-[#111115]";

  return (
    <section className={`py-20 ${bgClass} relative`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#3e8692]/5 to-transparent"></div>
      <div className="container-main text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p 
            className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Link href={buttonHref} className="btn-primary text-lg px-8 py-4">
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}