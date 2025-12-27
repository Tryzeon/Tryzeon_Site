'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Sparkles, HeartHandshake, Building2, MessageCircle, Store, Video, Shirt, TrendingUp } from "lucide-react";
import { FullBleedCarousel } from "@/components/FullBleedCarousel";
import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem, ScaleReveal } from "@/components/ScrollReveal";
import { brand } from "@/lib/constants";
import { translations } from "@/lib/translations";
import { faqData } from "@/lib/faq-data";
import { heroSlides } from "@/lib/hero-slides";

// 延遲載入非關鍵組件
const PartnerMarquee = dynamic(() => import("@/components/PartnerMarquee").then(mod => ({ default: mod.PartnerMarquee })), {
  loading: () => <div className="h-32 flex items-center justify-center"><span className="text-gray-400">載入中...</span></div>,
  ssr: true
});

const FAQ = dynamic(() => import("@/components/FAQ").then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="h-64 flex items-center justify-center"><span className="text-gray-400">載入中...</span></div>,
  ssr: true
});

export default function TryzeonLanding() {
  const [currentLang, setCurrentLang] = useState('zh-TW');
  const t = translations[currentLang as keyof typeof translations] || translations['zh-TW'];

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* 巴黎時尚裝飾元素 */}
      <div className="fixed inset-0 pointer-events-none">
        {/* 左上角優雅線條 */}
        <div className="absolute top-0 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M 0,100 Q 50,50 100,100 T 200,100" stroke="url(#gold-gradient)" strokeWidth="0.5" fill="none" />
            <path d="M 0,120 Q 50,70 100,120 T 200,120" stroke="url(#gold-gradient)" strokeWidth="0.3" fill="none" />
            <defs>
              <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* 右下角科技感圖案 */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="150" cy="150" r="40" stroke="url(#tech-gradient)" strokeWidth="0.5" fill="none" />
            <circle cx="150" cy="150" r="60" stroke="url(#tech-gradient)" strokeWidth="0.3" fill="none" />
            <circle cx="150" cy="150" r="80" stroke="url(#tech-gradient)" strokeWidth="0.2" fill="none" />
            <defs>
              <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF69B4" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

      <header className="relative">
        <FullBleedCarousel slides={heroSlides} auto={true} interval={3500} />
      </header>

      {/* Brand Statement - Apple 液態玻璃風格 */}
      <Section id="statement" className="pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
              重新定義<br />
              <span className="bg-gradient-to-r from-glass-blue to-glass-purple bg-clip-text text-transparent">穿搭決策</span>體驗
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              一張照片，即刻生成虛擬試穿影片
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.6}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/experience"
                className="glass-button inline-flex items-center justify-center px-8 py-3.5 text-white font-medium rounded-full"
              >
                立即體驗
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white/60 backdrop-blur-xl text-gray-900 font-medium rounded-full border border-white/40 hover:bg-white/80 transition-all duration-200 shadow-apple"
              >
                了解更多
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Market Stats Section - Apple 液態玻璃風格 */}
      <Section id="stats" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">市場驗證</h2>
              <p className="text-lg text-gray-600">真實數據證實虛擬試穿的價值</p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8 text-center group">
              <div className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-br from-glass-blue to-glass-purple bg-clip-text text-transparent">84%</div>
              <div className="text-sm text-gray-600">消費者對 AR<br />試用功能感興趣</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8 text-center group">
              <div className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-br from-glass-purple to-glass-pink bg-clip-text text-transparent">71%</div>
              <div className="text-sm text-gray-600">若支持試穿功能<br />會更常購買</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8 text-center group">
              <div className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-br from-glass-green to-glass-teal bg-clip-text text-transparent">+30%</div>
              <div className="text-sm text-gray-600">轉換率<br />提升</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8 text-center group">
              <div className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-br from-glass-orange to-glass-pink bg-clip-text text-transparent">-25%</div>
              <div className="text-sm text-gray-600">退貨率<br />降低</div>
            </div>
          </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* Target Audience Section - Redesigned */}
      <Section id="audience" className="py-20 border-t border-black/5">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">為誰而設計</h2>
            <p className="text-gray-600">三大客群，完整解決方案</p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* B2B 小型服飾品牌 */}
          <ScrollReveal direction="left">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: brand.deepBeige, color: 'white' }}>
                  小型服飾品牌
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  低成本提升視覺吸引力與轉換率
                </h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• 虛擬試穿後台與商品數位化工具</li>
                  <li>• 動態模擬影片生成服務</li>
                  <li>• 數據分析掌握顧客穿搭喜好</li>
                  <li>• 降低退貨率，提升轉換率</li>
                </ul>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScu_hKsOTUVcuB0R3sKnRh9cAbn7zchO7W8izdgG1N9-WC9AQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 text-white font-semibold rounded-lg transition-colors"
                  style={{ backgroundColor: brand.ink }}
                >
                  品牌合作申請表單
                </a>
              </div>
              <div className="relative rounded-2xl h-64 overflow-hidden shadow-sm order-1 md:order-2">
                <Image
                  src="/images/audience/b2b-fashion-store.jpg"
                  alt="Fashion Boutique Store"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* B2C 一般用戶 */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl h-64 overflow-hidden shadow-sm md:order-first order-1">
                <Image
                  src="/images/audience/b2c-user-phone.jpg"
                  alt="Mobile Fashion App"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <div className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: brand.deepBeige, color: 'white' }}>
                  一般用戶
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  快速找到適合的穿搭，提升購物信心
                </h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• 一張照片即可虛擬試穿</li>
                  <li>• 生成明星般的穿搭影片</li>
                  <li>• 每日個人化穿搭推薦</li>
                  <li>• 第三人稱視角看穿搭效果</li>
                </ul>
                <a
                  href="/join"
                  className="inline-block px-8 py-3 text-white font-semibold rounded-lg transition-colors"
                  style={{ backgroundColor: brand.ink }}
                >
                  加入我們
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* 創作者 */}
          <ScrollReveal direction="left" delay={0.3}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: brand.deepBeige, color: 'white' }}>
                  時尚創作者
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  製作專業穿搭內容，獲得分潤收益
                </h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li>• 製作穿搭示範與短影音內容</li>
                  <li>• 創作者分潤計畫</li>
                  <li>• 社群平台裂變式傳播</li>
                  <li>• 擴大影響力與粉絲基礎</li>
                </ul>
                <a
                  href="/join#creators"
                  className="inline-block px-8 py-3 text-white font-semibold rounded-lg transition-colors"
                  style={{ backgroundColor: brand.ink }}
                >
                  創作者合作申請
                </a>
              </div>
              <div className="relative rounded-2xl h-64 overflow-hidden shadow-sm order-1 md:order-2">
                <Image
                  src="/images/audience/creator-studio.jpg"
                  alt="Content Creator Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Features Section - Apple 液態玻璃風格 */}
      <Section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">五大核心功能</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">完整的 AI 虛擬試穿解決方案</p>
            </div>
          </ScrollReveal>

          {/* First row: 3 items */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-6">
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8 h-full group">
              <div className="w-20 h-20 rounded-full backdrop-blur-2xl border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(0, 122, 255, 0.05) 100%)', boxShadow: '0 8px 32px 0 rgba(0, 122, 255, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)' }}>
                <Sparkles className="h-9 w-9 text-glass-blue" style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 122, 255, 0.4))' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.features.aiTryOn.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.aiTryOn.desc}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8 h-full group">
              <div className="w-20 h-20 rounded-full backdrop-blur-2xl border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(175, 82, 222, 0.1) 0%, rgba(175, 82, 222, 0.05) 100%)', boxShadow: '0 8px 32px 0 rgba(175, 82, 222, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)' }}>
                <Video className="h-9 w-9 text-glass-purple" style={{ filter: 'drop-shadow(0 2px 8px rgba(175, 82, 222, 0.4))' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.features.videoGeneration.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.videoGeneration.desc}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8 h-full group">
              <div className="w-20 h-20 rounded-full backdrop-blur-2xl border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(255, 45, 85, 0.1) 0%, rgba(255, 45, 85, 0.05) 100%)', boxShadow: '0 8px 32px 0 rgba(255, 45, 85, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)' }}>
                <Shirt className="h-9 w-9 text-glass-pink" style={{ filter: 'drop-shadow(0 2px 8px rgba(255, 45, 85, 0.4))' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.features.aiRecommendation.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.aiRecommendation.desc}</p>
            </div>
          </StaggerItem>
          </StaggerContainer>

          {/* Second row: 2 items centered */}
          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8 group">
              <div className="w-20 h-20 rounded-full backdrop-blur-2xl border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(52, 199, 89, 0.1) 0%, rgba(52, 199, 89, 0.05) 100%)', boxShadow: '0 8px 32px 0 rgba(52, 199, 89, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)' }}>
                <TrendingUp className="h-9 w-9 text-glass-green" style={{ filter: 'drop-shadow(0 2px 8px rgba(52, 199, 89, 0.4))' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.features.dataAnalytics.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.dataAnalytics.desc}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="glass-card rounded-3xl p-8 group">
              <div className="w-20 h-20 rounded-full backdrop-blur-2xl border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(255, 149, 0, 0.1) 0%, rgba(255, 149, 0, 0.05) 100%)', boxShadow: '0 8px 32px 0 rgba(255, 149, 0, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)' }}>
                <Store className="h-9 w-9 text-glass-orange" style={{ filter: 'drop-shadow(0 2px 8px rgba(255, 149, 0, 0.4))' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.features.tryOnRoom.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.tryOnRoom.desc}</p>
            </div>
          </StaggerItem>
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.5}>
            <div className="text-center mt-12">
              <a
                href="/products"
                className="glass-button inline-flex items-center gap-2 px-8 py-3.5 text-white font-medium rounded-full group"
              >
                查看完整產品介紹
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="py-20 border-t border-black/10">
        <ScaleReveal>
          <div className="max-w-3xl mx-auto text-center">
            <HeartHandshake className="mx-auto h-10 w-10 text-neutral-800" />
            <h2 className="mt-4 text-2xl font-semibold">{t.about.title}</h2>
            <p className="mt-3 text-neutral-700">
              {t.about.desc}
            </p>
          </div>
        </ScaleReveal>
      </Section>

      {/* Team Section */}
      <Section id="team" className="py-20 border-t border-black/10">
        <ScaleReveal delay={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="mx-auto h-10 w-10 text-neutral-800" />
            <h2 className="mt-4 text-2xl font-semibold">{t.team.title}</h2>
            <p className="mt-3 text-neutral-700">
              {t.team.desc}
            </p>
          </div>
        </ScaleReveal>
      </Section>

      {/* Partner Logos Section */}
      <Section id="partners" className="py-20 border-t border-black/10">
        <ScrollReveal direction="up">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-semibold">{t.partners.title}</h2>
            <p className="mt-3 text-neutral-700">{t.partners.desc}</p>
            <div className="mt-8">
              <PartnerMarquee />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="py-20 border-t border-black/10">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">常見問題</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              關於 Tryzeon 的常見疑問，我們都在這裡為您解答
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <FAQ items={faqData[currentLang as keyof typeof faqData] || faqData['zh-TW']} />
        </ScrollReveal>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-20 border-t border-black/10">
        <ScaleReveal>
          <div className="max-w-2xl mx-auto text-center">
            <MessageCircle className="mx-auto h-10 w-10 text-neutral-800" />
            <h2 className="mt-4 text-2xl font-semibold">{t.contact.title}</h2>
            <p className="mt-3 text-neutral-700">{t.contact.desc}</p>
            <a href={`mailto:${t.contact.email}`} className="mt-2 inline-block text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors">
              {t.contact.email}
            </a>
          </div>
        </ScaleReveal>
      </Section>

      <Footer t={t} />
    </div>
  );
}
