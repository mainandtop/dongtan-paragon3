/* =======================================================================
   SITE CONFIG — 동탄 파라곤 3차
   이 파일 하나만 수정하면 페이지 내용이 전부 바뀝니다.
   ======================================================================= */
const SITE_CONFIG = {
  /* ── 기본 정보 ── */
  siteName:   "동탄 파라곤 3차",
  brandEN:    "공공지원 민간임대주택",
  tagline:    "10년 동안 내집처럼, 10년 후엔 내집으로. 동탄2 신주거문화타운의 마지막 파라곤.",

  /* 하단 '전화걸기' 버튼 및 상담 대표번호 */
  callPhone:  "1800-7081",
  sitePhone:  "1800-7081",

  address:      "경기도 화성시 동탄2지구 A58BL (동탄2 신주거문화타운 내)",
  addressRegion:   "경기도",
  addressLocality: "화성시",
  modelHouse:   "동탄 파라곤 3차 홍보관 (방문 전 예약 필수)",
  developer:    "시행 : 바우하우스 | 시공 : 라인산업",
  totalUnits:   1247,
  unitTypes:    ["82㎡", "108㎡"],
  openHours:    "OPEN 10:00 ~ CLOSE 18:00",

  /* 히어로(첫 화면) */
  heroBadge:  "동탄 파라곤 3차 GRAND OPEN",
  heroTitleBold: "파라곤",                 /* 히어로 타이틀에서 강조(골드)할 단어 */
  heroInfoHtml: "경기도 화성시 동탄2지구 · <b>총 1,247세대</b> · 82㎡ / 108㎡",
  heroImage:  "assets/images/about_img.jpg",

  /* SEO */
  seo: {
    title:       "동탄 파라곤 3차 | 공식 관심고객등록",
    description: "동탄 파라곤 3차 공식 홍보 페이지. 경기도 화성시 동탄2지구 A58BL, 지하2층~지상20층 18개동 총 1,247세대, 전용 82·108㎡ 중대형 특화평면. 10년 공공지원 민간임대 후 분양전환. 관심고객등록 시 최신 정보를 우선 안내드립니다.",
    keywords:    "동탄 파라곤 3차, 동탄 파라곤, 파라곤, 동탄2지구 아파트, 동탄 민간임대, 화성 동탄 분양, 동탄 신주거문화타운",
    ogImage:     "assets/images/about_img.jpg",
    canonical:   "" // 배포 후 실제 도메인 입력 (예: https://dongtan-paragon3.vercel.app/)
  },

  /* ── 상단/모바일 내비게이션 ── */
  nav: [
    { label: "사업개요",     href: "#overview" },
    { label: "입지환경",     href: "#environment" },
    { label: "프리미엄",     href: "#premium" },
    { label: "단지배치도",   href: "#complex" },
    { label: "동호수배치도", href: "#dongho" },
    { label: "커뮤니티",     href: "#community" },
    { label: "타입안내",     href: "#plans" }
  ],

  /* ── 사업개요 표 ── */
  overviewTable: [
    ["사 업 명",   "<strong>동탄 파라곤 3차</strong>"],
    ["대지위치",   "경기도 화성시 동탄2지구 A58BL"],
    ["주택유형",   "공공지원 민간임대주택 (10년 임대 후 분양전환)"],
    ["세대규모",   "<strong>지하2층~지상20층 · 18개동 · 총 1,247세대</strong>"],
    ["공급면적",   "전용 82㎡ · 108㎡ (중대형 특화평면)"],
    ["주차대수",   "총 1,828대 (세대당 약 1.46대)"],
    ["시행 · 시공", "바우하우스 | 라인산업"],
    ["문의전화",   "<strong>1800-7081</strong>"]
  ],

  /* ── 이미지 섹션 ──
     각 섹션은 원본 사이트의 이미지를 그대로 사용합니다.
     tit: 섹션 타이틀 이미지(선택) / images: 본문 이미지(여러 장 가능) */
  sections: [
    {
      id: "overview", ko: "사업개요", en: "BUSINESS OVERVIEW",
      desc: "동탄2 신주거문화타운 내 마지막 주거 대단지, 총 1,247세대의 프리미엄 파라곤.",
      table: true,
      images: ["assets/images/about_img.jpg"]
    },
    {
      id: "environment", ko: "입지환경", en: "LOCATION",
      desc: "GTX-A·SRT 동탄역, 동탄트램(예정), 병점산·동탄다올공원·신동호수공원까지 누리는 입지.",
      images: [
        "assets/images/environment_img1.jpg",
        "assets/images/environment_img2.jpg",
        "assets/images/environment_img3.jpg"
      ]
    },
    {
      id: "premium", ko: "프리미엄", en: "PREMIUM",
      desc: "부담없는 내집마련부터 교통·교육·인프라·자연까지, 동탄 파라곤 3차만의 PREMIUM 8.",
      images: ["assets/images/premium_img.jpg"]
    },
    {
      id: "complex", ko: "단지배치도", en: "COMPLEX LAYOUT",
      desc: "남향 위주 주동배치와 여유로운 동 간 거리로 채광과 조망을 살린 쾌적한 주거환경.",
      images: ["assets/images/danji-img1.jpg"]
    },
    {
      id: "dongho", ko: "동호수 배치도", en: "UNIT LAYOUT",
      desc: "18개동 총 1,247세대의 동·호수 배치를 한눈에 확인하세요.",
      images: ["assets/images/dongho-img1.jpg"]
    },
    {
      id: "community", ko: "커뮤니티", en: "COMMUNITY",
      desc: "입주민을 위한 풍부한 커뮤니티 시설로 일상의 품격을 높입니다.",
      images: ["assets/images/community-img1.jpg"]
    },
    {
      id: "plans", ko: "타입안내", en: "FLOOR PLAN",
      desc: "타입별 평면을 확인하세요. 버튼을 눌러 타입을 전환할 수 있습니다.",
      planTypes: [
        { label: "82㎡",  images: ["assets/images/type_82.jpg"] },
        { label: "108㎡", images: ["assets/images/type_108.jpg"] }
      ]
    }
  ],

  /* ── 개인정보/푸터 ── */
  privacyPurpose: "동탄 파라곤 3차 관련 상담 및 안내 서비스 제공",
  footerDisclaimer: "본 홈페이지에 사용된 CG·일러스트·사진·이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 개발계획 및 사업 내용은 관계기관의 인·허가 과정에서 변경될 수 있습니다. 정확한 내용은 반드시 홍보관 및 공급 계약서를 통해 확인하시기 바랍니다.",
  year: 2026
};
