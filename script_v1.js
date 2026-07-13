/* ============================================================================
   AN-NOOR — THE LIGHT — PREMIUM LOGIC & INTERACTION ENGINE
   ============================================================================ */

/* ---------------------------------- Constants & Data ---------------------------------- */

const PHASES = {
  fajr: {
    label: "Fajr",
    arabic: "الفجر",
    greeting: "Sabah An-Noor",
    greetingArabic: "صباح النور",
    sky: "radial-gradient(120% 90% at 50% 110%, #fda4af 0%, #a78bfa 40%, #1e1b4b 100%)",
    glow: "#fda4af",
    starOpacity: 0.1,
    bodyColor: "#1e1b4b",
  },
  dhuhr: {
    label: "Dhuhr",
    arabic: "الظهر",
    greeting: "Nahaarak Sa'eed",
    greetingArabic: "نهارك سعيد",
    sky: "radial-gradient(130% 90% at 50% 100%, #add8e6 0%, #1e90ff 45%, #191970 100%)",
    glow: "#fde68a",
    starOpacity: 0.0,
    bodyColor: "#1e293b",
  },
  asr: {
    label: "Asr",
    arabic: "العصر",
    greeting: "Asr Mubarak",
    greetingArabic: "عصر مبارك",
    sky: "radial-gradient(130% 90% at 50% 105%, #fbbf24 0%, #f97316 40%, #4f46e5 100%)",
    glow: "#fbbf24",
    starOpacity: 0.0,
    bodyColor: "#1e1b4b",
  },
  maghrib: {
    label: "Maghrib",
    arabic: "المغرب",
    greeting: "Masa'a An-Noor",
    greetingArabic: "مساء النور",
    sky: "radial-gradient(130% 100% at 50% 115%, #ef4444 0%, #7c2d12 40%, #0f172a 100%)",
    glow: "#ff8a5c",
    starOpacity: 0.25,
    bodyColor: "#0f172a",
  },
  isha: {
    label: "Isha",
    arabic: "العشاء",
    greeting: "Layla Sa'eeda",
    greetingArabic: "ليلة سعيدة",
    sky: "radial-gradient(140% 100% at 50% 110%, #0f0a24 0%, #070516 45%, #020208 100%)",
    glow: "#c9a15c",
    starOpacity: 1.0,
    bodyColor: "#020208",
  },
};

const HIJRI_MONTHS = [
  "Muharram", "Safar", "Rabi al-Awwal", "Rabi al-Thani", "Jumada al-Awwal", "Jumada al-Thani",
  "Rajab", "Sha'ban", "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah",
];

const WUDU_STEPS = [
  "Intention (Niyyah)",
  "Wash hands three times",
  "Rinse mouth and nose",
  "Wash face three times",
  "Wash arms to elbows",
  "Wipe head and ears",
  "Wash feet to ankles",
];

const SALAH_STEPS = [
  "Takbir (Allahu Akbar)",
  "Qiyam — recite Al-Fatiha",
  "Ruku — bow",
  "Stand from Ruku",
  "Sujud — prostrate",
  "Sit between prostrations",
  "Second Sujud",
  "Tashahhud",
  "Taslim — end prayer",
];

const PRAYERS = [
  { name: "Fajr", arabic: "الفجر", time: "04:52" },
  { name: "Sunrise", arabic: "الشروق", time: "06:18" },
  { name: "Dhuhr", arabic: "الظهر", time: "12:41" },
  { name: "Asr", arabic: "العصر", time: "16:24" },
  { name: "Maghrib", arabic: "المغرب", time: "19:36" },
  { name: "Isha", arabic: "العشاء", time: "21:02" },
];

