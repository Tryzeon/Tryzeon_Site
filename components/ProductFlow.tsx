'use client';

import { LucideIcon } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface FlowStep {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}

interface ProductFlowProps {
  title: string;
  subtitle?: string;
  steps: FlowStep[];
}

/**
 * ProductFlow - 產品使用流程視覺化組件
 * 展示產品的使用步驟，以清晰的流程圖方式呈現
 */
export function ProductFlow({ title, subtitle, steps }: ProductFlowProps) {
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

      {/* 流程步驟 */}
      <StaggerContainer className="relative">
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* 連接線（桌面版） */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" 
               style={{ 
                 left: 'calc(12.5% + 2rem)', 
                 right: 'calc(12.5% + 2rem)',
                 zIndex: 0
               }} 
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={index}>
                <div className="relative z-10">
                  {/* 步驟卡片 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    {/* 步驟編號 */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      {step.highlight && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          {step.highlight}
                        </span>
                      )}
                    </div>

                    {/* 圖標 */}
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gray-50 mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-gray-700" />
                    </div>

                    {/* 標題 */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                      {step.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* 箭頭（移動版） */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </div>
      </StaggerContainer>
    </div>
  );
}
