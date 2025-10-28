'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const clientLogos = [
  { name: 'Sandbox', logo: '/logos/sandbox.svg', hasLogo: false },
  { name: 'Avalanche', logo: '/logos/avalanche.svg', hasLogo: false },
  { name: '0G', logo: '/logos/0g.svg', hasLogo: false },
  { name: 'Doodles', logo: '/logos/doodles.svg', hasLogo: false },
  { name: 'Zetachain', logo: '/logos/zetachain.svg', hasLogo: false },
  { name: 'MapleStory', logo: '/logos/maplestory.svg', hasLogo: false },
  { name: 'Ledger', logo: '/logos/ledger.svg', hasLogo: false },
  { name: 'CP Group', logo: '/logos/cp-group.svg', hasLogo: false },
  { name: 'Paradigm', logo: '/logos/paradigm.svg', hasLogo: false },
  { name: 'Mon Protocol', logo: '/logos/mon-protocol.svg', hasLogo: false },
  { name: 'Animoca', logo: '/logos/animoca.svg', hasLogo: false },
  { name: 'Azuki', logo: '/logos/azuki.svg', hasLogo: false },
  { name: 'NRN', logo: '/logos/nrn.svg', hasLogo: false },
  { name: 'Fableborne', logo: '/logos/fableborne.svg', hasLogo: false }
];