/* Hadith Database */
const HADITHS = {
  bukhari: [
    { ar: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى", en: "Actions are judged by intentions, and every person will get what he intended.", ref: "Sahih al-Bukhari 1" },
    { ar: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ", en: "None of you truly believes until he loves for his brother what he loves for himself.", ref: "Sahih al-Bukhari 13" },
    { ar: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ", en: "Whoever believes in Allah and the Last Day should say what is good or keep silent.", ref: "Sahih al-Bukhari 6018" }
  ],
  muslim: [
    { ar: "الدِّينُ النَّصِيحَةُ", en: "The religion is sincere advice.", ref: "Sahih Muslim 55" },
    { ar: "الظُّلْمُ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ", en: "Oppression will be a darkness on the Day of Resurrection.", ref: "Sahih Muslim 2579" },
    { ar: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ", en: "Whoever relieves a believer of some distress in this world, Allah will relieve him of some distress on the Day of Resurrection.", ref: "Sahih Muslim 2699" }
  ],
  nawawi: [
    { ar: "لاَ تَغْضَبْ", en: "Do not become angry.", ref: "40 Hadith Nawawi 16" },
    { ar: "مِنْ حُسْنِ إِسْلاَمِ الْمَرْءِ تَرْكُهُ مَا لاَ يَعْنِيهِ", en: "Part of the perfection of a person's Islam is his leaving alone that which does not concern him.", ref: "40 Hadith Nawawi 12" },
    { ar: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ", en: "Fear Allah wherever you may be, follow up an evil deed with a good deed which will wipe it out, and behave well towards people.", ref: "40 Hadith Nawawi 18" }
  ]
};

/* Adhkar Database */
const ADHKAR = {
  morning: [
    { title: "Ayat al-Kursi", ar: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...", translit: "Allahu la ilaha illa Huwal Hayyul Qayyum...", en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence...", target: 1 },
    { title: "Surah Al-Ikhlas", ar: "قُلْ هُوَ اللَّهُ أَحَدٌ...", translit: "Qul Huwal Lahu Ahad...", en: "Say, 'He is Allah, [who is] One...", target: 3 },
    { title: "Morning Protection", ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ...", translit: "Bismillahil-lazi la yadurru ma'asmihi shay'un...", en: "In the name of Allah with Whose name nothing can harm...", target: 3 }
  ],
  evening: [
    { title: "Ayat al-Kursi", ar: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...", translit: "Allahu la ilaha illa Huwal Hayyul Qayyum...", en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence...", target: 1 },
    { title: "Evening Prayer", ar: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ...", translit: "Amsayna wa amsal-mulku lillah...", en: "We have entered the evening and to Allah belongs all sovereignty...", target: 1 },
    { title: "Surah Al-Falaq", ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ...", translit: "Qul a'uzhu bi rabbil falaq...", en: "Say, 'I seek refuge in the Lord of daybreak...", target: 3 }
  ],
  salah: [
    { title: "Tasbih", ar: "سُبْحَانَ اللَّهِ", translit: "SubhanAllah", en: "Glory be to Allah", target: 33 },
    { title: "Tahmid", ar: "الْحَمْدُ لِلَّهِ", translit: "Alhamdulillah", en: "Praise be to Allah", target: 33 },
    { title: "Takbir", ar: "اللَّهُ أَكْبَرُ", translit: "Allahu Akbar", en: "Allah is Greatest", target: 34 }
  ],
  sleep: [
    { title: "Ayat al-Kursi", ar: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...", translit: "Allahu la ilaha illa Huwal Hayyul Qayyum...", en: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence...", target: 1 },
    { title: "Dua for Sleep", ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", translit: "Bismika Allahumma amutu wa ahya", en: "In Your name, O Allah, I die and I live.", target: 1 }
  ]
};

/* Quiz Questions */
const QUIZ_QUESTIONS = [
  {
    q: "What is the holy book revealed to Prophet Muhammad ﷺ?",
    choices: ["Torah", "Gospel", "Psalms", "Quran"],
    answer: 3,
    exp: "The Holy Quran was revealed to Prophet Muhammad ﷺ in stages over a period of approximately 23 years."
  },
  {
    q: "How many pillars of Islam are there?",
    choices: ["3 Pillars", "5 Pillars", "6 Pillars", "7 Pillars"],
    answer: 1,
    exp: "Islam is built upon five pillars: Shahadah (Faith), Salah (Prayer), Zakat (Almsgiving), Sawm (Fasting), and Hajj (Pilgrimage)."
  },
  {
    q: "In which month is the Holy Quran revealed?",
    choices: ["Muharram", "Rajab", "Ramadan", "Dhu al-Hijjah"],
    answer: 2,
    exp: "The Quran was first sent down during the night of Laylat al-Qadr in the holy month of Ramadan."
  },
  {
    q: "Who is the first caliph of Islam?",
    choices: ["Umar ibn al-Khattab", "Ali ibn Abi Talib", "Uthman ibn Affan", "Abu Bakr as-Siddiq"],
    answer: 3,
    exp: "Abu Bakr as-Siddiq (RA) was chosen as the first Caliph of Islam immediately after the passing of Prophet Muhammad ﷺ."
  },
  {
    q: "What is the literal meaning of the word 'Ihsan'?",
    choices: ["Patience", "Excellence / Beautification", "Sincerity", "Trust in Allah"],
    answer: 1,
    exp: "Ihsan literally means beauty, excellence, or perfection. In a spiritual sense, it is to worship Allah as if you see Him."
  }
];

const RECITERS = ["Mishary Al-Afasy", "Saud Al-Shuraim", "Saad Al-Ghamdi", "Abdul Basit"];
const TRANSLATIONS = ["English", "Français", "Türkçe", "اردو"];

/* ---------------------------------- State Variables ---------------------------------- */

let currentView = "dashboard";
let currentPhase = "isha";
let autoMode = true;
let adhkarCount = 0;
let bookmarks = new Set();
let notes = {};
let salahChecklist = {};
let activeSalahTab = "wudu";
let openSurah = null;
let activeAyahKey = null;
let reciter = RECITERS[0];
let translation = TRANSLATIONS[0];
let ayahTab = "translation";
let playingAyahKey = null;
let tafseerOpen = false;

/* New features states */
const FALLBACK_SURAHS = [
  { id: 1, name: "Al-Fatiha", arabic: "الفاتحة", meaning: "The Opening", ayahCount: 7, revelation: "Meccan" },
  { id: 2, name: "Al-Baqarah", arabic: "البقرة", meaning: "The Cow", ayahCount: 286, revelation: "Medinan" },
  { id: 36, name: "Ya-Sin", arabic: "يس", meaning: "Ya Sin", ayahCount: 83, revelation: "Meccan" },
  { id: 55, name: "Ar-Rahman", arabic: "الرحمن", meaning: "The Most Merciful", ayahCount: 78, revelation: "Medinan" },
  { id: 112, name: "Al-Ikhlas", arabic: "الإخلاص", meaning: "The Sincerity", ayahCount: 4, revelation: "Meccan" },
  { id: 113, name: "Al-Falaq", arabic: "الفلق", meaning: "The Daybreak", ayahCount: 5, revelation: "Meccan" }
];
let allSurahs = [...FALLBACK_SURAHS];
let activeHadithBook = "bukhari";
let activeAdhkarCategory = "morning";
let adhkarSessionCounts = {}; // Key: "morning-0"
let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnswered = false;

let chatMessages = [
  { sender: "ai", text: "Assalamu Alaikum. I am Murshid, your Islamic companion. How can I help you seek knowledge or find reflection today?" }
];

/* Audio Recitation */
let currentAudio = null;

/* Celestial canvas vars */
let stars = [];
let shootingStars = [];
let mouse = { x: 0, y: 0 };
let currentParallax = { x: 0, y: 0 };
let rafId = null;
let phaseParticles = [];
let fajrBirds = [];
let dhuhrEagles = [];
let asrClouds = [];

const SKY_COLORS = {
  fajr: {
    bottom: [253, 164, 175],
    mid: [167, 139, 250],
    top: [30, 27, 75]
  },
  dhuhr: {
    bottom: [173, 216, 230],
    mid: [30, 144, 255],
    top: [25, 25, 112]
  },
  asr: {
    bottom: [251, 191, 36],
    mid: [249, 115, 22],
    top: [79, 70, 229]
  },
  maghrib: {
    bottom: [239, 68, 68],
    mid: [124, 45, 18],
    top: [15, 23, 42]
  },
  isha: {
    bottom: [15, 10, 36],
    mid: [7, 5, 22],
    top: [2, 2, 8]
  }
};

let skyLerpColors = {
  bottom: [20, 16, 51],
  mid: [7, 6, 26],
  top: [3, 3, 9]
};

const FOREST_SVG = `
  <svg viewBox="0 0 1200 400" preserveAspectRatio="none" class="nature-svg forest-scene">
    <path d="M0 330 Q400 300 800 350 L1200 320 L1200 400 L0 400 Z" fill="#201533" opacity="0.6"/>
    <path d="M0 350 Q300 330 650 360 T1200 340 L1200 400 L0 400 Z" fill="#130b21"/>
    <polygon points="120,340 140,240 160,340" fill="#130b21" opacity="0.85"/>
    <polygon points="145,350 170,220 195,350" fill="#0c0717"/>
    <polygon points="80,360 105,210 130,360" fill="#0c0717"/>
    <polygon points="980,350 1005,230 1030,350" fill="#130b21" opacity="0.85"/>
    <polygon points="1010,360 1035,200 1060,360" fill="#0c0717"/>
  </svg>
  <div class="fog-drift"></div>
`;

const OASIS_SVG = `
  <svg viewBox="0 0 1200 400" preserveAspectRatio="none" class="nature-svg oasis-scene">
    <path d="M0 320 Q200 280 450 320 T950 340 T1200 300 L1200 400 L0 400 Z" fill="#14213a" opacity="0.65"/>
    <path d="M0 340 Q350 310 700 350 T1200 330 L1200 400 L0 400 Z" fill="#0c1626"/>
    <g class="swaying-palm">
      <path d="M10 160 Q-20 80 -5 0" stroke="#0a0f1b" stroke-width="12" fill="none"/>
      <path d="M-5 0 Q-60 -40 -120 -20 Q-60 -5 -5 0" fill="#080c16"/>
      <path d="M-5 0 Q-80 -80 -10 -110 Q-10 -40 -5 0" fill="#080c16"/>
      <path d="M-5 0 Q60 -80 120 -50 Q50 -10 -5 0" fill="#080c16"/>
      <path d="M-5 0 Q90 -30 140 10 Q60 10 -5 0" fill="#080c16"/>
    </g>
    <g class="swaying-palm-reverse">
      <path d="M10 160 Q-15 90 -5 0" stroke="#0a0f1b" stroke-width="14" fill="none"/>
      <path d="M-5 0 Q-60 -40 -120 -20 Q-60 -5 -5 0" fill="#080c16"/>
      <path d="M-5 0 Q-80 -80 -10 -110 Q-10 -40 -5 0" fill="#080c16"/>
      <path d="M-5 0 Q60 -80 120 -50 Q50 -10 -5 0" fill="#080c16"/>
      <path d="M-5 0 Q90 -30 140 10 Q60 10 -5 0" fill="#080c16"/>
    </g>
  </svg>
`;

const MOUNTAINS_SVG = `
  <svg viewBox="0 0 1200 400" preserveAspectRatio="none" class="nature-svg mountain-scene">
    <polygon points="0,320 250,140 500,350 780,180 1050,340 1200,280 1200,400 0,400" fill="#2a1f45" opacity="0.5"/>
    <polygon points="0,350 380,210 750,370 950,230 1200,360 1200,400 0,400" fill="#17122b"/>
  </svg>
  <div class="valley-fog"></div>
`;

const OCEAN_SVG = `
  <svg viewBox="0 0 1200 400" preserveAspectRatio="none" class="nature-svg ocean-scene">
    <path d="M0 320 Q300 290 600 320 T1200 320 L1200 400 L0 400 Z" fill="#7a2f4a" class="ocean-wave-back" opacity="0.5"/>
    <path d="M0 340 Q300 320 600 340 T1200 340 L1200 400 L0 400 Z" fill="#3d1f4a" class="ocean-wave-mid" opacity="0.75"/>
    <path d="M0 360 Q300 350 600 360 T1200 360 L1200 400 L0 400 Z" fill="#1a1236" class="ocean-wave-front"/>
  </svg>
`;

const MINARETS_SVG = `
  <svg viewBox="0 0 1200 400" preserveAspectRatio="none" class="nature-svg minaret-scene">
    <path d="M0 350 Q400 320 800 360 T1200 340 L1200 400 L0 400 Z" fill="#07061a"/>
  </svg>
`;

/* ---------------------------------- Geolocation & Qibla Calculations ---------------------------------- */

function calculateQibla(latitude, longitude) {
  const phiK = 21.4225 * Math.PI / 180;
  const lambdaK = 39.8262 * Math.PI / 180;
  const phi = latitude * Math.PI / 180;
  const lambda = longitude * Math.PI / 180;
  const y = Math.sin(lambdaK - lambda);
  const x = Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda);
  let qiblaDirection = Math.atan2(y, x) * 180 / Math.PI;
  if (qiblaDirection < 0) qiblaDirection += 360;
  return qiblaDirection;
}

function syncLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      const qiblaAngle = calculateQibla(lat, lng);
      const needle = document.querySelector(".compass-needle");
      if (needle) {
        needle.style.transform = `rotate(${qiblaAngle}deg)`;
      }
      const compassFooter = document.querySelector(".compass-footer");
      if (compassFooter) {
        compassFooter.textContent = `Mecca is exactly ${Math.round(qiblaAngle)}° from north (synchronized with your location: ${lat.toFixed(2)}°, ${lng.toFixed(2)}°).`;
      }

      try {
        const timestamp = Math.floor(Date.now() / 1000);
        const response = await fetch(`https://api.aladhan.com/v1/timings/${timestamp}?latitude=${lat}&longitude=${lng}&method=2`);
        const json = await response.json();
        
        if (json.code === 200 && json.data && json.data.timings) {
          const timings = json.data.timings;
          PRAYERS[0].time = timings.Fajr;
          PRAYERS[1].time = timings.Sunrise;
          PRAYERS[2].time = timings.Dhuhr;
          PRAYERS[3].time = timings.Asr;
          PRAYERS[4].time = timings.Maghrib;
          PRAYERS[5].time = timings.Isha;

          renderSalahHub();
          renderDashboard();
          syncPhaseWithRealTime();
          console.log("Salah times synchronized live with user location successfully!");
        }
      } catch (err) {
        console.error("Failed to load local prayer times from AlAdhan API", err);
      }
    }, (error) => {
      console.warn("Geolocation request denied or failed, falling back to default times.", error);
    });
  }
}

/* ---------------------------------- Init & Setup ---------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  setupEventListeners();
  initCelestialBackground();
  syncPhaseWithRealTime();
  setupSpotlightTracker();
  fetchAllSurahs(); // Dynamic Quran API call
  initHadiths();
  initAdhkar();
  initQuiz();
  initChat();
  renderAll();
  syncLocation();
  setInterval(updateCountdown, 1000);

  setInterval(() => {
    if (autoMode) {
      syncPhaseWithRealTime();
      renderHeader();
      renderCelestialBody();
      renderDashboard();
      renderSalahHub();
    }
  }, 60000);
});

function loadState() {
  adhkarCount = parseInt(localStorage.getItem("adhkarCount") || "0", 10);

  try {
    bookmarks = new Set(JSON.parse(localStorage.getItem("bookmarks") || "[]"));
  } catch (e) {
    bookmarks = new Set();
  }

  try {
    notes = JSON.parse(localStorage.getItem("notes") || "{}");
  } catch (e) {
    notes = {};
  }

  try {
    salahChecklist = JSON.parse(localStorage.getItem("salahChecklist") || "{}");
  } catch (e) {
    salahChecklist = {};
  }

  try {
    adhkarSessionCounts = JSON.parse(localStorage.getItem("adhkarSessionCounts") || "{}");
  } catch (e) {
    adhkarSessionCounts = {};
  }

  const savedReciter = localStorage.getItem("reciter");
  if (savedReciter) reciter = savedReciter;

  const savedTranslation = localStorage.getItem("translation");
  if (savedTranslation) translation = savedTranslation;
}

function saveState() {
  localStorage.setItem("adhkarCount", adhkarCount.toString());
  localStorage.setItem("bookmarks", JSON.stringify(Array.from(bookmarks)));
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("salahChecklist", JSON.stringify(salahChecklist));
  localStorage.setItem("adhkarSessionCounts", JSON.stringify(adhkarSessionCounts));
  localStorage.setItem("reciter", reciter);
  localStorage.setItem("translation", translation);
}

/* ---------------------------------- Helper Utilities ---------------------------------- */

function getHijriApprox(date) {
  const epoch = -42523286400000;
  const days = Math.floor((date.getTime() - epoch) / 86400000);
  const hijriYear = Math.floor(days / 354.367) + 1;
  const dayInYear = days - Math.floor((hijriYear - 1) * 354.367);
  const month = Math.min(11, Math.floor(dayInYear / 29.53));
  const day = Math.max(1, Math.floor(dayInYear - month * 29.53) + 1);
  return { year: hijriYear, month: HIJRI_MONTHS[month], day };
}

function getPhaseByHour(h) {
  if (h >= 4 && h < 6.5) return "fajr";
  if (h >= 6.5 && h < 15) return "dhuhr";
  if (h >= 15 && h < 18) return "asr";
  if (h >= 18 && h < 19.5) return "maghrib";
  return "isha";
}

function syncPhaseWithRealTime() {
  if (!autoMode) return;
  const now = new Date();
  const decimalHour = now.getHours() + now.getMinutes() / 60;
  const computedPhase = getPhaseByHour(decimalHour);
  if (computedPhase !== currentPhase) {
    currentPhase = computedPhase;
    applyThemeVariables();
  }
}


function applyThemeVariables() {
  const cfg = PHASES[currentPhase];
  document.documentElement.style.setProperty("--sky-gradient", cfg.sky);
  document.documentElement.style.setProperty("--glow-color", cfg.glow);
  document.documentElement.style.setProperty("--body-color", cfg.bodyColor);
  document.documentElement.style.setProperty("--star-opacity", cfg.starOpacity.toString());
}

/* ---------------------------------- Event Handlers ---------------------------------- */

function setupEventListeners() {
  const navButtons = document.querySelectorAll(".nav-btn[data-view]");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const view = btn.getAttribute("data-view");
      switchView(view);
    });
  });

  const phaseButtons = document.getElementById("phase-buttons");
  phaseButtons.addEventListener("click", (e) => {
    const btn = e.target.closest(".phase-btn");
    if (!btn) return;

    autoMode = false;
    currentPhase = btn.getAttribute("data-phase");
    applyThemeVariables();
    updateLiveSyncUI();
    renderHeader();
    renderCelestialBody();
    renderDashboard();
    renderSalahHub();
  });

  const liveSyncBtn = document.getElementById("live-sync-btn");
  liveSyncBtn.addEventListener("click", () => {
    autoMode = !autoMode;
    if (autoMode) {
      syncPhaseWithRealTime();
    }
    updateLiveSyncUI();
    renderHeader();
    renderCelestialBody();
    renderDashboard();
    renderSalahHub();
  });

  const tafseerToggle = document.getElementById("tafseer-toggle-btn");
  tafseerToggle.addEventListener("click", () => {
    tafseerOpen = !tafseerOpen;
    const tafseerPanel = document.getElementById("ayah-tafseer");
    if (tafseerOpen) {
      tafseerPanel.classList.remove("collapsed");
      tafseerToggle.textContent = "hide tafseer";
    } else {
      tafseerPanel.classList.add("collapsed");
      tafseerToggle.textContent = "show tafseer";
    }
  });

  const counterBtn = document.getElementById("counter-btn");
  counterBtn.addEventListener("click", () => {
    adhkarCount++;
    saveState();
    const countVal = document.getElementById("counter-value");
    countVal.textContent = adhkarCount;

    countVal.style.transform = "scale(1.3)";
    setTimeout(() => {
      countVal.style.transform = "scale(1)";
    }, 150);
  });

  const quranSearch = document.getElementById("quran-search");
  quranSearch.addEventListener("input", (e) => {
    renderQuran(e.target.value);
  });

  document.getElementById("modal-close-btn").addEventListener("click", closeModal);
  document.getElementById("surah-modal").addEventListener("click", (e) => {
    if (e.target.id === "surah-modal") {
      closeModal();
    }
  });

  const reciterSelect = document.getElementById("reciter-select");
  reciterSelect.addEventListener("change", (e) => {
    reciter = e.target.value;
    saveState();
    const reciterLabels = document.querySelectorAll(".audio-wave-reciter");
    reciterLabels.forEach(lbl => lbl.textContent = reciter);
  });

  const translationSelect = document.getElementById("translation-select");
  translationSelect.addEventListener("change", (e) => {
    translation = e.target.value;
    saveState();
    if (openSurah) {
      openSurahModal(openSurah); // Refresh verses with new translation API
    }
  });

  const tabWudu = document.getElementById("tab-wudu");
  const tabSalah = document.getElementById("tab-salah");

  tabWudu.addEventListener("click", () => {
    activeSalahTab = "wudu";
    tabWudu.classList.add("active");
    tabSalah.classList.remove("active");
    renderChecklist();
  });

  tabSalah.addEventListener("click", () => {
    activeSalahTab = "salah";
    tabSalah.classList.add("active");
    tabWudu.classList.remove("active");
    renderChecklist();
  });

  window.addEventListener("mousemove", (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    mouse.x = nx;
    mouse.y = ny;
  });
}

