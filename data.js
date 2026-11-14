// Arapça Kelime Ezberleme - Setler Veritabanı
// SET-0, SET-1, SET-2, SET-3 modüler mimarisi

const SETS_DATA = {
  "set0": {
    id: "set0",
    name: "SET-0",
    title: "SET-0: Tanışma, Zamirler & Soru Kalıpları",
    description: "16 Temel Zamir, Soru Edatı ve Günlük İfade",
    available: true,
    words: [
      {
        id: 1,
        arabic: "مَنْ",
        transcription: "Man",
        reading: "Men",
        turkish: "KİM?",
        note: "Kim? (Şahıslar için soru edatı)",
        image: "sets/set0/images/image_1.png",
        audio: "sets/set0/audio/word_1.mp3"
      },
      {
        id: 2,
        arabic: "إِلَى اللِّقَاءِ",
        transcription: "ilā l-liqā'",
        reading: "İle'l-likâ'",
        turkish: "GÖRÜŞMEK ÜZERE",
        note: "Tekrar buluşuncaya dek, görüşmek üzere",
        image: "sets/set0/images/image_2.png",
        audio: "sets/set0/audio/word_2.mp3"
      },
      {
        id: 3,
        arabic: "مَا",
        transcription: "Mā",
        reading: "Mâ",
        turkish: "NE? (Müzekker / Nesneler için)",
        note: "Ne? (Akılsız varlıklar/müzekker için soru edatı)",
        image: "sets/set0/images/image_3.png",
        audio: "sets/set0/audio/word_3.mp3"
      },
      {
        id: 4,
        arabic: "مَا هَذِهِ؟",
        transcription: "Mā hādhihi?",
        reading: "Mâ hâzihi?",
        turkish: "BU NEDİR? (Müennes / Dişil için)",
        note: "Bu nedir? (Müennes / dişil nesneler için)",
        image: "sets/set0/images/image_4.png",
        audio: "sets/set0/audio/word_4.mp3"
      },
      {
        id: 5,
        arabic: "هَذَا",
        transcription: "Hādhā",
        reading: "Hâzâ",
        turkish: "BU (Müzekker / Eril)",
        note: "İşaret zamiri: Bu (eril varlıklar için)",
        image: "sets/set0/images/image_5.png",
        audio: "sets/set0/audio/word_5.mp3"
      },
      {
        id: 6,
        arabic: "كَيْفَ حَالُكَ؟",
        transcription: "Kayfa ḥāluk?",
        reading: "Keyfe hâlük?",
        turkish: "NASILSINIZ?",
        note: "Nasılsın? / Nasılsınız? (Hal hatır sorma)",
        image: "sets/set0/images/image_6.png",
        audio: "sets/set0/audio/word_6.mp3"
      },
      {
        id: 7,
        arabic: "عَفْوًا",
        transcription: "‘Afwan",
        reading: "Afvan",
        turkish: "AFEDERSİNİZ / RİCA EDERİM",
        note: "Afedersiniz / Özür dilerim / Rica ederim",
        image: "sets/set0/images/image_7.png",
        audio: "sets/set0/audio/word_7.mp3"
      },
      {
        id: 8,
        arabic: "لَا",
        transcription: "Lā",
        reading: "Lâ",
        turkish: "HAYIR",
        note: "Olumsuz cevap: Hayır",
        image: "sets/set0/images/image_8.png",
        audio: "sets/set0/audio/word_8.mp3"
      },
      {
        id: 9,
        arabic: "نَعَمْ",
        transcription: "Na‘am",
        reading: "Ne'am",
        turkish: "EVET",
        note: "Olumlu cevap: Evet",
        image: "sets/set0/images/image_9.png",
        audio: "sets/set0/audio/word_9.mp3"
      },
      {
        id: 10,
        arabic: "مَعَ السَّلَامَةِ",
        transcription: "Ma‘a s-salāmah",
        reading: "Me'as-selâme",
        turkish: "GÖRÜŞÜRÜZ / HOŞÇA KALIN",
        note: "Esenlikle kal, güle güle, görüşürüz",
        image: "sets/set0/images/image_10.png",
        audio: "sets/set0/audio/word_10.mp3"
      },
      {
        id: 11,
        arabic: "نَحْنُ",
        transcription: "Naḥnu",
        reading: "Nahnu",
        turkish: "BİZ",
        note: "1. Çoğul şahıs zamiri: Biz",
        image: "sets/set0/images/image_11.png",
        audio: "sets/set0/audio/word_11.mp3"
      },
      {
        id: 12,
        arabic: "هِيَ",
        transcription: "Hiya",
        reading: "Hiye",
        turkish: "O (Müennes / Kadın)",
        note: "3. Tekil şahıs zamiri: O (kadın/müennes)",
        image: "sets/set0/images/image_12.png",
        audio: "sets/set0/audio/word_12.mp3"
      },
      {
        id: 13,
        arabic: "هُوَ",
        transcription: "Huwa",
        reading: "Hüve",
        turkish: "O (Müzekker / Erkek)",
        note: "3. Tekil şahıs zamiri: O (erkek/müzekker)",
        image: "sets/set0/images/image_13.png",
        audio: "sets/set0/audio/word_13.mp3"
      },
      {
        id: 14,
        arabic: "أَنْتِ",
        transcription: "Anti",
        reading: "Enti",
        turkish: "SEN (Müennes / Kadın)",
        note: "2. Tekil şahıs zamiri: Sen (kadın)",
        image: "sets/set0/images/image_14.png",
        audio: "sets/set0/audio/word_14.mp3"
      },
      {
        id: 15,
        arabic: "أَنَا",
        transcription: "Anā",
        reading: "Ene",
        turkish: "BEN",
        note: "1. Tekil şahıs zamiri: Ben",
        image: "sets/set0/images/image_15.png",
        audio: "sets/set0/audio/word_15.mp3"
      },
      {
        id: 16,
        arabic: "مَا هَذَا؟",
        transcription: "Mā hādhā?",
        reading: "Mâ hâzâ?",
        turkish: "BU NEDİR? (Müzekker / Eril)",
        note: "Bu nedir? (Müzekker / eril nesneler için)",
        image: "sets/set0/images/image_16.png",
        audio: "sets/set0/audio/word_16.mp3"
      }
    ]
  },
  "set1": {
    id: "set1",
    name: "SET-1",
    title: "SET-1: Temel Sıfatlar",
    description: "25 Temel Arapça Sıfat & Zıt Anlamlılar",
    available: true,
    words: [
      {
        id: 1,
        arabic: "مَرِيضٌ",
        transcription: "Marīḍ",
        reading: "Mariyz",
        turkish: "HASTA",
        note: "Sağlığı bozuk, hasta kimse",
        image: "sets/set1/images/image1.png",
        audio: "sets/set1/audio/word_1.mp3"
      },
      {
        id: 2,
        arabic: "لَذِيذٌ",
        transcription: "Ladhīdh",
        reading: "Leziyz",
        turkish: "LEZZETLİ",
        note: "Tadı güzel, nefis yiyecek",
        image: "sets/set1/images/image_lezzetli.jpg",
        audio: "sets/set1/audio/word_2.mp3"
      },
      {
        id: 3,
        arabic: "حُلْوٌ",
        transcription: "Ḥulw",
        reading: "Hulv",
        turkish: "TATLI",
        note: "Şekerli, tatlı lezzetli",
        image: "sets/set1/images/image2.png",
        audio: "sets/set1/audio/word_3.mp3"
      },
      {
        id: 4,
        arabic: "فَقِيرٌ",
        transcription: "Faqīr",
        reading: "Fakiyr",
        turkish: "FAKİR / YOKSUL",
        note: "Maddi durumu yetersiz kimse",
        image: "sets/set1/images/image3.png",
        audio: "sets/set1/audio/word_4.mp3"
      },
      {
        id: 5,
        arabic: "غَنِيٌّ",
        transcription: "Ghaniyy",
        reading: "Ganiyy",
        turkish: "ZENGİN",
        note: "Varlıklı, malı çok olan",
        image: "sets/set1/images/image4.png",
        audio: "sets/set1/audio/word_5.mp3"
      },
      {
        id: 6,
        arabic: "طَوِيلٌ",
        transcription: "Ṭawīl",
        reading: "Taviyl",
        turkish: "UZUN",
        note: "Boyu veya mesafesi uzun",
        image: "sets/set1/images/image5.png",
        audio: "sets/set1/audio/word_6.mp3"
      },
      {
        id: 7,
        arabic: "قَصِيرٌ",
        transcription: "Qaṣīr",
        reading: "Kasiyr",
        turkish: "KISA",
        note: "Boyu veya mesafesi kısa",
        image: "sets/set1/images/image5.png",
        audio: "sets/set1/audio/word_7.mp3"
      },
      {
        id: 8,
        arabic: "مُغْلَقٌ",
        transcription: "Mughlaq",
        reading: "Muglak",
        turkish: "KAPALI (Kilitli)",
        note: "Kilitlenmiş veya örtülmüş",
        image: "sets/set1/images/image6.png",
        audio: "sets/set1/audio/word_8.mp3"
      },
      {
        id: 9,
        arabic: "وَسِخٌ",
        transcription: "Wasikh",
        reading: "Vasih",
        turkish: "KİRLİ / PİS",
        note: "Temiz olmayan, çamurlu/lekeli",
        image: "sets/set1/images/image7.png",
        audio: "sets/set1/audio/word_9.mp3"
      },
      {
        id: 10,
        arabic: "نَظِيفٌ",
        transcription: "Naẓīf",
        reading: "Naziyf",
        turkish: "TEMİZ (NAZİF)",
        note: "Pırıl pırıl, kirden arınmış",
        image: "sets/set1/images/image8.png",
        audio: "sets/set1/audio/word_10.mp3"
      },
      {
        id: 11,
        arabic: "خَفِيفٌ",
        transcription: "Khafīf",
        reading: "Hafiyf",
        turkish: "HAFİF",
        note: "Ağırlığı az olan",
        image: "sets/set1/images/image9.png",
        audio: "sets/set1/audio/word_11.mp3"
      },
      {
        id: 12,
        arabic: "ثَقِيلٌ",
        transcription: "Thaqīl",
        reading: "Sekıyl",
        turkish: "AĞIR",
        note: "Ağırlığı fazla olan, yükte ağır",
        image: "sets/set1/images/image10.png",
        audio: "sets/set1/audio/word_12.mp3"
      },
      {
        id: 13,
        arabic: "بَعِيدٌ",
        transcription: "Ba'īd",
        reading: "Baeiyd",
        turkish: "UZAK",
        note: "Mesafesi ırak olan",
        image: "sets/set1/images/image11.png",
        audio: "sets/set1/audio/word_13.mp3"
      },
      {
        id: 14,
        arabic: "قَرِيبٌ",
        transcription: "Qarīb",
        reading: "Kariyb",
        turkish: "YAKIN",
        note: "Mesafesi az olan, bitişik",
        image: "sets/set1/images/image12.png",
        audio: "sets/set1/audio/word_14.mp3"
      },
      {
        id: 15,
        arabic: "جَمِيلٌ",
        transcription: "Jamīl",
        reading: "Cemiyl",
        turkish: "GÜZEL",
        note: "Hoşa giden, zarif ve güzel",
        image: "sets/set1/images/image13.png",
        audio: "sets/set1/audio/word_15.mp3"
      },
      {
        id: 16,
        arabic: "حَارٌّ",
        transcription: "Ḥārr",
        reading: "Haarr",
        turkish: "SICAK",
        note: "Isısı yüksek, hararetli",
        image: "sets/set1/images/image14.png",
        audio: "sets/set1/audio/word_16.mp3"
      },
      {
        id: 17,
        arabic: "بَارِدٌ",
        transcription: "Bārid",
        reading: "Baarid",
        turkish: "SOĞUK",
        note: "Isısı düşük, buz gibi",
        image: "sets/set1/images/image15.png",
        audio: "sets/set1/audio/word_17.mp3"
      },
      {
        id: 18,
        arabic: "كَبِيرٌ",
        transcription: "Kabīr",
        reading: "Kebiyr",
        turkish: "BÜYÜK",
        note: "Ebatça iri ve geniş",
        image: "sets/set1/images/image16.png",
        audio: "sets/set1/audio/word_18.mp3"
      },
      {
        id: 19,
        arabic: "صَغِيرٌ",
        transcription: "Ṣaghīr",
        reading: "Sagıyr",
        turkish: "KÜÇÜK",
        note: "Ebatça ufak, minik",
        image: "sets/set1/images/image17.png",
        audio: "sets/set1/audio/word_19.mp3"
      },
      {
        id: 20,
        arabic: "قَدِيمٌ",
        transcription: "Qadīm",
        reading: "Kadiym",
        turkish: "ESKİ (Kadim)",
        note: "Eski zamanlardan kalma",
        image: "sets/set1/images/image18.png",
        audio: "sets/set1/audio/word_20.mp3"
      },
      {
        id: 21,
        arabic: "جَدِيدٌ",
        transcription: "Jadīd",
        reading: "Cediyd",
        turkish: "YENİ (Cedid)",
        note: "Henüz yeni yapılmış/alınmış",
        image: "sets/set1/images/image19.png",
        audio: "sets/set1/audio/word_21.mp3"
      },
      {
        id: 22,
        arabic: "وَاقِفٌ",
        transcription: "Wāqif",
        reading: "Vaakıf",
        turkish: "AYAKTA (Duran)",
        note: "Ayakta dikilen kimse",
        image: "sets/set1/images/image20.png",
        audio: "sets/set1/audio/word_22.mp3"
      },
      {
        id: 23,
        arabic: "جَالِسٌ",
        transcription: "Jālis",
        reading: "Caelis",
        turkish: "OTURUR HALDE (Oturan)",
        note: "Koltuğa veya sandalyeye oturmuş",
        image: "sets/set1/images/image21.jpeg",
        audio: "sets/set1/audio/word_23.mp3"
      },
      {
        id: 24,
        arabic: "مَفْتُوحٌ",
        transcription: "Maftūḥ",
        reading: "Meftuuh",
        turkish: "AÇIK (MEFTUH)",
        note: "Aralanmış, açık pencere/kapı",
        image: "sets/set1/images/image22.jpeg",
        audio: "sets/set1/audio/word_24.mp3"
      },
      {
        id: 25,
        arabic: "مَكْسُورٌ",
        transcription: "Maksūr",
        reading: "Meksuur",
        turkish: "KIRIK (MEKSUR)",
        note: "Parçalanmış, kırılmış vazo/eşya",
        image: "sets/set1/images/image23.png",
        audio: "sets/set1/audio/word_25.mp3"
      }
    ]
  },
  "set2": {
    id: "set2",
    name: "SET-2",
    title: "SET-2: Temel İsimler & Eşyalar",
    description: "20 Temel Arapça İsim, Eşya ve Varlık",
    available: true,
    words: [
      {
        id: 1,
        arabic: "دُكَّانٌ",
        transcription: "Dukkān",
        reading: "Dükkan",
        turkish: "DÜKKAN / MAĞAZA",
        note: "Alışveriş yapılan dükkan, mağaza",
        image: "sets/set2/images/image1.png",
        audio: "sets/set2/audio/word_1.mp3"
      },
      {
        id: 2,
        arabic: "قَمِيصٌ",
        transcription: "Qamīṣ",
        reading: "Kamiys",
        turkish: "GÖMLEK",
        note: "Üste giyilen yakalı gömlek",
        image: "sets/set2/images/image2.png",
        audio: "sets/set2/audio/word_2.mp3"
      },
      {
        id: 3,
        arabic: "بَابٌ",
        transcription: "Bāb",
        reading: "Baab",
        turkish: "KAPI",
        note: "Eve veya odaya giriş kapısı",
        image: "sets/set2/images/image3.png",
        audio: "sets/set2/audio/word_3.mp3"
      },
      {
        id: 4,
        arabic: "كُرْسِيٌّ",
        transcription: "Kursiyy",
        reading: "Kürsiyy",
        turkish: "SANDALYE",
        note: "Oturmaya yarayan sandalye",
        image: "sets/set2/images/image4.png",
        audio: "sets/set2/audio/word_4.mp3"
      },
      {
        id: 5,
        arabic: "مَسْجِدٌ",
        transcription: "Masjid",
        reading: "Mescid",
        turkish: "MESCİD / CAMİ",
        note: "İbadet edilen cami veya mescit",
        image: "sets/set2/images/image5.png",
        audio: "sets/set2/audio/word_5.mp3"
      },
      {
        id: 6,
        arabic: "حَجَرٌ",
        transcription: "Ḥajar",
        reading: "Hacer",
        turkish: "TAŞ",
        note: "Sert mineral kaya parçası, taş",
        image: "sets/set2/images/image6.png",
        audio: "sets/set2/audio/word_6.mp3"
      },
      {
        id: 7,
        arabic: "لَبَنٌ",
        transcription: "Laban",
        reading: "Leben",
        turkish: "SÜT",
        note: "Beyaz içecek, süt",
        image: "sets/set2/images/image7.png",
        audio: "sets/set2/audio/word_7.mp3"
      },
      {
        id: 8,
        arabic: "حِصَانٌ",
        transcription: "Ḥiṣān",
        reading: "Hisaan",
        turkish: "AT",
        note: "Güçlü binek hayvanı, at",
        image: "sets/set2/images/image8.png",
        audio: "sets/set2/audio/word_8.mp3"
      },
      {
        id: 9,
        arabic: "حِمَارٌ",
        transcription: "Ḥimār",
        reading: "Himaar",
        turkish: "EŞEK",
        note: "Yük taşıyan sevimli binek hayvanı",
        image: "sets/set2/images/image9.png",
        audio: "sets/set2/audio/word_9.mp3"
      },
      {
        id: 10,
        arabic: "سَرِيرٌ",
        transcription: "Sarīr",
        reading: "Seriyr",
        turkish: "YATAK",
        note: "Uyumak için kullanılan yatak/karyola",
        image: "sets/set2/images/image_yatak.jpg",
        audio: "sets/set2/audio/word_10.mp3"
      },
      {
        id: 11,
        arabic: "قَلَمٌ",
        transcription: "Qalam",
        reading: "Kalem",
        turkish: "KALEM",
        note: "Yazı yazmaya yarayan kalem",
        image: "sets/set2/images/image10.png",
        audio: "sets/set2/audio/word_11.mp3"
      },
      {
        id: 12,
        arabic: "كِتَابٌ",
        transcription: "Kitāb",
        reading: "Kitaab",
        turkish: "KİTAP",
        note: "Okunan sayfalı basılı eser",
        image: "sets/set2/images/image11.png",
        audio: "sets/set2/audio/word_12.mp3"
      },
      {
        id: 13,
        arabic: "مِفْتَاحٌ",
        transcription: "Miftāḥ",
        reading: "Miftaah",
        turkish: "ANAHTAR",
        note: "Kapıyı açmaya yarayan anahtar",
        image: "sets/set2/images/image12.jpeg",
        audio: "sets/set2/audio/word_13.mp3"
      },
      {
        id: 14,
        arabic: "مَكْتَبٌ",
        transcription: "Maktab",
        reading: "Mekteb",
        turkish: "MASA / ÇALIŞMA MASASI",
        note: "Üzerinde çalışılan yazı masası",
        image: "sets/set2/images/image13.jpeg",
        audio: "sets/set2/audio/word_14.mp3"
      },
      {
        id: 15,
        arabic: "جَمَلٌ",
        transcription: "Jamal",
        reading: "Cemel",
        turkish: "DEVE",
        note: "Çölde yaşayan hörgüçlü hayvan",
        image: "sets/set2/images/image14.jpeg",
        audio: "sets/set2/audio/word_15.mp3"
      },
      {
        id: 16,
        arabic: "نَجْمٌ",
        transcription: "Najm",
        reading: "Necm",
        turkish: "YILDIZ",
        note: "Gökyüzünde parıldayan yıldız",
        image: "sets/set2/images/image15.jpeg",
        audio: "sets/set2/audio/word_16.mp3"
      },
      {
        id: 17,
        arabic: "رَجُلٌ",
        transcription: "Rajul",
        reading: "Racül",
        turkish: "ADAM / ERKEK",
        note: "Yetişkin erkek, adam",
        image: "sets/set2/images/image16.jpeg",
        audio: "sets/set2/audio/word_17.mp3"
      },
      {
        id: 18,
        arabic: "طَالِبٌ",
        transcription: "Ṭālib",
        reading: "Taalib",
        turkish: "ÖĞRENCİ",
        note: "İlim tahsil eden talebe, öğrenci",
        image: "sets/set2/images/image17.jpeg",
        audio: "sets/set2/audio/word_18.mp3"
      },
      {
        id: 19,
        arabic: "قَمَرٌ",
        transcription: "Qamar",
        reading: "Kamer",
        turkish: "AY",
        note: "Gece gökyüzünü aydınlatan hilal / dolunay",
        image: "sets/set2/images/image18.jpeg",
        audio: "sets/set2/audio/word_19.mp3"
      },
      {
        id: 20,
        arabic: "مَاءٌ",
        transcription: "Mā'",
        reading: "Maa'",
        turkish: "SU",
        note: "Hayat kaynağı berrak içecek, su",
        image: "sets/set2/images/image19.jpeg",
        audio: "sets/set2/audio/word_20.mp3"
      }
    ]
  },
  "favorites": {
    id: "favorites",
    name: "⭐ Favoriler",
    title: "⭐ Favori Kelimelerim",
    description: "Yıldızladığınız özel kelimeler",
    available: true,
    isFavorites: true,
    words: []
  },
  "set3": {
    id: "set3",
    name: "SET-3",
    title: "SET-3: Temel Cümleler & İfadeler",
    description: "18 Temel İsim Cümlesi (Mübteda & Haber)",
    available: true,
    words: [
      {
        id: 1,
        arabic: "اَلْقَلَمُ مَكْسُورٌ",
        transcription: "al-Qalamu maksūr",
        reading: "El-kalemu meksûrun",
        turkish: "Kalem kırıktır.",
        note: "The pen is broken — İsim cümlesi",
        image: "sets/set3/images/image_1.png",
        audio: "sets/set3/audio/word_1.mp3"
      },
      {
        id: 2,
        arabic: "اَلْبَابُ مَفْتُوحٌ",
        transcription: "al-Bābu maftūḥ",
        reading: "El-bâbu meftûhun",
        turkish: "Kapı açıktır.",
        note: "The door is open — İsim cümlesi",
        image: "sets/set3/images/image_2.png",
        audio: "sets/set3/audio/word_2.mp3"
      },
      {
        id: 3,
        arabic: "اَلْكِتَابُ جَدِيدٌ",
        transcription: "al-Kitābu jadīd",
        reading: "El-kitâbu cedîdün",
        turkish: "Kitap yenidir.",
        note: "The book is new — İsim cümlesi",
        image: "sets/set3/images/image_3.png",
        audio: "sets/set3/audio/word_3.mp3"
      },
      {
        id: 4,
        arabic: "اَلْحِمَارُ صَغِيرٌ",
        transcription: "al-Ḥimāru ṣaghīr",
        reading: "El-hımâru sagîrun",
        turkish: "Eşek küçüktür.",
        note: "The donkey is small — İsim cümlesi",
        image: "sets/set3/images/image_4_donkey.png",
        audio: "sets/set3/audio/word_4.mp3"
      },
      {
        id: 5,
        arabic: "اَلْحِصَانُ كَبِيرٌ",
        transcription: "al-Ḥiṣānu kabīr",
        reading: "El-hısânu kebîrun",
        turkish: "At büyüktür.",
        note: "The horse is big — İsim cümlesi",
        image: "sets/set3/images/image_4.png",
        audio: "sets/set3/audio/word_5.mp3"
      },
      {
        id: 6,
        arabic: "اَلْكُرْسِيُّ مَكْسُورٌ",
        transcription: "al-Kursiyyu maksūr",
        reading: "El-kürsiyyü meksûrun",
        turkish: "Sandalye kırıktır.",
        note: "The chair is broken — İsim cümlesi",
        image: "sets/set3/images/image_6.png",
        audio: "sets/set3/audio/word_6.mp3"
      },
      {
        id: 7,
        arabic: "اَلْحَجَرُ ثَقِيلٌ",
        transcription: "al-Ḥajaru thaqīl",
        reading: "El-haceru sekîlün",
        turkish: "Taş ağırdır.",
        note: "The stone is heavy — İsim cümlesi",
        image: "sets/set3/images/image_7.png",
        audio: "sets/set3/audio/word_7.mp3"
      },
      {
        id: 8,
        arabic: "اَلْوَرَقُ خَفِيفٌ",
        transcription: "al-Waraqu khafīf",
        reading: "El-veraku hafîfün",
        turkish: "Yaprak / kâğıt hafiftir.",
        note: "The paper is light — İsim cümlesi",
        image: "sets/set3/images/image_8.png",
        audio: "sets/set3/audio/word_8.mp3"
      },
      {
        id: 9,
        arabic: "اَللَّبَنُ حَارٌّ",
        transcription: "al-Labanu ḥārr",
        reading: "El-lebenü hârrun",
        turkish: "Süt sıcaktır.",
        note: "The milk is hot — İsim cümlesi",
        image: "sets/set3/images/image_9.png",
        audio: "sets/set3/audio/word_9.mp3"
      },
      {
        id: 10,
        arabic: "اَلْقَمِيصُ نَظِيفٌ",
        transcription: "al-Qamīṣu naẓīf",
        reading: "El-kamîsu nazîfün",
        turkish: "Gömlek temizdir.",
        note: "The shirt is clean — İsim cümlesi",
        image: "sets/set3/images/image_10.png",
        audio: "sets/set3/audio/word_10.mp3"
      },
      {
        id: 11,
        arabic: "اَلْمُدَرِّسُ وَاقِفٌ",
        transcription: "al-Mudarrisu wāqif",
        reading: "El-müderrisü vâkıfün",
        turkish: "Öğretmen ayaktadır.",
        note: "The teacher is standing — İsim cümlesi",
        image: "sets/set3/images/image_11.png",
        audio: "sets/set3/audio/word_11.mp3"
      },
      {
        id: 12,
        arabic: "اَلسُّكَّرُ حُلْوٌ",
        transcription: "as-Sukkaru ḥulw",
        reading: "Es-sükkeru hulvün",
        turkish: "Şeker tatlıdır.",
        note: "The sugar is sweet — İsim cümlesi",
        image: "sets/set3/images/image_12.png",
        audio: "sets/set3/audio/word_12.mp3"
      },
      {
        id: 13,
        arabic: "اَلتُّفَّاحُ لَذِيذٌ",
        transcription: "at-Tuffāḥu ladhīdh",
        reading: "Et-tüffâhu lezîzün",
        turkish: "Elma lezzetlidir.",
        note: "The apple is delicious — İsim cümlesi",
        image: "sets/set3/images/image_13.png",
        audio: "sets/set3/audio/word_13.mp3"
      },
      {
        id: 14,
        arabic: "اَلرَّجُلُ مَرِيضٌ",
        transcription: "ar-Rajulu marīḍ",
        reading: "Er-raculü marîdun",
        turkish: "Adam hastadır.",
        note: "The man is ill — İsim cümlesi",
        image: "sets/set3/images/image_14.png",
        audio: "sets/set3/audio/word_14.mp3"
      },
      {
        id: 15,
        arabic: "اَلرَّجُلُ طَوِيلٌ",
        transcription: "ar-Rajulu ṭawīl",
        reading: "Er-raculü tavîlün",
        turkish: "Adam uzundur.",
        note: "The man is tall — İsim cümlesi",
        image: "sets/set3/images/image_15.png",
        audio: "sets/set3/audio/word_15.mp3"
      },
      {
        id: 16,
        arabic: "اَلرَّجُلُ غَنِيٌّ",
        transcription: "ar-Rajulu ghaniyy",
        reading: "Er-raculü ganiyyün",
        turkish: "Adam zengindir.",
        note: "The man is rich — İsim cümlesi",
        image: "sets/set3/images/image_16.png",
        audio: "sets/set3/audio/word_16.mp3"
      },
      {
        id: 17,
        arabic: "اَلرَّجُلُ فَقِيرٌ",
        transcription: "ar-Rajulu faqīr",
        reading: "Er-raculü fakîrun",
        turkish: "Adam fakirdir.",
        note: "The man is poor — İsim cümlesi",
        image: "sets/set3/images/image_17.png",
        audio: "sets/set3/audio/word_17.mp3"
      },
      {
        id: 18,
        arabic: "اَلْوَلَدُ جَالِسٌ",
        transcription: "al-Waladu jālis",
        reading: "El-veledü câlisün",
        turkish: "Çocuk oturuyor.",
        note: "The boy is sitting — İsim cümlesi",
        image: "sets/set3/images/image_18.png",
        audio: "sets/set3/audio/word_18.mp3"
      }
    ]
  },
  "set4": {
    "id": "set4",
    "name": "SET-4",
    "title": "SET-4: Mekanlar, Harf-i Cerler & Diyaloglar",
    "description": "47 İfade: Harf-i Cerler, Mekanlar, Ülkeler ve Soru-Cevaplar",
    "available": true,
    "words": [
        {
            "id": 1,
            "arabic": "اَلسَّمَاءُ",
            "transcription": "as-Samā'",
            "reading": "Es-semâ'",
            "turkish": "GÖKYÜZÜ",
            "note": "Gökyüzü, sema",
            "image": "sets/set4/images/1.png",
            "audio": "sets/set4/audio/word_1.mp3"
        },
        {
            "id": 2,
            "arabic": "اَلْفَصْلُ",
            "transcription": "al-Faṣl",
            "reading": "El-fasl",
            "turkish": "SINIF",
            "note": "Derslik, sınıf",
            "image": "sets/set4/images/2.png",
            "audio": "sets/set4/audio/word_2.mp3"
        },
        {
            "id": 3,
            "arabic": "اَلْمِرْحَاضُ",
            "transcription": "al-Mirḥāḍ",
            "reading": "El-mirhâd",
            "turkish": "LAVABO / TUVALET",
            "note": "Tuvalet, hela, lavabo",
            "image": "sets/set4/images/3.png",
            "audio": "sets/set4/audio/word_3.mp3"
        },
        {
            "id": 4,
            "arabic": "اَلْحَمَّامُ",
            "transcription": "al-Ḥammām",
            "reading": "El-hammâm",
            "turkish": "BANYO / HAMAM",
            "note": "Banyo, yıkanma yeri",
            "image": "sets/set4/images/4.png",
            "audio": "sets/set4/audio/word_4.mp3"
        },
        {
            "id": 5,
            "arabic": "اَلْغُرْفَةُ",
            "transcription": "al-Ghurfah",
            "reading": "El-gurfe",
            "turkish": "ODA",
            "note": "Oda, konut bölümü",
            "image": "sets/set4/images/5.png",
            "audio": "sets/set4/audio/word_5.mp3"
        },
        {
            "id": 6,
            "arabic": "اَلْمَطْبَخُ",
            "transcription": "al-Maṭbakh",
            "reading": "El-matbah",
            "turkish": "MUTFAK",
            "note": "Yemek pişirilen yer",
            "image": "sets/set4/images/6.png",
            "audio": "sets/set4/audio/word_6.mp3"
        },
        {
            "id": 7,
            "arabic": "اَلْمَدْرَسَةُ",
            "transcription": "al-Madrasah",
            "reading": "El-medrese",
            "turkish": "OKUL",
            "note": "Mektep, okul, eğitim kurumu",
            "image": "sets/set4/images/7.png",
            "audio": "sets/set4/audio/word_7.mp3"
        },
        {
            "id": 8,
            "arabic": "اَلْجَامِعَةُ",
            "transcription": "al-Jāmi‘ah",
            "reading": "El-câmia",
            "turkish": "ÜNİVERSİTE",
            "note": "Yükseköğretim kurumu, üniversite",
            "image": "sets/set4/images/8.png",
            "audio": "sets/set4/audio/word_8.mp3"
        },
        {
            "id": 9,
            "arabic": "اَلْمُدِيرُ",
            "transcription": "al-Mudīr",
            "reading": "El-müdîr",
            "turkish": "MÜDÜR",
            "note": "Yönetici, müdür, idareci",
            "image": "sets/set4/images/9.png",
            "audio": "sets/set4/audio/word_9.mp3"
        },
        {
            "id": 10,
            "arabic": "اَلسُّوقُ",
            "transcription": "as-Sūq",
            "reading": "Es-sûk",
            "turkish": "ÇARŞI / PAZAR",
            "note": "Alışveriş yeri, pazar, çarşı",
            "image": "sets/set4/images/10.png",
            "audio": "sets/set4/audio/word_10.mp3"
        },
        {
            "id": 11,
            "arabic": "اَلشَّارِعُ",
            "transcription": "ash-Shāri‘",
            "reading": "Eş-şâri‘",
            "turkish": "CADDE / SOKAK",
            "note": "Yol, cadde, ana sokak",
            "image": "sets/set4/images/11.png",
            "audio": "sets/set4/audio/word_11.mp3"
        },
        {
            "id": 12,
            "arabic": "اَلسَّيَّارَةُ",
            "transcription": "as-Sayyārah",
            "reading": "Es-seyyâre",
            "turkish": "ARABA / OTOMOBİL",
            "note": "Binek araç, araba",
            "image": "sets/set4/images/12.png",
            "audio": "sets/set4/audio/word_12.mp3"
        },
        {
            "id": 13,
            "arabic": "تُرْكِيَا",
            "transcription": "Turkiyā",
            "reading": "Türkiyâ",
            "turkish": "TÜRKİYE",
            "note": "Ülke ismi: Türkiye",
            "image": "sets/set4/images/13.png",
            "audio": "sets/set4/audio/word_13.mp3"
        },
        {
            "id": 14,
            "arabic": "اَلصِّينُ",
            "transcription": "aṣ-Ṣīn",
            "reading": "Es-sîn",
            "turkish": "ÇİN",
            "note": "Ülke ismi: Çin",
            "image": "sets/set4/images/14.png",
            "audio": "sets/set4/audio/word_14.mp3"
        },
        {
            "id": 15,
            "arabic": "اَلْيَابَانُ",
            "transcription": "al-Yābān",
            "reading": "El-yâbân",
            "turkish": "JAPONYA",
            "note": "Ülke ismi: Japonya",
            "image": "sets/set4/images/15.png",
            "audio": "sets/set4/audio/word_15.mp3"
        },
        {
            "id": 16,
            "arabic": "اَلْهِنْدُ",
            "transcription": "al-Hind",
            "reading": "El-hind",
            "turkish": "HİNDİSTAN",
            "note": "Ülke ismi: Hindistan",
            "image": "sets/set4/images/16.png",
            "audio": "sets/set4/audio/word_16.mp3"
        },
        {
            "id": 17,
            "arabic": "اَلْفِلِبِّينُ",
            "transcription": "al-Filibbīn",
            "reading": "El-filibbîn",
            "turkish": "FİLİPİNLER",
            "note": "Ülke ismi: Filipinler",
            "image": "sets/set4/images/17.png",
            "audio": "sets/set4/audio/word_17.mp3"
        },
        {
            "id": 18,
            "arabic": "فِي",
            "transcription": "Fī",
            "reading": "Fî",
            "turkish": "İÇİNDE / -DE, -DA",
            "note": "Harf-i cer: içinde, bulunma hali",
            "image": "sets/set4/images/18.png",
            "audio": "sets/set4/audio/word_18.mp3"
        },
        {
            "id": 19,
            "arabic": "عَلَى",
            "transcription": "‘Alā",
            "reading": "Alâ",
            "turkish": "ÜSTÜNDE / ÜZERİNDE",
            "note": "Harf-i cer: üzerinde, temas ederek",
            "image": "sets/set4/images/19.png",
            "audio": "sets/set4/audio/word_19.mp3"
        },
        {
            "id": 20,
            "arabic": "مِنْ",
            "transcription": "Min",
            "reading": "Min",
            "turkish": "-DEN / -DAN (ÇIKIŞ, BAŞLANGIÇ)",
            "note": "Harf-i cer: ayrılma, başlangıç hali",
            "image": "sets/set4/images/20.png",
            "audio": "sets/set4/audio/word_20.mp3"
        },
        {
            "id": 21,
            "arabic": "إِلَى",
            "transcription": "Ilā",
            "reading": "İlâ",
            "turkish": "-E / -A DOĞRU (YÖNELME)",
            "note": "Harf-i cer: varış, yönelme hali",
            "image": "sets/set4/images/21.png",
            "audio": "sets/set4/audio/word_21.mp3"
        },
        {
            "id": 22,
            "arabic": "أَيْنَ؟",
            "transcription": "Ayna?",
            "reading": "Eyne?",
            "turkish": "NEREDE?",
            "note": "Yer bildiren soru edatı: nerede?",
            "image": "sets/set4/images/22.png",
            "audio": "sets/set4/audio/word_22.mp3"
        },
        {
            "id": 23,
            "arabic": "مَنْ؟",
            "transcription": "Man?",
            "reading": "Men?",
            "turkish": "KİM?",
            "note": "Şahıslar için soru edatı: kim?",
            "image": "sets/set4/images/23.png",
            "audio": "sets/set4/audio/word_23.mp3"
        },
        {
            "id": 24,
            "arabic": "مَاذَا؟",
            "transcription": "Mādhā?",
            "reading": "Mâzâ?",
            "turkish": "NE?",
            "note": "Fiiller / nesneler için soru edatı: ne?",
            "image": "sets/set4/images/24.png",
            "audio": "sets/set4/audio/word_24.mp3"
        },
        {
            "id": 25,
            "arabic": "نَعَمْ",
            "transcription": "Na‘am",
            "reading": "Ne‘am",
            "turkish": "EVET",
            "note": "Tasdik / onay edatı: evet",
            "image": "sets/set4/images/25.png",
            "audio": "sets/set4/audio/word_25.mp3"
        },
        {
            "id": 26,
            "arabic": "لَا",
            "transcription": "Lā",
            "reading": "Lâ",
            "turkish": "HAYIR",
            "note": "Nefiy / olumsuzluk edatı: hayır",
            "image": "sets/set4/images/26.png",
            "audio": "sets/set4/audio/word_26.mp3"
        },
        {
            "id": 27,
            "arabic": "أَيْنَ مُحَمَّدٌ؟ - هُوَ فِي الْغُرْفَةِ.",
            "transcription": "Ayna Muḥammadun? - Huwa fī l-ghurfah.",
            "reading": "Eyne Muhammedün? - Hüve fi'l-gurfe.",
            "turkish": "Muhammed nerede? - O odadadır.",
            "note": "Soru-cevap kalıbı",
            "image": "sets/set4/images/27.png",
            "audio": "sets/set4/audio/word_27.mp3"
        },
        {
            "id": 28,
            "arabic": "أَيْنَ يَاسِرٌ؟ - هُوَ فِي الْحَمَّامِ.",
            "transcription": "Ayna Yāsirun? - Huwa fī l-ḥammām.",
            "reading": "Eyne Yâsirun? - Hüve fi'l-hammâm.",
            "turkish": "Yasir nerede? - O banyodadır.",
            "note": "Soru-cevap kalıbı",
            "image": "sets/set4/images/28.png",
            "audio": "sets/set4/audio/word_28.mp3"
        },
        {
            "id": 29,
            "arabic": "أَيْنَ آمِنَةُ؟ - هِيَ فِي الْمَطْبَخِ.",
            "transcription": "Ayna Āminatu? - Hiya fī l-maṭbakh.",
            "reading": "Eyne Âminetü? - Hiye fi'l-matbah.",
            "turkish": "Amine nerede? - O mutfaktadır.",
            "note": "Soru-cevap kalıbı (müennes)",
            "image": "sets/set4/images/29.png",
            "audio": "sets/set4/audio/word_29.mp3"
        },
        {
            "id": 30,
            "arabic": "أَيْنَ الْكِتَابُ؟ - هُوَ عَلَى الْمَكْتَبِ.",
            "transcription": "Ayna l-kitābu? - Huwa ‘alā l-maktab.",
            "reading": "Eyne'l-kitâbu? - Hüve ale'l-mekteb.",
            "turkish": "Kitap nerede? - O masanın üzerindedir.",
            "note": "Soru-cevap kalıbı",
            "image": "sets/set4/images/30.png",
            "audio": "sets/set4/audio/word_30.mp3"
        },
        {
            "id": 31,
            "arabic": "أَيْنَ السَّاعَةُ؟ - هِيَ عَلَى الْمَكْتَبِ.",
            "transcription": "Ayna s-sā‘atu? - Hiya ‘alā l-maktab.",
            "reading": "Eyne's-sâatü? - Hiye ale'l-mekteb.",
            "turkish": "Saat nerede? - O masanın üzerindedir.",
            "note": "Soru-cevap kalıbı (müennes)",
            "image": "sets/set4/images/31.png",
            "audio": "sets/set4/audio/word_31.mp3"
        },
        {
            "id": 32,
            "arabic": "مَنْ فِي الْغُرْفَةِ؟ - مُحَمَّدٌ فِي الْغُرْفَةِ.",
            "transcription": "Man fī l-ghurfah? - Muḥammadun fī l-ghurfah.",
            "reading": "Men fi'l-gurfe? - Muhammedün fi'l-gurfe.",
            "turkish": "Odada kim var? - Odada Muhammed var.",
            "note": "Soru-cevap kalıbı",
            "image": "sets/set4/images/32.png",
            "audio": "sets/set4/audio/word_32.mp3"
        },
        {
            "id": 33,
            "arabic": "مَنْ فِي الْحَمَّامِ؟ - يَاسِرٌ فِي الْحَمَّامِ.",
            "transcription": "Man fī l-ḥammām? - Yāsirun fī l-ḥammām.",
            "reading": "Men fi'l-hammâm? - Yâsirun fi'l-hammâm.",
            "turkish": "Banyoda kim var? - Banyoda Yasir var.",
            "note": "Soru-cevap kalıbı",
            "image": "sets/set4/images/33.png",
            "audio": "sets/set4/audio/word_33.mp3"
        },
        {
            "id": 34,
            "arabic": "مَنْ فِي الْمَطْبَخِ؟ - آمِنَةُ فِي الْمَطْبَخِ.",
            "transcription": "Man fī l-maṭbakh? - Āminatu fī l-maṭbakh.",
            "reading": "Men fi'l-matbah? - Âminetü fi'l-matbah.",
            "turkish": "Mutfakta kim var? - Mutfakta Amine var.",
            "note": "Soru-cevap kalıbı",
            "image": "sets/set4/images/34.png",
            "audio": "sets/set4/audio/word_34.mp3"
        },
        {
            "id": 35,
            "arabic": "أَمُحَمَّدٌ فِي الْغُرْفَةِ؟ - نَعَمْ، هُوَ فِي الْغُرْفَةِ.",
            "transcription": "A-Muḥammadun fī l-ghurfah? - Na‘am, huwa fī l-ghurfah.",
            "reading": "E-Muhammedün fi'l-gurfe? - Ne‘am, hüve fi'l-gurfe.",
            "turkish": "Muhammed odada mı? - Evet, o odada.",
            "note": "İstifham ve teyit kalıbı",
            "image": "sets/set4/images/35.png",
            "audio": "sets/set4/audio/word_35.mp3"
        },
        {
            "id": 36,
            "arabic": "أَيَاسِرٌ فِي الْغُرْفَةِ؟ - لَا، مُحَمَّدٌ فِي الْغُرْفَةِ.",
            "transcription": "A-Yāsirun fī l-ghurfah? - Lā, Muḥammadun fī l-ghurfah.",
            "reading": "E-Yâsirun fi'l-gurfe? - Lâ, Muhammedün fi'l-gurfe.",
            "turkish": "Yasir odada mı? - Hayır, Muhammed odada.",
            "note": "İstifham ve tashih kalıbı",
            "image": "sets/set4/images/36.png",
            "audio": "sets/set4/audio/word_36.mp3"
        },
        {
            "id": 37,
            "arabic": "أَمُحَمَّدٌ فِي الْحَمَّامِ؟ - لَا، يَاسِرٌ فِي الْحَمَّامِ.",
            "transcription": "A-Muḥammadun fī l-ḥammām? - Lā, Yāsirun fī l-ḥammām.",
            "reading": "E-Muhammedün fi'l-hammâm? - Lâ, Yâsirun fi'l-hammâm.",
            "turkish": "Muhammed banyoda mı? - Hayır, Yasir banyoda.",
            "note": "İstifham ve tashih kalıbı",
            "image": "sets/set4/images/37.png",
            "audio": "sets/set4/audio/word_37.mp3"
        },
        {
            "id": 38,
            "arabic": "أَآمِنَةُ فِي الْمَطْبَخِ؟ - نَعَمْ.",
            "transcription": "A-Āminatu fī l-maṭbakh? - Na‘am.",
            "reading": "E-Âminetü fi'l-matbah? - Ne‘am.",
            "turkish": "Amine mutfakta mı? - Evet.",
            "note": "İstifham ve kısa cevap kalıbı",
            "image": "sets/set4/images/38.png",
            "audio": "sets/set4/audio/word_38.mp3"
        },
        {
            "id": 39,
            "arabic": "مَاذَا عَلَى الْمَكْتَبِ؟ - اَلْكِتَابُ عَلَى الْمَكْتَبِ.",
            "transcription": "Mādhā ‘alā l-maktab? - al-Kitābu ‘alā l-maktab.",
            "reading": "Mâzâ ale'l-mekteb? - El-kitâbu ale'l-mekteb.",
            "turkish": "Masanın üzerinde ne var? - Kitap masanın üzerindedir.",
            "note": "Soru-cevap kalıbı",
            "image": "sets/set4/images/39.png",
            "audio": "sets/set4/audio/word_39.mp3"
        },
        {
            "id": 40,
            "arabic": "مَاذَا عَلَى الْمَكْتَبِ؟ - اَلسَّاعَةُ عَلَى الْمَكْتَبِ.",
            "transcription": "Mādhā ‘alā l-maktab? - as-Sā‘atu ‘alā l-maktab.",
            "reading": "Mâzâ ale'l-mekteb? - Es-sâatü ale'l-mekteb.",
            "turkish": "Masanın üzerinde ne var? - Saat masanın üzerindedir.",
            "note": "Soru-cevap kalıbı",
            "image": "sets/set4/images/40.png",
            "audio": "sets/set4/audio/word_40.mp3"
        },
        {
            "id": 41,
            "arabic": "مِنْ أَيْنَ أَنْتَ؟ - أَنَا مِنَ الْيَابَانِ.",
            "transcription": "Min ayna anta? - Anā mina l-Yābān.",
            "reading": "Min eyne ente? - Ene mine'l-Yâbân.",
            "turkish": "Sen neredensin/nerelisin? - Ben Japonya'danım.",
            "note": "Nerelisin? kalıbı",
            "image": "sets/set4/images/41.png",
            "audio": "sets/set4/audio/word_41.mp3"
        },
        {
            "id": 42,
            "arabic": "مِنْ أَيْنَ عَمَّارٌ؟ - هُوَ مِنَ الصِّينِ.",
            "transcription": "Min ayna ‘Ammār? - Huwa mina ṣ-Ṣīn.",
            "reading": "Min eyne Ammâr? - Hüve mine's-Sîn.",
            "turkish": "Ammar nereli? - O Çinlidir.",
            "note": "Ülke / köken kalıbı",
            "image": "sets/set4/images/42.png",
            "audio": "sets/set4/audio/word_42.mp3"
        },
        {
            "id": 43,
            "arabic": "مِنْ أَيْنَ حَامِدٌ؟ - هُوَ مِنَ الْهِنْدِ.",
            "transcription": "Min ayna Ḥāmid? - Huwa mina l-Hind.",
            "reading": "Min eyne Hâmid? - Hüve mine'l-Hind.",
            "turkish": "Hâmid nereli? - O Hindistanlıdır.",
            "note": "Ülke / köken kalıbı",
            "image": "sets/set4/images/43.png",
            "audio": "sets/set4/audio/word_43.mp3"
        },
        {
            "id": 44,
            "arabic": "أَيْنَ ذَهَبَ عَبَّاسٌ؟ - ذَهَبَ إِلَى الْمُدِيرِ.",
            "transcription": "Ayna dhahaba ‘Abbās? - Dhahaba ilā l-mudīr.",
            "reading": "Eyne zehebe Abbâs? - Zehebe ile'l-müdîr.",
            "turkish": "Abbas nereye gitti? - Müdüre gitti.",
            "note": "Geçmiş zaman ve yönelme kalıbı",
            "image": "sets/set4/images/44.png",
            "audio": "sets/set4/audio/word_44.mp3"
        },
        {
            "id": 45,
            "arabic": "ذَهَبَ إِلَى السُّوقِ.",
            "transcription": "Dhahaba ilā s-sūq.",
            "reading": "Zehebe ile's-sûk.",
            "turkish": "Çarşıya gitti.",
            "note": "Fiil cümlesi (gitti)",
            "image": "sets/set4/images/45.png",
            "audio": "sets/set4/audio/word_45.mp3"
        },
        {
            "id": 46,
            "arabic": "خَرَجَ الْمُدَرِّسُ مِنَ الْفَصْلِ.",
            "transcription": "Kharaja l-mudarrisu mina l-faṣl.",
            "reading": "Harace'l-müderrisü mine'l-fasl.",
            "turkish": "Öğretmen sınıftan çıktı.",
            "note": "Fiil cümlesi (çıktı)",
            "image": "sets/set4/images/46.png",
            "audio": "sets/set4/audio/word_46.mp3"
        },
        {
            "id": 47,
            "arabic": "خَرَجَ حَامِدٌ مِنَ الْغُرْفَةِ.",
            "transcription": "Kharaja Ḥāmidun mina l-ghurfah.",
            "reading": "Harace Hâmidün mine'l-gurfe.",
            "turkish": "Hâmid odadan çıktı.",
            "note": "Fiil cümlesi (çıktı)",
            "image": "sets/set4/images/47.png",
            "audio": "sets/set4/audio/word_47.mp3"
        }
    ]
},
  "set5": {
    "id": "set5",
    "name": "SET-5",
    "title": "SET-5: Müzekker & Müennes, Vücut Azaları ve Karşılaştırmalı İfadeler",
    "description": "68 Kelime ve Cümle: Eril/Dişil Kalıplar, Ev Eşyaları, Organlar ve Zıt Anlamlar",
    "available": true,
    "words": [
        {
            "id": 1,
            "arabic": "نَافِذَةٌ / اَلنَّافِذَةُ",
            "transcription": "Nāfidhah / an-Nāfidhah",
            "reading": "Nâfizetün / En-nâfize",
            "turkish": "PENCERE",
            "note": "Ev, oda penceresi",
            "image": "sets/set5/images/1.webp",
            "audio": "sets/set5/audio/word_1.mp3"
        },
        {
            "id": 2,
            "arabic": "ثَلَّاجَةٌ / اَلثَّلَّاجَةُ",
            "transcription": "Thallājah / ath-Thallājah",
            "reading": "Sellâcetün / Es-sellâce",
            "turkish": "BUZDOLABI",
            "note": "Mutfak buzdolabı",
            "image": "sets/set5/images/2.webp",
            "audio": "sets/set5/audio/word_2.mp3"
        },
        {
            "id": 3,
            "arabic": "دَرَّاجَةٌ / اَلدَّرَّاجَةُ",
            "transcription": "Darrājah / ad-Darrājah",
            "reading": "Derrâcetün / Ed-derrâce",
            "turkish": "BİSİKLET",
            "note": "İki tekerlekli bisiklet",
            "image": "sets/set5/images/3.webp",
            "audio": "sets/set5/audio/word_3.mp3"
        },
        {
            "id": 4,
            "arabic": "مِلْعَقَةٌ / اَلْمِلْعَقَةُ",
            "transcription": "Mil‘aqah / al-Mil‘aqah",
            "reading": "Mil'akatün / El-mil'aka",
            "turkish": "KAŞIK",
            "note": "Yemek kaşığı",
            "image": "sets/set5/images/4.webp",
            "audio": "sets/set5/audio/word_4.mp3"
        },
        {
            "id": 5,
            "arabic": "مِكْوَاةٌ / اَلْمِكْوَاةُ",
            "transcription": "Mikwāh / al-Mikwāh",
            "reading": "Mikvâtün / El-mikvât",
            "turkish": "ÜTÜ",
            "note": "Kıyafet ütüsü",
            "image": "sets/set5/images/5.webp",
            "audio": "sets/set5/audio/word_5.mp3"
        },
        {
            "id": 6,
            "arabic": "قِدْرٌ / اَلْقِدْرُ",
            "transcription": "Qidr / al-Qidr",
            "reading": "Kıdrun / El-kıdr",
            "turkish": "TENCERE",
            "note": "Yemek tenceresi (Semai müennes)",
            "image": "sets/set5/images/6.webp",
            "audio": "sets/set5/audio/word_6.mp3"
        },
        {
            "id": 7,
            "arabic": "سَاعَةٌ",
            "transcription": "Sā‘ah",
            "reading": "Sâ'atün",
            "turkish": "SAAT",
            "note": "Kol veya duvar saati",
            "image": "sets/set5/images/7.webp",
            "audio": "sets/set5/audio/word_7.mp3"
        },
        {
            "id": 8,
            "arabic": "شَايٌ / اَلشَّايُ",
            "transcription": "Shāy / ash-Shāy",
            "reading": "Şâyün / Eş-şây",
            "turkish": "ÇAY",
            "note": "Sıcak içecek: çay",
            "image": "sets/set5/images/8.webp",
            "audio": "sets/set5/audio/word_8.mp3"
        },
        {
            "id": 9,
            "arabic": "قَهْوَةٌ / اَلْقَهْوَةُ",
            "transcription": "Qahwah / al-Qahwah",
            "reading": "Kahvetün / El-kahve",
            "turkish": "KAHVE",
            "note": "Sıcak içecek: kahve",
            "image": "sets/set5/images/9.webp",
            "audio": "sets/set5/audio/word_9.mp3"
        },
        {
            "id": 10,
            "arabic": "لَحْمٌ / اَللَّحْمُ",
            "transcription": "Laḥm / al-Laḥm",
            "reading": "Lahmün / El-lahm",
            "turkish": "ET",
            "note": "Yiyecek: et",
            "image": "sets/set5/images/10.webp",
            "audio": "sets/set5/audio/word_10.mp3"
        },
        {
            "id": 11,
            "arabic": "أُذُنٌ",
            "transcription": "Udhun",
            "reading": "Üzünün",
            "turkish": "KULAK",
            "note": "İşitme organı: kulak (Çift organ, müennes)",
            "image": "sets/set5/images/11.webp",
            "audio": "sets/set5/audio/word_11.mp3"
        },
        {
            "id": 12,
            "arabic": "عَيْنٌ",
            "transcription": "‘Ayn",
            "reading": "Aynün",
            "turkish": "GÖZ",
            "note": "Görme organı: göz (Çift organ, müennes)",
            "image": "sets/set5/images/12.webp",
            "audio": "sets/set5/audio/word_12.mp3"
        },
        {
            "id": 13,
            "arabic": "يَدٌ",
            "transcription": "Yad",
            "reading": "Yedün",
            "turkish": "EL",
            "note": "El (Çift organ, müennes)",
            "image": "sets/set5/images/13.webp",
            "audio": "sets/set5/audio/word_13.mp3"
        },
        {
            "id": 14,
            "arabic": "رِجْلٌ",
            "transcription": "Rijl",
            "reading": "Riclün",
            "turkish": "AYAK / BACAK",
            "note": "Yürüme organı: ayak, bacak (Çift organ, müennes)",
            "image": "sets/set5/images/14.webp",
            "audio": "sets/set5/audio/word_14.mp3"
        },
        {
            "id": 15,
            "arabic": "أَنْفٌ",
            "transcription": "Anf",
            "reading": "Enfün",
            "turkish": "BURUN",
            "note": "Koku organı: burun (Tek organ, müzekker)",
            "image": "sets/set5/images/15.webp",
            "audio": "sets/set5/audio/word_15.mp3"
        },
        {
            "id": 16,
            "arabic": "فَمٌ",
            "transcription": "Fam",
            "reading": "Femün",
            "turkish": "AĞIZ",
            "note": "Ağız (Tek organ, müzekker)",
            "image": "sets/set5/images/16.webp",
            "audio": "sets/set5/audio/word_16.mp3"
        },
        {
            "id": 17,
            "arabic": "رَأْسٌ",
            "transcription": "Ra’s",
            "reading": "Re'sün",
            "turkish": "BAŞ / KAFA",
            "note": "Baş, kafa (Müzekker)",
            "image": "sets/set5/images/17.webp",
            "audio": "sets/set5/audio/word_17.mp3"
        },
        {
            "id": 18,
            "arabic": "وَجْهٌ",
            "transcription": "Wajh",
            "reading": "Vechün",
            "turkish": "YÜZ / ÇEHRE",
            "note": "Yüz, çehre, surat (Müzekker)",
            "image": "sets/set5/images/18.webp",
            "audio": "sets/set5/audio/word_18.mp3"
        },
        {
            "id": 19,
            "arabic": "أَبٌ / اَلْأَبُ",
            "transcription": "Ab / al-Ab",
            "reading": "Ebün / El-eb",
            "turkish": "BABA",
            "note": "Aile: baba",
            "image": "sets/set5/images/19.webp",
            "audio": "sets/set5/audio/word_19.mp3"
        },
        {
            "id": 20,
            "arabic": "أُمٌّ / اَلْأُمُّ",
            "transcription": "Umm / al-Umm",
            "reading": "Ümmün / El-ümm",
            "turkish": "ANNE",
            "note": "Aile: anne",
            "image": "sets/set5/images/20.webp",
            "audio": "sets/set5/audio/word_20.mp3"
        },
        {
            "id": 21,
            "arabic": "أَخٌ / اَلْأَخُ",
            "transcription": "Akh / al-Akh",
            "reading": "Ehun / El-eh",
            "turkish": "ERKEK KARDEŞ / ABİ",
            "note": "Aile: erkek kardeş",
            "image": "sets/set5/images/21.webp",
            "audio": "sets/set5/audio/word_21.mp3"
        },
        {
            "id": 22,
            "arabic": "أُخْتٌ / اَلْأُخْتُ",
            "transcription": "Ukht / al-Ukht",
            "reading": "Ühtün / El-üht",
            "turkish": "KIZ KARDEŞ / ABLA",
            "note": "Aile: kız kardeş",
            "image": "sets/set5/images/22.webp",
            "audio": "sets/set5/audio/word_22.mp3"
        },
        {
            "id": 23,
            "arabic": "فَلَّاحٌ / اَلْفَلَّاحُ",
            "transcription": "Fallāḥ / al-Fallāḥ",
            "reading": "Fellâhun / El-fellâh",
            "turkish": "ÇİFTÇİ (ERKEK)",
            "note": "Meslek: erkek çiftçi",
            "image": "sets/set5/images/23.webp",
            "audio": "sets/set5/audio/word_23.mp3"
        },
        {
            "id": 24,
            "arabic": "بَقَرَةٌ / اَلْبَقَرَةُ",
            "transcription": "Baqarah / al-Baqarah",
            "reading": "Bekaratün / El-bekara",
            "turkish": "İNEK",
            "note": "Hayvan: inek",
            "image": "sets/set5/images/24.webp",
            "audio": "sets/set5/audio/word_24.mp3"
        },
        {
            "id": 25,
            "arabic": "دِيكٌ",
            "transcription": "Dīk",
            "reading": "Dîkün",
            "turkish": "HOROZ",
            "note": "Hayvan: horoz (Müzekker)",
            "image": "sets/set5/images/25.webp",
            "audio": "sets/set5/audio/word_25.mp3"
        },
        {
            "id": 26,
            "arabic": "دَجَاجَةٌ",
            "transcription": "Dajājah",
            "reading": "Decâcetün",
            "turkish": "TAVUK",
            "note": "Hayvan: tavuk (Müennes)",
            "image": "sets/set5/images/26.webp",
            "audio": "sets/set5/audio/word_26.mp3"
        },
        {
            "id": 27,
            "arabic": "مُسْلِمٌ / مُسْلِمَةٌ",
            "transcription": "Muslim / Muslimah",
            "reading": "Müslimün / Müslimetün",
            "turkish": "MÜSLÜMAN (ERKEK / KADIN)",
            "note": "Müslüman erkek / Müslüman kadın",
            "image": "sets/set5/images/27.webp",
            "audio": "sets/set5/audio/word_27.mp3"
        },
        {
            "id": 28,
            "arabic": "طَالِبٌ / طَالِبَةٌ",
            "transcription": "Ṭālib / Ṭālibah",
            "reading": "Tâlibün / Tâlibetün",
            "turkish": "ÖĞRENCİ (ERKEK / KIZ)",
            "note": "Erkek öğrenci / Kız öğrenci",
            "image": "sets/set5/images/28.webp",
            "audio": "sets/set5/audio/word_28.mp3"
        },
        {
            "id": 29,
            "arabic": "طَبِيبٌ / طَبِيبَةٌ",
            "transcription": "Ṭabīb / Ṭabībah",
            "reading": "Tabîbün / Tabîbetün",
            "turkish": "DOKTOR (ERKEK / KADIN)",
            "note": "Erkek doktor / Kadın doktor",
            "image": "sets/set5/images/29.webp",
            "audio": "sets/set5/audio/word_29.mp3"
        },
        {
            "id": 30,
            "arabic": "مُدَرِّسٌ / مُدَرِّسَةٌ",
            "transcription": "Mudarris / Mudarrisah",
            "reading": "Müderrisün / Müderrisetün",
            "turkish": "ÖĞRETMEN (ERKEK / KADIN)",
            "note": "Erkek öğretmen / Kadın öğretmen",
            "image": "sets/set5/images/30.webp",
            "audio": "sets/set5/audio/word_30.mp3"
        },
        {
            "id": 31,
            "arabic": "مُهَنْدِسٌ / مُهَنْدِسَةٌ",
            "transcription": "Muhandis / Muhandisah",
            "reading": "Mühendisün / Mühendisetün",
            "turkish": "MÜHENDİS (ERKEK / KADIN)",
            "note": "Erkek mühendis / Kadın mühendis",
            "image": "sets/set5/images/31.webp",
            "audio": "sets/set5/audio/word_31.mp3"
        },
        {
            "id": 32,
            "arabic": "جَدِيدٌ / جَدِيدَةٌ",
            "transcription": "Jadīd / Jadīdah",
            "reading": "Cedîdün / Cedîdetün",
            "turkish": "YENİ (ERİL / DİŞİL)",
            "note": "Sıfat: yeni",
            "image": "sets/set5/images/32.webp",
            "audio": "sets/set5/audio/word_32.mp3"
        },
        {
            "id": 33,
            "arabic": "قَدِيمٌ / قَدِيمَةٌ",
            "transcription": "Qadīm / Qadīmah",
            "reading": "Kadîmün / Kadîmetün",
            "turkish": "ESKİ (ERİL / DİŞİL)",
            "note": "Sıfat: eski",
            "image": "sets/set5/images/33.webp",
            "audio": "sets/set5/audio/word_33.mp3"
        },
        {
            "id": 34,
            "arabic": "حَارٌّ / حَارَّةٌ",
            "transcription": "Ḥārr / Ḥārrah",
            "reading": "Hârrun / Hârratün",
            "turkish": "SICAK (ERİL / DİŞİL)",
            "note": "Sıfat: sıcak",
            "image": "sets/set5/images/34.webp",
            "audio": "sets/set5/audio/word_34.mp3"
        },
        {
            "id": 35,
            "arabic": "بَارِدٌ / بَارِدَةٌ",
            "transcription": "Bārid / Bāridah",
            "reading": "Bâridün / Bâridetün",
            "turkish": "SOĞUK (ERİL / DİŞİL)",
            "note": "Sıfat: soğuk",
            "image": "sets/set5/images/35.webp",
            "audio": "sets/set5/audio/word_35.mp3"
        },
        {
            "id": 36,
            "arabic": "نَظِيفٌ / نَظِيفَةٌ",
            "transcription": "Naẓīf / Naẓīfah",
            "reading": "Nazîfün / Nazîfetün",
            "turkish": "TEMİZ (ERİL / DİŞİL)",
            "note": "Sıfat: temiz",
            "image": "sets/set5/images/36.webp",
            "audio": "sets/set5/audio/word_36.mp3"
        },
        {
            "id": 37,
            "arabic": "وَسِخٌ / وَسِخَةٌ",
            "transcription": "Wasikh / Wasikhah",
            "reading": "Vasihun / Vasihatün",
            "turkish": "KİRLİ (ERİL / DİŞİL)",
            "note": "Sıfat: kirli",
            "image": "sets/set5/images/37.webp",
            "audio": "sets/set5/audio/word_37.mp3"
        },
        {
            "id": 38,
            "arabic": "سَرِيعٌ / سَرِيعَةٌ",
            "transcription": "Sarī‘ / Sarī‘ah",
            "reading": "Serî'un / Serî'atün",
            "turkish": "HIZLI (ERİL / DİŞİL)",
            "note": "Sıfat: hızlı",
            "image": "sets/set5/images/38.webp",
            "audio": "sets/set5/audio/word_38.mp3"
        },
        {
            "id": 39,
            "arabic": "جَمِيلٌ / جَمِيلَةٌ",
            "transcription": "Jamīl / Jamīlah",
            "reading": "Cemîlün / Cemîletün",
            "turkish": "GÜZEL (ERİL / DİŞİL)",
            "note": "Sıfat: güzel",
            "image": "sets/set5/images/39.webp",
            "audio": "sets/set5/audio/word_39.mp3"
        },
        {
            "id": 40,
            "arabic": "مَرِيضٌ / مَرِيضَةٌ",
            "transcription": "Marīḍ / Marīḍah",
            "reading": "Marîdun / Marîdatün",
            "turkish": "HASTA (ERİL / DİŞİL)",
            "note": "Sıfat: hasta",
            "image": "sets/set5/images/40.webp",
            "audio": "sets/set5/audio/word_40.mp3"
        },
        {
            "id": 41,
            "arabic": "جَالِسٌ / جَالِسَةٌ",
            "transcription": "Jālis / Jālisah",
            "reading": "Câlisün / Câlisetün",
            "turkish": "OTURAN (ERİL / DİŞİL)",
            "note": "Oturur halde, oturan",
            "image": "sets/set5/images/41.webp",
            "audio": "sets/set5/audio/word_41.mp3"
        },
        {
            "id": 42,
            "arabic": "وَاقِفٌ / وَاقِفَةٌ",
            "transcription": "Wāqif / Wāqifah",
            "reading": "Vâkıfün / Vâkıfetün",
            "turkish": "AYAKTA DURAN (ERİL / DİŞİL)",
            "note": "Ayakta duran, dikilen",
            "image": "sets/set5/images/42.webp",
            "audio": "sets/set5/audio/word_42.mp3"
        },
        {
            "id": 43,
            "arabic": "مَفْتُوحٌ / مَفْتُوحَةٌ",
            "transcription": "Maftūḥ / Maftūḥah",
            "reading": "Meftûhun / Meftûhatün",
            "turkish": "AÇIK (ERİL / DİŞİL)",
            "note": "Sıfat: açık",
            "image": "sets/set5/images/43.webp",
            "audio": "sets/set5/audio/word_43.mp3"
        },
        {
            "id": 44,
            "arabic": "مُغْلَقٌ / مُغْلَقَةٌ",
            "transcription": "Mughlaq / Mughlaqah",
            "reading": "Muglakun / Muglakatün",
            "turkish": "KAPALI / KİLİTLİ (ERİL / DİŞİL)",
            "note": "Sıfat: kapalı, kilitli",
            "image": "sets/set5/images/44.webp",
            "audio": "sets/set5/audio/word_44.mp3"
        },
        {
            "id": 45,
            "arabic": "لِـ...",
            "transcription": "Li-...",
            "reading": "Li-...",
            "turkish": "-E AİT, İÇİN",
            "note": "Harf-i cer: aidiyet, sahiplik veya sebep bildirir",
            "image": "sets/set5/images/45.webp",
            "audio": "sets/set5/audio/word_45.mp3"
        },
        {
            "id": 46,
            "arabic": "لِمَنْ؟",
            "transcription": "Li-man?",
            "reading": "Li-men?",
            "turkish": "KİMİN? / KİME AİT?",
            "note": "Soru edatı: kimin? kime ait?",
            "image": "sets/set5/images/46.webp",
            "audio": "sets/set5/audio/word_46.mp3"
        },
        {
            "id": 47,
            "arabic": "أَيْضًا",
            "transcription": "Ayḍan",
            "reading": "Eydan",
            "turkish": "DE, DA / O DA / AYNI ŞEKİLDE",
            "note": "Katkı/beraberlik zarfı: de, da, aynı şekilde",
            "image": "sets/set5/images/47.webp",
            "audio": "sets/set5/audio/word_47.mp3"
        },
        {
            "id": 48,
            "arabic": "جِدًّا",
            "transcription": "Jiddan",
            "reading": "Cidden",
            "turkish": "ÇOK / PEK ÇOK",
            "note": "Pekiştirme zarfı: çok, gayet",
            "image": "sets/set5/images/48.webp",
            "audio": "sets/set5/audio/word_48.mp3"
        },
        {
            "id": 49,
            "arabic": "شَمْسٌ / اَلشَّمْسُ",
            "transcription": "Shams / ash-Shams",
            "reading": "Şemsün / Eş-şems",
            "turkish": "GÜNEŞ",
            "note": "Göksel cisim: güneş (Semai müennes)",
            "image": "sets/set5/images/49.webp",
            "audio": "sets/set5/audio/word_49.mp3"
        },
        {
            "id": 50,
            "arabic": "قَمَرٌ / اَلْقَمَرُ",
            "transcription": "Qamar / al-Qamar",
            "reading": "Kamerun / El-kamer",
            "turkish": "AY (HİLAL/DOLUNAY)",
            "note": "Göksel cisim: ay (Müzekker)",
            "image": "sets/set5/images/50.webp",
            "audio": "sets/set5/audio/word_50.mp3"
        },
        {
            "id": 51,
            "arabic": "اَلْمَشْرِقُ",
            "transcription": "al-Mashriq",
            "reading": "El-meşrik",
            "turkish": "DOĞU (GÜN DOĞUSU)",
            "note": "Yön: doğu",
            "image": "sets/set5/images/51.webp",
            "audio": "sets/set5/audio/word_51.mp3"
        },
        {
            "id": 52,
            "arabic": "اَلْمَغْرِبُ",
            "transcription": "al-Maghrib",
            "reading": "El-magrib",
            "turkish": "BATI (GÜN BATIMI)",
            "note": "Yön: batı",
            "image": "sets/set5/images/52.webp",
            "audio": "sets/set5/audio/word_52.mp3"
        },
        {
            "id": 53,
            "arabic": "مَا هٰذَا؟",
            "transcription": "Mā hādhā?",
            "reading": "Mâ hâzâ?",
            "turkish": "BU NEDİR? (ERİL)",
            "note": "Soru kalıbı: müzekker nesneler için bu nedir?",
            "image": "sets/set5/images/53.webp",
            "audio": "sets/set5/audio/word_53.mp3"
        },
        {
            "id": 54,
            "arabic": "مَا هٰذِهِ؟",
            "transcription": "Mā hādhihi?",
            "reading": "Mâ hâzihi?",
            "turkish": "BU NEDİR? (DİŞİL)",
            "note": "Soru kalıbı: müennes nesneler için bu nedir?",
            "image": "sets/set5/images/54.webp",
            "audio": "sets/set5/audio/word_54.mp3"
        },
        {
            "id": 55,
            "arabic": "مَنْ هٰذَا؟ / مَنْ هٰذِهِ؟",
            "transcription": "Man hādhā? / Man hādhihi?",
            "reading": "Men hâzâ? / Men hâzihi?",
            "turkish": "BU KİMDİR? (ERİL / DİŞİL)",
            "note": "Soru kalıbı: şahıslar için bu kimdir?",
            "image": "sets/set5/images/55.webp",
            "audio": "sets/set5/audio/word_55.mp3"
        },
        {
            "id": 56,
            "arabic": "لِمَنْ هٰذَا؟ / لِمَنْ هٰذِهِ؟",
            "transcription": "Li-man hādhā? / Li-man hādhihi?",
            "reading": "Li-men hâzâ? / Li-men hâzihi?",
            "turkish": "BU KİMİNDİR? / KİME AİTTİR?",
            "note": "Soru kalıbı: aidiyet sorusu (eril ve dişil)",
            "image": "sets/set5/images/56.webp",
            "audio": "sets/set5/audio/word_56.mp3"
        },
        {
            "id": 57,
            "arabic": "هٰذَا لِعَلِيٍّ وَذٰلِكَ لِحَامِدٍ",
            "transcription": "Hādhā li-‘Aliyyin wa-dhālika li-Ḥāmid.",
            "reading": "Hâzâ li-Aliyyin ve zâlike li-Hâmid.",
            "turkish": "Bu Ali'nindir, şu ise Hamid'indir.",
            "note": "Aidiyet cümlesi",
            "image": "sets/set5/images/57.webp",
            "audio": "sets/set5/audio/word_57.mp3"
        },
        {
            "id": 58,
            "arabic": "مَا هٰذِهِ؟ هٰذِهِ مِكْوَاةٌ.",
            "transcription": "Mā hādhihi? Hādhihi mikwāh.",
            "reading": "Mâ hâzihi? Hâzihi mikvâtün.",
            "turkish": "Bu nedir? Bu bir ütüdür.",
            "note": "Soru-cevap kalıbı (müennes)",
            "image": "sets/set5/images/58.webp",
            "audio": "sets/set5/audio/word_58.mp3"
        },
        {
            "id": 59,
            "arabic": "لِمَنْ هٰذِهِ السَّيَّارَةُ؟ هٰذِهِ سَيَّارَةُ الْمُدِيرِ.",
            "transcription": "Li-man hādhihi s-sayyārah? Hādhihi sayyāratu l-mudīr.",
            "reading": "Li-men hâzihi's-seyyâratü? Hâzihi seyyâratü'l-müdîr.",
            "turkish": "Bu araba kimin? Bu müdürün arabasıdır.",
            "note": "İzafet ve aidiyet sorusu",
            "image": "sets/set5/images/59.webp",
            "audio": "sets/set5/audio/word_59.mp3"
        },
        {
            "id": 60,
            "arabic": "هٰذِهِ سَاعَةُ عَلِيٍّ، هِيَ جَمِيلَةٌ جِدًّا.",
            "transcription": "Hādhihi sā‘atu ‘Aliyy, hiya jamīlatun jiddan.",
            "reading": "Hâzihi sâ'atü Aliyyin, hiye cemîletün cidden.",
            "turkish": "Bu Ali'nin saatidir; o çok güzeldir.",
            "note": "İzafet ve niteleme cümlesi",
            "image": "sets/set5/images/60.webp",
            "audio": "sets/set5/audio/word_60.mp3"
        },
        {
            "id": 61,
            "arabic": "اَلْمِلْعَقَةُ فِي الْقِدْرِ.",
            "transcription": "al-Mil‘aqatu fī l-qidr.",
            "reading": "El-mil'akatü fi'l-kıdr.",
            "turkish": "Kaşık tencerenin içindedir.",
            "note": "Harf-i cerli yer/konum cümlesi",
            "image": "sets/set5/images/61.webp",
            "audio": "sets/set5/audio/word_61.mp3"
        },
        {
            "id": 62,
            "arabic": "أَيْنَ قِدْرُ اللَّحْمِ؟ هِيَ فِي الثَّلَّاجَةِ.",
            "transcription": "Ayna qidru l-laḥm? Hiya fī th-thallājah.",
            "reading": "Eyne kıdrü'l-lahm? Hiye fi's-sellâce.",
            "turkish": "Et tenceresi nerede? O buzdolabındadır.",
            "note": "Konum ve soru-cevap cümlesi",
            "image": "sets/set5/images/62.webp",
            "audio": "sets/set5/audio/word_62.mp3"
        },
        {
            "id": 63,
            "arabic": "هٰذَا ابْنُ حَامِدٍ جَالِسٌ، وَهٰذِهِ بِنْتُ يَاسِرٍ وَاقِفَةٌ.",
            "transcription": "Hādhā bnu Ḥāmidin jālis, wa-hādhihi bintu Yāsirin wāqifah.",
            "reading": "Hâza'bnu Hâmidin câlisün, ve hâzihi bintü Yâsirin vâkıfe.",
            "turkish": "Bu Hamid'in oğludur oturuyor, bu ise Yasir'in kızıdır ayakta duruyor.",
            "note": "Karşılaştırmalı durum cümlesi",
            "image": "sets/set5/images/63.webp",
            "audio": "sets/set5/audio/word_63.mp3"
        },
        {
            "id": 64,
            "arabic": "أَهِيَ أَيْضًا مُهَنْدِسَةٌ؟ لَا، هِيَ طَبِيبَةٌ.",
            "transcription": "A-hiya ayḍan muhandisah? Lā, hiya ṭabībah.",
            "reading": "E-hiye eydan mühendisetün? Lâ, hiye tabîbetün.",
            "turkish": "O da mı mühendis? Hayır, o bir doktordur.",
            "note": "İstifham ve tashih cümlesi",
            "image": "sets/set5/images/64.webp",
            "audio": "sets/set5/audio/word_64.mp3"
        },
        {
            "id": 65,
            "arabic": "اَلشَّايُ حَارٌّ وَالْقَهْوَةُ بَارِدَةٌ.",
            "transcription": "ash-Shāyu ḥārr wa-l-qahwatu bāridah.",
            "reading": "Eş-şâyü hârrun ve'l-kahvetü bâride.",
            "turkish": "Çay sıcaktır, kahve ise soğuktur.",
            "note": "Zıt anlamlı sıfat cümlesi",
            "image": "sets/set5/images/65.webp",
            "audio": "sets/set5/audio/word_65.mp3"
        },
        {
            "id": 66,
            "arabic": "اَلْمَسْجِدُ بَعِيدٌ وَالْمَدْرَسَةُ قَرِيبَةٌ.",
            "transcription": "al-Masjidu ba‘īd wa-l-madrasatu qarībah.",
            "reading": "El-mescidü ba'îdün ve'l-medresetü karîbe.",
            "turkish": "Mescit uzaktır, okul ise yakındır.",
            "note": "Uzaklık/yakınlık sıfat cümlesi",
            "image": "sets/set5/images/66.webp",
            "audio": "sets/set5/audio/word_66.mp3"
        },
        {
            "id": 67,
            "arabic": "اَلْقَمَرُ جَمِيلٌ وَالشَّمْسُ جَمِيلَةٌ.",
            "transcription": "al-Qamaru jamīl wa-sh-shamsu jamīlah.",
            "reading": "El-kameru cemîlün ve'ş-şemsü cemîle.",
            "turkish": "Ay güzeldir, güneş de güzeldir.",
            "note": "Eril/dişil sıfat uyumu cümlesi",
            "image": "sets/set5/images/67.webp",
            "audio": "sets/set5/audio/word_67.mp3"
        },
        {
            "id": 68,
            "arabic": "لِلّٰهِ الْمَشْرِقُ وَالْمَغْرِبُ.",
            "transcription": "Lillāhi l-mashriqu wa-l-maghrib.",
            "reading": "Lillâhi'l-meşriku ve'l-magrib.",
            "turkish": "Doğu da batı da Allah'ındır.",
            "note": "Ayet / hikmetli ifade",
            "image": "sets/set5/images/68.webp",
            "audio": "sets/set5/audio/word_68.mp3"
        }
    ]
}
};

if (typeof window !== 'undefined') {
  window.SETS_DATA = SETS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SETS_DATA;
}
