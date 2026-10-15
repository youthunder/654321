/**
 * 글로벌 미식 여권 (Global Culinary Passport) - Sentence Word Order Game
 * Middle School English Sentence Construction Adventure
 */

// ==========================================================================
// 1. QUESTION DATABASE (15 Questions: 5 Pros, 5 Neutral, 5 Cons)
// ==========================================================================
const QUESTIONS_DATA = {
  pro: [
    {
      id: "pro-1",
      code: "FOOD-PRO-01",
      country: "대한민국",
      flag: "🇰🇷",
      food: "전통 발효 김치",
      korean: "나는 김치가 우리의 면역 체계를 강화한다고 믿는다.",
      formula: "주어 + 동사 + that + 주어 + 동사구 + 목적어",
      fullEnglish: "I believe that kimchi strengthens our immune system.",
      hintBreakdown: {
        mainSV: "I believe",
        subj: "kimchi",
        pred: "strengthens our immune system"
      },
      tip: "'나는 믿는다(I believe)'라는 주어+동사를 가장 앞에 두고, 그 뒤에 that과 함께 김치가 면역을 강화한다는 내용을 이어붙이세요!",
      // Chunks in correct order (isSubjectVerb: true -> highlighted in yellow)
      chunks: [
        { id: "c1-1", text: "I believe", isSubjectVerb: true },
        { id: "c1-2", text: "that kimchi", isSubjectVerb: false },
        { id: "c1-3", text: "strengthens", isSubjectVerb: false },
        { id: "c1-4", text: "our immune system.", isSubjectVerb: false }
      ]
    },
    {
      id: "pro-2",
      code: "FOOD-PRO-02",
      country: "이탈리아",
      flag: "🇮🇹",
      food: "나폴리 화덕 피자",
      korean: "많은 사람들은 나폴리 피자가 세계 최고의 음식이라고 생각한다.",
      formula: "주어 + 동사 + that + 주어 + be동사 + 보어",
      fullEnglish: "Many people think that Neapolitan pizza is the best food in the world.",
      hintBreakdown: {
        mainSV: "Many people think",
        subj: "Neapolitan pizza",
        pred: "is the best food in the world"
      },
      tip: "'많은 사람들은 생각한다(Many people think)'를 먼저 놓고, that 뒤에 피자가 최고라는 보어구를 연결하세요.",
      chunks: [
        { id: "c2-1", text: "Many people think", isSubjectVerb: true },
        { id: "c2-2", text: "that Neapolitan pizza", isSubjectVerb: false },
        { id: "c2-3", text: "is the best food", isSubjectVerb: false },
        { id: "c2-4", text: "in the world.", isSubjectVerb: false }
      ]
    },
    {
      id: "pro-3",
      code: "FOOD-PRO-03",
      country: "대한민국",
      flag: "🇰🇷",
      food: "전통 된장찌개",
      korean: "연구원들은 전통 된장찌개가 건강에 매우 유익하다고 주장한다.",
      formula: "주어 + 동사 + that + 주어 + be동사 + 형용사보어 + 전치사구",
      fullEnglish: "Researchers claim that traditional soybean stew is very beneficial for human health.",
      hintBreakdown: {
        mainSV: "Researchers claim",
        subj: "traditional soybean stew",
        pred: "is very beneficial for human health"
      },
      tip: "'연구원들은 주장한다(Researchers claim)'를 문두에 세우고, 된장찌개(주어)가 유익하다(is beneficial)를 that 뒤에 배열합니다.",
      chunks: [
        { id: "c3-1", text: "Researchers claim", isSubjectVerb: true },
        { id: "c3-2", text: "that traditional soybean stew", isSubjectVerb: false },
        { id: "c3-3", text: "is very beneficial", isSubjectVerb: false },
        { id: "c3-4", text: "for human health.", isSubjectVerb: false }
      ]
    },
    {
      id: "pro-4",
      code: "FOOD-PRO-04",
      country: "멕시코",
      flag: "🇲🇽",
      food: "스트리트 타코",
      korean: "그녀는 멕시코 타코가 신선한 채소와 완벽한 조화를 이룬다고 느낀다.",
      formula: "주어 + 동사 + that + 주어 + 동사구 + 전치사구",
      fullEnglish: "She feels that Mexican tacos create a perfect balance with fresh vegetables.",
      hintBreakdown: {
        mainSV: "She feels",
        subj: "Mexican tacos",
        pred: "create a perfect balance with fresh vegetables"
      },
      tip: "'그녀는 느낀다(She feels)'가 주절의 뼈대입니다. 그 다음 that절 주어 'Mexican tacos'와 술어부를 놓아보세요.",
      chunks: [
        { id: "c4-1", text: "She feels", isSubjectVerb: true },
        { id: "c4-2", text: "that Mexican tacos", isSubjectVerb: false },
        { id: "c4-3", text: "create a perfect balance", isSubjectVerb: false },
        { id: "c4-4", text: "with fresh vegetables.", isSubjectVerb: false }
      ]
    },
    {
      id: "pro-5",
      code: "FOOD-PRO-05",
      country: "프랑스",
      flag: "🇫🇷",
      food: "정통 바게트",
      korean: "우리는 프랑스 바게트가 역사상 가장 바삭한 빵이라는 것에 동의한다.",
      formula: "주어 + 동사 + that + 주어 + be동사 + 최상급보어 + 전치사구",
      fullEnglish: "We agree that French baguettes are the crispiest bread in food history.",
      hintBreakdown: {
        mainSV: "We agree",
        subj: "French baguettes",
        pred: "are the crispiest bread in food history"
      },
      tip: "'우리는 동의한다(We agree)'를 먼저 배치하세요! 그 후 that절의 주어 'French baguettes' 뒤에 be동사 복수형 'are'가 옵니다.",
      chunks: [
        { id: "c5-1", text: "We agree", isSubjectVerb: true },
        { id: "c5-2", text: "that French baguettes", isSubjectVerb: false },
        { id: "c5-3", text: "are the crispiest bread", isSubjectVerb: false },
        { id: "c5-4", text: "in food history.", isSubjectVerb: false }
      ]
    }
  ],

  neutral: [
    {
      id: "neu-1",
      code: "FOOD-NEU-01",
      country: "일본",
      flag: "🇯🇵",
      food: "장인의 초밥 (스시)",
      korean: "전문가들은 일본 스시가 신선한 생선과 조미된 밥의 균형을 맞춘다고 설명한다.",
      formula: "주어 + 동사 + that + 주어 + 3인칭단수동사 + 목적어 + 전치사구",
      fullEnglish: "Experts explain that Japanese sushi balances fresh fish with seasoned rice.",
      hintBreakdown: {
        mainSV: "Experts explain",
        subj: "Japanese sushi",
        pred: "balances fresh fish with seasoned rice"
      },
      tip: "'전문가들은 설명한다(Experts explain)'가 주절! that절 안에서 sushi 뒤에 단수 동사 balances가 이어집니다.",
      chunks: [
        { id: "n1-1", text: "Experts explain", isSubjectVerb: true },
        { id: "n1-2", text: "that Japanese sushi", isSubjectVerb: false },
        { id: "n1-3", text: "balances fresh fish", isSubjectVerb: false },
        { id: "n1-4", text: "with seasoned rice.", isSubjectVerb: false }
      ]
    },
    {
      id: "neu-2",
      code: "FOOD-NEU-02",
      country: "스위스",
      flag: "🇨🇭",
      food: "알프스 치즈 퐁뒤",
      korean: "어떤 사람들은 치즈 퐁뒤가 스위스의 전형적인 겨울 모임 요리라고 말한다.",
      formula: "주어 + 동사 + that + 주어 + be동사 + 명사보어 + 전치사구",
      fullEnglish: "Some people say that cheese fondue is a typical dish for winter gatherings.",
      hintBreakdown: {
        mainSV: "Some people say",
        subj: "cheese fondue",
        pred: "is a typical dish for winter gatherings"
      },
      tip: "'어떤 사람들은 말한다(Some people say)'를 첫 머리에 배치한 뒤, cheese fondue is a typical dish를 구성하세요.",
      chunks: [
        { id: "n2-1", text: "Some people say", isSubjectVerb: true },
        { id: "n2-2", text: "that cheese fondue", isSubjectVerb: false },
        { id: "n2-3", text: "is a typical dish", isSubjectVerb: false },
        { id: "n2-4", text: "for winter gatherings.", isSubjectVerb: false }
      ]
    },
    {
      id: "neu-3",
      code: "FOOD-NEU-03",
      country: "인도",
      flag: "🇮🇳",
      food: "스파이스 커리",
      korean: "여행자들은 인도 커리가 각 지역마다 수십 가지 향신료를 조합한다고 보고한다.",
      formula: "주어 + 동사 + that + 주어 + 3인칭단수동사 + 목적어 + 전치사구",
      fullEnglish: "Travelers report that Indian curry combines dozens of spices in different regions.",
      hintBreakdown: {
        mainSV: "Travelers report",
        subj: "Indian curry",
        pred: "combines dozens of spices in different regions"
      },
      tip: "'여행자들은 전한다(Travelers report)'가 문장의 출발점! 그 다음 Indian curry가 무엇을 조합(combines)하는지 나열해보세요.",
      chunks: [
        { id: "n3-1", text: "Travelers report", isSubjectVerb: true },
        { id: "n3-2", text: "that Indian curry", isSubjectVerb: false },
        { id: "n3-3", text: "combines dozens of spices", isSubjectVerb: false },
        { id: "n3-4", text: "in different regions.", isSubjectVerb: false }
      ]
    },
    {
      id: "neu-4",
      code: "FOOD-NEU-04",
      country: "튀르키예",
      flag: "🇹🇷",
      food: "전통 케밥",
      korean: "역사학자들은 터키 케밥이 오랜 유목 문화의 역사를 반영한다고 지적한다.",
      formula: "주어 + 동사구 + that + 주어 + 동사 + 목적어 + 수식어구",
      fullEnglish: "Historians point out that Turkish kebab reflects a long history of nomadic life.",
      hintBreakdown: {
        mainSV: "Historians point out",
        subj: "Turkish kebab",
        pred: "reflects a long history of nomadic life"
      },
      tip: "'point out(지적하다)'은 하나의 동사구입니다. 'Historians point out' 조각을 가장 앞에 놓으세요!",
      chunks: [
        { id: "n4-1", text: "Historians point out", isSubjectVerb: true },
        { id: "n4-2", text: "that Turkish kebab", isSubjectVerb: false },
        { id: "n4-3", text: "reflects a long history", isSubjectVerb: false },
        { id: "n4-4", text: "of nomadic life.", isSubjectVerb: false }
      ]
    },
    {
      id: "neu-5",
      code: "FOOD-NEU-05",
      country: "베트남",
      flag: "🇻🇳",
      food: "하노이 쌀국수 (포)",
      korean: "학생들은 베트남 쌀국수가 아침 식사로 맑고 개운한 육수를 제공한다는 것을 안다.",
      formula: "주어 + 동사 + that + 주어 + 3인칭단수동사 + 목적어 + 전치사구",
      fullEnglish: "Students know that Vietnamese pho provides a clear broth for healthy breakfast.",
      hintBreakdown: {
        mainSV: "Students know",
        subj: "Vietnamese pho",
        pred: "provides a clear broth for healthy breakfast"
      },
      tip: "'학생들은 안다(Students know)'를 머리에 두고, Vietnamese pho가 제공하는(provides) 대상을 뒤이어 배치합니다.",
      chunks: [
        { id: "n5-1", text: "Students know", isSubjectVerb: true },
        { id: "n5-2", text: "that Vietnamese pho", isSubjectVerb: false },
        { id: "n5-3", text: "provides a clear broth", isSubjectVerb: false },
        { id: "n5-4", text: "for healthy breakfast.", isSubjectVerb: false }
      ]
    }
  ],

  con: [
    {
      id: "con-1",
      code: "FOOD-CON-01",
      country: "스코틀랜드",
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      food: "전통 해기스",
      korean: "비평가들은 스코틀랜드 해기스가 외국인 방문객들에게 너무 생소할 수 있다고 경고한다.",
      formula: "주어 + 동사 + that + 주어 + 조동사구 + 형용사보어 + 전치사구",
      fullEnglish: "Critics warn that Scottish haggis can be too unfamiliar to foreign visitors.",
      hintBreakdown: {
        mainSV: "Critics warn",
        subj: "Scottish haggis",
        pred: "can be too unfamiliar to foreign visitors"
      },
      tip: "'비평가들은 경고한다(Critics warn)'가 주어+동사! 그 후 조동사 can be와 보어 too unfamiliar를 순서대로 연결하세요.",
      chunks: [
        { id: "c_con1-1", text: "Critics warn", isSubjectVerb: true },
        { id: "c_con1-2", text: "that Scottish haggis", isSubjectVerb: false },
        { id: "c_con1-3", text: "can be too unfamiliar", isSubjectVerb: false },
        { id: "c_con1-4", text: "to foreign visitors.", isSubjectVerb: false }
      ]
    },
    {
      id: "con-2",
      code: "FOOD-CON-02",
      country: "말레이시아",
      flag: "🇲🇾",
      food: "열대 과일 두리안",
      korean: "그는 열대 두리안 과일이 대중교통에서 너무 강한 냄새를 풍긴다고 주장한다.",
      formula: "주어 + 동사 + that + 주어 + 감각동사구 + 부사 + 전치사구",
      fullEnglish: "He argues that tropical durian fruit smells too strong in public transportation.",
      hintBreakdown: {
        mainSV: "He argues",
        subj: "tropical durian fruit",
        pred: "smells too strong in public transportation"
      },
      tip: "'그는 주장한다(He argues)'를 먼저 두고, that 뒤의 단수 주어 durian fruit에 맞춰 감각동사 smells를 연결합니다.",
      chunks: [
        { id: "c_con2-1", text: "He argues", isSubjectVerb: true },
        { id: "c_con2-2", text: "that tropical durian fruit", isSubjectVerb: false },
        { id: "c_con2-3", text: "smells too strong", isSubjectVerb: false },
        { id: "c_con2-4", text: "in public transportation.", isSubjectVerb: false }
      ]
    },
    {
      id: "con-3",
      code: "FOOD-CON-03",
      country: "미국",
      flag: "🇺🇸",
      food: "과도한 패스트푸드",
      korean: "의사들은 과도한 정크푸드가 청소년들의 전통 식습관을 해칠 수 있다고 우려한다.",
      formula: "주어 + 동사 + that + 주어 + 조동사구 + 목적어 + 전치사구",
      fullEnglish: "Doctors worry that excessive junk food can harm traditional diets among teenagers.",
      hintBreakdown: {
        mainSV: "Doctors worry",
        subj: "excessive junk food",
        pred: "can harm traditional diets among teenagers"
      },
      tip: "'의사들은 우려한다(Doctors worry)'가 주절의 기둥! that절 주어 excessive junk food 뒤에 can harm이 옵니다.",
      chunks: [
        { id: "c_con3-1", text: "Doctors worry", isSubjectVerb: true },
        { id: "c_con3-2", text: "that excessive junk food", isSubjectVerb: false },
        { id: "c_con3-3", text: "can harm traditional diets", isSubjectVerb: false },
        { id: "c_con3-4", text: "among teenagers.", isSubjectVerb: false }
      ]
    },
    {
      id: "con-4",
      code: "FOOD-CON-04",
      country: "스웨덴",
      flag: "🇸🇪",
      food: "발효 청어 (수르스트뢰밍)",
      korean: "현지인들은 스웨덴 수르스트뢰밍이 초보자들에게 지나치게 자극적이라고 인정한다.",
      formula: "주어 + 동사 + that + 주어 + be동사 + 부사+형용사보어 + 전치사구",
      fullEnglish: "Locals admit that Swedish surströmming is overly pungent for first-time tasters.",
      hintBreakdown: {
        mainSV: "Locals admit",
        subj: "Swedish surströmming",
        pred: "is overly pungent for first-time tasters"
      },
      tip: "'현지인들은 인정한다(Locals admit)'를 1순위로 배치하세요! 그 다음 수르스트뢰밍이 톡 쏜다(is overly pungent)를 결합합니다.",
      chunks: [
        { id: "c_con4-1", text: "Locals admit", isSubjectVerb: true },
        { id: "c_con4-2", text: "that Swedish surströmming", isSubjectVerb: false },
        { id: "c_con4-3", text: "is overly pungent", isSubjectVerb: false },
        { id: "c_con4-4", text: "for first-time tasters.", isSubjectVerb: false }
      ]
    },
    {
      id: "con-5",
      code: "FOOD-CON-05",
      country: "독일",
      flag: "🇩🇪",
      food: "고염분 가공 소시지",
      korean: "우리는 극도로 짠 가공 소시지가 장기적으로 심장 건강에 좋을지 의심한다.",
      formula: "주어 + 동사 + that + 복수주어 + be동사 + 형용사보어 + 전치사구",
      fullEnglish: "We doubt that extremely salty sausages are good for heart health in the long run.",
      hintBreakdown: {
        mainSV: "We doubt",
        subj: "extremely salty sausages",
        pred: "are good for heart health in the long run"
      },
      tip: "'우리는 의심한다(We doubt)'를 맨 앞에 두고, 복수 명사 sausages에 맞춰 복수 동사 are good for를 이어붙이세요.",
      chunks: [
        { id: "c_con5-1", text: "We doubt", isSubjectVerb: true },
        { id: "c_con5-2", text: "that extremely salty sausages", isSubjectVerb: false },
        { id: "c_con5-3", text: "are good for heart health", isSubjectVerb: false },
        { id: "c_con5-4", text: "in the long run.", isSubjectVerb: false }
      ]
    }
  ]
};

