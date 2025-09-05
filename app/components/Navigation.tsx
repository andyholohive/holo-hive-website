'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className={`mx-auto max-w-6xl rounded-2xl bg-[#0a0a0b]/90 backdrop-blur-md border border-gray-800/50 shadow-sm transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}>
        <div className="px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Holo Hive"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-white text-lg">Holo Hive</span>
            </Link>

            {/* Center Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              <Link 
                href="/" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full transition-all"
              >
                Home
              </Link>
              <Link 
                href="/program" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full transition-all"
              >
                Amplification Program
              </Link>
              <Link 
                href="/case-studies" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full transition-all"
              >
                Case Studies
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full transition-all"
              >
                About
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link 
                href="/program" 
                className="bg-[#3e8692] text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#357a85] transition-all shadow-sm hover:shadow-md"
              >
                APPLY NOW
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-6 py-4 border-t border-gray-200/50 mt-2">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full transition-all"
              >
                Home
              </Link>
              <Link 
                href="/program" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full transition-all"
              >
                Amplification Program
              </Link>
              <Link 
                href="/case-studies" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full transition-all"
              >
                Case Studies
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full transition-all"
              >
                About
              </Link>
              <Link 
                href="/program" 
                className="bg-[#3e8692] text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-[#357a85] transition-all shadow-sm hover:shadow-md text-center mt-3"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}