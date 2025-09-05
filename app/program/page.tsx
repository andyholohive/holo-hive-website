'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import CtaSection from '../components/CtaSection';

const trustedLogos = [
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

const programFeatures = [
  {
    title: 'Market Authority',
    description: 'Be seen as the team that gets it. We install positioning and moves that make investors, partners, and communities take you seriously.'
  },
  {
    title: 'Lasting Attention',
    description: 'Turn big moments into steady waves of energy. Instead of hype that fades, we help you build trust that grows over time.'
  },
  {
    title: 'Trusted Amplification',
    description: 'Get trusted voices and communities behind you so every campaign feels organic, believable, and impossible to ignore.'
  }
];

const programCards = [
  {
    title: 'Control the Story People Tell About You',
    description: 'Shape the story people tell about you so the market sees you as strong and worth backing.'
  },
  {
    title: 'Roll Out Campaigns Without Losing Steam',
    description: 'Plan each step in the right order so market presence grows and the spotlight stays on you.'
  },
  {
    title: 'How to Use KOLs the Right Way',
    description: 'Use the right voices at the right time, each with a clear role, so your message spreads with speed and trust.'
  },
  {
    title: 'Market Moments People Can\'t Ignore',
    description: 'Create key moments that drive attention, participation and show strength to the market.'
  },
  {
    title: 'Community Engagement Strategy',
    description: 'Build loyalty that lasts so people keep talking, sharing, and standing behind you.'
  }
];

const experiences = [
  {
    number: '1',
    title: 'Direct Access to Holo Hive Partners & Senior Strategists',
    description: 'Work alongside the team that has guided some of the biggest campaigns in Web3. These are the same people who\'ve helped top funds and their portfolio companies build trust with the market. You\'ll get tailored strategies, proven playbooks, and ongoing support to know exactly what moves to make.'
  },
  {
    number: '2',
    title: 'A Market Presence Plan Built For You',
    description: 'We start by building a simple but powerful market presence plan together. It shows the exact steps your team should take, in the right order, so you don\'t waste time or budget. We then install this into your campaigns or refine what you already have, so every move builds authority and gets noticed.'
  },
  {
    number: '3',
    title: 'Campaign Oversight and Real-Time Adjustments',
    description: 'You\'ll have our team overseeing execution as you go. We\'ll help you adjust to market shifts, spot gaps, and unlock opportunities before they\'re missed. This gives you confidence that you\'re always doing what will land best with investors, partners, and the market.'
  },
  {
    number: '4',
    title: 'Engineered Market Moments',
    description: 'We\'ll help you create the right moments that get attention from the right people. Whether that\'s shaping the story for a big milestone, targeting the right audience, or creating events that spark conversation, you\'ll know exactly when and how to make noise that lasts.'
  },
  {
    number: '5',
    title: 'Potential for Long-Term Partnership',
    description: 'Joining the program also opens the door for an ongoing relationship. Many teams choose to keep working with us beyond a single campaign so they can keep their market presence strong at all times, not just during launches. That means better positioning, stronger narratives, and a trusted partner at every stage.'
  }
];

const faqs = [
  {
    question: 'What is the Amplification Program?',
    answer: 'It is a 3-month program designed to give your team trust, attention, and momentum in the market.'
  },
  {
    question: 'Do you only work on token launches?',
    answer: 'No. We amplify any milestone — launches, partnerships, rebrands, expansions.'
  },
  {
    question: 'What if we already have a GTM plan?',
    answer: 'We enhance it with proven plays and oversight to multiply its impact.'
  },
  {
    question: 'Do you replace our team?',
    answer: 'No. We work alongside your team to make your strengths stronger.'
  },
  {
    question: 'How soon can we start?',
    answer: 'You will have a clear plan within 7 days of kickoff.'
  },
  {
    question: 'What happens after the program ends?',
    answer: 'You will keep the plan, the playbooks, and the clarity. Many teams extend into a long-term partnership.'
  }
];

export default function ProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [applicationStep, setApplicationStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: ''
  });
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const socialProofRef = useRef(null);
  const problemRef = useRef(null);
  const experienceRef = useRef(null);
  const programRef = useRef(null);
  const targetRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  
  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const socialProofInView = useInView(socialProofRef, { once: true, margin: "-100px" });
  const problemInView = useInView(problemRef, { once: true, margin: "-100px" });
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const programInView = useInView(programRef, { once: true, margin: "-100px" });
  const targetInView = useInView(targetRef, { once: true, margin: "-100px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-b from-[#0a0a0b] via-[#111115] to-[#0a0a0b] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e8692]/5 to-transparent"></div>
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full text-[#3e8692] text-sm font-medium">
                The Amplification Program™
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white uppercase"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Force The Market To Care
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              The Amplification Program is our system that gives Web3 teams trust, attention, 
              and momentum at the moments that matter most.
            </motion.p>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              We've helped $30B+ in campaigns turn milestones into market momentum. 
              Now we've built the system that does it again and again.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <Link href="#apply-form" className="btn-secondary inline-flex items-center">
                APPLY TO AMPLIFY
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            
            
            {/* Trusted By Section - Merged */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            >
              <div className="text-center mb-8">
                <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">
                  Trusted by leading teams in Web3
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center max-w-5xl mx-auto">
                {trustedLogos.map((client, index) => (
                  <motion.div 
                    key={client.name} 
                    className="text-center opacity-60 hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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


      {/* Why Most Teams Fail */}
      <section ref={problemRef} className="py-20 bg-gradient-to-b from-[#111115] to-[#0a0a0b] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/5 to-transparent"></div>
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Why Most Teams Fail… And How We Fix It"
              inView={problemInView}
            />
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* Problems Column */}
              <div className="bg-gradient-to-br from-red-900/20 to-gray-900/30 rounded-2xl p-8 border border-red-900/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Why Teams Fail</h3>
                </div>
                <p className="text-gray-300 mb-4">Most teams lose because of broken campaigns:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">✗</span>
                    <span className="text-gray-300">Launch too early or too late</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">✗</span>
                    <span className="text-gray-300">Chase hype before building trust</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">✗</span>
                    <span className="text-gray-300">Spend on KOLs with no credibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">✗</span>
                    <span className="text-gray-300">Wrong sequencing of events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2 mt-1">✗</span>
                    <span className="text-gray-300">Can't get crypto-native buy-in</span>
                  </li>
                </ul>
              </div>
              
              {/* Solutions Column */}
              <div className="bg-gradient-to-br from-[#3e8692]/20 to-gray-900/30 rounded-2xl p-8 border border-[#3e8692]/30">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#3e8692]/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#3e8692]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">How We Fix It</h3>
                </div>
                <p className="text-gray-300 mb-4">The Amplification Program solves this:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#3e8692] mr-2 mt-1">✓</span>
                    <span className="text-gray-300">Build the right market presence plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3e8692] mr-2 mt-1">✓</span>
                    <span className="text-gray-300">Access proven plays from $30B+ campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3e8692] mr-2 mt-1">✓</span>
                    <span className="text-gray-300">Step-by-step guidance that compounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3e8692] mr-2 mt-1">✓</span>
                    <span className="text-gray-300">Perfect timing for every move</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3e8692] mr-2 mt-1">✓</span>
                    <span className="text-gray-300">Authentic crypto-native credibility</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <Link href="#apply-form" className="btn-secondary inline-flex items-center">
                I'M READY TO AMPLIFY
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section ref={experienceRef} className="py-20 bg-gradient-to-b from-[#0a0a0b] via-[#111115] to-[#0a0a0b] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e8692]/5 to-transparent"></div>
        <div className="container-main relative z-10">
          <SectionHeader
            title="What You'll Experience"
            subtitle="Five pillars that transform your milestone into market momentum"
            inView={experienceInView}
            center
          />
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.number}
                className="group relative h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                {/* Floating background graphics */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#3e8692]/10 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#6B46C1]/10 to-transparent rounded-full blur-lg group-hover:scale-110 transition-transform"></div>
                
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-[#3e8692]/50 transition-all hover:shadow-xl hover:shadow-[#3e8692]/10 overflow-hidden flex flex-col">
                  {/* Inner decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3e8692]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#6B46C1]/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                  
                  {/* Top graphics area */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      {/* Number badge */}
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3e8692] to-[#357a85] text-white rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative z-10">{exp.number}</span>
                      </div>
                      
                      {/* Top right graphic element */}
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#3e8692]/40 to-[#357a85]/40 group-hover:scale-125 transition-all"></div>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#6B46C1]/40 to-[#553C9A]/40 group-hover:scale-110 transition-all"></div>
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#3e8692]/20 to-[#357a85]/20 group-hover:scale-150 transition-all"></div>
                      </div>
                    </div>
                    
                    {/* Clean, simple graphics */}
                  </div>
                  
                  {/* Content area - flex-grow to push footer to bottom */}
                  <div className="relative z-10 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-center">{exp.description}</p>
                  </div>
                  
                  {/* Bottom graphics - always at the bottom */}
                  <div className="relative z-10 mt-6">
                    <div className="w-full h-1 bg-gradient-to-r from-[#3e8692]/20 to-transparent rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-gradient-to-r from-[#3e8692] to-[#357a85] w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                    </div>
                    
                    {/* Bottom decorative elements */}
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3e8692]/30 to-[#357a85]/30 group-hover:scale-125 transition-all"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          ></div>
                        ))}
                      </div>
                      
                      {/* Success indicator */}
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400/20 to-green-600/20 border border-green-400/30 flex items-center justify-center group-hover:scale-110 transition-all">
                        <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Breakdown */}
      <section ref={programRef} className="py-20 bg-gradient-to-b from-[#111115] via-[#0a0a0b] to-[#111115] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/5 via-transparent to-[#3e8692]/5"></div>
        <div className="container-main relative z-10">
          <SectionHeader
            badge="THE SYSTEM"
            title="Inside the Amplification Program™"
            subtitle="Everything you need to transform your milestone into lasting market momentum"
            inView={programInView}
            center
          />
          
          {/* 3 Key Blocks with enhanced styling */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={programInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="h-full bg-gradient-to-br from-[#6B46C1]/10 to-gray-900/50 rounded-2xl p-8 border border-[#6B46C1]/20 hover:border-[#6B46C1]/40 transition-all group hover:shadow-xl hover:shadow-[#6B46C1]/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#6B46C1] to-[#553C9A] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                      {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                      {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={programInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-800/50 hover:border-[#3e8692]/40 transition-all hover:shadow-xl hover:shadow-[#3e8692]/10 hover:bg-gradient-to-br hover:from-gray-800/50 hover:to-gray-900/50">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3e8692] to-[#357a85] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <div className="w-6 h-6 bg-white/20 rounded-lg"></div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">{card.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{card.description}</p>
                  </div>
                  
                  {/* Card footer with decorative element */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center">
                      <div className="w-8 h-1 bg-gradient-to-r from-[#3e8692] to-transparent rounded-full group-hover:w-12 transition-all"></div>
                      <div className="ml-2 text-xs text-gray-500 font-medium">PROGRAM MODULE</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={programInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Link href="#apply-form" className="btn-secondary inline-flex items-center">
              APPLY TO AMPLIFY
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section ref={targetRef} className="py-20 bg-[#111115]">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              title="This Program Is Only for the Right Teams"
              inView={targetInView}
            />
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={targetInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="text-left bg-green-900/10 p-6 rounded-xl border border-green-800/30">
                <h3 className="font-semibold mb-4 text-green-400 text-lg">We partner with:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Venture-backed or institutionally-backed teams</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Teams with meaningful upcoming milestones</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Teams that value trust, timing, and credibility</li>
                </ul>
              </div>
              
              <div className="text-left bg-red-900/10 p-6 rounded-xl border border-red-800/30">
                <h3 className="font-semibold mb-4 text-red-400 text-lg">Not a fit for:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><span className="text-red-400 mr-2">✗</span> Underfunded projects</li>
                  <li className="flex items-center"><span className="text-red-400 mr-2">✗</span> Short-term hype seekers</li>
                  <li className="flex items-center"><span className="text-red-400 mr-2">✗</span> Teams unwilling to follow proven structure</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={targetInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <Link href="#apply-form" className="btn-secondary inline-flex items-center">
                APPLY TO AMPLIFY
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Qualification Form Section */}
      <section id="apply-form" className="py-20 bg-gradient-to-b from-[#0a0a0b] to-[#111115] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/5 to-[#3e8692]/5"></div>
        <div className="container-main relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-2 bg-[#3e8692]/10 border border-[#3e8692]/20 rounded-full mb-6">
                <span className="text-[#3e8692] font-medium text-sm">START YOUR JOURNEY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Make the Market Care?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                This program is built to help teams shine by turning milestones into moments the market can't ignore.
              </p>
              <p className="text-lg text-gray-400 mt-4">
                Fill out the form to see if you qualify
              </p>
            </motion.div>

            {/* Join These Leading Teams Card */}
            <motion.div 
              className="bg-gray-900/50 p-8 rounded-xl max-w-md mx-auto border border-gray-800 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Join These Leading Teams</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your milestone into market momentum?
              </p>
              <button 
                onClick={() => setShowApplicationModal(true)}
                className="btn-secondary inline-flex items-center"
              >
                START YOUR APPLICATION
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-[#0a0a0b]">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              title="Frequently Asked Questions"
              inView={faqInView}
            />
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform text-gray-400 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0b] border-t border-gray-800">
        <div className="container-main py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="Holo Hive"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold text-white text-lg">Holo Hive</span>
              </div>
              <p className="text-gray-400 text-sm">Amplifying Web3 teams to unprecedented heights</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">About</Link>
                <Link href="/case-studies" className="block text-gray-400 hover:text-white transition-colors text-sm">Case Studies</Link>
                <Link href="/program" className="block text-gray-400 hover:text-white transition-colors text-sm">Program</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Blog</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Guides</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Templates</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Holo Hive. All rights reserved.</p>
            <p className="mt-2 text-gray-500">Results vary. Nothing here is financial advice. We only work with funded teams we believe we can help.</p>
          </div>
        </div>
      </footer>

      {/* Application Modal */}
      {showApplicationModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowApplicationModal(false);
              setApplicationStep(1);
            }
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          
          {/* Modal */}
          <motion.div 
            className={`relative bg-gradient-to-b from-[#111115] to-[#0a0a0b] rounded-2xl p-8 border border-gray-800/50 shadow-2xl shadow-black/50 ${
              applicationStep === 2 ? 'max-w-3xl' : 'max-w-md'
            } w-full`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={() => {
                setShowApplicationModal(false);
                setApplicationStep(1);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {applicationStep === 1 ? (
              <>
                {/* Step 1: Contact Form */}
                <div className="text-center mb-6 mt-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    FILL OUT THE FORM TO SEE IF YOU QUALIFY
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Step 1: Contact Information
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  setApplicationStep(2);
                }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#3e8692] focus:outline-none focus:ring-1 focus:ring-[#3e8692] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#3e8692] focus:outline-none focus:ring-1 focus:ring-[#3e8692] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Telegram *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.telegram}
                      onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#3e8692] focus:outline-none focus:ring-1 focus:ring-[#3e8692] transition-colors"
                      placeholder="@yourtelegram"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-secondary inline-flex items-center justify-center"
                  >
                    CONTINUE TO STEP 2
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>

                {/* Disclaimer */}
                <p className="mt-6 text-xs text-gray-500 text-center">
                  We only work with funded teams we believe we can help. 
                  Results vary. Nothing here is financial advice.
                </p>
              </>
            ) : (
              <>
                {/* Step 2: Calendar */}
                <div className="text-center mb-6 mt-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    SCHEDULE YOUR REVIEW CALL
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Step 2: Book a time for your qualification call
                  </p>
                </div>

                {/* Back button */}
                <button
                  onClick={() => setApplicationStep(1)}
                  className="mb-4 text-gray-400 hover:text-white transition-colors inline-flex items-center text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Step 1
                </button>

                {/* Calendly Embed */}
                <div className="relative bg-white rounded-lg overflow-hidden" style={{ height: '500px' }}>
                  <iframe 
                    src="https://yano.holohive.io" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    title="Schedule a Call"
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Disclaimer */}
                <p className="mt-6 text-xs text-gray-500 text-center">
                  We only work with funded teams we believe we can help. 
                  Results vary. Nothing here is financial advice.
                </p>
              </>
            )}
          </motion.div>
        </div>
      )}
    </main>
  );
}