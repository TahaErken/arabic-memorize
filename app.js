/**
 * Arapça Kelime Ezberleme & 7 Sn Hızlı Test Uygulaması
 * Durus al-Lughah al-Arabiyyah Serisi & Arabic.docx
 */

// ==========================================
// SES VE SES EFEKTLERİ YÖNETİMİ
// HTML5 Audio (.wav / .mp3) + Web Audio API Fallback
// ==========================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.audioCorrect = new Audio('audio/correct.wav');
    this.audioBuzzer = new Audio('audio/buzzer.wav');
    this.audioBgm = new Audio('audio/quiz_bgm.wav');
    this.audioBgm.loop = true;
    this.audioBgm.volume = 0.28;
    this.isBgmMuted = localStorage.getItem('arabic_quiz_bgm_muted') === 'true';
  }

  init() {
    if (!this.ctx) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      } catch (e) {}
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Test Modu Heyecan Verici Arka Plan Müziği
  playQuizMusic() {
    if (this.isBgmMuted) {
      this.updateBgmUi();
      return;
    }
    this.init();
    try {
      this.audioBgm.currentTime = 0;
      const playPromise = this.audioBgm.play();
      if (playPromise) {
        playPromise.catch((e) => {
          console.log('BGM otomatik çalma kullanıcı etkileşimi bekliyor:', e);
        });
      }
    } catch (e) {}
    this.updateBgmUi();
  }

  stopQuizMusic() {
    try {
      this.audioBgm.pause();
      this.audioBgm.currentTime = 0;
    } catch (e) {}
  }

  toggleBgmMute() {
    this.isBgmMuted = !this.isBgmMuted;
    localStorage.setItem('arabic_quiz_bgm_muted', this.isBgmMuted.toString());
    if (this.isBgmMuted) {
      this.audioBgm.pause();
    } else {
      if (app.activeTab === 'test') {
        this.audioBgm.play().catch(() => {});
      }
    }
    this.updateBgmUi();
    return this.isBgmMuted;
  }

  updateBgmUi() {
    const icon = document.getElementById('bgmIcon');
    const label = document.getElementById('bgmLabel');
    const btn = document.getElementById('bgmMuteBtn');
    if (!btn) return;
    if (this.isBgmMuted) {
      if (icon) icon.textContent = '🔇';
      if (label) label.textContent = 'Müzik Kapalı';
      btn.classList.add('muted');
    } else {
      if (icon) icon.textContent = '🎵';
      if (label) label.textContent = 'Müzik';
      btn.classList.remove('muted');
    }
  }

  // Başarı / Bildin Sesi (Melodik Çan)
  playSuccess() {
    this.init();
    try {
      this.audioCorrect.currentTime = 0;
      const playPromise = this.audioCorrect.play();
      if (playPromise) {
        playPromise.catch(() => this.fallbackSuccess());
      }
    } catch (e) {
      this.fallbackSuccess();
    }
  }

  fallbackSuccess() {
    try {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50];

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.25, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.5);
      });
    } catch (e) {}
  }

  // Kırmızı Dıııt / Yanlış / Süre Bitti Sesi (Buzzer DZZZZT!)
  playBuzzer() {
    this.init();
    try {
      this.audioBuzzer.currentTime = 0;
      const playPromise = this.audioBuzzer.play();
      if (playPromise) {
        playPromise.catch(() => this.fallbackBuzzer());
      }
    } catch (e) {
      this.fallbackBuzzer();
    }
  }

  fallbackBuzzer() {
    try {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(130, now);
      osc1.frequency.linearRampToValueAtTime(110, now + 0.5);

      osc2.type = 'square';
      osc2.frequency.setValueAtTime(135, now);
      osc2.frequency.linearRampToValueAtTime(115, now + 0.5);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.setValueAtTime(0.35, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.55);
      osc2.stop(now + 0.55);
    } catch (e) {}
  }

  // Tik-Tak Sesi
  playTick() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }
}

const sfx = new SoundFX();

// ==========================================
// ARAPÇA KELİME SESLENDİRME (GERÇEK MP3 + TTS YEDEK)
// ==========================================
let currentAudioPlayer = null;
let hasUserInteracted = false;

function playArabicAudio(item) {
  if (!item) return;

  // Önceki çalan ses varsa durdur
  if (currentAudioPlayer) {
    try {
      currentAudioPlayer.pause();
      currentAudioPlayer.currentTime = 0;
    } catch (e) {}
  }

  // 1. Gerçek Orijinal MP3 Dosyası ile Çalma
  if (item.audio) {
    try {
      const audio = new Audio(item.audio);
      currentAudioPlayer = audio;
      const promise = audio.play();
      if (promise !== undefined) {
        promise.catch((err) => {
          console.log('Autoplay beklemede (kullanıcı tıklaması bekleniyor):', err);
          // Tarayıcı otomatik çalmayı engellediyse TTS yedek olarak dene
          fallbackTTS(item.arabic);
        });
      }
      return;
    } catch (e) {
      console.warn('Audio tag hatası:', e);
    }
  }

  // 2. Yedek: Web Speech API
  fallbackTTS(item.arabic);
}

function fallbackTTS(text) {
  if (!text || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    utterance.rate = 0.85;

    const voices = window.speechSynthesis.getVoices();
    const arVoice = voices.find(v => v.lang.startsWith('ar') || v.lang.includes('Arabic') || v.name.toLowerCase().includes('arabic'));
    if (arVoice) utterance.voice = arVoice;

    window.speechSynthesis.speak(utterance);
  } catch (e) {}
}

// Konfeti Patlaması
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#3b82f6', '#f59e0b', '#ec4899'],
      disableForReducedMotion: true
    });
  }
}

