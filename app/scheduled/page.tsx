'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ScheduledPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-[#0a0a0b] relative overflow-hidden">
        {/* Horizontal lines texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        }}></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Image
            src="/logo.png"
            alt=""
            width={800}
            height={800}
            className="blur-2xl"
          />
        </div>
        <div className="container-main relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Success icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-6 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                You're All Set!
              </h1>
            </motion.div>

            {/* Video Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full text-[#3e8692] text-sm font-medium uppercase tracking-wider mb-4">
                  Watch Before Your Call
                </span>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Please watch this short video to get the most out of our conversation. It'll help you prepare and make sure we can dive right into what matters for your project.
                </p>
              </div>

              {/* Video Placeholder */}
              <div className="relative w-full max-w-xl mx-auto">
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-[#3e8692]/30 shadow-2xl">
                  {/* Video placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-[#3e8692]/20 rounded-full flex items-center justify-center border-2 border-[#3e8692] hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-10 h-10 text-[#3e8692]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-lg">Watch This Video</p>
                      <p className="text-gray-500 text-sm mt-2">5 minutes</p>
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3e8692]/10 via-transparent to-[#3e8692]/5"></div>
                </div>
              </div>
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
    </main>
  );
}
