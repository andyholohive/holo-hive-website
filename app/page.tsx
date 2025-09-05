'use client';

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
      {/* Hero Section */}
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
            
            {/* Trusted By Section - Merged */}
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

      {/* Case Study Highlight */}
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

      {/* Testimonial Carousel */}
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

            {/* Testimonial Indicators */}
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

      {/* Optional Founder Video Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-[#0a0a0b] to-[#111115] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3e8692]/5 to-transparent"></div>
        <div className="container-main text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Amplify Your Presence?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Join the teams building lasting market momentum with proven strategies and expert guidance.
          </p>
          <Link href="/program" className="btn-primary">
            Explore the Amplification Program™
          </Link>
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