'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Sparkles, HeartHandshake, Building2, MessageCircle, Store, Video, Shirt, TrendingUp, Mail } from "lucide-react";
import { FullBleedCarousel } from "@/components/FullBleedCarousel";
import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
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
    <div className="min-h-screen w-full bg-[#F5F5F7] relative overflow-hidden font-display selection:bg-[#0066CC] selection:text-white">
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

      <header className="relative">
        <FullBleedCarousel slides={heroSlides} auto={true} interval={5000} />
      </header>

      {/* Brand Statement - Apple Style: Centered & Impactful */}
      <Section id="statement" className="py-40 md:py-60 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#1D1D1F] leading-[0.95] tracking-tighter mb-12">
              The Future of <br />
              <span className="text-[#0066CC]">Digital Style</span>
            </h2>
            <p className="text-2xl md:text-3xl text-[#1D1D1F] font-medium leading-relaxed max-w-3xl mx-auto mb-16 text-balance opacity-90">
              一張照片，即刻生成虛擬試穿影片。<br />Tryzeon 正在重新定義時尚決策的未來。
            </p>
            <div className="flex justify-center">
              <a
                href="/experience"
                className="group flex items-center space-x-2 text-[#0066CC] font-bold text-2xl hover:underline"
              >
                <span>立即體驗</span>
                <span className="transition-transform duration-300 group-hover:translate-x-2 text-3xl">→</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Market Stats - Apple Style: Clean Grid */}
      <Section id="stats" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-[#86868B] mb-6">Market Validation</h1>
              <h2 className="text-4xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight">數據證實價值</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "84%", label: "AR Interest", desc: "消費者對 AR 試用功能表現出強烈興趣" },
              { val: "71%", label: "Frequency", desc: "支持試穿功能會顯著增加選購頻率" },
              { val: "30%", label: "Conversion", desc: "有效提升電商轉換率與銷售效果" },
              { val: "25%", label: "Return Rate", desc: "有效降低退貨率，優化營運成本" }
            ].map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-[40px] p-12 h-full shadow-sm hover:shadow-xl transition-all duration-500 text-center border border-black/[0.02]">
                  <div className="text-6xl md:text-7xl font-bold text-[#1D1D1F] mb-6 tracking-tighter">{stat.val}</div>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-6">{stat.label}</div>
                  <p className="text-[#86868B] text-base leading-relaxed font-medium">{stat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Target Audience - Apple Style: Product Focus Cards */}
      <Section id="audience" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-24">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-6">Tailored Solutions</h2>
            <h2 className="text-5xl md:text-7xl font-bold text-[#1D1D1F] tracking-tight">為誰而設計</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-10">
            {/* B2B小型服飾品牌 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="group bg-[#F5F5F7] rounded-[48px] p-12 md:p-16 h-full flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700">
                <div className="max-w-md">
                  <span className="text-[#86868B] text-sm font-bold uppercase tracking-widest mb-4 block">01 / Brand Solutions</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-8 leading-tight">低成本提升視覺<br />吸引力與轉換率</h3>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScu_hKsOTUVcuB0R3sKnRh9cAbn7zchO7W8izdgG1N9-WC9AQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 bg-[#0066CC] text-white rounded-full font-bold transition-all hover:bg-[#0077ED] hover:scale-105"
                  >
                    品牌合作申請
                  </a>
                </div>
                <div className="mt-12 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
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

            {/* B2C一般用戶 */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="group bg-[#F5F5F7] rounded-[48px] p-12 md:p-16 h-full flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700">
                <div className="max-w-md">
                  <span className="text-[#86868B] text-sm font-bold uppercase tracking-widest mb-4 block">02 / Personal Experience</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-8 leading-tight">告別試穿煩惱<br />遇見最美的自己</h3>
                  <a
                    href="/join"
                    className="inline-flex items-center px-8 py-3 bg-[#1D1D1F] text-white rounded-full font-bold transition-all hover:bg-black hover:scale-105"
                  >
                    加入試用行列
                  </a>
                </div>
                <div className="mt-12 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src="/images/audience/b2c-user-phone.jpg"
                    alt="Mobile Fashion App"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Features Section - Apple Style: Clean Bento Grid */}
      <Section id="features" className="py-40 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-32">
            <h1 className="text-sm font-bold uppercase tracking-[0.3em] text-[#86868B] mb-6">Core Technology</h1>
            <h2 className="text-5xl md:text-7xl font-bold text-[#1D1D1F] tracking-tight">五大核心功能</h2>
          </ScrollReveal>

          {/* First row: 3 features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Sparkles className="h-10 w-10 text-[#0066CC]" />, title: t.features.aiTryOn.title, desc: t.features.aiTryOn.desc },
              { icon: <Video className="h-10 w-10 text-[#0066CC]" />, title: t.features.videoGeneration.title, desc: t.features.videoGeneration.desc },
              { icon: <Shirt className="h-10 w-10 text-[#0066CC]" />, title: t.features.aiRecommendation.title, desc: t.features.aiRecommendation.desc }
            ].map((feature, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="group bg-white rounded-[40px] p-10 h-full shadow-sm hover:shadow-xl transition-all duration-500 border border-black/[0.02]">
                  <div className="w-16 h-16 rounded-[20px] bg-[#F5F5F7] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4">{feature.title}</h3>
                  <p className="text-[#86868B] text-base leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Second row: 2 features centered */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
            {[
              { icon: <TrendingUp className="h-10 w-10 text-[#0066CC]" />, title: t.features.dataAnalytics.title, desc: t.features.dataAnalytics.desc },
              { icon: <Store className="h-10 w-10 text-[#0066CC]" />, title: t.features.tryOnRoom.title, desc: t.features.tryOnRoom.desc }
            ].map((feature, i) => (
              <ScrollReveal key={i + 3} direction="up" delay={(i + 3) * 0.1}>
                <div className="group bg-white rounded-[40px] p-10 h-full shadow-sm hover:shadow-xl transition-all duration-500 border border-black/[0.02]">
                  <div className="w-16 h-16 rounded-[20px] bg-[#F5F5F7] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4">{feature.title}</h3>
                  <p className="text-[#86868B] text-base leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="text-center mt-24">
              <a
                href="/products"
                className="inline-flex items-center px-12 py-5 bg-[#1D1D1F] text-white hover:bg-black rounded-full transition-all duration-300 font-bold text-xl shadow-2xl hover:scale-105 active:scale-95"
              >
                查看完整產品介紹
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* About Section - Apple Style: Focused Vision */}
      <Section id="about" className="py-32 md:py-48 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <div className="w-24 h-24 bg-[#F5F5F7] rounded-3xl flex items-center justify-center mx-auto mb-12">
              <HeartHandshake className="h-12 w-12 text-[#0066CC]" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#86868B] mb-6">Core Vision</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-[#1D1D1F] mb-12">{t.about.title}</h3>
            <p className="text-2xl md:text-3xl text-[#86868B] font-medium leading-relaxed max-w-3xl mx-auto text-balance">
              "{t.about.desc}"
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Team Section - Apple Style: Minimalist People Focus */}
      <Section id="team" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <Building2 className="mx-auto h-16 w-16 text-[#86868B] mb-10 opacity-30" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#86868B] mb-6">Who We Are</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-[#1D1D1F] mb-10">{t.team.title}</h3>
            <p className="max-w-3xl mx-auto text-[#86868B] font-medium text-xl leading-relaxed">
              {t.team.desc}
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Partner Logos Section - Apple Style: Glass Floating */}
      <Section id="partners" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#86868B] mb-6">Our Partners</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-8">{t.partners.title}</h3>
              <p className="text-[#86868B] font-medium uppercase tracking-widest text-sm">{t.partners.desc}</p>
            </div>
            <div className="bg-[#F5F5F7] rounded-[40px] p-2 overflow-hidden border border-black/[0.05]">
              <PartnerMarquee />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* FAQ Section - Apple Style: Clean Accordion */}
      <Section id="faq" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#86868B] mb-6">Support</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-[#1D1D1F] mb-10">常見問題</h3>
              <p className="text-[#86868B] font-medium text-lg lg:text-xl">
                關於 Tryzeon 的常見疑問，我們都在這裡為您解答
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm border border-black/[0.03]">
              <FAQ items={faqData[currentLang as keyof typeof faqData] || faqData['zh-TW']} />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Contact Section - Apple Style: Light & Inviting */}
      <Section id="contact" className="py-32 md:py-48 bg-white relative overflow-hidden">
        {/* Subtle gradient orb */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#0066CC]/5 to-[#0066CC]/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up">
            <div className="w-20 h-20 bg-[#F5F5F7] rounded-[24px] flex items-center justify-center mx-auto mb-10">
              <MessageCircle className="h-10 w-10 text-[#0066CC]" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#86868B] mb-6">Contact Us</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-[#1D1D1F] mb-8 tracking-tight">{t.contact.title}</h3>
            <p className="text-xl md:text-2xl text-[#86868B] font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
              {t.contact.desc}
            </p>
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex items-center px-10 py-5 bg-[#0066CC] text-white rounded-full font-bold text-xl transition-all duration-300 hover:bg-[#0077ED] hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-6 w-6 mr-3" />
              {t.contact.email}
            </a>
          </ScrollReveal>
        </div>
      </Section>

      <Footer t={t} />
    </div>
  );
}