function updateLiveSyncUI() {
  const btn = document.getElementById("live-sync-btn");
  if (autoMode) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
}

/* ---------------------------------- Spotlight Cursor Tracker ---------------------------------- */

function setupSpotlightTracker() {
  window.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
  });

  document.body.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".glass-card.spotlight");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
}

/* ---------------------------------- View Switcher ---------------------------------- */

function switchView(newViewId) {
  if (currentView === newViewId) return;

  const prevBtn = document.querySelector(`.nav-btn[data-view="${currentView}"]`);
  if (prevBtn) prevBtn.classList.remove("active");

  const nextBtn = document.querySelector(`.nav-btn[data-view="${newViewId}"]`);
  if (nextBtn) nextBtn.classList.add("active");

  const currentViewEl = document.querySelector(".content-view.active");
  const targetViewEl = document.getElementById(`view-${newViewId}`);

  if (currentViewEl) {
    currentViewEl.classList.remove("active");
    setTimeout(() => {
      currentViewEl.classList.remove("visible");
      targetViewEl.classList.add("visible");
      targetViewEl.offsetHeight;
      targetViewEl.classList.add("active");
    }, 400);
  } else {
    targetViewEl.classList.add("visible");
    targetViewEl.offsetHeight;
    targetViewEl.classList.add("active");
  }

  currentView = newViewId;
}

/* ---------------------------------- Quran API Integration ---------------------------------- */

async function fetchAllSurahs() {
  try {
    const response = await fetch("https://api.alquran.cloud/v1/surah");
    const data = await response.json();
    if (data.code === 200) {
      allSurahs = data.data.map(s => ({
        id: s.number,
        name: s.englishName,
        arabic: s.name,
        meaning: s.englishNameTranslation,
        ayahCount: s.numberOfAyahs,
        revelation: s.revelationType
      }));
      renderQuran();
    }
  } catch (err) {
    console.error("Failed to fetch surah list from API", err);
    allSurahs = [...FALLBACK_SURAHS];
    renderQuran();
  }
}

