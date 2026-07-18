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
  "النية (نويت الوضوء)",
  "غسل اليدين ثلاث مرات",
  "المضمضة والاستنشاق",
  "غسل الوجه ثلاث مرات",
  "غسل اليدين إلى المرفقين",
  "مسح الرأس والأذنين",
  "غسل القدمين إلى الكعبين",
];

const SALAH_STEPS = [
  "التكبير (الله أكبر)",
  "القيام — قراءة الفاتحة",
  "الركوع — الانحناء",
  "الاعتدال من الركوع",
  "السجود — السجدة الأولى",
  "الجلوس بين السجدتين",
  "السجدة الثانية",
  "التشهد",
  "التسليم — إنهاء الصلاة",
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
    {
      title: "Ayat al-Kursi",
      ar: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      translit: "Allahu la ilaha illa Huwal Hayyul Qayyum, la ta'khuzuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man zhal-lazi yashfa'u 'indahu illa bi-izhnihi, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay'im-min 'ilmihi illa bima sha'a, wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzhuhuma wa Huwal 'Aliyyul 'Azhim.",
      translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      target: 1
    },
    {
      title: "Surah Al-Ikhlas",
      ar: "قُلْ هُوَ اللَّهُ أَحَدٌ ۞ اللَّهُ الصَّمَدُ ۞ لَمْ يَلِدْ وَلَمْ يُولَدْ ۞ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      translit: "Qul Huwal-lahu Ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakul-lahu kufuwan ahad.",
      translation: "Say, 'He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.'",
      target: 3
    },
    {
      title: "Morning Protection",
      ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
      translit: "Bismillahil-lazi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'i wa Huwas-Sami'ul-'Alim.",
      translation: "In the name of Allah with Whose name nothing can harm on earth or in the heaven, and He is the All-Hearing, the All-Knowing.",
      target: 3
    },
    {
      title: "Sayyidul Istighfar",
      ar: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
      translit: "Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mas-tata'tu, a'uzhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u laka bizhanbi faghfir li fa-innahu la yaghfiruz-zhunuba illa Anta.",
      translation: "O Allah, You are my Lord, there is no deity worthy of worship except You. You created me and I am Your servant, and I am faithful to my covenant and my promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge to You Your favor upon me, and I acknowledge my sin, so forgive me; for indeed, none can forgive sins except You.",
      target: 1
    },
    {
      title: "Praise & Pleasure",
      ar: "رَضِيتُ بِاللَّهِ رَبَّا وَبِالْإِسْلَامِ دِينًا وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيَّا",
      translit: "Radhitu billahi Rabba, wa bil-Islami dina, wa bi-Muhammadin sallallahu 'alayhi wa sallama Nabiyya.",
      translation: "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad ﷺ as my Prophet.",
      target: 3
    }
  ],
  evening: [
    {
      title: "Ayat al-Kursi",
      ar: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      translit: "Allahu la ilaha illa Huwal Hayyul Qayyum, la ta'khuzuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man zhal-lazi yashfa'u 'indahu illa bi-izhnihi, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay'im-min 'ilmihi illa bima sha'a, wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzhuhuma wa Huwal 'Aliyyul 'Azhim.",
      translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
      target: 1
    },
    {
      title: "Surah Al-Falaq",
      ar: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۞ مِن شَرِّ مَا خَلَقَ ۞ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۞ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۞ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      translit: "Qul a'uzhu bi-rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin iza waqab. Wa min sharrin-naffasati fil-'uqad. Wa min sharri hasidin iza hasad.",
      translation: "Say, 'I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies.'",
      target: 3
    },
    {
      title: "Evening Shelter",
      ar: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
      translit: "A'uzhu bi-kalimatil-lahit-tammati min sharri ma khalaq.",
      translation: "I seek refuge in the perfect words of Allah from the evil of what He has created.",
      target: 3
    },
    {
      title: "Evening Praise & Faith",
      ar: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      translit: "Amsayna wa amsal-mulku lillahi walhamdu lillahi, la ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu, wa Huwa 'ala kulli shay'in Qadir.",
      translation: "We have entered the evening and to Allah belongs all sovereignty, and all praise is for Allah. There is no deity worthy of worship except Allah alone, without partner. To Him belongs all sovereignty and praise, and He is over all things powerful.",
      target: 1
    }
  ],
  opening: [
    {
      title: "Du'a al-Istiftah (Glorification)",
      ar: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ",
      translit: "Subhanaka Allahumma wa bihamdika, wa tabarakas-muka, wa ta'ala jadduka, wa la ilaha ghayruka.",
      translation: "Exalted are You, O Allah, and all praise is Yours; blessed is Your name, exalted is Your majesty, and there is no deity worthy of worship besides You.",
      target: 1
    },
    {
      title: "Istiftah (Sins Distance)",
      ar: "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ اللَّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرَدِ",
      translit: "Allahumma ba'id bayni wa bayna khatayaya kama ba'adta baynal-mashriqi wal-maghrib. Allahumma naqqini min khatayaya kama yunaqqath-thawbul-abyadu minad-danas. Allahumma-ghsilni min khatayaya bith-thalji wal-ma'i wal-barad.",
      translation: "O Allah, distance me from my sins as You have distanced the East from the West. O Allah, purify me from my sins as a white garment is purified from dirt. O Allah, wash away my sins with snow, water, and hail.",
      target: 1
    }
  ],
  salah: [
    {
      title: "Seek Forgiveness",
      ar: "أَسْتَغْفِرُ اللَّهَ",
      translit: "Astaghfirullah",
      translation: "I seek the forgiveness of Allah.",
      target: 3
    },
    {
      title: "Peace Supplication",
      ar: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      translit: "Allahumma Antas-Salamu wa minkas-salamu, tabarakta ya Dhal-Jalali wal-Ikram.",
      translation: "O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honor.",
      target: 1
    },
    {
      title: "SubhanAllah",
      ar: "سُبْحَانَ اللَّهِ",
      translit: "SubhanAllah",
      translation: "Glory be to Allah.",
      target: 33
    },
    {
      title: "Alhamdulillah",
      ar: "الْحَمْدُ لِلَّهِ",
      translit: "Alhamdulillah",
      translation: "Praise be to Allah.",
      target: 33
    },
    {
      title: "Allahu Akbar",
      ar: "اللَّهُ أَكْبَرُ",
      translit: "Allahu Akbar",
      translation: "Allah is the Greatest.",
      target: 34
    },
    {
      title: "Declaration of Monotheism",
      ar: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      translit: "La ilaha illallahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu, wa Huwa 'ala kulli shay'in Qadir.",
      translation: "There is no deity worthy of worship except Allah alone, without partner. To Him belongs all sovereignty and praise, and He is over all things powerful.",
      target: 1
    }
  ],
  wudu: [
    {
      title: "Before Wudu (Bismillah)",
      ar: "بِسْمِ اللَّهِ",
      translit: "Bismillah",
      translation: "In the name of Allah.",
      target: 1
    },
    {
      title: "Declaration of Faith after Wudu",
      ar: "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      translit: "Ashhadu an la ilaha illallahu wahdahu la sharika lahu, wa ashhadu anna Muhammadan 'abduhu wa Rasuluh.",
      translation: "I bear witness that there is no deity worthy of worship except Allah alone, without partner, and I bear witness that Muhammad ﷺ is His servant and Messenger.",
      target: 1
    },
    {
      title: "Purification Supplication",
      ar: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
      translit: "Allahumma-j'alni minat-tawwabina wa-j'alni minal-mutatahhirin.",
      translation: "O Allah, make me of those who constantly repent and make me of those who purify themselves.",
      target: 1
    }
  ],
  sleep: [
    {
      title: "Ayat al-Kursi",
      ar: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
      translit: "Allahu la ilaha illa Huwal Hayyul Qayyum, la ta'khuzuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man zhal-lazi yashfa'u 'indahu illa bi-izhnihi...",
      translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep...",
      target: 1
    },
    {
      title: "Dua for Sleep",
      ar: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
      translit: "Bismika Allahumma amutu wa ahya",
      translation: "In Your name, O Allah, I die and I live.",
      target: 1
    },
    {
      title: "Refuge in Allah's Shelter",
      ar: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا وَإِنْ أَرْسَلْتَهَا فَاحْفِظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
      translit: "Bismika Rabbi wadha'tu janbi wa bika arfa'uh. Fa-in amsakta nafsi farhamha, wa-in arsaltaha fahfazhha bima tahfazhu bihi 'ibadakas-salihin.",
      translation: "In Your name, my Lord, I lay down my side, and by You I raise it. If You take my soul, then have mercy upon it, and if You release it, then protect it as You protect Your righteous servants.",
      target: 1
    }
  ]
};

/* Quiz Questions */
const QUIZ_QUESTIONS = [
  {
    q: "ما هو الكتاب المقدس المنزل على النبي محمد ﷺ؟",
    choices: ["التوراة", "الإنجيل", "الزبور", "القرآن الكريم"],
    answer: 3,
    exp: "نزل القرآن الكريم على النبي محمد ﷺ على مراحل خلال فترة تقارب ٢٣ عامًا."
  },
  {
    q: "كم عدد أركان الإسلام؟",
    choices: ["٣ أركان", "٥ أركان", "٦ أركان", "٧ أركان"],
    answer: 1,
    exp: "بُني الإسلام على خمسة أركان: الشهادتان، الصلاة، الزكاة، الصيام، والحج."
  },
  {
    q: "في أي شهر أُنزل القرآن الكريم؟",
    choices: ["المحرّم", "رجب", "رمضان", "ذو الحجة"],
    answer: 2,
    exp: "أُنزل القرآن الكريم في ليلة القدر من شهر رمضان المبارك."
  },
  {
    q: "من هو أول خليفة في الإسلام؟",
    choices: ["عمر بن الخطاب", "علي بن أبي طالب", "عثمان بن عفان", "أبو بكر الصديق"],
    answer: 3,
    exp: "اختير أبو بكر الصديق رضي الله عنه كأول خليفة بعد وفاة النبي محمد ﷺ."
  },
  {
    q: "ما هو المعنى الحرفي لكلمة 'الإحسان'؟",
    choices: ["الصبر", "الإتقان والإحسان", "الإخلاص", "التوكل على الله"],
    answer: 1,
    exp: "الإحسان لغةً يعني الجمال والإتقان. وروحيًا، هو أن تعبد الله كأنك تراه."
  }
];

const RECITERS = ["Mishary Al-Afasy", "Abdul Basit", "Ali Jaber"];

const RECITER_MAP = {
  "Mishary Al-Afasy": "ar.alafasy",
  "Abdul Basit": "ar.abdulbasitmurattal",
  "Ali Jaber": "everyayah"
};

const TRANSLATIONS = ["العربية"];

/* Daily Rotating Datasets */
const DAILY_AYAHS = [
  {
    ar: "وَبَشِّرِ الصَّابِرِينَ الَّذِينَ إِذَا أَصَابَتْهُم مُّصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
    en: "",
    tafseer: "تعلمنا هذه الآية أن الصبر على المصائب مع تذكر أننا راجعون إلى الله هو بحد ذاته عبادة تستحق البشرى. — البقرة ١٥٥-١٥٦"
  },
  {
    ar: "لا يُكَلِّفُ اللَّهُ نَفْسًا إِلاَّ وُسْعَهَا",
    en: "",
    tafseer: "طمأنينة ربانية بأن كل ابتلاء تواجهه هو في حدود طاقتك وقدرتك على تجاوزه بالإيمان والدعاء. — البقرة ٢٨٦"
  },
  {
    ar: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    en: "",
    tafseer: "يعد الله أن اليسر ليس فقط بعد العسر، بل يرافقه، فهو مصدر دائم للراحة والقوة. — الشرح ٥-٦"
  },
  {
    ar: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    en: "",
    tafseer: "التوكل على الله يمنح سكينة عميقة، مع العلم أن النتائج النهائية بيد الحكيم العليم. — الطلاق ٣"
  },
  {
    ar: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
    en: "",
    tafseer: "الشكر يضاعف النعم. الاعتراف بفضل الله يجلب المزيد من الخير والسكينة والبركة. — إبراهيم ٧"
  },
  {
    ar: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    en: "",
    tafseer: "يذكرنا الله أن العلاقة بيننا وبينه متبادلة. عندما نتذكره، يذكرنا ويكرمنا في الملأ الأعلى. — البقرة ١٥٢"
  },
  {
    ar: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    en: "",
    tafseer: "تبرز هذه الآية العلاقة المباشرة والحميمة بين المؤمن وربه، دون حاجة لوسيط في الدعاء. — البقرة ١٨٦"
  }
];

const DAILY_DUAS = [
  {
    ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    en: ""
  },
  {
    ar: "رَبَّنَا لا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ",
    en: ""
  },
  {
    ar: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    en: ""
  },
  {
    ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    en: ""
  },
  {
    ar: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْهَمُوا قَوْلِي",
    en: ""
  },
  {
    ar: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    en: ""
  },
  {
    ar: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    en: ""
  }
];

const DAILY_HADITHS = [
  {
    text: `قال النبي ﷺ: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى."`,
    ref: "صحيح البخاري ١"
  },
  {
    text: `قال النبي ﷺ: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه."`,
    ref: "صحيح البخاري ١٣"
  },
  {
    text: `قال النبي ﷺ: "من كان يؤمن بالله واليوم الآخر فليقل خيرًا أو ليصمت."`,
    ref: "صحيح البخاري ٦٠١٨"
  },
  {
    text: `قال النبي ﷺ: "خياركم أحاسنكم أخلاقًا."`,
    ref: "صحيح البخاري ٦٠٣٥"
  },
  {
    text: `قال النبي ﷺ: "يسّروا ولا تعسّروا، وبشّروا ولا تنفّروا."`,
    ref: "صحيح البخاري ٦١٢٥"
  },
  {
    text: `قال النبي ﷺ: "يصبح على كل سُلامى من أحدكم صدقة، فكل تسبيحة صدقة... وكل كلمة طيبة صدقة."`,
    ref: "صحيح البخاري ٢٩٨٩"
  },
  {
    text: `قال النبي ﷺ: "إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم."`,
    ref: "صحيح مسلم ٢٥٦٤"
  }
];

const DAILY_REMINDERS = [
  `"وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ." اجعل خطواتك اليوم مباركة بذكر الله والاستغفار.`,
  `"أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ." خذ نفسًا عميقًا، هدّئ أفكارك، وتواصل مع خالقك اليوم.`,
  `"لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ." تأمل ثلاث نعم في حياتك اليوم وقل الحمد لله.`,
  `"قل خيرًا أو اصمت." ليكن كلامك اليوم بناءً يزرع السلام والمودة فيمن حولك.`,
  `"تبسمك في وجه أخيك صدقة." انشر الدفء والصبر والطيبة مع كل من تقابله اليوم.`,
  `"ابدأ كل عمل بـ بسم الله." استجلب البركة والتركيز والتوفيق في يومك وأعمالك.`,
  `"إن الله مع الصابرين." مهما بدت اللحظة صعبة، تمسك بالأمل وثق أن الفرج قريب.`,
  `"استغفر الله كثيرًا." تطهير القلب من الذنوب والتقصير يجلب سكينة عميقة وراحة بال."`
];

function getDailySeed(date) {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  return (y * 367 + m * 31 + d) & 0xffff;
}

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
let ayahFontSize = 24;

/* Date Picker and Dynamic Prayers States */
let selectedDate = new Date();
let isViewingToday = true;
let userLatitude = 21.4225; // default Mecca
let userLongitude = 39.8262; // default Mecca
let hasUserLocation = false;