// Uçuşan Süre Rozeti (Ultra Akıcı, Belirgin ve Net)
function spawnFloatingPill(sourceElement, text, type) {
  const pill = document.createElement('div');
  pill.className = `floating-time-pill ${type}`;
  const icon = type === 'gain' ? '⚡' : '🚨';
  const label = type === 'gain' ? 'KAZANÇ!' : 'CEZA!';
  pill.innerHTML = `<span>${icon}</span> <span>${text}</span> <span style="font-size: 0.92rem; font-weight: 800; opacity: 0.92; margin-left: 2px;">${label}</span>`;

  let x = window.innerWidth / 2;
  let y = window.innerHeight * 0.42;

  if (sourceElement) {
    const rect = sourceElement.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = Math.min(rect.top - 10, window.innerHeight * 0.65);
    y = Math.max(120, y);
  }

  pill.style.left = `${Math.round(x)}px`;
  pill.style.top = `${Math.round(y)}px`;

  document.body.appendChild(pill);
  setTimeout(() => {
    if (pill.parentNode) {
      pill.parentNode.removeChild(pill);
    }
  }, 1250);
}

// ==========================================
// FAVORİ KELİMELER YÖNETİCİSİ (FAVORITES MANAGER)
// ==========================================
function getWordSetKey(item) {
  if (!item) return app.activeSetId;
  return item.sourceSetKey || app.activeSetId;
}

const FavoritesManager = {
  STORAGE_KEY: 'arabic_favorites_keys',

  getKeys() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  isFavorite(setKey, wordId) {
    const key = `${setKey}_${wordId}`;
    return this.getKeys().includes(key);
  },

  toggle(setKey, wordId) {
    const key = `${setKey}_${wordId}`;
    let keys = this.getKeys();
    const index = keys.indexOf(key);
    let added = false;
    if (index >= 0) {
      keys.splice(index, 1);
      added = false;
    } else {
      keys.push(key);
      added = true;
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(keys));
    this.syncFavoritesSet();
    this.updateAllUi();
    return added;
  },

  syncFavoritesSet() {
    const keys = this.getKeys();
    const favWords = [];
    keys.forEach(k => {
      const parts = k.split('_');
      if (parts.length === 2) {
        const sKey = parts[0];
        const wId = parseInt(parts[1], 10);
        if (SETS_DATA[sKey] && SETS_DATA[sKey].words) {
          const found = SETS_DATA[sKey].words.find(w => w.id === wId);
          if (found) {
            favWords.push({
              ...found,
              sourceSetKey: sKey,
              favKey: k
            });
          }
        }
      }
    });

    if (SETS_DATA['favorites']) {
      SETS_DATA['favorites'].words = favWords;
    }

    if (app.activeSetId === 'favorites') {
      app.words = [...favWords];
      if (app.currentIndex >= app.words.length) {
        app.currentIndex = Math.max(0, app.words.length - 1);
      }
    }

    const countEl = document.getElementById('drawerFavCount');
    if (countEl) {
      countEl.textContent = `${favWords.length} Kelime`;
    }
    const dropFavCountEl = document.getElementById('dropdownFavCount');
    if (dropFavCountEl) {
      dropFavCountEl.textContent = `${favWords.length} Kelime`;
    }
  },

  updateAllUi() {
    // 1. Ezber Kartı Favori Butonu
    const learnFavBtn = document.getElementById('learnFavBtn');
    if (learnFavBtn) {
      const cur = app.words[app.currentIndex];
      if (cur) {
        const sKey = getWordSetKey(cur);
        const isFav = this.isFavorite(sKey, cur.id);
        learnFavBtn.classList.toggle('active', isFav);
        learnFavBtn.innerHTML = isFav ? '⭐' : '☆';
        learnFavBtn.title = isFav ? 'Favorilerden Çıkar' : 'Favorilere Ekle';
      }
    }

    // 2. Test Kartı Favori Butonu
    const quizFavBtn = document.getElementById('quizFavBtn');
    if (quizFavBtn) {
      const cur = app.test.currentQuestion;
      if (cur) {
        const sKey = getWordSetKey(cur);
        const isFav = this.isFavorite(sKey, cur.id);
        quizFavBtn.classList.toggle('active', isFav);
        quizFavBtn.innerHTML = isFav ? '⭐' : '☆';
        quizFavBtn.title = isFav ? 'Favorilerden Çıkar' : 'Favorilere Ekle';
      }
    }

    // 3. Galeri Butonları
    document.querySelectorAll('.gallery-fav-btn').forEach(btn => {
      const sKey = btn.dataset.setKey;
      const wId = parseInt(btn.dataset.wordId, 10);
      const isFav = this.isFavorite(sKey, wId);
      btn.classList.toggle('active', isFav);
      btn.innerHTML = isFav ? '⭐' : '☆';
    });

    // 4. Ana Sayfa Set Kataloğu Favori Butonları
    document.querySelectorAll('.catalog-fav-btn').forEach(btn => {
      const sKey = btn.dataset.setKey;
      const wId = parseInt(btn.dataset.wordId, 10);
      const isFav = this.isFavorite(sKey, wId);
      btn.classList.toggle('active', isFav);
      btn.innerHTML = isFav ? '⭐' : '☆';
    });
  }
};

// ==========================================
// UYGULAMA ANA DURUMU (APP STATE)
// ==========================================
function getBestTimeForSet(setId) {
  const val = localStorage.getItem(`arabic_best_time_${setId}`);
  return val ? parseFloat(val) : null;
}

const app = {
  activeSetId: 'set1',
  words: [...SETS_DATA['set1'].words],
  currentIndex: 0,
  activeTab: 'learn',

  test: {
    questionIndex: 0,
    totalQuestions: 20,
    deck: [],
    currentQuestion: null,

    // Süre ve Hız Takibi
    testStartTime: null,
    totalPenalties: 0,
    stopwatchIntervalId: null,
    timeRemaining: 7.0,
    timerId: null,
    autoAdvanceId: null,
    isAnswered: false,

    bestTime: getBestTimeForSet('set1')
  }
};

// ==========================================
// SET DEĞİŞTİRME FONKSİYONU
// ==========================================
function switchSet(setId) {
  const setData = SETS_DATA[setId];
  if (!setData) return;

  if (!setData.available || (!setData.isFavorites && setData.words.length === 0)) {
    alert(`"${setData.title}" henüz hazırlanmadı.\n\nİlgili klasöre ("sets/${setId}/images") görsellerinizi yüklediğinizde kolayca aktif edilecektir.`);
    return;
  }

  app.activeSetId = setId;
  app.words = [...setData.words];
  app.currentIndex = 0;
  app.test.bestTime = getBestTimeForSet(setId);

  updateSetDropdownUi();
  closeAllDropdowns();

  if (app.activeTab === 'home') {
    renderHomeSetDetail(setId);
  } else if (app.activeTab === 'learn') {
    updateLearnCard();
  } else {
    startTestMode();
  }

  updateNavStatBadge();
}

