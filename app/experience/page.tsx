'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Sparkles, Play, Smartphone, Monitor, Mail, Camera, Layers, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AppleButton } from '@/components/MicroInteractions';
import { translations } from '@/lib/translations';

export default function ExperiencePage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');
  const t = translations[currentLang as keyof typeof translations] || translations['zh-TW'];
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Camera />,
      title: '上傳照片',
      label: 'INPUT',
      description: '上傳一張全身穿搭照，AI 將精準捕捉您的身形特徵。',
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-48 h-64 border-2 border-dashed border-[#2563EB]/30 rounded-3xl flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm group-hover:border-[#2563EB]/60 transition-colors">
            <Upload className="w-12 h-12 text-[#2563EB] mb-4 animate-bounce" />
            <span className="text-xs font-mono text-[#667085]">DROP FILE HERE</span>
          </div>
        </div>
      )
    },
    {
      icon: <Layers />,
      title: 'AI 物理模擬',
      label: 'PROCESSING',
      description: '我們的運算核心會即時進行布料垂墜、光影與質感模擬。',
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-48 h-64">
            <div className="absolute inset-0 bg-[#2563EB]/10 rounded-2xl animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-[#2563EB] animate-spin-slow" />
            </div>
            {/* Blueprint lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#2563EB]/20 animate-scan" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-[#2563EB]/20" />
            <div className="absolute top-2/4 left-0 w-full h-[1px] bg-[#2563EB]/20" />
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-[#2563EB]/20" />
          </div>
        </div>
      )
    },
    {
      icon: <Play />,
      title: '生成動態影片',
      label: 'OUTPUT',
      description: '獲得 360° 全方位展示效果，看見服飾在真實動態下的表現。',
      visual: (
        <div className="relative w-full h-full flex items-center justify-center p-4">
          <div className="w-full aspect-video bg-[#0A0A0B] rounded-2xl overflow-hidden border border-white/10 shadow-glow-blue relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="w-12 h-12 text-white opacity-60" />
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] selection:bg-[#2563EB]/15 selection:text-[#101828] overflow-hidden">
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* ============================================
          HERO — Dark Lab Visual
          ============================================ */}
      <Section id="hero" className="py-28 md:py-64 bg-[#0A0A0B] relative">
        <div className="absolute inset-0 dot-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] animate-mesh-float" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_70%)] animate-mesh-float [animation-delay:4s]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal direction="up">
            <h1 className="text-5xl md:text-9xl font-extrabold text-white tracking-tighter leading-[0.85] mb-12">
              Beyond the<br />
              <span className="text-gradient-blue">Magic Mirror</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#98A2B3] font-medium max-w-3xl mx-auto mb-16 text-balance">
              我們將 AI 轉化為最懂時尚的數位造型師。在這裡，只需一次點擊，就能跨越真實與虛擬的邊界。
            </p>
            <div className="flex justify-center">
              <AppleButton
                variant="secondary"
                size="lg"
                className="!bg-white !text-[#101828]"
                onClick={() => document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })}
              >
                開始探索技術流程
                <ArrowRight className="ml-2 w-5 h-5" />
              </AppleButton>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================
          STEPS — Visual Tech Flow
          ============================================ */}
      <Section id="steps" className="py-24 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <ScrollReveal direction="left">
                <span className="inline-block text-xs md:text-sm font-mono font-bold uppercase tracking-[0.3em] text-[#2563EB] mb-6 bg-[#2563EB]/8 px-4 py-1.5 rounded-full">How it works</span>
                <h2 className="text-4xl md:text-7xl font-extrabold text-[#101828] tracking-tight mb-8">三步重塑時尚呈現</h2>

                <div className="space-y-6">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      className={`p-8 rounded-[32px] cursor-pointer transition-all duration-400 group border ${activeStep === i
                        ? 'bg-white shadow-neo-lg border-[#2563EB]/20'
                        : 'bg-transparent border-transparent hover:bg-white/50'
                        }`}
                      onClick={() => setActiveStep(i)}
                      onMouseEnter={() => setActiveStep(i)}
                    >
                      <div className="flex items-start gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-400 ${activeStep === i ? 'bg-[#2563EB] text-white shadow-glow-blue' : 'bg-[#2563EB]/8 text-[#2563EB]'
                          }`}>
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-xs font-mono font-bold tracking-widest text-[#2563EB] mb-2">{step.label}</div>
                          <h3 className={`text-xl md:text-2xl font-bold mb-3 ${activeStep === i ? 'text-[#101828]' : 'text-[#667085]'}`}>
                            {step.title}
                          </h3>
                          <p className={`text-sm md:text-base font-medium leading-relaxed ${activeStep === i ? 'text-[#475467]' : 'text-[#98A2B3]'}`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="relative">
              <ScrollReveal direction="right">
                <div className="aspect-[4/5] bg-white rounded-[48px] shadow-neo-xl border border-[#E4E7EC] overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full flex flex-col p-12"
                    >
                      <div className="flex-1">
                        {steps[activeStep].visual}
                      </div>
                      <div className="text-center mt-8">
                        <div className="text-xs font-mono text-[#98A2B3] tracking-[0.2em] mb-2 uppercase">Step 0{activeStep + 1} Visualization</div>
                        <p className="text-[#101828] font-bold">Tryzeon AI Core v2.5</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Corner accents */}
                  <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#2563EB]/20 rounded-tl-xl" />
                  <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#2563EB]/20 rounded-br-xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================
          PLATFORMS — Clean Minimalism
          ============================================ */}
      <Section id="platform" className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <span className="inline-block text-xs md:text-sm font-mono font-semibold tracking-[0.3em] text-[#667085] mb-12 uppercase">Ubiquitous Access</span>
            <h3 className="text-4xl md:text-7xl font-extrabold text-[#101828] tracking-tight mb-20 md:mb-32">
              隨時隨地，跨屏體驗
            </h3>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#F8FAFC] rounded-[40px] shadow-neo border border-[#E4E7EC] flex items-center justify-center mb-10 group hover:shadow-neo-lg transition-all duration-500">
                  <Smartphone className="w-16 h-16 md:w-20 md:h-20 text-[#101828] group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-2xl font-bold text-[#101828] mb-4">Mobile Experience</h4>
                <div className="px-4 py-1 rounded-full bg-[#E4E7EC] text-[#667085] text-xs font-bold font-mono tracking-widest uppercase mb-4">Coming Soon</div>
                <p className="text-[#667085] font-medium leading-relaxed max-w-xs">
                  專為行動端優化的 AI 試穿 App，隨手拍即刻體驗穿搭趣味。
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#101828] rounded-[40px] shadow-neo border border-white/5 flex items-center justify-center mb-10 group hover:shadow-glow-blue transition-all duration-500">
                  <Monitor className="w-16 h-16 md:w-20 md:h-20 text-white group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-2xl font-bold text-[#101828] mb-4">B2B Dashboards</h4>
                <div className="px-4 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold font-mono tracking-widest uppercase mb-4">Early Beta</div>
                <p className="text-[#667085] font-medium leading-relaxed max-w-xs">
                  為電商平台量身打造的網頁端組件，無縫整合品牌管理系統。
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================
          WAITLIST — Dark Premium
          ============================================ */}
      <Section id="waitlist" className="py-28 md:py-56 bg-[#0A0A0B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] animate-mesh-float" />
          <div className="absolute inset-0 dot-grid-dark opacity-40" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up">
            <h3 className="text-4xl md:text-8xl font-extrabold text-white tracking-tight mb-12">
              搶先踏入<br />
              <span className="text-gradient-blue">未來試衣間</span>
            </h3>
            <p className="text-lg md:text-2xl text-[#98A2B3] font-medium mb-16 leading-relaxed max-w-2xl mx-auto">
              加入我們的限量早鳥封測名單，成為第一批改變時尚購物方式的先行者。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="w-full sm:w-auto flex flex-col items-center">
                <AppleButton
                  variant="secondary"
                  size="lg"
                  className="!bg-white !text-[#101828] hover:!bg-[#F5F5F7] w-full sm:w-auto shadow-neo-lg"
                  onClick={() => window.location.href = 'mailto:tryzeon.team@gmail.com?subject=申請加入早鳥封測'}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  申請加入封測名單
                </AppleButton>
                <div className="mt-4 text-[#667085] text-xs font-mono tracking-widest uppercase">Response within 24h</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Footer t={t} />
    </div>
  );
}
