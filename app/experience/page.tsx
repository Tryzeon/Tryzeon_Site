'use client';

import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';

export default function ExperiencePage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');

  return (
    <PageLayout currentLang={currentLang} setCurrentLang={setCurrentLang}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          立即體驗
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          開始您的 AI 虛擬試穿之旅
        </p>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">App 即將上線</h2>
          <p className="text-xl mb-8 text-white/90">
            我們正在努力開發中，敬請期待！
          </p>
          <a 
            href="mailto:tryzeon.team@gmail.com"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            搶先預約體驗
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
