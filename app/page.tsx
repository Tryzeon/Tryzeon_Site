'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Sparkles, HeartHandshake, Building2, MessageCircle, Store, Video, Shirt, TrendingUp } from "lucide-react";
import { FullBleedCarousel } from "@/components/FullBleedCarousel";
import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
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
        <FullBleedCarousel slides={heroSlides} auto={true} interval={5000} />
      </header>
      {/* Brand Statement - Luxury Editorial Style */}
      <Section id="statement" className="pt-24 pb-32 bg-fashion-stone">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <ScrollReveal direction="up" delay={0.2}>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-fashion-charcoal leading-[1.1] tracking-tighter">
                  Define Your <br />
                  <span className="italic text-fashion-gold">Digital Style</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4 pb-4">
              <ScrollReveal direction="up" delay={0.4}>
                <p className="text-xl md:text-2xl text-fashion-charcoal/60 font-display font-light leading-relaxed mb-8">
                  一張照片，即刻生成虛擬試穿影片。Tryzeon 正在重新定義時尚決策的未來。
                </p>
                <div className="flex gap-6">
                  <a
                    href="/experience"
                    className="group flex items-center space-x-3 text-xs font-bold uppercase tracking-[0.2em] text-fashion-charcoal"
                  >
                    <span>立即體驗</span>
                    <span className="w-8 h-[1px] bg-fashion-charcoal group-hover:w-12 transition-all duration-300"></span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Market Stats - Minimalist Fashion Grid */}
      <Section id="stats" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
            <ScrollReveal direction="up">
              <h3 className="text-xs font-display font-bold uppercase tracking-[0.4em] text-fashion-gold mb-4">Market Validation</h3>
              <h2 className="text-4xl md:text-6xl font-serif font-medium text-fashion-charcoal">數據證實價值</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-fashion-charcoal/40 text-sm mt-4 md:mt-0 max-w-xs uppercase tracking-widest font-display">
                Real-world data confirming the impact of virtual try-on technology.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-fashion-silver/30 border border-fashion-silver/30">
            <StaggerItem>
              <div className="bg-white p-12 h-full group hover:bg-fashion-stone transition-colors duration-500">
                <div className="text-6xl md:text-7xl font-serif font-light text-fashion-charcoal mb-6 group-hover:text-fashion-gold transition-colors">84<span className="text-2xl font-display">%</span></div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-fashion-charcoal/60">Consumer Interest in AR</div>
                <div className="mt-4 text-sm text-fashion-charcoal/40 leading-relaxed font-display">消費者對 AR 試用功能表現出強烈興趣</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-12 h-full group hover:bg-fashion-stone transition-colors duration-500">
                <div className="text-6xl md:text-7xl font-serif font-light text-fashion-charcoal mb-6 group-hover:text-fashion-gold transition-colors">71<span className="text-2xl font-display">%</span></div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-fashion-charcoal/60">Frequency Increase</div>
                <div className="mt-4 text-sm text-fashion-charcoal/40 leading-relaxed font-display">若支持試穿功能，開發者會更常選購</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-12 h-full group hover:bg-fashion-stone transition-colors duration-500">
                <div className="text-6xl md:text-7xl font-serif font-light text-fashion-charcoal mb-6 group-hover:text-fashion-gold transition-colors">+30<span className="text-2xl font-display">%</span></div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-fashion-charcoal/60">Conversion Rate</div>
                <div className="mt-4 text-sm text-fashion-charcoal/40 leading-relaxed font-display">顯著提升電商轉換率與銷售效果</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-12 h-full group hover:bg-fashion-stone transition-colors duration-500">
                <div className="text-6xl md:text-7xl font-serif font-light text-fashion-charcoal mb-6 group-hover:text-fashion-gold transition-colors">-25<span className="text-2xl font-display">%</span></div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-fashion-charcoal/60">Return Rate Reduction</div>
                <div className="mt-4 text-sm text-fashion-charcoal/40 leading-relaxed font-display">有效降低退貨率，優化營運成本</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* Target Audience - Magazine Aesthetic */}
      <Section id="audience" className="py-32 bg-fashion-stone overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-32 border-b border-fashion-charcoal/10 pb-8">
              <h2 className="text-5xl md:text-7xl font-serif font-medium text-fashion-charcoal">為誰而設計</h2>
              <p className="text-xs font-display font-bold uppercase tracking-[0.4em] text-fashion-gold mt-4 md:mt-0">Tailored Solutions for All</p>
            </div>
          </ScrollReveal>

          <div className="space-y-48">
            {/* B2B 小型服飾品牌 - Asymmetric Left */}
            <div className="relative grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <ScrollReveal direction="left">
                  <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden shadow-apple-lg">
                    <Image
                      src="/images/audience/b2b-fashion-store.jpg"
                      alt="Fashion Boutique Store"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 lg:-ml-24 z-10">
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="bg-white p-12 md:p-16 shadow-apple-lg">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-fashion-gold mb-6 block">01 / BRAND SOLUTIONS</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-medium text-fashion-charcoal mb-8 leading-tight">
                      低成本提升視覺<br />吸引力與轉換率
                    </h3>
                    <ul className="space-y-4 text-fashion-charcoal/60 font-display font-light text-sm mb-10">
                      <li className="flex items-start"><span className="mr-3 text-fashion-gold">•</span> 虛擬試穿後台與商品數位化工具</li>
                      <li className="flex items-start"><span className="mr-3 text-fashion-gold">•</span> 動態模擬影片生成服務</li>
                      <li className="flex items-start"><span className="mr-3 text-fashion-gold">•</span> 數據分析掌握顧客穿搭喜好</li>
                    </ul>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScu_hKsOTUVcuB0R3sKnRh9cAbn7zchO7W8izdgG1N9-WC9AQ/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-b border-fashion-charcoal pb-1 text-xs font-bold uppercase tracking-widest hover:text-fashion-gold hover:border-fashion-gold transition-all"
                    >
                      品牌合作申請
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* B2C 一般用戶 - Asymmetric Right */}
            <div className="relative grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-12 xl:col-span-12 mb-12 lg:hidden">
                {/* Mobile Image */}
              </div>
              <div className="lg:col-span-5 lg:col-start-2 z-10 order-1">
                <ScrollReveal direction="up" delay={0.3}>
                  <div className="bg-fashion-charcoal p-12 md:p-16 shadow-apple-lg text-white">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-fashion-gold mb-6 block">02 / PERSONAL EXPERIENCE</span>
                    <h3 className="text-3xl md:text-4xl font-serif font-medium mb-8 leading-tight">
                      告別試穿煩惱<br />遇見最美的自己
                    </h3>
                    <ul className="space-y-4 text-white/60 font-display font-light text-sm mb-10">
                      <li className="flex items-start"><span className="mr-3 text-fashion-gold">•</span> 個人 3D 虛擬模特定製</li>
                      <li className="flex items-start"><span className="mr-3 text-fashion-gold">•</span> 跨平台一鍵虛擬試穿</li>
                      <li className="flex items-start"><span className="mr-3 text-fashion-gold">•</span> AI 智能穿搭風格建議</li>
                    </ul>
                    <a
                      href="/join"
                      className="inline-block border-b border-fashion-gold pb-1 text-xs font-bold uppercase tracking-widest text-fashion-gold hover:text-white hover:border-white transition-all"
                    >
                      加入試用行列
                    </a>
                  </div>
                </ScrollReveal>
              </div>
              <div className="lg:col-span-7 lg:-ml-24 order-2">
                <ScrollReveal direction="right">
                  <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden shadow-apple-lg">
                    <Image
                      src="/images/audience/b2c-user-phone.jpg"
                      alt="Mobile Fashion App"
                      fill
                      className="object-cover sepia-[0.2] hover:sepia-0 transition-all duration-1000"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* 網紅/創作者 - Center Focus */}
            <div className="max-w-5xl mx-auto pt-12">
              <ScrollReveal direction="up">
                <div className="text-center">
                  <div className="inline-block border border-fashion-charcoal/10 px-6 py-2 rounded-full mb-8">
                    <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-fashion-charcoal">03 / CREATOR ECONOMY</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-serif font-medium text-fashion-charcoal mb-8">
                    釋放創意，打造專屬<br /><span className="italic text-fashion-gold">數位時尚影響力</span>
                  </h3>
                  <p className="max-w-xl mx-auto text-fashion-charcoal/60 font-display font-light mb-12 leading-relaxed">
                    與 Tryzeon 合作，探索 AI 科技與時尚創意的無限可能，為您的粉絲帶來前所未有的視覺盛宴。
                  </p>
                  <div className="flex flex-wrap justify-center gap-12 mb-16">
                    {[
                      { icon: Video, label: "動態影音生成" },
                      { icon: Shirt, label: "獨家虛擬裝扮" },
                      { icon: TrendingUp, label: "粉絲流量增長" }
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <feat.icon className="w-5 h-5 text-fashion-gold" />
                        <span className="text-xs font-bold uppercase tracking-widest text-fashion-charcoal">{feat.label}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="/join#creators"
                    className="px-12 py-5 bg-fashion-charcoal text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-fashion-gold transition-colors duration-300"
                  >
                    創作者合作申請
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Section - Luxury Fashion Grid */}
      <Section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-24">
              <div>
                <h3 className="text-xs font-display font-bold uppercase tracking-[0.4em] text-fashion-gold mb-4">Core Technology</h3>
                <h2 className="text-4xl md:text-6xl font-serif font-medium text-fashion-charcoal">五大核心功能</h2>
              </div>
              <p className="text-fashion-charcoal/40 text-sm mt-4 md:mt-0 max-w-xs uppercase tracking-widest font-display text-right">
                Comprehensive AI solutions for the modern fashion ecosystem.
              </p>
            </div>
          </ScrollReveal>

          {/* First row: 3 items */}
          <StaggerContainer className="grid md:grid-cols-3 gap-12 mb-12">
            <StaggerItem>
              <div className="group">
                <div className="relative aspect-square mb-8 overflow-hidden rounded-sm bg-fashion-stone border border-black/5 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-fashion-charcoal group-hover:text-fashion-gold transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-fashion-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                <h3 className="text-xl font-serif font-medium text-fashion-charcoal mb-4 tracking-wide">{t.features.aiTryOn.title}</h3>
                <p className="text-sm text-fashion-charcoal/50 leading-relaxed font-display font-light">{t.features.aiTryOn.desc}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group">
                <div className="relative aspect-square mb-8 overflow-hidden rounded-sm bg-fashion-stone border border-black/5 flex items-center justify-center">
                  <Video className="h-12 w-12 text-fashion-charcoal group-hover:text-fashion-gold transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-fashion-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                <h3 className="text-xl font-serif font-medium text-fashion-charcoal mb-4 tracking-wide">{t.features.videoGeneration.title}</h3>
                <p className="text-sm text-fashion-charcoal/50 leading-relaxed font-display font-light">{t.features.videoGeneration.desc}</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group">
                <div className="relative aspect-square mb-8 overflow-hidden rounded-sm bg-fashion-stone border border-black/5 flex items-center justify-center">
                  <Shirt className="h-12 w-12 text-fashion-charcoal group-hover:text-fashion-gold transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-fashion-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                <h3 className="text-xl font-serif font-medium text-fashion-charcoal mb-4 tracking-wide">{t.features.aiRecommendation.title}</h3>
                <p className="text-sm text-fashion-charcoal/50 leading-relaxed font-display font-light">{t.features.aiRecommendation.desc}</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Second row: 2 items centered */}
          <StaggerContainer className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <StaggerItem>
              <div className="group flex space-x-8">
                <div className="flex-shrink-0 w-24 h-24 rounded-sm bg-fashion-stone border border-black/5 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-fashion-charcoal group-hover:text-fashion-gold transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-fashion-charcoal mb-3 tracking-wide">{t.features.dataAnalytics.title}</h3>
                  <p className="text-sm text-fashion-charcoal/50 leading-relaxed font-display font-light">{t.features.dataAnalytics.desc}</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group flex space-x-8">
                <div className="flex-shrink-0 w-24 h-24 rounded-sm bg-fashion-stone border border-black/5 flex items-center justify-center">
                  <Store className="h-8 w-8 text-fashion-charcoal group-hover:text-fashion-gold transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-fashion-charcoal mb-3 tracking-wide">{t.features.tryOnRoom.title}</h3>
                  <p className="text-sm text-fashion-charcoal/50 leading-relaxed font-display font-light">{t.features.tryOnRoom.desc}</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal direction="up" delay={0.5}>
            <div className="text-center mt-24">
              <a
                href="/products"
                className="inline-flex items-center px-12 py-5 bg-fashion-charcoal text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-fashion-gold transition-colors duration-300"
              >
                查看完整產品介紹
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* About Section - Minimalist Luxury */}
      <Section id="about" className="py-32 bg-fashion-stone">
        <div className="max-w-5xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-20 h-20 flex-shrink-0 border border-fashion-gold/30 rounded-full flex items-center justify-center">
                <HeartHandshake className="h-8 w-8 text-fashion-gold" />
              </div>
              <div className="text-left">
                <h2 className="text-xs font-display font-bold uppercase tracking-[0.4em] text-fashion-gold mb-4">Core Vision</h2>
                <h3 className="text-3xl md:text-5xl font-serif font-medium text-fashion-charcoal mb-8">{t.about.title}</h3>
                <p className="text-xl text-fashion-charcoal/60 font-display font-light leading-relaxed italic border-l-2 border-fashion-gold pl-8">
                  {t.about.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <ScrollReveal direction="up">
            <Building2 className="mx-auto h-12 w-12 text-fashion-charcoal mb-8 opacity-20" />
            <h2 className="text-xs font-display font-bold uppercase tracking-[0.4em] text-fashion-gold mb-4">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-medium text-fashion-charcoal mb-8">{t.team.title}</h3>
            <p className="max-w-2xl mx-auto text-fashion-charcoal/60 font-display font-light text-lg">
              {t.team.desc}
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Partner Logos Section */}
      <Section id="partners" className="py-32 bg-fashion-stone/50 border-y border-fashion-silver/20">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-xs font-display font-bold uppercase tracking-[0.4em] text-fashion-gold mb-4">Our Partners</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-medium text-fashion-charcoal mb-6">{t.partners.title}</h3>
              <p className="text-fashion-charcoal/40 uppercase tracking-widest font-display text-[10px]">{t.partners.desc}</p>
            </div>
            <div className="bg-white/40 backdrop-blur-md p-1 rounded-3xl overflow-hidden shadow-apple-lg border border-white/40">
              <PartnerMarquee />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-24">
              <h2 className="text-xs font-display font-bold uppercase tracking-[0.4em] text-fashion-gold mb-4">Support</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-medium text-fashion-charcoal mb-8 italic">常見問題</h3>
              <p className="text-fashion-charcoal/40 font-display font-light tracking-wide">
                關於 Tryzeon 的常見疑問，我們都在這裡為您解答
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-fashion-stone/30 p-8 rounded-2xl border border-black/5">
              <FAQ items={faqData[currentLang as keyof typeof faqData] || faqData['zh-TW']} />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-48 bg-fashion-charcoal text-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-fashion-gold/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fashion-gold/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
          <ScrollReveal direction="up">
            <MessageCircle className="mx-auto h-12 w-12 text-fashion-gold mb-8 animate-float" />
            <h2 className="text-xs font-display font-bold uppercase tracking-[0.4em] text-fashion-gold mb-6">Contact Us</h2>
            <h3 className="text-4xl md:text-7xl font-serif font-medium mb-12">{t.contact.title}</h3>
            <p className="text-xl text-white/60 font-display font-light mb-16 px-12 leading-relaxed">
              {t.contact.desc}
            </p>
            <a
              href={`mailto:${t.contact.email}`}
              className="text-2xl md:text-4xl font-serif italic text-white hover:text-fashion-gold transition-colors duration-300 border-b border-white/20 pb-4"
            >
              {t.contact.email}
            </a>
          </ScrollReveal>
        </div>
      </Section>

      <Footer t={t} />
    </div>
  );
}
