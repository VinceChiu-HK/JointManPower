/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Users, 
  Search, 
  FileCheck, 
  CheckCircle2, 
  ChevronDown, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  Target,
  ShieldCheck,
  Zap,
  Globe,
  Layout,
  Palette,
  Sparkles
} from 'lucide-react';

// --- Types ---

type ThemeStyle = 'modern' | 'luxury' | 'technical' | 'organic' | 'brutalist';

// --- Themes Configuration ---

const THEMES: Record<ThemeStyle, { 
  name: string; 
  desc: string; 
  icon: any;
  colors: string;
  font: string;
}> = {
  modern: {
    name: "現代商業 (預設)",
    desc: "專業、簡潔、可信。類近 HKEX 风格。",
    icon: Layout,
    colors: "bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900",
    font: "font-sans"
  },
  luxury: {
    name: "高端奢華",
    desc: "深色背景，精緻線條，尊貴體驗。",
    icon: Sparkles,
    colors: "bg-black text-white selection:bg-gray-800 selection:text-white",
    font: "font-serif"
  },
  technical: {
    name: "技術精準",
    desc: "可視化網格，等寬字體，強調數據。",
    icon: Target,
    colors: "bg-[#E4E3E0] text-[#141414] selection:bg-black selection:text-white",
    font: "font-mono"
  },
  organic: {
    name: "溫馨人文",
    desc: "大地色系，柔和邊框，富有親和力。",
    icon: Palette,
    colors: "bg-[#f5f5f0] text-[#5A5A40] selection:bg-[#5A5A40] selection:text-white",
    font: "font-serif"
  },
  brutalist: {
    name: "大膽前衛",
    desc: "高對比度，厚重邊框，充滿活力。",
    icon: Zap,
    colors: "bg-white text-black selection:bg-yellow-300 selection:text-black",
    font: "font-sans"
  }
};

// --- Selection Component ---

