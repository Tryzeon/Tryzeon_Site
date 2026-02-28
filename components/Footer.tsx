'use client';

import { useState } from 'react';
import { Instagram, Mail, Linkedin, MapPin, Check, Loader2 } from 'lucide-react';
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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScu_hKsOTUVcuB0R3sKnRh9cAbn7zchO7W8izdgG1N9-WC9AQ/formResponse';
  // Google Form email field entry ID — update this if the form changes
  const EMAIL_ENTRY = 'entry.1045781291';

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim()) {
      setErrorMsg('請輸入 Email 地址');
      setStatus('error');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg('請輸入有效的 Email 格式');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const formData = new URLSearchParams();
      formData.append(EMAIL_ENTRY, email);

      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      // no-cors always resolves — treat as success
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setErrorMsg('送出失敗，請稍後再試');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const footerLinks = {
    products: [
      { label: t.footer.aiVirtualTryOn, href: '/products' },
      { label: t.footer.videoGeneration, href: '/products' },
      { label: t.footer.aiRecommendation, href: '/products' },
      { label: t.footer.dataAnalytics, href: '/products' }
    ],
    company: [
      { label: '關於我們', href: '/#about' },
      { label: '創作者生態', href: '/join' },
      { label: '立即體驗', href: '/experience' }
    ],
    resources: [
      { label: '常見問題', href: '/#faq' },
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                  placeholder="輸入您的 Email"
                  disabled={status === 'loading' || status === 'success'}
                  className={`px-6 py-4 bg-white/5 border rounded-full text-white placeholder:text-white/30 focus:outline-none focus:bg-white/10 transition-all w-full sm:w-80 disabled:opacity-50 ${status === 'error' ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-[#0066CC]'
                    }`}
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`px-8 py-4 rounded-full font-bold transition-all whitespace-nowrap shadow-lg disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[120px] ${status === 'success'
                    ? 'bg-emerald-500 shadow-emerald-500/20 scale-100'
                    : 'bg-[#0066CC] hover:bg-[#0077ED] shadow-[#0066CC]/20 hover:scale-105 active:scale-95'
                    }`}
                >
                  {status === 'loading' && <Loader2 className="h-5 w-5 animate-spin" />}
                  {status === 'success' && <Check className="h-5 w-5" />}
                  {status === 'loading' ? '送出中...' : status === 'success' ? '訂閱成功！' : '訂閱'}
                </button>
              </div>
              {status === 'error' && errorMsg && (
                <p className="text-red-400 text-sm pl-2 animate-pulse">{errorMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
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
                    className="text-white/70 hover:text-[#0066CC] transition-colors text-sm font-medium"
                  >
                    {link.label}
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
