import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import News from './components/News';
import Footer from './components/Footer';
import { Calendar, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'program' | 'speakers' | 'registration'>('overview');

  const tabs = [
    { id: 'overview', label: '행사 개요' },
    { id: 'program', label: '프로그램' },
    { id: 'speakers', label: '연자 소개' },
    { id: 'registration', label: '사전 등록' }
  ];

  return (
    <div className="relative min-h-screen font-sans text-slate-800 bg-slate-50 selection:bg-hipex-red selection:text-white">
      
      {/* Global Background Elements (Light Mode) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
         {/* Mesh Gradient Orbs - Soft Pastels */}
         <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
         <div className="absolute top-40 -right-20 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-40 left-20 w-96 h-96 bg-slate-200/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* 1. Header (Full Width Layout) */}
        <header className="w-full py-6 relative z-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Logo */}
                <div className="flex flex-col group cursor-pointer" onClick={() => setActiveTab('overview')}>
                <h1 className="text-4xl font-black tracking-tighter text-slate-900 flex items-center gap-1">
                    HiPex <span className="text-hipex-red group-hover:animate-pulse">2026</span>
                </h1>
                <span className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">Hospital Innovation and Patient Experience</span>
                </div>

                {/* Meta Info Pills */}
                <div className="flex flex-col md:flex-row items-center gap-3 text-sm font-medium text-slate-600">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm hover:border-hipex-red/50 transition-colors">
                    <Calendar size={16} className="text-hipex-red" />
                    <span>2026.11.12(목) ~ 13(금)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm hover:border-hipex-red/50 transition-colors">
                    <MapPin size={16} className="text-hipex-red" />
                    <span>인제대학교 해운대백병원</span>
                </div>
                </div>
            </div>
        </header>

        {/* 2. Hero Section (Full Width Background, Constrained Image) */}
        <div className="w-full mb-12">
            <Hero />
        </div>

        {/* 3. Navigation Tabs (Solid Pill Style) */}
        <div className="container mx-auto px-4 mb-16 relative z-30">
            <nav className="max-w-4xl mx-auto">
                <ul className="grid grid-cols-2 md:flex md:justify-center gap-3 md:gap-5">
                {tabs.map((tab) => (
                    <li key={tab.id} className="md:flex-1">
                    <button 
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`
                            w-full py-4 px-6 rounded-full font-bold text-lg md:text-xl transition-all duration-300 flex items-center justify-center border
                            ${activeTab === tab.id 
                                ? 'bg-hipex-red text-white border-hipex-red shadow-lg shadow-red-500/30 scale-[1.02] ring-4 ring-red-50' 
                                : 'bg-white text-slate-500 border-slate-200 hover:border-red-200 hover:text-hipex-red hover:shadow-md'
                            }
                        `}
                    >
                        {tab.label}
                    </button>
                    </li>
                ))}
                </ul>
            </nav>
        </div>

        {/* 4. Main Content Area */}
        <main className="flex-grow pb-24">
          {activeTab === 'overview' && (
            <div className="animate-fade-in space-y-20">
              <About />
              <News />
            </div>
          )}
          {activeTab === 'program' && <div className="animate-fade-in"><Program /></div>}
          {activeTab === 'speakers' && <div className="animate-fade-in"><Speakers /></div>}
          {activeTab === 'registration' && <div className="animate-fade-in"><Registration /></div>}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;