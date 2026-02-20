import React from 'react';
import { AlertCircle, CheckCircle, MapPin, Download, ArrowRight } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <section id="registration" className="relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Registration Info Panel */}
          <div className="lg:col-span-7 glass-panel p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden bg-white/70">
            {/* Red glow effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
               <div className="flex items-center gap-4 mb-10">
                <div className="bg-red-50 text-hipex-red p-3 rounded-2xl shadow-sm border border-red-100">
                  <AlertCircle size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-slate-900">사전 등록</h2>
                  <p className="text-slate-500 text-sm">HiPex 2026 Haeundae</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                 <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-red-200 transition-colors">
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Registration Fee</span>
                    <div>
                       <span className="text-4xl font-black text-slate-900">275,000</span>
                       <span className="text-sm font-medium text-hipex-red ml-1">KRW</span>
                       <p className="text-xs text-slate-400 mt-2">(부가세 포함)</p>
                    </div>
                 </div>

                 <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                    <span className="text-slate-500 text-sm font-bold uppercase tracking-wider block mb-4">Benefits</span>
                    <ul className="space-y-3">
                       <li className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle size={16} className="text-hipex-red mt-0.5" />
                          <span>자료집, 중식 제공</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle size={16} className="text-hipex-red mt-0.5" />
                          <span>웰컴 리셉션 & 기념품</span>
                       </li>
                       <li className="flex items-start gap-3 text-sm text-slate-600">
                          <CheckCircle size={16} className="text-hipex-red mt-0.5" />
                          <span>단체 등록 지원 (최대 20명)</span>
                       </li>
                    </ul>
                 </div>
              </div>

              <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-red-600 mb-1">사전 등록 마감</h3>
                  <p className="text-red-400 text-sm">현장 등록은 불가하오니 양해 부탁드립니다.</p>
                </div>
                <span className="bg-white text-red-500 text-xs font-bold px-3 py-1 rounded-full border border-red-200 shadow-sm">Closed</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8 pt-8 border-t border-slate-100">
                 <div className="text-sm">
                    <p className="font-bold text-slate-900 mb-1">문의처</p>
                    <p className="text-slate-500">02-2646-0852<br/>lhs@docdocdoc.co.kr</p>
                 </div>
                 <div className="text-sm">
                    <p className="font-bold text-slate-900 mb-1">환불 규정</p>
                    <p className="text-slate-500">11월 5일 이후 환불 불가</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Location & Accommodation */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden group">
               <div className="absolute inset-0 z-0">
                  <img src="https://picsum.photos/seed/location_bg/600/400" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" alt="Map" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
               </div>
               
               <div className="relative z-10 text-white h-full flex flex-col justify-end min-h-[300px]">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl w-fit mb-4 border border-white/20">
                     <MapPin size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">오시는 길</h3>
                  <p className="text-slate-200 mb-6 leading-relaxed">
                    부산광역시 해운대구 해운대로 875<br/>
                    <strong className="text-white">인제대학교 해운대백병원 5층 대강당</strong>
                  </p>
                  
                  <div className="bg-black/30 backdrop-blur-sm border border-white/20 p-4 rounded-xl text-sm text-white/90">
                    <span className="block font-bold text-amber-300 mb-1">주차 안내</span>
                    주차 공간이 협소하오니 대중교통 이용을 권장합니다.
                  </div>
               </div>
            </div>

            <button className="glass-card w-full p-6 rounded-[2rem] flex items-center justify-between group hover:bg-white transition-colors bg-white/60">
               <div className="flex items-center gap-4">
                  <div className="bg-white group-hover:bg-hipex-red p-3 rounded-full transition-colors shadow-sm">
                     <Download size={20} className="text-slate-600 group-hover:text-white" />
                  </div>
                  <div className="text-left">
                     <span className="block font-bold text-lg text-slate-900">제휴 숙소 리스트</span>
                     <span className="text-xs text-slate-500 uppercase tracking-wider">Download PDF</span>
                  </div>
               </div>
               <ArrowRight className="text-slate-400 group-hover:text-slate-900" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Registration;