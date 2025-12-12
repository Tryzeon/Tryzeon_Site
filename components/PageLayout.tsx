'use client';

import React, { ReactNode } from 'react';
import { Navigation } from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { brand } from '@/lib/constants';

interface PageLayoutProps {
  children: ReactNode;
  currentLang: string;
  setCurrentLang: (lang: string) => void;
  showBackButton?: boolean;
}

export function PageLayout({ 
  children, 
  currentLang, 
  setCurrentLang,
  showBackButton = true 
}: PageLayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: brand.lightBg }}>
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {showBackButton && (
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>返回首頁</span>
            </Link>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
