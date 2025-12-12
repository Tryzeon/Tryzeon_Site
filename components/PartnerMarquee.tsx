'use client';

import React from 'react';
import Image from 'next/image';

export function PartnerMarquee() {
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
    <div className="relative overflow-hidden py-12 bg-tryzeon-bg">
      {/* 左側漸層 */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-tryzeon-bg via-tryzeon-bg/80 to-transparent z-10 pointer-events-none" />

      {/* 右側漸層 */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-tryzeon-bg via-tryzeon-bg/80 to-transparent z-10 pointer-events-none" />

      {/* 輪播容器 */}
      <div
        className="flex items-center gap-6 animate-marquee hover:[animation-play-state:paused] will-change-transform"
        aria-label="合作夥伴品牌輪播"
      >
        {infiniteRow.map((logo, i) => (
          <div
            key={`partner-${i}`}
            className="flex-shrink-0 w-[100px] h-[100px] flex items-center justify-center"
          >
            <Image
              src={`/images/partners/${logo.name}?v=2`}
              alt={logo.alt}
              width={100}
              height={100}
              className="object-contain mix-blend-multiply"
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