// ==========================================
// 1. EZBER MODU YÖNETİMİ
// ==========================================
function updateLearnCard() {
  const emptyBox = document.getElementById('learnFavEmptyBox');
  const cardBody = document.getElementById('learnCardBody');

  if (app.words.length === 0) {
    if (emptyBox) emptyBox.style.display = 'block';
    if (cardBody) cardBody.style.display = 'none';
    document.getElementById('currentCardNum').textContent = '0';
    document.getElementById('totalCardNum').textContent = '0';
    FavoritesManager.updateAllUi();
    return;
  }

  if (emptyBox) emptyBox.style.display = 'none';
  if (cardBody) cardBody.style.display = 'block';

  if (app.currentIndex >= app.words.length) {
    app.currentIndex = Math.max(0, app.words.length - 1);
  }

  const item = app.words[app.currentIndex];
  if (!item) return;

  const imgEl = document.getElementById('learnImage');
  imgEl.src = item.image;
  imgEl.alt = item.turkish;

  document.getElementById('learnArabic').textContent = item.arabic;
  document.getElementById('learnReading').textContent = `${item.transcription} (${item.reading})`;

  const triggerBtn = document.getElementById('revealTriggerBtn');
  const revealedBox = document.getElementById('meaningRevealedBox');

  triggerBtn.style.display = 'flex';
  revealedBox.style.display = 'none';

  document.getElementById('turkishWord').textContent = item.turkish;
  document.getElementById('turkishNote').textContent = item.note || '';

  document.getElementById('currentCardNum').textContent = app.currentIndex + 1;
  document.getElementById('totalCardNum').textContent = app.words.length;

  FavoritesManager.updateAllUi();

  // Görsel ekrana gelir gelmez seslendir
  playArabicAudio(item);
}

function toggleMeaningReveal() {
  const triggerBtn = document.getElementById('revealTriggerBtn');
  const revealedBox = document.getElementById('meaningRevealedBox');

  if (triggerBtn.style.display !== 'none') {
    triggerBtn.style.display = 'none';
    revealedBox.style.display = 'block';
  } else {
    triggerBtn.style.display = 'flex';
    revealedBox.style.display = 'none';
  }
}

function nextLearnCard() {
  app.currentIndex = (app.currentIndex + 1) % app.words.length;
  updateLearnCard();
}

function prevLearnCard() {
  app.currentIndex = (app.currentIndex - 1 + app.words.length) % app.words.length;
  updateLearnCard();
}

function shuffleLearnCards() {
  for (let i = app.words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [app.words[i], app.words[j]] = [app.words[j], app.words[i]];
  }
  app.currentIndex = 0;
  updateLearnCard();
}

// ==========================================
// 2. TEST MODU (EN HIZLI SÜRE & CEZA SİSTEMİ)
// ==========================================
function startTestMode() {
  clearAllTimers();

  const emptyBox = document.getElementById('testFavEmptyBox');
  const cardBody = document.getElementById('testCardBody');

  if (app.words.length === 0) {
    if (emptyBox) emptyBox.style.display = 'block';
    if (cardBody) cardBody.style.display = 'none';
    document.getElementById('quizProgress').textContent = '0 / 0';
    document.getElementById('quizTotalTime').textContent = '0.0s';
    sfx.stopQuizMusic();
    return;
  }

  if (emptyBox) emptyBox.style.display = 'none';
  if (cardBody) cardBody.style.display = 'block';

  const shuffled = [...app.words].sort(() => Math.random() - 0.5);
  app.test.deck = shuffled;
  app.test.questionIndex = 0;
  app.test.totalQuestions = Math.min(20, shuffled.length);
  app.test.totalPenalties = 0;
  app.test.testStartTime = Date.now();
  app.test.bestTime = getBestTimeForSet(app.activeSetId);

  const bestEl = document.getElementById('quizBestTime');
  if (app.test.bestTime !== null) {
    bestEl.textContent = `${app.test.bestTime.toFixed(1)}s`;
  } else {
    bestEl.textContent = '--';
  }

  sfx.playQuizMusic();
  startStopwatch();
  loadQuestion();
}

function startStopwatch() {
  if (app.test.stopwatchIntervalId) {
    clearInterval(app.test.stopwatchIntervalId);
  }

  const timeEl = document.getElementById('quizTotalTime');
  app.test.stopwatchIntervalId = setInterval(() => {
    if (!app.test.testStartTime) return;
    const elapsed = (Date.now() - app.test.testStartTime) / 1000 + app.test.totalPenalties;
    timeEl.textContent = `${elapsed.toFixed(1)}s`;
  }, 100);
}

function updateQuizStats() {
  document.getElementById('quizProgress').textContent = `${app.test.questionIndex + 1} / ${app.test.totalQuestions}`;
}

function clearAllTimers() {
  if (app.test.timerId) {
    clearInterval(app.test.timerId);
    app.test.timerId = null;
  }
  if (app.test.autoAdvanceId) {
    clearInterval(app.test.autoAdvanceId);
    app.test.autoAdvanceId = null;
  }
  if (app.test.stopwatchIntervalId) {
    clearInterval(app.test.stopwatchIntervalId);
    app.test.stopwatchIntervalId = null;
  }
}

