'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function PartnerMarquee() {
  const [timestamp, setTimestamp] = useState('');
  
  useEffect(() => {
    setTimestamp(Date.now().toString());
  }, []);
  
  const logos = [
    { name: "aachic.png", alt: "AA Chic" },
    { name: "aastar.png", alt: "AA Star" },
    { name: "c2o.png", alt: "C2O" },
    { name: "casanru.png", alt: "Casanru" },
    { name: "eyesqueen.png", alt: "Eyes Queen" },
    { name: "future.png", alt: "Future" },
    { name: "littlesis.png", alt: "Little Sis" },
    { name: "loveuni.png", alt: "Love Uni" },
    { name: "M&D.png", alt: "M&D" },
    { name: "nabistudio.png", alt: "Nabi Studio" },
    { name: "oatmeal.png", alt: "Oatmeal" },
    { name: "opbrandshop.png", alt: "OP Brand Shop" },
    { name: "pinkdoll.png", alt: "Pink Doll" },
    { name: "pinkyrabbit.png", alt: "Pinky Rabbit" },
    { name: "porystore.png", alt: "Pory Store" },
    { name: "rena.png", alt: "Rena" },
    { name: "viviq.png", alt: "Viviq" },
    { name: "ystrive.png", alt: "Y Strive" },
    { name: "zebra.png", alt: "Zebra" },
    { name: "遇見.png", alt: "遇見" },
  ];

  // 複製三次以確保無縫循環
  const infiniteRow = [...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-12">
      {/* 輪播容器 */}
      <div
        className="flex items-center gap-6 animate-marquee hover:[animation-play-state:paused] will-change-transform"
        aria-label="合作夥伴品牌輪播"
      >
        {infiniteRow.map((logo, i) => (
          <div
            key={`partner-${i}`}
            className="flex-shrink-0 w-[110px] h-[110px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <Image
              src={`/images/partners/${logo.name}?t=${timestamp}`}
              alt={logo.alt}
              width={110}
              height={110}
              className="object-contain w-full h-full"
              style={{ mixBlendMode: 'normal' }}
            />
          </div>
        ))}
      </div>

      {/* 統計文字 */}
      <div className="text-center mt-8">
        <p className="text-sm font-medium text-gray-500 tracking-wide">
          已與 <span className="text-gray-700 font-semibold">{logos.length}</span> 家時尚品牌合作
        </p>
      </div>
    </div>
  );
}
