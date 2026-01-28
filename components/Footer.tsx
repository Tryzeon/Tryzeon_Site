'use client';

import { Instagram, Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  t: {
    footer: {
      products: string;
      aiVirtualTryOn: string;
      videoGeneration: string;
      aiRecommendation: string;
      dataAnalytics: string;
      contactUs: string;
      businessCooperation: string;
      technicalSupport: string;
      mediaContact: string;
      privacyPolicy: string;
      termsOfService: string;
      cookiePolicy: string;
      copyright: string;
    };
  };
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { label: t.footer.aiVirtualTryOn, href: '#features' },
      { label: t.footer.videoGeneration, href: '#features' },
      { label: t.footer.aiRecommendation, href: '#features' },
      { label: t.footer.dataAnalytics, href: '#features' }
    ],
    company: [
      { label: '關於我們', href: '#about' },
      { label: '團隊介紹', href: '#team' },
      { label: '合作夥伴', href: '#partners' },
      { label: '最新消息', href: '#' }
    ],
    resources: [
      { label: '常見問題', href: '#faq' },
      { label: '使用教學', href: '#' },
      { label: 'API 文件', href: '#', external: true },
      { label: '開發者資源', href: '#', external: true }
    ],
    contact: [
      { label: t.footer.businessCooperation, href: '#contact' },
      { label: t.footer.technicalSupport, href: '#contact' },
      { label: t.footer.mediaContact, href: '#contact' }
    ]
  };

  return (
    <footer className="bg-[#1D1D1F] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div>
              <h3 className="text-3xl font-bold mb-3 tracking-tight">Stay Connected</h3>
              <p className="text-white/60 font-medium text-lg max-w-md">訂閱我們的電子報，獲取最新的 AI 時尚科技趨勢與產品更新。</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="輸入您的 Email"
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:border-[#0066CC] focus:bg-white/10 transition-all w-full sm:w-80 backdrop-blur-sm"
              />
              <button className="px-8 py-4 bg-[#0066CC] hover:bg-[#0077ED] text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-[#0066CC]/20">
                訂閱
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:pr-12">
            <h3 className="text-2xl font-display font-bold mb-4 tracking-tight">Tryzeon</h3>
            <p className="text-white/50 mb-8 font-medium leading-relaxed">
              透過 AI 技術重新定義時尚體驗。我們連結創作者、品牌與消費者，打造無縫的虛擬試穿生態系。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a href="mailto:tryzeon.team@gmail.com" className="flex items-center text-white/60 hover:text-white transition-colors text-sm group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-[#0066CC] transition-colors">
                  <Mail className="h-4 w-4" />
                </span>
                tryzeon.team@gmail.com
              </a>
              <div className="flex items-center text-white/60 text-sm">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4" />
                </span>
                台灣台北市 (Taipei, Taiwan)
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/tryzeon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#0066CC] rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/tryzeon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-[#0066CC] rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#86868B] mb-6">Products</h4>
            <ul className="space-y-4">
              {footerLinks.products.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/70 hover:text-[#0066CC] transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#86868B] mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/70 hover:text-[#0066CC] transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#86868B] mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-[#0066CC] transition-colors text-sm font-medium inline-flex items-center group"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="h-3 w-3 ml-1 opacity-50 group-hover:opacity-100" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#86868B] mb-6">Contact</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/70 hover:text-[#0066CC] transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/5 bg-[#161617]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-[#86868B]">
              Copyright © {currentYear} Tryzeon Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-xs text-[#86868B] hover:text-white transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <span className="text-[#86868B]/30">|</span>
              <Link href="/terms" className="text-xs text-[#86868B] hover:text-white transition-colors">
                {t.footer.termsOfService}
              </Link>
              <span className="text-[#86868B]/30">|</span>
              <span className="text-xs text-[#86868B]">
                Taiwan 🇹🇼
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