async function openSurahModal(surah) {
  openSurah = surah;
  activeAyahKey = null;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  playingAyahKey = null;
  ayahTab = "translation";

  const modal = document.getElementById("surah-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const loader = document.getElementById("modal-loader");
  const list = document.getElementById("modal-ayahs-list");

  loader.classList.remove("hidden");
  list.classList.add("hidden");

  document.getElementById("modal-surah-name").textContent = surah.name;
  document.getElementById("modal-surah-meta").textContent = `${surah.meaning} · ${surah.revelation}`;
  document.getElementById("modal-surah-arabic").textContent = surah.arabic;

  try {
    const translationMap = {
      "English": "en.sahih",
      "Français": "fr.hamidullah",
      "Türkçe": "tr.yazir",
      "اردو": "ur.maududi"
    };
    const edition = translationMap[translation] || "en.sahih";

    // Fetch combined simple Arabic text + selected translation + audio reciter URLs
    const url = `https://api.alquran.cloud/v1/surah/${surah.id}/editions/quran-simple,${edition},ar.alafasy`;
    const res = await fetch(url);
    const json = await res.json();

    if (json.code === 200 && json.data) {
      const arabicAyahs = json.data[0].ayahs;
      const translationAyahs = json.data[1].ayahs;
      const audioAyahs = json.data[2].ayahs;

      openSurah.ayahs = arabicAyahs.map((ayah, i) => ({
        n: ayah.numberInSurah,
        ar: ayah.text,
        en: translationAyahs[i].text,
        audio: audioAyahs[i].audio
      }));

      loader.classList.add("hidden");
      list.classList.remove("hidden");
      renderSurahModalContent();
    } else {
      throw new Error("Failed to load edition editions");
    }
  } catch (err) {
    console.error("Failed to load surah verses", err);
    loader.innerHTML = `
      <p class="loader-text font-serif" style="color: #f43f5e; margin: 0;">Failed to load verses. Check connection.</p>
      <button class="counter-button gold-glow" onclick="closeModal()" style="width: auto; height: auto; padding: 10px 24px; border-radius: 9999px; font-size: 14px; margin-top: 14px;">Close Modal</button>
    `;
  }
}

function closeModal() {
  const modal = document.getElementById("surah-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  openSurah = null;
  activeAyahKey = null;
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  playingAyahKey = null;
}

function renderSurahModalContent() {
  if (!openSurah || !openSurah.ayahs) return;

  const ayahsList = document.getElementById("modal-ayahs-list");
  ayahsList.innerHTML = "";

  openSurah.ayahs.forEach((ayah) => {
    const key = `${openSurah.id}:${ayah.n}`;
    const isActive = activeAyahKey === key;
    const isPlaying = playingAyahKey === key;

    const row = document.createElement("div");
    row.className = `ayah-row ${isActive ? 'expanded' : ''}`;
    row.id = `ayah-row-${ayah.n}`;

    const isBookmarked = bookmarks.has(key);

    row.innerHTML = `
      <div class="ayah-top-row">
        <div class="ayah-arabic-wrapper">
          <p dir="rtl">${ayah.ar}</p>
          <span class="ayah-glyph">﴿${ayah.n}﴾</span>
        </div>
        <div class="ayah-controls">
          <button class="control-btn play-btn" data-key="${key}">
            ${isPlaying ? "❚❚" : "▶"}
          </button>
          <button class="control-btn bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-key="${key}">
            ♥
          </button>
        </div>
      </div>
      
      <!-- Audio wave visualizer inside row -->
      ${isPlaying ? `
        <div class="audio-wave">
          <div class="audio-wave-bar" style="animation-delay: 0.0s"></div>
          <div class="audio-wave-bar" style="animation-delay: 0.1s"></div>
          <div class="audio-wave-bar" style="animation-delay: 0.2s"></div>
          <div class="audio-wave-bar" style="animation-delay: 0.3s"></div>
          <div class="audio-wave-bar" style="animation-delay: 0.4s"></div>
          <div class="audio-wave-bar" style="animation-delay: 0.5s"></div>
          <span class="audio-wave-reciter">${reciter}</span>
        </div>
      ` : ""}

      <!-- Expandable details panel -->
      <div class="ayah-expansion-panel">
        <div class="expansion-tabs">
          <button class="expansion-tab-btn ${ayahTab === 'translation' ? 'active' : ''}" data-tab="translation">Translation</button>
          <button class="expansion-tab-btn ${ayahTab === 'tafseer' ? 'active' : ''}" data-tab="tafseer">Tafseer</button>
          <button class="expansion-tab-btn ${ayahTab === 'word' ? 'active' : ''}" data-tab="word">Word-by-word</button>
        </div>
        <div class="expansion-content">
          <!-- Populated depending on tab -->
        </div>
        <textarea class="reflection-textarea" rows="2" placeholder="Write your reflection on this ayah...">${notes[key] || ""}</textarea>
      </div>
    `;

    row.querySelector(".ayah-arabic-wrapper").addEventListener("click", () => {
      if (isActive) {
        activeAyahKey = null;
      } else {
        activeAyahKey = key;
      }
      renderSurahModalContent();
    });

    const bookmarkBtn = row.querySelector(".bookmark-btn");
    bookmarkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleBookmark(key, bookmarkBtn);
    });

    const playBtn = row.querySelector(".play-btn");
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePlayAudio(key, ayah.audio);
    });

    if (isActive) {
      const panel = row.querySelector(".ayah-expansion-panel");
      const tabBtns = panel.querySelectorAll(".expansion-tab-btn");
      tabBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
          ayahTab = btn.getAttribute("data-tab");
          renderExpansionContent(ayah, panel.querySelector(".expansion-content"));

          tabBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });

      renderExpansionContent(ayah, panel.querySelector(".expansion-content"));

      const tx = panel.querySelector(".reflection-textarea");
      tx.addEventListener("input", (e) => {
        notes[key] = e.target.value;
        saveState();
      });
    }

    ayahsList.appendChild(row);
  });
}

function toggleBookmark(key, btn) {
  const isBookmarking = !bookmarks.has(key);
  if (isBookmarking) {
    bookmarks.add(key);
    btn.classList.add("bookmarked");
    triggerBurstParticles(btn);
  } else {
    bookmarks.delete(key);
    btn.classList.remove("bookmarked");
  }
  saveState();
}

function triggerBurstParticles(parentEl) {
  const burstContainer = document.createElement("div");
  burstContainer.className = "bookmark-burst-container";
  parentEl.appendChild(burstContainer);

  const numParticles = 12;
  const goldColors = ['#fde68a', '#fbbf24', '#f5d061', '#ffeaa7', '#d4af37'];
  for (let i = 0; i < numParticles; i++) {
    const p = document.createElement("div");
    p.className = "burst-particle";

    const angle = Math.random() * Math.PI * 2;
    const distance = 18 + Math.random() * 26;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 3 + Math.random() * 3.5;
    const color = goldColors[Math.floor(Math.random() * goldColors.length)];

    p.style.setProperty("--dx", `${dx}px`);
    p.style.setProperty("--dy", `${dy}px`);
    p.style.setProperty("--size", `${size}px`);
    p.style.setProperty("--color", color);

    burstContainer.appendChild(p);
  }

  setTimeout(() => {
    burstContainer.remove();
  }, 800);
}

function togglePlayAudio(key, audioUrl) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  if (playingAyahKey === key) {
    playingAyahKey = null;
    renderSurahModalContent();
  } else {
    playingAyahKey = key;
    renderSurahModalContent();

    currentAudio = new Audio(audioUrl);
    currentAudio.play();

    currentAudio.addEventListener("ended", () => {
      // Premium Autoplay: triggers the next verse sequentially
      const parts = key.split(":");
      const sId = parseInt(parts[0]);
      const aNum = parseInt(parts[1]);
      const nextKey = `${sId}:${aNum + 1}`;

      const nextAyah = openSurah.ayahs.find(a => a.n === aNum + 1);
      if (nextAyah) {
        playingAyahKey = null;
        togglePlayAudio(nextKey, nextAyah.audio);
      } else {
        playingAyahKey = null;
        renderSurahModalContent();
      }
    });
  }
}

function renderExpansionContent(ayah, container) {
  container.innerHTML = "";
  if (ayahTab === "translation") {
    container.textContent = ayah.en;
  } else if (ayahTab === "tafseer") {
    container.textContent = "A brief reflection: this ayah calls the reader to internalize its meaning within their own life circumstances, drawing on classical commentary from Ibn Kathir and At-Tabari.";
  } else if (ayahTab === "word") {
    const chipsWrapper = document.createElement("div");
    chipsWrapper.className = "word-chips";
    chipsWrapper.dir = "rtl";

    const words = ayah.ar.split(" ");
    words.forEach(w => {
      const chip = document.createElement("span");
      chip.className = "word-chip";
      chip.textContent = w;
      chipsWrapper.appendChild(chip);
    });
    container.appendChild(chipsWrapper);
  }
}

/* ---------------------------------- Render Core Views ---------------------------------- */

function renderAll() {
  applyThemeVariables();
  updateLiveSyncUI();
  renderHeader();
  renderCelestialBody();
  renderNatureBackdrop();
  renderDashboard();
  renderQuran();
  renderSalahHub();
  renderSelectors();
}

function renderSelectors() {
  const reciterSelect = document.getElementById("reciter-select");
  reciterSelect.innerHTML = RECITERS.map(r => `<option value="${r}" ${r === reciter ? 'selected' : ''}>${r}</option>`).join("");

  const translationSelect = document.getElementById("translation-select");
  translationSelect.innerHTML = TRANSLATIONS.map(t => `<option value="${t}" ${t === translation ? 'selected' : ''}>${t}</option>`).join("");
}