function loadQuestion() {
  if (app.test.timerId) clearInterval(app.test.timerId);
  if (app.test.autoAdvanceId) clearInterval(app.test.autoAdvanceId);
  app.test.isAnswered = false;

  const currentItem = app.test.deck[app.test.questionIndex];
  app.test.currentQuestion = currentItem;

  const quizCard = document.getElementById('quizCard');
  quizCard.classList.remove('shake-error');

  const feedbackBox = document.getElementById('quizFeedbackBox');
  feedbackBox.className = 'quiz-feedback-box';
  feedbackBox.style.display = 'none';

  const nextBtn = document.getElementById('nextQuestionBtn');
  nextBtn.style.display = 'none';

  const imgEl = document.getElementById('quizImage');
  imgEl.src = currentItem.image;
  imgEl.alt = 'Soru Görseli';

  // İpucu ve Odak katmanlarını sıfırla
  const viewport = document.getElementById('quizImageViewport');
  if (viewport) viewport.classList.remove('wrong-soft');

  const focusOverlay = document.getElementById('quizCorrectFocusOverlay');
  if (focusOverlay) focusOverlay.style.display = 'none';

  const hintOverlay = document.getElementById('quizHintOverlay');
  if (hintOverlay) hintOverlay.style.display = 'none';

  const hintBtn = document.getElementById('quizHintBtn');
  if (hintBtn) hintBtn.classList.remove('active');

  const hintText = document.getElementById('quizHintText');
  if (hintText) hintText.textContent = currentItem.turkish;

  // 3 Çoktan Seçmeli Seçenek (Aktif Set veya Destekleyici Setlerden)
  let distractors = app.words.filter(item => {
    return item.id !== currentItem.id || getWordSetKey(item) !== getWordSetKey(currentItem);
  }).sort(() => Math.random() - 0.5).slice(0, 2);

  if (distractors.length < 2) {
    const backupPool = [];
    ['set1', 'set2'].forEach(sk => {
      if (SETS_DATA[sk] && SETS_DATA[sk].words) {
        backupPool.push(...SETS_DATA[sk].words.map(w => ({ ...w, sourceSetKey: sk })));
      }
    });
    const extra = backupPool.filter(w => w.arabic !== currentItem.arabic)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2 - distractors.length);
    distractors = [...distractors, ...extra];
  }

  const choices = [currentItem, ...distractors].sort(() => Math.random() - 0.5);

  const optionsContainer = document.getElementById('quizOptionsList');
  optionsContainer.innerHTML = '';

  const prefixes = ['A', 'B', 'C'];
  choices.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'quiz-opt-btn';
    btn.dataset.itemId = choice.id;

    btn.innerHTML = `
      <div class="opt-left-content">
        <div class="opt-prefix-badge">${prefixes[index]}</div>
        <div class="opt-text-stack">
          <div class="opt-ar-text">${choice.arabic}</div>
          <div class="opt-latin-text">${choice.transcription} (${choice.reading})</div>
        </div>
      </div>
      <div class="opt-tr-revealed">${choice.turkish}</div>
    `;

    btn.addEventListener('click', () => handleOptionClick(choice, btn));
    optionsContainer.appendChild(btn);
  });

  FavoritesManager.updateAllUi();
  updateQuizStats();
  startSevenSecondTimer();
}

// 7 SANİYE SAYACI
function startSevenSecondTimer() {
  const TOTAL_TIME = 7.0;
  app.test.timeRemaining = TOTAL_TIME;

  const timerFill = document.getElementById('timerFill');
  const timerBadge = document.getElementById('timerSecondsBadge');

  timerFill.className = 'timer-fill';
  timerFill.style.width = '100%';

  timerBadge.className = 'timer-seconds-badge green';
  timerBadge.textContent = '7.0s';

  const startTime = Date.now();
  let lastSecondPlayed = 8;

  app.test.timerId = setInterval(() => {
    if (app.test.isAnswered) {
      clearInterval(app.test.timerId);
      return;
    }

    const elapsed = (Date.now() - startTime) / 1000;
    const remaining = Math.max(0, TOTAL_TIME - elapsed);
    app.test.timeRemaining = remaining;

    const percent = (remaining / TOTAL_TIME) * 100;
    timerFill.style.width = `${percent}%`;
    timerBadge.textContent = remaining.toFixed(1) + 's';

    if (remaining <= 2.2) {
      timerFill.className = 'timer-fill danger';
      timerBadge.className = 'timer-seconds-badge';
    } else if (remaining <= 4.2) {
      timerFill.className = 'timer-fill warning';
      timerBadge.className = 'timer-seconds-badge amber';
    }

    const ceilSec = Math.ceil(remaining);
    if (ceilSec <= 3 && ceilSec !== lastSecondPlayed && remaining > 0.1) {
      lastSecondPlayed = ceilSec;
      sfx.playTick();
    }

    if (remaining <= 0) {
      clearInterval(app.test.timerId);
      handleTimeout();
    }
  }, 50);
}

// Seçenek Tıklandığında
function handleOptionClick(selectedItem, btnElement) {
  if (app.test.isAnswered) return;
  app.test.isAnswered = true;
  clearInterval(app.test.timerId);

  const cur = app.test.currentQuestion;
  const isCorrect = (selectedItem.id === cur.id) && (getWordSetKey(selectedItem) === getWordSetKey(cur));

  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  allBtns.forEach(b => b.disabled = true);

  if (isCorrect) {
    const savedSeconds = Math.max(1, Math.round(app.test.timeRemaining));

    btnElement.classList.add('correct-choice', 'show-turkish');
    sfx.playSuccess();
    triggerConfetti();

    spawnFloatingPill(btnElement, `+${savedSeconds} sn`, 'gain');
    showFeedback(true, `Harika! Doğru bildin! (+${savedSeconds} sn)`);
    updateQuizStats();

    // DOĞRU BİLİNCE HEMEN ANLAMI OKUNSUN (Arapça seslendirme çalınır)
    playArabicAudio(cur);

    // VE ARDINDAN BİR SONRAKİ KELİMEYE GEÇSİN
    setTimeout(() => {
      nextQuizQuestion();
    }, 1200);
  } else {
    app.test.totalPenalties += 2;

    btnElement.classList.add('wrong-choice', 'show-turkish');
    triggerWrongBuzzerAndHighlight();

    spawnFloatingPill(btnElement, `-2 sn`, 'penalty');
    showFeedback(false, `Dıııt! Yanlış cevap. (+2 sn ceza eklendi)`);
    updateQuizStats();
    startThreeSecondAutoAdvance();
  }
}

