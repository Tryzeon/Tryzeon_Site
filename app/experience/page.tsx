'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, Play, ChevronRight, Check, Smartphone, Monitor, Mail } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AppleButton, AppleLink } from '@/components/MicroInteractions';
import { translations } from '@/lib/translations';

const appleEasing = [0.25, 0.1, 0.25, 1.0];

export default function ExperiencePage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');
  const t = translations[currentLang as keyof typeof translations] || translations['zh-TW'];

  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: '上傳照片',
      description: '上傳一張您的全身照片，系統會自動偵測身形輪廓',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI 智能處理',
      description: '我們的 AI 引擎會在幾秒內完成虛擬試穿合成',
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: '生成試穿影片',
      description: '獲得高品質的動態試穿影片，360° 展示穿搭效果',
    },
  ];

  const features = [
    '秒級生成速度',
    '4K 高畫質輸出',
    '支援各種服飾類型',
    '自然的布料皺褶模擬',
    '多角度動態展示',
    '一鍵分享社群',
  ];

  return (
    <div className="min-h-screen w-full bg-[#F5F5F7] relative overflow-hidden font-display">
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* Hero Section */}
      <Section id="hero" className="pt-24 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-24">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: appleEasing }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0066CC]/10 rounded-full text-[#0066CC] font-medium text-sm mb-6"
              >
                <Sparkles className="w-4 h-4" />
                AI 驅動的虛擬試穿
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1D1D1F] tracking-tight mb-6 md:mb-8">
                體驗未來的
                <br />
                <span className="text-[#0066CC]">試穿方式</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#86868B] font-medium max-w-2xl mx-auto mb-10 md:mb-12">
                只需一張照片，即可看見服裝穿在身上的真實效果。
                <br className="hidden md:block" />
                無需試穿，輕鬆做出購買決定。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AppleButton
                  variant="primary"
                  size="lg"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  觀看示範
                  <ChevronRight className="w-5 h-5 ml-1" />
                </AppleButton>
                
                <AppleButton
                  variant="secondary"
                  size="lg"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  加入等候名單
                </AppleButton>
              </div>
            </div>
          </ScrollReveal>

          {/* Demo Preview */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-[#1D1D1F] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6 cursor-pointer"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                    </motion.div>
                    <p className="text-lg md:text-xl font-medium text-white/80">觀看 AI 試穿示範影片</p>
                  </div>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -left-4 md:-left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block"
              >
                <div className="text-sm font-bold text-[#1D1D1F]">處理時間</div>
                <div className="text-2xl font-bold text-[#0066CC]">&lt; 5 秒</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-4 md:-right-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block"
              >
                <div className="text-sm font-bold text-[#1D1D1F]">輸出品質</div>
                <div className="text-2xl font-bold text-[#0066CC]">4K Ultra HD</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* How it works */}
      <Section id="demo" className="py-20 md:py-32 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-4">How It Works</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-[#1D1D1F] tracking-tight">三步驟完成試穿</h3>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="bg-white rounded-[32px] p-8 md:p-10 text-center shadow-sm border border-black/[0.03] h-full"
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-[#0066CC]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#0066CC]">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-[#0066CC] mb-2">步驟 {index + 1}</div>
                  <h4 className="text-2xl font-bold text-[#1D1D1F] mb-4">{step.title}</h4>
                  <p className="text-[#86868B] font-medium leading-relaxed">{step.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section id="features" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-4">Features</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-8">
                  業界領先的
                  <br />AI 試穿技術
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#0066CC]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-[#0066CC]" />
                      </div>
                      <span className="text-[#1D1D1F] font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#0066CC]/10 to-[#0066CC]/5 rounded-[40px] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="w-16 h-16 text-[#0066CC]/40 mx-auto mb-4" />
                      <p className="text-[#86868B] font-medium">AI 處理示意圖</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Platform Support */}
      <Section id="platform" className="py-20 md:py-32 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-4">Platform</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1D1D1F] tracking-tight mb-12">
              隨時隨地體驗
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-10 h-10 text-[#1D1D1F]" />
                </div>
                <span className="text-[#1D1D1F] font-bold">iOS / Android</span>
                <span className="text-[#86868B] text-sm">即將推出</span>
              </motion.div>
              
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-4">
                  <Monitor className="w-10 h-10 text-[#1D1D1F]" />
                </div>
                <span className="text-[#1D1D1F] font-bold">Web 版本</span>
                <span className="text-[#86868B] text-sm">開發中</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Waitlist CTA */}
      <Section id="waitlist" className="py-24 md:py-48 bg-[#1D1D1F] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,102,204,0.15)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#86868B] mb-6">Early Access</h2>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 md:mb-8">
              搶先體驗
              <br />
              <span className="text-[#0066CC]">AI 虛擬試穿</span>
            </h3>
            <p className="text-lg md:text-xl text-[#86868B] font-medium mb-12 max-w-xl mx-auto">
              加入等候名單，成為首批體驗用戶，享有專屬早鳥優惠。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AppleButton
                variant="secondary"
                size="lg"
                className="!bg-white !text-[#1D1D1F] hover:!bg-[#F5F5F7] w-full sm:w-auto"
                onClick={() => window.location.href = 'mailto:tryzeon.team@gmail.com?subject=申請加入等候名單'}
              >
                <Mail className="w-5 h-5 mr-2" />
                加入等候名單
              </AppleButton>
              
              <AppleLink 
                href="/#features" 
                className="!text-white"
              >
                了解更多功能
              </AppleLink>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Footer t={t} />
    </div>
  );
}