function renderHeader() {
  const cfg = PHASES[currentPhase];

  document.getElementById("header-phase-label").textContent = `${cfg.label} · ${cfg.arabic}`;
  document.getElementById("header-greeting-en").textContent = cfg.greeting;
  document.getElementById("header-greeting-ar").textContent = cfg.greetingArabic;

  const now = new Date();
  const dateStr = now.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  document.getElementById("gregorian-date").textContent = dateStr;

  const hijri = getHijriApprox(now);
  document.getElementById("hijri-date").textContent = `${hijri.day} ${hijri.month} ${hijri.year} AH`;

  const btns = document.querySelectorAll(".phase-btn");
  btns.forEach(btn => {
    if (btn.getAttribute("data-phase") === currentPhase) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function renderCelestialBody() {
  const bodyContainer = document.getElementById("celestial-body");
  const color = PHASES[currentPhase].glow;

  if (currentPhase === "isha") {
    bodyContainer.innerHTML = `
      <svg class="moon-svg" width="150" height="150" viewBox="0 0 150 150">
        <defs>
          <radialGradient id="moonGrad" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#fffaf0" />
            <stop offset="55%" stop-color="${color}" />
            <stop offset="100%" stop-color="#b8905a" />
          </radialGradient>
        </defs>
        <path d="M75 15 A60 60 0 1 0 75 135 A48 60 0 1 1 75 15 Z" fill="url(#moonGrad)" style="filter: drop-shadow(0 0 34px ${color}99) drop-shadow(0 0 70px ${color}44)" />
      </svg>
    `;
    bodyContainer.style.top = "16%";
  } else {
    const pulseDuration = currentPhase === "fajr" ? "3s" : "6s";
    bodyContainer.innerHTML = `
      <div style="position: relative; display: flex; align-items: center; justify-content: center;">
        <div class="sun-ambient" style="background: radial-gradient(circle, ${color}33 0%, transparent 70%); animation-duration: ${pulseDuration};"></div>
        <div class="sun-core" style="background: radial-gradient(circle at 35% 35%, #fff 0%, ${color} 55%, ${color}aa 100%); box-shadow: 0 0 40px 10px ${color}66;"></div>
      </div>
    `;

    if (currentPhase === "maghrib") {
      bodyContainer.style.top = "62%";
    } else {
      bodyContainer.style.top = "14%";
    }
  }
}

function renderNatureBackdrop() {
  const container = document.getElementById("nature-backdrop");
  if (!container) return;

  if (currentPhase === "fajr") {
    container.innerHTML = FOREST_SVG;
  } else if (currentPhase === "dhuhr") {
    container.innerHTML = OASIS_SVG;
  } else if (currentPhase === "asr") {
    container.innerHTML = MOUNTAINS_SVG;
  } else if (currentPhase === "maghrib") {
    container.innerHTML = OCEAN_SVG;
  } else {
    container.innerHTML = MINARETS_SVG;
  }
}

function updateCountdown() {
  const now = new Date();
  let nextPrayer = null;
  let minDiff = Infinity;

  PRAYERS.forEach(p => {
    if (p.name === "Sunrise") return; // Skip Sunrise for countdown timer

    const [h, m] = p.time.split(":").map(Number);
    const pDate = new Date(now);
    pDate.setHours(h, m, 0, 0);

    let diff = pDate.getTime() - now.getTime();
    if (diff > 0 && diff < minDiff) {
      minDiff = diff;
      nextPrayer = p;
    }
  });

  // Crossover to tomorrow morning Fajr if all prayers today are passed
  if (!nextPrayer) {
    const fajr = PRAYERS.find(p => p.name === "Fajr");
    const [h, m] = fajr.time.split(":").map(Number);
    const pDate = new Date(now);
    pDate.setDate(now.getDate() + 1);
    pDate.setHours(h, m, 0, 0);
    minDiff = pDate.getTime() - now.getTime();
    nextPrayer = fajr;
  }

  const nameEl = document.getElementById("next-prayer-name");
  const arabicEl = document.getElementById("next-prayer-arabic");
  const hrsEl = document.getElementById("countdown-hours");
  const minsEl = document.getElementById("countdown-minutes");
  const secsEl = document.getElementById("countdown-seconds");
  
  if (nameEl) {
    nameEl.textContent = `Next: ${nextPrayer.name}`;
    
    const ARABIC_NAMES = {
      Fajr: "الفجر",
      Dhuhr: "الظهر",
      Asr: "العصر",
      Maghrib: "المغرب",
      Isha: "العشاء"
    };
    if (arabicEl) {
      arabicEl.textContent = ARABIC_NAMES[nextPrayer.name] || "";
    }
    
    const hours = Math.floor(minDiff / 3600000);
    const minutes = Math.floor((minDiff % 3600000) / 60000);
    const seconds = Math.floor((minDiff % 60000) / 1000);
    
    const pad = (n) => String(n).padStart(2, "0");
    if (hrsEl) hrsEl.textContent = pad(hours);
    if (minsEl) minsEl.textContent = pad(minutes);
    if (secsEl) secsEl.textContent = pad(seconds);
  }
}

function renderPrayersStrip() {
  const strip = document.getElementById("dashboard-prayers-strip");
  if (!strip) return;
  
  strip.innerHTML = PRAYERS.map(p => {
    const isCurrent = p.name.toLowerCase() === currentPhase;
    return `
      <div class="daily-prayer-row ${isCurrent ? 'active' : ''}">
        <div class="prayer-info">
          <span class="dot-indicator"></span>
          <span class="prayer-name">${p.name}</span>
          <span class="prayer-arabic">${p.arabic}</span>
        </div>
        <span class="prayer-time">${p.time}</span>
      </div>
    `;
  }).join("");
}

function renderDashboard() {
  updateCountdown();
  renderPrayersStrip();
  const cfg = PHASES[currentPhase];

  document.getElementById("ayah-arabic").textContent = "وَبَشِّرِ الصَّابِرِينَ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ";
  document.getElementById("ayah-translation").textContent = `"And give good tidings to the patient, who, when disaster strikes them, say: Indeed we belong to Allah, and indeed to Him we will return." — Al-Baqarah 2:155–156`;
  document.querySelector("#ayah-tafseer p").textContent = "This verse teaches that patience through hardship, paired with remembering our return to Allah, is itself a form of worship worthy of glad tidings.";

  document.getElementById("dua-arabic").textContent = "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ";
  document.getElementById("dua-translation").textContent = `"Our Lord, give us good in this world and good in the hereafter, and protect us from the punishment of the Fire."`;
  document.getElementById("counter-value").textContent = adhkarCount;

  const waveform = document.getElementById("dashboard-waveform");
  waveform.innerHTML = "";
  for (let i = 0; i < 40; i++) {
    const bar = document.createElement("div");
    bar.className = "waveform-bar";
    const baseHeight = Math.random() * 0.75 + 0.15;
    bar.style.height = `${baseHeight * 100}%`;
    bar.style.animationDelay = `${i * 0.03}s`;
    bar.style.animationDuration = `${1 + (i % 6) * 0.15}s`;
    waveform.appendChild(bar);
  }

  const order = ["fajr", "dhuhr", "asr", "maghrib", "isha"];
  const idx = order.indexOf(currentPhase);
  const angle = (idx / order.length) * 360;

  const dialSvg = document.getElementById("dial-svg");
  const previousCircles = dialSvg.querySelectorAll(".dial-marker");
  previousCircles.forEach(c => c.remove());

  order.forEach((p, i) => {
    const a = (i / order.length) * Math.PI * 2 - Math.PI / 2;
    const cx = 50 + 44 * Math.cos(a);
    const cy = 50 + 44 * Math.sin(a);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx.toString());
    circle.setAttribute("cy", cy.toString());
    circle.setAttribute("class", "dial-marker");

    if (p === currentPhase) {
      circle.setAttribute("r", "4.2");
      circle.setAttribute("fill", cfg.glow);
      circle.style.filter = "drop-shadow(0 0 4px " + cfg.glow + ")";
    } else {
      circle.setAttribute("r", "2.2");
      circle.setAttribute("fill", "rgba(255, 255, 255, 0.2)");
    }
    dialSvg.appendChild(circle);
  });

  const dialHand = document.getElementById("dial-hand");
  dialHand.style.transform = `rotate(${angle}deg)`;

  const dialText = document.getElementById("dial-phase-text");
  dialText.textContent = cfg.label;
}

function renderQuran(filterQuery = "") {
  const container = document.getElementById("surah-list");
  container.innerHTML = "";

  const targetSurahs = allSurahs;

  const filteredSurahs = targetSurahs.filter(s =>
    s.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    s.arabic.includes(filterQuery) ||
    s.meaning.toLowerCase().includes(filterQuery.toLowerCase())
  );

  filteredSurahs.forEach((surah, index) => {
    const card = document.createElement("div");
    card.className = "surah-card spotlight";
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";

    card.innerHTML = `
      <div class="surah-info-left">
        <span class="surah-id">${surah.id}</span>
        <div>
          <h3 class="surah-name">${surah.name}</h3>
          <p class="surah-meta">${surah.meaning} · ${surah.ayahCount} ayahs · ${surah.revelation}</p>
        </div>
      </div>
      <span dir="rtl" class="surah-arabic">${surah.arabic}</span>
    `;

    card.addEventListener("click", () => {
      openSurahModal(surah);
    });

    container.appendChild(card);

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 12);
  });
}

function renderSalahHub() {
  const currentIdx = { fajr: 0, dhuhr: 2, asr: 3, maghrib: 4, isha: 5 }[currentPhase] || 5;

  const prayerGrid = document.getElementById("prayer-times-grid");
  prayerGrid.innerHTML = "";

  PRAYERS.forEach((p, i) => {
    const isActive = i === currentIdx;
    const card = document.createElement("div");
    card.className = `glass-card prayer-card ${isActive ? 'active' : ''}`;

    card.innerHTML = `
      <div class="prayer-title">${p.name}</div>
      <div dir="rtl" class="prayer-arabic">${p.arabic}</div>
      <div class="prayer-time">${p.time}</div>
      ${isActive ? `<div class="prayer-now-tag">now</div>` : ""}
    `;
    prayerGrid.appendChild(card);
  });

  renderChecklist();
  setupCompassAstrolabeTilt();
}

function setupCompassAstrolabeTilt() {
  const compassWrapper = document.getElementById("compass-wrapper");
  const compassBody = document.getElementById("compass-body");
  if (!compassWrapper || !compassBody) return;

  const handleMove = (e) => {
    const rect = compassWrapper.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = py * -20;
    const ry = px * 20;
    compassBody.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleLeave = () => {
    compassBody.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  compassWrapper.addEventListener("mousemove", handleMove);
  compassWrapper.addEventListener("mouseleave", handleLeave);
}

function renderChecklist() {
  const checklistContainer = document.getElementById("checklist-container");
  checklistContainer.innerHTML = "";

  const steps = activeSalahTab === "wudu" ? WUDU_STEPS : SALAH_STEPS;
  steps.forEach((step, i) => {
    const key = `${activeSalahTab}-${i}`;
    const isCompleted = !!salahChecklist[key];

    const label = document.createElement("label");
    label.className = `step-row ${isCompleted ? 'completed' : ''}`;

    label.innerHTML = `
      <input type="checkbox" ${isCompleted ? 'checked' : ''}>
      <span class="step-text">${i + 1}. ${step}</span>
    `;

    const checkbox = label.querySelector('input[type="checkbox"]');
    checkbox.addEventListener("change", () => {
      salahChecklist[key] = checkbox.checked;
      saveState();
      if (checkbox.checked) {
        label.classList.add("completed");
      } else {
        label.classList.remove("completed");
      }
    });

    checklistContainer.appendChild(label);
  });
}

/* ---------------------------------- SUNNAH DIRECTORY ---------------------------------- */

function initHadiths() {
  const tabs = document.querySelectorAll(".sunnah-tabs .tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeHadithBook = tab.getAttribute("data-book");
      renderHadiths();
    });
  });

  const hadithSearch = document.getElementById("hadith-search");
  hadithSearch.addEventListener("input", (e) => {
    renderHadiths(e.target.value);
  });
  renderHadiths();
}

