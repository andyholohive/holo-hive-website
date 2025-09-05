'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '../components/SectionHeader';
import StatsGrid from '../components/StatsGrid';
import TestimonialCard from '../components/TestimonialCard';
import CtaSection from '../components/CtaSection';

export default function CaseStudiesPage() {
  const heroRef = useRef(null);
  const metricsRef = useRef(null);
  const pixelmonRef = useRef(null);
  const monRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const metricsInView = useInView(metricsRef, { once: true, margin: "-100px" });
  const pixelmonInView = useInView(pixelmonRef, { once: true, margin: "-100px" });
  const monInView = useInView(monRef, { once: true, margin: "-100px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const overallStats = [
    { value: "$2.1B+", label: "Total Value Created" },
    { value: "850K+", label: "Community Members Grown" },
    { value: "12M+", label: "Social Media Reach" }
  ];

  const pixelmonStats = [
    { value: "400K+", label: "Discord Members" },
    { value: "$70M", label: "Funding Raised" },
    { value: "500%", label: "Community Growth" }
  ];

  const monStats = [
    { value: "200K+", label: "Active Users" },
    { value: "$15M", label: "Market Cap Peak" },
    { value: "300%", label: "Engagement Increase" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0b] to-[#111115]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20">
        <div className="container-main text-center">
          <motion.div
            className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[#3e8692] font-medium text-sm">SUCCESS STORIES</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Case Studies
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Real results from Web3 projects that trusted us to amplify their success
          </motion.p>
        </div>
      </section>

      {/* Overall Metrics */}
      <section ref={metricsRef} className="py-20 bg-gradient-to-r from-[#111115] to-[#0a0a0b]">
        <div className="container-main">
          <SectionHeader
            badge="PROVEN RESULTS"
            title="Impact Across All Projects"
            subtitle="Combined metrics from our most successful partnerships"
            inView={metricsInView}
            center
          />
          <StatsGrid stats={overallStats} inView={metricsInView} />
        </div>
      </section>

      {/* Pixelmon Case Study */}
      <section ref={pixelmonRef} className="py-20">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={pixelmonInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full mb-6">
                <span className="text-[#3e8692] font-medium text-sm">FEATURED PROJECT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pixelmon</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Transformed from a struggling NFT project into a $70M gaming ecosystem with 400K+ active community members through strategic repositioning and community-first growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-4"></div>
                  <span className="text-gray-300">Complete brand repositioning and messaging overhaul</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-4"></div>
                  <span className="text-gray-300">Discord community growth from 80K to 400K members</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-4"></div>
                  <span className="text-gray-300">Successful $70M Series A funding round</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-4"></div>
                  <span className="text-gray-300">Gaming ecosystem launch with massive adoption</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-800/50"
              initial={{ opacity: 0, x: 50 }}
              animate={pixelmonInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Pixelmon Results</h3>
              <StatsGrid stats={pixelmonStats} inView={pixelmonInView} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MON Protocol Case Study */}
      <section ref={monRef} className="py-20 bg-gradient-to-r from-[#0a0a0b] to-[#111115]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-800/50 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={monInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">MON Protocol Results</h3>
              <StatsGrid stats={monStats} inView={monInView} />
            </motion.div>
            
            <motion.div
              className="lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={monInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full mb-6">
                <span className="text-[#3e8692] font-medium text-sm">GROWTH SUCCESS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">MON Protocol</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Launched and scaled a DeFi protocol from zero to 200K+ active users and $15M market cap through strategic community building and targeted growth campaigns.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-4"></div>
                  <span className="text-gray-300">Zero-to-launch community building strategy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-4"></div>
                  <span className="text-gray-300">200K+ active protocol users within 6 months</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-4"></div>
                  <span className="text-gray-300">$15M market cap at peak performance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#3e8692] rounded-full mr-4"></div>
                  <span className="text-gray-300">300% increase in community engagement</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section ref={testimonialsRef} className="py-20">
        <div className="container-main">
          <SectionHeader
            badge="CLIENT FEEDBACK"
            title="What Our Partners Say"
            subtitle="Testimonials from the teams we've helped scale to new heights"
            inView={testimonialsInView}
            center
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              quote="Holo Hive transformed our community from 80K to 400K members and helped us raise $70M. Their strategic approach and execution is unmatched in Web3."
              author="Giulio Xiloyannis"
              title="Co-Founder"
              company="Pixelmon"
              index={0}
              inView={testimonialsInView}
            />
            <TestimonialCard
              quote="The growth we achieved with Holo Hive was beyond our expectations. From launch to 200K users - they understand what it takes to scale in DeFi."
              author="Marcus Chen"
              title="CEO"
              company="MON Protocol"
              index={1}
              inView={testimonialsInView}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div ref={ctaRef}>
        <CtaSection
          title="Ready to Be Our Next Success Story?"
          subtitle="Join the projects that chose growth over stagnation"
          buttonText="Apply Now"
          buttonHref="/apply"
          inView={ctaInView}
        />
      </div>

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