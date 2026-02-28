'use client';

import { useState } from 'react';
import { Users, TrendingUp, Award, Sparkles, ArrowRight, Mail, Globe, Zap } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AppleButton } from '@/components/MicroInteractions';
import { translations } from '@/lib/translations';

export default function JoinPage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');
  const t = translations[currentLang as keyof typeof translations] || translations['zh-TW'];

  const perks = [
    {
      icon: <Zap />,
      title: '頂尖 AI 工具',
      desc: '免費使用 Tryzeon 專業版影像生成引擎，大幅提升內容創作效率。'
    },
    {
      icon: <Globe />,
      title: '全球品牌媒合',
      desc: '優先與國內外時尚品牌進行商業對接，拓展國際市場影響力。'
    },
    {
      icon: <TrendingUp />,
      title: '流量數據分析',
      desc: '獲得專屬的時尚趨勢報告，讓您的創作始終走在流行的最前端。'
    },
    {
      icon: <Award />,
      title: '創作者激勵計畫',
      desc: '透明的分潤制度與高額獎勵，支持您在時尚科技領域持續深耕。'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] selection:bg-[#2563EB]/15 selection:text-[#101828] overflow-hidden">
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* ============================================
          HERO — Creator Focused Dark Mesh
          ============================================ */}
      <Section id="hero" className="py-28 md:py-64 bg-[#0A0A0B] relative">
        <div className="absolute inset-0 dot-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] animate-mesh-float" />
          <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] animate-mesh-float [animation-delay:3s]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="inline-block text-xs md:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#A78BFA] mb-8 bg-[#A78BFA]/10 px-5 py-2 rounded-full border border-[#A78BFA]/20">
              Creator Ecosystem
            </span>
            <h1 className="text-5xl md:text-9xl font-extrabold text-white tracking-tighter leading-[0.85] mb-12">
              Co-create the<br />
              <span className="bg-gradient-to-r from-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent">Fashion Future</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#98A2B3] font-medium max-w-3xl mx-auto mb-16 text-balance">
              我們在尋找有遠見的時尚創作者。加入 Tryzeon，利用領先的 AI 技術為您的影響力裝上翅膀，一同定義次世代的穿搭語彙。
            </p>
            <div className="flex justify-center">
              <AppleButton
                variant="secondary"
                size="lg"
                className="!bg-white !text-[#101828]"
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              >
                立即申請加入
                <ArrowRight className="ml-2 w-5 h-5" />
              </AppleButton>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================
          PERKS — Perks Grid with Neo Cards
          ============================================ */}
      <Section id="perks" className="py-24 md:py-48 relative">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 md:mb-32">
            <ScrollReveal direction="up">
              <span className="inline-block text-xs md:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-6">Partnership Value</span>
              <h2 className="text-4xl md:text-7xl font-extrabold text-[#101828] tracking-tight">為什麼加入我們？</h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {perks.map((perk, i) => (
              <ScrollReveal key={i} direction="up" delay={0.1 * i}>
                <div className="bg-white rounded-[40px] p-10 h-full border border-[#E4E7EC] shadow-neo hover:shadow-neo-lg hover:scale-[1.02] transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] border border-[#E4E7EC] flex items-center justify-center text-2xl text-[#101828] mb-10 group-hover:bg-[#101828] group-hover:text-white transition-all duration-500">
                    {perk.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#101828] mb-5">{perk.title}</h3>
                  <p className="text-[#667085] font-medium leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          APPLY — Minimalist Call to Action
          ============================================ */}
      <Section id="apply" className="py-24 md:py-48 bg-[#F2F4F7] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-16 shadow-neo border border-white relative">
              <Sparkles className="w-10 h-10 md:w-16 md:h-16 text-[#2563EB]" />
              <div className="absolute inset-0 bg-[#2563EB]/20 rounded-full blur-2xl animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold text-[#101828] tracking-tight mb-10">
              準備好展現影響力了嗎？
            </h2>
            <p className="text-lg md:text-xl text-[#667085] font-medium mb-16 leading-relaxed max-w-2xl mx-auto">
              只需發送一封簡單的郵件說明您的簡介，我們的團隊將在 48 小時內與您聯繫，開啟一段令人興奮的時尚科技之旅。
            </p>

            <div className="flex flex-col items-center">
              <AppleButton
                variant="secondary"
                size="lg"
                className="!bg-[#101828] !text-white hover:!bg-[#1D2939] w-full sm:w-auto shadow-neo-lg"
                onClick={() => window.location.href = 'mailto:tryzeon.team@gmail.com?subject=申請成為 Tryzeon 時尚創作者'}
              >
                <Mail className="w-5 h-5 mr-3" />
                發送合作申請郵件
              </AppleButton>
              <div className="mt-8 flex items-center gap-2 text-[#98A2B3] text-sm font-medium">
                <Users className="w-4 h-4" />
                已有 50+ 知名創作者加入
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2563EB]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#A78BFA]/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
      </Section>

      <Footer t={t} />
    </div>
  );
}