// 7 Sn Süre Bittiğinde
function handleTimeout() {
  if (app.test.isAnswered) return;
  app.test.isAnswered = true;

  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  allBtns.forEach(b => b.disabled = true);

  app.test.totalPenalties += 2;
  triggerWrongBuzzerAndHighlight(true);

  spawnFloatingPill(null, `-2 sn`, 'penalty');
  showFeedback(false, `⏰ 7 Saniyelik Süre Doldu! (+2 sn ceza eklendi)`);
  updateQuizStats();
  startThreeSecondAutoAdvance();
}

// Kırmızı Dıııt, Doğru Kelimeyi Telaffuz Etme & Ana Odakta Doğru Cevabı Gösterme
function triggerWrongBuzzerAndHighlight(isTimeout = false) {
  sfx.playBuzzer();

  const flash = document.getElementById('screenRedFlash');
  if (flash) {
    flash.classList.add('active');
    setTimeout(() => flash.classList.remove('active'), 350);
  }

  const quizCard = document.getElementById('quizCard');
  if (quizCard) {
    quizCard.classList.remove('shake-error');
    void quizCard.offsetWidth;
    quizCard.classList.add('shake-error');
  }

  const cur = app.test.currentQuestion;

  // Seçeneklerde doğru cevabı vurgula ve Türkçe anlamı göster
  const allBtns = document.querySelectorAll('.quiz-opt-btn');
  allBtns.forEach(btn => {
    if (parseInt(btn.dataset.itemId) === cur.id) {
      btn.classList.add('highlight-correct', 'show-turkish');
    }
  });

  // 1. Arka plandaki görseli hafif soft yap (görünür kalır)
  const viewport = document.getElementById('quizImageViewport');
  if (viewport) {
    viewport.classList.add('wrong-soft');
  }

  // 2. Kullanıcının ana odağında büyük ve net olarak Doğru Cevap katmanını göster
  const focusOverlay = document.getElementById('quizCorrectFocusOverlay');
  const alertBadge = document.getElementById('focusAlertBadge');
  const arEl = document.getElementById('focusArabicWord');
  const latinEl = document.getElementById('focusLatinWord');
  const trEl = document.getElementById('focusTurkishWord');

  if (focusOverlay) {
    if (alertBadge) alertBadge.textContent = isTimeout ? '⏰ 7 Sn Süre Doldu!' : '🚨 Yanlış Cevap!';
    if (arEl) arEl.textContent = cur.arabic;
    if (latinEl) latinEl.textContent = `${cur.transcription} (${cur.reading})`;
    if (trEl) trEl.textContent = cur.turkish;
    focusOverlay.style.display = 'flex';
  }

  // 3. Kelimenin doğru telaffuzunu seslendir
  playArabicAudio(cur);
}

function showFeedback(isCorrect, headlineText) {
  const box = document.getElementById('quizFeedbackBox');
  const headline = document.getElementById('feedbackHeadline');
  const detail = document.getElementById('feedbackDetail');
  const item = app.test.currentQuestion;

  box.style.display = 'block';
  box.className = `quiz-feedback-box ${isCorrect ? 'correct' : 'wrong'}`;

  headline.innerHTML = isCorrect ? `✨ ${headlineText}` : `🚨 ${headlineText}`;
  detail.innerHTML = `Doğru Cevap: <strong>${item.arabic}</strong> = <strong>${item.turkish}</strong>`;
}

// 3 SANİYE İÇİNDE OTOMATİK GEÇİŞ
function startThreeSecondAutoAdvance() {
  const nextBtn = document.getElementById('nextQuestionBtn');
  const nextBtnText = document.getElementById('nextBtnText');
  nextBtn.style.display = 'inline-flex';

  let countdown = 3;
  nextBtnText.textContent = `Sonraki Soru (${countdown}s)`;

  if (app.test.autoAdvanceId) {
    clearInterval(app.test.autoAdvanceId);
  }

  app.test.autoAdvanceId = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      nextBtnText.textContent = `Sonraki Soru (${countdown}s)`;
    } else {
      clearInterval(app.test.autoAdvanceId);
      app.test.autoAdvanceId = null;
      nextQuizQuestion();
    }
  }, 1000);
}

function nextQuizQuestion() {
  if (app.test.timerId) clearInterval(app.test.timerId);
  if (app.test.autoAdvanceId) clearInterval(app.test.autoAdvanceId);

  app.test.questionIndex++;
  if (app.test.questionIndex >= app.test.totalQuestions) {
    finishTestAndShowSummary();
  } else {
    loadQuestion();
  }
}

// TEST BİTİRME & REKOR
function finishTestAndShowSummary() {
  clearAllTimers();
  sfx.stopQuizMusic();

  const realDuration = (Date.now() - app.test.testStartTime) / 1000;
  const finalTime = realDuration + app.test.totalPenalties;

  const modal = document.getElementById('summaryModal');
  const titleEl = document.getElementById('modalTitle');
  const descEl = document.getElementById('modalDescription');
  const finalTimeEl = document.getElementById('modalFinalTime');
  const recordTimeEl = document.getElementById('modalRecordTime');
  const penaltyDetailEl = document.getElementById('modalPenaltyDetail');

  finalTimeEl.textContent = `${finalTime.toFixed(1)}s`;

  let isNewRecord = false;
  if (app.test.bestTime === null || finalTime < app.test.bestTime) {
    isNewRecord = true;
    app.test.bestTime = finalTime;
    localStorage.setItem(`arabic_best_time_${app.activeSetId}`, finalTime.toString());
  }

  recordTimeEl.textContent = `${app.test.bestTime.toFixed(1)}s`;
  document.getElementById('quizBestTime').textContent = `${app.test.bestTime.toFixed(1)}s`;

  penaltyDetailEl.innerHTML = `Ham Süre: <strong>${realDuration.toFixed(1)}s</strong> | Toplam Ceza: <strong style="color: #dc2626;">+${app.test.totalPenalties}s</strong> (${app.test.totalPenalties / 2} yanlış/zaman aşımı)`;

  if (isNewRecord) {
    titleEl.textContent = 'YENİ HIZ REKORU! 🏆⚡';
    descEl.textContent = `Muazzam bir performans! Testi rekor sürede tamamlayarak zirveye yerleştin: ${finalTime.toFixed(1)} saniye!`;
    triggerConfetti();
    sfx.playSuccess();
  } else {
    titleEl.textContent = 'Test Tamamlandı! ⏱️';
    descEl.textContent = `Testi ${finalTime.toFixed(1)} saniyede bitirdin. En hızlı rekorun: ${app.test.bestTime.toFixed(1)}s. Yeniden deneyerek rekorunu kırabilirsin!`;
  }

  modal.classList.add('active');
}

