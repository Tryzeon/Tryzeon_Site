import Link from 'next/link';
import { Settings, UserX, AlertCircle, Home, CheckCircle2 } from 'lucide-react';

export default function DeleteAccountPage() {
    return (
        <div className="min-h-screen bg-[#F5F5F7] py-24 px-6 md:px-12 pt-32">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-[#1D1D1F] mb-6 border border-black/5">
                        <UserX className="w-10 h-10 text-red-500" strokeWidth={1.5} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
                        刪除您的帳號
                    </h1>
                    <p className="text-lg text-[#86868B] max-w-xl mx-auto leading-relaxed">
                        我們很遺憾看到您離開。若您決定不再使用 Tryzeon，您可以隨時透過 App 內建的功能完全刪除您的帳號與個人資料。
                    </p>
                </div>

                {/* 刪除步驟卡片 */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 mb-8">
                    <h2 className="text-2xl font-bold text-[#1D1D1F] mb-8">
                        如何在 App 中刪除帳號？
                    </h2>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center font-bold text-lg">
                                1
                            </div>
                            <div className="pt-1.5">
                                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-2 mb-2">
                                    <Settings className="w-5 h-5 text-[#86868B]" />
                                    前往設定
                                </h3>
                                <p className="text-[#86868B] leading-relaxed">
                                    開啟 Tryzeon App，在首頁或個人檔案頁面中找到並進入「設定」(Settings)。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center font-bold text-lg">
                                2
                            </div>
                            <div className="pt-1.5">
                                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-2 mb-2">
                                    <UserX className="w-5 h-5 text-[#86868B]" />
                                    選擇刪除帳號
                                </h3>
                                <p className="text-[#86868B] leading-relaxed">
                                    在設定選單中，點擊「刪除帳號」(Delete Account) 選項。
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center font-bold text-lg">
                                3
                            </div>
                            <div className="pt-1.5">
                                <h3 className="text-lg font-semibold text-[#1D1D1F] flex items-center gap-2 mb-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#86868B]" />
                                    確認刪除
                                </h3>
                                <p className="text-[#86868B] leading-relaxed">
                                    依照畫面上的提示確認您的操作。一旦確認，您的帳號便會被刪除。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 注意事項 */}
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100 mb-12">
                    <div className="flex gap-4">
                        <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-red-800 mb-2">刪除資料是不可逆的</h4>
                            <p className="text-sm text-red-600/90 leading-relaxed">
                                請注意，執行帳號刪除後，您在 Tryzeon 上的所有資訊（包含虛擬試穿紀錄、個人設定、與商家互動紀錄等）將被永久且完全刪除，無法復原。如果未來需要繼續使用，您必須重新註冊一個新帳號。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 導航按鈕 */}
                <div className="text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1D1D1F] rounded-full font-semibold hover:bg-[#F5F5F7] transition-all duration-300 shadow-[0_2px_10px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5"
                    >
                        <Home className="w-5 h-5" />
                        回到首頁
                    </Link>
                </div>
            </div>
        </div>
    );
}