// ==========================================================================
// 2. AUDIO SYNTHESIZER (Web Audio API - No external assets required)
// ==========================================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Soft wooden click when picking/cancelling a chunk
  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(480, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch (e) {
      // Audio context might be restricted before gesture
    }
  }

  // Heavy stamp thud + bright bell for approval
  playStamp() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      
      // Impact thud
      const oscThud = this.ctx.createOscillator();
      const gainThud = this.ctx.createGain();
      oscThud.type = "triangle";
      oscThud.frequency.setValueAtTime(140, now);
      oscThud.frequency.exponentialRampToValueAtTime(30, now + 0.18);
      gainThud.gain.setValueAtTime(0.35, now);
      gainThud.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      oscThud.connect(gainThud);
      gainThud.connect(this.ctx.destination);
      oscThud.start(now);
      oscThud.stop(now + 0.2);

      // High pleasant chime
      const oscChime = this.ctx.createOscillator();
      const gainChime = this.ctx.createGain();
      oscChime.type = "sine";
      oscChime.frequency.setValueAtTime(880, now + 0.05);
      oscChime.frequency.setValueAtTime(1320, now + 0.14);
      gainChime.gain.setValueAtTime(0.15, now + 0.05);
      gainChime.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      oscChime.connect(gainChime);
      gainChime.connect(this.ctx.destination);
      oscChime.start(now + 0.05);
      oscChime.stop(now + 0.4);
    } catch (e) {}
  }

  // Low error wobble
  playError() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(130, now + 0.2);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {}
  }

  // Ascending fanfare chord for category completion
  playFanfare() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const start = this.ctx.currentTime + idx * 0.1;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.45);
      });
    } catch (e) {}
  }
}

