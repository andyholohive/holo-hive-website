'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function AnnouncementBar() {
  const [announcementBarVisible, setAnnouncementBarVisible] = useState(true);
  const pathname = usePathname();
  const isProgramPage = pathname === '/program';

  if (!announcementBarVisible) return null;

  return (
    <div className="sticky top-0 z-[60] bg-gradient-to-r from-[#3e8692] to-[#357a85] text-white py-3 px-4">
      <div className="container-main flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-3">
          <span className="text-sm md:text-base font-medium">
            Limited Spots Available: See if you qualify.
          </span>
          {isProgramPage ? (
            <a
              href="#calendly"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('.calendly-inline-widget')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden md:inline-flex items-center px-4 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30"
            >
              Book Your Call
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          ) : (
            <Link
              href="/program"
              className="hidden md:inline-flex items-center px-4 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30"
            >
              Apply Now
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
        <button
          onClick={() => setAnnouncementBarVisible(false)}
          className="flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Close announcement"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* Mobile CTA */}
      <div className="md:hidden mt-2 text-center">
        {isProgramPage ? (
          <a
            href="#calendly"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('.calendly-inline-widget')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-4 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30"
          >
            Book Your Call
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        ) : (
          <Link
            href="/program"
            className="inline-flex items-center px-4 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30"
          >
            Apply Now
            <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
