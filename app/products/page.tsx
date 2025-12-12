'use client';

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { ProductFeatureDetail } from "@/components/ProductFeatureDetail";
import { ProductFlow } from "@/components/ProductFlow";
import { TechAdvantages } from "@/components/TechAdvantages";
import { UseCases } from "@/components/UseCases";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ScrollReveal } from "@/components/ScrollReveal";
import { 
  productFeatures, 
  productFlow, 
  techAdvantages, 
  useCases,
  comparisonData,
  productStats
} from "@/lib/product-content";
import { brand } from "@/lib/constants";
import { translations } from "@/lib/translations";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');
  const t = translations[currentLang as keyof typeof translations] || translations['zh-TW'];

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: brand.lightBg }}>
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* Hero Section */}
      <Section id="hero" className="pt-32 pb-20 text-center">
        <ScrollReveal direction="up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            AI × 時尚科技
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              完整解決方案
            </span>
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            從虛擬試穿到趨勢分析，Tryzeon 提供全方位的 AI 時尚科技服務
          </p>
        </ScrollReveal>

        {/* 統計數據 */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {productStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* 產品使用流程 */}
      <Section id="flow" className="py-20 bg-white">
        <ProductFlow {...productFlow} />
      </Section>

      {/* 四大核心功能詳細介紹 */}
      <Section id="features" className="py-20">
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              四大核心功能
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              完整的 AI 時尚科技解決方案，滿足各種需求
            </p>
          </ScrollReveal>
        </div>

        <div className="space-y-32">
          {productFeatures.map((feature, index) => (
            <ProductFeatureDetail
              key={index}
              {...feature}
              imageSide={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </Section>

      {/* 技術優勢 */}
      <Section id="tech" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <TechAdvantages {...techAdvantages} />
      </Section>

      {/* 應用場景 */}
      <Section id="use-cases" className="py-20">
        <UseCases {...useCases} />
      </Section>

      {/* 產品對比 */}
      <Section id="comparison" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <ComparisonTable {...comparisonData} />
      </Section>

      {/* CTA Section */}
      <Section id="cta" className="py-20 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              準備好體驗 AI 時尚科技了嗎？
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xl mb-8 text-gray-300">
              立即開始使用 Tryzeon，讓 AI 改變你的時尚體驗
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                立即體驗
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                聯絡我們
              </button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Footer t={t} />
    </div>
  );
}
