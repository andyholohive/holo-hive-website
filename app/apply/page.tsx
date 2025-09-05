'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ApplyPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0b] to-[#111115]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-12">
        <div className="container-main text-center">
          <motion.div
            className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[#3e8692] font-medium text-sm">START HERE</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Apply to the Amplification Program
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Tell us about your project and upcoming milestone. We&apos;ll get back to you within 24 hours.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-2"></div>
              <span>24h Response Time</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-2"></div>
              <span>Funded Teams Only</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-2"></div>
              <span>Free Consultation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section ref={formRef} className="pb-20">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-800/50"
              initial={{ opacity: 0, y: 50 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-white">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3e8692]/50 focus:border-[#3e8692]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3 text-white">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3e8692]/50 focus:border-[#3e8692]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-white">Telegram Handle</label>
                    <input
                      type="text"
                      placeholder="@username"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3e8692]/50 focus:border-[#3e8692]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3 text-white">Company/Project Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3e8692]/50 focus:border-[#3e8692]"
                      placeholder="Your project name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Website URL</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3e8692]/50 focus:border-[#3e8692]"
                    placeholder="https://yourproject.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Funding Status *</label>
                  <select
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3e8692]/50 focus:border-[#3e8692]"
                  >
                    <option value="">Select your funding stage...</option>
                    <option value="seed">Seed Stage ($100K - $2M)</option>
                    <option value="series-a">Series A ($2M - $15M)</option>
                    <option value="series-b">Series B+ ($15M+)</option>
                    <option value="bootstrapped">Bootstrapped (Profitable)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Tell us about your upcoming milestone *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3e8692]/50 focus:border-[#3e8692] resize-none"
                    placeholder="Describe your upcoming product launch, funding round, major announcement, or growth milestone. Be specific about timing and goals."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3 text-white">Current Community Size (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3e8692]/50 focus:border-[#3e8692]"
                    placeholder="e.g., 5K Discord, 10K Twitter, 2K Telegram"
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full btn-primary text-lg py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SUBMIT APPLICATION
                </motion.button>
              </form>
              
              <div className="mt-8 p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                <h3 className="text-white font-semibold mb-3">What happens next?</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#3e8692]/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#3e8692] text-xs font-bold">1</span>
                    </div>
                    <span>We review your application within 24 hours</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#3e8692]/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#3e8692] text-xs font-bold">2</span>
                    </div>
                    <span>Qualified teams get a free 30-minute strategy consultation</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#3e8692]/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-[#3e8692] text-xs font-bold">3</span>
                    </div>
                    <span>We present a custom growth plan tailored to your milestone</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs text-gray-400 text-center">
                We only work with funded teams we believe we can help. Results vary. 
                Nothing here is financial advice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0a0a0b] border-t border-gray-800">
        <div className="container-main">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Holo Hive"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-semibold text-white">Holo Hive</span>
              </div>
              <p className="text-sm text-gray-400">The Market Presence Partner™</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/program" className="text-gray-400 hover:text-white transition-colors">Program</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="text-gray-400">© 2024 Holo Hive. All rights reserved.</p>
            <p className="mt-2 text-gray-500">Results vary. Nothing here is financial advice. We only work with funded teams we believe we can help.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}