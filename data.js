// Arapça Kelime Ezberleme - Setler Veritabanı
// SET-1, SET-2, SET-3 modüler mimarisi

const SETS_DATA = {
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
  }
};

if (typeof window !== 'undefined') {
  window.SETS_DATA = SETS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SETS_DATA;
}