const StyleSelector = ({ onSelect }: { onSelect: (style: ThemeStyle) => void }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-gray-50">
    <div className="max-w-4xl w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl shadow-xl mb-6">
          <Building2 className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">眾誠人力資源 - 網站風格選擇</h1>
        <p className="text-gray-500 text-lg">請選擇一個最能體現您品牌形象的視覺風格</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(Object.entries(THEMES) as [ThemeStyle, typeof THEMES['modern']][]).map(([key, theme], idx) => (
          <motion.button
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(key)}
            className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-2xl hover:border-blue-500 hover:ring-4 hover:ring-blue-50 transition-all text-left group flex flex-col items-start"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${key === 'modern' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
              <theme.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{theme.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{theme.desc}</p>
            <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm">
              預覽風格 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12 text-gray-400 text-sm"
      >
        * 您可以隨時在預覽中切換回此界面
      </motion.p>
    </div>
  </div>
);

// --- Website Components ---

const Nav = ({ theme }: { theme: ThemeStyle }) => (
  <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b shadow-sm transition-colors duration-500 ${
    theme === 'luxury' ? 'bg-black/80 border-gray-800' : 
    theme === 'technical' ? 'bg-[#E4E3E0]/80 border-black' : 
    theme === 'organic' ? 'bg-[#f5f5f0]/80 border-[#5A5A40]/20' : 
    theme === 'brutalist' ? 'bg-white border-black border-b-4' : 
    'bg-white/80 border-gray-100'
  }`}>
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Building2 className={`w-8 h-8 ${theme === 'luxury' ? 'text-white' : theme === 'technical' ? 'text-black' : theme === 'organic' ? 'text-[#5A5A40]' : 'text-blue-700'}`} />
        <span className={`text-xl font-bold tracking-tight ${theme === 'luxury' ? 'text-white font-light' : 'text-gray-900'}`}>眾誠人力資源</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#intro" className={`${theme === 'luxury' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-700'} transition-colors uppercase tracking-widest`}>關於我們</a>
        <a href="#process" className={`${theme === 'luxury' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-700'} transition-colors uppercase tracking-widest`}>引才流程</a>
        <a href="#advantages" className={`${theme === 'luxury' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-700'} transition-colors uppercase tracking-widest`}>服務優勢</a>
        <a href="#faq" className={`${theme === 'luxury' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-700'} transition-colors uppercase tracking-widest`}>常見問題</a>
        <a 
          href="#contact"
          className={`px-5 py-2 rounded-full transition-all shadow-md font-bold ${
            theme === 'luxury' ? 'bg-white text-black hover:bg-gray-200' :
            theme === 'brutalist' ? 'bg-yellow-300 text-black border-2 border-black hover:bg-yellow-400' :
            'bg-blue-700 text-white hover:bg-blue-800'
          }`}
        >
          立即聯絡
        </a>
      </div>
    </div>
  </nav>
);

const Hero = ({ theme }: { theme: ThemeStyle }) => (
  <section className="relative h-[90vh] flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2070&auto=format&fit=crop" 
        alt="Hong Kong Skyline" 
        className="w-full h-full object-cover brightness-[0.4]"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`max-w-2xl ${theme === 'luxury' ? 'text-white font-light' : 'text-white'}`}
      >
        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 uppercase tracking-widest border transition-colors ${
          theme === 'luxury' ? 'bg-transparent border-gray-500 text-gray-400' :
          theme === 'brutalist' ? 'bg-yellow-300 text-black border-black border-2' :
          'bg-blue-600/30 backdrop-blur-sm border-blue-400/50 text-blue-100'
        }`}>
          您的內地人才引進專家
        </span>
        <h1 className={`text-5xl md:text-7xl font-bold leading-tight mb-8 ${theme === 'luxury' ? 'font-serif tracking-tight' : 'tracking-tighter'}`}>
          精準引進內地人才<br />
          <span className={theme === 'luxury' ? 'italic text-gray-400' : theme === 'brutalist' ? 'bg-yellow-300 text-black px-2' : 'text-blue-400'}>
            助力香港企業啟航
          </span>
        </h1>
        <p className={`text-xl mb-10 leading-relaxed ${theme === 'luxury' ? 'text-gray-400 font-serif italic' : 'text-gray-300'}`}>
          眾誠人力資源（香港）有限公司致力於為香港雇主提供一站式內地精英招聘及簽證服務。我們連接兩地，為您的業務增長注入新活力。
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className={`px-8 py-4 rounded-lg font-bold transition-all flex items-center gap-2 group shadow-xl ${
            theme === 'luxury' ? 'bg-white text-black hover:bg-gray-100' :
            theme === 'brutalist' ? 'bg-white text-black border-4 border-black hover:bg-yellow-300' :
            'bg-blue-600 hover:bg-blue-700 text-white'
          }`}>
            諮詢服務 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#process" className={`px-8 py-4 backdrop-blur-md border rounded-lg font-bold transition-all ${
            theme === 'luxury' ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' :
            'bg-white/10 border-white/30 hover:bg-white/20 text-white'
          }`}>
            了解流程
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Intro = ({ theme }: { theme: ThemeStyle }) => (
  <section id="intro" className={`py-24 transition-colors duration-500 ${theme === 'organic' ? 'bg-white/50' : theme === 'luxury' ? 'bg-black' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
            alt="Employees working in a modern office" 
            className={`shadow-2xl relative z-10 transition-all duration-500 w-full h-auto object-cover ${
              theme === 'organic' ? 'rounded-[3rem]' : 
              theme === 'brutalist' ? 'rounded-none border-4 border-black' : 
              'rounded-3xl'
            }`}
            referrerPolicy="no-referrer"
          />
          {theme !== 'brutalist' && (
            <div className={`absolute -bottom-8 -right-8 w-64 h-64 rounded-full z-0 -rotate-12 blur-3xl opacity-60 ${theme === 'luxury' ? 'bg-gray-800' : 'bg-blue-50'}`}></div>
          )}
        </motion.div>
        <div>
          <span className={`font-bold tracking-widest uppercase text-sm mb-4 block ${theme === 'luxury' ? 'text-gray-600' : theme === 'organic' ? 'text-[#5A5A40]' : 'text-blue-600'}`}>公司背景</span>
          <h2 className={`text-4xl font-bold mb-6 font-display leading-tight ${theme === 'luxury' ? 'text-white font-serif' : 'text-gray-900'}`}>衆誠人力資源 (香港) 有限公司</h2>
          <div className={`space-y-6 text-lg leading-relaxed ${theme === 'luxury' ? 'text-gray-400 font-serif' : 'text-gray-600'}`}>
            <p>
              我們是一家立足香港、深耕內地的專業人力資源諮詢機構。在當前香港急需各類專業人才的背景下，我們積極響應政府人才引進政策，搭建起連接內地精英與香港雇主的橋樑。
            </p>
            <p>
              我們的團隊擁有豐富的跨境招聘經驗，深刻理解兩地文化與職場差異。我們不只是中介，更是您在人才戰略上的長期合作夥伴，協助企業在激烈的市場競爭中獲取最強動力。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <div className={`text-3xl font-bold mb-2 ${theme === 'luxury' ? 'text-white' : theme === 'organic' ? 'text-[#5A5A40]' : 'text-blue-600'}`}>500+</div>
              <div className="text-gray-500 font-medium tracking-widest uppercase text-xs">成功引進案例</div>
            </div>
            <div>
              <div className={`text-3xl font-bold mb-2 ${theme === 'luxury' ? 'text-white' : theme === 'organic' ? 'text-[#5A5A40]' : 'text-blue-600'}`}>98%</div>
              <div className="text-gray-500 font-medium tracking-widest uppercase text-xs">雇主滿意度</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = ({ theme }: { theme: ThemeStyle }) => (
  <section id="process" className={`py-24 relative overflow-hidden transition-colors duration-500 ${theme === 'luxury' ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'luxury' ? 'text-white font-serif italic' : 'text-gray-900'}`}>人才引進標準化流程</h2>
        <p className={`max-w-2xl mx-auto text-lg ${theme === 'luxury' ? 'text-gray-500' : 'text-gray-500'}`}>嚴謹、專業、高效，確保每一位人才都能精準對接您的企業需求。</p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
        {[
          { step: "01", icon: Target, title: "需求分析", desc: "深入溝通了解企業職位需求、企業文化及人才畫像。" },
          { step: "02", icon: Search, title: "人才搜集", desc: "通過海量人才庫及內地合作渠道，全球範圍內搜尋理想人選。" },
          { step: "03", icon: Users, title: "面試評估", desc: "嚴格的初試與背景核實，提供專業的候選人評估報告。" },
          { step: "04", icon: FileCheck, title: "簽證辦理", desc: "專業團隊全程代辦各類人才引進簽證（如TTPS, ASMTP等）。" },
          { step: "05", icon: CheckCircle2, title: "入職跟進", desc: "協助人才來港定居，並進行入職後的適應性跟進。" }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative p-8 transition-all border ${
              theme === 'luxury' ? 'bg-black border-gray-800 hover:border-gray-600' : 
              theme === 'brutalist' ? 'bg-white border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 
              'bg-gray-50 border-gray-100 hover:bg-white hover:shadow-xl'
            } rounded-2xl`}
          >
            <div className={`absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center font-bold shadow-lg rounded-lg ${
              theme === 'brutalist' ? 'bg-yellow-300 text-black border-2 border-black shadow-none' : 'bg-blue-600 text-white'
            }`}>
              {item.step}
            </div>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
              theme === 'luxury' ? 'bg-white/5 text-white' : 
              theme === 'brutalist' ? 'bg-yellow-300/20 text-black border-2 border-black' : 
              'bg-blue-100 text-blue-600'
            }`}>
              <item.icon className="w-8 h-8" />
            </div>
            <h3 className={`text-xl font-bold mb-3 ${theme === 'luxury' ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = ({ theme }: { theme: ThemeStyle }) => {
  const items = [
    { q: "引進內地人才主要有哪些途徑？", a: "主要途徑包括：高端人才通行證計劃 (TTPS)、輸入內地人才計劃 (ASMTP)、優秀人才入境計劃 (QMAS) 以及科技人才入境計劃等。我們會根據人才的背景和企業的需求，建議最合適的申請路徑。" },
    { q: "整個引進流程通常需要多長時間？", a: "從開始招聘到人選入職，通常需要 2-4 個月。其中簽證審理階段一般需時 4-8 週，具體取決於所申請的計劃類別及入境處的處理進度。" },
    { q: "對香港雇主（公司）有什麼特定要求？", a: "雇主公司必須與內地候選人簽訂受聘合約，並證明該職位是香港缺乏的本地人才或候選人擁有特殊技能。此外，薪酬待遇需不低於香港同類職位的市場水平。" },
    { q: "引進的人才在香港離職後，簽證會失效嗎？", a: "是的。一般情況下，簽證是綁定特定雇主的。如果人才離職，通常需要向入境處申請變更雇主並獲得批准後才能繼續留港工作。高端人才通行證（TTPS）在逗留期限內則相對較靈活。" },
    { q: "眾誠如何保證引進人才的質量？", a: "我們實行三層篩選機制：首先是數據庫的初步匹配，其次是行業顧問的專業面試，最後是詳細的背景調查（Reference Check），確保人才的資質、能力與誠信均符合要求。" }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className={`py-24 transition-colors duration-500 ${theme === 'luxury' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'luxury' ? 'text-white font-serif' : 'text-gray-900'}`}>常見問題解答</h2>
        <div className={`divide-y ${theme === 'luxury' ? 'divide-gray-800' : 'divide-gray-100'}`}>
          {items.map((item, idx) => (
            <div key={idx} className="overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between py-6 text-left group focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors pr-8 leading-tight ${theme === 'luxury' ? 'text-gray-300 group-hover:text-white' : 'text-gray-800 group-hover:text-blue-600'}`}>{item.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${theme === 'luxury' ? 'text-gray-600' : 'text-gray-400'} ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={`pb-8 leading-relaxed ${theme === 'luxury' ? 'text-gray-500 font-serif italic' : 'text-gray-600'}`}>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ theme }: { theme: ThemeStyle }) => (
  <section id="contact" className={`py-24 transition-colors duration-500 ${theme === 'luxury' ? 'bg-black border-t border-gray-900' : theme === 'organic' ? 'bg-[#5A5A40] text-white' : 'bg-blue-900 text-white'}`}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className={`text-4xl font-bold mb-8 ${theme === 'luxury' ? 'text-white tracking-widest uppercase text-3xl' : ''}`}>聯絡我們</h2>
          <p className={`text-lg mb-12 ${theme === 'luxury' ? 'text-gray-500 italic font-serif' : theme === 'organic' ? 'text-gray-200' : 'text-blue-100'}`}>
            如果您對引進內地人才有任何疑問，或需要定制化的人才解決方案，請隨時與我們聯絡。我們的專業團隊將第一時間為您服務。
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4 text-sm tracking-widest uppercase">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className={theme === 'luxury' ? 'text-gray-400' : ''}>
                <div className="font-bold mb-1">公司地址</div>
                <div>Flat 27-28, 17th Floor, Thriving Industrial Centre, 26-38 Sha Tsui Road, Tsuen Wan, New Territories</div>
              </div>
            </div>
            <div className="flex items-start gap-4 text-sm tracking-widest uppercase">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className={theme === 'luxury' ? 'text-gray-400' : ''}>
                <div className="font-bold mb-1">電子郵箱</div>
                <a href="mailto:fionna@jointmanpower.com">fionna@jointmanpower.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className={`rounded-3xl text-gray-900 flex flex-col shadow-2xl transition-all duration-500 ${
          theme === 'brutalist' ? 'bg-yellow-300 border-4 border-black rounded-none shadow-none' : 'bg-white'
        }`}>
          <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center flex-grow">
            <h3 className="text-2xl font-bold mb-4 italic uppercase">獲取方案</h3>
            <p className="text-xl font-bold leading-relaxed mb-4">
              如需獲取方案<br/>
              請聯繫網站中顯示的<br/>
              <span className={theme === 'brutalist' ? 'bg-black text-yellow-300 px-2 py-1' : 'bg-blue-600 text-white px-2 py-1'}>電子郵箱</span>
            </p>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-tighter">
              <Mail className="w-4 h-4" /> fionna@jointmanpower.com
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ theme }: { theme: ThemeStyle }) => (
  <footer className={`py-12 border-t transition-colors duration-500 ${theme === 'luxury' ? 'bg-black border-gray-900 text-gray-700' : 'bg-gray-950 border-gray-900 text-gray-400'}`}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Building2 className="w-6 h-6" />
          <span className={`text-lg font-bold ${theme === 'luxury' ? 'text-gray-500 italic font-serif' : 'text-white'}`}>眾誠人力資源 (香港) 有限公司</span>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} Joint Manpower (HK) Limited. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

const Advantages = ({ theme }: { theme: ThemeStyle }) => {
  const items = [
    { 
      icon: Globe, 
      title: "豐富的人才儲備", 
      desc: "覆蓋內地頂尖高校及知名企業，擁有涵蓋科技、金融、醫療及管理等領域的萬人級人才矩陣。" 
    },
    { 
      icon: ShieldCheck, 
      title: "全方位的合規支持", 
      desc: "精通香港入境處政策及內地人才檔案、勞動關係法律，確保引才全過程合法合規、無後顧之憂。" 
    },
    { 
      icon: Zap, 
      title: "高效的審批服務", 
      desc: "與相關部門保持緊密溝通，專業文案團隊全程跟進，大幅縮短簽證辦理週期，效率領先業界。" 
    },
    { 
      icon: Target, 
      title: "精準的崗位匹配", 
      desc: "拒絕數量堆砌，我們通過 AI 篩選與人工核識雙重機制，為企業推薦最契合文化與業務的高素質精英。" 
    }
  ];

  return (
    <section id="advantages" className={`py-24 px-4 transition-colors duration-500 ${theme === 'luxury' ? 'bg-[#050505]' : theme === 'organic' ? 'bg-[#f0f0e8]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'luxury' ? 'text-white font-serif' : 'text-gray-900'}`}>為什麼選擇眾誠？</h2>
          <p className={`max-w-2xl mx-auto text-lg ${theme === 'luxury' ? 'text-gray-500' : 'text-gray-500'}`}>眾誠憑借深厚的行業底蘊，為您提供一站式、無縫銜接的跨境引才服務。</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className={`p-8 transition-all duration-300 ${
                theme === 'luxury' ? 'bg-gray-950 border border-gray-900 rounded-none' : 
                theme === 'brutalist' ? 'bg-white border-4 border-black rounded-none hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]' : 
                theme === 'organic' ? 'bg-white rounded-[2rem] shadow-sm' :
                'bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl'
              }`}
            >
              <div className={`w-14 h-14 flex items-center justify-center mb-6 ${
                theme === 'luxury' ? 'text-gray-100 border border-gray-800' : 
                theme === 'brutalist' ? 'bg-yellow-300 text-black border-2 border-black' : 
                'bg-blue-50 text-blue-600 rounded-2xl'
              }`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${theme === 'luxury' ? 'text-white font-serif' : 'text-gray-900'}`}>{item.title}</h3>
              <p className={`leading-relaxed text-sm ${theme === 'luxury' ? 'text-gray-500' : 'text-gray-500'}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  // 鎖定為 'brutalist' (大胆前衛) 風格
  const selectedStyle: ThemeStyle = 'brutalist';
  const themeConfig = THEMES[selectedStyle];

  return (
    <div className={`min-h-screen transition-all duration-700 scroll-smooth ${themeConfig.colors} ${themeConfig.font}`}>
      <Nav theme={selectedStyle} />
      <Hero theme={selectedStyle} />
      <Intro theme={selectedStyle} />
      <Process theme={selectedStyle} />
      <Advantages theme={selectedStyle} />
      <FAQ theme={selectedStyle} />
      <Contact theme={selectedStyle} />
      <Footer theme={selectedStyle} />
    </div>
  );
}