// ==========================================================================
// 3. APPLICATION STATE & CONTROLLER
// ==========================================================================
class CulinaryPassportApp {
  constructor() {
    this.audio = new SoundEffects();
    this.currentCategory = "pro"; // 'pro' | 'neutral' | 'con'
    this.currentQuestionIndex = 0; // 0 to 4
    this.placedChunks = []; // Array of chunk objects in user arrangement
    this.availableChunks = []; // Array of chunk objects remaining in pool
    this.solvedQuestions = {
      pro: new Set(),
      neutral: new Set(),
      con: new Set()
    };
    this.isChecking = false;

    // Load persisted state if exists
    this.loadState();

    // DOM Elements
    this.initElements();

    // Attach Event Listeners
    this.attachEvents();

    // Initial Render
    this.renderQuestion();
    this.updateCategoryTabs();
    this.updateProgress();
  }

  initElements() {
    // Navigation & Category
    this.tabPro = document.getElementById("tabPro");
    this.tabNeutral = document.getElementById("tabNeutral");
    this.tabCon = document.getElementById("tabCon");
    this.categoryTitleText = document.getElementById("categoryTitleText");
    this.categoryProgressPercent = document.getElementById("categoryProgressPercent");
    this.progressFill = document.getElementById("progressFill");
    this.totalProgressBadge = document.getElementById("totalProgressBadge");
    this.questionCode = document.getElementById("questionCode");
    this.footerStampsSummary = document.getElementById("footerStampsSummary");

    // Sound Toggle
    this.btnToggleSound = document.getElementById("btnToggleSound");
    this.soundIcon = document.getElementById("soundIcon");

    // Question Card
    this.countryFlag = document.getElementById("countryFlag");
    this.countryName = document.getElementById("countryName");
    this.foodName = document.getElementById("foodName");
    this.koreanPrompt = document.getElementById("koreanPrompt");
    this.formulaShortText = document.getElementById("formulaShortText");
    this.btnSpeak = document.getElementById("btnSpeak");
    this.btnHintModal = document.getElementById("btnHintModal");

    // Construction Tray & Word Pool
    this.answerTray = document.getElementById("answerTray");
    this.trayPlaceholder = document.getElementById("trayPlaceholder");
    this.wordPool = document.getElementById("wordPool");
    this.feedbackMsgBar = document.getElementById("feedbackMsgBar");
    this.feedbackIcon = document.getElementById("feedbackIcon");
    this.feedbackText = document.getElementById("feedbackText");

    // Action Buttons
    this.btnReset = document.getElementById("btnReset");
    this.btnCheck = document.getElementById("btnCheck");
    this.btnNext = document.getElementById("btnNext");

    // Stamp Overlay
    this.stampOverlay = document.getElementById("stampOverlay");
    this.customsStamp = document.getElementById("customsStamp");
    this.stampTitle = document.getElementById("stampTitle");
    this.stampSubtitle = document.getElementById("stampSubtitle");
    this.stampDate = document.getElementById("stampDate");

    // Hint Modal
    this.hintModal = document.getElementById("hintModal");
    this.btnCloseHint = document.getElementById("btnCloseHint");
    this.btnConfirmHint = document.getElementById("btnConfirmHint");
    this.hintChipMainSV = document.getElementById("hintChipMainSV");
    this.hintChipSubj = document.getElementById("hintChipSubj");
    this.hintChipPred = document.getElementById("hintChipPred");
    this.currentSentenceTipText = document.getElementById("currentSentenceTipText");

    // Celebration Modal
    this.celebrationModal = document.getElementById("celebrationModal");
    this.btnCelebrationNextTab = document.getElementById("btnCelebrationNextTab");
    this.btnCelebrationClose = document.getElementById("btnCelebrationClose");
    this.confettiContainer = document.getElementById("confettiContainer");
    this.celebrationTitle = document.getElementById("celebrationTitle");
    this.celebrationDesc = document.getElementById("celebrationDesc");
  }

