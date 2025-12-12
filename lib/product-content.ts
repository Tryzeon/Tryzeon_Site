import { 
  Upload, 
  Sparkles, 
  Video, 
  TrendingUp, 
  Zap, 
  Brain, 
  Clock, 
  Shield,
  Users,
  Store,
  Palette,
  BarChart3
} from 'lucide-react';

/**
 * 產品內容配置文件
 * 集中管理所有產品相關的文案、數據和配置
 */

// 四大核心功能詳細介紹
export const productFeatures = [
  {
    icon: Sparkles,
    title: 'AI 虛擬試穿',
    subtitle: 'Virtual Try-On',
    description: '只需一張照片，AI 即可精準生成虛擬試穿效果。無需實體試穿，隨時隨地體驗不同穿搭風格，讓購物決策更快速、更準確。',
    benefits: [
      '上傳照片即可立即試穿，無需等待',
      '精準的身形識別和服裝適配',
      '支援多種服裝類型和風格',
      '真實的光影和材質呈現',
      '可儲存和分享試穿結果'
    ],
    stats: [
      { value: '< 3秒', label: '生成速度' },
      { value: '95%', label: '準確率' },
      { value: '無限次', label: '試穿次數' }
    ]
  },
  {
    icon: Video,
    title: '虛擬影像生成',
    subtitle: 'Dynamic Video Generation',
    description: '將靜態試穿照片轉換為動態影片，展現服裝在不同角度和動作下的真實效果。為品牌創造更具吸引力的行銷素材。',
    benefits: [
      '靜態照片一鍵生成動態影片',
      '多角度展示服裝細節',
      '自然流暢的動作效果',
      '適合社群媒體分享',
      '大幅降低拍攝成本'
    ],
    stats: [
      { value: '10秒', label: '影片長度' },
      { value: '1080p', label: '影片品質' },
      { value: '90%', label: '成本節省' }
    ]
  },
  {
    icon: Palette,
    title: 'AI OOTD 推薦',
    subtitle: 'AI Outfit Recommendation',
    description: '基於個人風格、場合需求和流行趨勢，AI 智能推薦最適合的穿搭組合。讓每個人都能輕鬆成為時尚達人。',
    benefits: [
      '個人化穿搭建議',
      '考量場合和天氣因素',
      '結合最新時尚趨勢',
      '混搭建議和配件推薦',
      '持續學習個人偏好'
    ],
    stats: [
      { value: '1000+', label: '穿搭組合' },
      { value: '每日', label: '更新頻率' },
      { value: '85%', label: '滿意度' }
    ]
  },
  {
    icon: TrendingUp,
    title: '時尚趨勢數據分析',
    subtitle: 'Fashion Trend Analytics',
    description: '整合全球時尚數據，提供即時趨勢分析和預測。幫助品牌掌握市場脈動，做出更精準的商品和行銷決策。',
    benefits: [
      '即時追蹤全球時尚趨勢',
      '預測未來流行元素',
      '競品分析和市場洞察',
      '消費者偏好數據',
      '可視化數據報表'
    ],
    stats: [
      { value: '100萬+', label: '數據來源' },
      { value: '每小時', label: '更新頻率' },
      { value: '30天', label: '趨勢預測' }
    ]
  }
];

// 產品使用流程
export const productFlow = {
  title: '簡單四步，開啟 AI 時尚體驗',
  subtitle: '無需複雜操作，輕鬆上手',
  steps: [
    {
      icon: Upload,
      title: '上傳照片',
      description: '拍攝或上傳一張全身照片，AI 會自動識別身形特徵',
      highlight: '3秒完成'
    },
    {
      icon: Sparkles,
      title: '選擇服裝',
      description: '瀏覽服裝目錄，選擇想要試穿的單品或整套穿搭',
      highlight: '千款選擇'
    },
    {
      icon: Brain,
      title: 'AI 生成',
      description: 'AI 即時生成逼真的虛擬試穿效果，可查看多角度',
      highlight: '即時呈現'
    },
    {
      icon: Video,
      title: '分享購買',
      description: '儲存結果、生成影片、分享社群，或直接購買商品',
      highlight: '一鍵完成'
    }
  ]
};