function renderHadiths(query = "") {
  const list = document.getElementById("hadith-list");
  list.innerHTML = "";

  const items = HADITHS[activeHadithBook] || [];
  const filtered = items.filter(h =>
    h.ar.includes(query) || h.en.toLowerCase().includes(query.toLowerCase())
  );

  if (filtered.length === 0) {
    list.innerHTML = `<p class="hadith-text" style="color: rgba(255,255,255,0.3); text-align: center; padding-top: 20px;">No Hadiths found.</p>`;
    return;
  }

  filtered.forEach((h, index) => {
    const card = document.createElement("div");
    card.className = "glass-card hadith-card spotlight";
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    card.style.transition = "opacity 0.4s ease, transform 0.4s ease";

    card.innerHTML = `
      <p dir="rtl" class="hadith-arabic">${h.ar}</p>
      <p class="hadith-english">"${h.en}"</p>
      <p class="hadith-ref">${h.ref}</p>
    `;

    list.appendChild(card);
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 40);
  });
}

/* ---------------------------------- ADHKAR SANCTUARY ---------------------------------- */

function initAdhkar() {
  const tabs = document.querySelectorAll(".adhkar-tabs .tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeAdhkarCategory = tab.getAttribute("data-category");
      renderAdhkar();
    });
  });
  renderAdhkar();
}

function renderAdhkar() {
  const list = document.getElementById("adhkar-list");
  list.innerHTML = "";

  const items = ADHKAR[activeAdhkarCategory] || [];
  items.forEach((item, index) => {
    const key = `${activeAdhkarCategory}-${index}`;
    const count = adhkarSessionCounts[key] || 0;
    const isCompleted = count >= item.target;

    const card = document.createElement("div");
    card.className = `glass-card adhkar-card spotlight ${isCompleted ? 'completed' : ''}`;

    // Circ circle circumference = 2 * pi * r = 2 * 3.14 * 24 = 150.79
    const circ = 150.79;
    const offset = circ - (Math.min(count, item.target) / item.target) * circ;

    card.innerHTML = `
      <div class="adhkar-info">
        <span class="card-subtitle" style="font-size: 10px; color: ${isCompleted ? '#34d399' : 'rgba(253, 230, 138, 0.4)'}">${item.title}</span>
        <p dir="rtl" class="adhkar-arabic-text">${item.ar}</p>
        <p class="adhkar-translit">${item.translit}</p>
        <p class="adhkar-translation">"${item.translation}"</p>
      </div>
      <div class="adhkar-progress-container">
        <svg class="progress-ring-svg" viewBox="0 0 58 58">
          <circle class="progress-ring-track" cx="29" cy="29" r="24" fill="none" stroke-width="3" />
          <circle class="progress-ring-bar" cx="29" cy="29" r="24" fill="none" stroke-width="3.5" 
                  stroke-dasharray="${circ}" stroke-dashoffset="${offset}" />
        </svg>
        <div class="adhkar-progress-value">
          <span>${count}</span>
          <span class="adhkar-progress-target">/${item.target}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      let currentCount = adhkarSessionCounts[key] || 0;
      if (currentCount < item.target) {
        currentCount++;
        adhkarSessionCounts[key] = currentCount;
        saveState();

        // Dynamic re-render of progress ring offset
        const ringOffset = circ - (currentCount / item.target) * circ;
        const bar = card.querySelector(".progress-ring-bar");
        bar.style.strokeDashoffset = ringOffset;

        const valSpan = card.querySelector(".adhkar-progress-value span:first-child");
        valSpan.textContent = currentCount;

        if (currentCount >= item.target) {
          card.classList.add("completed");
          valSpan.parentElement.style.color = "#34d399";
          bar.style.stroke = "#34d399";
        }
      }
    });

    list.appendChild(card);
  });
}

/* ---------------------------------- LEARNING JOURNEY ---------------------------------- */

function initQuiz() {
  document.getElementById("quiz-next-btn").addEventListener("click", () => {
    if (quizCurrentIndex < QUIZ_QUESTIONS.length - 1) {
      quizCurrentIndex++;
      quizAnswered = false;
      renderQuizQuestion();
    } else {
      // Retry Game resets everything
      quizCurrentIndex = 0;
      quizScore = 0;
      quizAnswered = false;
      renderQuizQuestion();
    }
  });
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const currentQuestion = QUIZ_QUESTIONS[quizCurrentIndex];

  // Progress Bar updates
  const progressText = document.getElementById("quiz-progress-text");
  const progressBar = document.getElementById("quiz-progress-bar");
  const percent = ((quizCurrentIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  progressText.textContent = `Question ${quizCurrentIndex + 1} of ${QUIZ_QUESTIONS.length}`;
  progressBar.style.width = `${percent}%`;

  // Question Text
  document.getElementById("quiz-question-text").textContent = currentQuestion.q;

  // Answers choices list
  const choicesBox = document.getElementById("quiz-choices");
  choicesBox.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.className = "quiz-choice-btn";
    btn.textContent = choice;
    btn.addEventListener("click", () => handleQuizAnswer(index, btn));
    choicesBox.appendChild(btn);
  });

  // Hide next button and explanations
  document.getElementById("quiz-explanation").classList.add("hidden");
  document.getElementById("quiz-next-btn").classList.add("hidden");
  document.getElementById("quiz-score").textContent = quizScore;
}

function handleQuizAnswer(choiceIndex, clickedBtn) {
  if (quizAnswered) return;
  quizAnswered = true;

  const currentQuestion = QUIZ_QUESTIONS[quizCurrentIndex];
  const isCorrect = choiceIndex === currentQuestion.answer;

  const buttons = document.querySelectorAll(".quiz-choices .quiz-choice-btn");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === currentQuestion.answer) {
      btn.classList.add("correct");
    }
  });

  if (isCorrect) {
    quizScore += 20; // 20 pts per correct choice (100 max)
    document.getElementById("quiz-score").textContent = quizScore;
  } else {
    clickedBtn.classList.add("incorrect");
  }

  // Show explanation details
  const expBox = document.getElementById("quiz-explanation");
  expBox.textContent = currentQuestion.exp;
  expBox.classList.remove("hidden");

  // Next Question triggers
  const nextBtn = document.getElementById("quiz-next-btn");
  nextBtn.classList.remove("hidden");

  if (quizCurrentIndex === QUIZ_QUESTIONS.length - 1) {
    nextBtn.textContent = "Restart Quiz";
  } else {
    nextBtn.textContent = "Next Question";
  }
}

/* ---------------------------------- MURSHID AI ASSISTANT ---------------------------------- */

function initChat() {
  const sendBtn = document.getElementById("chat-send-btn");
  const chatInput = document.getElementById("chat-input");

  const sendMessage = () => {
    const text = chatInput.value.trim();
    if (!text) return;

    // Add user bubble
    chatMessages.push({ sender: "user", text });
    chatInput.value = "";
    renderChatMessages();

    // Trigger loading spinner for AI typing
    simulateAiResponse(text);
  };

  sendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Prompt chips click
  document.querySelectorAll(".chat-prompt-chips .prompt-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const text = chip.getAttribute("data-prompt");
      chatMessages.push({ sender: "user", text });
      renderChatMessages();
      simulateAiResponse(text);
    });
  });
  renderChatMessages();
}

function renderChatMessages() {
  const container = document.getElementById("chat-messages");
  container.innerHTML = "";

  chatMessages.forEach(msg => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${msg.sender}`;
    bubble.textContent = msg.text;
    container.appendChild(bubble);
  });

  // Scroll to bottom
  container.scrollTop = container.scrollHeight;
}

