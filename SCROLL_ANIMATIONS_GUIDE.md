# 滾動動畫使用指南

## 🎯 快速開始

網站現在已經添加了流暢的滾動動畫效果！當你往下滾動時，每個區塊都會以動態的方式出現。

## 🎬 動畫類型

### 1. ScrollReveal - 基礎滾動動畫

```tsx
import { ScrollReveal } from '@/components/ScrollReveal';

// 從下往上淡入
<ScrollReveal direction="up">
  <div>你的內容</div>
</ScrollReveal>

// 從左往右滑入
<ScrollReveal direction="left" delay={0.2}>
  <div>你的內容</div>
</ScrollReveal>
```

**支援的方向：**
- `up` - 從下往上（預設）
- `down` - 從上往下
- `left` - 從左往右
- `right` - 從右往左
- `fade` - 純淡入

### 2. StaggerContainer - 交錯動畫

```tsx
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

<StaggerContainer staggerDelay={0.1}>
  <StaggerItem><div>項目 1</div></StaggerItem>
  <StaggerItem><div>項目 2</div></StaggerItem>
  <StaggerItem><div>項目 3</div></StaggerItem>
</StaggerContainer>
```

**適合使用場景：**
- 功能卡片列表
- 數據展示
- 產品特色
- 團隊成員

### 3. ScaleReveal - 縮放動畫

```tsx
import { ScaleReveal } from '@/components/ScrollReveal';

<ScaleReveal delay={0.2}>
  <div>重點內容</div>
</ScaleReveal>
```

**適合使用場景：**
- 重要公告
- 核心價值
- 聯絡資訊
- CTA 區塊

## ⚙️ 參數說明

### ScrollReveal 參數

| 參數 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `direction` | string | `'up'` | 動畫方向 |
| `delay` | number | `0` | 延遲時間（秒）|
| `duration` | number | `0.6` | 動畫時長（秒）|
| `className` | string | `''` | 自訂 CSS 類別 |

### StaggerContainer 參數

| 參數 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `staggerDelay` | number | `0.1` | 項目間隔（秒）|
| `className` | string | `''` | 自訂 CSS 類別 |

### ScaleReveal 參數

| 參數 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `delay` | number | `0` | 延遲時間（秒）|
| `duration` | number | `0.6` | 動畫時長（秒）|
| `className` | string | `''` | 自訂 CSS 類別 |

## 📝 使用範例

### 範例 1：標題 + 副標題

```tsx
<ScrollReveal direction="up" delay={0.2}>
  <h2>主標題</h2>
</ScrollReveal>
<ScrollReveal direction="up" delay={0.4}>
  <p>副標題或描述</p>
</ScrollReveal>
```

### 範例 2：數據卡片

```tsx
<StaggerContainer className="grid grid-cols-4 gap-4">
  <StaggerItem>
    <div className="stat-card">84%</div>
  </StaggerItem>
  <StaggerItem>
    <div className="stat-card">71%</div>
  </StaggerItem>
  <StaggerItem>
    <div className="stat-card">+30%</div>
  </StaggerItem>
  <StaggerItem>
    <div className="stat-card">-25%</div>
  </StaggerItem>
</StaggerContainer>
```

### 範例 3：左右交替

```tsx
{/* 從左滑入 */}
<ScrollReveal direction="left">
  <div className="content-left">內容</div>
</ScrollReveal>

{/* 從右滑入 */}
<ScrollReveal direction="right" delay={0.2}>
  <div className="content-right">內容</div>
</ScrollReveal>
```

## 🎨 設計建議

### 1. 延遲時間

- **標題：** 0.2s
- **副標題：** 0.4s
- **內容：** 0.6s
- **CTA：** 0.8s

### 2. 動畫方向

- **標題區塊：** `up`（從下往上）
- **左側內容：** `left`（從左往右）
- **右側內容：** `right`（從右往左）
- **重點區塊：** 使用 `ScaleReveal`

### 3. 交錯間隔

- **快速：** 0.05s（適合小元素）
- **正常：** 0.1s（推薦）
- **緩慢：** 0.2s（適合大元素）

## ⚡ 性能優化

### 已實作的優化

✅ 只觸發一次（`once: true`）  
✅ 提前 100px 觸發（`margin: '-100px'`）  
✅ 使用 GPU 加速（`transform` + `opacity`）  
✅ 避免重複計算

### 注意事項

❌ 不要在同一個區塊使用過多動畫  
❌ 不要設定過長的延遲時間  
❌ 不要使用過慢的動畫速度  
✅ 保持動畫簡潔流暢

## 🧪 測試

### 本地測試

```bash
npm run dev
```

開啟 http://localhost:3002 並緩慢往下滾動查看效果。

### 檢查項目

- [ ] 動畫是否流暢（60fps）
- [ ] 延遲時間是否合適
- [ ] 方向是否正確
- [ ] 響應式是否正常
- [ ] 沒有閃爍或跳動

## 📱 響應式支援

所有動畫在不同裝置上都能正常運作：

- ✅ 桌面版（1920x1080）
- ✅ 平板版（768x1024）
- ✅ 手機版（375x667）

## 🔧 自訂動畫

如果需要自訂動畫效果，可以修改 `components/ScrollReveal.tsx`：

```tsx
// 修改初始位置
const getInitialPosition = () => {
  switch (direction) {
    case 'up':
      return { y: 60, opacity: 0 }; // 調整這裡
    // ...
  }
};

// 修改緩動曲線
transition={{
  duration,
  delay,
  ease: [0.25, 0.1, 0.25, 1.0] // 調整這裡
}}
```

## 📚 更多資訊

- [Framer Motion 文檔](https://www.framer.com/motion/)
- [詳細實作報告](../logs/20251124-2041-scroll-animations.md)

---

**版本：** 1.0.0  
**更新時間：** 2025-11-24  
**維護者：** Tryzeon Team
