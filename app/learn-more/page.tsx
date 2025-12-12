'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Smartphone, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function LearnMorePage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');

  return (
    <PageLayout currentLang={currentLang} setCurrentLang={setCurrentLang}>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          了解更多使用者體驗
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          探索 Tryzeon 如何改變您的時尚購物體驗
        </p>
      </div>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">簡單易用的介面</h2>
            <p className="text-gray-600 text-lg mb-4">
              我們設計了直觀的使用者介面，讓任何人都能輕鬆上手。只需幾個簡單步驟，就能體驗 AI 虛擬試穿的魅力。
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>一鍵上傳照片</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>即時預覽效果</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>輕鬆分享到社群</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">介面展示圖</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">用戶反饋圖</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">用戶真實反饋</h2>
            <p className="text-gray-600 text-lg mb-4">
              超過 10,000+ 用戶正在使用 Tryzeon，他們的真實體驗證明了我們的價值。
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "Tryzeon 完全改變了我的購物方式，現在我可以在家就知道衣服穿起來的效果，太方便了！"
              </p>
              <p className="text-sm text-gray-500">— 王小姐，台北</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">持續進化的技術</h2>
            <p className="text-gray-600 text-lg mb-4">
              我們的 AI 技術不斷進步，為您提供更精準、更真實的虛擬試穿體驗。
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">每月技術更新</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">更多服飾品牌加入</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">更精準的 AI 模型</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">技術演進圖</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link 
          href="/experience"
          className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          立即體驗
        </Link>
      </div>
    </PageLayout>
  );
}
