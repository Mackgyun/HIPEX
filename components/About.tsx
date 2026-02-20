import React from 'react';
import { Quote, Sparkles, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* 1. Top Section: Centered Manifesto */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-hipex-red font-bold text-xs mb-8 uppercase tracking-widest shadow-sm">
            <Sparkles size={12} />
            Since 2014
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
            의료의 미래는<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hipex-red via-rose-500 to-orange-500">
              환자의 경험
            </span>에서 시작됩니다.
          </h2>
          <div className="text-lg text-slate-600 leading-relaxed space-y-6 text-left md:text-center max-w-3xl mx-auto">
            <p>
              최근 세계적으로 보건의료 분야에서 가장 각광받는 주제들 중에는 <strong className="text-slate-900">‘환자 경험’</strong>, 그리고 <strong className="text-slate-900">‘서비스 디자인’</strong>이 있습니다.
              과거에는 흔히 ‘고객 만족’이나 ‘질 향상’을 논했으나, 모두 공급자 중심의 접근이라는 한계를 극복하지 못했던 것이 사실입니다.
              따라서 최근에는 환자가 실제로 느끼는 불편, 불안, 고통에 더욱 집중함으로써 보건의료 서비스의 진정한 개혁을 도모하려는
              움직임이 나타나고 있는 것입니다.
            </p>
            <p>
              <strong className="text-slate-900">HiPex 2026 컨퍼런스</strong>(Hospital Innovation and Patient Experience Conference 2026)는
              환자 경험과 서비스 디자인이라는 화두를 통해 이 시대에 필요한 진정한 병원 혁신이란 어떤 모습이어야 하는지를 살펴보는 행사입니다.
              3일간 진행되는 이번 컨퍼런스에서는 환자 경험과 서비스 디자인 개념을 통한 병원 혁신에 관한 국내 최고의 전문가들이 자신의 경험을
              참가자들과 공유할 예정입니다.
            </p>
          </div>
        </div>

        {/* 2. Middle Section: Split Definition Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="glass-panel p-10 rounded-[2rem] relative group hover:bg-white transition-all duration-500 border-t-4 border-t-slate-200 hover:border-t-hipex-red">
            <div className="absolute top-8 right-8 text-slate-200 group-hover:text-red-50 transition-colors">
              <Quote size={100} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-slate-900 group-hover:bg-hipex-red group-hover:text-white transition-colors shadow-sm border border-slate-100">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">환자의 경험이란?</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                "치료의 전 과정에 걸쳐서 환자가 느끼게 되는 감정에 영향을 주는 <span className="text-slate-900 font-bold border-b border-red-200">모든 상호작용의 총합</span>으로, 
                이는 의료기관이라는 조직의 문화에 의해 형성된다."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-grow bg-slate-200"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">The Beryl Institute</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-10 rounded-[2rem] relative group hover:bg-white transition-all duration-500 border-t-4 border-t-slate-200 hover:border-t-hipex-red delay-100">
             <div className="absolute top-8 right-8 text-slate-200 group-hover:text-red-50 transition-colors">
              <Quote size={100} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-slate-900 group-hover:bg-hipex-red group-hover:text-white transition-colors shadow-sm border border-slate-100">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">경험의 이야기</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                "환자의 경험이란, 당신이 병원에서 돌아온 다음 <span className="text-slate-900 font-bold border-b border-red-200">배우자에게 들려주는 이야기</span>다. 
                우리는 수술 솜씨보다 우리를 돌봐준 사람들에 관해 이야기한다."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-grow bg-slate-200"></div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Paul Spiegelman & Britt Berrett</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Bottom Section: Topic Pills */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up delay-200">
          {[
            "Patient Experience", "Service Design", "Digital Transformation", 
            "Organizational Culture", "Leadership", "Smart Hospital"
          ].map((tag, i) => (
            <span key={i} className="px-6 py-3 glass-card rounded-full text-sm font-bold text-slate-500 hover:text-hipex-red hover:border-hipex-red hover:bg-red-50 transition-all cursor-default">
              #{tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;