const testimonials = [
  {
    quote: "Holo Hive transformed our go-to-market strategy and delivered results beyond our expectations.",
    author: "Sarah Chen",
    title: "CEO, BlockTech Ventures",
    company: "Raised $25M Series A"
  },
  {
    quote: "The market presence expertise they brought was exactly what we needed to scale globally.",
    author: "Marcus Rodriguez", 
    title: "Co-Founder, DeFi Protocol",
    company: "$500M TVL Achieved"
  },
  {
    quote: "Working with Holo Hive gave us the credibility and positioning to attract tier-1 investors.",
    author: "Jennifer Park",
    title: "Founder, GameFi Studio",
    company: "Series B Funding"
  }
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const caseStudyRef = useRef(null);
  const testimonialRef = useRef(null);
  
  const caseStudyInView = useInView(caseStudyRef, { once: true, margin: "-100px" });
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      {/* Hero Section - NEW VERSION */}
      <section className="pt-48 pb-20 bg-gradient-to-b from-[#1a1a1f] via-[#1f1f25] to-[#1a1a1f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e8692]/5 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Image
            src="/logo.png"
            alt=""
            width={800}
            height={800}
            className="blur-2xl"
          />
        </div>
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Get thousands of new users in 6 weeks — without wasting money on empty hype.
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              We help funded Web3 products turn real attention into users and revenue. Simple system. Predictable results.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-[#3e8692]">100+</span>
                <span className="text-xs text-gray-400">products guided</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-[#3e8692]">300+</span>
                <span className="text-xs text-gray-400">operators advised</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-[#3e8692]">$30B+</span>
                <span className="text-xs text-gray-400">client FDV</span>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <Link href="/program" className="btn-primary">
                <span>See if you qualify</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Scrolling Logos */}
      <section className="py-12 bg-[#0a0a0b] border-t border-gray-800/50">
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
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0b] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0b] to-transparent z-10 pointer-events-none"></div>

            <div className="inline-flex w-max animate-infinite-scroll gap-16">
              <div className="flex gap-16">
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
                  { name: 'Magic Eden', file: 'magic-eden.png' }
                ].map((logo, index) => {
                  const needsGrayscale = ['Doodles', 'Fableborne', 'Avalanche', 'Zetachain'].includes(logo.name);
                  const isSquare = ['Avalanche', 'Binance', 'Doodles', 'Zetachain'].includes(logo.name);

                  return (
                    <div key={index} className="logo-item">
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
                  );
                })}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex gap-16">
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
                  { name: 'Magic Eden', file: 'magic-eden.png' }
                ].map((logo, index) => {
                  const needsGrayscale = ['Doodles', 'Fableborne', 'Avalanche', 'Zetachain'].includes(logo.name);
                  const isSquare = ['Avalanche', 'Binance', 'Doodles', 'Zetachain'].includes(logo.name);

                  return (
                    <div key={index} className="logo-item">
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - OLD VERSION (HIDDEN) */}
      {/*
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0a0a0b] via-[#111115] to-[#0a0a0b] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e8692]/5 to-transparent"></div>
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full text-[#3e8692] text-sm font-medium">
                The Market Presence Partner™
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Establish Trust.
              <br />
              <motion.span
                className="text-[#3e8692]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                Direct People.
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              We've helped campaigns worth $30B+ FDV turn milestones into market momentum.
              Trusted by top funds and exchanges.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              <Link href="/program" className="btn-primary">
                Explore the Amplification Program™
              </Link>
            </motion.div>

            <motion.div
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">
                  Trusted by leading teams in Web3
                </p>
                <p className="text-xs text-gray-500 font-normal">
                  $30B+ FDV portfolio
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center max-w-5xl mx-auto">
                {clientLogos.map((client, index) => (
                  <motion.div
                    key={client.name}
                    className="text-center opacity-60 hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.05, ease: "easeOut" }}
                  >
                    {client.hasLogo ? (
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={120}
                        height={40}
                        className="h-8 w-auto mx-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                      />
                    ) : (
                      <div className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        {client.name}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      */}

      {/* The Old Way Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0b] to-[#111115] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(62,134,146,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.05),transparent_50%)]"></div>

        <div className="container-main relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">(why most marketing flops)</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Old Way
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The old way is loud, not loved. You post more. You pay more. The right people still don't care.
                The feed moves on. Numbers look big. Users don't stick.
              </p>
            </motion.div>

            <div className="relative mb-12">
              {/* Connecting lines */}
              <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                <svg className="w-full h-full opacity-20" style={{ position: 'absolute' }}>
                  <line x1="50%" y1="0" x2="25%" y2="20%" stroke="#3e8692" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="50%" y1="0" x2="75%" y2="20%" stroke="#3e8692" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="25%" y1="40%" x2="25%" y2="60%" stroke="#3e8692" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="75%" y1="40%" x2="75%" y2="60%" stroke="#3e8692" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="25%" y1="80%" x2="50%" y2="100%" stroke="#3e8692" strokeWidth="1" strokeDasharray="4,4" />
                  <line x1="75%" y1="80%" x2="50%" y2="100%" stroke="#3e8692" strokeWidth="1" strokeDasharray="4,4" />
                </svg>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8 relative z-10">
                {[
                  {
                    title: "Big KOL blast in one day… then nothing.",
                    subtitle: "No sustained engagement or follow-through",
                    number: "01",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    )
                  },
                  {
                    title: "Micro creators repeat the same line. It feels fake.",
                    subtitle: "Inauthentic messaging loses trust",
                    number: "02",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Bots push stats up. Real people don't click.",
                    subtitle: "Inflated metrics without real users",
                    number: "03",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    )
                  },
                  {
                    title: "Token hype brings farmers, not fans.",
                    subtitle: "Short-term extraction over long-term value",
                    number: "04",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "No plan. No rhythm. Team burns out.",
                    subtitle: "Unsustainable approach without strategy",
                    number: "05",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`group relative bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-2xl p-10 hover:border-[#3e8692]/50 transition-all duration-500 ${index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Icon indicator */}
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-[#3e8692] to-[#2a5f68] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#3e8692]/25">
                      {item.icon}
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3e8692]/0 to-[#3e8692]/0 group-hover:from-[#3e8692]/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>

                    <div className="relative pt-4">
                      <p className="text-white font-semibold text-lg mb-3 leading-snug">{item.title}</p>
                      <div className="h-px w-12 bg-gradient-to-r from-[#3e8692] to-transparent mb-3"></div>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative bg-gradient-to-br from-red-950/60 via-red-900/50 to-red-950/40 backdrop-blur-sm border-2 border-red-700/60 rounded-2xl p-10 overflow-hidden shadow-2xl shadow-red-900/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-red-500/5"></div>

              <div className="relative text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-1.5 h-10 bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-lg shadow-red-500/50"></div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">The Cost</h3>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed font-medium">
                  Wasted budget. No trust. Launch days flop. Partners doubt you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-[#111115] to-[#0a0a0b] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(62,134,146,0.06),transparent_70%)]"></div>

        <div className="container-main relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                How It Works
              </h2>
            </motion.div>

            <div className="relative grid md:grid-cols-3 gap-8 mb-12">
              {/* Connecting lines between cards */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0">
                <div className="flex items-center justify-between mx-auto" style={{ width: 'calc(100% - 200px)', marginLeft: '100px' }}>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#3e8692]/60 via-[#3e8692]/40 to-[#3e8692]/60 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#3e8692] rounded-full"></div>
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#3e8692]/60 via-[#3e8692]/40 to-[#3e8692]/60 relative ml-8">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#3e8692] rounded-full"></div>
                  </div>
                </div>
              </div>

              {[
                {
                  step: "01",
                  title: "Start small, win fast",
                  description: "Set up your system. Get early lift in reach and sign-ups.",
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
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-[#3e8692]/50 transition-all duration-500 h-full">
                    {/* Step number badge */}
                    <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-[#3e8692] to-[#2a5f68] rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-[#3e8692]/25 z-10">
                      {item.step}
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3e8692]/0 to-[#3e8692]/0 group-hover:from-[#3e8692]/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>

                    <div className="relative pt-6">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3e8692] to-[#2a5f68] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#3e8692]/25">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Safety Net */}
            <motion.div
              className="relative bg-gradient-to-br from-[#3e8692]/20 via-[#3e8692]/15 to-transparent border-2 border-[#3e8692]/50 rounded-2xl p-10 text-center overflow-hidden shadow-2xl shadow-[#3e8692]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Glow effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#3e8692]/10 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3e8692]/5 via-transparent to-[#3e8692]/5"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3e8692] to-[#2a5f68] rounded-full flex items-center justify-center shadow-lg shadow-[#3e8692]/40">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3e8692] to-[#5aa6b3] bg-clip-text text-transparent">
                    Safety Net
                  </h3>
                </div>
                <p className="text-white text-xl font-semibold leading-relaxed max-w-2xl mx-auto mb-2">
                  If the first sprint isn't valuable, you don't pay.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                  We want you long term — not locked in.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight - HIDDEN */}
      {/*
      <section ref={caseStudyRef} className="py-20 bg-gradient-to-b from-[#111115] to-[#0a0a0b]">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={caseStudyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={caseStudyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <span className="text-[#3e8692] text-sm font-semibold uppercase tracking-wide">Case Study</span>
                </motion.div>
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={caseStudyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  How Pixelmon Achieved Market Authority
                </motion.h2>
                <motion.p 
                  className="text-gray-300 mb-6 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={caseStudyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  From launch uncertainty to becoming one of Web3's most recognized gaming projects. 
                  We helped establish market authority and drive sustainable community engagement.
                </motion.p>
                <motion.div 
                  className="grid grid-cols-2 gap-6 mb-8"
                  variants={staggerContainer}
                  initial="initial"
                  animate={caseStudyInView ? "animate" : "initial"}
                >
                  <motion.div 
                    className="border border-gray-800 rounded-lg p-4 bg-gray-900/30"
                    variants={fadeInUp}
                  >
                    <div className="text-2xl font-bold text-[#3e8692] mb-1">250%</div>
                    <div className="text-sm text-gray-400">Community Growth</div>
                  </motion.div>
                  <motion.div 
                    className="border border-gray-800 rounded-lg p-4 bg-gray-900/30"
                    variants={fadeInUp}
                  >
                    <div className="text-2xl font-bold text-[#3e8692] mb-1">$50M+</div>
                    <div className="text-sm text-gray-400">Market Cap Peak</div>
                  </motion.div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={caseStudyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                >
                  <Link href="/case-studies" className="text-[#3e8692] hover:text-[#357a85] font-medium transition-colors">
                    View Full Case Study →
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div 
                className="lg:order-first"
                initial={{ opacity: 0, x: 50 }}
                animate={caseStudyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-800">
                  <div className="aspect-video relative">
                    <Image
                      src="https://gamesbeat.com/wp-content/uploads/2025/05/Dragon_Image.jpg"
                      alt="Pixelmon Dragon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">Pixelmon</h3>
                    <p className="text-gray-400 text-sm">Gaming • NFT • Metaverse</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Testimonial Carousel - HIDDEN */}
      {/*
      <section ref={testimonialRef} className="py-20 bg-gradient-to-b from-[#111115] to-[#0a0a0b]">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-[#3e8692] text-sm font-semibold uppercase tracking-wide mb-4 block">
                What Our Partners Say
              </span>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div 
                className="transition-all duration-500 ease-in-out"
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className="text-[#3e8692] text-sm font-medium mt-1">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={testimonialInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-[#3e8692]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      */}

      {/* Optional Founder Video Section - HIDDEN */}
      {/*
      <section className="py-20 bg-[#111115]">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-[#3e8692] text-sm font-semibold uppercase tracking-wide mb-4 block">
                Meet the Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Building the Future of Web3 Marketing
              </h2>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 border border-gray-800">
              <div className="flex justify-center mb-6 space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#3e8692]/30">
                  <Image
                    src="https://pbs.twimg.com/profile_images/1915872312941023232/h7PJm1zF_400x400.jpg"
                    alt="Co-founder"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#3e8692]/30">
                  <Image
                    src="https://pbs.twimg.com/profile_images/1618301541596729366/euqgqtBx_400x400.jpg"
                    alt="Co-founder"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                "We founded Holo Hive because we saw too many great projects fail not due to poor products, 
                but because of poor market positioning. Our mission is to change that."
              </p>
              <div className="text-white font-semibold">Holo Hive Founders</div>
              <div className="text-gray-400 text-sm">Market Presence Experts</div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-[#0a0a0b] to-[#111115] relative overflow-hidden">
        {/* Background images */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 blur-3xl">
            <Image src="/Background 1.png" alt="" fill className="object-cover" />
          </div>
          <div className="absolute inset-0" style={{
            maskImage: 'radial-gradient(circle at center, transparent 30%, black 70%)',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent 30%, black 70%)'
          }}>
            <div className="absolute inset-0 blur-3xl scale-110">
              <Image src="/Background 1.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/80 via-[#0a0a0b]/60 to-[#0a0a0b]/80"></div>

        <div className="container-main text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to turn attention into users and revenue?
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See if your team qualifies for our Breakout Moment plan. One short call. Clear next steps. Zero pressure.
            </p>
            <div className="inline-block">
              <Link href="/program" className="bg-[#3e8692] text-white px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-[#357a85] transition-colors duration-300 inline-block">
                SEE IF YOU QUALIFY
              </Link>
              <p className="text-sm text-gray-400 mt-4 max-w-md mx-auto">
                If you qualify, we build your roadmap. If not, you still leave with usable insights.
              </p>
            </div>
          </motion.div>
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