function closeSummaryModal() {
  document.getElementById('summaryModal').classList.remove('active');
}

// Galeri Modalı
function openGalleryModal() {
  const modal = document.getElementById('galleryModal');
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';

  app.words.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-item';
    const sKey = getWordSetKey(item);
    const isFav = FavoritesManager.isFavorite(sKey, item.id);

    card.innerHTML = `
      <button class="gallery-fav-btn ${isFav ? 'active' : ''}" data-set-key="${sKey}" data-word-id="${item.id}" type="button" title="Favorilere Ekle / Çıkar">
        ${isFav ? '⭐' : '☆'}
      </button>
      <img src="${item.image}" alt="${item.turkish}" class="gallery-thumb" loading="lazy">
      <div class="gallery-ar">${item.arabic}</div>
      <div class="gallery-tr">${item.turkish}</div>
    `;

    const favBtn = card.querySelector('.gallery-fav-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      FavoritesManager.toggle(sKey, item.id);
      if (app.activeSetId === 'favorites') {
        openGalleryModal();
        updateLearnCard();
      }
    });

    card.addEventListener('click', () => {
      app.currentIndex = index;
      updateLearnCard();
      switchTab('learn');
      closeGalleryModal();
    });

    grid.appendChild(card);
  });

  modal.classList.add('active');
}

function closeGalleryModal() {
  document.getElementById('galleryModal').classList.remove('active');
}

// ==========================================
// DROPDOWN & ÜST NAVİGASYON YÖNETİMİ
// ==========================================
function updateSetDropdownUi() {
  const setData = SETS_DATA[app.activeSetId];
  if (!setData) return;

  const badgeEl = document.getElementById('headerSetBadge');
  const labelEl = document.getElementById('headerSetLabel');

  if (badgeEl) {
    if (setData.isFavorites) {
      badgeEl.className = 'set-badge-icon fav sm';
      badgeEl.textContent = '⭐';
    } else {
      badgeEl.className = 'set-badge-icon sm';
      badgeEl.textContent = setData.id.replace('set', '');
    }
  }

  if (labelEl) {
    labelEl.textContent = setData.name || setData.title;
  }

  document.querySelectorAll('#setDropdownPopover .dropdown-popover-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.setId === app.activeSetId);
  });
}

function updateNavStatBadge() {
  const statText = document.getElementById('topStatText');
  if (!statText) return;

  if (app.activeTab === 'home') {
    statText.textContent = `📁 Setler Kataloğu`;
  } else if (app.activeTab === 'learn') {
    const cur = app.words.length > 0 ? (app.currentIndex + 1) : 0;
    statText.textContent = `📌 ${cur} / ${app.words.length}`;
  } else if (app.activeTab === 'test') {
    statText.textContent = `⚡ 7 Sn Hızlı Test`;
  }
}

function closeAllDropdowns() {
  const modePopover = document.getElementById('modeDropdownPopover');
  const setPopover = document.getElementById('setDropdownPopover');
  const modeBtn = document.getElementById('modeDropdownBtn');
  const setBtn = document.getElementById('setDropdownBtn');

  if (modePopover) modePopover.classList.remove('open');
  if (setPopover) setPopover.classList.remove('open');
  if (modeBtn) modeBtn.classList.remove('open');
  if (setBtn) setBtn.classList.remove('open');
}

function initDropdowns() {
  const modeBtn = document.getElementById('modeDropdownBtn');
  const modePopover = document.getElementById('modeDropdownPopover');
  const setBtn = document.getElementById('setDropdownBtn');
  const setPopover = document.getElementById('setDropdownPopover');

  if (modeBtn && modePopover) {
    modeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = modePopover.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        modePopover.classList.add('open');
        modeBtn.classList.add('open');
      }
    });
  }

  if (setBtn && setPopover) {
    setBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = setPopover.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        setPopover.classList.add('open');
        setBtn.classList.add('open');
      }
    });
  }

  document.querySelectorAll('#modeDropdownPopover .dropdown-popover-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const mode = btn.dataset.mode;
      switchTab(mode);
    });
  });

  document.querySelectorAll('#setDropdownPopover .dropdown-popover-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const setId = btn.dataset.setId;
      if (btn.classList.contains('disabled')) return;
      switchSet(setId);
    });
  });

  document.addEventListener('click', () => {
    closeAllDropdowns();
  });
}

// ==========================================
// ANA SAYFA & TEK SAYFADA TÜM GÖRSELLER BÖLÜMÜ
// ==========================================
function renderHomeSetsList() {
  const listSection = document.getElementById('homeSetsListSection');
  const detailSection = document.getElementById('homeSetDetailSection');
  if (listSection) listSection.style.display = 'block';
  if (detailSection) detailSection.style.display = 'none';

  const container = document.getElementById('homeSetsGrid');
  if (!container) return;
  container.innerHTML = '';

  const setKeys = ['favorites', 'set1', 'set2', 'set3'];

  setKeys.forEach(key => {
    const set = SETS_DATA[key];
    if (!set) return;

    const card = document.createElement('div');
    const isFav = set.isFavorites;
    const isReady = set.available && set.words.length > 0;
    const isDisabled = !set.available;

    card.className = `home-set-card ${isFav ? 'fav-theme' : ''} ${isDisabled ? 'disabled' : ''}`;

    const countText = isFav 
      ? `${set.words.length} Favori Kelime` 
      : (isDisabled ? 'Yakında' : `${set.words.length} Kelime`);

    card.innerHTML = `
      <div class="set-card-top">
        <div class="set-card-header">
          <span class="set-badge-icon ${isFav ? 'fav' : (isDisabled ? 'muted' : '')}">${isFav ? '⭐' : key.replace('set', '')}</span>
          <h3 class="set-card-title">${set.title}</h3>
        </div>
        <span class="set-card-count-badge">${countText}</span>
      </div>
      <p class="set-card-desc">${set.description}</p>
      <div class="set-card-actions">
        ${isReady || isFav ? `
          <button class="card-action-btn view-all" type="button">
            <span>👁️</span> <span>Görseller & Anlamlar</span>
          </button>
          <button class="card-action-btn learn-now" type="button">
            <span>🎴</span> <span>Ezber Yap</span>
          </button>
        ` : `
          <button class="card-action-btn view-all" disabled type="button">
            <span>⏳</span> <span>Görseller Bekleniyor</span>
          </button>
        `}
      </div>
    `;

    if (isReady || isFav) {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.learn-now')) {
          switchSet(key);
          switchTab('learn');
          return;
        }
        renderHomeSetDetail(key);
      });
    }

    container.appendChild(card);
  });
}

