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
      <section className="pt-32 pb-32 bg-[#0a0a0b] relative overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Tired of buying users who disappear overnight?
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
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0b] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0b] to-transparent z-10 pointer-events-none"></div>

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
      <section className="pt-0 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden border-t border-b border-gray-200">
        {/* Crosshatch pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 11px), repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 11px)',
        }}></div>

        <div className="container-main relative z-10">
          <motion.div
            className="pt-16 pb-12 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">(why most marketing flops)</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Old Way
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                The old way is loud, not loved. You post more. You pay more. The right people still don't care.
                The feed moves on. Numbers look big. Users don't stick.
              </p>
            </div>

            <div className="max-w-5xl mx-auto px-4">
              <div className="relative mb-12">
                {/* Connecting lines */}
                <div className="hidden md:block absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                  <svg className="w-full h-full opacity-15" style={{ position: 'absolute' }}>
                    <line x1="50%" y1="0" x2="25%" y2="20%" stroke="#1f2937" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="50%" y1="0" x2="75%" y2="20%" stroke="#1f2937" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="25%" y1="40%" x2="25%" y2="60%" stroke="#1f2937" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="75%" y1="40%" x2="75%" y2="60%" stroke="#1f2937" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="25%" y1="80%" x2="50%" y2="100%" stroke="#1f2937" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="75%" y1="80%" x2="50%" y2="100%" stroke="#1f2937" strokeWidth="1" strokeDasharray="4,4" />
                  </svg>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8 relative z-10">
                {[
                  {
                    title: "Big KOL blast in one day… then nothing.",
                    subtitle: "No sustained engagement or follow-through",
                    backDescription: "You pay for a massive push from influencers, but once the posts go out, there's no follow-up strategy. The spike disappears within 24 hours, leaving you with temporary vanity metrics and zero lasting impact.",
                    number: "01",
                    iconBg: "bg-red-800",
                    iconColor: "text-white",
                    borderColor: "border-red-500",
                    cardBg: "bg-white",
                    cardBorder: "border-gray-300",
                    hoverBorder: "hover:border-red-500",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    )
                  },
                  {
                    title: "Micro creators repeat the same line. It feels fake.",
                    subtitle: "Inauthentic messaging loses trust",
                    backDescription: "When dozens of small accounts all post identical messages, your audience sees right through it. Instead of building credibility, you destroy it. People stop trusting anything associated with your brand.",
                    number: "02",
                    iconBg: "bg-blue-800",
                    iconColor: "text-white",
                    borderColor: "border-blue-500",
                    cardBg: "bg-white",
                    cardBorder: "border-gray-300",
                    hoverBorder: "hover:border-blue-500",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Bots push stats up. Real people don't click.",
                    subtitle: "Inflated metrics without real users",
                    backDescription: "Fake engagement makes your dashboard look good but delivers nothing. Investors see through bot activity, partners question your legitimacy, and your actual conversion rate stays at zero while you burn budget.",
                    number: "03",
                    iconBg: "bg-amber-800",
                    iconColor: "text-white",
                    borderColor: "border-amber-500",
                    cardBg: "bg-white",
                    cardBorder: "border-gray-300",
                    hoverBorder: "hover:border-amber-500",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    )
                  },
                  {
                    title: "Token hype brings farmers, not fans.",
                    subtitle: "Short-term extraction over long-term value",
                    backDescription: "Airdrop hunters and mercenary capital show up for rewards, dump tokens immediately, and disappear. You're left with a chart going down and a community that never cared about your product.",
                    number: "04",
                    iconBg: "bg-purple-800",
                    iconColor: "text-white",
                    borderColor: "border-purple-500",
                    cardBg: "bg-white",
                    cardBorder: "border-gray-300",
                    hoverBorder: "hover:border-purple-500",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "No plan. No rhythm. Team burns out.",
                    subtitle: "Unsustainable approach without strategy",
                    backDescription: "Without a structured approach, your team scrambles from crisis to crisis, posting randomly, throwing money at whatever seems to work. Energy drains, morale drops, and nothing compounds into real momentum.",
                    number: "05",
                    iconBg: "bg-emerald-800",
                    iconColor: "text-white",
                    borderColor: "border-emerald-500",
                    cardBg: "bg-white",
                    cardBorder: "border-gray-300",
                    hoverBorder: "hover:border-emerald-500",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`group ${index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}`}
                    style={{ perspective: '1000px', minHeight: '280px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative w-full h-full min-h-[280px] group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s' }}>
                      {/* Front of card */}
                      <div
                        className={`${item.cardBg} rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[280px] flex flex-col relative group/card border border-gray-100`}
                        style={{
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        {/* Animated gradient background */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at 50% 0%, ${
                              item.iconBg === 'bg-red-800' ? 'rgba(239, 68, 68, 0.08)' :
                              item.iconBg === 'bg-blue-800' ? 'rgba(59, 130, 246, 0.08)' :
                              item.iconBg === 'bg-amber-800' ? 'rgba(245, 158, 11, 0.08)' :
                              item.iconBg === 'bg-purple-800' ? 'rgba(168, 85, 247, 0.08)' :
                              'rgba(16, 185, 129, 0.08)'
                            } 0%, transparent 70%)`
                          }}
                        ></div>

                        {/* Diagonal accent line */}
                        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                          <div
                            className={`absolute -top-16 -right-16 w-32 h-32 ${item.iconBg} opacity-5 rotate-45 transform group-hover/card:scale-150 transition-transform duration-700`}
                          ></div>
                        </div>

                        {/* Decorative dots pattern */}
                        <div className="absolute bottom-4 left-4 flex gap-1 opacity-20">
                          <div className={`w-1 h-1 rounded-full ${item.iconBg}`}></div>
                          <div className={`w-1 h-1 rounded-full ${item.iconBg}`}></div>
                          <div className={`w-1 h-1 rounded-full ${item.iconBg}`}></div>
                        </div>

                        {/* Large icon background */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.08] group-hover/card:opacity-[0.12] transition-opacity duration-500">
                          <div className="scale-[2.5] text-gray-800">
                            {item.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative p-8 flex-1 flex flex-col">
                          {/* Number badge */}
                          <div className="mb-6">
                            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${item.iconBg} ${item.iconColor} shadow-lg transform group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-300`}>
                              <span className="text-sm font-bold">{item.number}</span>
                            </div>
                          </div>

                          {/* Title - larger and more prominent */}
                          <div className="flex-1 flex items-center">
                            <h3 className="text-gray-900 font-extrabold text-2xl leading-tight tracking-tight group-hover/card:text-gray-700 transition-colors duration-300">
                              {item.title}
                            </h3>
                          </div>

                          {/* Interactive hint */}
                          <div className="mt-auto pt-6 flex items-center justify-between">
                            <div className={`h-1 w-16 ${item.iconBg} rounded-full group-hover/card:w-24 transition-all duration-500`}></div>
                            <div className="flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Learn more</span>
                              <svg className="w-4 h-4 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Vertical accent bar */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.iconBg} transform origin-top scale-y-0 group-hover/card:scale-y-100 transition-transform duration-500`}></div>
                      </div>

                      {/* Back of card - Glass effect */}
                      <div
                        className={`absolute inset-0 rounded-lg p-8 shadow-2xl flex flex-col items-center justify-center min-h-[280px] backdrop-blur-xl`}
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                          background: `linear-gradient(135deg,
                            ${item.iconBg === 'bg-red-800' ? 'rgba(153, 27, 27, 0.85)' : ''}
                            ${item.iconBg === 'bg-blue-800' ? 'rgba(30, 64, 175, 0.85)' : ''}
                            ${item.iconBg === 'bg-amber-800' ? 'rgba(146, 64, 14, 0.85)' : ''}
                            ${item.iconBg === 'bg-purple-800' ? 'rgba(107, 33, 168, 0.85)' : ''}
                            ${item.iconBg === 'bg-emerald-800' ? 'rgba(6, 95, 70, 0.85)' : ''}
                            ,
                            ${item.iconBg === 'bg-red-800' ? 'rgba(127, 29, 29, 0.75)' : ''}
                            ${item.iconBg === 'bg-blue-800' ? 'rgba(29, 78, 216, 0.75)' : ''}
                            ${item.iconBg === 'bg-amber-800' ? 'rgba(180, 83, 9, 0.75)' : ''}
                            ${item.iconBg === 'bg-purple-800' ? 'rgba(126, 34, 206, 0.75)' : ''}
                            ${item.iconBg === 'bg-emerald-800' ? 'rgba(5, 122, 85, 0.75)' : ''}
                          )`,
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {/* Glass shine effect */}
                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-lg"></div>

                        {/* Decorative blurred elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

                        <div className="relative text-center space-y-5 px-2 z-10">
                          <div>
                            <span className="text-white text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-lg">The Problem</span>
                          </div>
                          <p className="text-white text-base leading-relaxed font-medium drop-shadow-lg">{item.backDescription}</p>
                        </div>

                        {/* Bottom glass reflection */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent rounded-b-lg"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button inside gradient container */}
            <motion.div
              className="text-center mt-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/program" className="btn-primary inline-block">
                <span>See if you qualify</span>
              </Link>
            </motion.div>
            </div>
          </motion.div>

          {/* The Cost Card - HIDDEN */}
          {/*
          <div className="max-w-5xl mx-auto mt-12">
            <motion.div
              className="relative bg-gradient-to-br from-red-900 via-red-950 to-red-950 border-2 border-red-700 rounded-2xl p-10 overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/30 to-transparent rounded-bl-full"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-red-500/10"></div>
              <div className="relative text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-1.5 h-10 bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-lg shadow-red-500/50"></div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-300 to-red-400 bg-clip-text text-transparent">The Cost</h3>
                </div>
                <p className="text-white text-lg leading-relaxed font-medium">
                  Wasted budget. No trust. Launch days flop. Partners doubt you.
                </p>
              </div>
            </motion.div>
          </div>
          */}
        </div>
      </section>

      {/* How It Works Section - MOVED TO PROGRAM PAGE */}

      {/* Who This Is For Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0b] to-[#111115] relative overflow-hidden border-y border-[#3e8692]/10">
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(62,134,146,0.2) 80px, rgba(62,134,146,0.2) 81px), repeating-linear-gradient(-45deg, transparent, transparent 80px, rgba(62,134,146,0.2) 80px, rgba(62,134,146,0.2) 81px)',
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
                Is This Right For You?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're selective about who we work with.
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-2">
                Here's what we need to succeed together.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* This Works If */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative bg-gradient-to-br from-green-900/20 via-green-900/10 to-transparent backdrop-blur-sm border-2 border-green-500/30 rounded-xl p-10 h-full hover:border-green-500/50 transition-all duration-500">
                  {/* Checkmark icon */}
                  <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl"></div>

                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-6 pt-4">This works if you have:</h3>
                    <ul className="space-y-4 mb-8">
                      {[
                        "Raised at least $500K in funding",
                        "A product people actually want to use",
                        "A launch or milestone coming up in 3-6 months",
                        "Budget to invest in real growth",
                        "Willingness to think long-term, not just quick pumps"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="text-center pt-4 border-t border-green-500/20">
                      <Link href="/program" className="btn-primary inline-block">
                        <span>See if you qualify</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* This Doesn't Work If */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative bg-gradient-to-br from-red-900/20 via-red-900/10 to-transparent backdrop-blur-sm border-2 border-red-500/30 rounded-xl p-10 h-full hover:border-red-500/50 transition-all duration-500">
                  {/* X icon */}
                  <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-xl"></div>

                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-6 pt-4">This doesn't work if you:</h3>
                    <ul className="space-y-4">
                      {[
                        "Need immediate token price pumps",
                        "Have no product-market fit yet",
                        "Want to hire us to do everything for you",
                        "Expect results without putting in the work",
                        "Just want vanity metrics to show VCs"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
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

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "We went from 2K followers to 15K real users in 6 weeks. The quality of engagement is what blew us away—these people actually use the product.",
                  author: "Sarah Chen",
                  role: "Co-Founder",
                  company: "DeFi Protocol",
                  avatar: "https://i.pravatar.cc/150?img=5",
                  gradient: "from-cyan-500 to-cyan-700"
                },
                {
                  quote: "Finally, a team that understands the difference between hype and growth. Our retention metrics improved 3x because we attracted the right people.",
                  author: "Marcus Rodriguez",
                  role: "CEO",
                  company: "NFT Gaming Platform",
                  avatar: "https://i.pravatar.cc/150?img=12",
                  gradient: "from-orange-500 to-orange-700"
                },
                {
                  quote: "The structured approach gave us predictable results. No more guessing what works. We knew exactly what to expect each week.",
                  author: "Alex Kim",
                  role: "Founder",
                  company: "Web3 Infrastructure",
                  avatar: "https://i.pravatar.cc/150?img=8",
                  gradient: "from-fuchsia-500 to-fuchsia-700"
                },
                {
                  quote: "Our token launch was the most successful in our vertical. The community they built actually believed in the product, not just the airdrop.",
                  author: "Jessica Park",
                  role: "CMO",
                  company: "Layer 1 Blockchain",
                  avatar: "https://i.pravatar.cc/150?img=9",
                  gradient: "from-green-500 to-green-700"
                },
                {
                  quote: "We tried three agencies before Holo Hive. This is the only team that delivered real users who converted. ROI was 4x our previous campaigns.",
                  author: "David Miller",
                  role: "Co-Founder",
                  company: "GameFi Platform",
                  avatar: "https://i.pravatar.cc/150?img=14",
                  gradient: "from-blue-500 to-blue-700"
                },
                {
                  quote: "The transparency was refreshing. Weekly reports showed exactly what was working and what wasn't. No smoke and mirrors, just results.",
                  author: "Emma Thompson",
                  role: "Head of Growth",
                  company: "DAO Governance Tool",
                  avatar: "https://i.pravatar.cc/150?img=10",
                  gradient: "from-pink-500 to-pink-700"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="relative bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-[#3e8692]/50 transition-all duration-500 h-full flex flex-col">
                    {/* Quote icon */}
                    <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3e8692]/0 to-[#3e8692]/0 group-hover:from-[#3e8692]/5 group-hover:to-transparent rounded-xl transition-all duration-500"></div>

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
                          className="w-14 h-14 rounded-full object-cover border-2 border-gray-700 shadow-lg"
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
      <section className="py-20 bg-[#0a0a0b] relative overflow-hidden">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(62,134,146,0.2) 1px, transparent 1px),
            linear-gradient(rgba(62,134,146,0.2) 1px, transparent 1px),
            repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(62,134,146,0.1) 35px, rgba(62,134,146,0.1) 36px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 113px 113px',
        }}></div>
        {/* Background images */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 blur-3xl">
            <Image src="/Background 1.png" alt="" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/90 via-[#0a0a0b]/70 to-[#0a0a0b]/90"></div>

        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-transparent backdrop-blur-sm border border-gray-800/50 rounded-3xl p-12 md:p-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Top label */}
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full text-[#3e8692] text-sm font-medium uppercase tracking-wider">
                  Ready to Grow?
                </span>
              </div>

              {/* Main content */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  Ready to turn attention into users and liquidity?
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  See if your team qualifies for our Breakout Moment plan. One short call. Clear next steps. Zero pressure.
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center mb-6">
                <Link href="/program" className="bg-[#3e8692] text-white px-10 py-5 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-[#357a85] transition-colors duration-300 inline-block shadow-lg shadow-[#3e8692]/25">
                  SEE IF YOU QUALIFY
                </Link>
              </div>

              {/* Bottom note */}
              <div className="text-center pt-6 border-t border-gray-700/50">
                <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
                  If you qualify, we build your roadmap. If not, you still leave with usable insights.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opt-in Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0b] to-[#111115] relative overflow-hidden border-t border-[#3e8692]/10">
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(62,134,146,0.2) 80px, rgba(62,134,146,0.2) 81px), repeating-linear-gradient(-45deg, transparent, transparent 80px, rgba(62,134,146,0.2) 80px, rgba(62,134,146,0.2) 81px)',
        }}></div>

        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full text-[#3e8692] text-sm font-medium uppercase tracking-wider mb-6">
                Free Resource
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get Our Program Guide
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Learn exactly how we help funded Web3 projects achieve sustainable growth in just 6 weeks.
              </p>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-[#3e8692]/5 via-gray-900/40 to-transparent backdrop-blur-sm border-2 border-[#3e8692]/20 rounded-2xl p-8 md:p-10 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#3e8692]/20 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#3e8692]/20 to-transparent rounded-tr-full"></div>

              {/* Form */}
              <form className="relative space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3e8692] focus:border-transparent transition-all hover:border-gray-600"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3e8692] focus:border-transparent transition-all hover:border-gray-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telegram" className="block text-sm font-medium text-gray-300 mb-2">
                      Telegram
                    </label>
                    <input
                      type="text"
                      id="telegram"
                      name="telegram"
                      placeholder="@username"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3e8692] focus:border-transparent transition-all hover:border-gray-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="twitter" className="block text-sm font-medium text-gray-300 mb-2">
                      X (Twitter)
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      name="twitter"
                      placeholder="@username"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3e8692] focus:border-transparent transition-all hover:border-gray-600"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3e8692] to-[#357a85] text-white px-8 py-4 rounded-lg font-semibold text-base hover:shadow-[0_0_30px_rgba(62,134,146,0.4)] transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center">
                      Download Program Guide
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </span>
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center pt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
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