  attachEvents() {
    // Category Tabs
    this.tabPro.addEventListener("click", () => this.switchCategory("pro"));
    this.tabNeutral.addEventListener("click", () => this.switchCategory("neutral"));
    this.tabCon.addEventListener("click", () => this.switchCategory("con"));

    // Audio Toggle
    this.btnToggleSound.addEventListener("click", () => {
      const active = this.audio.toggle();
      this.soundIcon.textContent = active ? "🔔" : "🔕";
      this.btnToggleSound.title = active ? "효과음 끄기" : "효과음 켜기";
    });

    // Speak Button (TTS)
    this.btnSpeak.addEventListener("click", () => this.speakSentence());

    // Hint Modal
    this.btnHintModal.addEventListener("click", () => this.openHintModal());
    this.btnCloseHint.addEventListener("click", () => this.closeHintModal());
    this.btnConfirmHint.addEventListener("click", () => this.closeHintModal());
    this.hintModal.addEventListener("click", (e) => {
      if (e.target === this.hintModal) this.closeHintModal();
    });

    // Reset, Check, Next
    this.btnReset.addEventListener("click", () => this.resetAnswer());
    this.btnCheck.addEventListener("click", () => this.checkAnswer());
    this.btnNext.addEventListener("click", () => this.nextQuestion());

    // Celebration Modal
    this.btnCelebrationClose.addEventListener("click", () => this.closeCelebration());
    this.btnCelebrationNextTab.addEventListener("click", () => {
      this.closeCelebration();
      this.advanceToNextCategory();
    });

    // Keyboard Accessibility (Enter = Check)
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !this.isChecking) {
        if (this.btnNext.style.display !== "none") {
          this.nextQuestion();
        } else if (this.placedChunks.length > 0) {
          this.checkAnswer();
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // Category & Question Flow
  // --------------------------------------------------------------------------
  switchCategory(catKey) {
    if (this.currentCategory === catKey) return;
    this.currentCategory = catKey;
    this.currentQuestionIndex = 0;
    this.audio.playClick();
    this.updateCategoryTabs();
    this.renderQuestion();
    this.updateProgress();
  }

  getCurrentQuestion() {
    const list = QUESTIONS_DATA[this.currentCategory];
    return list[this.currentQuestionIndex];
  }

  renderQuestion() {
    const q = this.getCurrentQuestion();
    if (!q) return;

    // Reset visual status
    this.isChecking = false;
    this.hideFeedback();
    this.hideStamp();
    this.btnNext.style.display = "none";
    this.btnCheck.style.display = "inline-flex";
    this.answerTray.className = "answer-tray";

    // Set Meta Info
    this.questionCode.textContent = q.code;
    this.countryFlag.textContent = q.flag;
    this.countryName.textContent = q.country;
    this.foodName.textContent = q.food;
    this.koreanPrompt.textContent = q.korean;
    this.formulaShortText.textContent = q.formula;

    // Shuffle chunks for word pool
    this.placedChunks = [];
    this.availableChunks = this.shuffleArray([...q.chunks]);

    // Update modal contents for this question
    this.hintChipMainSV.textContent = q.hintBreakdown.mainSV;
    this.hintChipSubj.textContent = q.hintBreakdown.subj;
    this.hintChipPred.textContent = q.hintBreakdown.pred;
    this.currentSentenceTipText.textContent = q.tip;

    // Render DOM chunks
    this.renderTray();
    this.renderPool();
    this.renderFooterStamps();
  }

  shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    // Prevent accidental exact match at start
    const q = this.getCurrentQuestion();
    if (copy.length > 1 && copy.every((c, idx) => c.id === q.chunks[idx].id)) {
      [copy[0], copy[1]] = [copy[1], copy[0]];
    }
    return copy;
  }

  // --------------------------------------------------------------------------
  // Chunk Arrangement Interaction
  // --------------------------------------------------------------------------
  renderPool() {
    this.wordPool.innerHTML = "";
    if (this.availableChunks.length === 0) {
      const emptyMsg = document.createElement("span");
      emptyMsg.className = "zone-guide";
      emptyMsg.style.margin = "auto";
      emptyMsg.textContent = "모든 조각이 배열 칸에 배치되었습니다. '정답 확인'을 누르세요!";
      this.wordPool.appendChild(emptyMsg);
      return;
    }

    this.availableChunks.forEach((chunk) => {
      const btn = this.createChunkButton(chunk, false);
      btn.addEventListener("click", () => this.placeChunk(chunk));
      this.wordPool.appendChild(btn);
    });
  }

  renderTray() {
    this.answerTray.innerHTML = "";
    if (this.placedChunks.length === 0) {
      this.answerTray.appendChild(this.trayPlaceholder);
      return;
    }

    this.placedChunks.forEach((chunk, index) => {
      const btn = this.createChunkButton(chunk, true, index + 1);
      btn.addEventListener("click", () => this.removeChunk(chunk));
      this.answerTray.appendChild(btn);
    });
  }

  createChunkButton(chunk, isPlaced, slotIndex = 0) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `chunk-btn ${chunk.isSubjectVerb ? "is-subject-verb" : ""} ${isPlaced ? "placed" : ""}`;
    btn.setAttribute("data-chunk-id", chunk.id);

    // Subject + Verb Highlight Pill
    if (chunk.isSubjectVerb) {
      const badge = document.createElement("span");
      badge.className = "sv-chip-tag";
      badge.textContent = "주어+동사";
      btn.appendChild(badge);
    }

    const textNode = document.createElement("span");
    textNode.className = "chunk-text";
    textNode.textContent = chunk.text;
    btn.appendChild(textNode);

    // Removal cue if in answer tray
    if (isPlaced) {
      const removeHint = document.createElement("span");
      removeHint.className = "remove-hint";
      removeHint.textContent = "✕";
      btn.appendChild(removeHint);
    }

    return btn;
  }

