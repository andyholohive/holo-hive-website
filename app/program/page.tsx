'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function ProgramPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      {/* Hero Section with Video */}
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                The Amplification Program
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Watch how we help funded Web3 products achieve predictable growth.
              </p>
            </motion.div>

            {/* Video Placeholder */}
            <motion.div
              className="relative w-full max-w-xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-[#3e8692]/30 shadow-2xl">
                {/* Video placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-[#3e8692]/20 rounded-full flex items-center justify-center border-2 border-[#3e8692] hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-10 h-10 text-[#3e8692]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">Watch Our Introduction</p>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3e8692]/10 via-transparent to-[#3e8692]/5"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Scrolling Logos */}
      <section className="py-16 bg-[#050506] border-t border-[#3e8692]/20 relative overflow-hidden">
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}></div>
        <div className="container-main">
          <motion.p
            className="text-center text-base text-gray-500 uppercase tracking-wider mb-8 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Trusted by
          </motion.p>
          <div className="relative overflow-hidden">
            {/* Fade gradients on left and right */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050506] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050506] to-transparent z-10 pointer-events-none"></div>

            <div className="inline-flex w-max animate-infinite-scroll gap-20">
              <div className="flex gap-20">
                {[
                  { name: 'Doodles', file: 'doodles.png' },
                  { name: 'Ledger', file: 'ledger.png' },
                  { name: 'Maplestory', file: 'maplestory.png' },
                  { name: 'Zetachain', file: 'zetachain.png' },
                  { name: 'Pixelmon / MON', file: 'pixelmon-mon.png' },
                  { name: 'AI Arena', file: 'ai-arena.png' },
                  { name: 'Fableborne', file: 'fableborne.png' },
                  { name: 'Binance', file: 'binance.png' },
                  { name: 'Solana', file: 'solana.png' },
                  { name: 'Avalanche', file: 'avalanche.png' },
                  { name: 'OKX', file: 'okx.png' },
                  { name: 'Bybit', file: 'bybit.png' },
                  { name: 'Magic Eden', file: 'magic-eden.png' },
                  { name: 'NRN', file: 'nrn-agents.png' }
                ].map((logo, index) => {
                  const needsGrayscale = ['Doodles', 'Fableborne', 'Avalanche', 'Zetachain'].includes(logo.name);
                  const isSquare = ['Avalanche', 'Binance', 'Doodles', 'Zetachain'].includes(logo.name);

                  return (
                    <div key={index} className="logo-item flex flex-col items-center">
                      <div className="h-16 flex items-center justify-center mb-4">
                        <Image
                          src={`/logos/${logo.file}`}
                          alt={logo.name}
                          width={200}
                          height={80}
                          className={`object-contain opacity-70 ${
                            needsGrayscale ? 'filter grayscale brightness-90' : 'filter brightness-0 invert'
                          } ${
                            isSquare ? 'h-14 w-14' : 'h-12 w-auto'
                          }`}
                        />
                      </div>
                      <div className="h-5 flex items-center">
                        <span className="text-gray-400 text-sm font-bold whitespace-nowrap">{logo.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-12">
                {[
                  { name: 'Doodles', file: 'doodles.png' },
                  { name: 'Ledger', file: 'ledger.png' },
                  { name: 'Maplestory', file: 'maplestory.png' },
                  { name: 'Zetachain', file: 'zetachain.png' },
                  { name: 'Pixelmon / MON', file: 'pixelmon-mon.png' },
                  { name: 'AI Arena', file: 'ai-arena.png' },
                  { name: 'Fableborne', file: 'fableborne.png' },
                  { name: 'Binance', file: 'binance.png' },
                  { name: 'Solana', file: 'solana.png' },
                  { name: 'Avalanche', file: 'avalanche.png' },
                  { name: 'OKX', file: 'okx.png' },
                  { name: 'Bybit', file: 'bybit.png' },
                  { name: 'Magic Eden', file: 'magic-eden.png' },
                  { name: 'NRN', file: 'nrn-agents.png' }
                ].map((logo, index) => {
                  const needsGrayscale = ['Doodles', 'Fableborne', 'Avalanche', 'Zetachain'].includes(logo.name);
                  const isSquare = ['Avalanche', 'Binance', 'Doodles', 'Zetachain'].includes(logo.name);

                  return (
                    <div key={index} className="logo-item flex flex-col items-center">
                      <div className="h-16 flex items-center justify-center mb-4">
                        <Image
                          src={`/logos/${logo.file}`}
                          alt={logo.name}
                          width={200}
                          height={80}
                          className={`object-contain opacity-70 ${
                            needsGrayscale ? 'filter grayscale brightness-90' : 'filter brightness-0 invert'
                          } ${
                            isSquare ? 'h-14 w-14' : 'h-12 w-auto'
                          }`}
                        />
                      </div>
                      <div className="h-5 flex items-center">
                        <span className="text-gray-400 text-sm font-bold whitespace-nowrap">{logo.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 bg-[#111115] relative overflow-hidden">
        {/* Hexagon pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(62,134,146,0.4) 1px, transparent 1px), radial-gradient(circle at center, rgba(62,134,146,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}></div>

        <div className="container-main relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full text-[#3e8692] text-sm font-medium uppercase tracking-wider mb-6">
                Book Your Call
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                See If You Qualify
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Schedule a 30-minute call to discuss your project. We'll help you understand if our program is the right fit.
              </p>
            </motion.div>

            {/* Calendly Embed */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/yanolima/connect?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=3e8692"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </motion.div>

            {/* Test Button */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/scheduled"
                className="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300 border border-gray-700"
              >
                Schedule Test
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-[#111115] relative overflow-hidden">
        {/* Vertical lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(62,134,146,0.2) 60px, rgba(62,134,146,0.2) 61px)',
        }}></div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What to Expect on Your Call
              </h2>
              <p className="text-xl text-gray-300">
                Our qualification call is designed to understand your needs and determine if we're the right fit.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Understand Your Goals",
                  description: "We'll discuss your upcoming milestones, target audience, and growth objectives.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                {
                  number: "02",
                  title: "Review Your Position",
                  description: "We'll assess your current market presence and identify opportunities for amplification.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                },
                {
                  number: "03",
                  title: "Map Your Strategy",
                  description: "If we're a fit, we'll outline a custom roadmap for your amplification program.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  )
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-[#3e8692]/50 transition-all duration-500 h-full">
                    {/* Number badge */}
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3e8692] to-[#357a85] rounded-xl flex items-center justify-center text-white font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 bg-[#3e8692]/10 rounded-lg flex items-center justify-center text-[#3e8692] mb-4">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-400 mb-6">
                Ready to get started?
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center text-[#3e8692] hover:text-[#357a85] font-semibold transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Schedule Your Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#111115] relative overflow-hidden">
        {/* Hexagon pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(62,134,146,0.4) 1px, transparent 1px), radial-gradient(circle at center, rgba(62,134,146,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}></div>
        {/* Vertical lines */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(62,134,146,0.2) 60px, rgba(62,134,146,0.2) 61px)',
        }}></div>

        <div className="container-main relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our 6-week amplification system turns attention into users. We don't chase vanity metrics—we build momentum that compounds.
              </p>
            </motion.div>

            <div className="relative grid md:grid-cols-3 gap-8 mb-12">
              {/* Connecting lines between cards - BEHIND cards with z-0 */}
              <motion.div
                className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center justify-between mx-auto" style={{ width: 'calc(100% - 200px)', marginLeft: '100px' }}>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#3e8692]/60 via-[#3e8692]/40 to-[#3e8692]/60 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#3e8692] rounded-full"></div>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#3e8692]/60 via-[#3e8692]/40 to-[#3e8692]/60 relative ml-8">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#3e8692] rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {[
                {
                  step: "01",
                  title: "Start small, win fast",
                  description: "Set up your system. Get early lift in reach and sign-ups.",
                  badgeBg: "from-cyan-500 to-cyan-700",
                  iconBg: "from-cyan-500 to-cyan-700",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  step: "02",
                  title: "Scale what works",
                  description: "Add trusted creators. Turn interest into users.",
                  badgeBg: "from-orange-500 to-orange-700",
                  iconBg: "from-orange-500 to-orange-700",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                },
                {
                  step: "03",
                  title: "Grow long-term",
                  description: "Stack wins with partner waves. Results that stick.",
                  badgeBg: "from-fuchsia-500 to-fuchsia-700",
                  iconBg: "from-fuchsia-500 to-fuchsia-700",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group z-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full z-20 min-h-[280px] flex flex-col">
                    {/* Animated gradient background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${
                          item.badgeBg === 'from-cyan-500 to-cyan-700' ? 'rgba(6, 182, 212, 0.08)' :
                          item.badgeBg === 'from-orange-500 to-orange-700' ? 'rgba(249, 115, 22, 0.08)' :
                          'rgba(217, 70, 239, 0.08)'
                        } 0%, transparent 70%)`
                      }}
                    ></div>

                    {/* Diagonal accent line */}
                    <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                      <div
                        className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${item.iconBg} opacity-10 rotate-45 transform group-hover:scale-150 transition-transform duration-700`}
                      ></div>
                    </div>

                    {/* Decorative dots pattern */}
                    <div className="absolute bottom-4 left-4 flex gap-1 opacity-30">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-br ${item.iconBg}`}></div>
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-br ${item.iconBg}`}></div>
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-br ${item.iconBg}`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative p-8 flex-1 flex flex-col">
                      {/* Number badge */}
                      <div className="mb-6">
                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${item.badgeBg} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <span className="text-sm font-bold text-white">{item.step}</span>
                        </div>
                      </div>

                      {/* Title and description */}
                      <div className="flex-1">
                        <h3 className="text-white font-extrabold text-2xl leading-tight tracking-tight group-hover:text-gray-100 transition-colors duration-300 mb-4">
                          {item.title}
                        </h3>
                        {/* <p className="text-gray-400 text-base leading-relaxed">{item.description}</p> */}
                      </div>

                      {/* Interactive hint */}
                      <div className="mt-auto pt-6">
                        <div className={`h-1 w-16 bg-gradient-to-r ${item.badgeBg} rounded-full group-hover:w-24 transition-all duration-500`}></div>
                      </div>
                    </div>

                    {/* Vertical accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.badgeBg} transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/program" className="btn-primary inline-block">
                <span>See if you qualify</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-[#111115] to-[#0a0a0b] relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(62,134,146,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(62,134,146,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>

        <div className="container-main relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                What Founders Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real feedback from founders who've grown their Web3 projects with us.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-6 gap-6 auto-rows-fr">
              {[
                {
                  quote: "We went from 2K followers to 15K real users in 6 weeks. The quality of engagement is what blew us away—these people actually use the product.",
                  author: "Sarah Chen",
                  role: "Co-Founder",
                  company: "DeFi Protocol",
                  avatar: "https://i.pravatar.cc/150?img=5",
                  gradient: "from-cyan-500 to-cyan-700",
                  span: "md:col-span-4"
                },
                {
                  quote: "Finally, a team that understands the difference between hype and growth. Our retention metrics improved 3x because we attracted the right people.",
                  author: "Marcus Rodriguez",
                  role: "CEO",
                  company: "NFT Gaming Platform",
                  avatar: "https://i.pravatar.cc/150?img=12",
                  gradient: "from-orange-500 to-orange-700",
                  span: "md:col-span-2"
                },
                {
                  quote: "The structured approach gave us predictable results. No more guessing what works. We knew exactly what to expect each week.",
                  author: "Alex Kim",
                  role: "Founder",
                  company: "Web3 Infrastructure",
                  avatar: "https://i.pravatar.cc/150?img=8",
                  gradient: "from-fuchsia-500 to-fuchsia-700",
                  span: "md:col-span-2"
                },
                {
                  quote: "Our token launch was the most successful in our vertical. The community they built actually believed in the product, not just the airdrop.",
                  author: "Jessica Park",
                  role: "CMO",
                  company: "Layer 1 Blockchain",
                  avatar: "https://i.pravatar.cc/150?img=9",
                  gradient: "from-green-500 to-green-700",
                  span: "md:col-span-4"
                },
                {
                  quote: "We tried three agencies before Holo Hive. This is the only team that delivered real users who converted. ROI was 4x our previous campaigns.",
                  author: "David Miller",
                  role: "Co-Founder",
                  company: "GameFi Platform",
                  avatar: "https://i.pravatar.cc/150?img=14",
                  gradient: "from-blue-500 to-blue-700",
                  span: "md:col-span-3"
                },
                {
                  quote: "The transparency was refreshing. Weekly reports showed exactly what was working and what wasn't. No smoke and mirrors, just results.",
                  author: "Emma Thompson",
                  role: "Head of Growth",
                  company: "DAO Governance Tool",
                  avatar: "https://i.pravatar.cc/150?img=10",
                  gradient: "from-pink-500 to-pink-700",
                  span: "md:col-span-3"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`relative group ${testimonial.span}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-[#3e8692]/50 transition-all duration-500 h-full flex flex-col group-hover:shadow-2xl group-hover:shadow-[#3e8692]/10">
                    {/* Quote icon */}
                    <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Decorative corner accent */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${testimonial.gradient} opacity-5 rounded-bl-full`}></div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3e8692]/0 to-[#3e8692]/0 group-hover:from-[#3e8692]/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>

                    {/* Quote */}
                    <div className="relative flex-1 mb-6">
                      <p className="text-gray-300 text-lg leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Author info */}
                    <div className="relative">
                      <div className={`h-1 w-12 bg-gradient-to-r ${testimonial.gradient} rounded-full mb-4`}></div>
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover border-2 border-gray-700 shadow-lg group-hover:scale-105 transition-transform"
                        />
                        <div>
                          <p className="text-white font-bold text-base">{testimonial.author}</p>
                          <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
