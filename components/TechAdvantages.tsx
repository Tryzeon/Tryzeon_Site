'use client';

import { LucideIcon } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  metrics?: string;
}

interface TechAdvantagesProps {
  title: string;
  subtitle?: string;
  advantages: Advantage[];
}

/**
 * TechAdvantages - 技術優勢展示組件
 * 展示產品的技術特點和競爭優勢
 */
export function TechAdvantages({ title, subtitle, advantages }: TechAdvantagesProps) {
  return (
    <div className="space-y-12">
      {/* 標題 */}
      <div className="text-center max-w-3xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
      </div>

      {/* 優勢網格 */}
      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => {
          const Icon = advantage.icon;
          return (
            <StaggerItem key={index}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-300 h-full">
                {/* 背景漸層效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 space-y-4">
                  {/* 圖標 */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* 標題 */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {advantage.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* 指標數據 */}
                  {advantage.metrics && (
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">
                        {advantage.metrics}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