  placeChunk(chunk) {
    if (this.isChecking) return;
    this.audio.playClick();
    this.availableChunks = this.availableChunks.filter((c) => c.id !== chunk.id);
    this.placedChunks.push(chunk);
    this.hideFeedback();
    this.renderPool();
    this.renderTray();
  }

  removeChunk(chunk) {
    if (this.isChecking) return;
    this.audio.playClick();
    this.placedChunks = this.placedChunks.filter((c) => c.id !== chunk.id);
    this.availableChunks.push(chunk);
    this.hideFeedback();
    this.renderTray();
    this.renderPool();
  }

  resetAnswer() {
    this.audio.playClick();
    const q = this.getCurrentQuestion();
    this.placedChunks = [];
    this.availableChunks = this.shuffleArray([...q.chunks]);
    this.hideFeedback();
    this.hideStamp();
    this.answerTray.className = "answer-tray";
    this.renderTray();
    this.renderPool();
  }

  // --------------------------------------------------------------------------
  // Answer Checking & Feedback
  // --------------------------------------------------------------------------
  checkAnswer() {
    const q = this.getCurrentQuestion();
    if (this.placedChunks.length === 0) {
      this.showFeedback(false, "먼저 아래 단어(구) 조각을 클릭하여 문장을 배열해주세요!");
      return;
    }

    if (this.placedChunks.length < q.chunks.length) {
      this.showFeedback(false, "아직 배치되지 않은 조각이 있습니다. 모든 조각을 채워주세요!");
      this.shakeTray();
      return;
    }

    // Check if order matches q.chunks exactly
    const isCorrect = this.placedChunks.every((chunk, idx) => chunk.id === q.chunks[idx].id);

    if (isCorrect) {
      this.handleCorrect(q);
    } else {
      this.handleIncorrect(q);
    }
  }

