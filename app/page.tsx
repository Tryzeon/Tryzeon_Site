'use client';

import { useState } from "react";
import Image from "next/image";
import { Sparkles, HeartHandshake, Store, Video, Shirt, TrendingUp, Mail } from "lucide-react";
import { FullBleedCarousel } from "@/components/FullBleedCarousel";
import { Navigation } from "@/components/Navigation";
import { Section } from "@/components/Section";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxText, ScrollZoomCard, Scroll3D, ScrollCounter } from "@/components/ScrollLinkedAnimations";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import { translations } from "@/lib/translations";
import { faqData } from "@/lib/faq-data";
import { heroSlides } from "@/lib/hero-slides";

import { PartnerMarquee } from "@/components/PartnerMarquee";
import { FAQ } from "@/components/FAQ";
import { AppleButton, AppleLink } from "@/components/MicroInteractions";

export default function TryzeonLanding() {
  const [currentLang, setCurrentLang] = useState('zh-TW');
  const t = translations[currentLang as keyof typeof translations] || translations['zh-TW'];

  return (
    <div className="min-h-screen w-full bg-[#F5F5F7] relative overflow-hidden font-display selection:bg-[#0066CC] selection:text-white">
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

      <header className="relative">
        <FullBleedCarousel slides={heroSlides} auto={true} interval={5000} />
      </header>

      {/* Brand Statement - Apple Style: Centered & Impactful with Parallax */}
      <Section id="statement" className="py-20 md:py-64 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ParallaxText>
            <h2 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold text-[#1D1D1F] leading-[0.95] tracking-tighter mb-10 md:mb-12">
              The Future of <br />
              <span className="text-[#0066CC]">Digital Style</span>
            </h2>
          </ParallaxText>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl md:text-3xl text-[#1D1D1F] font-medium leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16 text-balance opacity-90">
              一張照片，即刻生成虛擬試穿影片。<br />Tryzeon 正在重新定義時尚決策的未來。
            </p>
            <div className="flex justify-center">
              <AppleLink 
                href="/experience" 
                className="text-xl md:text-2xl font-bold"
              >
                立即體驗
              </AppleLink>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Market Stats - Apple Style: Clean Grid */}
      <Section id="stats" className="py-20 md:py-48 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-24">
              <h1 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#86868B] mb-4 md:mb-6">Market Validation</h1>
              <h2 className="text-3xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight">數據證實價值</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { val: 84, suffix: "%", label: "AR Interest", desc: "消費者對 AR 試用功能表現出強烈興趣" },
              { val: 71, suffix: "%", label: "Frequency", desc: "支持試穿功能會顯著增加選購頻率" },
              { val: 30, suffix: "%", label: "Conversion", desc: "有效提升電商轉換率與銷售效果" },
              { val: 25, suffix: "%", label: "Return Rate", desc: "有效降低退貨率，優化營運成本" }
            ].map((stat, i) => (
              <Scroll3D key={i}>
                <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-12 h-full shadow-sm text-center border border-black/[0.02] card-hover-lift">
                  <div className="text-5xl md:text-7xl font-bold text-[#1D1D1F] mb-4 md:mb-6 tracking-tighter stat-highlight">
                    <ScrollCounter target={stat.val} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-4 md:mb-6">{stat.label}</div>
                  <p className="text-[#86868B] text-sm md:text-base leading-relaxed font-medium">{stat.desc}</p>
                </div>
              </Scroll3D>
            ))}
          </div>
        </div>
      </Section>

      {/* Target Audience - Apple Style: Product Focus Cards */}
      <Section id="audience" className="py-20 md:py-56 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16 md:mb-32">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-4 md:mb-6">Tailored Solutions</h2>
            <h2 className="text-4xl md:text-7xl font-bold text-[#1D1D1F] tracking-tight">為誰而設計</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* B2B小型服飾品牌 */}
            <ScrollZoomCard>
              <div className="group bg-[#F5F5F7] rounded-[32px] md:rounded-[48px] p-10 md:p-16 h-full flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700">
                <div className="max-w-md">
                  <span className="text-[#86868B] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 block">01 / Brand Solutions</span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-6 md:mb-8 leading-tight">低成本提升視覺<br />吸引力與轉換率</h3>
                  <AppleButton
                    variant="primary"
                    size="md"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScu_hKsOTUVcuB0R3sKnRh9cAbn7zchO7W8izdgG1N9-WC9AQ/viewform?usp=header', '_blank')}
                  >
                    品牌合作申請
                  </AppleButton>
                </div>
                <div className="mt-8 md:mt-12 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src="/images/audience/b2b-fashion-store.jpg"
                    alt="Fashion Boutique Store"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollZoomCard>

            {/* B2C一般用戶 */}
            <ScrollZoomCard>
              <div className="group bg-[#F5F5F7] rounded-[32px] md:rounded-[48px] p-10 md:p-16 h-full flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700">
                <div className="max-w-md">
                  <span className="text-[#86868B] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 block">02 / Personal Experience</span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-6 md:mb-8 leading-tight">告別試穿煩惱<br />遇見最美的自己</h3>
                  <AppleButton
                    variant="secondary"
                    size="md"
                    className="!bg-[#1D1D1F] !text-white hover:!bg-[#2D2D2F]"
                    onClick={() => window.location.href = '/join'}
                  >
                    加入試用行列
                  </AppleButton>
                </div>
                <div className="mt-8 md:mt-12 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src="/images/audience/b2c-user-phone.jpg"
                    alt="Mobile Fashion App"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollZoomCard>
          </div>
        </div>
      </Section>

      {/* Features Section - Apple Style: Bento Grid */}
      <Section id="features" className="py-20 md:py-48 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16 md:mb-24">
            <h1 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#86868B] mb-4 md:mb-6">Core Technology</h1>
            <h2 className="text-4xl md:text-7xl font-bold text-[#1D1D1F] tracking-tight">五大核心功能</h2>
          </ScrollReveal>

          <BentoGrid>
            {/* Feature 1: AI Virtual Try-On */}
            <BentoCard
              colSpan={2}
              title={t.features.aiTryOn.title}
              description={t.features.aiTryOn.desc}
              icon={<Sparkles />}
              graphic={
                <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50 bg-gradient-to-l from-[#0066CC]/30 to-transparent" />
              }
            />

            {/* Feature 2: Video Generation */}
            <BentoCard
              title={t.features.videoGeneration.title}
              description={t.features.videoGeneration.desc}
              icon={<Video />}
              graphic={
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E0F2FF]/50 to-transparent opacity-50" />
              }
            />

            {/* Feature 3: AI Recommendation */}
            <BentoCard
              title={t.features.aiRecommendation.title}
              description={t.features.aiRecommendation.desc}
              icon={<Shirt />}
            />

            {/* Feature 4: Data Analytics */}
            <BentoCard
              title={t.features.dataAnalytics.title}
              description={t.features.dataAnalytics.desc}
              icon={<TrendingUp />}
            />

            {/* Feature 5: Try-On Room */}
            <BentoCard
              title={t.features.tryOnRoom.title}
              description={t.features.tryOnRoom.desc}
              icon={<Store />}
            />
          </BentoGrid>

          {/* AI Try-On Demo Video Section */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-24 md:mt-32 max-w-5xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-3 md:mb-4 block">Live Demo</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1D1D1F] tracking-tight">AI 虛擬試穿效果展示</h3>
              </div>
              
              <div className="relative group">
                {/* Video Container with Apple-style rounded corners */}
                <div className="relative aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#1D1D1F] shadow-2xl border border-black/10">
                  {/* Placeholder for demo video - replace src with actual video */}
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/video-poster.jpg"
                  >
                    <source src="/videos/ai-tryon-demo.mp4" type="video/mp4" />
                    {/* Fallback content */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0066CC]/20 to-[#1D1D1F]">
                      <div className="text-center text-white">
                        <Video className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 opacity-60" />
                        <p className="text-base md:text-lg font-medium opacity-80">AI 試穿效果 Demo</p>
                      </div>
                    </div>
                  </video>
                  
                  {/* Video overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Play button overlay (appears when video is not available) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] md:border-t-[12px] border-t-transparent border-l-[16px] md:border-l-[20px] border-l-[#1D1D1F] border-b-[10px] md:border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                
                {/* Video caption */}
                <p className="text-center text-[#86868B] text-sm mt-6 font-medium">
                  上傳一張照片，即可生成虛擬試穿效果
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="text-center mt-16 md:mt-24">
              <AppleButton
                variant="secondary"
                size="lg"
                className="!bg-[#1D1D1F] !text-white hover:!bg-[#2D2D2F] shadow-2xl"
                onClick={() => window.location.href = '/products'}
              >
                查看完整產品介紹
              </AppleButton>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* About Section - Apple Style: Focused Vision */}
      <Section id="about" className="py-20 md:py-48 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F5F5F7] rounded-3xl flex items-center justify-center mx-auto mb-8 md:mb-12">
              <HeartHandshake className="h-10 w-10 md:h-12 md:w-12 text-[#0066CC]" />
            </div>
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#86868B] mb-4 md:mb-6">Core Vision</h2>
            <h3 className="text-3xl md:text-6xl font-bold text-[#1D1D1F] mb-8 md:mb-12">{t.about.title}</h3>
            <p className="text-xl md:text-3xl text-[#86868B] font-medium leading-relaxed max-w-3xl mx-auto text-balance">
              "{t.about.desc}"
            </p>
          </ScrollReveal>
        </div>
      </Section>

      {/* Partner Logos Section - Apple Style: Glass Floating */}
      {/* TODO: 待與品牌正式簽約後，將 SHOW_PARTNERS 改為 true 即可恢復顯示 */}
      {false && (
      <Section id="partners" className="py-24 md:py-48 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#86868B] mb-4 md:mb-6">Our Partners</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] mb-6 md:mb-8">{t.partners.title}</h3>
              <p className="text-[#86868B] font-medium uppercase tracking-widest text-xs md:text-sm">{t.partners.desc}</p>
            </div>
            <div className="bg-[#F5F5F7] rounded-[32px] md:rounded-[40px] p-2 overflow-hidden border border-black/[0.05]">
              <PartnerMarquee />
            </div>
          </ScrollReveal>
        </div>
      </Section>
      )}

      {/* FAQ Section - Apple Style: Clean Accordion */}
      <Section id="faq" className="py-20 md:py-48 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#86868B] mb-4 md:mb-6">Support</h2>
              <h3 className="text-3xl md:text-6xl font-bold text-[#1D1D1F] mb-6 md:mb-10">常見問題</h3>
              <p className="text-[#86868B] font-medium text-lg lg:text-xl">
                關於 Tryzeon 的常見疑問，我們都在這裡為您解答
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-16 shadow-sm border border-black/[0.03]">
              <FAQ items={faqData[currentLang as keyof typeof faqData] || faqData['zh-TW']} />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Contact/CTA Section - Apple Style: High Impact Dark Mode */}
      <Section id="contact" className="py-24 md:py-56 bg-[#1D1D1F] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(circle,rgba(0,102,204,0.15)_0%,transparent_70%)] animate-pulse-glow"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#86868B] mb-6 md:mb-8">Get Started</h2>
            <h3 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
              Ready to transform<br />your fashion business?
            </h3>
            <p className="text-lg md:text-2xl text-[#86868B] font-medium mb-12 md:mb-16 leading-relaxed max-w-2xl mx-auto text-balance">
              Join the revolution of AI-powered fashion retail. Experience higher conversion rates and lower returns today.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <AppleButton
                variant="secondary"
                size="lg"
                className="!bg-white !text-[#1D1D1F] hover:!bg-[#F5F5F7] w-full md:w-auto"
                onClick={() => window.location.href = `mailto:${t.contact.email}`}
              >
                <Mail className="h-5 w-5 md:h-6 md:w-6 mr-3" />
                {t.contact.email}
              </AppleButton>
              
              <AppleButton
                variant="ghost"
                size="lg"
                className="!text-white border border-white/20 hover:!bg-white/10 w-full md:w-auto"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </AppleButton>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Footer t={t} />
    </div>
  );
}
