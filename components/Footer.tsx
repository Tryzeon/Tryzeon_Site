'use client';

import { MessageCircle, Instagram, Mail } from 'lucide-react';
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
  return (
    <footer className="bg-[#F5F5F7] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-black/5">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-[#1D1D1F] mb-4 tracking-tight">Tryzeon</h3>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-4">創然科技股份有限公司</p>
            <p className="text-[#86868B] mb-8 max-w-sm font-medium leading-relaxed text-base">
              AI × 時尚科技新創，專注於虛擬試穿技術，連結創作者與品牌，打造全球性時尚科技平台。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tryzeon?igsh=bWZ5aG92enFlYnI0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#86868B] hover:text-[#0066CC] hover:shadow-md transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:tryzeon.team@gmail.com"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#86868B] hover:text-[#0066CC] hover:shadow-md transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#1D1D1F] mb-6">{t.footer.products}</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.aiVirtualTryOn, href: '#features' },
                { label: t.footer.videoGeneration, href: '#features' },
                { label: t.footer.aiRecommendation, href: '#features' },
                { label: t.footer.dataAnalytics, href: '#features' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[#86868B] hover:text-[#0066CC] transition-colors font-medium text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#1D1D1F] mb-6">{t.footer.contactUs}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:tryzeon.team@gmail.com"
                  className="text-[#0066CC] hover:text-[#0077ED] transition-colors flex items-center font-medium text-sm"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  tryzeon.team@gmail.com
                </a>
              </li>
              {[
                { label: t.footer.businessCooperation, href: '#contact' },
                { label: t.footer.technicalSupport, href: '#contact' },
                { label: t.footer.mediaContact, href: '#contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-[#86868B] hover:text-[#0066CC] transition-colors font-medium text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
              <Link href="/privacy" className="text-xs font-medium text-[#86868B] hover:text-[#0066CC] transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <Link href="/terms" className="text-xs font-medium text-[#86868B] hover:text-[#0066CC] transition-colors">
                {t.footer.termsOfService}
              </Link>
              <Link href="/privacy#cookies" className="text-xs font-medium text-[#86868B] hover:text-[#0066CC] transition-colors">
                {t.footer.cookiePolicy}
              </Link>
            </div>
            <p className="text-xs font-medium text-[#86868B]/60">{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