  handleCorrect(q) {
    this.isChecking = true;
    this.audio.playStamp();
    this.solvedQuestions[this.currentCategory].add(q.id);
    this.saveState();

    // UI Success state
    this.answerTray.className = "answer-tray state-correct";
    this.showStamp(true, "CUSTOMS APPROVED", "어순 심사 통과", "PASSPORT STAMPED");
    this.showFeedback(true, "완벽합니다! 주어+동사 중심의 올바른 영어 어순입니다.");

    this.btnCheck.style.display = "none";
    this.btnNext.style.display = "inline-flex";

    this.updateCategoryTabs();
    this.updateProgress();
    this.renderFooterStamps();

    // Check if category complete
    const totalInCat = QUESTIONS_DATA[this.currentCategory].length;
    const solvedInCat = this.solvedQuestions[this.currentCategory].size;

    if (solvedInCat >= totalInCat && this.currentQuestionIndex === totalInCat - 1) {
      setTimeout(() => {
        this.openCelebration();
      }, 900);
    }
  }

  handleIncorrect(q) {
    this.audio.playError();
    this.shakeTray();
    this.showStamp(false, "INSPECTION NEEDED", "어순 재확인 필요", "TRY AGAIN");
    
    // Help hint based on middle school word order
    let hintNote = "다시 시도해보세요! 노란색 [주어+동사] 조각을 문장의 맨 앞에 놓았는지 확인하세요.";
    if (this.placedChunks.length > 0 && !this.placedChunks[0].isSubjectVerb) {
      hintNote = "주의: 영어 문장의 뼈대인 [주어+동사(노란색)]가 제일 먼저 와야 합니다!";
    }

    this.showFeedback(false, hintNote);

    setTimeout(() => {
      this.hideStamp();
    }, 1200);
  }

