'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '../components/SectionHeader';
import StatsGrid from '../components/StatsGrid';
import CtaSection from '../components/CtaSection';

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const visionRef = useRef(null);
  const teamRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const companyStats = [
    { value: "50+", label: "Projects Launched" },
    { value: "3 Years", label: "Web3 Experience" },
    { value: "24/7", label: "Global Support" }
  ];

  const values = [
    {
      title: "Community First",
      description: "Every strategy starts with understanding and serving your community's needs.",
      icon: "👥"
    },
    {
      title: "Data-Driven",
      description: "We base decisions on metrics and real user behavior, not assumptions.",
      icon: "📊"
    },
    {
      title: "Long-term Vision",
      description: "Building sustainable growth that lasts beyond market cycles.",
      icon: "🎯"
    },
    {
      title: "Authentic Growth",
      description: "No bots, no fake engagement - only real, meaningful community growth.",
      icon: "✨"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Head of Growth at leading Web3 protocols. Built communities from 0 to 500K+ members.",
      expertise: "Community Strategy, Product Marketing"
    },
    {
      name: "Sarah Kim",
      role: "Head of Operations",
      bio: "Ex-McKinsey consultant specializing in scaling tech companies. Expert in growth frameworks.",
      expertise: "Operations, Growth Analytics"
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      bio: "Award-winning creative with 8+ years in Web3. Designed campaigns for billion-dollar protocols.",
      expertise: "Brand Design, Content Strategy"
    },
    {
      name: "Emily Zhang",
      role: "Community Lead",
      bio: "Community management veteran with deep crypto native experience across 20+ projects.",
      expertise: "Community Management, Engagement"
    }
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
            <span className="text-[#3e8692] font-medium text-sm">OUR STORY</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            About Holo Hive
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            The team behind Web3&apos;s most successful community transformations
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="py-20">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SectionHeader
                badge="FOUNDED 2021"
                title="Born from Frustration"
                subtitle="We started Holo Hive after witnessing too many great Web3 projects fail due to poor community strategy and growth execution."
                inView={storyInView}
              />
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  After spending years in the trenches of Web3 growth - from DeFi protocols to NFT projects - we recognized a pattern. The best technology doesn&apos;t always win. The best community does.
                </p>
                <p className="text-lg leading-relaxed">
                  Most agencies focus on vanity metrics and short-term hype. We focus on building authentic, engaged communities that drive real business outcomes. That&apos;s the Holo Hive difference.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we&apos;re the trusted growth partner for some of Web3&apos;s most successful projects, having generated over $2.1B in value for our clients.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-800/50"
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Track Record</h3>
              <StatsGrid stats={companyStats} inView={storyInView} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={visionRef} className="py-20 bg-gradient-to-r from-[#111115] to-[#0a0a0b]">
        <div className="container-main text-center">
          <SectionHeader
            badge="OUR MISSION"
            title="Making Web3 Accessible"
            subtitle="We believe the future of the internet should be built by communities, not corporations"
            inView={visionInView}
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A Web3 ecosystem where the best projects succeed based on their community impact and user value, not just their marketing budget or insider connections.
              </p>
            </motion.div>
            
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To amplify the growth of innovative Web3 projects by building authentic, engaged communities that drive sustainable long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-20">
        <div className="container-main">
          <SectionHeader
            badge="CORE VALUES"
            title="What Drives Us"
            subtitle="The principles that guide every decision and strategy we create"
            inView={valuesInView}
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-800/50 text-center"
                initial={{ opacity: 0, y: 60 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gradient-to-r from-[#0a0a0b] to-[#111115]">
        <div className="container-main">
          <SectionHeader
            badge="MEET THE TEAM"
            title="The Minds Behind the Magic"
            subtitle="A diverse team of Web3 natives, growth experts, and creative visionaries"
            inView={teamInView}
            center
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-8 border border-gray-800/50"
                initial={{ opacity: 0, y: 60 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3e8692] to-[#357a85] rounded-full flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#3e8692] font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                <div className="inline-block px-3 py-1 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full">
                  <span className="text-[#3e8692] text-sm font-medium">{member.expertise}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div ref={ctaRef}>
        <CtaSection
          title="Ready to Work with Us?"
          subtitle="Join the growing list of projects that chose Holo Hive for their growth journey"
          buttonText="Start Your Application"
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