/* New features states */
const FALLBACK_SURAHS = [
  { id: 1, name: "Al-Fatiha", arabic: "الفاتحة", meaning: "الفاتحة", ayahCount: 7, revelation: "مكية" },
  { id: 2, name: "Al-Baqarah", arabic: "البقرة", meaning: "البقرة", ayahCount: 286, revelation: "مدنية" },
  { id: 36, name: "Ya-Sin", arabic: "يس", meaning: "يس", ayahCount: 83, revelation: "مكية" },
  { id: 55, name: "Ar-Rahman", arabic: "الرحمن", meaning: "الرحمن", ayahCount: 78, revelation: "مدنية" },
  { id: 112, name: "Al-Ikhlas", arabic: "الإخلاص", meaning: "الإخلاص", ayahCount: 4, revelation: "مكية" },
  { id: 113, name: "Al-Falaq", arabic: "الفلق", meaning: "الفلق", ayahCount: 5, revelation: "مكية" }
];
let allSurahs = [...FALLBACK_SURAHS];
let activeHadithBook = "bukhari";
let activeAdhkarCategory = "morning";
let adhkarSessionCounts = {}; // Key: "morning-0"
let sessionActiveIndex = 0;
let sessionCategory = "morning";
let isSessionActive = false;
let quizCurrentIndex = 0;
let quizScore = 0;
let quizAnswered = false;

let chatMessages = [
  { sender: "ai", text: "السلام عليكم. أنا مرشد، رفيقك الإسلامي. كيف يمكنني مساعدتك في طلب العلم أو التأمل اليوم؟" }
];

/* Audio Recitation */
let currentAudio = null;
let playingSurah = null;
let audioVolume = 0.7;
let isAudioMuted = false;
let isSurahReplaying = false;
let isAutoplayNextActive = false;
let lastScrolledAyahKey = null;

/* Dedicated Player & Effects States */
let previousActiveView = "dashboard";
let currentSpeedRate = 1.0;
let reverbLevel = 0.0;
let reverbSpace = 0.3;
let lastAlertedPrayer = "";
let alertDismissTimeout = null;

// Web Audio API Nodes
let audioCtx = null;
let activeDelayNode = null;
let activeFeedbackGain = null;
let activeWetGain = null;

// Monograms for reciters
const MONOGRAM_MAP = {
  "Mishary Al-Afasy": "MA",
  "Abdul Basit": "AB",
  "Ali Jaber": "AJ"
};