function renderHomeSetDetail(setId) {
  const set = SETS_DATA[setId];
  if (!set) return;

  const listSection = document.getElementById('homeSetsListSection');
  const detailSection = document.getElementById('homeSetDetailSection');
  if (listSection) listSection.style.display = 'none';
  if (detailSection) detailSection.style.display = 'block';

  const titleEl = document.getElementById('detailSetTitle');
  const descEl = document.getElementById('detailSetDesc');
  const badgeEl = document.getElementById('detailSetBadge');

  if (titleEl) titleEl.textContent = set.title;
  if (descEl) descEl.textContent = `${set.words.length} Kelime • ${set.description}`;
  if (badgeEl) {
    if (set.isFavorites) {
      badgeEl.className = 'set-badge-icon fav';
      badgeEl.textContent = '⭐';
    } else {
      badgeEl.className = 'set-badge-icon';
      badgeEl.textContent = set.id.replace('set', '');
    }
  }

  const learnBtn = document.getElementById('startLearnFromSetBtn');
  const testBtn = document.getElementById('startTestFromSetBtn');
  if (learnBtn) {
    learnBtn.onclick = () => {
      switchSet(setId);
      switchTab('learn');
    };
  }
  if (testBtn) {
    testBtn.onclick = () => {
      switchSet(setId);
      switchTab('test');
    };
  }

  const grid = document.getElementById('detailWordsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  if (set.words.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fffdf5; border: 2px dashed #fde68a; border-radius: 16px;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">⭐</div>
        <h3 style="color: #92400e; font-size: 1.2rem; font-weight: 800; margin-bottom: 6px;">Henüz Favori Kelimeniz Yok</h3>
        <p style="color: #78350f; font-size: 0.9rem;">Ezber kartlarındaki ⭐ butonuna basarak kelimeleri buraya ekleyebilirsiniz.</p>
      </div>
    `;
    return;
  }

  set.words.forEach((item, index) => {
    const sKey = getWordSetKey(item) || setId;
    const isFav = FavoritesManager.isFavorite(sKey, item.id);

    const card = document.createElement('div');
    card.className = 'word-catalog-card';
    card.innerHTML = `
      <div class="catalog-img-box">
        <img src="${item.image}" alt="${item.turkish}" loading="lazy">
        <button class="catalog-fav-btn ${isFav ? 'active' : ''}" data-set-key="${sKey}" data-word-id="${item.id}" type="button" title="Favorilere Ekle / Çıkar">
          ${isFav ? '⭐' : '☆'}
        </button>
        <button class="catalog-speak-btn" type="button" title="Arapça Dinle">
          🔊
        </button>
      </div>
      <div class="catalog-info-box">
        <div class="catalog-ar">${item.arabic}</div>
        <div class="catalog-latin">${item.transcription} (${item.reading})</div>
        <div class="catalog-tr">${item.turkish}</div>
        ${item.note ? `<div class="catalog-note">${item.note}</div>` : ''}
      </div>
    `;

    const speakBtn = card.querySelector('.catalog-speak-btn');
    speakBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playArabicAudio(item);
    });

    const favBtn = card.querySelector('.catalog-fav-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      FavoritesManager.toggle(sKey, item.id);
      if (setId === 'favorites') {
        renderHomeSetDetail('favorites');
      }
    });

    card.addEventListener('click', () => {
      switchSet(setId);
      app.currentIndex = index;
      switchTab('learn');
    });

    grid.appendChild(card);
  });
}

// ==========================================
// MOD DEĞİŞTİRME FONKSİYONU
// ==========================================
function switchTab(tabName) {
  clearAllTimers();
  app.activeTab = tabName;

  const homeView = document.getElementById('homeView');
  const learnView = document.getElementById('learnView');
  const testView = document.getElementById('testView');
  const homeNavBtn = document.getElementById('homeNavBtn');

  if (homeView) homeView.classList.toggle('active', tabName === 'home');
  if (learnView) learnView.classList.toggle('active', tabName === 'learn');
  if (testView) testView.classList.toggle('active', tabName === 'test');

  if (homeNavBtn) homeNavBtn.classList.toggle('active', tabName === 'home');

  const modeIcon = document.getElementById('headerModeIcon');
  const modeLabel = document.getElementById('headerModeLabel');
  if (tabName === 'learn') {
    if (modeIcon) modeIcon.textContent = '🎴';
    if (modeLabel) modeLabel.textContent = 'Ezber Modu';
  } else if (tabName === 'test') {
    if (modeIcon) modeIcon.textContent = '⚡';
    if (modeLabel) modeLabel.textContent = '7 Sn Test';
  } else if (tabName === 'home') {
    if (modeIcon) modeIcon.textContent = '📖';
    if (modeLabel) modeLabel.textContent = 'Mod Seçin';
  }

  document.querySelectorAll('#modeDropdownPopover .dropdown-popover-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === tabName);
  });

  closeAllDropdowns();

  if (tabName === 'home') {
    sfx.stopQuizMusic();
    renderHomeSetsList();
    updateNavStatBadge();
  } else if (tabName === 'test') {
    startTestMode();
    updateNavStatBadge();
  } else {
    sfx.stopQuizMusic();
    updateLearnCard();
    updateNavStatBadge();
  }
}

// Klavye Kısayolları
document.addEventListener('keydown', (e) => {
  unlockAudio();

  if (document.getElementById('leftDrawer').classList.contains('active')) {
    if (e.key === 'Escape') {
      closeDrawer();
      return;
    }
  }

  if (document.querySelector('.modal-backdrop.active')) {
    if (e.key === 'Escape') {
      closeSummaryModal();
      closeGalleryModal();
    }
    return;
  }

  if (app.activeTab === 'learn') {
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      nextLearnCard();
    } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      prevLearnCard();
    } else if (e.key === ' ' || e.key === 'ArrowDown' || e.key === 'Enter') {
      e.preventDefault();
      toggleMeaningReveal();
    } else if (e.key === 'p' || e.key === 'P') {
      const item = app.words[app.currentIndex];
      if (item) playArabicAudio(item);
    }
  } else if (app.activeTab === 'test') {
    if (app.test.isAnswered && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      nextQuizQuestion();
    } else if (!app.test.isAnswered) {
      const btns = document.querySelectorAll('.quiz-opt-btn');
      if ((e.key === '1' || e.key === 'a' || e.key === 'A') && btns[0]) btns[0].click();
      else if ((e.key === '2' || e.key === 'b' || e.key === 'B') && btns[1]) btns[1].click();
      else if ((e.key === '3' || e.key === 'c' || e.key === 'C') && btns[2]) btns[2].click();
    }
  }
});

// Tarayıcı Ses Kilidi Açma (İlk Dokunuş / Tıklamada)
function unlockAudio() {
  sfx.init();
  if (!hasUserInteracted) {
    hasUserInteracted = true;
    const cur = app.activeTab === 'learn' ? app.words[app.currentIndex] : app.test.currentQuestion;
    if (cur) {
      playArabicAudio(cur);
    }
  }
}

// Başlangıç Kurulumu
document.addEventListener('DOMContentLoaded', () => {
  // İlk tıklamada ses motorunu aktif et
  document.addEventListener('click', unlockAudio, { once: true });
  document.addEventListener('touchstart', unlockAudio, { once: true });

  // Dropdown ve Üst Navigasyon Kurulumu
  initDropdowns();

  const homeNavBtn = document.getElementById('homeNavBtn');
  if (homeNavBtn) {
    homeNavBtn.addEventListener('click', () => switchTab('home'));
  }

  const backToHomeSetsBtn = document.getElementById('backToHomeSetsBtn');
  if (backToHomeSetsBtn) {
    backToHomeSetsBtn.addEventListener('click', () => renderHomeSetsList());
  }

  document.getElementById('revealTriggerBtn').addEventListener('click', toggleMeaningReveal);
  document.getElementById('meaningRevealedBox').addEventListener('click', toggleMeaningReveal);
  document.getElementById('prevCardBtn').addEventListener('click', prevLearnCard);
  document.getElementById('nextCardBtn').addEventListener('click', nextLearnCard);
  document.getElementById('shuffleCardsBtn').addEventListener('click', shuffleLearnCards);
  document.getElementById('speakWordBtn').addEventListener('click', () => {
    const item = app.words[app.currentIndex];
    if (item) playArabicAudio(item);
  });

  document.getElementById('openGalleryBtn').addEventListener('click', openGalleryModal);
  document.getElementById('closeGalleryBtn').addEventListener('click', closeGalleryModal);

  document.getElementById('nextQuestionBtn').addEventListener('click', nextQuizQuestion);
  document.getElementById('restartTestBtn').addEventListener('click', () => {
    closeSummaryModal();
    startTestMode();
  });
  document.getElementById('backToLearnBtn').addEventListener('click', () => {
    closeSummaryModal();
    switchTab('learn');
  });

  const bgmMuteBtn = document.getElementById('bgmMuteBtn');
  if (bgmMuteBtn) {
    bgmMuteBtn.addEventListener('click', () => {
      sfx.toggleBgmMute();
    });
  }
  sfx.updateBgmUi();

  // Favorileme Butonları ve Boş Durum Yönlendirmeleri
  const learnFavBtn = document.getElementById('learnFavBtn');
  if (learnFavBtn) {
    learnFavBtn.addEventListener('click', () => {
      const cur = app.words[app.currentIndex];
      if (cur) {
        const sKey = getWordSetKey(cur);
        FavoritesManager.toggle(sKey, cur.id);
        if (app.activeSetId === 'favorites') {
          updateLearnCard();
        }
      }
    });
  }

  const quizFavBtn = document.getElementById('quizFavBtn');
  if (quizFavBtn) {
    quizFavBtn.addEventListener('click', () => {
      const cur = app.test.currentQuestion;
      if (cur) {
        const sKey = getWordSetKey(cur);
        FavoritesManager.toggle(sKey, cur.id);
      }
    });
  }

  // Test Modu Soru İşareti İpucu Butonu
  const quizHintBtn = document.getElementById('quizHintBtn');
  const quizHintOverlay = document.getElementById('quizHintOverlay');
  if (quizHintBtn && quizHintOverlay) {
    quizHintBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = quizHintOverlay.style.display !== 'none';
      if (isVisible) {
        quizHintOverlay.style.display = 'none';
        quizHintBtn.classList.remove('active');
      } else {
        const cur = app.test.currentQuestion;
        if (cur) {
          const hintText = document.getElementById('quizHintText');
          if (hintText) hintText.textContent = cur.turkish;
        }
        quizHintOverlay.style.display = 'flex';
        quizHintBtn.classList.add('active');
      }
    });
  }

  const favEmptyGoSet1Btn = document.getElementById('favEmptyGoSet1Btn');
  if (favEmptyGoSet1Btn) {
    favEmptyGoSet1Btn.addEventListener('click', () => switchSet('set1'));
  }

  const testEmptyGoSet1Btn = document.getElementById('testEmptyGoSet1Btn');
  if (testEmptyGoSet1Btn) {
    testEmptyGoSet1Btn.addEventListener('click', () => switchSet('set1'));
  }

  FavoritesManager.syncFavoritesSet();
  updateSetDropdownUi();
  switchTab('learn');
  FavoritesManager.updateAllUi();
});