function simulateAiResponse(queryText) {
  const container = document.getElementById("chat-messages");

  // Show "typing..." bubble
  const typingBubble = document.createElement("div");
  typingBubble.className = "chat-bubble ai typing";
  typingBubble.textContent = "Murshid is typing...";
  container.appendChild(typingBubble);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    typingBubble.remove();
    const reply = getAiReply(queryText);
    chatMessages.push({ sender: "ai", text: reply });
    renderChatMessages();
  }, 1000);
}

function getAiReply(query) {
  const q = query.toLowerCase();

  if (q.includes("wudu") || q.includes("ablution")) {
    return "Performing Wudu involves clean intentions (Niyyah), washing your hands 3x, rinsing your mouth and nose 3x, washing your face 3x, washing your arms up to the elbows 3x, wiping your head and ears once, and washing your feet to the ankles 3x. These steps purify physical and spiritual states before prayer.";
  }
  if (q.includes("salah") || q.includes("pray")) {
    return "Salah is the second pillar of Islam, acting as a direct connection between you and Allah. The five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) serve as spiritual anchor points throughout your day, keeping you mindful of your creator.";
  }
  if (q.includes("patience") || q.includes("ease") || q.includes("sabur")) {
    return "Allah says in the Quran: 'Seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive' (Al-Baqarah 2:45). Remember that with hardship comes ease, and your patience during trials is highly rewarded.";
  }
  if (q.includes("hadith") || q.includes("sunnah")) {
    return "The Prophet ﷺ said: 'The most beloved of deeds to Allah are those that are most constant, even if they are small' (Bukhari). Applying small Sunnah deeds consistently leads to positive spiritual growth.";
  }
  if (q.includes("ihsan")) {
    return "Ihsan is to worship Allah as if you see Him, for if you do not see Him, He indeed sees you. It is the pinnacle of faith, where sincerity meets complete excellence in action.";
  }
  if (q.includes("dua") || q.includes("supplication")) {
    return "Prophet Muhammad ﷺ taught us: 'Dua is the essence of worship' (Tirmidhi). You can call upon Allah at any time, in any language. The best times for acceptance are during prostration (Sujud) and in the last third of the night.";
  }
  if (q.includes("ramadan") || q.includes("fasting")) {
    return "Ramadan is the month of spiritual purification and charity. Fasting (Sawm) teaches self-restraint and empathy for the less fortunate, helping us redirect focus toward inner reflection.";
  }
  if (q.includes("zakat") || q.includes("charity")) {
    return "Zakat is a mandatory charity of 2.5% of our qualifying wealth, purifying our earnings and supporting the poor. In addition, optional charity (Sadaqah) carries immense rewards.";
  }
  if (q.includes("hello") || q.includes("assalamu") || q.includes("hi")) {
    return "Wa Alaikum Assalam! May peace and blessings be upon you. Ask me any question about Salah, Quran, Wudu, or general reflections.";
  }

  return "I hear your reflection. Seeking knowledge is a beautiful act of worship in Islam. Feel free to ask about Salah, Quran, Wudu, Hadith, or Duas to help you along your journey.";
}

/* ---------------------------------- Celestial Background Animation Helpers ---------------------------------- */

function lerpColor(curr, target, rate) {
  return curr.map((val, i) => val + (target[i] - val) * rate);
}

function drawFajrMist(ctx, w, h, frameCount) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  const heightOsc = Math.sin(frameCount * 0.004) * 15;
  const grad = ctx.createLinearGradient(0, h, 0, h - 140 - heightOsc);
  grad.addColorStop(0, "rgba(232, 166, 201, 0.22)");
  grad.addColorStop(0.4, "rgba(58, 31, 77, 0.12)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}

function drawSolarFlare(ctx, w, h, frameCount, parallax) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  const sunX = w / 2 + parallax.x * 24;
  const sunY = h * 0.14 + parallax.y * 16;
  const flareRadius = 80 + Math.sin(frameCount * 0.03) * 12;
  const grad = ctx.createRadialGradient(sunX, sunY, 30, sunX, sunY, flareRadius);
  grad.addColorStop(0, "rgba(253, 230, 138, 0.12)");
  grad.addColorStop(0.5, "rgba(251, 191, 36, 0.05)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(sunX, sunY, flareRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawVolumetricRays(ctx, w, h, frameCount) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  const rays = [
    { angle: 0.5, width: 0.15, alpha: 0.04, speed: 0.0003 },
    { angle: 0.65, width: 0.22, alpha: 0.06, speed: -0.0002 },
    { angle: 0.8, width: 0.18, alpha: 0.03, speed: 0.0004 }
  ];
  rays.forEach((ray, i) => {
    const sweep = Math.sin(frameCount * ray.speed + i) * 0.08;
    const centerAngle = ray.angle + sweep;
    const w1 = centerAngle - ray.width / 2;
    const w2 = centerAngle + ray.width / 2;
    const x1 = Math.cos(w1) * w * 1.5;
    const y1 = Math.sin(w1) * h * 1.5;
    const x2 = Math.cos(w2) * w * 1.5;
    const y2 = Math.sin(w2) * h * 1.5;
    const grad = ctx.createLinearGradient(0, 0, (x1 + x2)/2, (y1 + y2)/2);
    const pulseAlpha = ray.alpha * (0.6 + Math.sin(frameCount * 0.008 + i) * 0.4);
    grad.addColorStop(0, `rgba(253, 230, 138, ${pulseAlpha})`);
    grad.addColorStop(0.5, `rgba(251, 191, 36, ${pulseAlpha * 0.4})`);
    grad.addColorStop(1, "rgba(251, 191, 36, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.fill();
  });
  ctx.restore();
}

function drawMaghribHorizonSunset(ctx, w, h, frameCount) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  const pulse = Math.sin(frameCount * 0.006) * 10;
  const grad = ctx.createRadialGradient(w / 2, h * 0.75, 10, w / 2, h * 0.75, 250 + pulse);
  grad.addColorStop(0, "rgba(255, 138, 92, 0.35)");
  grad.addColorStop(0.3, "rgba(169, 67, 47, 0.18)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();
}

function drawBird(ctx, x, y, size, angle, flap) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  const wingSpan = size * 1.2;
  const wingHeight = Math.sin(flap) * size * 0.8;
  // Left wing
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(-wingSpan / 2, -wingHeight - size * 0.2, -wingSpan, -wingHeight);
  ctx.quadraticCurveTo(-wingSpan / 2, -wingHeight * 0.3, 0, 0);
  // Right wing
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(wingSpan / 2, -wingHeight - size * 0.2, wingSpan, -wingHeight);
  ctx.quadraticCurveTo(wingSpan / 2, -wingHeight * 0.3, 0, 0);
  ctx.fillStyle = "rgba(19, 11, 33, 0.55)";
  ctx.fill();
  ctx.restore();
}

function drawGlider(ctx, x, y, size, angle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  const wingSpan = size * 1.5;
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(-wingSpan / 2, -size * 0.1, -wingSpan, -size * 0.2);
  ctx.quadraticCurveTo(-wingSpan / 2, 0, 0, 0);
  ctx.quadraticCurveTo(wingSpan / 2, -size * 0.2, wingSpan, -size * 0.2);
  ctx.quadraticCurveTo(wingSpan / 2, 0, 0, 0);
  ctx.fillStyle = "rgba(12, 22, 38, 0.4)";
  ctx.fill();
  ctx.restore();
}

