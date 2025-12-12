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
    <div className="min-h-screen w-full" style={{ backgroundColor: brand.lightBg }}>
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

      <header className="relative">
        <FullBleedCarousel slides={heroSlides} auto={true} interval={3500} />
      </header>

      {/* Brand Statement */}
      <Section id="statement" className="py-32 text-center">
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            重新定義<br />穿搭決策體驗
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4}>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            一張照片，即刻生成虛擬試穿影片
          </p>
        </ScrollReveal>
      </Section>

      {/* Market Stats Section - Redesigned */}
      <Section id="stats" className="py-20 border-t border-black/5">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">市場驗證</h2>
            <p className="text-gray-600">真實數據證實虛擬試穿的價值</p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          <StaggerItem>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3" style={{ color: brand.deepBeige }}>84%</div>
              <div className="text-sm text-gray-600 leading-relaxed">消費者對 AR<br />試用功能感興趣</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3" style={{ color: brand.deepBeige }}>71%</div>
              <div className="text-sm text-gray-600 leading-relaxed">若支持試穿功能<br />會更常購買</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3" style={{ color: brand.deepBeige }}>+30%</div>
              <div className="text-sm text-gray-600 leading-relaxed">轉換率<br />提升</div>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3" style={{ color: brand.deepBeige }}>-25%</div>
              <div className="text-sm text-gray-600 leading-relaxed">退貨率<br />降低</div>
            </div>
          </StaggerItem>
        </StaggerContainer>
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

      {/* Features Section */}
      <Section id="features" className="py-20 border-t border-black/10">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">五大核心功能</h2>
            <p className="text-lg text-gray-600">完整的 AI 虛擬試穿解決方案</p>
          </div>
        </ScrollReveal>

        {/* First row: 3 items */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          <StaggerItem>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-4">
                <Sparkles className="h-7 w-7 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.aiTryOn.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.aiTryOn.desc}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-4">
                <Video className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.videoGeneration.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.videoGeneration.desc}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-4">
                <Shirt className="h-7 w-7 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.aiRecommendation.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.aiRecommendation.desc}</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Second row: 2 items centered */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <StaggerItem>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.dataAnalytics.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.dataAnalytics.desc}</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center mb-4">
                <Store className="h-7 w-7 text-pink-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.tryOnRoom.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{t.features.tryOnRoom.desc}</p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.5}>
          <div className="text-center mt-12">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors group"
            >
              查看完整產品介紹
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
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
