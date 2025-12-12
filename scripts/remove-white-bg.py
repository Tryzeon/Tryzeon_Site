#!/usr/bin/env python3
"""
移除合作品牌 logo 的白色背景
將 JPG/PNG 圖片的白色背景轉為透明，並輸出為 PNG
"""

from PIL import Image
import os
from pathlib import Path

def remove_white_background(input_path, output_path, threshold=220):
    """
    移除圖片的白色背景
    
    Args:
        input_path: 輸入圖片路徑
        output_path: 輸出圖片路徑
        threshold: 白色閾值 (0-255)，高於此值的像素會被視為白色
    """
    # 開啟圖片
    img = Image.open(input_path)
    
    # 轉換為 RGBA 模式
    img = img.convert("RGBA")
    
    # 獲取圖片數據
    datas = img.getdata()
    
    # 新的圖片數據
    new_data = []
    
    for item in datas:
        # 如果 RGB 值都很高（接近白色），則設為透明
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            new_data.append((255, 255, 255, 0))  # 透明
        else:
            new_data.append(item)
    
    # 更新圖片數據
    img.putdata(new_data)
    
    # 保存為 PNG
    img.save(output_path, "PNG")
    print(f"✅ 處理完成: {os.path.basename(output_path)}")

def main():
    # 設定路徑
    base_dir = Path(__file__).parent.parent
    input_dir = base_dir / "public" / "images" / "partners"
    output_dir = base_dir / "public" / "images" / "partners-transparent"
    
    # 創建輸出目錄
    output_dir.mkdir(exist_ok=True)
    
    print("🎨 開始處理合作品牌 logo...")
    print(f"📁 輸入目錄: {input_dir}")
    print(f"📁 輸出目錄: {output_dir}")
    print("-" * 50)
    
    # 處理所有圖片
    count = 0
    for file_path in input_dir.glob("*"):
        if file_path.suffix.lower() in ['.jpg', '.jpeg', '.png']:
            # 輸出檔名改為 .png
            output_path = output_dir / f"{file_path.stem}.png"
            
            try:
                remove_white_background(file_path, output_path, threshold=240)
                count += 1
            except Exception as e:
                print(f"❌ 處理失敗 {file_path.name}: {e}")
    
    print("-" * 50)
    print(f"🎉 完成！共處理 {count} 個檔案")
    print(f"📂 透明背景圖片已保存至: {output_dir}")
    print("\n下一步：")
    print("1. 檢查 partners-transparent 資料夾中的圖片")
    print("2. 如果滿意，將圖片移回 partners 資料夾")
    print("3. 或調整 threshold 參數重新執行")

if __name__ == "__main__":
    main()
