import React, { useState } from 'react';
import { SPEAKERS } from '../constants';
import { Speaker } from '../types';
import { X, Linkedin, ArrowUpRight } from 'lucide-react';

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  // Define categories and their display titles
  const categories = [
    { key: 'Lecture', title: 'Keynote Lectures' },
    { key: 'Case Study', title: 'Case Studies' },
    { key: 'Panel', title: 'Panel Discussion' },
    { key: 'Special', title: 'Special Program' },
    { key: 'Parallel', title: 'Parallel Sessions' }
  ];

  return (
    <section id="speakers" className="relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-hipex-red font-bold tracking-widest text-xs uppercase mb-2 block">World Class Experts</span>
          <h2 className="text-4xl font-black text-slate-900 mb-4">Invited Speakers</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            보건의료 혁신과 환자경험 분야를 선도하는 국내 최고의 전문가들을 소개합니다.
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((cat) => {
            const categorySpeakers = SPEAKERS.filter(s => s.category === cat.key || (cat.key === 'Case Study' && s.category === 'Case Study'));
            
            if (categorySpeakers.length === 0) return null;

            return (
              <div key={cat.key} className="animate-fade-in-up">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    <span className="w-1 h-8 bg-hipex-red rounded-full"></span>
                    {cat.title}
                  </h3>
                  <div className="h-px flex-grow bg-slate-200"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {categorySpeakers.map((speaker) => (
                    <div 
                      key={speaker.id} 
                      className="group cursor-pointer"
                      onClick={() => setSelectedSpeaker(speaker)}
                    >
                      <div className="glass-card rounded-xl p-3 transition-all duration-300 h-full flex flex-col hover:bg-white hover:shadow-xl hover:-translate-y-1">
                        {/* Image Area */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-slate-100 border border-slate-100">
                          <img 
                            src={`https://picsum.photos/seed/${speaker.id}/300/400`} 
                            alt={speaker.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-white p-1.5 rounded-full text-hipex-red shadow-sm">
                               <ArrowUpRight size={14} />
                            </div>
                          </div>
                        </div>
                        
                        {/* Text Info */}
                        <div className="px-1 text-center flex-grow flex flex-col justify-start">
                          <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-hipex-red transition-colors">{speaker.name}</h4>
                          <p className="text-[11px] text-slate-500 font-medium leading-tight line-clamp-2">{speaker.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Speaker Detail Modal (Light) */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fade-in">
          <div className="glass-panel bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden relative shadow-2xl animate-fade-in-up border border-white/60 flex flex-col md:flex-row">
            
            <button 
              onClick={() => setSelectedSpeaker(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-white/50 hover:bg-slate-100 transition-colors z-20 text-slate-500 backdrop-blur-sm border border-slate-100"
            >
              <X size={20} />
            </button>

            <div className="md:w-5/12 h-64 md:h-auto relative bg-slate-100">
               <img 
                src={`https://picsum.photos/seed/${selectedSpeaker.id}/400/600`} 
                alt={selectedSpeaker.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent md:hidden"></div>
            </div>

            <div className="p-8 md:p-10 md:w-7/12 overflow-y-auto bg-white">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-red-50 text-hipex-red text-[10px] font-bold uppercase tracking-widest rounded mb-3 border border-red-100">
                  {selectedSpeaker.category}
                </span>
                <h3 className="text-3xl font-black text-slate-900 mb-2">{selectedSpeaker.name}</h3>
                <p className="text-sm text-slate-500 font-bold leading-snug border-l-2 border-hipex-red pl-3">
                  {selectedSpeaker.role}
                </p>
              </div>
              
              <div className="prose prose-sm prose-slate">
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Biography</h4>
                 <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                  {selectedSpeaker.bio}
                </p>
              </div>

               <div className="mt-8 pt-6 border-t border-slate-100">
                <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Speakers;