  shakeTray() {
    this.answerTray.classList.remove("state-incorrect");
    void this.answerTray.offsetWidth; // Trigger reflow
    this.answerTray.classList.add("state-incorrect");
  }

  showFeedback(isSuccess, message) {
    this.feedbackMsgBar.style.display = "flex";
    this.feedbackMsgBar.className = `feedback-msg-bar ${isSuccess ? "success" : "error"}`;
    this.feedbackIcon.textContent = isSuccess ? "✅" : "⚠️";
    this.feedbackText.textContent = message;
  }

  hideFeedback() {
    this.feedbackMsgBar.style.display = "none";
  }

  showStamp(isSuccess, title, subtitle, dateText) {
    this.customsStamp.className = `customs-stamp ${isSuccess ? "" : "fail-stamp"}`;
    this.stampTitle.textContent = title;
    this.stampSubtitle.textContent = subtitle;
    this.stampDate.textContent = dateText;
    this.stampOverlay.classList.add("show-stamp");
  }

  hideStamp() {
    this.stampOverlay.classList.remove("show-stamp");
  }

  nextQuestion() {
    this.audio.playClick();
    const list = QUESTIONS_DATA[this.currentCategory];
    if (this.currentQuestionIndex < list.length - 1) {
      this.currentQuestionIndex++;
      this.renderQuestion();
    } else {
      // Loop or trigger celebration
      this.openCelebration();
    }
  }

  // --------------------------------------------------------------------------
  // Progress & Badges
  // --------------------------------------------------------------------------
  updateProgress() {
    const list = QUESTIONS_DATA[this.currentCategory];
    const totalInCat = list.length;
    const solvedInCat = this.solvedQuestions[this.currentCategory].size;
    const pct = Math.round((solvedInCat / totalInCat) * 100);

    const catLabels = {
      pro: "📗 찬성 입장 문장 탐험",
      neutral: "📙 중립 입장 문장 탐험",
      con: "📕 반대 입장 문장 탐험"
    };

    this.categoryTitleText.textContent = catLabels[this.currentCategory];
    this.categoryProgressPercent.textContent = `${pct}% 완료 (${solvedInCat}/${totalInCat})`;
    this.progressFill.style.width = `${pct}%`;

    // Total Grand Progress
    const totalAll = 15;
    const totalSolved = 
      this.solvedQuestions.pro.size +
      this.solvedQuestions.neutral.size +
      this.solvedQuestions.con.size;
    this.totalProgressBadge.textContent = `비자 발급: ${totalSolved} / ${totalAll}`;
  }