// 技術優勢
export const techAdvantages = {
  title: '領先業界的 AI 技術',
  subtitle: '我們的技術優勢讓虛擬試穿更真實、更快速',
  advantages: [
    {
      icon: Brain,
      title: '深度學習模型',
      description: '採用最先進的深度學習技術，精準識別人體特徵和服裝屬性，確保試穿效果自然逼真。',
      metrics: '準確率 > 95%'
    },
    {
      icon: Zap,
      title: '極速運算',
      description: '優化的算法和雲端架構，實現秒級生成速度，無需漫長等待，即時查看試穿效果。',
      metrics: '< 3秒生成'
    },
    {
      icon: Shield,
      title: '隱私保護',
      description: '所有照片經過加密處理，不會被儲存或用於其他用途，保障使用者隱私安全。',
      metrics: '100% 安全'
    },
    {
      icon: Clock,
      title: '持續優化',
      description: 'AI 模型持續學習和優化，不斷提升試穿效果的真實度和準確性。',
      metrics: '每週更新'
    },
    {
      icon: Users,
      title: '大規模驗證',
      description: '經過數十萬使用者實際測試，確保在各種場景下都能提供穩定可靠的服務。',
      metrics: '10萬+ 使用者'
    },
    {
      icon: BarChart3,
      title: '數據驅動',
      description: '基於海量時尚數據訓練，能夠理解不同風格、材質和搭配的細微差異。',
      metrics: '百萬級數據'
    }
  ]
};

// 應用場景
export const useCases = {
  title: '多元應用場景，滿足不同需求',
  subtitle: '無論是個人購物還是商業應用，Tryzeon 都能提供完整解決方案',
  cases: [
    {
      icon: Users,
      title: '一般消費者',
      subtitle: 'For Consumers',
      description: '在家就能試穿各種服裝，不用擔心尺寸不合或風格不適合。省時省力，購物更有信心。',
      benefits: [
        '隨時隨地虛擬試穿，不受時間地點限制',
        '避免退換貨的麻煩和運費損失',
        '探索更多風格，發現最適合自己的穿搭',
        '分享試穿照片，徵詢朋友意見'
      ],
      color: '#3B82F6'
    },
    {
      icon: Store,
      title: 'B2B 小型服飾品牌',
      subtitle: 'For Fashion Brands',
      description: '降低拍攝成本，快速產出大量商品圖和行銷素材。提升轉換率，減少退貨率。',
      benefits: [
        '大幅降低模特兒和攝影成本（節省 70-90%）',
        '快速生成多款商品展示圖',
        '提供虛擬試穿功能，提升購買轉換率',
        '減少因尺寸問題導致的退貨'
      ],
      color: '#8B5CF6'
    },
    {
      icon: Palette,
      title: '時尚創作者',
      subtitle: 'For Creators',
      description: '快速創作穿搭內容，生成吸睛的動態影片。提升創作效率，增加粉絲互動。',
      benefits: [
        '快速產出高質量穿搭內容',
        '生成動態影片，提升社群互動率',
        '嘗試更多風格組合，激發創作靈感',
        '與品牌合作，創造商業價值'
      ],
      color: '#EC4899'
    }
  ]
};

// 產品對比
export const comparisonData = {
  title: 'Tryzeon vs 傳統方式',
  subtitle: '看看 AI 技術如何改變時尚產業',
  features: [
    { feature: '試穿速度', traditional: '需到實體店面', tryzeon: '< 3秒即時生成' },
    { feature: '試穿次數', traditional: '有限', tryzeon: '無限次' },
    { feature: '時間地點', traditional: '受營業時間限制', tryzeon: '24/7 隨時隨地' },
    { feature: '隱私保護', traditional: '需在公共場所試穿', tryzeon: '在家私密試穿' },
    { feature: '風格探索', traditional: '受店內庫存限制', tryzeon: '數千款服裝選擇' },
    { feature: '購買決策', traditional: '憑感覺判斷', tryzeon: 'AI 推薦 + 數據支持' },
    { feature: '退貨率', traditional: '20-30%', tryzeon: '< 10%' },
    { feature: '品牌成本', traditional: '高昂拍攝費用', tryzeon: '節省 70-90%' },
    { feature: '內容產出', traditional: '耗時數週', tryzeon: '即時生成' },
    { feature: '動態展示', traditional: false, tryzeon: true },
    { feature: '趨勢分析', traditional: false, tryzeon: true },
    { feature: 'AI 推薦', traditional: false, tryzeon: true }
  ]
};

// 產品統計數據
export const productStats = [
  {
    value: '< 3秒',
    label: '平均生成時間',
    description: '極速 AI 運算'
  },
  {
    value: '95%',
    label: '試穿準確率',
    description: '精準身形識別'
  },
  {
    value: '70-90%',
    label: '成本節省',
    description: '降低拍攝費用'
  },
  {
    value: '10萬+',
    label: '活躍使用者',
    description: '持續成長中'
  }
];
