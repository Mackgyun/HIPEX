import React from 'react';

const Footer: React.FC = () => {
  // 2025년부터 2014년까지 역순으로 연도 배열 생성
  const years = Array.from({ length: 2025 - 2014 + 1 }, (_, i) => 2025 - i);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    if (!year) return;

    // URL 생성 로직
    const url = year === '2025' ? 'https://hipex.org' : `https://hipex.org/${year}`;
    
    // 새 탭에서 열기
    window.open(url, '_blank');
    
    // 선택 초기화 (사용자 경험 향상)
    e.target.value = "";
  };

  return (
    <footer className="bg-slate-900 text-white py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <h2 className="text-3xl font-black text-white mb-6 tracking-tighter">
              HiPex 2026 <span className="text-hipex-red">Haeundae</span>
            </h2>
            <div className="text-slate-400 text-sm space-y-2">
              <p>주최: 신문 청년의사, 인제대학교 해운대백병원</p>
              <p>문의: 02-2646-0852 | lhs@docdocdoc.co.kr</p>
              <p className="mt-6 text-slate-500">© 2026 HiPex. All rights reserved.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
               <span className="text-slate-400 text-sm font-bold">지난 HiPex 보기</span>
               <select 
                  onChange={handleYearChange}
                  defaultValue=""
                  className="bg-slate-800 border border-slate-700 text-slate-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-hipex-red hover:bg-slate-700 cursor-pointer transition-colors"
               >
                 <option value="" disabled>연도 선택</option>
                 {years.map((year) => (
                   <option key={year} value={year}>HiPex {year}</option>
                 ))}
               </select>
            </div>
            
            <div className="grid grid-cols-4 gap-2 w-72 opacity-60 hover:opacity-100 transition-opacity">
               {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-slate-800 aspect-square rounded-lg overflow-hidden border border-slate-700">
                     <img src={`https://picsum.photos/seed/hipex_past_${i}/100/100`} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                  </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;