function drawCloud(ctx, x, y, size, opacity) {
  ctx.save();
  ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
  ctx.beginPath();
  ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
  ctx.arc(x + size * 0.3, y - size * 0.1, size * 0.5, 0, Math.PI * 2);
  ctx.arc(x + size * 0.6, y, size * 0.4, 0, Math.PI * 2);
  ctx.rect(x, y - size * 0.1, size * 0.6, size * 0.4);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawSunsetReflection(ctx, w, h, frameCount) {
  ctx.save();
  ctx.globalCompositeOperation = "screen";
  const startY = h * 0.72;
  const count = 6;
  for (let i = 0; i < count; i++) {
    const rowY = startY + i * 20;
    const rowW = (1 - (i / count)) * 140 + 40;
    const shiftX = Math.sin(frameCount * 0.03 + i) * 15;
    const grad = ctx.createLinearGradient(w / 2 + shiftX - rowW / 2, rowY, w / 2 + shiftX + rowW / 2, rowY);
    const alpha = (0.25 - (i / count) * 0.2) * (0.6 + Math.sin(frameCount * 0.02 + i) * 0.4);
    grad.addColorStop(0, "rgba(255,138,92,0)");
    grad.addColorStop(0.5, `rgba(255, 138, 92, ${alpha})`);
    grad.addColorStop(1, "rgba(255,138,92,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(w / 2 + shiftX - rowW / 2, rowY, rowW, 3 + i * 0.5);
  }
  ctx.restore();
}

function drawConstellation(ctx, w, h, frameCount) {
  ctx.save();
  const pulse = 0.04 + Math.sin(frameCount * 0.005) * 0.03;
  ctx.strokeStyle = `rgba(253, 230, 138, ${pulse})`;
  ctx.lineWidth = 0.5;
  
  const pts = [
    { x: w * 0.7, y: h * 0.15 },
    { x: w * 0.74, y: h * 0.18 },
    { x: w * 0.78, y: h * 0.17 },
    { x: w * 0.81, y: h * 0.21 }
  ];
  
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) {
    ctx.lineTo(pts[i].x, pts[i].y);
  }
  ctx.stroke();
  
  ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + Math.sin(frameCount * 0.01) * 0.3})`;
  pts.forEach(pt => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

/* ---------------------------------- Celestial Background Animation ---------------------------------- */

function initCelestialBackground() {
  const canvas = document.getElementById("celestial-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Initialize eagles and clouds arrays
  dhuhrEagles = [
    { angle: 0, radius: 120, speed: 0.003, size: 8, cx: 0.3, cy: 0.25 },
    { angle: Math.PI, radius: 180, speed: -0.002, size: 11, cx: 0.75, cy: 0.2 }
  ];
  asrClouds = [
    { x: 100, y: 220, vx: 0.08, size: 100, opacity: 0.12 },
    { x: 600, y: 170, vx: 0.12, size: 140, opacity: 0.16 },
    { x: 1000, y: 245, vx: 0.06, size: 110, opacity: 0.09 }
  ];

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

    const count = Math.floor((window.innerWidth * window.innerHeight) / 3200);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      baseAlpha: Math.random() * 0.6 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      depth: Math.random() * 0.8 + 0.2,
    }));
  }

  resize();
  window.addEventListener("resize", resize);

  let frameCount = 0;

  function loop() {
    frameCount += 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    // Liquid sky gradient interpolation
    const targetColors = SKY_COLORS[currentPhase];
    skyLerpColors.bottom = lerpColor(skyLerpColors.bottom, targetColors.bottom, 0.03);
    skyLerpColors.mid = lerpColor(skyLerpColors.mid, targetColors.mid, 0.03);
    skyLerpColors.top = lerpColor(skyLerpColors.top, targetColors.top, 0.03);

    const bgGrad = ctx.createLinearGradient(0, h, 0, 0);
    bgGrad.addColorStop(0, `rgb(${Math.round(skyLerpColors.bottom[0])}, ${Math.round(skyLerpColors.bottom[1])}, ${Math.round(skyLerpColors.bottom[2])})`);
    bgGrad.addColorStop(0.5, `rgb(${Math.round(skyLerpColors.mid[0])}, ${Math.round(skyLerpColors.mid[1])}, ${Math.round(skyLerpColors.mid[2])})`);
    bgGrad.addColorStop(1, `rgb(${Math.round(skyLerpColors.top[0])}, ${Math.round(skyLerpColors.top[1])}, ${Math.round(skyLerpColors.top[2])})`);

    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    const cfg = PHASES[currentPhase];
    const starOpacity = cfg.starOpacity;

    currentParallax.x += (mouse.x - currentParallax.x) * 0.08;
    currentParallax.y += (mouse.y - currentParallax.y) * 0.08;

    // Draw Fajr mist and twilight glow
    if (currentPhase === "fajr") {
      drawFajrMist(ctx, w, h, frameCount);
    }
    // Draw Dhuhr solar heat ripples
    if (currentPhase === "dhuhr") {
      drawSolarFlare(ctx, w, h, frameCount, currentParallax);
    }
    // Draw Asr volumetric sweeps
    if (currentPhase === "asr") {
      drawVolumetricRays(ctx, w, h, frameCount);
    }
    // Draw Maghrib fiery twilight glow
    if (currentPhase === "maghrib") {
      drawMaghribHorizonSunset(ctx, w, h, frameCount);
    }

    const nebulaLeft = document.getElementById("nebula-1");
    const nebulaRight = document.getElementById("nebula-2");
    if (nebulaLeft) {
      nebulaLeft.style.transform = `translate(${currentParallax.x * -20}px, ${currentParallax.y * -20}px)`;
    }
    if (nebulaRight) {
      nebulaRight.style.transform = `translate(${currentParallax.x * -35}px, ${currentParallax.y * -35}px)`;
    }

    const celestialBody = document.getElementById("celestial-body");
    if (celestialBody) {
      celestialBody.style.transform = `translate(-50%, -50%) translate(${currentParallax.x * 24}px, ${currentParallax.y * 16}px)`;
    }

    // Fajr: Flapping flying birds silhouette
    if (currentPhase === "fajr") {
      if (fajrBirds.length < 4 && Math.random() < 0.007) {
        fajrBirds.push({
          x: -50,
          y: h * 0.12 + Math.random() * (h * 0.25),
          vx: 1.1 + Math.random() * 0.8,
          vy: (Math.random() - 0.5) * 0.2,
          size: 6 + Math.random() * 6,
          flapSpeed: 0.14 + Math.random() * 0.06,
          flapPhase: Math.random() * Math.PI * 2
        });
      }
      fajrBirds = fajrBirds.filter(b => b.x < w + 50);
      fajrBirds.forEach(b => {
        b.x += b.vx;
        b.y += b.vy;
        b.flapPhase += b.flapSpeed;
        drawBird(ctx, b.x, b.y, b.size, Math.atan2(b.vy, b.vx), b.flapPhase);
      });
    }

    // Dhuhr: Soaring desert eagles gliding in slow circles
    if (currentPhase === "dhuhr") {
      dhuhrEagles.forEach(e => {
        e.angle += e.speed;
        const cx = w * e.cx;
        const cy = h * e.cy;
        const x = cx + e.radius * Math.cos(e.angle);
        const y = cy + e.radius * 0.4 * Math.sin(e.angle);
        drawGlider(ctx, x, y, e.size, e.angle + Math.PI / 2);
      });
    }

    // Asr: Drifting valley fog clouds
    if (currentPhase === "asr") {
      asrClouds.forEach(c => {
        c.x += c.vx;
        if (c.x > w + c.size) c.x = -c.size;
        drawCloud(ctx, c.x, c.y, c.size, c.opacity);
      });
    }

    // Maghrib: Sun water reflection ripples
    if (currentPhase === "maghrib") {
      drawSunsetReflection(ctx, w, h, frameCount);
    }

    // Isha: Constellation lines connect-the-dots
    if (currentPhase === "isha") {
      drawConstellation(ctx, w, h, frameCount);
    }

    if ((currentPhase === "isha" || currentPhase === "maghrib") && Math.random() < 0.006) {
      shootingStars.push({
        x: Math.random() * w * 0.6,
        y: Math.random() * h * 0.3,
        vx: 9 + Math.random() * 6,
        vy: 4 + Math.random() * 3,
        life: 0,
        maxLife: 40 + Math.random() * 20,
      });
    }

    for (const star of stars) {
      const px = star.x + currentParallax.x * 14 * star.depth;
      const py = star.y + currentParallax.y * 14 * star.depth;
      const twinkle = Math.sin(frameCount * star.twinkleSpeed + star.twinklePhase) * 0.4 + 0.6;

      ctx.beginPath();
      ctx.arc(px, py, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.baseAlpha * twinkle * starOpacity})`;
      ctx.fill();
    }

    shootingStars = shootingStars.filter(s => s.life < s.maxLife);
    for (const s of shootingStars) {
      s.life += 1;
      s.x += s.vx;
      s.y += s.vy;
      const alpha = 1 - s.life / s.maxLife;
      const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 6, s.y - s.vy * 6);
      grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * 6, s.y - s.vy * 6);
      ctx.stroke();
    }

    // Dynamic phase-related drifting particles update and draw loop
    if (currentPhase === "dhuhr" && Math.random() < 0.15) {
      phaseParticles.push({
        x: Math.random() * w,
        y: h + 10,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.6 + Math.random() * 0.8),
        size: 1 + Math.random() * 1.8,
        alpha: Math.random() * 0.35 + 0.1,
        color: "253, 230, 138",
        life: 0,
        maxLife: 200 + Math.random() * 150
      });
    } else if (currentPhase === "asr" && Math.random() < 0.12) {
      phaseParticles.push({
        x: Math.random() * w,
        y: -10,
        vx: (0.4 + Math.random() * 0.6),
        vy: (0.3 + Math.random() * 0.5),
        size: 1.2 + Math.random() * 1.5,
        alpha: Math.random() * 0.25 + 0.1,
        color: "245, 208, 97",
        life: 0,
        maxLife: 250 + Math.random() * 150
      });
    } else if (currentPhase === "maghrib" && Math.random() < 0.25) {
      phaseParticles.push({
        x: Math.random() * w,
        y: h * 0.72 + (Math.random() * 100),
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(0.9 + Math.random() * 1.2),
        size: 1.5 + Math.random() * 2.2,
        alpha: 1.0,
        color: Math.random() < 0.5 ? "255, 138, 92" : "251, 191, 36",
        life: 0,
        maxLife: 120 + Math.random() * 80
      });
    } else if (currentPhase === "isha" && Math.random() < 0.08) {
      phaseParticles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: 0.8 + Math.random() * 1.2,
        alpha: Math.random() * 0.4 + 0.1,
        color: "168, 137, 255",
        life: 0,
        maxLife: 300 + Math.random() * 200
      });
    }

    phaseParticles = phaseParticles.filter(p => p.life < p.maxLife);
    phaseParticles.forEach(p => {
      p.life += 1;
      p.x += p.vx;
      p.y += p.vy;
      
      let currentAlpha = p.alpha;
      if (p.life > p.maxLife * 0.7) {
        const ratio = (p.maxLife - p.life) / (p.maxLife * 0.3);
        currentAlpha = p.alpha * ratio;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color}, ${currentAlpha})`;
      ctx.fill();
    });

    rafId = requestAnimationFrame(loop);
  }

  loop();
}
