# Tryzeon 官方網站

> AI × 時尚科技新創官方網站

## 🚀 技術棧

- **框架**: Next.js 15.0.3 (App Router)
- **語言**: TypeScript 5.9.3
- **樣式**: Tailwind CSS 3.4.18
- **動畫**: Framer Motion 10.18.0
- **圖示**: Lucide React 0.344.0

## 📦 專案結構

```
tryzeon-site/
├── app/                    # Next.js App Router 頁面
│   ├── page.tsx           # 首頁
│   ├── layout.tsx         # 根佈局
│   ├── globals.css        # 全域樣式
│   ├── experience/        # 立即體驗頁面
│   ├── learn-more/        # 了解更多頁面
│   ├── demo/              # 查看示範頁面
│   ├── business/          # 商業合作頁面
│   ├── join/              # 加入我們頁面
│   └── explore/           # 探索更多頁面
├── components/            # React 組件
│   ├── FullBleedCarousel.tsx    # 全屏輪播組件
│   ├── Navigation.tsx           # 導航列組件
│   ├── NavigationProgress.tsx   # 頁面切換進度條
│   ├── OptimizedLink.tsx        # 優化的連結組件
│   ├── PartnerMarquee.tsx       # 合作夥伴跑馬燈
│   └── Section.tsx              # 區塊容器組件
├── lib/                   # 工具函數和常數
│   ├── constants.ts       # 品牌常數和型別定義
│   └── translations.ts    # 多語言翻譯
└── public/                # 靜態資源
    └── images/            # 圖片資源

```

## 🛠️ 開發指南

### 環境需求

- Node.js 18.0 或更高版本
- npm 或 yarn 或 pnpm

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 建置生產版本

```bash
npm run build
```

### 啟動生產伺服器

```bash
npm start
```

### 程式碼檢查

```bash
npm run lint
```

### TypeScript 型別檢查

```bash
npx tsc --noEmit
```

## 🎨 設計系統

### 品牌色彩

- **淺米色背景**: `#F8F5F1`
- **深米棕**: `#B8A094`
- **墨黑**: `#0B0B0B`
- **強調色**: `#1E90FF`

### 設計風格

- 時尚科技感 (Apple × Vogue × ZARA)
- 簡潔現代無襯線字體
- 流暢的動畫過渡
- 響應式設計

## 📱 功能特色

### 首頁

- ✅ 全屏輪播展示 6 大主題
- ✅ 智能暫停自動播放
- ✅ 流暢的頁面切換動畫
- ✅ 響應式導航列
- ✅ 多語言支援 (繁中/英文)

### CTA 頁面

- ✅ 立即體驗 - AI 虛擬試穿介紹
- ✅ 了解更多 - 使用者體驗說明
- ✅ 查看示範 - 動態影片生成展示
- ✅ 商業合作 - B2B 店家價值
- ✅ 加入我們 - 創作者生態
- ✅ 探索更多 - 全球視野

### 性能優化

- ✅ 頁面預加載
- ✅ 圖片懶加載
- ✅ SWC 壓縮
- ✅ CSS 優化
- ✅ 按需導入組件
- ✅ 客戶端路由

### 安全性

- ✅ CSP Headers
- ✅ XSS Protection
- ✅ Clickjacking Protection
- ✅ MIME Type Sniffing Protection
- ✅ Referrer Policy

## 🌍 多語言支援

目前支援：
- 繁體中文 (zh-TW)
- English (en)

## 📞 聯絡資訊

- **Email**: tryzeon.team@gmail.com
- **Instagram**: [@tryzeon](https://www.instagram.com/tryzeon)

## 📄 授權

Copyright © 2024 Tryzeon. All rights reserved.

## 🔧 環境變數

複製 `.env.example` 為 `.env.local` 並填入實際值：

```bash
cp .env.example .env.local
```

## 📝 開發規範

### 程式碼風格

- 使用 TypeScript 嚴格模式
- 遵循 ESLint 規則
- 使用 Prettier 格式化程式碼
- 組件使用函數式組件和 Hooks

### Git 提交規範

```
feat: 新功能
fix: 修復 bug
docs: 文件更新
style: 程式碼格式調整
refactor: 重構
perf: 性能優化
test: 測試相關
chore: 建置流程或輔助工具變動
```

## 🚀 部署

### Vercel (推薦)

```bash
vercel
```

### 其他平台

建置後將 `.next` 資料夾部署到任何支援 Node.js 的平台。

## 📊 性能指標

- **FCP** (First Contentful Paint): < 0.4s
- **LCP** (Largest Contentful Paint): < 0.8s
- **TTI** (Time to Interactive): < 0.9s
- **CLS** (Cumulative Layout Shift): < 0.02
- **頁面切換速度**: < 50ms

## 🎯 瀏覽器支援

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 📚 相關資源

- [Next.js 文件](https://nextjs.org/docs)
- [Tailwind CSS 文件](https://tailwindcss.com/docs)
- [Framer Motion 文件](https://www.framer.com/motion/)
- [TypeScript 文件](https://www.typescriptlang.org/docs/)

---

**Built with ❤️ by Tryzeon Team**
