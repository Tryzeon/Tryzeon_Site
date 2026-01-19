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
    <footer className="bg-fashion-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-serif font-medium mb-4">Tryzeon</h3>
            <p className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-fashion-gold mb-6">創然科技股份有限公司</p>
            <p className="text-white/50 mb-8 max-w-sm font-display font-light leading-relaxed">
              AI × 時尚科技新創，專注於虛擬試穿技術，連結創作者與品牌，打造全球性時尚科技平台。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/tryzeon?igsh=bWZ5aG92enFlYnI0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:tryzeon.team@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Gmail"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-xs font-display font-bold uppercase tracking-[0.2em] text-fashion-gold mb-8">{t.footer.products}</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#features" className="text-white/40 hover:text-white transition-colors font-display text-sm font-light">
                  {t.footer.aiVirtualTryOn}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white/40 hover:text-white transition-colors font-display text-sm font-light">
                  {t.footer.videoGeneration}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white/40 hover:text-white transition-colors font-display text-sm font-light">
                  {t.footer.aiRecommendation}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white/40 hover:text-white transition-colors font-display text-sm font-light">
                  {t.footer.dataAnalytics}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xs font-display font-bold uppercase tracking-[0.2em] text-fashion-gold mb-8">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:tryzeon.team@gmail.com"
                  className="text-white/40 hover:text-white transition-colors flex items-center font-display text-sm font-light"
                >
                  <MessageCircle className="h-4 w-4 mr-3" />
                  tryzeon.team@gmail.com
                </a>
              </li>
              <li>
                <Link href="#contact" className="text-white/40 hover:text-white transition-colors font-display text-sm font-light">
                  {t.footer.businessCooperation}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/40 hover:text-white transition-colors font-display text-sm font-light">
                  {t.footer.technicalSupport}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/40 hover:text-white transition-colors font-display text-sm font-light">
                  {t.footer.mediaContact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 mt-20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-8 text-[11px] font-display font-bold uppercase tracking-widest text-white/30 mb-6 md:mb-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                {t.footer.termsOfService}
              </Link>
              <Link href="/privacy#cookies" className="hover:text-white transition-colors">
                {t.footer.cookiePolicy}
              </Link>
            </div>
            <p className="text-[11px] font-display font-bold uppercase tracking-widest text-white/20">{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
