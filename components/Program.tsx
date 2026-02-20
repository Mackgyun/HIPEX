import React, { useState } from 'react';
import { PROGRAM_DAYS } from '../constants';
import { Download } from 'lucide-react';

const Program: React.FC = () => {
  const [activeDay, setActiveDay] = useState(0);

  const getDayLabel = (index: number) => {
    if (index === 0) return { title: "Day 1", date: "11.12 (목)" };
    return { title: "Day 2", date: "11.13 (금)" };
  };

  return (
    <section id="program" className="relative py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Compact Header & Tabs */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4 border-b border-slate-200 pb-4">
           <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Programs</h2>
              <p className="text-slate-500 text-sm font-medium mt-1">
                2026.11.12(목) - 13(금) | 인제대학교 해운대백병원 5층 대강당
              </p>
           </div>
           
           <div className="flex bg-slate-100 p-1 rounded-lg self-start md:self-auto">
              {PROGRAM_DAYS.map((_, index) => {
                const { title, date } = getDayLabel(index);
                const isActive = activeDay === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveDay(index)}
                    className={`
                      px-4 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2
                      ${isActive ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-700'}
                    `}
                  >
                    <span className={isActive ? "text-hipex-red" : ""}>{title}</span>
                    <span className="text-xs opacity-80 font-normal">| {date}</span>
                  </button>
                )
              })}
           </div>
        </div>

        {/* Compact List Content */}
        <div className="border-t-2 border-slate-900">
           {PROGRAM_DAYS[activeDay].sessions.map((session, idx) => {
              const isBreak = session.type === 'break' || session.type === 'event';
              
              // 1. Break / Event Row (Compact)
              if (isBreak) {
                  return (
                      <div key={idx} className="flex items-center py-2.5 bg-slate-50/80 border-b border-slate-200/60">
                          <div className="w-20 md:w-24 text-center text-xs font-bold text-slate-400 font-mono">
                              {session.time}
                          </div>
                          <div className="flex-1 px-4 text-sm font-bold text-slate-500 flex items-center gap-2">
                             {session.title.includes('Lunch') || session.title.includes('Break') ? (
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                             ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-hipex-red/50"></span>
                             )}
                             {session.title}
                             {session.speaker && <span className="font-normal text-slate-400 ml-1">- {session.speaker}</span>}
                          </div>
                      </div>
                  )
              }

              // 2. Main Session Row
              return (
                  <div key={idx} className="flex flex-col md:flex-row md:items-stretch border-b border-slate-200 hover:bg-slate-50 transition-colors group">
                      
                      {/* Left: Time & Type */}
                      <div className="w-full md:w-24 py-3 md:py-5 px-4 md:px-0 md:text-center bg-white md:bg-transparent flex flex-row md:flex-col items-center md:items-center justify-between md:justify-start gap-2">
                          <span className="font-mono text-lg font-bold text-slate-900 md:mt-1">{session.time}</span>
                          <span className={`
                            text-[10px] font-bold uppercase px-1.5 py-0.5 rounded border
                            ${session.type === 'lecture' ? 'text-red-600 border-red-200 bg-red-50' : 
                              session.type === 'case' ? 'text-indigo-600 border-indigo-200 bg-indigo-50' :
                              session.type === 'panel' ? 'text-teal-600 border-teal-200 bg-teal-50' :
                              'text-slate-500 border-slate-200 bg-slate-100'}
                          `}>
                             {session.type}
                          </span>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1 py-3 md:py-5 px-4 md:pl-6 md:pr-4 md:border-l border-slate-100">
                          <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight group-hover:text-hipex-red transition-colors">
                             {session.title}
                          </h3>
                          
                          {session.speaker && (
                              <p className="text-slate-600 text-sm font-medium mb-2 flex items-center gap-2">
                                  {session.speaker}
                              </p>
                          )}

                          {session.description && (
                             <p className="text-sm text-slate-500 mb-3 leading-snug bg-slate-50 p-2 rounded text-xs">
                                {session.description}
                             </p>
                          )}

                          {/* Compact Sub-sessions */}
                          {session.subSessions && (
                             <div className="mt-2 grid gap-1.5">
                                   {session.subSessions.map((sub, sIdx) => (
                                      <div key={sIdx} className="flex items-start gap-2 text-sm pl-2 border-l-2 border-slate-200 py-0.5 hover:border-slate-400 transition-colors">
                                         <div className="flex-1">
                                            <span className="font-bold text-slate-700 text-sm">{sub.title}</span>
                                            <span className="text-slate-500 text-xs ml-2">with {sub.speaker}</span>
                                         </div>
                                         {sub.capacity && (
                                            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 whitespace-nowrap">
                                                {sub.capacity}
                                            </span>
                                         )}
                                      </div>
                                   ))}
                             </div>
                          )}
                      </div>
                  </div>
              )
           })}
        </div>

         <div className="text-center mt-8">
            <button className="text-sm font-bold text-slate-400 hover:text-slate-900 flex items-center justify-center gap-2 mx-auto transition-colors border-b border-transparent hover:border-slate-900 pb-0.5">
                <Download size={14} />
                <span>PDF 프로그램 다운로드</span>
            </button>
        </div>

      </div>
    </section>
  );
};

export default Program;