  updateCategoryTabs() {
    const countPro = this.solvedQuestions.pro.size;
    const countNeu = this.solvedQuestions.neutral.size;
    const countCon = this.solvedQuestions.con.size;

    document.getElementById("countPro").textContent = `${countPro}/5`;
    document.getElementById("countNeutral").textContent = `${countNeu}/5`;
    document.getElementById("countCon").textContent = `${countCon}/5`;

    this.tabPro.classList.toggle("active", this.currentCategory === "pro");
    this.tabNeutral.classList.toggle("active", this.currentCategory === "neutral");
    this.tabCon.classList.toggle("active", this.currentCategory === "con");

    this.tabPro.setAttribute("aria-selected", this.currentCategory === "pro");
    this.tabNeutral.setAttribute("aria-selected", this.currentCategory === "neutral");
    this.tabCon.setAttribute("aria-selected", this.currentCategory === "con");
  }

  renderFooterStamps() {
    this.footerStampsSummary.innerHTML = "";
    const list = QUESTIONS_DATA[this.currentCategory];

    list.forEach((q, idx) => {
      const slot = document.createElement("button");
      slot.type = "button";
      const isSolved = this.solvedQuestions[this.currentCategory].has(q.id);
      const isCurrent = idx === this.currentQuestionIndex;

      slot.className = `mini-stamp-slot ${isSolved ? "active" : ""}`;
      slot.title = `문항 ${idx + 1}: ${q.food}`;
      slot.textContent = isSolved ? "✓" : `${idx + 1}`;
      
      if (isCurrent) {
        slot.style.borderColor = "var(--turmeric-gold)";
        slot.style.boxShadow = "0 0 0 2px var(--turmeric-gold)";
      }

      slot.addEventListener("click", () => {
        this.currentQuestionIndex = idx;
        this.renderQuestion();
      });

      this.footerStampsSummary.appendChild(slot);
    });
  }

  // --------------------------------------------------------------------------
  // Pronunciation SpeechSynthesis (TTS)
  // --------------------------------------------------------------------------
  speakSentence() {
    const q = this.getCurrentQuestion();
    if (!("speechSynthesis" in window)) {
      alert("이 브라우저는 음성 듣기를 지원하지 않습니다.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(q.fullEnglish);
    utterance.lang = "en-US";
    utterance.rate = 0.85; // Slightly slower for middle school learners
    utterance.pitch = 1.0;

    this.btnSpeak.style.background = "#FEF3C7";
    utterance.onend = () => {
      this.btnSpeak.style.background = "";
    };
    utterance.onerror = () => {
      this.btnSpeak.style.background = "";
    };

    window.speechSynthesis.speak(utterance);
  }

  // --------------------------------------------------------------------------
  // Modals & Celebrations
  // --------------------------------------------------------------------------
  openHintModal() {
    this.audio.playClick();
    this.hintModal.classList.add("open");
    this.hintModal.setAttribute("aria-hidden", "false");
  }

  closeHintModal() {
    this.hintModal.classList.remove("open");
    this.hintModal.setAttribute("aria-hidden", "true");
  }

  openCelebration() {
    this.audio.playFanfare();
    this.generateConfetti();
    const catNames = { pro: "찬성 입장", neutral: "중립 입장", con: "반대 입장" };
    this.celebrationTitle.textContent = `축하합니다! ${catNames[this.currentCategory]} 정복!`;
    this.celebrationDesc.textContent = `세계 전통 음식에 대한 ${catNames[this.currentCategory]} 5개 문장의 영어 어순을 모두 마스터하여 정식 미식 비자 스탬프를 획득했습니다!`;
    this.celebrationModal.classList.add("open");
    this.celebrationModal.setAttribute("aria-hidden", "false");
  }

  closeCelebration() {
    this.celebrationModal.classList.remove("open");
    this.celebrationModal.setAttribute("aria-hidden", "true");
    this.confettiContainer.innerHTML = "";
  }

  advanceToNextCategory() {
    if (this.currentCategory === "pro") {
      this.switchCategory("neutral");
    } else if (this.currentCategory === "neutral") {
      this.switchCategory("con");
    } else {
      this.switchCategory("pro");
    }
  }

  generateConfetti() {
    this.confettiContainer.innerHTML = "";
    const colors = ["#F59E0B", "#DC2626", "#059669", "#FBBF24", "#3B82F6", "#EC4899"];
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = `${Math.random() * 1.5}s`;
      piece.style.transform = `scale(${0.6 + Math.random() * 0.8})`;
      this.confettiContainer.appendChild(piece);
    }
  }

  // --------------------------------------------------------------------------
  // Persistence (LocalStorage)
  // --------------------------------------------------------------------------
  saveState() {
    try {
      const stateObj = {
        pro: Array.from(this.solvedQuestions.pro),
        neutral: Array.from(this.solvedQuestions.neutral),
        con: Array.from(this.solvedQuestions.con)
      };
      localStorage.setItem("culinary_passport_solved", JSON.stringify(stateObj));
    } catch (e) {}
  }

  loadState() {
    try {
      const saved = localStorage.getItem("culinary_passport_solved");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.pro) this.solvedQuestions.pro = new Set(parsed.pro);
        if (parsed.neutral) this.solvedQuestions.neutral = new Set(parsed.neutral);
        if (parsed.con) this.solvedQuestions.con = new Set(parsed.con);
      }
    } catch (e) {}
  }
}

// ==========================================================================
// 4. BOOTSTRAP ON DOM READY
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  window.app = new CulinaryPassportApp();
});
