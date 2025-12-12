'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Section } from '@/components/Section';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Sparkles, Globe, Rocket, Users, Zap, Target, Award } from 'lucide-react';

export default function ExplorePage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');

  const innovations = [
    {
      icon: Sparkles,
      title: '深度學習技術',
      description: '採用最先進的 AI 模型，實現逼真的虛擬試穿效果',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: '即時生成',
      description: '一張照片即刻生成，無需等待，體驗流暢',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: '精準匹配',
      description: 'AI 分析你的體型與風格，推薦最適合的穿搭',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: '業界領先',
      description: '獲得多項技術專利，引領時尚科技創新',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const roadmapItems = [
    {
      period: '2024 Q4',
      title: '平台上線',
      description: 'B2C 用戶平台正式推出，提供虛擬試穿與 OOTD 推薦功能'
    },
    {
      period: '2025 Q1',
      title: 'B2B 服務拓展',
      description: '與小型服飾品牌合作，提供企業級虛擬試穿解決方案'
    },
    {
      period: '2025 Q2',
      title: '創作者生態',
      description: '啟動創作者計畫，建立時尚內容創作分潤機制'
    },
    {
      period: '2025 Q3+',
      title: '全球擴張',
      description: '進軍國際市場，打造全球時尚科技生態系統'
    }
  ];

  const ecosystemNodes = [
    {
      icon: Users,
      title: '消費者',
      description: '享受智能穿搭體驗',
      benefits: ['虛擬試穿', '個性化推薦', '降低退貨風險']
    },
    {
      icon: Globe,
      title: '品牌商家',
      description: '提升銷售轉換率',
      benefits: ['視覺吸引力提升', '數據分析洞察', '降低營運成本']
    },
    {
      icon: Rocket,
      title: '內容創作者',
      description: '獲得分潤收益',
      benefits: ['內容變現', '粉絲拓展', '專業支持']
    }
  ];

  return (
    <PageLayout currentLang={currentLang} setCurrentLang={setCurrentLang}>
      {/* Hero Section */}
      <Section id="hero" className="pt-32 pb-20 text-center">
        <ScrollReveal direction="up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            探索 Tryzeon
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              時尚科技的無限可能
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            從技術創新到生態建設，我們正在重新定義時尚產業的未來
          </p>
        </ScrollReveal>
      </Section>

      {/* Innovation Section */}
      <Section id="innovation" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">技術創新</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              領先業界的 AI 技術，為時尚產業帶來革命性變革
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Vision Section */}
      <Section id="vision" className="py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                從亞洲出發<br />放眼全球
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Tryzeon 始於台灣，我們深知亞洲時尚市場的獨特性與潛力。透過 AI 技術，我們正在打造一個連結全球的時尚生態系統。
                </p>
                <p className="text-lg leading-relaxed">
                  我們的願景是成為全球時尚科技的領導者，讓每個人都能享受到智能化、個性化的時尚體驗。
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-12 text-white">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">500K+</div>
                  <div className="text-sm text-gray-300">潛在用戶觸及</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-sm text-gray-300">合作品牌</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3</div>
                  <div className="text-sm text-gray-300">核心市場</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-gray-300">技術支援</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Roadmap Section */}
      <Section id="roadmap" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">發展藍圖</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我們的成長路徑，從現在到未來
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="text-sm font-semibold text-gray-500 mb-2">{item.period}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:block w-4 h-4 rounded-full bg-gray-900 border-4 border-white shadow-lg z-10"></div>

                    <div className="flex-1"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Ecosystem Section */}
      <Section id="ecosystem" className="py-20">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">生態系統</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              連結品牌、創作者與消費者，打造三贏的時尚平台
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ecosystemNodes.map((node, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mx-auto mb-6">
                  <node.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{node.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{node.description}</p>
                <ul className="space-y-2 text-left">
                  {node.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Team/Culture Section */}
      <Section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我們的使命</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                用 AI 重塑時尚產業，讓每個人都能享受智能化、個性化的穿搭體驗。<br />
                我們相信，科技與美學的完美結合，將為時尚帶來無限可能。
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2">創新</h3>
                <p className="text-sm text-gray-600">持續探索 AI 技術邊界</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold text-gray-900 mb-2">合作</h3>
                <p className="text-sm text-gray-600">與夥伴共創價值</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold text-gray-900 mb-2">全球</h3>
                <p className="text-sm text-gray-600">放眼國際市場</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="py-20">
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl p-12 md:p-16 text-center text-white">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              準備好加入我們了嗎？
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              無論你是品牌、創作者還是時尚愛好者，都歡迎與我們一起探索時尚科技的未來
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                聯絡我們
              </a>
              <a
                href="/products"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                了解產品
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </PageLayout>
  );
}
