import { Speaker, ProgramDay, Article, HeroSlide } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "",
    subtitle: "",
    content: []
  },
  {
    title: "",
    subtitle: "",
    content: []
  },
  {
    title: "",
    subtitle: "",
    content: []
  },
  {
    title: "",
    subtitle: "",
    content: []
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: "lecture1",
    name: "이소영",
    role: "마이크로소프트 글로벌 인플루언서팀 아태지역 매니저",
    category: "Lecture",
    bio: "대학생 시절 지인들과 인터넷 벤처를 설립하면서 IT업계에 입문했다. 한국 스타트업의 원조인 네오위즈를 거쳐 한국 마이크로소프트에서 20년간 다양한 커리어를 쌓아 왔다. 현재는 아시아 총괄 리전 매니저로 전세계 IT 커뮤니티 리더의 성장을 돕고 있다. 저서로 <당신은 다른 사람의 성공에 기여한 적 있는가?> 등이 있다."
  },
  {
    id: "lecture2",
    name: "정혁상",
    role: "연세대학교 의료원 인사운영팀 팀장",
    category: "Lecture",
    bio: "2000년 입사 이후 원무팀, 새병원건립추진단, 인사팀 등에서 실무를 경험했다. 대외적으로는 대한병원행정관리자협회 교육원장과 한국병원경영학회 상임이사로 활동하고 있다."
  },
  {
    id: "lecture3",
    name: "김소라",
    role: "연세대학교 의료원 인재개발팀 교육운영파트장",
    category: "Lecture",
    bio: "CJ CGV, 중앙일보미디어마케팅 등을 거쳐 2009년 의료 분야에 입사. 환자경험팀을 거쳐 현재 인재개발팀에서 근무 중이다. 한국코치협회 인증 코치(KAC)이며 대한의료혁신연구회 학술 차장으로 활동 중이다."
  },
  {
    id: "lecture4",
    name: "권자영",
    role: "연세의료원 스마트병원사업단장",
    category: "Lecture",
    bio: "연세의대 산부인과 교수. 세브란스병원 적정진료실 부실장 등을 역임했다. 현재 스마트병원 사업단장으로서 산모를 위한 스마트맘 앱, 가상환경 시스템 구축 등 디지털 개발 및 임상 실증 분야에서 활발히 활동 중이다."
  },
  {
    id: "lecture5",
    name: "김현수",
    role: "명지병원 정신건강의학과 전문의",
    category: "Lecture",
    bio: "성장학교 별 교장, 한국트라우마스트레스학회 이사장. 대안교육, 자살 예방 등 사회정신의학 분야에서 활동. <괴물 부모의 탄생> 등 다수의 저서가 있다. 2023년 대장암 투병 후 새로운 삶을 지향하고 있다."
  },
  {
    id: "case1-1",
    name: "조현진",
    role: "인제의대 해운대백병원 서비스혁신센터장",
    category: "Case Study",
    bio: "고위험산모·신생아통합치료센터 센터장이자 서비스혁신센터장. 환자 중심의 디지털 전환과 병원 혁신을 주도하며 HiPex 2026 해운대 개최의 산파 역할을 했다."
  },
  {
    id: "case1-2",
    name: "강기태",
    role: "인제대학교 해운대백병원 서비스혁신센터 파트장",
    category: "Case Study",
    bio: "서비스혁신센터 신설 시 지원하여 5년간 환자경험 관리 실무를 책임지고 있다. 현장의 목소리를 듣고 환자의 불편함을 개선하기 위해 노력하고 있다."
  },
  {
    id: "case2-1",
    name: "이미연",
    role: "한림대 성심병원 커맨드센터장",
    category: "Case Study",
    bio: "방사선종양학과 교수. 적정진료실장, 기획실장을 역임. 2019년부터 커맨드센터를 개소하여 스마트병원, 서비스 로봇 등 디지털 전환을 이끌고 있다."
  },
  {
    id: "case2-2",
    name: "김영미",
    role: "한림대학교 의료원 커맨드센터 부센터장",
    category: "Case Study",
    bio: "24년차 간호사 출신으로 병원 내 다양한 부서를 거쳤다. 디지털 헬스케어 기술이 현장에 뿌리내리도록 업무 프로세스를 설계하고 조율하는 역할을 수행한다."
  },
  {
    id: "case3",
    name: "구자성",
    role: "은성의료재단 이사장",
    category: "Case Study",
    bio: "산부인과 전문의이자 병원 경영인. 맥킨지 경영 컨설턴트 출신으로 현재 좋은병원들 그룹을 운영하며 DHP 파트너로서 스타트업과 병원의 협업을 주도하고 있다."
  },
  {
    id: "case4",
    name: "이순연",
    role: "계명대 동산병원 고객만족팀 PE 파트장",
    category: "Case Study",
    bio: "1995년부터 임상 실무 수행. 환자경험평가 업무를 담당하여 4차 평가에서 상급종합병원 중 가장 우수한 성적을 거두는 데 기여했다."
  },
  {
    id: "special1",
    name: "이태흠",
    role: "테너",
    category: "Special",
    bio: "이탈리아 로마 산타 체칠리아 국립음악원 최고과정 졸업. 살비노 국제콩쿠르 우승. 다수의 오페라 주역으로 활동하며 현재 부산대학교, 동서대학교 외래교수로 재직 중."
  },
   {
    id: "panel1",
    name: "이재은",
    role: "가톨릭대학교 부천성모병원 간호행정교육팀장",
    category: "Panel",
    bio: "다양한 간호조직 운영 총괄. NRP와 HELP Team 운영체계 구축 주도. 데이터 기반의 실무 적용과 전문성 강화를 추구한다."
  },
  {
    id: "panel2",
    name: "손성문",
    role: "양산부산대학교병원 의료정보실 정보전산팀장",
    category: "Panel",
    bio: "20여 년간 의료 IT 분야 재직. EMR, 진료정보교류 등 인프라 구축. 모바일 앱을 활용한 스마트한 의료환경 실현에 집중."
  },
  {
    id: "panel3",
    name: "송승열",
    role: "울산대학교병원 디지털정보혁신본부 부본부장",
    category: "Panel",
    bio: "핵심 IT프로젝트 총괄. '직접 개발하는 부본부장'으로서 현장의 불편함을 로직으로 바꿔온 병원 디지털 혁신가."
  },
  {
    id: "panel4",
    name: "장정희",
    role: "인하대병원 간호본부 간호교육팀장",
    category: "Panel",
    bio: "29년간의 현장 경험과 행정력으로 근무표 자동생성 프로그램을 원내 도입하고 정착시키는 데 주도적 역할을 담당했다."
  },
    {
    id: "parallel1",
    name: "이종홍",
    role: "이대서울병원 시설팀장",
    category: "Parallel",
    bio: "현대건설 출신 건축 전문가. 이대서울병원 신축 프로젝트의 기획부터 준공까지 총괄하였고 현재 시설팀장으로 재직 중."
  },
  {
    id: "parallel2",
    name: "정재훈",
    role: "고려의대 예방의학교실 교수",
    category: "Parallel",
    bio: "데이터 기반 감염병 정책과 미래 보건의료 정책 전문가. 언론 및 공직사회와 활발히 교류하며 다양한 정책 활동을 하고 있다."
  },
  {
    id: "parallel3",
    name: "박재영",
    role: "청년의사 편집주간",
    category: "Parallel",
    bio: "의사 출신 저널리스트. <개념의료>, <종합병원2.0> 등 다수의 저서 집필. 팟캐스트 진행자이자 HiPex 프로그래머."
  }
];

