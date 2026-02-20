import React from 'react';
import { NEWS_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const News: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-hipex-red animate-pulse"></span>
            HiPex News
          </h2>
        </div>
        
        {/* Grid Layout: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ITEMS.map((news, idx) => (
            <a 
              key={idx} 
              href={news.link}
              className="group glass-card p-6 rounded-2xl hover:bg-white transition-all duration-300 border border-white/60 flex flex-col justify-between bg-white/40 h-full hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 block">Article</span>
                <h3 className="text-slate-800 font-bold leading-relaxed group-hover:text-hipex-red transition-colors line-clamp-2 min-h-[3.5rem]">
                  {news.title}
                </h3>
              </div>
              <div className="mt-6 flex justify-end">
                <div className="p-2 rounded-full bg-slate-100 text-slate-400 group-hover:bg-hipex-red group-hover:text-white transition-all transform group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;