'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AppleButton } from "@/components/MicroInteractions";
const BentoGrid = dynamic(() => import("@/components/BentoGrid").then(mod => ({ default: mod.BentoGrid })), { ssr: false });
const BentoCard = dynamic(() => import("@/components/BentoGrid").then(mod => ({ default: mod.BentoCard })), { ssr: false });
import { Sparkles, Video, Palette, TrendingUp, Zap, Brain, Share2, ArrowRight } from "lucide-react";
import { translations } from "@/lib/translations";

export default function ProductsPage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');
  const t = translations[currentLang as keyof typeof translations] || translations['zh-TW'];

  const productStats = [
    { value: '< 3s', label: '生成時間', desc: '極速 AI 運算' },
    { value: '95%', label: '試穿準確', desc: '精準身形識別' },
    { value: '90%', label: '成本節省', desc: '降低拍攝費用' },
    { value: '1080p', label: '影像品質', desc: '高畫質動態輸出' }
  ];


  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] selection:bg-[#2563EB]/15">
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* ============================================
          HERO — Neo-Tech Clean Style
          ============================================ */}
      <Section id="hero" className="pt-40 pb-24 md:pt-56 md:pb-40 relative overflow-hidden">
        {/* Dot grid and subtle mesh */}
        <div className="absolute inset-0 dot-grid opacity-70 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="inline-block text-xs md:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-6 bg-[#2563EB]/8 px-5 py-2 rounded-full">
              Full Spectrum Solution
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold text-[#101828] tracking-tighter leading-[0.9] mb-10">
              AI × 時尚科技<br />
              <span className="text-gradient-blue">完整解決方案</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#667085] font-medium max-w-3xl mx-auto mb-16 leading-relaxed">
              從虛擬試穿到趨勢分析，Tryzeon 提供全方位、模組化的 AI 服務，幫助品牌在數位時代重新定義用戶體驗。
            </p>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {productStats.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={0.1 * i}>
                <div className="bg-white/50 backdrop-blur-sm border border-[#E4E7EC] rounded-3xl p-6 md:p-8 shadow-neo">
                  <div className="text-3xl md:text-5xl font-extrabold text-[#101828] mb-2 font-data tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-mono font-bold uppercase tracking-wider text-[#2563EB] mb-1">{stat.label}</div>
                  <div className="text-[12px] text-[#98A2B3] font-medium">{stat.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          FLOW — The Tech Pipeline
          ============================================ */}
      <Section id="flow" className="py-24 md:py-48 bg-[#0A0A0B] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" className="text-center mb-24 md:mb-32">
            <span className="inline-block text-xs md:text-sm font-mono font-semibold uppercase tracking-[0.3em] text-[#60A5FA] mb-6 bg-[#2563EB]/15 px-4 py-1.5 rounded-full">The Pipeline</span>
            <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight">極簡操作，極致呈現</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent z-0" />

            {[
              { icon: <Brain />, title: "1. 數據上傳", desc: "上傳全身照，AI 自動提取身形骨架。" },
              { icon: <Palette />, title: "2. 智能選配", desc: "瀏覽數位衣櫥，選擇欲試穿單品。" },
              { icon: <Zap />, title: "3. 極速生成", desc: "雲端 GPU 瞬間完成物理布料模擬。" },
              { icon: <Share2 />, title: "4. 全面導購", desc: "生成 4K 影片並連結品牌電商。" }
            ].map((step, i) => (
              <ScrollReveal key={i} direction="up" delay={0.1 * i}>
                <div className="relative z-10 p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md hover:bg-white/[0.06] transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/20 flex items-center justify-center text-[#60A5FA] mb-8 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-400">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-[#98A2B3] font-medium leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          FEATURES — Bento Style Detailed
          ============================================ */}
      <Section id="features" className="py-24 md:py-48 relative">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 md:mb-32">
            <ScrollReveal direction="up">
              <span className="inline-block text-xs md:text-sm font-mono font-semibold uppercase tracking-[0.3em] text-[#2563EB] mb-6 bg-[#2563EB]/8 px-4 py-1.5 rounded-full">Core Technology</span>
              <h2 className="text-4xl md:text-7xl font-extrabold text-[#101828] tracking-tight">探索 Tryzeon 生態中心</h2>
            </ScrollReveal>
          </div>

          <BentoGrid className="mb-8">
            <BentoCard
              colSpan={2}
              title="AI 時尚虛擬試穿"
              description="無需實體試穿，透過雲端模擬真實穿搭效果。精準的身形識別與服裝適配，讓數位購物體驗不再充滿變數。"
              icon={<Sparkles />}
              className="!bg-white"
            />
            <BentoCard
              title="動態影像生成"
              description="將靜態試穿瞬間轉化為高品質動態影片。360° 展示細節與動作流暢感。"
              icon={<Video />}
              className="!bg-white"
            />
          </BentoGrid>
          <BentoGrid>
            <BentoCard
              title="AI OOTD 推薦"
              description="根據場合、天氣與個人風格，AI 提供最懂你的穿搭建議。"
              icon={<Palette />}
              className="!bg-white"
            />
            <BentoCard
              colSpan={2}
              title="趨勢數據分析"
              description="整合全球時尚大數據，為品牌提供實時的市場預測與商品決策依據，極大化庫存迴轉率與行銷效果。"
              icon={<TrendingUp />}
              className="!bg-white"
            />
          </BentoGrid>
        </div>
      </Section>

      {/* ============================================
          Comparison — Data-driven Decision
          ============================================ */}
      <Section id="comparison" className="py-24 md:py-48 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-20 md:mb-32">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#101828] tracking-tight mb-8">
              Why Tryzeon?
            </h2>
            <p className="text-lg md:text-xl text-[#667085] font-medium">看見 AI 如何徹底改變傳統時尚零售的遊戲規則</p>
          </ScrollReveal>

          <div className="bg-[#F8FAFC] border border-[#E4E7EC] rounded-[40px] overflow-hidden shadow-neo">
            <div className="grid grid-cols-3 bg-[#101828] p-6 md:p-8 text-white">
              <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/50">Feature</div>
              <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/50 text-center">Traditional</div>
              <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#60A5FA] text-center font-bold">Tryzeon</div>
            </div>

            {[
              { f: "試穿速度", t: "需到實體店面", n: "< 3秒" },
              { f: "退貨率", t: "20-30%", n: "< 10%" },
              { f: "拍攝成本", t: "極其高昂", n: "節省 90%" },
              { f: "內容產出", t: "數週", n: "即時" },
              { f: "數據支持", t: "缺乏", n: "全時段分析" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-6 md:p-8 border-t border-[#E4E7EC] items-center hover:bg-white transition-colors">
                <div className="font-bold text-[#101828] text-sm md:text-base">{row.f}</div>
                <div className="text-[#98A2B3] text-sm text-center">{row.t}</div>
                <div className="text-[#2563EB] font-bold text-center text-sm md:text-base bg-[#2563EB]/5 py-2 rounded-xl border border-[#2563EB]/10">{row.n}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================
          CTA — Final Action
          ============================================ */}
      <Section id="cta" className="py-28 md:py-56 bg-[#0A0A0B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] animate-mesh-float" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-8xl font-extrabold text-white mb-10 tracking-tight">
              Ready to Upgrade?
            </h2>
            <p className="text-lg md:text-2xl text-[#98A2B3] font-medium mb-16 leading-relaxed max-w-2xl mx-auto">
              與我們一起探索時尚科技的無限可能，讓 AI 成為品牌成長最強大的驅動力。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <AppleButton
                variant="secondary"
                size="lg"
                className="!bg-white !text-[#101828] hover:!bg-[#F2F4F7] w-full md:w-auto shadow-neo-lg"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScu_hKsOTUVcuB0R3sKnRh9cAbn7zchO7W8izdgG1N9-WC9AQ/viewform?usp=header', '_blank')}
              >
                立即申請商業合作
                <ArrowRight className="ml-2 w-5 h-5" />
              </AppleButton>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Footer t={t} />
    </div>
  );
}