export const PROGRAM_DAYS: ProgramDay[] = [
  {
    date: "2026.11.12 (Thu) - Day 1",
    sessions: [
      { time: "08:30", type: "event", title: "등록" },
      { time: "09:00", type: "event", title: "Welcome Remark", speaker: "김성수(인제대학교 해운대백병원 병원장)" },
      { time: "09:15", type: "event", title: "Introduction" },
      { 
        time: "09:30", 
        type: "panel", 
        title: "Panel Discussion: 우리 병원의 혁신 사례를 소개합니다",
        subSessions: [
          { title: "대체간호사 & 자동스케줄 시스템 혁신", speaker: "이재은(부천성모병원)" },
          { title: "AI보다 똑똑한 직원앱으로 여는 스마트병원", speaker: "손성문(양산부산대병원)" },
          { title: "‘기다림’을 ‘기대감’으로 바꾼 모바일 혁신", speaker: "송승열(울산대병원)" },
          { title: "근무표도 혁신이다 : AI 기반 간호사 스케줄링", speaker: "장정희(인하대병원)" }
        ]
      },
      { time: "11:30", type: "break", title: "Coffee Break" },
      { time: "11:50", type: "lecture", title: "Lecture 1. 당신은 다른 사람의 성공에 기여한 적 있는가?", speaker: "이소영(마이크로소프트)" },
      { time: "12:50", type: "break", title: "Lunch" },
      { 
        time: "13:50", 
        type: "case", 
        title: "Case Study 1. 병원혁신, 경영진과 실무진의 동상이몽 (해운대백병원)",
        subSessions: [
          { title: "HiPex 참가 이후 시작된 해운대백병원의 변화", speaker: "조현진(센터장)" },
          { title: "센터장은 모르는 실무진의 고충", speaker: "강기태(파트장)" }
        ]
      },
      { 
        time: "15:00", 
        type: "case", 
        title: "Case Study 2. 로봇과 데이터로 이루는 혁신 (한림대 성심병원)",
        subSessions: [
          { title: "환자 흐름 데이터 분석을 통한 환자경험 향상", speaker: "이미연(커맨드센터장)" },
          { title: "3년의 로봇 운영, 또 다른 혁신의 시작", speaker: "김영미(부센터장)" }
        ]
      },
      { time: "16:10", type: "case", title: "Case Study 3. 하이테크와 하이터치 사이, 리더십의 길을 묻다", speaker: "구자성(은성의료재단 이사장)" },
      { time: "17:10", type: "lecture", title: "Lecture 2. 답 없는 인사평가, 이렇게 해 보자", speaker: "정혁상(연세의료원 인사기획팀장)" },
      { time: "18:20", type: "event", title: "Welcome Reception" },
      { time: "19:40", type: "event", title: "1일차 일정 종료" }
    ]
  },
  {
    date: "2026.11.13 (Fri) - Day 2",
    sessions: [
      { time: "09:00", type: "lecture", title: "Lecture 3. 함께 만드는 변화, ‘다름’을 포용하며", speaker: "김소라(연세의료원 교육운영파트장)" },
      { time: "10:10", type: "lecture", title: "Lecture 4. 가상환경 기반 디지털 헬스케어", speaker: "권자영(연세의료원 스마트병원사업단장)" },
      { time: "11:20", type: "break", title: "Coffee Break" },
      { time: "11:40", type: "case", title: "Case Study 4. 환자경험평가 전국 1위의 비결", speaker: "이순연(계명대 동산병원 파트장)" },
      { time: "12:40", type: "break", title: "Lunch" },
      { time: "13:40", type: "event", title: "Special Program: “두려움에서 희망으로”", speaker: "이태흠(테너)" },
      { time: "14:20", type: "lecture", title: "Lecture 5. 환자가 되고 난 후 이해한 환자의 마음", speaker: "김현수(명지병원 전문의)" },
      { time: "15:20", type: "break", title: "Coffee Break 및 이동" },
      { 
        time: "15:40", 
        type: "parallel", 
        title: "Parallel Sessions (3 courses)",
        subSessions: [
          { title: "Course (1) 새 병원을 지을 때 고려해야 할 사항들 (200명)", speaker: "이종홍(이대서울병원)" },
          { title: "Course (2) 한국의료, 도대체 어디로 가고 있나? (100명)", speaker: "정재훈(고려의대)" },
          { title: "Course (3) 인공지능을 활용한 영어 글쓰기 (50명)", speaker: "박재영(청년의사)" }
        ]
      },
      { time: "17:00", type: "event", title: "Survey & Lucky Draw" },
      { time: "17:50", type: "event", title: "수료식" },
      { time: "18:00", type: "event", title: "Closing Remark" }
    ]
  }
];

export const NEWS_ITEMS: Article[] = [
  { title: "‘환자경험 우수 의사’들은 어떻게 환자들과 소통할까", link: "#" },
  { title: "경제학자가 본 의대 증원 효과, 의료비↑ 효율성↓", link: "#" },
  { title: "국내 유일 시니어환자 관리체계, ‘서울아산병원이어서’ 가능했다", link: "#" },
  { title: "MZ 세대는 따지고 책임감 없다? 병원 내 세대별 소통법", link: "#" },
  { title: "복잡 다양한 사람 모인 병원에서 ‘인재’ 제대로 키우는 법", link: "#" },
  { title: "백신‧재택‧운동, 분야 가리지 않고 혁신하는 병원들", link: "#" },
  { title: "병원에 꼭 필요한 인사평가, 핵심은 ‘목표’와 ‘성과책임’", link: "#" },
  { title: "‘모두’ 좋아하지만 선뜻 나서지 못하는 재택의료", link: "#" }
];