'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Store, TrendingUp, Users, BarChart } from 'lucide-react';

export default function BusinessPage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');

  return (
    <PageLayout currentLang={currentLang} setCurrentLang={setCurrentLang}>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          B2B 商業合作方案
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          為您的服飾品牌提供企業級 AI 虛擬試穿解決方案
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Store className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">提升轉換率</h3>
          <p className="text-sm text-gray-600">平均提升 40% 購買轉換率</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold mb-2">降低退貨率</h3>
          <p className="text-sm text-gray-600">減少 30% 因尺寸不合的退貨</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold mb-2">增加互動</h3>
          <p className="text-sm text-gray-600">提升 2 倍用戶停留時間</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <BarChart className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-semibold mb-2">數據洞察</h3>
          <p className="text-sm text-gray-600">完整的用戶行為分析</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">準備好開始合作了嗎？</h2>
        <p className="text-xl mb-8 text-white/90">
          聯繫我們的商務團隊，了解更多企業方案
        </p>
        <a 
          href="mailto:tryzeon.team@gmail.com"
          className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          聯繫商務團隊
        </a>
      </div>
    </PageLayout>
  );
}
