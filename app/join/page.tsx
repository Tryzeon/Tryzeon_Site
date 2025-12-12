'use client';

import React, { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Users, Camera, TrendingUp, Award } from 'lucide-react';

export default function JoinPage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');

  return (
    <PageLayout currentLang={currentLang} setCurrentLang={setCurrentLang}>

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          加入創作者生態
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          成為 Tryzeon 創作者，展現您的時尚影響力
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Camera className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold mb-2">創作工具</h3>
          <p className="text-sm text-gray-600">專業的 AI 工具支援</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold mb-2">社群支持</h3>
          <p className="text-sm text-gray-600">龐大的創作者社群</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold mb-2">收益分潤</h3>
          <p className="text-sm text-gray-600">優渥的創作者分潤</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Award className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-semibold mb-2">品牌合作</h3>
          <p className="text-sm text-gray-600">與知名品牌合作機會</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">準備好加入我們了嗎？</h2>
        <p className="text-xl mb-8 text-white/90">
          填寫申請表單，我們的團隊會盡快與您聯繫
        </p>
        <a 
          href="mailto:tryzeon.team@gmail.com"
          className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          申請成為創作者
        </a>
      </div>
    </PageLayout>
  );
}
