# Tryzeon 官網優化指南

## 📋 目錄

1. [性能優化](#性能優化)
2. [SEO 優化](#seo-優化)
3. [PWA 支援](#pwa-支援)
4. [錯誤處理](#錯誤處理)
5. [監控與分析](#監控與分析)
6. [部署優化](#部署優化)

---

## 🚀 性能優化

### 已實作的優化

#### 1. **Code Splitting（程式碼分割）**

```tsx
// 使用 dynamic import 延遲載入組件
const PartnerMarquee = dynamic(() => import("@/components/PartnerMarquee"), {
  loading: () => <div>載入中...</div>,
  ssr: true
});
```

**優點：**
- 減少初始 bundle 大小
- 提升首次載入速度
- 按需載入組件

#### 2. **圖片優化**

```tsx
// next.config.js
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

**優點：**
- 自動轉換為現代格式（AVIF/WebP）
- 響應式圖片
- 自動優化大小

#### 3. **CSS 優化**

```js
// next.config.js
experimental: {
  optimizeCss: true,
  optimizePackageImports: ['lucide-react', 'framer-motion'],
}
```

**優點：**
- 移除未使用的 CSS
- 優化套件導入
- 減少 CSS bundle 大小

#### 4. **壓縮與快取**

```js
// next.config.js
compress: true,
swcMinify: true,
```

**優點：**
- Gzip 壓縮
- SWC 編譯器（比 Babel 快）
- 更小的 bundle 大小

---

## 🔍 SEO 優化

### 已實作的 SEO 功能

#### 1. **Sitemap（網站地圖）**

自動生成的 XML sitemap：
- 路徑：`/sitemap.xml`
- 包含所有頁面
- 設定優先級和更新頻率

```bash
# 查看 sitemap
curl https://tryzeon.com/sitemap.xml
```

#### 2. **Robots.txt**

自動生成的 robots.txt：
- 路徑：`/robots.txt`
- 允許搜尋引擎爬取
- 指向 sitemap

#### 3. **Meta Tags（元標籤）**

完整的 SEO meta tags：
- Open Graph（Facebook、LinkedIn）
- Twitter Card
- 結構化資料（JSON-LD）

#### 4. **結構化資料**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tryzeon",
  "description": "一張照片即可虛擬試穿...",
  "url": "https://tryzeon.com"
}
```

**優點：**
- 提升搜尋結果顯示
- Rich Snippets
- 更好的 SEO 排名

---

## 📱 PWA 支援

### Web App Manifest

已創建 PWA manifest：
- 路徑：`/manifest.json`
- 支援安裝到主畫面
- 離線功能準備

### 需要的圖標

請準備以下圖標並放置在 `public/` 目錄：

```
public/
  ├── icon-192.png (192x192)
  ├── icon-192-maskable.png (192x192, 安全區域)
  ├── icon-512.png (512x512)
  └── icon-512-maskable.png (512x512, 安全區域)
```

### Maskable Icon 設計指南

Maskable icon 需要在中心 80% 區域內放置重要內容：

```
┌─────────────────┐
│                 │
│  ┌───────────┐  │ ← 安全區域
│  │           │  │   (中心 80%)
│  │   LOGO    │  │
│  │           │  │
│  └───────────┘  │
│                 │
└─────────────────┘
```

---

## 🛡️ 錯誤處理

### 已實作的錯誤處理

#### 1. **全局錯誤頁面**

- `app/error.tsx` - 捕獲運行時錯誤
- `app/not-found.tsx` - 404 頁面

#### 2. **ErrorBoundary 組件**

```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

**功能：**
- 捕獲 React 組件錯誤
- 顯示友善的錯誤訊息
- 開發環境顯示詳細錯誤

#### 3. **錯誤追蹤整合**

可整合 Sentry 或其他錯誤追蹤服務：

```tsx
// components/ErrorBoundary.tsx
componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  // 發送到 Sentry
  Sentry.captureException(error, { extra: errorInfo });
}
```

---

## 📊 監控與分析

### Core Web Vitals 監控

已實作 `WebVitals` 組件，追蹤：

- **LCP** (Largest Contentful Paint) - 最大內容繪製
- **FID** (First Input Delay) - 首次輸入延遲
- **CLS** (Cumulative Layout Shift) - 累積版面配置位移
- **FCP** (First Contentful Paint) - 首次內容繪製
- **TTFB** (Time to First Byte) - 首位元組時間
- **INP** (Interaction to Next Paint) - 互動到下次繪製

### 建議的閾值

| 指標 | 良好 | 需改進 | 差 |
|------|------|--------|-----|
| LCP  | ≤ 2.5s | 2.5s - 4s | > 4s |
| FID  | ≤ 100ms | 100ms - 300ms | > 300ms |
| CLS  | ≤ 0.1 | 0.1 - 0.25 | > 0.25 |
| FCP  | ≤ 1.8s | 1.8s - 3s | > 3s |
| TTFB | ≤ 800ms | 800ms - 1.8s | > 1.8s |

### 整合 Google Analytics

```tsx
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

---

## 🚢 部署優化

### 建議的部署流程

#### 1. **構建前檢查**

```bash
# 類型檢查
npm run type-check

# Lint 檢查
npm run lint

# 清理快取
npm run clean
```

#### 2. **構建與分析**

```bash
# 構建並分析 bundle
npm run build:analyze
```

#### 3. **環境變數設定**

複製 `.env.example` 到 `.env.local`：

```bash
cp .env.example .env.local
```

填入實際的環境變數值。

#### 4. **部署到 Vercel**

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

### 部署檢查清單

- [ ] 環境變數已設定
- [ ] 圖標檔案已準備
- [ ] sitemap.xml 可訪問
- [ ] robots.txt 可訪問
- [ ] 所有頁面正常載入
- [ ] 404 頁面正常顯示
- [ ] 錯誤頁面正常顯示
- [ ] 性能指標符合標準
- [ ] SEO meta tags 正確
- [ ] Open Graph 圖片正確

---

## 🔧 維護與監控

### 定期檢查項目

#### 每週

- [ ] 檢查 Core Web Vitals
- [ ] 查看錯誤日誌
- [ ] 監控流量數據

#### 每月

- [ ] 更新依賴套件
- [ ] 檢查安全漏洞
- [ ] 優化大型檔案
- [ ] 審查性能指標

#### 每季

- [ ] 全面性能審查
- [ ] SEO 排名檢查
- [ ] 使用者體驗調查
- [ ] 競品分析

### 性能監控工具

#### 1. **Lighthouse**

```bash
# 安裝
npm install -g lighthouse

# 執行
lighthouse https://tryzeon.com --view
```

#### 2. **WebPageTest**

訪問：https://www.webpagetest.org/

#### 3. **Google PageSpeed Insights**

訪問：https://pagespeed.web.dev/

---

## 📈 性能優化建議

### 短期優化（1-2週）

1. **圖片優化**
   - 壓縮所有圖片
   - 轉換為 WebP/AVIF
   - 添加 blur placeholder

2. **字體優化**
   - 使用 `next/font`
   - 預載入關鍵字體
   - 子集化字體檔案

3. **CSS 優化**
   - 移除未使用的樣式
   - 內聯關鍵 CSS
   - 延遲載入非關鍵 CSS

### 中期優化（1個月）

1. **Service Worker**
   - 實作離線支援
   - 快取策略優化
   - 背景同步

2. **API 優化**
   - 添加 API 快取
   - 實作資料預取
   - 優化請求數量

3. **動畫優化**
   - 使用 CSS transform
   - 避免 layout thrashing
   - 使用 will-change

### 長期優化（3個月）

1. **架構優化**
   - 微前端架構
   - 邊緣運算
   - CDN 優化

2. **監控系統**
   - Real User Monitoring (RUM)
   - 錯誤追蹤系統
   - 性能預算

3. **A/B 測試**
   - 功能測試
   - 性能測試
   - 使用者體驗測試

---

## 🎯 性能目標

### 目標指標

| 指標 | 目標值 | 當前值 | 狀態 |
|------|--------|--------|------|
| LCP  | < 2.5s | - | 待測試 |
| FID  | < 100ms | - | 待測試 |
| CLS  | < 0.1 | - | 待測試 |
| FCP  | < 1.8s | - | 待測試 |
| TTI  | < 3.8s | - | 待測試 |

### Lighthouse 分數目標

- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95
- **PWA**: > 80

---

## 📚 參考資源

### 官方文檔

- [Next.js 性能優化](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev 性能指南](https://web.dev/performance/)
- [Google Core Web Vitals](https://web.dev/vitals/)

### 工具

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### 社群資源

- [Next.js GitHub](https://github.com/vercel/next.js)
- [Vercel 部署文檔](https://vercel.com/docs)
- [React 性能優化](https://react.dev/learn/render-and-commit)

---

**最後更新：** 2025-11-24  
**維護者：** Tryzeon Team  
**版本：** 1.0.0
