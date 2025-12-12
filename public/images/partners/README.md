# 合作夥伴 Logo 資料夾

## 📁 用途
存放合作品牌的 logo 圖片，用於官網底部的「合作夥伴」輪播區塊。

## 📝 檔案命名規則

請將合作夥伴的 logo 依照以下格式命名：

```
partner-1.png
partner-2.png
partner-3.png
partner-4.png
partner-5.png
partner-6.png
```

**或者使用品牌名稱**（推薦）：
```
partner-brandname-1.png
partner-brandname-2.png
```

## 🎨 圖片規格建議

### 尺寸
- **建議尺寸**: 400x240 px（寬x高）
- **最小尺寸**: 240x144 px
- **顯示尺寸**: 120x70 px（會自動縮放）
- **比例**: 16:9 或接近的比例

### 格式
- **推薦格式**: PNG（支援透明背景）
- **替代格式**: JPG, SVG, WebP
- **檔案大小**: 建議 < 100KB

### 設計建議
- ✅ 使用**透明背景**的 PNG 格式
- ✅ Logo 應該**置中**且有適當留白
- ✅ 使用**高解析度**圖片（至少 2x）
- ✅ 確保 logo 在**白色背景**上清晰可見
- ❌ 避免過於複雜的背景
- ❌ 避免過小的文字或細節

## 📂 目前配置

目前輪播組件配置為顯示 **6 個合作夥伴 logo**：

| 檔案名稱 | 說明 |
|---------|------|
| `partner-1.png` | 合作品牌 1 |
| `partner-2.png` | 合作品牌 2 |
| `partner-3.png` | 合作品牌 3 |
| `partner-4.png` | 合作品牌 4 |
| `partner-5.png` | 合作品牌 5 |
| `partner-6.png` | 合作品牌 6 |

## 🔧 如何新增/修改合作夥伴

### 方法 1: 替換現有圖片
直接將新的 logo 圖片命名為 `partner-1.png` ~ `partner-6.png`，放入此資料夾即可。

### 方法 2: 新增更多合作夥伴
1. 將新的 logo 圖片放入此資料夾（例如 `partner-7.png`）
2. 編輯 `/components/PartnerMarquee.tsx` 檔案
3. 在 `logos` 陣列中新增：
```typescript
{ src: "/images/partners/partner-7.png", alt: "合作品牌 7" },
```

### 方法 3: 使用品牌名稱
1. 將 logo 命名為品牌名稱（例如 `partner-nike.png`）
2. 編輯 `/components/PartnerMarquee.tsx`
3. 更新對應的 `src` 路徑和 `alt` 文字

## 🎬 輪播效果

- **動畫**: 自動從右到左無限循環滾動
- **速度**: 25 秒完成一輪
- **互動**: 滑鼠懸停時 logo 會放大並提升陰影
- **樣式**: 白色半透明背景卡片，圓角設計

## 📍 顯示位置

合作夥伴輪播顯示在官網的：
- **區塊**: 「合作夥伴」(Partners) 區塊
- **位置**: 頁面底部，Footer 上方
- **路徑**: 首頁 `/` 

## ⚠️ 注意事項

1. **版權**: 確保你有權使用這些品牌 logo
2. **品質**: 使用高品質圖片，避免模糊或失真
3. **一致性**: 保持所有 logo 的風格和尺寸一致
4. **優化**: 壓縮圖片以提升載入速度
5. **測試**: 上傳後在瀏覽器中確認顯示效果

## 🔗 相關檔案

- **組件**: `/components/PartnerMarquee.tsx`
- **頁面**: `/app/page.tsx`
- **樣式**: 使用 Tailwind CSS 和 Framer Motion

---

**最後更新**: 2025-11-29  
**維護者**: Tryzeon Team