// Ambient Background Sounds - Config of 100 Nature Sounds
const SOUNDSCAPES_CONFIG = [
  // 1. Rain & Storms (12)
  { id: "light-rain", name: "Light Rain", category: "rain", icon: "rain-light", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/rain/light-rain.mp3" },
  { id: "heavy-rain", name: "Heavy Rain", category: "rain", icon: "rain-heavy", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/rain/heavy-rain.mp3" },
  { id: "rain-on-window", name: "Rain on Window", category: "rain", icon: "window", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/rain/rain-on-window.mp3" },
  { id: "rain-on-leaves", name: "Rain on Leaves", category: "rain", icon: "leaves", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/rain/rain-on-leaves.mp3" },
  { id: "rain-on-tent", name: "Rain on Tent", category: "rain", icon: "tent", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/rain/rain-on-tent.mp3" },
  { id: "rain-on-umbrella", name: "Rain on Umbrella", category: "rain", icon: "umbrella", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/rain/rain-on-umbrella.mp3" },
  { id: "rain-on-car-roof", name: "Rain on Car", category: "rain", icon: "car", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/rain/rain-on-car-roof.mp3" },
  { id: "thunderstorm", name: "Thunderstorm", category: "rain", icon: "thunder", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/rain/thunder.mp3" },
  { id: "shower-flow", name: "Bathroom Shower", category: "rain", icon: "shower", url: "https://raw.githubusercontent.com/brarcher/baby-sleep-sounds/master/app/src/main/res/raw/shower.mp3" },
  { id: "waterfall", name: "Waterfall", category: "rain", icon: "waterfall", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/waterfall.mp3" },
  { id: "water-droplets", name: "Water Droplets", category: "rain", icon: "droplets", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/droplets.mp3" },
  { id: "boiling-water", name: "Boiling Water", category: "rain", icon: "boiling", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/boiling-water.mp3" },

  // 2. Water & Oceans (10)
  { id: "water-river", name: "Water River", category: "water", icon: "river", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/river.mp3" },
  { id: "water-stream", name: "Water Stream", category: "water", icon: "stream", url: "https://raw.githubusercontent.com/brarcher/baby-sleep-sounds/master/app/src/main/res/raw/stream.mp3" },
  { id: "ocean-waves", name: "Ocean Waves", category: "water", icon: "ocean", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/waves.mp3" },
  { id: "beach-ambient", name: "Beach Ambiance", category: "water", icon: "beach", url: "https://raw.githubusercontent.com/sara-ls/resonance/master/sounds/beach.ogg" },
  { id: "underwater", name: "Underwater Deep", category: "water", icon: "underwater", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/underwater.mp3" },
  { id: "bubbles", name: "Water Bubbles", category: "water", icon: "bubbles", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/bubbles.mp3" },
  { id: "rowing-boat", name: "Rowing Boat", category: "water", icon: "rowboat", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/transport/rowing-boat.mp3" },
  { id: "sailboat", name: "Sailboat", category: "water", icon: "sailboat", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/transport/sailboat.mp3" },
  { id: "submarine", name: "Submarine", category: "water", icon: "submarine", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/transport/submarine.mp3" },
  { id: "washing-machine", name: "Washing Machine", category: "water", icon: "washmachine", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/washing-machine.mp3" },

  // 3. Forest & Wind (12)
  { id: "campfire", name: "Campfire", category: "forest", icon: "fire", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/campfire.mp3" },
  { id: "desert-wind", name: "Desert Wind", category: "forest", icon: "wind", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/wind.mp3" },
  { id: "wind-in-trees", name: "Wind in Trees", category: "forest", icon: "trees", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/wind-in-trees.mp3" },
  { id: "howling-wind", name: "Howling Wind", category: "forest", icon: "wind-howl", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/howling-wind.mp3" },
  { id: "jungle", name: "Jungle Safari", category: "forest", icon: "jungle", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/jungle.mp3" },
  { id: "rustling-leaves", name: "Rustling Leaves", category: "forest", icon: "leaves-rustle", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/walk-on-leaves.mp3" },
  { id: "snow-steps", name: "Steps in Snow", category: "forest", icon: "snow", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/walk-in-snow.mp3" },
  { id: "gravel-steps", name: "Steps on Gravel", category: "forest", icon: "gravel", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/nature/walk-on-gravel.mp3" },
  { id: "morning-birds", name: "Morning Birds", category: "forest", icon: "morning", url: "https://raw.githubusercontent.com/sara-ls/resonance/master/sounds/morning.mp3" },
  { id: "forest-birds-deep", name: "Forest Birds Deep", category: "forest", icon: "forest", url: "https://raw.githubusercontent.com/sara-ls/resonance/master/sounds/forest.mp3" },
  { id: "wind-chimes", name: "Wind Chimes", category: "forest", icon: "chimes", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/wind-chimes.mp3" },
  { id: "windshield-wipers", name: "Windshield Wipers", category: "forest", icon: "wipers", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/windshield-wipers.mp3" },

  // 4. Wildlife & Animals (16)
  { id: "beehive", name: "Beehive Buzz", category: "wildlife", icon: "beehive", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/beehive.mp3" },
  { id: "birds-chirping", name: "Birds Chirping", category: "wildlife", icon: "birds", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/birds.mp3" },
  { id: "cat-purring", name: "Cat Purring", category: "wildlife", icon: "cat", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/cat-purring.mp3" },
  { id: "chickens", name: "Chickens", category: "wildlife", icon: "chickens", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/chickens.mp3" },
  { id: "cows", name: "Cows Pasture", category: "wildlife", icon: "cows", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/cows.mp3" },
  { id: "crickets", name: "Night Crickets", category: "wildlife", icon: "crickets", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/crickets.mp3" },
  { id: "crows", name: "Crows", category: "wildlife", icon: "crows", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/crows.mp3" },
  { id: "dog-barking", name: "Dog Barking", category: "wildlife", icon: "dog", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/dog-barking.mp3" },
  { id: "frog-croaking", name: "Frog Pond", category: "wildlife", icon: "frog", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/frog.mp3" },
  { id: "horse-gallop", name: "Horse Gallop", category: "wildlife", icon: "horse", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/horse-gallop.mp3" },
  { id: "owl-hooting", name: "Forest Owl", category: "wildlife", icon: "owl", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/owl.mp3" },
  { id: "seagulls", name: "Seagulls", category: "wildlife", icon: "seagulls", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/seagulls.mp3" },
  { id: "sheep", name: "Sheep Meadow", category: "wildlife", icon: "sheep", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/sheep.mp3" },
  { id: "whale-song", name: "Whale Song", category: "wildlife", icon: "whale", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/whale.mp3" },
  { id: "wolf-howling", name: "Wolf Howling", category: "wildlife", icon: "wolf", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/wolf.mp3" },
  { id: "woodpecker", name: "Woodpecker", category: "wildlife", icon: "woodpecker", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/animals/woodpecker.mp3" },

  // 5. Cozy Places (16)
  { id: "airport", name: "Airport Lounge", category: "ambient", icon: "airport", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/airport.mp3" },
  { id: "cafe", name: "Coffee Shop", category: "ambient", icon: "cafe", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/cafe.mp3" },
  { id: "carousel", name: "Carousel Music", category: "ambient", icon: "carousel", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/carousel.mp3" },
  { id: "church-bells", name: "Church Bells", category: "ambient", icon: "church", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/church.mp3" },
  { id: "construction", name: "Construction Site", category: "ambient", icon: "construction", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/construction-site.mp3" },
  { id: "crowded-bar", name: "Crowded Bar", category: "ambient", icon: "bar", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/crowded-bar.mp3" },
  { id: "laboratory", name: "Sci-Fi Lab", category: "ambient", icon: "lab", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/laboratory.mp3" },
  { id: "laundry-room", name: "Laundry Room", category: "ambient", icon: "laundry", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/laundry-room.mp3" },
  { id: "library", name: "Quiet Library", category: "ambient", icon: "library", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/library.mp3" },
  { id: "night-village", name: "Night Village", category: "ambient", icon: "village", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/night-village.mp3" },
  { id: "office-chatter", name: "Office Chatter", category: "ambient", icon: "office", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/office.mp3" },
  { id: "restaurant", name: "Busy Restaurant", category: "ambient", icon: "restaurant", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/restaurant.mp3" },
  { id: "subway-station", name: "Subway Station", category: "ambient", icon: "subway", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/subway-station.mp3" },
  { id: "supermarket", name: "Supermarket", category: "ambient", icon: "supermarket", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/supermarket.mp3" },
  { id: "temple", name: "Quiet Temple", category: "ambient", icon: "temple", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/places/temple.mp3" },
  { id: "alarm-clock", name: "Retro Alarm", category: "ambient", icon: "alarm", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/alarm.mp3" },

  // 6. Urban & Transport (13)
  { id: "airplane", name: "Airplane Cabin", category: "transport", icon: "airplane", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/transport/airplane.mp3" },
  { id: "inside-train", name: "Inside a Train", category: "transport", icon: "insidetrain", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/transport/inside-a-train.mp3" },
  { id: "train-horn", name: "Train Clatter", category: "transport", icon: "train", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/transport/train.mp3" },
  { id: "ambulance-siren", name: "Ambulance Siren", category: "transport", icon: "siren", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/urban/ambulance-siren.mp3" },
  { id: "busy-street", name: "Busy Street", category: "transport", icon: "busystreet", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/urban/busy-street.mp3" },
  { id: "crowd-cheering", name: "Urban Crowd", category: "transport", icon: "crowd", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/urban/crowd.mp3" },
  { id: "fireworks", name: "Fireworks", category: "transport", icon: "fireworks", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/urban/fireworks.mp3" },
  { id: "highway", name: "Highway Traffic", category: "transport", icon: "highway", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/urban/highway.mp3" },
  { id: "road-traffic", name: "Asphalt Road", category: "transport", icon: "road", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/urban/road.mp3" },
  { id: "traffic-jam", name: "Traffic Jam", category: "transport", icon: "traffic", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/urban/traffic.mp3" },
  { id: "refrigerator", name: "Fridge Hum", category: "transport", icon: "fridge", url: "https://raw.githubusercontent.com/brarcher/baby-sleep-sounds/master/app/src/main/res/raw/refrigerator.mp3" },
  { id: "vacuum-cleaner", name: "Vacuum Cleaner", category: "transport", icon: "vacuum", url: "https://raw.githubusercontent.com/brarcher/baby-sleep-sounds/master/app/src/main/res/raw/vacuum.mp3" },
  { id: "clothes-dryer", name: "Clothes Dryer", category: "transport", icon: "dryer-raw", url: "https://raw.githubusercontent.com/brarcher/baby-sleep-sounds/master/app/src/main/res/raw/dryer.mp3" },

  // 7. Things & Objects (13)
  { id: "ceiling-fan", name: "Ceiling Fan", category: "things", icon: "fan", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/ceiling-fan.mp3" },
  { id: "fan-loop", name: "Electric Fan", category: "things", icon: "fan-raw", url: "https://raw.githubusercontent.com/brarcher/baby-sleep-sounds/master/app/src/main/res/raw/fan.mp3" },
  { id: "wall-clock", name: "Wall Clock", category: "things", icon: "clock", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/clock.mp3" },
  { id: "dryer-machine", name: "Tumble Dryer", category: "things", icon: "dryer", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/dryer.mp3" },
  { id: "keyboard-typing", name: "Mechanical Keyboard", category: "things", icon: "keyboard", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/keyboard.mp3" },
  { id: "morse-code", name: "Morse Code", category: "things", icon: "morse", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/morse-code.mp3" },
  { id: "paper-rustle", name: "Paper Rustle", category: "things", icon: "paper", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/paper.mp3" },
  { id: "singing-bowl", name: "Tibetan Bowl", category: "things", icon: "singingbowl", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/singing-bowl.mp3" },
  { id: "slide-projector", name: "Slide Projector", category: "things", icon: "projector", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/slide-projector.mp3" },
  { id: "tuning-radio", name: "Tuning Radio", category: "things", icon: "radio", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/tuning-radio.mp3" },
  { id: "typewriter", name: "Vintage Typewriter", category: "things", icon: "typewriter", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/typewriter.mp3" },
  { id: "vinyl-crackle", name: "Vinyl Crackle", category: "things", icon: "vinyl", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/things/vinyl-effect.mp3" },
  { id: "baby-shh", name: "Lullaby Shh", category: "things", icon: "shh", url: "https://raw.githubusercontent.com/brarcher/baby-sleep-sounds/master/app/src/main/res/raw/shhhh.mp3" },

  // 8. White Noises & Binaural (8)
  { id: "brown-noise", name: "Brown Noise", category: "noise", icon: "static-noise", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/noise/brown-noise.wav" },
  { id: "pink-noise", name: "Pink Noise", category: "noise", icon: "static-noise", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/noise/pink-noise.wav" },
  { id: "white-noise", name: "White Noise", category: "noise", icon: "static-noise", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/noise/white-noise.wav" },
  { id: "binaural-alpha", name: "Binaural Alpha", category: "noise", icon: "binaural", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/binaural/binaural-alpha.wav" },
  { id: "binaural-beta", name: "Binaural Beta", category: "noise", icon: "binaural", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/binaural/binaural-beta.wav" },
  { id: "binaural-delta", name: "Binaural Delta", category: "noise", icon: "binaural", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/binaural/binaural-delta.wav" },
  { id: "binaural-gamma", name: "Binaural Gamma", category: "noise", icon: "binaural", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/binaural/binaural-gamma.wav" },
  { id: "binaural-theta", name: "Binaural Theta", category: "noise", icon: "binaural", url: "https://raw.githubusercontent.com/remvze/moodist/main/public/sounds/binaural/binaural-theta.wav" }
];

let soundscapeAudios = {};
let soundscapeStates = {};
let soundscapeVolumes = {};

// Initialize state maps
SOUNDSCAPES_CONFIG.forEach(item => {
  soundscapeStates[item.id] = false;
  soundscapeVolumes[item.id] = 0.5;
});

const SOUNDSCAPE_SVG_ICONS = {
  "rain-light": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12.5A5.993 5.993 0 0018 7.228 7 7 0 005.352 9.07 4 4 0 006 17h12c1.472 0 2.766-.798 3.5-2m-12.5 3v2" /></svg>`,
  "rain-heavy": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12.5A5.993 5.993 0 0018 7.228 7 7 0 005.352 9.07 4 4 0 006 17h12c1.472 0 2.766-.798 3.5-2m-13.5 3v2m4-2v2m4-2v2" /></svg>`,
  "window": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h18v18H3V3zm0 9h18M12 3v18" /></svg>`,
  "leaves": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v13.5m0-13.5a9.75 9.75 0 018.15 4.53c.6 1 .9 2.1.9 3.22" /></svg>`,
  "tent": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3L2 21h20L12 3zm0 0v18" /></svg>`,
  "umbrella": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 12v9m0-9a9 9 0 019-9H3a9 9 0 019 9z" /></svg>`,
  "car": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3C13 6.9 11.8 6.5 11 6.5H5c-.8 0-1.8.6-2.2 1.3L1 11.2V16c0 .6.4 1 1 1h2m11 0h4M5.5 17a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm11 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" /></svg>`,
  "thunder": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>`,
  "shower": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v15M8 6h8M6 10h12M4 14h16" /></svg>`,
  "waterfall": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M8 6v12M16 6v12" /></svg>`,
  "droplets": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>`,
  "boiling": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v4m-4-2h8m-9 8h10a2 2 0 012 2v2H5v-2a2 2 0 012-2z" /></svg>`,
  "river": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12c3-3 6-3 9 0s6 3 9 0m-18 4c3-3 6-3 9 0s6 3 9 0" /></svg>`,
  "stream": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 4h16.5M3.75 8h16.5" /></svg>`,
  "ocean": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M3 16h18M3 8h18" /></svg>`,
  "beach": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5M12 18.75V21M3.75 12H5.25M18.75 12H20.25M6.16 6.16l1.06 1.06m9.53 9.53l1.06 1.06" /></svg>`,
  "underwater": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2a10 10 0 00-7.54 16.58L12 22l7.54-3.42A10 10 0 0012 2z" /></svg>`,
  "bubbles": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="6" cy="18" r="2" /><circle cx="12" cy="12" r="3" /><circle cx="19" cy="7" r="2" /></svg>`,
  "rowboat": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18L17 19H7L3 12z" /></svg>`,
  "sailboat": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M12 3l7 10H12M12 5L5 13H12" /></svg>`,
  "submarine": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12a4 4 0 014-4h10a4 4 0 014 4v1a4 4 0 01-4 4H7a4 4 0 01-4-4v-1zM12 8V4h3" /></svg>`,
  "washmachine": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="13" r="5" /></svg>`,
  "fire": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
  "wind": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12h19.5m-19.5-3h15.75M2.25 15h11.25" /></svg>`,
  "trees": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3L3 17h18L12 3zm0 0v18" /></svg>`,
  "wind-howl": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M5 8h12M4 16h10" /></svg>`,
  "jungle": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3a9 9 0 00-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 00-9-9z" /></svg>`,
  "leaves-rustle": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v13.5m0-13.5a9.75 9.75 0 018.15 4.53c.6 1 .9 2.1.9 3.22m-9.05-7.75a9.75 9.75 0 00-8.15 4.53" /></svg>`,
  "snow": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M3 12h18m-15-6l12 12m0-12L6 18" /></svg>`,
  "gravel": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></svg>`,
  "morning": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="12" cy="10" r="4" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2M12 16v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M2 12h2M18 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" /></svg>`,
  "forest": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 3L3 17h18L12 3zM8 12l2-4 2 4M6 15l3-6 3 6" /></svg>`,
  "chimes": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 3v18M8 6v12M16 6v12M4 9h16" /></svg>`,
  "wipers": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M4 18l8-10 8 10M12 8v10" /></svg>`,
  "beehive": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 3v18M6 8h12M8 12h8M10 16h4" /></svg>`,
  "birds": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-15v6m-3-3h6" /></svg>`,
  "cat": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 5c-3.87 0-7 3.13-7 7a7 7 0 007 7 7 7 0 007-7c0-3.87-3.13-7-7-7zm-4 7a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm8 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" /></svg>`,
  "chickens": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" /></svg>`,
  "cows": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M4 8h16v8H4V8zm4-4v4m8-4v4" /></svg>`,
  "crickets": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M6 8h12M8 12h8M10 16h4" /></svg>`,
  "crows": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 3v18M5 12h14" /></svg>`,
  "dog": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M8 18v2m8-2v2" /></svg>`,
  "frog": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3a6 6 0 00-6 6c0 3.31 2.69 6 6 6s6-2.69 6-6a6 6 0 00-6-6zm0 18v-3" /></svg>`,
  "horse": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M3 10h18v6H3v-6zm3-4v4m12-4v4" /></svg>`,
  "owl": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="8" cy="10" r="2" /><circle cx="16" cy="10" r="2" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l-2-2h4l-2 2zm10-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>`,
  "seagulls": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10s4-3 9 0c5-3 9 0 9 0M5 14s3-2 7 0c4-2 7 0 7 0" /></svg>`,
  "sheep": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="12" cy="12" r="8" /><path d="M9 12h6" /></svg>`,
  "whale": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 20a8 8 0 008-8h-3a5 5 0 00-5 5v3zm-8-8a8 8 0 008 8v-3a5 5 0 00-5-5H4z" /></svg>`,
  "wolf": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3l3 6 6 1-4.5 4.5L18 21l-6-3-6 3 1.5-6.5L3 10l6-1 3-6z" /></svg>`,
  "woodpecker": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M18 10h-4V6a2 2 0 00-4 0v4H6a2 2 0 000 4h4v4a2 2 0 004 0v-4h4a2 2 0 000-4z" /></svg>`,
  "airport": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>`,
  "cafe": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M18 8h2a2 2 0 012 2v2a2 2 0 01-2 2h-2M2 8h14v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8z" /></svg>`,
  "carousel": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 2L2 7h20L12 2zm0 5v14M7 8v10M17 8v10" /></svg>`,
  "church": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 2v4m-2-2h4m-2 4v14m-7 0h14" /></svg>`,
  "construction": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 2L2 22h20L12 2zm0 12v4" /></svg>`,
  "bar": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 3L2 21h20L12 3zm-2 12h4" /></svg>`,
  "lab": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM9 9h6m-6 4h6m-6 4h4" /></svg>`,
  "laundry": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="13" r="5" /></svg>`,
  "library": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20M4 19.5V3.5A2.5 2.5 0 016.5 1H20v16H6.5" /></svg>`,
  "village": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm6 13V12h6v10" /></svg>`,
  "office": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>`,
  "restaurant": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 3v18M5 8h14" /></svg>`,
  "subway": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M6 20l2-4m10 4l-2-4" /></svg>`,
  "supermarket": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>`,
  "temple": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 2L2 9h20L12 2zm-7 7v13h14V9H5zm4 7h6v6H9v-6z" /></svg>`,
  "alarm": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="12" cy="13" r="7" /><path d="M12 9v4l3 3M5 3L3 5m18-2l2 2" /></svg>`,
  "airplane": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>`,
  "insidetrain": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6v6H9V9z" /></svg>`,
  "train": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="4" y="3" width="16" height="14" rx="2" /><circle cx="8" cy="20" r="1" /><circle cx="16" cy="20" r="1" /></svg>`,
  "siren": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 2L2 22h20L12 2zm0 6v6m0 4v2" /></svg>`,
  "busystreet": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 2v20M5 5h14M5 11h14M5 17h14" /></svg>`,
  "crowd": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="6" cy="7" r="3" /><circle cx="18" cy="7" r="3" /><path d="M2 20a6 6 0 0110 0m0 0a6 6 0 0110 0" /></svg>`,
  "fireworks": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 2v4M12 18v4M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /></svg>`,
  "highway": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M6 3L3 21h18l-3-18H6zm6 0v18" /></svg>`,
  "road": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M4 22L10 2m10 20L14 2" /></svg>`,
  "traffic": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="9" y="3" width="6" height="18" rx="3" /><circle cx="12" cy="7" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="12" cy="17" r="2" /></svg>`,
  "fridge": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M5 10h14M10 6v2m0 8v2" /></svg>`,
  "vacuum": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M12 3v12M8 15h8M6 19h12" /></svg>`,
  "dryer-raw": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="12" r="6" /></svg>`,
  "fan-raw": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg>`,
  "clock": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>`,
  "dryer": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="12" r="6" /></svg>`,
  "keyboard": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M6 8h2m4 0h2m4 0h2M6 12h2m4 0h2m4 0h2M7 16h10" /></svg>`,
  "morse": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M3 12h2m4 0h6m4 0h2" /></svg>`,
  "paper": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></svg>`,
  "singingbowl": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M3 10a9 9 0 0018 0H3z" /></svg>`,
  "projector": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="9" cy="12" r="3" /></svg>`,
  "radio": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="2" y="6" width="20" height="14" rx="2" /><path d="M6 3l4 3m-4 7h12" /></svg>`,
  "typewriter": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M6 18h12" /></svg>`,
  "vinyl": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>`,
  "shh": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M9 10a3 3 0 006 0M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>`,
  "static-noise": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M3 12h18M3 6h18M3 18h18" /></svg>`,
  "binaural": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sc-icon"><path d="M3 12h18M12 3v18" /></svg>`
};

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

async function getArabicLocationName(lat, lon) {
  const locText = document.getElementById("location-text");
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1&accept-language=ar`, {
      headers: {
        'User-Agent': 'AnNoor-Islamic-Web-App'
      }
    });
    if (response.ok) {
      const data = await response.json();
      const city = data.address.city || data.address.town || data.address.village || data.address.state || "موقع غير معروف";
      if (locText) {
        locText.innerHTML = `<span class="loc-prefix">محط الرحال:</span> <span class="loc-name">${city}</span>`;
      }
    } else {
      if (locText) {
        locText.innerHTML = `<span class="loc-prefix">آفاق:</span> <span class="loc-name">${lat.toFixed(2)}° ، ${lon.toFixed(2)}°</span>`;
      }
    }
  } catch (err) {
    if (locText) {
      locText.innerHTML = `<span class="loc-prefix">آفاق:</span> <span class="loc-name">${lat.toFixed(2)}° ، ${lon.toFixed(2)}°</span>`;
    }
  }
}

function syncLocationByIP() {
  const locText = document.getElementById("location-text");
  fetch("https://ipapi.co/json/")
    .then(res => {
      if (!res.ok) throw new Error("IP API failed");
      return res.json();
    })
    .then(async (data) => {
      userLatitude = data.latitude || 21.4225;
      userLongitude = data.longitude || 39.8262;
      hasUserLocation = true;

      await getArabicLocationName(userLatitude, userLongitude);
      fetchPrayersForDate(selectedDate);
    })
    .catch(err => {
      console.warn("IP Geolocation failed:", err);
      if (locText) {
        locText.innerHTML = `<span class="loc-prefix">محط الرحال:</span> <span class="loc-name">مكة المكرمة (افتراضي)</span>`;
      }
      fetchPrayersForDate(selectedDate);
    });
}

function syncLocation() {
  if ("geolocation" in navigator) {
    const locBadge = document.getElementById("user-location-badge");
    const locText = document.getElementById("location-text");
    if (locBadge) locBadge.classList.remove("hidden");
    if (locText) locText.innerHTML = "تحديد الموقع...";

    navigator.geolocation.getCurrentPosition(async (position) => {
      userLatitude = position.coords.latitude;
      userLongitude = position.coords.longitude;
      hasUserLocation = true;

      await getArabicLocationName(userLatitude, userLongitude);

      const qiblaAngle = calculateQibla(userLatitude, userLongitude);
      const needle = document.querySelector(".compass-needle");
      if (needle) {
        needle.style.transform = `rotate(${qiblaAngle}deg)`;
      }
      const compassFooter = document.querySelector(".compass-footer");
      if (compassFooter) {
        compassFooter.textContent = `Mecca is exactly ${Math.round(qiblaAngle)}° from north (synchronized with your location: ${userLatitude.toFixed(2)}°, ${userLongitude.toFixed(2)}°).`;
      }

      fetchPrayersForDate(selectedDate);
    }, (error) => {
      console.warn("Geolocation request denied or failed, attempting IP fallback...", error);
      syncLocationByIP();
    }, { timeout: 8000 });
  } else {
    console.warn("Navigator geolocation not supported, attempting IP fallback...");
    syncLocationByIP();
  }
}

/* ---------------------------------- Mathematical Fallbacks & Calculations ---------------------------------- */

function degToRad(d) { return d * Math.PI / 180; }
function radToDeg(r) { return r * 180 / Math.PI; }

function calculateOfflinePrayers(date, lat, lng) {
  // Day of year
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // Timezone offset in hours
  const timezoneOffset = -date.getTimezoneOffset() / 60;

  // Simple solar calculation
  // Equation of time EqT (in minutes)
  const b = degToRad(360 * (dayOfYear - 81) / 365);
  const eqt = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);

  // Solar declination (in radians)
  const declination = degToRad(23.44 * Math.sin(degToRad(360 * (dayOfYear - 80) / 365)));

  // Solar noon (Dhuhr) in hours
  const dhuhr = 12 - (lng / 15) + timezoneOffset - (eqt / 60);

  const latRad = degToRad(lat);

  // Hour angle helper
  const hourAngle = (angleDeg) => {
    const angleRad = degToRad(angleDeg);
    const cosH = (Math.sin(angleRad) - Math.sin(latRad) * Math.sin(declination)) / (Math.cos(latRad) * Math.cos(declination));
    if (cosH > 1) return 0; // never rises
    if (cosH < -1) return 12; // never sets
    return radToDeg(Math.acos(cosH)) / 15;
  };

  // Standard angles
  const hFajr = hourAngle(-18);
  const hSunrise = hourAngle(-0.833);
  const hMaghrib = hourAngle(-0.833);
  const hIsha = hourAngle(-18);

  // Asr shadow angle (Shafi / standard: shadow factor G = 1)
  const g = 1;
  const asrAlt = -radToDeg(Math.atan(g + Math.tan(Math.abs(latRad - declination))));
  const hAsr = hourAngle(asrAlt);

  const formatTime = (hDecimal) => {
    let hh = Math.floor(hDecimal);
    let mm = Math.round((hDecimal - hh) * 60);
    if (mm === 60) { hh += 1; mm = 0; }
    hh = (hh % 24 + 24) % 24;
    return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  };

  return {
    Fajr: formatTime(dhuhr - hFajr),
    Sunrise: formatTime(dhuhr - hSunrise),
    Dhuhr: formatTime(dhuhr),
    Asr: formatTime(dhuhr + hAsr),
    Maghrib: formatTime(dhuhr + hMaghrib),
    Isha: formatTime(dhuhr + hIsha)
  };
}

async function fetchPrayersForDate(date) {
  // 1. Immediately calculate offline fallback times and render to ensure snappy responsiveness
  const fallback = calculateOfflinePrayers(date, userLatitude, userLongitude);

  PRAYERS[0].time = fallback.Fajr;
  PRAYERS[1].time = fallback.Sunrise;
  PRAYERS[2].time = fallback.Dhuhr;
  PRAYERS[3].time = fallback.Asr;
  PRAYERS[4].time = fallback.Maghrib;
  PRAYERS[5].time = fallback.Isha;

  renderSalahHub();
  renderDashboard();
  if (isViewingToday) {
    syncPhaseWithRealTime();
  }

  // 2. Attempt online sync if user's location is active
  try {
    const timestamp = Math.floor(date.getTime() / 1000);
    const response = await fetch(`https://api.aladhan.com/v1/timings/${timestamp}?latitude=${userLatitude}&longitude=${userLongitude}`);
    const json = await response.json();

    if (json.code === 200 && json.data && json.data.timings) {
      const timings = json.data.timings;

      const cleanTime = (tStr) => tStr.split(" ")[0];

      PRAYERS[0].time = cleanTime(timings.Fajr);
      PRAYERS[1].time = cleanTime(timings.Sunrise);
      PRAYERS[2].time = cleanTime(timings.Dhuhr);
      PRAYERS[3].time = cleanTime(timings.Asr);
      PRAYERS[4].time = cleanTime(timings.Maghrib);
      PRAYERS[5].time = cleanTime(timings.Isha);

      renderSalahHub();
      renderDashboard();
      if (isViewingToday) {
        syncPhaseWithRealTime();
      }
      console.log(`Successfully synced times for ${date.toDateString()} online.`);
    }
  } catch (err) {
    console.warn("Using offline mathematical calculations for prayer times.", err);
  }
}

function resetToToday() {
  selectedDate = new Date();
  isViewingToday = true;
  syncDatePickerFields();
  renderHeader();
  fetchPrayersForDate(selectedDate);
}

function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

function getLocalDateString(d) {
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - (offset * 60 * 1000));
  return local.toISOString().split('T')[0];
}

function getGregorianFromHijri(year, monthIndex, day) {
  const epoch = -42523286400000;
  // Tabular Islamic Calendar algorithm
  const days = Math.floor((year - 1) * 354.367) + Math.floor(monthIndex * 29.53) + (day - 1);
  const ms = epoch + days * 86400000;
  return new Date(ms + 43200000); // Add 12 hours to avoid timezone shifts
}

function syncDatePickerFields() {
  const gInput = document.getElementById("gregorian-input");
  if (gInput) gInput.value = getLocalDateString(selectedDate);

  const hijri = getHijriApprox(selectedDate);
  const hDay = document.getElementById("hijri-day-select");
  const hMonth = document.getElementById("hijri-month-select");
  const hYear = document.getElementById("hijri-year-select");

  if (hDay) hDay.value = hijri.day;
  if (hMonth) hMonth.value = HIJRI_MONTHS.indexOf(hijri.month);
  if (hYear) hYear.value = hijri.year;
}

function initDatePicker() {
  // Populate Hijri day
  const daySelect = document.getElementById("hijri-day-select");
  if (daySelect) {
    let daysHtml = "";
    for (let d = 1; d <= 30; d++) {
      daysHtml += `<option value="${d}">${d}</option>`;
    }
    daySelect.innerHTML = daysHtml;
  }

  // Populate Hijri month
  const monthSelect = document.getElementById("hijri-month-select");
  if (monthSelect) {
    let monthsHtml = "";
    HIJRI_MONTHS.forEach((m, idx) => {
      monthsHtml += `<option value="${idx}">${m}</option>`;
    });
    monthSelect.innerHTML = monthsHtml;
  }

  // Populate Hijri year
  const yearSelect = document.getElementById("hijri-year-select");
  if (yearSelect) {
    let yearsHtml = "";
    const currentHijriYear = getHijriApprox(new Date()).year;
    for (let y = currentHijriYear - 5; y <= currentHijriYear + 15; y++) {
      yearsHtml += `<option value="${y}">${y} AH</option>`;
    }
    yearSelect.innerHTML = yearsHtml;
  }

  // Set initial picker field values
  syncDatePickerFields();

  // Add picker trigger handler
  const trigger = document.getElementById("date-picker-trigger");
  const dropdown = document.getElementById("date-picker-dropdown");
  if (trigger && dropdown) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
    });
  }

  // Add tabs switcher handler
  const tabButtons = document.querySelectorAll(".date-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      tabButtons.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");

      const selectedTab = btn.getAttribute("data-date-tab");
      const panes = document.querySelectorAll(".date-pane");
      panes.forEach(pane => pane.classList.remove("active"));

      const targetPane = document.getElementById(`${selectedTab}-date-pane`);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // Add Apply button handler
  const applyBtn = document.getElementById("date-picker-apply-btn");
  if (applyBtn) {
    applyBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const activeTabBtn = document.querySelector(".date-tab-btn.active");
      const activeTab = activeTabBtn ? activeTabBtn.getAttribute("data-date-tab") : "gregorian";

      if (activeTab === "gregorian") {
        const gInput = document.getElementById("gregorian-input");
        if (gInput && gInput.value) {
          selectedDate = new Date(gInput.value + "T12:00:00");
        }
      } else {
        const hDay = parseInt(document.getElementById("hijri-day-select").value, 10);
        const hMonthIdx = parseInt(document.getElementById("hijri-month-select").value, 10);
        const hYear = parseInt(document.getElementById("hijri-year-select").value, 10);
        selectedDate = getGregorianFromHijri(hYear, hMonthIdx, hDay);
      }

      isViewingToday = isSameDay(selectedDate, new Date());

      // Keep selectors aligned
      syncDatePickerFields();
      renderHeader();
      fetchPrayersForDate(selectedDate);

      if (dropdown) dropdown.classList.add("hidden");
    });
  }

  // Add Today button handler
  const todayBtn = document.getElementById("date-picker-today-btn");
  if (todayBtn) {
    todayBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      resetToToday();
      if (dropdown) dropdown.classList.add("hidden");
    });
  }

  // Add outside click close handler
  document.addEventListener("click", (e) => {
    if (!dropdown || !trigger) return;
    if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });
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
  initChat();
  initDatePicker();
  renderAll();
  syncLocation();
  fetchDailyQuizQuestions().then(() => {
    initQuiz();
  });
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

  const savedFontSize = localStorage.getItem("quranAyahFontSize");
  if (savedFontSize) {
    ayahFontSize = parseInt(savedFontSize, 10);
  } else {
    if (window.innerWidth <= 767) {
      ayahFontSize = 19;
    } else {
      ayahFontSize = 24;
    }
  }
  updateAyahFontSize(ayahFontSize);
}

function saveState() {
  localStorage.setItem("adhkarCount", adhkarCount.toString());
  localStorage.setItem("bookmarks", JSON.stringify(Array.from(bookmarks)));
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("salahChecklist", JSON.stringify(salahChecklist));
  localStorage.setItem("adhkarSessionCounts", JSON.stringify(adhkarSessionCounts));
  localStorage.setItem("reciter", reciter);
  localStorage.setItem("translation", translation);
  localStorage.setItem("quranAyahFontSize", ayahFontSize.toString());
}

function updateAyahFontSize(size) {
  ayahFontSize = Math.max(14, Math.min(38, size));
  document.documentElement.style.setProperty("--ayah-font-size", `${ayahFontSize}px`);
  const display = document.getElementById("font-size-display");
  if (display) {
    display.textContent = `${ayahFontSize}px`;
  }
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

  document.body.classList.remove("phase-fajr", "phase-dhuhr", "phase-asr", "phase-maghrib", "phase-isha");
  document.body.classList.add(`phase-${currentPhase}`);
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

  const btnSalahAlertHide = document.getElementById("btn-salah-alert-hide");
  if (btnSalahAlertHide) {
    btnSalahAlertHide.addEventListener("click", hideSalahAlert);
  }

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
      tafseerToggle.textContent = "إخفاء التفسير";
    } else {
      tafseerPanel.classList.add("collapsed");
      tafseerToggle.textContent = "عرض التفسير";
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

    // Instant reload with new reciter voice
    if (playingSurah && playingAyahKey) {
      const parts = playingAyahKey.split(":");
      const sId = parseInt(parts[0]);
      const aNum = parseInt(parts[1]);

      const currentSurahMeta = allSurahs.find(s => s.id === sId);
      if (currentSurahMeta) {
        reloadSurahWithNewReciter(currentSurahMeta, aNum);
      }
    }
  });

  const btnFontSmaller = document.getElementById("btn-font-smaller");
  if (btnFontSmaller) {
    btnFontSmaller.addEventListener("click", () => {
      updateAyahFontSize(ayahFontSize - 2);
      saveState();
    });
  }

  const btnFontLarger = document.getElementById("btn-font-larger");
  if (btnFontLarger) {
    btnFontLarger.addEventListener("click", () => {
      updateAyahFontSize(ayahFontSize + 2);
      saveState();
    });
  }

  const tabWudu = document.getElementById("tab-wudu");
  const tabSalah = document.getElementById("tab-salah");

  if (tabWudu && tabSalah) {
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
  }

  window.addEventListener("mousemove", (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    mouse.x = nx;
    mouse.y = ny;
  });

  setupPersistentPlayerListeners();
  initSoundscapes();
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

  // Track previous active view before entering the dedicated player
  if (currentView !== "dedicated-player") {
    previousActiveView = currentView;
  }

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

  // Control persistent player visibility when entering/leaving dedicated-player
  const player = document.getElementById("persistent-player");
  if (player && playingAyahKey) {
    if (newViewId === "dedicated-player") {
      player.classList.add("hidden");
      document.body.classList.remove("persistent-player-active");
    } else {
      player.classList.remove("hidden");
      document.body.classList.add("persistent-player-active");
      updatePersistentPlayerUI();
    }
  }
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
        meaning: s.name,
        ayahCount: s.numberOfAyahs,
        revelation: s.revelationType === "Meccan" ? "مكية" : "مدنية"
      }));
      renderQuran();
    }
  } catch (err) {
    console.error("Failed to fetch surah list from API", err);
    allSurahs = [...FALLBACK_SURAHS];
    renderQuran();
  }
}

function getAudioUrl(surahId, ayahNumber, fallbackUrl) {
  if (reciter === "Ali Jaber") {
    const paddedSurah = String(surahId).padStart(3, '0');
    const paddedAyah = String(ayahNumber).padStart(3, '0');
    return `https://everyayah.com/data/Ali_Jaber_64kbps/${paddedSurah}${paddedAyah}.mp3`;
  }
  return fallbackUrl;
}

async function openSurahModal(surah) {
  openSurah = surah;
  activeAyahKey = null;
  ayahTab = "translation";
  lastScrolledAyahKey = null;

  const modal = document.getElementById("surah-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const loader = document.getElementById("modal-loader");
  const list = document.getElementById("modal-ayahs-list");

  loader.classList.remove("hidden");
  list.classList.add("hidden");

  document.getElementById("modal-surah-name").textContent = surah.name;
  document.getElementById("modal-surah-meta").textContent = `${surah.ayahCount} آية · ${surah.revelation}`;
  document.getElementById("modal-surah-arabic").textContent = surah.arabic;

  try {
    const translationMap = {
      "English": "en.sahih",
      "Français": "fr.hamidullah",
      "Türkçe": "tr.yazir",
      "اردو": "ur.maududi"
    };
    const edition = translationMap[translation] || "en.sahih";

    const isCustomReciter = (reciter === "Ali Jaber");
    const reciterEdition = isCustomReciter ? "ar.alafasy" : (RECITER_MAP[reciter] || "ar.alafasy");
    // Fetch combined simple Arabic text + selected translation + audio reciter URLs
    const url = `https://api.alquran.cloud/v1/surah/${surah.id}/editions/quran-simple,${edition},${reciterEdition}`;
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
        audio: getAudioUrl(surah.id, ayah.numberInSurah, audioAyahs[i].audio)
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
      <p class="loader-text font-serif" style="color: #f43f5e; margin: 0;">فشل تحميل الآيات. تحقق من الاتصال.</p>
      <button class="counter-button gold-glow" onclick="closeModal()" style="width: auto; height: auto; padding: 10px 24px; border-radius: 9999px; font-size: 14px; margin-top: 14px;">إغلاق</button>
    `;
  }
}

function closeModal() {
  const modal = document.getElementById("surah-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  openSurah = null;
  activeAyahKey = null;

  if (playingAyahKey && currentAudio) {
    showPersistentPlayer();
  }
}

function renderSurahModalContent() {
  if (!openSurah || !openSurah.ayahs) return;

  const ayahsList = document.getElementById("modal-ayahs-list");
  ayahsList.innerHTML = "";

  let activeRowElement = null;

  openSurah.ayahs.forEach((ayah) => {
    const key = `${openSurah.id}:${ayah.n}`;
    const isActive = activeAyahKey === key;
    const isPlaying = playingAyahKey === key;

    const row = document.createElement("div");
    row.className = `ayah-row ${isActive ? 'expanded' : ''} ${isPlaying ? 'playing-ayah' : ''}`;
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
            ${isPlaying && currentAudio && !currentAudio.paused ? "❚❚" : "▶"}
          </button>
        </div>
      </div>
      
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

    if (isPlaying) {
      activeRowElement = row;
    }
  });

  // Auto-centering: scroll the playing ayah to the middle of the list
  if (activeRowElement && lastScrolledAyahKey !== playingAyahKey) {
    const targetKey = playingAyahKey;
    const targetAyahNum = targetKey ? targetKey.split(":")[1] : null;
    const isInitialOpen = (lastScrolledAyahKey === null);
    const delay = isInitialOpen ? 450 : 50;

    setTimeout(() => {
      if (playingAyahKey === targetKey && targetAyahNum) {
        const container = document.getElementById("modal-ayahs-list");
        // Look up the element FRESH from the live DOM (not a stale reference)
        const liveRow = document.getElementById(`ayah-row-${targetAyahNum}`);

        if (container && liveRow) {
          const containerHeight = container.clientHeight;
          const rect = liveRow.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();

          const elementOffsetTop = rect.top - containerRect.top + container.scrollTop;
          const elementHeight = rect.height;
          const targetScrollTop = elementOffsetTop - (containerHeight / 2) + (elementHeight / 2);

          container.scrollTop = Math.max(0, targetScrollTop);
        }
      }
    }, delay);
    lastScrolledAyahKey = playingAyahKey;
  }
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

function togglePlayAudio(key, audioUrl, startTime = 0) {
  // If we clicked on the same verse and no seeking is requested
  if (playingAyahKey === key && currentAudio && startTime === 0) {
    if (currentAudio.paused) {
      currentAudio.play().catch(err => console.error("Playback play failed", err));
    } else {
      currentAudio.pause();
    }
    updatePersistentPlayerUI();
    renderSurahModalContent();
    return;
  }

  // If we clicked a different verse or audio is not initialized
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  // Update playingSurah to match openSurah if we are playing from the modal
  if (openSurah) {
    playingSurah = openSurah;
  }

  // Initialize ayahDurations if missing
  if (playingSurah && (!playingSurah.ayahDurations || playingSurah.ayahDurations.length !== playingSurah.ayahs.length)) {
    playingSurah.ayahDurations = new Array(playingSurah.ayahs.length).fill(0);
  }

  playingAyahKey = key;
  renderSurahModalContent();

  currentAudio = new Audio();
  if (reverbLevel > 0) {
    currentAudio.crossOrigin = "anonymous";
  }
  currentAudio.src = audioUrl;
  currentAudio.volume = audioVolume;
  currentAudio.muted = isAudioMuted;

  // Handle CORS errors gracefully
  currentAudio.addEventListener("error", (e) => {
    if (currentAudio && currentAudio.crossOrigin === "anonymous") {
      console.log("[AUDIO] CORS error detected, reloading without crossOrigin");
      const savedTime = currentAudio.currentTime;
      currentAudio.crossOrigin = null;
      currentAudio.src = audioUrl;
      currentAudio.currentTime = savedTime;
      currentAudio.play().catch(err => console.error("Reload play failed", err));
    }
  });

  // Cache duration on load
  currentAudio.addEventListener("durationchange", () => {
    if (playingSurah && playingSurah.ayahDurations && currentAudio) {
      const parts = playingAyahKey.split(":");
      const aNum = parseInt(parts[1]);
      if (currentAudio.duration && !isNaN(currentAudio.duration)) {
        playingSurah.ayahDurations[aNum - 1] = currentAudio.duration;
      }
    }
    updateProgressUI();
  });

  currentAudio.addEventListener("loadedmetadata", () => {
    if (playingSurah && playingSurah.ayahDurations && currentAudio) {
      const parts = playingAyahKey.split(":");
      const aNum = parseInt(parts[1]);
      if (currentAudio.duration && !isNaN(currentAudio.duration)) {
        playingSurah.ayahDurations[aNum - 1] = currentAudio.duration;
      }
    }
    if (startTime > 0 && currentAudio) {
      currentAudio.currentTime = startTime;
    }
    updateProgressUI();
  });

  // Bind progress events
  currentAudio.addEventListener("timeupdate", updateProgressUI);
  currentAudio.addEventListener("play", () => {
    applyAudioEffects();
    updatePersistentPlayerUI();
    renderSurahModalContent();
  });
  currentAudio.addEventListener("pause", () => {
    updatePersistentPlayerUI();
    renderSurahModalContent();
  });

  currentAudio.play().catch(err => console.error("Playback start failed", err));

  currentAudio.addEventListener("ended", () => {
    // Autoplay next verse
    const parts = key.split(":");
    const sId = parseInt(parts[0]);
    const aNum = parseInt(parts[1]);
    const nextKey = `${sId}:${aNum + 1}`;

    // Get the next ayah from playingSurah (since openSurah might be null if modal is closed)
    if (playingSurah && playingSurah.ayahs) {
      const nextAyah = playingSurah.ayahs.find(a => a.n === aNum + 1);
      if (nextAyah) {
        togglePlayAudio(nextKey, nextAyah.audio);
      } else {
        // End of Surah reached
        if (isSurahReplaying) {
          // Loop current Surah
          const firstAyah = playingSurah.ayahs[0];
          const firstKey = `${sId}:1`;
          togglePlayAudio(firstKey, firstAyah.audio);
        } else if (isAutoplayNextActive) {
          // Play next Surah
          playNextSurah();
        } else {
          hidePersistentPlayer();
        }
      }
    } else {
      hidePersistentPlayer();
    }
  });

  // If modal is closed, show persistent player bar
  if (!openSurah) {
    showPersistentPlayer();
  } else {
    // Keep persistent player synced behind modal
    updatePersistentPlayerUI();
  }
}

function showPersistentPlayer() {
  const player = document.getElementById("persistent-player");
  if (!player) return;

  if (currentView === "dedicated-player") {
    player.classList.add("hidden");
    return;
  }

  player.classList.remove("hidden");
  document.body.classList.add("persistent-player-active");

  updatePersistentPlayerUI();
}

function hidePersistentPlayer() {
  const player = document.getElementById("persistent-player");
  if (!player) return;

  player.classList.add("hidden");
  document.body.classList.remove("persistent-player-active");

  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  playingAyahKey = null;
  playingSurah = null;

  // If we are currently inside the dedicated player, exit back to previous view
  if (currentView === "dedicated-player") {
    switchView(previousActiveView);
  }

  renderSurahModalContent();
  updateSurahCardsPlayButtons();
}

function formatTime(secs) {
  if (isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function updateProgressUI() {
  if (!currentAudio || !playingSurah || !playingAyahKey) return;

  const parts = playingAyahKey.split(":");
  const currentANum = parseInt(parts[1]);

  if (!playingSurah.ayahDurations) {
    playingSurah.ayahDurations = new Array(playingSurah.ayahs.length).fill(0);
  }

  if (currentAudio.duration && !isNaN(currentAudio.duration)) {
    playingSurah.ayahDurations[currentANum - 1] = currentAudio.duration;
  }

  // Calculate cumulative elapsed time
  let cumulativeElapsed = 0;
  for (let j = 0; j < currentANum - 1; j++) {
    cumulativeElapsed += playingSurah.ayahDurations[j] || 10;
  }
  cumulativeElapsed += currentAudio.currentTime;

  // Calculate cumulative total duration
  let cumulativeTotal = 0;
  for (let j = 0; j < playingSurah.ayahs.length; j++) {
    if (j === currentANum - 1 && currentAudio.duration && !isNaN(currentAudio.duration)) {
      cumulativeTotal += currentAudio.duration;
    } else {
      cumulativeTotal += playingSurah.ayahDurations[j] || 10;
    }
  }

  const elapsedEl = document.getElementById("player-current-time");
  const durationEl = document.getElementById("player-duration");
  const progressFill = document.getElementById("player-progress-fill");

  if (elapsedEl) elapsedEl.textContent = formatTime(cumulativeElapsed);
  if (durationEl) durationEl.textContent = formatTime(cumulativeTotal);

  if (progressFill && cumulativeTotal > 0) {
    const percentage = (cumulativeElapsed / cumulativeTotal) * 100;
    progressFill.style.width = `${percentage}%`;
  }

  // Dedicated progress elements sync
  const dedicatedElapsedEl = document.getElementById("dedicated-current-time");
  const dedicatedDurationEl = document.getElementById("dedicated-duration");
  const dedicatedProgressFill = document.getElementById("dedicated-progress-fill");

  if (dedicatedElapsedEl) dedicatedElapsedEl.textContent = formatTime(cumulativeElapsed);
  if (dedicatedDurationEl) dedicatedDurationEl.textContent = formatTime(cumulativeTotal);
  if (dedicatedProgressFill && cumulativeTotal > 0) {
    const percentage = (cumulativeElapsed / cumulativeTotal) * 100;
    dedicatedProgressFill.style.width = `${percentage}%`;
  }
}

function updateVolumeUI() {
  const volumeSlider = document.getElementById("player-volume-slider");
  const muteBtn = document.getElementById("player-mute-btn");

  if (volumeSlider) {
    volumeSlider.value = isAudioMuted ? 0 : audioVolume;
  }

  if (muteBtn) {
    const speakerOn = muteBtn.querySelector(".volume-on");
    const speakerMuted = muteBtn.querySelector(".volume-muted");

    if (isAudioMuted || audioVolume === 0) {
      if (speakerOn) speakerOn.classList.add("hidden");
      if (speakerMuted) speakerMuted.classList.remove("hidden");
    } else {
      if (speakerOn) speakerOn.classList.remove("hidden");
      if (speakerMuted) speakerMuted.classList.add("hidden");
    }
  }

  // Dedicated volume elements sync
  const dedicatedVolumeSlider = document.getElementById("dedicated-volume-slider");
  const dedicatedMuteBtn = document.getElementById("dedicated-mute-btn");

  if (dedicatedVolumeSlider) {
    dedicatedVolumeSlider.value = isAudioMuted ? 0 : audioVolume;
  }

  if (dedicatedMuteBtn) {
    const speakerOn = dedicatedMuteBtn.querySelector(".volume-on");
    const speakerMuted = dedicatedMuteBtn.querySelector(".volume-muted");
    if (isAudioMuted || audioVolume === 0) {
      if (speakerOn) speakerOn.classList.add("hidden");
      if (speakerMuted) speakerMuted.classList.remove("hidden");
    } else {
      if (speakerOn) speakerOn.classList.remove("hidden");
      if (speakerMuted) speakerMuted.classList.add("hidden");
    }
  }
}

function updatePersistentPlayerUI() {
  if (!playingSurah || !playingAyahKey) return;

  const parts = playingAyahKey.split(":");
  const aNum = parts[1];

  const surahTitle = document.getElementById("player-surah-title");
  const ayahMeta = document.getElementById("player-ayah-meta");

  if (surahTitle) {
    surahTitle.textContent = `Surah ${playingSurah.name}`;
  }

  if (ayahMeta) {
    ayahMeta.textContent = `Ayah ${aNum} · Recited by ${reciter}`;
  }

  // Update play/pause buttons
  const playBtn = document.getElementById("player-play-btn");
  const isPlaying = (currentAudio && !currentAudio.paused);

  // Toggle dedicated player avatar spin animation
  const orbitRing = document.getElementById("avatar-orbit-ring");
  if (orbitRing) {
    if (isPlaying) {
      orbitRing.classList.add("playing");
    } else {
      orbitRing.classList.remove("playing");
    }
  }

  if (playBtn) {
    const playIcon = playBtn.querySelector(".play-icon");
    const pauseIcon = playBtn.querySelector(".pause-icon");

    if (isPlaying) {
      if (playIcon) playIcon.classList.add("hidden");
      if (pauseIcon) pauseIcon.classList.remove("hidden");
    } else {
      if (playIcon) playIcon.classList.remove("hidden");
      if (pauseIcon) pauseIcon.classList.add("hidden");
    }
  }

  // Toggle mini wave visualizer inside player bar
  const playerWave = document.getElementById("player-wave");
  if (playerWave) {
    if (isPlaying) {
      playerWave.classList.remove("hidden");
    } else {
      playerWave.classList.add("hidden");
    }
  }

  // Disable prev button if first ayah
  const prevBtn = document.getElementById("player-prev-btn");
  if (prevBtn) {
    const isFirst = (parseInt(aNum) === 1);
    prevBtn.disabled = isFirst;
    prevBtn.style.opacity = isFirst ? 0.3 : 1;
    prevBtn.style.pointerEvents = isFirst ? "none" : "auto";
  }

  // Disable next button if last ayah
  const nextBtn = document.getElementById("player-next-btn");
  if (nextBtn) {
    const lastAyahNum = playingSurah.ayahs ? playingSurah.ayahs.length : 0;
    const isLast = (parseInt(aNum) === lastAyahNum);
    nextBtn.disabled = isLast;
    nextBtn.style.opacity = isLast ? 0.3 : 1;
    nextBtn.style.pointerEvents = isLast ? "none" : "auto";
  }

  // Sync replay & autoplay toggle states
  const replayBtn = document.getElementById("player-replay-btn");
  if (replayBtn) {
    replayBtn.classList.toggle("active", isSurahReplaying);
  }
  const autoplayBtn = document.getElementById("player-autoplay-btn");
  if (autoplayBtn) {
    autoplayBtn.classList.toggle("active", isAutoplayNextActive);
  }

  // Dedicated text fields sync
  const decSurahTitle = document.getElementById("dedicated-surah-title");
  const decAyahMeta = document.getElementById("dedicated-ayah-meta");
  const decReciterName = document.getElementById("dedicated-reciter-name");
  const decAvatarMonogram = document.getElementById("dedicated-avatar-monogram");

  if (decSurahTitle) {
    decSurahTitle.textContent = `Surah ${playingSurah.name} (${playingSurah.meaning})`;
  }
  if (decAyahMeta) {
    const total = playingSurah.ayahs ? playingSurah.ayahs.length : 0;
    decAyahMeta.textContent = `Ayah ${aNum} of ${total}`;
  }
  if (decReciterName) {
    decReciterName.textContent = `Sheikh ${reciter}`;
  }
  if (decAvatarMonogram) {
    decAvatarMonogram.textContent = MONOGRAM_MAP[reciter] || "Q";
  }

  // Dedicated play/pause buttons sync
  const decPlayBtn = document.getElementById("dedicated-play-btn");
  if (decPlayBtn) {
    const playIcon = decPlayBtn.querySelector(".play-icon");
    const pauseIcon = decPlayBtn.querySelector(".pause-icon");
    if (isPlaying) {
      if (playIcon) playIcon.classList.add("hidden");
      if (pauseIcon) pauseIcon.classList.remove("hidden");
    } else {
      if (playIcon) playIcon.classList.remove("hidden");
      if (pauseIcon) pauseIcon.classList.add("hidden");
    }
  }

  // Dedicated prev/next button disable state
  const decPrevBtn = document.getElementById("dedicated-prev-btn");
  if (decPrevBtn) {
    const isFirst = (parseInt(aNum) === 1);
    decPrevBtn.disabled = isFirst;
    decPrevBtn.style.opacity = isFirst ? 0.3 : 1;
    decPrevBtn.style.pointerEvents = isFirst ? "none" : "auto";
  }
  const decNextBtn = document.getElementById("dedicated-next-btn");
  if (decNextBtn) {
    const lastAyahNum = playingSurah.ayahs ? playingSurah.ayahs.length : 0;
    const isLast = (parseInt(aNum) === lastAyahNum);
    decNextBtn.disabled = isLast;
    decNextBtn.style.opacity = isLast ? 0.3 : 1;
    decNextBtn.style.pointerEvents = isLast ? "none" : "auto";
  }

  // Dedicated toggle states sync
  const decReplayBtn = document.getElementById("dedicated-replay-btn");
  if (decReplayBtn) {
    decReplayBtn.classList.toggle("active", isSurahReplaying);
  }
  const decAutoplayBtn = document.getElementById("dedicated-autoplay-btn");
  if (decAutoplayBtn) {
    decAutoplayBtn.classList.toggle("active", isAutoplayNextActive);
  }

  updateVolumeUI();
  updateSurahCardsPlayButtons();
}

function applyAudioEffects() {
  if (!currentAudio) return;

  // Set speed playback rate
  currentAudio.playbackRate = currentSpeedRate;

  if (reverbLevel > 0) {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      // If Web Audio source has already been created, we just update parameters
      if (currentAudio.__effectsConnected) {
        if (activeWetGain) {
          activeWetGain.gain.setValueAtTime(reverbLevel, audioCtx.currentTime);
        }
        if (activeDelayNode) {
          activeDelayNode.delayTime.setValueAtTime(reverbSpace, audioCtx.currentTime);
        }
        return;
      }

      // Attempt to link to Web Audio nodes. Will succeed if crossOrigin anonymous works
      const source = audioCtx.createMediaElementSource(currentAudio);

      const delay = audioCtx.createDelay();
      const feedback = audioCtx.createGain();
      const wet = audioCtx.createGain();
      const dry = audioCtx.createGain();

      source.connect(dry);
      dry.connect(audioCtx.destination);

      source.connect(delay);
      delay.connect(feedback);
      feedback.connect(delay); // Feedback loop

      delay.connect(wet);
      wet.connect(audioCtx.destination);

      delay.delayTime.value = reverbSpace;
      feedback.gain.value = 0.45; // Mosque echo persistence
      wet.gain.value = reverbLevel;
      dry.gain.value = 1.0;

      activeDelayNode = delay;
      activeFeedbackGain = feedback;
      activeWetGain = wet;

      currentAudio.__effectsConnected = true;
    } catch (err) {
      console.warn("Could not connect audio effects nodes (CORS or browser context constraint):", err);
    }
  } else {
    if (activeWetGain) {
      activeWetGain.gain.setValueAtTime(0, audioCtx.currentTime);
    }
  }
}

function playSoundscape(id) {
  const config = SOUNDSCAPES_CONFIG.find(item => item.id === id);
  if (!config) return;

  if (soundscapeStates[id]) {
    if (!soundscapeAudios[id]) {
      soundscapeAudios[id] = new Audio(config.url);
      soundscapeAudios[id].loop = true;
      soundscapeAudios[id].crossOrigin = "anonymous";
    }
    soundscapeAudios[id].volume = soundscapeVolumes[id];
    soundscapeAudios[id].play().catch(err => {
      console.log(`Failed to play soundscape ${id}:`, err);
      // Fallback: try playing without anonymous crossOrigin if it fails (CORS check)
      soundscapeAudios[id].crossOrigin = null;
      soundscapeAudios[id].play().catch(e => console.error("Soundscape play failure:", e));
    });
  } else {
    if (soundscapeAudios[id]) {
      soundscapeAudios[id].pause();
    }
  }
}

function initSoundscapes() {
  const grid = document.getElementById("soundscapes-grid");
  if (!grid) return;

  // 1. Build and Render Cards
  grid.innerHTML = SOUNDSCAPES_CONFIG.map(item => `
    <div class="sc-card" id="sc-card-${item.id}" data-id="${item.id}">
      <div class="sc-card-header">
        ${SOUNDSCAPE_SVG_ICONS[item.icon] || ""}
        <span class="sc-name">${item.name}</span>
      </div>
      <div class="sc-card-slider-wrapper">
        <div class="sc-volume-label">
          <span>Volume</span>
          <span id="sc-vol-val-${item.id}">${Math.round(soundscapeVolumes[item.id] * 100)}%</span>
        </div>
        <input type="range" class="sc-slider sc-card-slider" id="sc-slider-${item.id}" min="0" max="1" step="0.05" value="${soundscapeVolumes[item.id]}">
      </div>
    </div>
  `).join("");

  // 2. Bind listeners to each card
  SOUNDSCAPES_CONFIG.forEach(item => {
    const card = document.getElementById(`sc-card-${item.id}`);
    const slider = document.getElementById(`sc-slider-${item.id}`);

    if (card) {
      card.addEventListener("click", (e) => {
        // Ignore clicks directly inside the slider input
        if (e.target.closest(".sc-card-slider-wrapper")) return;

        const id = item.id;
        soundscapeStates[id] = !soundscapeStates[id];
        card.classList.toggle("active", soundscapeStates[id]);

        playSoundscape(id);
      });
    }

    if (slider) {
      slider.addEventListener("input", (e) => {
        const id = item.id;
        const vol = parseFloat(e.target.value);
        soundscapeVolumes[id] = vol;

        const label = document.getElementById(`sc-vol-val-${id}`);
        if (label) {
          label.textContent = `${Math.round(vol * 100)}%`;
        }

        if (soundscapeAudios[id]) {
          soundscapeAudios[id].volume = vol;
        }
      });
    }
  });

  // 3. Search Bar listener
  const searchInput = document.getElementById("soundscapes-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      filterSoundscapes();
    });
  }

  // 4. Category tabs listeners
  const tabs = document.querySelectorAll(".soundscapes-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      filterSoundscapes();
    });
  });

  // Filter logic combining search and categories
  function filterSoundscapes() {
    const searchVal = searchInput ? searchInput.value.toLowerCase() : "";
    const activeTab = document.querySelector(".soundscapes-tab-btn.active");
    const filterCategory = activeTab ? activeTab.getAttribute("data-filter") : "all";

    SOUNDSCAPES_CONFIG.forEach(item => {
      const card = document.getElementById(`sc-card-${item.id}`);
      if (!card) return;

      const matchesSearch = item.name.toLowerCase().includes(searchVal);
      const matchesCategory = (filterCategory === "all" || item.category === filterCategory);

      if (matchesSearch && matchesCategory) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  // 5. Global Actions: Mute All
  const muteAllBtn = document.getElementById("btn-soundscapes-mute-all");
  if (muteAllBtn) {
    muteAllBtn.addEventListener("click", () => {
      SOUNDSCAPES_CONFIG.forEach(item => {
        soundscapeStates[item.id] = false;
        const card = document.getElementById(`sc-card-${item.id}`);
        if (card) card.classList.remove("active");

        if (soundscapeAudios[item.id]) {
          soundscapeAudios[item.id].pause();
        }
      });
    });
  }

  // 6. Global Actions: Reset
  const resetBtn = document.getElementById("btn-soundscapes-reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      SOUNDSCAPES_CONFIG.forEach(item => {
        soundscapeStates[item.id] = false;
        soundscapeVolumes[item.id] = 0.5;

        const card = document.getElementById(`sc-card-${item.id}`);
        const slider = document.getElementById(`sc-slider-${item.id}`);
        const label = document.getElementById(`sc-vol-val-${item.id}`);

        if (card) card.classList.remove("active");
        if (slider) slider.value = 0.5;
        if (label) label.textContent = "50%";

        if (soundscapeAudios[item.id]) {
          soundscapeAudios[item.id].pause();
          soundscapeAudios[item.id].volume = 0.5;
        }
      });
    });
  }
}

function setupPersistentPlayerListeners() {
  const playBtn = document.querySelector("#player-play-btn");
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (!playingAyahKey || !playingSurah) return;

      if (currentAudio) {
        if (currentAudio.paused) {
          currentAudio.play().catch(err => console.error("Play failed", err));
        } else {
          currentAudio.pause();
        }
        updatePersistentPlayerUI();
        renderSurahModalContent();
      }
    });
  }

  const prevBtn = document.getElementById("player-prev-btn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      playAdjacentAyah(-1);
    });
  }

  const nextBtn = document.getElementById("player-next-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      playAdjacentAyah(1);
    });
  }

  const volumeSlider = document.getElementById("player-volume-slider");
  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      audioVolume = parseFloat(e.target.value);
      if (currentAudio) {
        currentAudio.volume = audioVolume;
      }
      if (audioVolume === 0) {
        isAudioMuted = true;
      } else {
        isAudioMuted = false;
      }
      updateVolumeUI();
    });
  }

  const muteBtn = document.getElementById("player-mute-btn");
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      isAudioMuted = !isAudioMuted;
      if (currentAudio) {
        currentAudio.muted = isAudioMuted;
      }
      updateVolumeUI();
    });
  }

  const progressBg = document.getElementById("player-progress-bg");
  if (progressBg) {
    progressBg.addEventListener("click", (e) => {
      if (!currentAudio || !playingSurah || !playingAyahKey) return;

      // Calculate total duration (cumulative)
      const parts = playingAyahKey.split(":");
      const currentANum = parseInt(parts[1]);

      if (!playingSurah.ayahDurations) {
        playingSurah.ayahDurations = new Array(playingSurah.ayahs.length).fill(0);
      }

      let cumulativeTotal = 0;
      for (let j = 0; j < playingSurah.ayahs.length; j++) {
        if (j === currentANum - 1 && currentAudio.duration && !isNaN(currentAudio.duration)) {
          cumulativeTotal += currentAudio.duration;
        } else {
          cumulativeTotal += playingSurah.ayahDurations[j] || 10;
        }
      }

      const rect = progressBg.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const percentage = clickX / width;
      const targetTime = percentage * cumulativeTotal;

      // Find which Ayah this targetTime falls into
      let accumulatedTime = 0;
      let targetAyahIndex = 0;
      let relativeOffset = 0;

      for (let j = 0; j < playingSurah.ayahs.length; j++) {
        const dur = playingSurah.ayahDurations[j] || 10;
        if (accumulatedTime + dur >= targetTime) {
          targetAyahIndex = j;
          relativeOffset = targetTime - accumulatedTime;
          break;
        }
        accumulatedTime += dur;
        // Fallback for end of track
        if (j === playingSurah.ayahs.length - 1) {
          targetAyahIndex = j;
          relativeOffset = dur - 0.1; // seek to just before end
        }
      }

      const targetAyah = playingSurah.ayahs[targetAyahIndex];
      const targetKey = `${playingSurah.id}:${targetAyah.n}`;

      // Play target verse at offset
      togglePlayAudio(targetKey, targetAyah.audio, relativeOffset);
    });
  }

  const closePlayerBtn = document.getElementById("player-close-btn");
  if (closePlayerBtn) {
    closePlayerBtn.addEventListener("click", () => {
      hidePersistentPlayer();
    });
  }

  const replayBtn = document.getElementById("player-replay-btn");
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      isSurahReplaying = !isSurahReplaying;
      replayBtn.classList.toggle("active", isSurahReplaying);
    });
  }

  const autoplayBtn = document.getElementById("player-autoplay-btn");
  if (autoplayBtn) {
    autoplayBtn.addEventListener("click", () => {
      isAutoplayNextActive = !isAutoplayNextActive;
      autoplayBtn.classList.toggle("active", isAutoplayNextActive);
    });
  }
}

function playAdjacentAyah(direction) {
  if (!playingAyahKey || !playingSurah || !playingSurah.ayahs) return;

  const parts = playingAyahKey.split(":");
  const sId = parseInt(parts[0]);
  const aNum = parseInt(parts[1]);
  const targetNum = aNum + direction;

  const targetAyah = playingSurah.ayahs.find(a => a.n === targetNum);
  if (targetAyah) {
    const targetKey = `${sId}:${targetNum}`;

    // Play the target ayah
    togglePlayAudio(targetKey, targetAyah.audio);
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
}

function renderHeader() {
  const cfg = PHASES[currentPhase];

  document.getElementById("header-phase-label").textContent = cfg.arabic;

  const greetEn = document.getElementById("header-greeting-en");
  if (greetEn) greetEn.style.display = "none";

  const greetAr = document.getElementById("header-greeting-ar");
  if (greetAr) greetAr.textContent = cfg.greetingArabic;

  const dateStr = selectedDate.toLocaleDateString("ar-EG", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  document.getElementById("gregorian-date").textContent = dateStr;

  const hijri = getHijriApprox(selectedDate);
  const hijriStr = `${hijri.day} ${hijri.month} ${hijri.year} هـ`;
  document.getElementById("hijri-date").textContent = hijriStr;

  // Big Dashboard Date elements
  const dayName = selectedDate.toLocaleDateString("ar-EG", { weekday: "long" });
  const gregorianDateOnly = selectedDate.toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric" }) + " م";

  const bigDayEl = document.getElementById("dashboard-big-day");
  if (bigDayEl) bigDayEl.textContent = dayName;

  const bigDatesEl = document.getElementById("dashboard-big-dates");
  if (bigDatesEl) bigDatesEl.textContent = `${hijriStr} • ${gregorianDateOnly}`;
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
      <svg class="moon-svg" width="150" height="150" viewBox="0 0 150 150" style="overflow: visible; filter: drop-shadow(0 0 20px ${color}aa) drop-shadow(0 0 50px ${color}33);">
        <defs>
          <radialGradient id="moonGrad" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stop-color="#fffaf0" />
            <stop offset="55%" stop-color="${color}" />
            <stop offset="100%" stop-color="#b8905a" />
          </radialGradient>
        </defs>
        <path d="M75 15 A60 60 0 1 0 75 135 A48 60 0 1 1 75 15 Z" fill="url(#moonGrad)" />
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
  const currentHHMM = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

  PRAYERS.forEach(p => {
    if (p.name === "Sunrise") return;
    if (p.time === currentHHMM) {
      if (lastAlertedPrayer !== p.name) {
        lastAlertedPrayer = p.name;
        showSalahAlert(p);
      }
    }
  });

  if (lastAlertedPrayer && !PRAYERS.some(p => p.time === currentHHMM)) {
    lastAlertedPrayer = "";
  }

  const nameEl = document.getElementById("next-prayer-name");
  const arabicEl = document.getElementById("next-prayer-arabic");
  const labelEl = document.getElementById("countdown-label");
  const countdownDisplay = document.querySelector(".countdown-display");

  if (!isViewingToday) {
    let returnBtn = document.getElementById("return-live-btn");
    if (!returnBtn) {
      returnBtn = document.createElement("button");
      returnBtn.id = "return-live-btn";
      returnBtn.className = "return-live-btn gold-glow";
      returnBtn.textContent = "Return to Live Times";
      returnBtn.addEventListener("click", () => {
        resetToToday();
      });
      if (countdownDisplay) {
        countdownDisplay.parentNode.insertBefore(returnBtn, countdownDisplay);
      }
    }

    if (returnBtn) returnBtn.style.display = "block";
    if (countdownDisplay) countdownDisplay.style.display = "none";

    if (labelEl) labelEl.textContent = "Viewing selected date";
    if (nameEl) {
      nameEl.textContent = selectedDate.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
    }
    if (arabicEl) {
      const hijri = getHijriApprox(selectedDate);
      arabicEl.textContent = `${hijri.day} ${hijri.month}`;
      arabicEl.style.fontSize = "16px";
    }
    return;
  }

  // Restore live countdown visibility
  if (countdownDisplay) countdownDisplay.style.display = "flex";
  const returnBtn = document.getElementById("return-live-btn");
  if (returnBtn) returnBtn.style.display = "none";

  if (labelEl) labelEl.textContent = "Time to next prayer";

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

  const hrsEl = document.getElementById("countdown-hours");
  const minsEl = document.getElementById("countdown-minutes");
  const secsEl = document.getElementById("countdown-seconds");

  if (nameEl) {
    const ARABIC_NAMES = {
      Fajr: "الفجر",
      Dhuhr: "الظهر",
      Asr: "العصر",
      Maghrib: "المغرب",
      Isha: "العشاء"
    };

    let displayName = nextPrayer.name;
    let displayArabic = ARABIC_NAMES[nextPrayer.name] || "";

    if (nextPrayer.name === "Dhuhr" && now.getDay() === 5) {
      displayName = "الجمعة";
      displayArabic = "الجمعة";
    }

    nameEl.textContent = displayArabic;

    if (arabicEl) {
      arabicEl.textContent = "";
      arabicEl.style.fontSize = ""; // Reset custom font size
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

  const isFriday = selectedDate.getDay() === 5;

  strip.innerHTML = PRAYERS.map(p => {
    const isCurrent = isViewingToday && p.name.toLowerCase() === currentPhase;
    let displayArabic = p.arabic;

    if (p.name === "Dhuhr" && isFriday) {
      displayArabic = "الجمعة";
    }

    return `
      <div class="strip-item ${isCurrent ? 'active' : ''}">
        <span class="strip-arabic-tag font-arabic">${displayArabic}</span>
        <div class="strip-indicator"></div>
        <span class="strip-name">${displayArabic}</span>
        <span class="strip-time">${p.time}</span>
      </div>
    `;
  }).join("");
}

function renderDashboard() {
  updateCountdown();
  renderPrayersStrip();
  renderDashboardAdhkarWidget();
  const cfg = PHASES[currentPhase];

  const seed = getDailySeed(selectedDate);

  const dailyAyah = DAILY_AYAHS[seed % DAILY_AYAHS.length];
  document.getElementById("ayah-arabic").textContent = dailyAyah.ar;
  document.getElementById("ayah-translation").textContent = dailyAyah.en;
  document.querySelector("#ayah-tafseer p").textContent = dailyAyah.tafseer;

  const dailyDua = DAILY_DUAS[seed % DAILY_DUAS.length];
  document.getElementById("dua-arabic").textContent = dailyDua.ar;
  document.getElementById("dua-translation").textContent = dailyDua.en;

  const dailyHadith = DAILY_HADITHS[seed % DAILY_HADITHS.length];
  const hadithTextEl = document.getElementById("hadith-text");
  const hadithRefEl = document.getElementById("hadith-ref");
  if (hadithTextEl) hadithTextEl.textContent = dailyHadith.text;
  if (hadithRefEl) hadithRefEl.textContent = dailyHadith.ref;

  const dailyReminder = DAILY_REMINDERS[seed % DAILY_REMINDERS.length];
  const reminderTextEl = document.getElementById("spiritual-reminder-text");
  if (reminderTextEl) reminderTextEl.textContent = dailyReminder;

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
  dialText.textContent = cfg.arabic;
}

function renderDashboardAdhkarWidget() {
  const titleEl = document.getElementById("adhkar-widget-title");
  const descEl = document.getElementById("adhkar-widget-description");
  const redirectBtn = document.getElementById("btn-adhkar-redirect");
  if (!titleEl || !descEl || !redirectBtn) return;

  const now = new Date();
  const hrs = now.getHours();
  let category = "salah";
  let title = "";
  let desc = "";

  if (hrs >= 4 && hrs < 12) {
    category = "morning";
    title = "أذكار الصباح";
    desc = "ابدأ يومك بالحمد والتحصين. حثّ النبي ﷺ على تلاوة أذكار الصباح بين الفجر والشروق للسكينة والبركة.";
  } else if (hrs >= 16 && hrs < 22) {
    category = "evening";
    title = "أذكار المساء";
    desc = "مع اقتراب نهاية اليوم، خصص لحظات لشكر الله والاستعاذة به قبل حلول الليل. تُقرأ بين العصر والمغرب.";
  } else if (hrs >= 22 || hrs < 4) {
    category = "sleep";
    title = "أذكار النوم";
    desc = "هيئ قلبك للراحة. اقرأ آية الكرسي والمعوذات لحفظ نفسك طوال الليل كما علمنا النبي ﷺ.";
  } else {
    category = "salah";
    title = "أذكار بعد الصلاة";
    desc = "بعد إتمام الصلوات المفروضة، اذكر الله بالتسبيح والتحميد والتكبير لمضاعفة أجرك.";
  }

  titleEl.textContent = title;
  descEl.textContent = desc;

  // Clear previous listeners to prevent multiple triggers
  const newBtn = redirectBtn.cloneNode(true);
  redirectBtn.parentNode.replaceChild(newBtn, redirectBtn);

  newBtn.addEventListener("click", () => {
    switchView("adhkar");
    startAdhkarSession(category);
  });
}

function showSalahAlert(prayer) {
  const modal = document.getElementById("salah-alert-modal");
  if (!modal) return;

  // Reset previous classes
  modal.className = "salah-alert-overlay";

  const isFriday = new Date().getDay() === 5;
  let className = prayer.name.toLowerCase();
  let displayName = prayer.name;
  let displayArabic = prayer.arabic;

  if (prayer.name === "Dhuhr" && isFriday) {
    className = "jumuah";
    displayName = "الجمعة";
    displayArabic = "الجمعة";
  }

  modal.classList.add(className);

  document.getElementById("salah-alert-arabic-name").textContent = displayArabic;
  document.getElementById("salah-alert-title").textContent = `حان وقت صلاة ${displayArabic}`;

  modal.classList.add("visible");

  if (alertDismissTimeout) {
    clearTimeout(alertDismissTimeout);
  }

  // Auto dismiss after 1 hour (3600000 ms)
  alertDismissTimeout = setTimeout(() => {
    hideSalahAlert();
  }, 3600000);
}

function hideSalahAlert() {
  const modal = document.getElementById("salah-alert-modal");
  if (modal) {
    modal.classList.remove("visible");
  }
  if (alertDismissTimeout) {
    clearTimeout(alertDismissTimeout);
    alertDismissTimeout = null;
  }
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
          <h3 class="surah-name">${surah.arabic}</h3>
          <p class="surah-meta">${surah.ayahCount} آية · ${surah.revelation}</p>
        </div>
      </div>
      <div class="surah-info-right">
        <span dir="rtl" class="surah-arabic">${surah.arabic}</span>
        <button class="surah-card-play-btn" data-surah-id="${surah.id}" title="تشغيل السورة كاملة">
          <svg class="play-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          <svg class="pause-svg hidden" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
          <span class="card-spinner hidden"></span>
        </button>
      </div>
    `;

    const playBtn = card.querySelector(".surah-card-play-btn");
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      playFullSurah(surah, playBtn);
    });

    card.addEventListener("click", () => {
      openSurahModal(surah);
    });

    container.appendChild(card);

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 12);
  });

  // Sync button states on render
  updateSurahCardsPlayButtons();
}

function renderSalahHub() {
  const currentIdx = isViewingToday
    ? ({ fajr: 0, dhuhr: 2, asr: 3, maghrib: 4, isha: 5 }[currentPhase] || 5)
    : -1;

  const prayerGrid = document.getElementById("prayer-times-grid");
  if (!prayerGrid) return;
  prayerGrid.innerHTML = "";

  PRAYERS.forEach((p, i) => {
    const isActive = i === currentIdx;
    const card = document.createElement("div");
    card.className = `glass-card prayer-card ${isActive ? 'active' : ''}`;

    card.innerHTML = `
      <div class="prayer-title">${p.arabic}</div>
      <div class="prayer-time">${p.time}</div>
      ${isActive ? `<div class="prayer-now-tag">الآن</div>` : ""}
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
  if (!checklistContainer) return;
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

function playHapticTick() {
  try {
    const ctx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (!audioCtx) audioCtx = ctx;

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(900, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {
    console.warn("Tactile audio feedback failed to play: ", e);
  }
}

function initAdhkar() {
  const btnExit = document.getElementById("btn-session-exit");
  if (btnExit) btnExit.addEventListener("click", exitAdhkarSession);

  const btnReset = document.getElementById("btn-session-reset");
  if (btnReset) btnReset.addEventListener("click", resetActiveSessionCounts);

  const btnPrev = document.getElementById("btn-session-prev");
  if (btnPrev) btnPrev.addEventListener("click", prevSessionItem);

  const btnNext = document.getElementById("btn-session-next");
  if (btnNext) btnNext.addEventListener("click", nextSessionItem);

  const btnDone = document.getElementById("btn-celebration-done");
  if (btnDone) btnDone.addEventListener("click", exitAdhkarSession);

  const beadBtn = document.getElementById("adhkar-bead-button");
  if (beadBtn) {
    beadBtn.addEventListener("click", () => {
      incrementSessionCount();
    });
  }

  if (window._adhkarKeydownBound) {
    window.removeEventListener("keydown", window._adhkarKeydownBound);
  }
  window._adhkarKeydownBound = (e) => {
    if (!isSessionActive) return;
    if (e.code === "Space") {
      e.preventDefault();
      incrementSessionCount();
    } else if (e.code === "ArrowLeft") {
      prevSessionItem();
    } else if (e.code === "ArrowRight") {
      nextSessionItem();
    }
  };
  window.addEventListener("keydown", window._adhkarKeydownBound);

  renderAdhkar();
}

function renderAdhkar() {
  isSessionActive = false;
  const ov = document.getElementById("adhkar-overview-panel");
  const ss = document.getElementById("adhkar-session-panel");
  const cl = document.getElementById("adhkar-celebration-screen");
  if (ov) ov.classList.remove("hidden");
  if (ss) ss.classList.add("hidden");
  if (cl) cl.classList.add("hidden");
}

function startAdhkarSession(category) {
  sessionCategory = category;
  sessionActiveIndex = 0;
  isSessionActive = true;

  const ov = document.getElementById("adhkar-overview-panel");
  const ss = document.getElementById("adhkar-session-panel");
  const cl = document.getElementById("adhkar-celebration-screen");
  if (ov) ov.classList.add("hidden");
  if (ss) ss.classList.remove("hidden");
  if (cl) cl.classList.add("hidden");

  renderSessionItem();
}

function renderSessionItem() {
  const items = ADHKAR[sessionCategory] || [];
  if (items.length === 0) return;

  const item = items[sessionActiveIndex];
  const key = `${sessionCategory}-${sessionActiveIndex}`;
  const count = adhkarSessionCounts[key] || 0;

  const titleEl = document.getElementById("session-adhkar-title");
  const arEl = document.getElementById("session-adhkar-ar");
  const translitEl = document.getElementById("session-adhkar-translit");
  const transEl = document.getElementById("session-adhkar-translation");

  if (titleEl) titleEl.textContent = item.title;
  if (arEl) arEl.textContent = item.ar;
  if (translitEl) translitEl.textContent = item.translit;
  if (transEl) transEl.textContent = item.translation || item.en || "";

  const valEl = document.getElementById("bead-count-val");
  const targetEl = document.getElementById("bead-target-val");
  if (valEl) valEl.textContent = count;
  if (targetEl) targetEl.textContent = `/ ${item.target}`;

  const fillEl = document.getElementById("session-bar-fill");
  const labelEl = document.getElementById("session-progress-text");
  const progressPercent = ((sessionActiveIndex) / items.length) * 100;
  if (fillEl) fillEl.style.width = `${progressPercent}%`;
  if (labelEl) labelEl.textContent = `الذكر ${sessionActiveIndex + 1} من ${items.length}`;

  const prevBtn = document.getElementById("btn-session-prev");
  const nextBtn = document.getElementById("btn-session-next");
  if (prevBtn) prevBtn.disabled = (sessionActiveIndex === 0);
  if (nextBtn) nextBtn.disabled = (sessionActiveIndex === items.length - 1);

  const circ = 339.29;
  const progressRatio = Math.min(count, item.target) / item.target;
  const barOffset = circ - progressRatio * circ;
  const progressBar = document.getElementById("bead-progress-bar");
  if (progressBar) {
    progressBar.style.strokeDashoffset = barOffset;
  }

  const beadButton = document.getElementById("adhkar-bead-button");
  if (beadButton) {
    if (count >= item.target) {
      beadButton.classList.add("completed-bead");
    } else {
      beadButton.classList.remove("completed-bead");
    }
  }
}

function incrementSessionCount() {
  const items = ADHKAR[sessionCategory] || [];
  if (items.length === 0) return;

  const item = items[sessionActiveIndex];
  const key = `${sessionCategory}-${sessionActiveIndex}`;
  let count = adhkarSessionCounts[key] || 0;

  if (count < item.target) {
    playHapticTick();
    count++;
    adhkarSessionCounts[key] = count;
    saveState();

    adhkarCount++;
    const counterValEl = document.getElementById("counter-value");
    if (counterValEl) counterValEl.textContent = adhkarCount;

    const beadButton = document.getElementById("adhkar-bead-button");
    if (beadButton) {
      beadButton.classList.add("tapped");
      setTimeout(() => beadButton.classList.remove("tapped"), 150);
    }

    renderSessionItem();

    if (count >= item.target) {
      playSuccessChime();

      setTimeout(() => {
        if (sessionActiveIndex < items.length - 1) {
          nextSessionItem();
        } else {
          const ss = document.getElementById("adhkar-session-panel");
          const cl = document.getElementById("adhkar-celebration-screen");
          if (ss) ss.classList.add("hidden");
          if (cl) cl.classList.remove("hidden");
        }
      }, 700);
    }
  }
}

function playSuccessChime() {
  try {
    const ctx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (!audioCtx) audioCtx = ctx;

    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, ctx.currentTime);
    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12);
    osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.24);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {
    console.warn("Success chime audio error: ", e);
  }
}

function prevSessionItem() {
  if (sessionActiveIndex > 0) {
    sessionActiveIndex--;
    renderSessionItem();
  }
}

function nextSessionItem() {
  const items = ADHKAR[sessionCategory] || [];
  if (sessionActiveIndex < items.length - 1) {
    sessionActiveIndex++;
    renderSessionItem();
  }
}

function exitAdhkarSession() {
  isSessionActive = false;
  renderAdhkar();
}

function resetActiveSessionCounts() {
  const items = ADHKAR[sessionCategory] || [];
  items.forEach((item, index) => {
    const key = `${sessionCategory}-${index}`;
    adhkarSessionCounts[key] = 0;
  });
  saveState();
  renderSessionItem();
}

/* ---------------------------------- LEARNING JOURNEY ---------------------------------- */

let activeQuizQuestions = [];

async function fetchDailyQuizQuestions() {
  const cachedQuestions = localStorage.getItem("daily_quiz_questions");
  const cachedDate = localStorage.getItem("daily_quiz_date");
  const todayStr = new Date().toDateString();

  if (cachedQuestions && cachedDate === todayStr) {
    try {
      const parsed = JSON.parse(cachedQuestions);
      if (parsed && parsed.length > 5) {
        activeQuizQuestions = parsed;
        console.log("Loaded cached daily quiz questions. Count:", activeQuizQuestions.length);
        return;
      }
    } catch (e) {
      console.warn("Error parsing cached quiz questions, refetching...", e);
    }
  }

  // Get user-configured Gemini API Key
  const userKey = localStorage.getItem("gemini_api_key");
  if (!userKey) {
    console.log("No Gemini API key configured. Using static fallback questions.");
    activeQuizQuestions = [...QUIZ_QUESTIONS];
    return;
  }

  // Generate 20 questions
  const prompt = `أنت خبير في التربية الإسلامية والتاريخ الإسلامي والسيرة النبوية الشريفة. قم بتوليد 20 سؤالاً متعدد الخيارات (MCQ) لبرنامج مسابقات ديني وثقافي.
يجب أن تغطي الأسئلة مواضيع متنوعة مثل: السيرة النبوية الشريفة، الغزوات، القرآن الكريم وعلومه، الأنبياء والرسل عليهم السلام، الفقه، الأخلاق والمعاملات الإسلامية، والتاريخ الإسلامي العام.
يجب أن يكون الإخراج بصيغة JSON فقط كصفوفة من الكائنات (Array of Objects) بدون أي كلام أو علامات تنصيص مائلة أو لغة markdown.
شكل الكائن لكل سؤال:
{
  "q": "نص السؤال باللغة العربية الفصحى بصياغة بليغة وواضحة ودقيقة جداً",
  "choices": ["الخيار الأول", "الخيار الثاني", "الخيار الثالث", "الخيار الرابع"],
  "answer": 0, // الرقم التعريفي للجواب الصحيح من 0 إلى 3
  "exp": "شرح مبسط وموثوق علمياً وتاريخياً يوضح المعلومة ويثري ثقافة القارئ باللغة العربية"
}
تأكد بنسبة 100% أن الأسئلة دقيقة علمياً وتاريخياً ولا تحتوي على أي أخطاء.`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${userKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (response.ok) {
      const data = await response.json();
      const text = data.candidates[0].content.parts[0].text;
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed) && parsed.length > 0) {
        activeQuizQuestions = parsed;
        localStorage.setItem("daily_quiz_questions", JSON.stringify(parsed));
        localStorage.setItem("daily_quiz_date", todayStr);
        console.log("Successfully fetched and cached 20 new questions from Gemini.");
        return;
      }
    }
    throw new Error("Invalid response or API key restricted.");
  } catch (err) {
    console.error("Gemini API call failed, falling back to static questions:", err);
    activeQuizQuestions = [...QUIZ_QUESTIONS];
  }
}

function initQuiz() {
  const nextBtn = document.getElementById("quiz-next-btn");
  if (!nextBtn) return;

  // Toggle Settings Panel
  const configBtn = document.getElementById("btn-quiz-key-config");
  const configPanel = document.getElementById("quiz-key-config-panel");
  if (configBtn && configPanel) {
    configBtn.onclick = () => {
      configPanel.classList.toggle("hidden");
    };
  }

  // Pre-fill key if exists
  const keyInput = document.getElementById("quiz-api-key-input");
  const saveKeyBtn = document.getElementById("btn-save-quiz-key");
  const clearKeyBtn = document.getElementById("btn-clear-quiz-key");
  const statusMsg = document.getElementById("quiz-key-status");

  if (keyInput) {
    const savedKey = localStorage.getItem("gemini_api_key");
    if (savedKey) {
      keyInput.value = savedKey;
    }
  }

  // Save key button handler
  if (saveKeyBtn && keyInput && statusMsg) {
    saveKeyBtn.onclick = async () => {
      const newKey = keyInput.value.trim();
      if (!newKey) {
        statusMsg.className = "key-status-msg error";
        statusMsg.textContent = "الرجاء إدخال مفتاح صالح.";
        return;
      }
      statusMsg.className = "key-status-msg";
      statusMsg.textContent = "جاري تفعيل المفتاح وجلب الأسئلة الجديدة...";
      
      localStorage.setItem("gemini_api_key", newKey);
      localStorage.removeItem("daily_quiz_questions"); // Clear previous cached questions to force refetch
      localStorage.removeItem("daily_quiz_date");

      await fetchDailyQuizQuestions();

      if (activeQuizQuestions.length > 5) {
        statusMsg.className = "key-status-msg success";
        statusMsg.textContent = "تم حفظ وتفعيل المفتاح بنجاح! تم تحميل ٢٠ سؤالاً جديداً.";
        quizCurrentIndex = 0;
        quizScore = 0;
        quizAnswered = false;
        renderQuizQuestion();
      } else {
        statusMsg.className = "key-status-msg error";
        statusMsg.textContent = "فشل التحقق من المفتاح أو لم يدعم خادم Gemini الطلب. الرجاء التأكد من صحة المفتاح.";
        localStorage.removeItem("gemini_api_key");
      }
    };
  }

  // Clear key button handler
  if (clearKeyBtn && keyInput && statusMsg) {
    clearKeyBtn.onclick = () => {
      localStorage.removeItem("gemini_api_key");
      localStorage.removeItem("daily_quiz_questions");
      localStorage.removeItem("daily_quiz_date");
      keyInput.value = "";
      statusMsg.className = "key-status-msg success";
      statusMsg.textContent = "تم إزالة المفتاح والعودة للأسئلة الافتراضية.";
      activeQuizQuestions = [...QUIZ_QUESTIONS];
      quizCurrentIndex = 0;
      quizScore = 0;
      quizAnswered = false;
      renderQuizQuestion();
    };
  }

  nextBtn.addEventListener("click", () => {
    if (quizCurrentIndex < activeQuizQuestions.length - 1) {
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
  if (activeQuizQuestions.length === 0) {
    activeQuizQuestions = [...QUIZ_QUESTIONS];
  }
  const currentQuestion = activeQuizQuestions[quizCurrentIndex];

  // Progress Bar updates
  const progressText = document.getElementById("quiz-progress-text");
  const progressBar = document.getElementById("quiz-progress-bar");
  if (progressText && progressBar) {
    const percent = ((quizCurrentIndex + 1) / activeQuizQuestions.length) * 100;
    progressText.textContent = `السؤال ${quizCurrentIndex + 1} من ${activeQuizQuestions.length}`;
    progressBar.style.width = `${percent}%`;
  }

  // Question Text
  const qText = document.getElementById("quiz-question-text");
  if (qText) qText.textContent = currentQuestion.q;

  // Answers choices list
  const choicesBox = document.getElementById("quiz-choices");
  if (choicesBox) {
    choicesBox.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.className = "quiz-choice-btn";
      btn.textContent = choice;
      btn.addEventListener("click", () => handleQuizAnswer(index, btn));
      choicesBox.appendChild(btn);
    });
  }

  // Hide next button and explanations
  const expBox = document.getElementById("quiz-explanation");
  if (expBox) expBox.classList.add("hidden");

  if (document.getElementById("quiz-next-btn")) {
    document.getElementById("quiz-next-btn").classList.add("hidden");
  }

  if (document.getElementById("quiz-score")) {
    document.getElementById("quiz-score").textContent = Math.round(quizScore);
  }
}

function handleQuizAnswer(choiceIndex, clickedBtn) {
  if (quizAnswered) return;
  quizAnswered = true;

  const currentQuestion = activeQuizQuestions[quizCurrentIndex];
  const isCorrect = choiceIndex === currentQuestion.answer;

  const buttons = document.querySelectorAll(".quiz-choices .quiz-choice-btn");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === currentQuestion.answer) {
      btn.classList.add("correct");
    }
  });

  if (isCorrect) {
    quizScore += 100 / activeQuizQuestions.length; // Dynamic scoring (100 max)
    const scoreEl = document.getElementById("quiz-score");
    if (scoreEl) scoreEl.textContent = Math.round(quizScore);
  } else {
    clickedBtn.classList.add("incorrect");
  }

  // Show explanation details
  const expBox = document.getElementById("quiz-explanation");
  if (expBox) {
    expBox.textContent = currentQuestion.exp;
    expBox.classList.remove("hidden");
  }

  // Next Question triggers
  const nextBtn = document.getElementById("quiz-next-btn");
  if (nextBtn) {
    nextBtn.classList.remove("hidden");
    if (quizCurrentIndex === activeQuizQuestions.length - 1) {
      nextBtn.textContent = "إعادة الاختبار";
    } else {
      nextBtn.textContent = "السؤال التالي";
    }
  }
}

/* ---------------------------------- MURSHID AI ASSISTANT ---------------------------------- */

function initChat() {
  const sendBtn = document.getElementById("chat-send-btn");
  const chatInput = document.getElementById("chat-input");
  if (!sendBtn || !chatInput) return;

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
  typingBubble.textContent = "مرشد يكتب...";
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

  if (q.includes("وضوء") || q.includes("wudu") || q.includes("أتوضأ")) {
    return "الوضوء يبدأ بالنية، ثم غسل اليدين ثلاث مرات، والمضمضة والاستنشاق ثلاثاً، وغسل الوجه ثلاثاً، وغسل اليدين إلى المرفقين ثلاثاً، ومسح الرأس والأذنين، وغسل القدمين إلى الكعبين ثلاثاً. هذه الخطوات تطهر الجسد والروح قبل الصلاة.";
  }
  if (q.includes("صلاة") || q.includes("salah") || q.includes("الصلاة")) {
    return "الصلاة هي الركن الثاني من أركان الإسلام، وهي صلة مباشرة بينك وبين الله. الصلوات الخمس (الفجر، الظهر، العصر، المغرب، العشاء) هي محطات روحية تبقيك على اتصال بخالقك طوال اليوم.";
  }
  if (q.includes("صبر") || q.includes("تيسير") || q.includes("صعوبة")) {
    return "قال الله تعالى: 'واستعينوا بالصبر والصلاة وإنها لكبيرة إلا على الخاشعين' (البقرة ٢:٤٥). تذكر أن مع العسر يسراً، وصبرك على الابتلاءات له أجر عظيم.";
  }
  if (q.includes("حديث") || q.includes("سنة") || q.includes("خلق")) {
    return "قال النبي ﷺ: 'أحب الأعمال إلى الله أدومها وإن قلّ' (البخاري). المداومة على الأعمال الصغيرة من السنة تقود إلى نمو روحي كبير.";
  }
  if (q.includes("إحسان") || q.includes("ihsan")) {
    return "الإحسان هو أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك. هو قمة الإيمان حيث يلتقي الإخلاص مع الإتقان في العمل.";
  }
  if (q.includes("دعاء") || q.includes("دعوة")) {
    return "قال النبي ﷺ: 'الدعاء هو العبادة' (الترمذي). يمكنك الدعاء في أي وقت. أفضل أوقات الإجابة هي في السجود وفي الثلث الأخير من الليل.";
  }
  if (q.includes("رمضان") || q.includes("صيام") || q.includes("صوم")) {
    return "رمضان شهر التطهير الروحي والصدقة. الصيام يعلّم ضبط النفس والتعاطف مع المحتاجين، ويوجه التركيز نحو التأمل الداخلي.";
  }
  if (q.includes("زكاة") || q.includes("صدقة")) {
    return "الزكاة فريضة بنسبة ٢.٥٪ من المال المؤهل، تطهر المال وتدعم الفقراء. والصدقة التطوعية لها أجر عظيم أيضاً.";
  }
  if (q.includes("السلام") || q.includes("مرحبا") || q.includes("hello") || q.includes("hi")) {
    return "وعليكم السلام ورحمة الله وبركاته! اسألني عن الصلاة أو القرآن أو الوضوء أو أي سؤال إيماني.";
  }

  return "أسمع تأملك. طلب العلم عبادة جميلة في الإسلام. اسألني عن الصلاة، القرآن، الوضوء، الأحاديث، أو الأدعية لمساعدتك في رحلتك.";
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
    const grad = ctx.createLinearGradient(0, 0, (x1 + x2) / 2, (y1 + y2) / 2);
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

  const isMobile = window.innerWidth < 768;

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

    const starDivisor = isMobile ? 8000 : 3200;
    const count = Math.floor((window.innerWidth * window.innerHeight) / starDivisor);
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

  // Cache DOM elements outside the rendering loop to prevent layout thrashing on every frame
  const nebulaLeft = document.getElementById("nebula-1");
  const nebulaRight = document.getElementById("nebula-2");
  const celestialBody = document.getElementById("celestial-body");

  let lastTime = 0;
  const fpsInterval = isMobile ? 1000 / 30 : 0; // Throttle to 30 FPS on mobile to cut redraw work by 50%

  function loop(timestamp) {
    rafId = requestAnimationFrame(loop);

    if (fpsInterval > 0 && timestamp) {
      const elapsed = timestamp - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = timestamp - (elapsed % fpsInterval);
    }

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

    if (nebulaLeft) {
      nebulaLeft.style.transform = `translate(${currentParallax.x * -20}px, ${currentParallax.y * -20}px)`;
    }
    if (nebulaRight) {
      nebulaRight.style.transform = `translate(${currentParallax.x * -35}px, ${currentParallax.y * -35}px)`;
    }
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

async function playFullSurah(surah, btnEl) {
  // If this Surah is already the one playing
  if (playingSurah && playingSurah.id === surah.id) {
    if (currentAudio) {
      if (currentAudio.paused) {
        currentAudio.play().catch(err => console.error("Play failed", err));
      } else {
        currentAudio.pause();
      }
      updatePersistentPlayerUI();
      renderSurahModalContent();
      updateSurahCardsPlayButtons();
    }
    return;
  }

  // Load and play new Surah
  loadAndPlaySurah(surah, btnEl);
}

async function loadAndPlaySurah(surah, btnEl = null) {
  if (btnEl) btnEl.classList.add("loading");

  try {
    const editionMap = {
      "English": "en.sahih",
      "Français": "fr.hamidullah",
      "Türkçe": "tr.yazir",
      "اردو": "ur.maududi"
    };
    const edition = editionMap[translation] || "en.sahih";
    const isCustomReciter = (reciter === "Ali Jaber");
    const reciterEdition = isCustomReciter ? "ar.alafasy" : (RECITER_MAP[reciter] || "ar.alafasy");
    const url = `https://api.alquran.cloud/v1/surah/${surah.id}/editions/quran-simple,${edition},${reciterEdition}`;
    const res = await fetch(url);
    const json = await res.json();

    if (json.code === 200 && json.data) {
      const arabicAyahs = json.data[0].ayahs;
      const translationAyahs = json.data[1].ayahs;
      const audioAyahs = json.data[2].ayahs;

      // Build the full surah object with ayahs
      const fullSurah = {
        ...surah,
        ayahs: arabicAyahs.map((ayah, i) => ({
          n: ayah.numberInSurah,
          ar: ayah.text,
          en: translationAyahs[i].text,
          audio: getAudioUrl(surah.id, ayah.numberInSurah, audioAyahs[i].audio)
        }))
      };

      if (btnEl) btnEl.classList.remove("loading");

      // Set playingSurah to this newly loaded fullSurah
      playingSurah = fullSurah;
      playingSurah.ayahDurations = new Array(fullSurah.ayahs.length).fill(0);

      // Start playing from first verse
      const firstAyah = fullSurah.ayahs[0];
      const firstKey = `${surah.id}:1`;

      togglePlayAudio(firstKey, firstAyah.audio);
      updateSurahCardsPlayButtons();
    } else {
      throw new Error("Failed to fetch surah data");
    }
  } catch (err) {
    console.error("Failed to load and play surah", err);
    if (btnEl) btnEl.classList.remove("loading");
    updateSurahCardsPlayButtons();
    alert("Could not load Surah audio. Please check your internet connection.");
  }
}

function playNextSurah() {
  if (!playingSurah) return;
  const currentId = playingSurah.id;

  // Find index in allSurahs
  const currentIndex = allSurahs.findIndex(s => s.id === currentId);
  if (currentIndex !== -1 && currentIndex + 1 < allSurahs.length) {
    const nextSurah = allSurahs[currentIndex + 1];

    // Auto play next Surah
    loadAndPlaySurah(nextSurah);
  } else {
    // End of Quran reached, stop player
    hidePersistentPlayer();
  }
}

async function reloadSurahWithNewReciter(surah, targetANum) {
  try {
    const editionMap = {
      "English": "en.sahih",
      "Français": "fr.hamidullah",
      "Türkçe": "tr.yazir",
      "اردو": "ur.maududi"
    };
    const edition = editionMap[translation] || "en.sahih";
    const isCustomReciter = (reciter === "Ali Jaber");
    const reciterEdition = isCustomReciter ? "ar.alafasy" : (RECITER_MAP[reciter] || "ar.alafasy");
    const url = `https://api.alquran.cloud/v1/surah/${surah.id}/editions/quran-simple,${edition},${reciterEdition}`;
    const res = await fetch(url);
    const json = await res.json();

    if (json.code === 200 && json.data) {
      const arabicAyahs = json.data[0].ayahs;
      const translationAyahs = json.data[1].ayahs;
      const audioAyahs = json.data[2].ayahs;

      const fullSurah = {
        ...surah,
        ayahs: arabicAyahs.map((ayah, i) => ({
          n: ayah.numberInSurah,
          ar: ayah.text,
          en: translationAyahs[i].text,
          audio: getAudioUrl(surah.id, ayah.numberInSurah, audioAyahs[i].audio)
        }))
      };

      playingSurah = fullSurah;
      playingSurah.ayahDurations = new Array(fullSurah.ayahs.length).fill(0);

      const targetAyah = fullSurah.ayahs[targetANum - 1];
      const targetKey = `${surah.id}:${targetANum}`;

      togglePlayAudio(targetKey, targetAyah.audio);
    }
  } catch (err) {
    console.error("Failed to reload surah with new reciter", err);
  }
}

function updateSurahCardsPlayButtons() {
  const buttons = document.querySelectorAll(".surah-card-play-btn");
  buttons.forEach(btn => {
    const sId = parseInt(btn.getAttribute("data-surah-id"));
    const playIcon = btn.querySelector(".play-svg");
    const pauseIcon = btn.querySelector(".pause-svg");

    // Check if this button's Surah is currently playing
    const isThisSurahPlaying = (playingSurah && playingSurah.id === sId);
    const isActivelyPlaying = (isThisSurahPlaying && currentAudio && !currentAudio.paused);

    if (isActivelyPlaying) {
      if (playIcon) playIcon.classList.add("hidden");
      if (pauseIcon) pauseIcon.classList.remove("hidden");
    } else {
      if (playIcon) playIcon.classList.remove("hidden");
      if (pauseIcon) pauseIcon.classList.add("hidden");
    }

    // Ensure loading state is cleared if it's not the active one
    if (!isThisSurahPlaying) {
      btn.classList.remove("loading");
    }

    // Sync Surah Card Highlights
    const card = btn.closest(".surah-card");
    if (card) {
      card.classList.toggle("playing", !!isThisSurahPlaying);
      card.classList.toggle("active-play", !!isActivelyPlaying);
    }
  });
}
