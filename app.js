/* ================= SEED DATA ================= */
const CATEGORIES = [
  'Tất cả',
  'Lập trình & AI',
  'Âm nhạc',
  'Review Tech',
  'Trò chơi',
  'Podcast',
  'Trực tiếp',
  'Vlogs'
];

const CHANNELS = {
  antigravity: {
    name: 'Antigravity Dev',
    handle: '@antigravitydev',
    color: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    avatarChar: 'A',
    subs: '1,24 Tr người đăng ký',
    verified: true,
    isLive: true
  },
  lofi: {
    name: 'Saigon Lofi Radio',
    handle: '@saigonlofi',
    color: 'linear-gradient(135deg, #f43f5e, #a855f7)',
    avatarChar: 'S',
    subs: '890 N người đăng ký',
    verified: true,
    isLive: true
  },
  techvn: {
    name: 'Duy Luân Dễ Thương',
    handle: '@duyluantech',
    color: 'linear-gradient(135deg, #10b981, #059669)',
    avatarChar: 'D',
    subs: '645 N người đăng ký',
    verified: true,
    isLive: false
  },
  gamer: {
    name: 'CyberPlay VN',
    handle: '@cyberplayvn',
    color: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    avatarChar: 'C',
    subs: '1,82 Tr người đăng ký',
    verified: true,
    isLive: false
  },
  podcast: {
    name: 'Have A Sip',
    handle: '@haveasip',
    color: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    avatarChar: 'H',
    subs: '1,1 Tr người đăng ký',
    verified: true,
    isLive: false
  },
  vlog: {
    name: 'giangj Studio',
    handle: '@giangj',
    color: 'linear-gradient(135deg, #3b82f6, #14b8a6)',
    avatarChar: 'G',
    subs: '320 N người đăng ký',
    verified: true,
    isLive: false
  }
};

const INITIAL_VIDEOS = [
  {
    id: 'v1',
    title: 'Xây dựng hệ thống Multi-Agent AI tự động viết code & deploy chỉ với 1 câu lệnh',
    channelKey: 'antigravity',
    category: 'Lập trình & AI',
    viewsText: '482 N lượt xem',
    timeAgo: '1 ngày trước',
    durationSec: 1124,
    isLive: false,
    palette: ['#0ea5e9', '#6366f1', '#0b1120'],
    sceneType: 'ai-matrix',
    thumbBadge: 'AI AGENT 2.0',
    likes: 24800,
    hashtags: '#Antigravity #AIAgent #Coding',
    description: 'Hướng dẫn chi tiết cách điều phối Coordinator Agent và Subagents song song để tăng tốc độ phát triển phần mềm gấp 10 lần.\nBao gồm kiến trúc Sandbox, Context Compaction và quy trình CI/CD tự động.',
    chapters: [
      { time: 0, label: 'Giới thiệu kiến trúc Multi-Agent' },
      { time: 185, label: 'Thiết lập Sandbox & Subagents' },
      { time: 540, label: 'Demo Live Coding & Auto-Test' },
      { time: 890, label: 'Tối ưu Context Window 2M tokens' }
    ],
    comments: [
      { id: 'c1', author: '@minhdev_vn', avatar: 'M', color: '#3b82f6', time: '4 giờ trước', text: 'Phần phân tách Research Agent với UI Architect cực kỳ mượt, tiết kiệm khối thời gian luôn!', likes: 312 },
      { id: 'c2', author: '@linh_ai', avatar: 'L', color: '#10b981', time: '9 giờ trước', text: 'Video giải thích dễ hiểu nhất về Agentic Coding mình từng xem.', likes: 148 }
    ]
  },
  {
    id: 'v2',
    title: 'TRỰC TIẾP: Lofi Chill Beats để Code & Học Bài xuyên đêm (Rainy Saigon Night)',
    channelKey: 'lofi',
    category: 'Âm nhạc',
    viewsText: '18 N đang xem',
    timeAgo: 'Đang phát trực tiếp',
    durationSec: 3600,
    isLive: true,
    palette: ['#ec4899', '#8b5cf6', '#1e1b4b'],
    sceneType: 'lofi-wave',
    thumbBadge: '24/7 RADIO',
    likes: 95400,
    hashtags: '#Lofi #CodingMusic #ChillBeats',
    description: 'Nhạc Lofi Hip-Hop êm dịu kết hợp tiếng mưa Sài Gòn giúp bạn tập trung tối đa khi lập trình, đọc sách hoặc làm việc muộn.',
    chapters: [
      { time: 0, label: 'Midnight Coffee Intro' },
      { time: 600, label: 'Rain on Windowpane' },
      { time: 1500, label: 'Neon Skyline Beats' }
    ],
    comments: [
      { id: 'c3', author: '@nightowl_coder', avatar: 'N', color: '#a855f7', time: '25 phút trước', text: 'Đang fix bug lúc 1h sáng cùng playlist này, chill thực sự.', likes: 89 }
    ]
  },
  {
    id: 'v3',
    title: 'Đánh giá chi tiết MacBook Pro M5 Max sau 30 ngày: Có đáng nâng cấp cho Dev & AI Local?',
    channelKey: 'techvn',
    category: 'Review Tech',
    viewsText: '315 N lượt xem',
    timeAgo: '3 ngày trước',
    durationSec: 942,
    isLive: false,
    palette: ['#10b981', '#06b6d4', '#06201b'],
    sceneType: 'tech-review',
    thumbBadge: '4K REVIEW',
    likes: 18200,
    hashtags: '#MacBookPro #TechReview #AppleSilicon',
    description: 'Bài test thực tế tốc độ build Docker, chạy LLM local 70B và thời lượng pin thực tế khi làm việc cả ngày không cần sạc.',
    chapters: [
      { time: 0, label: 'Thiết kế & Màn hình Nano-Texture' },
      { time: 210, label: 'Benchmark LLM Local & Xcode' },
      { time: 620, label: 'Tổng kết: Ai nên mua?' }
    ],
    comments: [
      { id: 'c4', author: '@tuan_apple', avatar: 'T', color: '#059669', time: '1 ngày trước', text: 'Test LLM local quá thực tế luôn anh ơi!', likes: 204 }
    ]
  },
  {
    id: 'v4',
    title: 'Cyberpunk 2077 Path Tracing Ultra 4K 120FPS — Trải nghiệm đồ họa tương lai',
    channelKey: 'gamer',
    category: 'Trò chơi',
    viewsText: '1,2 Tr lượt xem',
    timeAgo: '5 ngày trước',
    durationSec: 1380,
    isLive: false,
    palette: ['#f59e0b', '#ef4444', '#1f0a0a'],
    sceneType: 'gaming-neon',
    thumbBadge: '4K 120FPS',
    likes: 64100,
    hashtags: '#Cyberpunk2077 #Gaming #RayTracing',
    description: 'Khám phá Night City về đêm với công nghệ Path Tracing tối đa và DLSS Frame Generation.',
    chapters: [
      { time: 0, label: 'Cấu hình PC Test & Settings' },
      { time: 300, label: 'Dạo phố Night City dưới mưa' },
      { time: 880, label: 'So sánh FPS & Nhiệt độ GPU' }
    ],
    comments: [
      { id: 'c5', author: '@fps_hunter', avatar: 'F', color: '#ef4444', time: '2 ngày trước', text: 'Ánh sáng phản chiếu trên vũng nước nhìn như phim điện ảnh luôn.', likes: 415 }
    ]
  },
  {
    id: 'v5',
    title: 'Podcast #142: Kỹ sư phần mềm 2026 — Viết ít code hơn, tư duy hệ thống nhiều hơn',
    channelKey: 'podcast',
    category: 'Podcast',
    viewsText: '198 N lượt xem',
    timeAgo: '1 tuần trước',
    durationSec: 2715,
    isLive: false,
    palette: ['#8b5cf6', '#ec4899', '#190e2b'],
    sceneType: 'podcast-studio',
    thumbBadge: 'PODCAST #142',
    likes: 15300,
    hashtags: '#Podcast #SoftwareEngineer #Career',
    description: 'Cuộc trò chuyện sâu về kỹ năng System Design, cách phối hợp cùng AI Agent và lộ trình phát triển từ Junior lên Staff Engineer.',
    chapters: [
      { time: 0, label: 'AI có thay thế Junior Dev?' },
      { time: 720, label: 'Tư duy kiến trúc & Trade-offs' },
      { time: 1850, label: 'Lời khuyên cho sinh viên IT' }
    ],
    comments: [
      { id: 'c6', author: '@khanh_swe', avatar: 'K', color: '#8b5cf6', time: '3 ngày trước', text: 'Nghe tập này trên đường đi làm mà mở mang ra rất nhiều điều.', likes: 96 }
    ]
  },
  {
    id: 'v6',
    title: 'Một ngày làm việc tại góc Setup Minimalist & Thử nghiệm Antigravity Workspace',
    channelKey: 'vlog',
    category: 'Vlogs',
    viewsText: '94 N lượt xem',
    timeAgo: '2 ngày trước',
    durationSec: 735,
    isLive: false,
    palette: ['#3b82f6', '#14b8a6', '#0a1929'],
    sceneType: 'vlog-sunset',
    thumbBadge: 'DAY IN LIFE',
    likes: 8900,
    hashtags: '#DeskSetup #Vlog #Minimalist',
    description: 'Cập nhật góc làm việc mới với màn hình 5K, bàn phím custom và workflow làm việc tập trung sâu mỗi sáng.',
    chapters: [
      { time: 0, label: 'Morning Coffee & Planning' },
      { time: 240, label: 'Chi tiết Desk Setup 2026' },
      { time: 510, label: 'Review kết quả cuối ngày' }
    ],
    comments: [
      { id: 'c7', author: '@setup_lover', avatar: 'S', color: '#14b8a6', time: '1 ngày trước', text: 'Bàn làm việc gọn gàng nhìn mê quá bác ơi!', likes: 54 }
    ]
  },
  {
    id: 'v7',
    title: 'CSS Grid & Ambient Glow: Bí quyết làm giao diện web mượt như Native App',
    channelKey: 'antigravity',
    category: 'Lập trình & AI',
    viewsText: '156 N lượt xem',
    timeAgo: '6 ngày trước',
    durationSec: 810,
    isLive: false,
    palette: ['#38bdf8', '#818cf8', '#090d1f'],
    sceneType: 'ai-matrix',
    thumbBadge: 'UI CRAFT',
    likes: 11200,
    hashtags: '#CSS #Frontend #UIUX',
    description: 'Không cần thư viện nặng nề — chỉ với HTML, CSS Grid, biến CSS và Canvas 60fps bạn đã có thể tạo ra trải nghiệm Web App đỉnh cao.',
    chapters: [
      { time: 0, label: 'Thiết kế Token màu Dark/Light' },
      { time: 310, label: 'Hiệu ứng Ambient Mode sau Player' },
      { time: 600, label: 'Tối ưu 60fps trên mọi thiết bị' }
    ],
    comments: []
  },
  {
    id: 'v8',
    title: 'Playlist Nhạc Indie Việt Chữa Lành — Đen, Vũ., Ngọt, Cá Hồi Hoang (Acoustic)',
    channelKey: 'lofi',
    category: 'Âm nhạc',
    viewsText: '840 N lượt xem',
    timeAgo: '2 tuần trước',
    durationSec: 2240,
    isLive: false,
    palette: ['#f97316', '#e11d48', '#220b12'],
    sceneType: 'lofi-wave',
    thumbBadge: 'ACOUSTIC MIX',
    likes: 47500,
    hashtags: '#IndieViet #Acoustic #Chill',
    description: 'Tuyển tập những bản phối acoustic nhẹ nhàng cho buổi chiều cuối tuần thư giãn.',
    chapters: [
      { time: 0, label: 'Track 01: Hoàng Hôn Phố Thị' },
      { time: 680, label: 'Track 02: Những Ngày Mưa Rào' }
    ],
    comments: []
  },
  {
    id: 'v9',
    title: 'TRỰC TIẾP: Hỏi đáp AI & Coding Weekend — Review Portfolio cho anh em Dev',
    channelKey: 'antigravity',
    category: 'Trực tiếp',
    viewsText: '4,6 N đang xem',
    timeAgo: 'Đang phát trực tiếp',
    durationSec: 5400,
    isLive: true,
    palette: ['#ef4444', '#f59e0b', '#1b0909'],
    sceneType: 'podcast-studio',
    thumbBadge: 'Q&A LIVE',
    likes: 6300,
    hashtags: '#Livestream #CodeReview #QandA',
    description: 'Livestream cuối tuần giao lưu, review dự án cá nhân và chia sẻ kinh nghiệm tối ưu CV ngành Tech.',
    chapters: [],
    comments: []
  },
  {
    id: 'v10',
    title: 'Top 5 Bàn Phím Cơ Custom Đáng Mua Nhất 2026: Gõ sướng tay, âm Creamy',
    channelKey: 'techvn',
    category: 'Review Tech',
    viewsText: '229 N lượt xem',
    timeAgo: '1 tuần trước',
    durationSec: 698,
    isLive: false,
    palette: ['#22d3ee', '#3b82f6', '#071826'],
    sceneType: 'tech-review',
    thumbBadge: 'SOUND TEST',
    likes: 13900,
    hashtags: '#MechanicalKeyboard #Setup #Tech',
    description: 'So sánh trực tiếp âm thanh gõ (sound test) và độ hoàn thiện CNC nhôm của 5 mẫu bàn phím hot nhất năm nay.',
    chapters: [
      { time: 0, label: 'Tiêu chí chọn phím cho Dev' },
      { time: 290, label: 'Sound Test 5 mẫu phím' }
    ],
    comments: []
  },
  {
    id: 'v11',
    title: 'Elden Ring: Shadow of the Erdtree — Đánh Boss Không Mất Máu (Level 1 Run)',
    channelKey: 'gamer',
    category: 'Trò chơi',
    viewsText: '612 N lượt xem',
    timeAgo: '3 tuần trước',
    durationSec: 1050,
    isLive: false,
    palette: ['#eab308', '#dc2626', '#1c1204'],
    sceneType: 'gaming-neon',
    thumbBadge: 'NO HIT RUN',
    likes: 38400,
    hashtags: '#EldenRing #Gaming #BossFight',
    description: 'Thử thách đánh bại toàn bộ boss chính ở cấp độ 1 mà không dính một đòn nào.',
    chapters: [],
    comments: []
  },
  {
    id: 'v12',
    title: 'Tự làm Trợ Lý AI cá nhân chạy offline bảo mật 100% trên Laptop của bạn',
    channelKey: 'vlog',
    category: 'Lập trình & AI',
    viewsText: '142 N lượt xem',
    timeAgo: '4 ngày trước',
    durationSec: 885,
    isLive: false,
    palette: ['#14b8a6', '#6366f1', '#081b21'],
    sceneType: 'ai-matrix',
    thumbBadge: 'LOCAL AI',
    likes: 10800,
    hashtags: '#LocalLLM #Privacy #AI',
    description: 'Hướng dẫn cài đặt mô hình nhẹ, kết nối tài liệu cá nhân RAG và giao diện chat siêu mượt chạy hoàn toàn offline.',
    chapters: [
      { time: 0, label: 'Kiến trúc Local RAG' },
      { time: 410, label: 'Demo tốc độ phản hồi thực tế' }
    ],
    comments: []
  }
];

const SHORTS_DATA = [
  { id: 's1', title: '1 mẹo CSS làm Glassmorphism đẹp mê ly trong 30 giây ✨', channelKey: 'antigravity', views: '1,4 Tr lượt xem', likes: 84200, comments: 512, palette: ['#0ea5e9', '#6366f1', '#050816'] },
  { id: 's2', title: 'Khi AI Agent tự fix 12 lỗi build trong lúc bạn pha cà phê ☕', channelKey: 'vlog', views: '890 N lượt xem', likes: 61500, comments: 390, palette: ['#14b8a6', '#3b82f6', '#04121b'] },
  { id: 's3', title: 'Sound test phím cơ 3 triệu vs 10 triệu — Nghe khác biệt ngay!', channelKey: 'techvn', views: '2,1 Tr lượt xem', likes: 132000, comments: 1240, palette: ['#10b981', '#06b6d4', '#031915'] },
  { id: 's4', title: 'Khoảnh khắc né chiêu cuối 0.1 giây cực gắt 🎮🔥', channelKey: 'gamer', views: '3,5 Tr lượt xem', likes: 215000, comments: 1850, palette: ['#f59e0b', '#ef4444', '#1a0606'] },
  { id: 's5', title: 'Beat Lofi 15 giây nghe là muốn mở VS Code lên ngay 🎧', channelKey: 'lofi', views: '640 N lượt xem', likes: 49300, comments: 280, palette: ['#ec4899', '#8b5cf6', '#170726'] },
  { id: 's6', title: '3 câu hỏi phỏng vấn System Design hay gặp nhất 2026', channelKey: 'podcast', views: '510 N lượt xem', likes: 37800, comments: 405, palette: ['#8b5cf6', '#ec4899', '#140821'] }
];

const INITIAL_NOTIFICATIONS = [
  { id: 'n1', videoId: 'v1', text: 'Antigravity Dev vừa đăng: Xây dựng hệ thống Multi-Agent AI tự động viết code', time: '1 giờ trước', read: false },
  { id: 'n2', videoId: 'v2', text: 'Saigon Lofi Radio đang phát trực tiếp: Rainy Saigon Night 24/7', time: '2 giờ trước', read: false },
  { id: 'n3', videoId: 'v3', text: 'Duy Luân Dễ Thương vừa đăng video mới về MacBook Pro M5 Max', time: '1 ngày trước', read: false }
];

/* ================= STATE ================= */
const STORAGE_KEY = 'yt_mvp_state_v1';

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

const saved = loadSavedState();

const state = {
  videos: [...(saved.customVideos || []), ...INITIAL_VIDEOS],
  shorts: SHORTS_DATA,
  notifications: INITIAL_NOTIFICATIONS,
  theme: saved.theme || 'dark',
  activeView: 'home', // 'home' | 'watch' | 'shorts'
  activeNav: 'home',  // 'home' | 'subscriptions' | 'history' | 'watch-later' | 'liked'
  selectedCategory: 'Tất cả',
  searchQuery: '',
  currentVideoId: null,
  currentShortIndex: 0,
  upNextFilter: 'all',
  autoplay: true,
  ambientEnabled: true,
  likedIds: new Set(saved.likedIds || []),
  dislikedIds: new Set(saved.dislikedIds || []),
  watchLaterIds: new Set(saved.watchLaterIds || []),
  historyIds: saved.historyIds || ['v3', 'v5'],
  subscribedChannels: new Set(saved.subscribedChannels || ['antigravity', 'lofi']),
  likedComments: new Set(saved.likedComments || []),
  sortCommentsNewest: false,
  player: {
    playing: true,
    currentTime: 0,
    duration: 900,
    volume: 80,
    muted: false,
    speed: 1,
    theater: false,
    lastFrameTs: 0,
    rafId: null
  },
  shortsPlayer: {
    playing: true,
    rafId: null
  }
};

function persistState() {
  try {
    const customVideos = state.videos.filter(v => v.id.startsWith('custom_'));
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      theme: state.theme,
      likedIds: [...state.likedIds],
      dislikedIds: [...state.dislikedIds],
      watchLaterIds: [...state.watchLaterIds],
      historyIds: state.historyIds.slice(0, 30),
      subscribedChannels: [...state.subscribedChannels],
      likedComments: [...state.likedComments],
      customVideos
    }));
  } catch {
    // Ignore storage quota errors in restricted environments
  }
}

/* ================= DOM REFERENCES ================= */
const el = {
  html: document.documentElement,
  body: document.body,
  sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
  sidebarBackdrop: document.getElementById('sidebarBackdrop'),
  brandLogo: document.getElementById('brandLogo'),
  searchForm: document.getElementById('searchForm'),
  searchInput: document.getElementById('searchInput'),
  searchClearBtn: document.getElementById('searchClearBtn'),
  searchSuggestions: document.getElementById('searchSuggestions'),
  voiceSearchBtn: document.getElementById('voiceSearchBtn'),
  createBtn: document.getElementById('createBtn'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeIconDark: document.getElementById('themeIconDark'),
  themeIconLight: document.getElementById('themeIconLight'),
  notifBtn: document.getElementById('notifBtn'),
  notifBadge: document.getElementById('notifBadge'),
  notifPopover: document.getElementById('notifPopover'),
  notifList: document.getElementById('notifList'),
  clearNotifBtn: document.getElementById('clearNotifBtn'),
  avatarBtn: document.getElementById('avatarBtn'),
  userPopover: document.getElementById('userPopover'),
  popoverThemeBtn: document.getElementById('popoverThemeBtn'),
  sidebarChannels: document.getElementById('sidebarChannels'),
  chipsBar: document.getElementById('chipsBar'),
  homeView: document.getElementById('homeView'),
  shortsView: document.getElementById('shortsView'),
  watchView: document.getElementById('watchView'),
  feedStatusBar: document.getElementById('feedStatusBar'),
  feedStatusTitle: document.getElementById('feedStatusTitle'),
  feedStatusSubtitle: document.getElementById('feedStatusSubtitle'),
  resetFeedBtn: document.getElementById('resetFeedBtn'),
  videoGridTop: document.getElementById('videoGridTop'),
  videoGridBottom: document.getElementById('videoGridBottom'),
  shortsShelf: document.getElementById('shortsShelf'),
  shortsShelfGrid: document.getElementById('shortsShelfGrid'),
  openAllShortsBtn: document.getElementById('openAllShortsBtn'),
  emptyFeedState: document.getElementById('emptyFeedState'),
  emptyResetBtn: document.getElementById('emptyResetBtn'),
  // Watch view
  watchLayout: document.getElementById('watchLayout'),
  ambientGlow: document.getElementById('ambientGlow'),
  playerContainer: document.getElementById('playerContainer'),
  playerCanvas: document.getElementById('playerCanvas'),
  playerCenterFeedback: document.getElementById('playerCenterFeedback'),
  watchBackBtn: document.getElementById('watchBackBtn'),
  playerOverlayTitle: document.getElementById('playerOverlayTitle'),
  progressTrack: document.getElementById('progressTrack'),
  progressHoverTooltip: document.getElementById('progressHoverTooltip'),
  progressPlayed: document.getElementById('progressPlayed'),
  playPauseBtn: document.getElementById('playPauseBtn'),
  playIcon: document.getElementById('playIcon'),
  pauseIcon: document.getElementById('pauseIcon'),
  nextVideoBtn: document.getElementById('nextVideoBtn'),
  muteBtn: document.getElementById('muteBtn'),
  volHighIcon: document.getElementById('volHighIcon'),
  volMuteIcon: document.getElementById('volMuteIcon'),
  volumeSlider: document.getElementById('volumeSlider'),
  currentTimeLabel: document.getElementById('currentTimeLabel'),
  durationTimeLabel: document.getElementById('durationTimeLabel'),
  ambientToggleBtn: document.getElementById('ambientToggleBtn'),
  speedBtn: document.getElementById('speedBtn'),
  theaterBtn: document.getElementById('theaterBtn'),
  fullscreenBtn: document.getElementById('fullscreenBtn'),
  watchTitle: document.getElementById('watchTitle'),
  watchChannelAvatar: document.getElementById('watchChannelAvatar'),
  watchChannelName: document.getElementById('watchChannelName'),
  watchVerifiedBadge: document.getElementById('watchVerifiedBadge'),
  watchChannelSubs: document.getElementById('watchChannelSubs'),
  subscribeBtn: document.getElementById('subscribeBtn'),
  likeBtn: document.getElementById('likeBtn'),
  dislikeBtn: document.getElementById('dislikeBtn'),
  likeCountLabel: document.getElementById('likeCountLabel'),
  shareBtn: document.getElementById('shareBtn'),
  saveBtn: document.getElementById('saveBtn'),
  saveBtnText: document.getElementById('saveBtnText'),
  downloadBtn: document.getElementById('downloadBtn'),
  watchDescBox: document.getElementById('watchDescBox'),
  watchViewsDate: document.getElementById('watchViewsDate'),
  watchHashtags: document.getElementById('watchHashtags'),
  watchDescText: document.getElementById('watchDescText'),
  watchChapters: document.getElementById('watchChapters'),
  descToggleBtn: document.getElementById('descToggleBtn'),
  commentsCountTitle: document.getElementById('commentsCountTitle'),
  sortCommentsBtn: document.getElementById('sortCommentsBtn'),
  sortCommentsLabel: document.getElementById('sortCommentsLabel'),
  commentForm: document.getElementById('commentForm'),
  commentInput: document.getElementById('commentInput'),
  commentActions: document.getElementById('commentActions'),
  commentCancelBtn: document.getElementById('commentCancelBtn'),
  commentSubmitBtn: document.getElementById('commentSubmitBtn'),
  commentsList: document.getElementById('commentsList'),
  autoplaySwitch: document.getElementById('autoplaySwitch'),
  upNextList: document.getElementById('upNextList'),
  // Shorts view
  shortsCanvas: document.getElementById('shortsCanvas'),
  shortsBackBtn: document.getElementById('shortsBackBtn'),
  shortsPlayToggle: document.getElementById('shortsPlayToggle'),
  shortsPlayIcon: document.getElementById('shortsPlayIcon'),
  shortsAvatar: document.getElementById('shortsAvatar'),
  shortsChannelName: document.getElementById('shortsChannelName'),
  shortsSubBtn: document.getElementById('shortsSubBtn'),
  shortsTitle: document.getElementById('shortsTitle'),
  shortsLikeBtn: document.getElementById('shortsLikeBtn'),
  shortsLikeCount: document.getElementById('shortsLikeCount'),
  shortsCommentBtn: document.getElementById('shortsCommentBtn'),
  shortsCommentCount: document.getElementById('shortsCommentCount'),
  shortsShareBtn: document.getElementById('shortsShareBtn'),
  shortsPrevBtn: document.getElementById('shortsPrevBtn'),
  shortsNextBtn: document.getElementById('shortsNextBtn'),
  // Modals
  voiceModal: document.getElementById('voiceModal'),
  closeVoiceModal: document.getElementById('closeVoiceModal'),
  createModal: document.getElementById('createModal'),
  closeCreateModal: document.getElementById('closeCreateModal'),
  cancelCreateBtn: document.getElementById('cancelCreateBtn'),
  createVideoForm: document.getElementById('createVideoForm'),
  newVideoTitle: document.getElementById('newVideoTitle'),
  newVideoCategory: document.getElementById('newVideoCategory'),
  newVideoDuration: document.getElementById('newVideoDuration'),
  newVideoDesc: document.getElementById('newVideoDesc'),
  toastContainer: document.getElementById('toastContainer')
};

/* ================= HELPERS ================= */
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

function formatDuration(totalSec) {
  const sec = Math.max(0, Math.floor(totalSec));
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  return `${m}:${String(s).padStart(2, '0')}`;
}

function formatCompactCount(num) {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1).replace('.0', '').replace('.', ',')} Tr`;
  if (num >= 1000) return `${(num / 1000).toFixed(1).replace('.0', '').replace('.', ',')} N`;
  return String(num);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  el.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.2s';
    setTimeout(() => toast.remove(), 220);
  }, 2400);
}

function getChannel(key) {
  return CHANNELS[key] || CHANNELS.vlog;
}

/* ================= THUMBNAIL SVG ARTWORK ================= */
function createThumbnailSvg(item, isVertical = false) {
  const [c1, c2, c3] = item.palette || ['#38bdf8', '#6366f1', '#0b1120'];
  const uid = `g_${item.id}_${Math.random().toString(36).slice(2, 6)}`;
  const w = isVertical ? 270 : 480;
  const h = isVertical ? 480 : 270;
  const badgeText = escapeHtml(item.thumbBadge || item.category || 'HD');

  let sceneDecor = '';
  if (item.sceneType === 'ai-matrix') {
    sceneDecor = `
      <g opacity="0.26" stroke="${c1}" stroke-width="1.5" fill="none">
        <circle cx="340" cy="110" r="65" />
        <circle cx="340" cy="110" r="105" stroke-dasharray="6 6" />
        <line x1="90" y1="75" x2="275" y2="110" />
        <line x1="120" y1="190" x2="290" y2="145" />
      </g>
      <rect x="38" y="136" width="175" height="92" rx="10" fill="rgba(0,0,0,0.48)" stroke="rgba(255,255,255,0.18)" />
      <rect x="52" y="154" width="94" height="8" rx="4" fill="${c1}" />
      <rect x="52" y="172" width="136" height="6" rx="3" fill="rgba(255,255,255,0.55)" />
      <rect x="52" y="188" width="112" height="6" rx="3" fill="${c2}" />
      <rect x="52" y="204" width="76" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
    `;
  } else if (item.sceneType === 'lofi-wave') {
    sceneDecor = `
      <circle cx="340" cy="105" r="56" fill="${c1}" opacity="0.35" />
      <path d="M0,210 Q120,140 240,195 T480,175 L480,270 L0,270 Z" fill="rgba(0,0,0,0.42)" />
      <g fill="#ffffff" opacity="0.85">
        <rect x="54" y="170" width="8" height="42" rx="4" />
        <rect x="72" y="150" width="8" height="62" rx="4" />
        <rect x="90" y="135" width="8" height="77" rx="4" />
        <rect x="108" y="160" width="8" height="52" rx="4" />
        <rect x="126" y="142" width="8" height="70" rx="4" />
        <rect x="144" y="175" width="8" height="37" rx="4" />
      </g>
    `;
  } else if (item.sceneType === 'gaming-neon') {
    sceneDecor = `
      <polygon points="240,36 410,234 70,234" fill="none" stroke="${c1}" stroke-width="3" opacity="0.55" />
      <polygon points="240,72 370,218 110,218" fill="none" stroke="${c2}" stroke-width="2" opacity="0.7" />
      <circle cx="240" cy="148" r="34" fill="rgba(255,255,255,0.14)" stroke="#fff" stroke-width="2" />
      <polygon points="232,135 256,148 232,161" fill="#fff" />
    `;
  } else {
    sceneDecor = `
      <circle cx="${w * 0.72}" cy="${h * 0.36}" r="${isVertical ? 84 : 92}" fill="${c1}" opacity="0.28" />
      <circle cx="${w * 0.28}" cy="${h * 0.74}" r="${isVertical ? 96 : 110}" fill="${c2}" opacity="0.25" />
      <rect x="${isVertical ? 26 : 42}" y="${isVertical ? 320 : 148}" width="${isVertical ? 218 : 220}" height="10" rx="5" fill="rgba(255,255,255,0.85)" />
      <rect x="${isVertical ? 26 : 42}" y="${isVertical ? 342 : 168}" width="${isVertical ? 156 : 155}" height="8" rx="4" fill="rgba(255,255,255,0.45)" />
    `;
  }

  return `
    <svg class="thumb-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c3}" />
          <stop offset="52%" stop-color="${c2}" stop-opacity="0.75" />
          <stop offset="100%" stop-color="${c1}" stop-opacity="0.88" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#0c0f18" />
      <rect width="${w}" height="${h}" fill="url(#${uid})" opacity="0.9" />
      ${sceneDecor}
      ${isVertical ? '' : `
        <rect x="28" y="26" width="126" height="26" rx="6" fill="rgba(0,0,0,0.58)" />
        <text x="40" y="43" fill="#ffffff" font-family="Inter, Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="0.6">${badgeText}</text>
      `}
    </svg>
  `;
}

/* ================= THEME & NAVIGATION ================= */
function applyTheme(theme) {
  state.theme = theme;
  el.html.setAttribute('data-theme', theme);
  el.themeIconDark.classList.toggle('hidden', theme === 'light');
  el.themeIconLight.classList.toggle('hidden', theme === 'dark');
  persistState();
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  showToast(state.theme === 'dark' ? 'Đã bật Giao diện tối' : 'Đã bật Giao diện sáng');
}

function toggleSidebar() {
  const isMobile = window.innerWidth <= 1040;
  if (state.activeView === 'watch' || isMobile) {
    const open = el.body.classList.toggle('sidebar-drawer-open');
    el.sidebarBackdrop.classList.toggle('hidden', !open);
  } else {
    el.body.classList.toggle('sidebar-mini');
  }
}

function closeSidebarDrawer() {
  el.body.classList.remove('sidebar-drawer-open');
  el.sidebarBackdrop.classList.add('hidden');
}

function switchView(view) {
  state.activeView = view;
  el.homeView.classList.toggle('hidden', view !== 'home');
  el.watchView.classList.toggle('hidden', view !== 'watch');
  el.shortsView.classList.toggle('hidden', view !== 'shorts');
  el.body.classList.toggle('watch-mode', view === 'watch');
  closeSidebarDrawer();

  if (view !== 'watch') {
    stopWatchPlayerLoop();
  }
  if (view !== 'shorts') {
    stopShortsLoop();
  }
}

/* ================= RENDER SIDEBAR & CHIPS ================= */
function renderSidebarChannels() {
  el.sidebarChannels.innerHTML = '';
  const keys = [...state.subscribedChannels];
  if (keys.length === 0) {
    el.sidebarChannels.innerHTML = `<div style="padding:8px 12px;font-size:0.8rem;color:var(--text-muted)">Chưa đăng ký kênh nào</div>`;
    return;
  }

  keys.forEach(key => {
    const ch = getChannel(key);
    const btn = document.createElement('button');
    btn.className = 'sidebar-channel-btn';
    btn.innerHTML = `
      <span class="sidebar-channel-avatar" style="background:${ch.color}">${ch.avatarChar}</span>
      <span class="sidebar-channel-name">${escapeHtml(ch.name)}</span>
      ${ch.isLive ? '<span class="live-dot-mini" title="Đang phát trực tiếp"></span>' : ''}
    `;
    btn.addEventListener('click', () => {
      state.activeNav = 'home';
      state.selectedCategory = 'Tất cả';
      state.searchQuery = ch.name;
      el.searchInput.value = ch.name;
      el.searchClearBtn.classList.remove('hidden');
      switchView('home');
      renderHomeFeed();
      updateSidebarActive();
    });
    el.sidebarChannels.appendChild(btn);
  });
}

function renderChips() {
  el.chipsBar.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `chip ${state.selectedCategory === cat ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      state.selectedCategory = cat;
      state.activeNav = 'home';
      renderChips();
      renderHomeFeed();
      updateSidebarActive();
    });
    el.chipsBar.appendChild(btn);
  });
}

function updateSidebarActive() {
  document.querySelectorAll('.sidebar-item[data-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === state.activeNav);
  });
}

/* ================= HOME FEED & CARDS ================= */
function getFilteredVideos() {
  let list = [...state.videos];

  if (state.activeNav === 'subscriptions') {
    list = list.filter(v => state.subscribedChannels.has(v.channelKey));
  } else if (state.activeNav === 'history') {
    list = state.historyIds
      .map(id => state.videos.find(v => v.id === id))
      .filter(Boolean);
  } else if (state.activeNav === 'watch-later') {
    list = list.filter(v => state.watchLaterIds.has(v.id));
  } else if (state.activeNav === 'liked') {
    list = list.filter(v => state.likedIds.has(v.id));
  }

  if (state.selectedCategory !== 'Tất cả' && state.activeNav === 'home') {
    list = list.filter(v => v.category === state.selectedCategory);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();
    list = list.filter(v => {
      const ch = getChannel(v.channelKey);
      return (
        v.title.toLowerCase().includes(q) ||
        ch.name.toLowerCase().includes(q) ||
        v.category.toLowerCase().includes(q)
      );
    });
  }

  return list;
}

function createVideoCard(video) {
  const ch = getChannel(video.channelKey);
  const inWatchLater = state.watchLaterIds.has(video.id);
  const card = document.createElement('article');
  card.className = 'video-card';
  card.innerHTML = `
    <div class="thumb-wrap">
      ${createThumbnailSvg(video)}
      ${video.isLive
        ? '<span class="thumb-live-badge">TRỰC TIẾP</span>'
        : `<span class="thumb-duration">${formatDuration(video.durationSec)}</span>`}
      <div class="thumb-hover-actions">
        <button class="thumb-quick-btn watch-later-quick" title="${inWatchLater ? 'Xóa khỏi Xem sau' : 'Lưu vào Xem sau'}" aria-label="Xem sau">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            ${inWatchLater
              ? '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />'
              : '<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />'}
          </svg>
        </button>
      </div>
      <div class="thumb-hover-bar"><div class="thumb-hover-bar-fill"></div></div>
    </div>
    <div class="card-meta-row">
      <div class="channel-avatar-sm" style="background:${ch.color}">${ch.avatarChar}</div>
      <div class="card-text-col">
        <h3 class="card-title">${escapeHtml(video.title)}</h3>
        <div class="card-channel-line">
          <span>${escapeHtml(ch.name)}</span>
          ${ch.verified ? `<span class="verified-badge" title="Đã xác minh"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"/></svg></span>` : ''}
        </div>
        <div class="card-stats-line">${escapeHtml(video.viewsText)} • ${escapeHtml(video.timeAgo)}</div>
      </div>
      <button class="card-more-btn" title="Thêm vào Xem sau" aria-label="Tùy chọn">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>
    </div>
  `;

  card.addEventListener('click', (e) => {
    if (e.target.closest('.watch-later-quick') || e.target.closest('.card-more-btn')) {
      e.stopPropagation();
      toggleWatchLater(video.id);
      renderHomeFeed();
      return;
    }
    openWatchPage(video.id);
  });

  return card;
}

function renderShortsShelf() {
  el.shortsShelfGrid.innerHTML = '';
  state.shorts.forEach((s, idx) => {
    const card = document.createElement('article');
    card.className = 'short-card';
    card.innerHTML = `
      <div class="short-thumb-wrap">
        ${createThumbnailSvg({ ...s, sceneType: 'lofi-wave' }, true)}
      </div>
      <h3 class="short-card-title">${escapeHtml(s.title)}</h3>
      <div class="short-card-views">${escapeHtml(s.views)}</div>
    `;
    card.addEventListener('click', () => openShortsViewer(idx));
    el.shortsShelfGrid.appendChild(card);
  });
}

function renderHomeFeed() {
  const filtered = getFilteredVideos();
  const isDefaultHome =
    state.activeNav === 'home' &&
    state.selectedCategory === 'Tất cả' &&
    !state.searchQuery.trim();

  // Context status banner
  if (!isDefaultHome) {
    const navLabels = {
      subscriptions: 'Kênh đăng ký',
      history: 'Video đã xem',
      'watch-later': 'Danh sách xem sau',
      liked: 'Video đã thích',
      home: state.searchQuery ? `Kết quả cho "${state.searchQuery}"` : state.selectedCategory
    };
    el.feedStatusTitle.textContent = navLabels[state.activeNav] || 'Danh sách video';
    el.feedStatusSubtitle.textContent = `${filtered.length} video`;
    el.feedStatusBar.classList.remove('hidden');
  } else {
    el.feedStatusBar.classList.add('hidden');
  }

  el.videoGridTop.innerHTML = '';
  el.videoGridBottom.innerHTML = '';

  if (filtered.length === 0) {
    el.shortsShelf.classList.add('hidden');
    el.emptyFeedState.classList.remove('hidden');
    return;
  }

  el.emptyFeedState.classList.add('hidden');

  if (isDefaultHome) {
    const split = Math.min(8, filtered.length);
    filtered.slice(0, split).forEach(v => el.videoGridTop.appendChild(createVideoCard(v)));
    el.shortsShelf.classList.remove('hidden');
    renderShortsShelf();
    filtered.slice(split).forEach(v => el.videoGridBottom.appendChild(createVideoCard(v)));
  } else {
    el.shortsShelf.classList.add('hidden');
    filtered.forEach(v => el.videoGridTop.appendChild(createVideoCard(v)));
  }
}

/* ================= WATCH PAGE & CUSTOM PLAYER ================= */
function openWatchPage(videoId, updateHash = true) {
  const video = state.videos.find(v => v.id === videoId);
  if (!video) return;

  state.currentVideoId = videoId;
  state.historyIds = [videoId, ...state.historyIds.filter(id => id !== videoId)];
  persistState();

  switchView('watch');
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (updateHash) {
    history.replaceState(null, '', `#watch=${videoId}`);
  }

  // Setup Player state
  state.player.currentTime = 0;
  state.player.duration = video.durationSec || 600;
  state.player.playing = true;
  el.playerContainer.classList.remove('paused');
  syncPlayPauseIcons();

  // Setup Ambient Glow palette
  const [c1, c2] = video.palette || ['#ff0033', '#3ea6ff'];
  el.ambientGlow.style.background = `radial-gradient(circle at 30% 35%, ${c1}, ${c2} 55%, transparent 82%)`;
  el.ambientGlow.classList.toggle('disabled', !state.ambientEnabled);

  // Setup Metadata
  const ch = getChannel(video.channelKey);
  el.watchTitle.textContent = video.title;
  el.playerOverlayTitle.textContent = video.title;
  el.watchChannelAvatar.style.background = ch.color;
  el.watchChannelAvatar.textContent = ch.avatarChar;
  el.watchChannelName.textContent = ch.name;
  el.watchVerifiedBadge.classList.toggle('hidden', !ch.verified);
  el.watchChannelSubs.textContent = ch.subs;

  syncSubscribeButton(video.channelKey);
  syncLikeDislikeButtons(video);
  syncSaveButton(video.id);

  // Description & Chapters
  el.watchDescBox.classList.remove('expanded');
  el.descToggleBtn.textContent = '...thêm';
  el.watchViewsDate.textContent = `${video.viewsText} • ${video.timeAgo}`;
  el.watchHashtags.textContent = video.hashtags || '';
  el.watchDescText.textContent = video.description || '';

  el.watchChapters.innerHTML = '';
  if (video.chapters && video.chapters.length) {
    video.chapters.forEach(chap => {
      const btn = document.createElement('button');
      btn.className = 'chapter-pill';
      btn.type = 'button';
      btn.innerHTML = `<span class="chapter-time">${formatDuration(chap.time)}</span><span>${escapeHtml(chap.label)}</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.player.currentTime = Math.min(chap.time, state.player.duration);
        updatePlayerTimeUI();
        showToast(`Đã tua đến: ${chap.label}`);
      });
      el.watchChapters.appendChild(btn);
    });
  }

  renderComments(video);
  renderUpNext();
  startWatchPlayerLoop();
}

function syncPlayPauseIcons() {
  const playing = state.player.playing;
  el.playIcon.classList.toggle('hidden', playing);
  el.pauseIcon.classList.toggle('hidden', !playing);
  el.playerContainer.classList.toggle('paused', !playing);
}

function togglePlayPause() {
  state.player.playing = !state.player.playing;
  syncPlayPauseIcons();

  // Center feedback icon flash
  el.playerCenterFeedback.innerHTML = state.player.playing
    ? '<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'
    : '<svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
  el.playerCenterFeedback.classList.add('visible');
  clearTimeout(togglePlayPause._tid);
  togglePlayPause._tid = setTimeout(() => el.playerCenterFeedback.classList.remove('visible'), 420);
}

function updatePlayerTimeUI() {
  const { currentTime, duration } = state.player;
  const pct = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;
  el.progressPlayed.style.width = `${pct}%`;
  el.currentTimeLabel.textContent = formatDuration(currentTime);
  el.durationTimeLabel.textContent = formatDuration(duration);
}

function startWatchPlayerLoop() {
  stopWatchPlayerLoop();
  state.player.lastFrameTs = performance.now();

  const ctx = el.playerCanvas.getContext('2d');

  function tick(now) {
    if (state.activeView !== 'watch') return;
    const dt = Math.min(0.1, (now - state.player.lastFrameTs) / 1000);
    state.player.lastFrameTs = now;

    if (state.player.playing) {
      state.player.currentTime += dt * state.player.speed;
      if (state.player.currentTime >= state.player.duration) {
        if (state.autoplay) {
          playNextVideo();
          return;
        }
        state.player.currentTime = state.player.duration;
        state.player.playing = false;
        syncPlayPauseIcons();
      }
    }

    updatePlayerTimeUI();
    drawProceduralVideoFrame(ctx, el.playerCanvas.width, el.playerCanvas.height, now / 1000);
    state.player.rafId = requestAnimationFrame(tick);
  }

  state.player.rafId = requestAnimationFrame(tick);
}

function stopWatchPlayerLoop() {
  if (state.player.rafId) {
    cancelAnimationFrame(state.player.rafId);
    state.player.rafId = null;
  }
}

function drawProceduralVideoFrame(ctx, w, h, t) {
  const video = state.videos.find(v => v.id === state.currentVideoId);
  if (!video) return;
  const [c1, c2, c3] = video.palette || ['#38bdf8', '#6366f1', '#090d16'];

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, c3);
  grad.addColorStop(0.55, '#090b12');
  grad.addColorStop(1, c3);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  const animTime = state.player.playing ? t * state.player.speed : state.player.currentTime;

  // Ambient moving orbs
  ctx.save();
  ctx.globalAlpha = 0.28;
  ctx.fillStyle = c1;
  ctx.beginPath();
  ctx.arc(w * (0.3 + 0.12 * Math.sin(animTime * 0.6)), h * (0.4 + 0.08 * Math.cos(animTime * 0.5)), 210, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = c2;
  ctx.beginPath();
  ctx.arc(w * (0.72 + 0.1 * Math.cos(animTime * 0.45)), h * (0.62 + 0.1 * Math.sin(animTime * 0.7)), 240, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Scene-specific visual elements
  if (video.sceneType === 'lofi-wave' || video.sceneType === 'podcast-studio') {
    const bars = 42;
    const barW = 12;
    const gap = 8;
    const startX = (w - bars * (barW + gap)) / 2;
    for (let i = 0; i < bars; i++) {
      const amp = 28 + Math.abs(Math.sin(animTime * 3.1 + i * 0.35) * Math.cos(animTime * 1.4 - i * 0.2)) * 150;
      const barGrad = ctx.createLinearGradient(0, h * 0.68 - amp, 0, h * 0.68);
      barGrad.addColorStop(0, c1);
      barGrad.addColorStop(1, c2);
      ctx.fillStyle = barGrad;
      ctx.beginPath();
      ctx.roundRect(startX + i * (barW + gap), h * 0.68 - amp, barW, amp, 6);
      ctx.fill();
    }
  } else if (video.sceneType === 'gaming-neon') {
    ctx.strokeStyle = c1;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.45;
    const horizon = h * 0.54;
    for (let i = -8; i <= 8; i++) {
      ctx.beginPath();
      ctx.moveTo(w / 2 + i * 32, horizon);
      ctx.lineTo(w / 2 + i * 165, h);
      ctx.stroke();
    }
    const offset = (animTime * 80) % 45;
    for (let y = horizon + offset; y < h; y += 45) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  } else {
    // AI Matrix / Tech grid HUD
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 64) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 64) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
    // Orbiting telemetry nodes
    const cx = w * 0.5;
    const cy = h * 0.48;
    ctx.strokeStyle = c1;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(cx, cy, 130, animTime * 0.5, animTime * 0.5 + Math.PI * 1.4);
    ctx.stroke();

    ctx.strokeStyle = c2;
    ctx.beginPath();
    ctx.arc(cx, cy, 168, -animTime * 0.35, -animTime * 0.35 + Math.PI * 1.1);
    ctx.stroke();
  }

  // Subtle video badge + chapter/title watermark in stage
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.font = '700 28px Inter, Roboto, sans-serif';
  ctx.textAlign = 'center';
  const ch = getChannel(video.channelKey);
  ctx.fillText(ch.name.toUpperCase(), w / 2, h * 0.38);

  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '500 18px JetBrains Mono, monospace';
  const activeChapter = getActiveChapterLabel(video, state.player.currentTime);
  ctx.fillText(activeChapter || video.category, w / 2, h * 0.44);
}

function getActiveChapterLabel(video, currentSec) {
  if (!video.chapters || video.chapters.length === 0) return '';
  let current = video.chapters[0].label;
  for (const ch of video.chapters) {
    if (currentSec >= ch.time) current = ch.label;
  }
  return `● ${current}`;
}

function playNextVideo() {
  const candidates = state.videos.filter(v => v.id !== state.currentVideoId);
  if (candidates.length > 0) {
    openWatchPage(candidates[0].id);
  }
}

/* ================= WATCH INTERACTIONS ================= */
function syncSubscribeButton(channelKey) {
  const isSub = state.subscribedChannels.has(channelKey);
  el.subscribeBtn.textContent = isSub ? 'Đã đăng ký' : 'Đăng ký';
  el.subscribeBtn.classList.toggle('subscribed', isSub);
}

function toggleSubscribe(channelKey) {
  const ch = getChannel(channelKey);
  if (state.subscribedChannels.has(channelKey)) {
    state.subscribedChannels.delete(channelKey);
    showToast(`Đã hủy đăng ký ${ch.name}`);
  } else {
    state.subscribedChannels.add(channelKey);
    showToast(`Đã đăng ký kênh ${ch.name}`);
  }
  persistState();
  syncSubscribeButton(channelKey);
  renderSidebarChannels();
}

function syncLikeDislikeButtons(video) {
  const liked = state.likedIds.has(video.id);
  const disliked = state.dislikedIds.has(video.id);
  el.likeBtn.classList.toggle('active', liked);
  el.dislikeBtn.classList.toggle('active', disliked);
  el.likeCountLabel.textContent = formatCompactCount(video.likes + (liked ? 1 : 0));
}

function syncSaveButton(videoId) {
  const savedItem = state.watchLaterIds.has(videoId);
  el.saveBtn.classList.toggle('active', savedItem);
  el.saveBtnText.textContent = savedItem ? 'Đã lưu' : 'Lưu';
}

function toggleWatchLater(videoId) {
  if (state.watchLaterIds.has(videoId)) {
    state.watchLaterIds.delete(videoId);
    showToast('Đã xóa khỏi Danh sách xem sau');
  } else {
    state.watchLaterIds.add(videoId);
    showToast('Đã lưu vào Danh sách xem sau');
  }
  persistState();
  if (state.currentVideoId === videoId) syncSaveButton(videoId);
}

function renderComments(video) {
  const comments = [...(video.comments || [])];
  if (state.sortCommentsNewest) {
    comments.reverse();
  }
  el.commentsCountTitle.textContent = `${comments.length} bình luận`;
  el.sortCommentsLabel.textContent = state.sortCommentsNewest ? 'Sắp xếp: Mới nhất' : 'Sắp xếp: Hàng đầu';
  el.commentsList.innerHTML = '';

  if (comments.length === 0) {
    el.commentsList.innerHTML = `<div style="color:var(--text-secondary);font-size:0.9rem;padding:8px 0">Hãy là người đầu tiên bình luận về video này!</div>`;
    return;
  }

  comments.forEach(c => {
    const liked = state.likedComments.has(c.id);
    const item = document.createElement('div');
    item.className = 'comment-item';
    item.innerHTML = `
      <div class="channel-avatar-sm" style="background:${c.color || '#3b82f6'}">${escapeHtml(c.avatar || 'U')}</div>
      <div class="comment-body">
        <div class="comment-meta">
          <span class="comment-author">${escapeHtml(c.author)}</span>
          <span class="comment-time">${escapeHtml(c.time)}</span>
        </div>
        <div class="comment-text">${escapeHtml(c.text)}</div>
        <div class="comment-actions-row">
          <button class="comment-like-btn ${liked ? 'liked' : ''}" data-cid="${c.id}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
            </svg>
            <span>${c.likes + (liked ? 1 : 0)}</span>
          </button>
        </div>
      </div>
    `;
    item.querySelector('.comment-like-btn').addEventListener('click', () => {
      if (state.likedComments.has(c.id)) state.likedComments.delete(c.id);
      else state.likedComments.add(c.id);
      persistState();
      renderComments(video);
    });
    el.commentsList.appendChild(item);
  });
}

function renderUpNext() {
  const current = state.videos.find(v => v.id === state.currentVideoId);
  let list = state.videos.filter(v => v.id !== state.currentVideoId);

  if (state.upNextFilter === 'channel' && current) {
    list = list.filter(v => v.channelKey === current.channelKey);
  } else if (state.upNextFilter === 'category' && current) {
    list = list.filter(v => v.category === current.category);
  }

  el.upNextList.innerHTML = '';
  if (list.length === 0) {
    el.upNextList.innerHTML = `<div style="color:var(--text-secondary);font-size:0.86rem;padding:12px 0">Không có video cùng bộ lọc này.</div>`;
    return;
  }

  list.forEach(v => {
    const ch = getChannel(v.channelKey);
    const card = document.createElement('div');
    card.className = 'upnext-card';
    card.innerHTML = `
      <div class="upnext-thumb">
        ${createThumbnailSvg(v)}
        ${v.isLive
          ? '<span class="thumb-live-badge">LIVE</span>'
          : `<span class="thumb-duration">${formatDuration(v.durationSec)}</span>`}
      </div>
      <div class="upnext-info">
        <div class="upnext-title">${escapeHtml(v.title)}</div>
        <div class="upnext-channel">${escapeHtml(ch.name)}</div>
        <div class="upnext-stats">${escapeHtml(v.viewsText)} • ${escapeHtml(v.timeAgo)}</div>
      </div>
    `;
    card.addEventListener('click', () => openWatchPage(v.id));
    el.upNextList.appendChild(card);
  });
}

/* ================= SHORTS VIEWER ================= */
function openShortsViewer(index = 0) {
  state.currentShortIndex = (index + state.shorts.length) % state.shorts.length;
  switchView('shorts');
  state.shortsPlayer.playing = true;
  renderActiveShort();
  startShortsLoop();
}

function renderActiveShort() {
  const item = state.shorts[state.currentShortIndex];
  const ch = getChannel(item.channelKey);
  const isLiked = state.likedIds.has(item.id);
  const isSub = state.subscribedChannels.has(item.channelKey);

  el.shortsAvatar.style.background = ch.color;
  el.shortsAvatar.textContent = ch.avatarChar;
  el.shortsChannelName.textContent = ch.handle;
  el.shortsSubBtn.textContent = isSub ? 'Đã đăng ký' : 'Đăng ký';
  el.shortsSubBtn.classList.toggle('subscribed', isSub);
  el.shortsTitle.textContent = item.title;
  el.shortsLikeBtn.classList.toggle('liked', isLiked);
  el.shortsLikeCount.textContent = formatCompactCount(item.likes + (isLiked ? 1 : 0));
  el.shortsCommentCount.textContent = formatCompactCount(item.comments);
}

function startShortsLoop() {
  stopShortsLoop();
  const ctx = el.shortsCanvas.getContext('2d');
  function frame(now) {
    if (state.activeView !== 'shorts') return;
    const item = state.shorts[state.currentShortIndex];
    const [c1, c2, c3] = item.palette;
    const w = el.shortsCanvas.width;
    const h = el.shortsCanvas.height;
    const t = state.shortsPlayer.playing ? now / 1000 : 1.2;

    const bg = ctx.createLinearGradient(0, 0, w, h);
    bg.addColorStop(0, c3);
    bg.addColorStop(0.5, c2);
    bg.addColorStop(1, c1);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Animated floating rings
    ctx.save();
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      const r = 50 + ((t * 45 + i * 55) % 210);
      ctx.globalAlpha = Math.max(0, 1 - r / 260);
      ctx.beginPath();
      ctx.arc(w / 2, h * 0.42, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 22px Inter, Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('YOUTUBE SHORTS', w / 2, h * 0.42);

    state.shortsPlayer.rafId = requestAnimationFrame(frame);
  }
  state.shortsPlayer.rafId = requestAnimationFrame(frame);
}

function stopShortsLoop() {
  if (state.shortsPlayer.rafId) {
    cancelAnimationFrame(state.shortsPlayer.rafId);
    state.shortsPlayer.rafId = null;
  }
}

/* ================= NOTIFICATIONS & SEARCH ================= */
function renderNotifications() {
  const unreadCount = state.notifications.filter(n => !n.read).length;
  el.notifBadge.textContent = unreadCount;
  el.notifBadge.classList.toggle('hidden', unreadCount === 0);

  el.notifList.innerHTML = '';
  state.notifications.forEach(n => {
    const btn = document.createElement('button');
    btn.className = `notif-item ${n.read ? 'read' : ''}`;
    btn.innerHTML = `
      <span class="notif-dot"></span>
      <div>
        <div class="notif-text">${escapeHtml(n.text)}</div>
        <div class="notif-time">${escapeHtml(n.time)}</div>
      </div>
    `;
    btn.addEventListener('click', () => {
      n.read = true;
      el.notifPopover.classList.add('hidden');
      renderNotifications();
      openWatchPage(n.videoId);
    });
    el.notifList.appendChild(btn);
  });
}

function renderSearchSuggestions(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    el.searchSuggestions.classList.add('hidden');
    return;
  }
  const matches = state.videos
    .filter(v => v.title.toLowerCase().includes(q) || v.category.toLowerCase().includes(q))
    .slice(0, 5);

  if (matches.length === 0) {
    el.searchSuggestions.classList.add('hidden');
    return;
  }

  el.searchSuggestions.innerHTML = '';
  matches.forEach(v => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'suggestion-item';
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
      </svg>
      <span>${escapeHtml(v.title)}</span>
    `;
    btn.addEventListener('click', () => {
      el.searchInput.value = v.title;
      state.searchQuery = v.title;
      el.searchSuggestions.classList.add('hidden');
      el.searchClearBtn.classList.remove('hidden');
      switchView('home');
      renderHomeFeed();
    });
    el.searchSuggestions.appendChild(btn);
  });
  el.searchSuggestions.classList.remove('hidden');
}

function resetToHome() {
  state.activeNav = 'home';
  state.selectedCategory = 'Tất cả';
  state.searchQuery = '';
  el.searchInput.value = '';
  el.searchClearBtn.classList.add('hidden');
  el.searchSuggestions.classList.add('hidden');
  history.replaceState(null, '', '#home');
  switchView('home');
  renderChips();
  renderHomeFeed();
  updateSidebarActive();
}

/* ================= EVENT LISTENERS ================= */
function bindEvents() {
  el.sidebarToggleBtn.addEventListener('click', toggleSidebar);
  el.sidebarBackdrop.addEventListener('click', closeSidebarDrawer);

  el.brandLogo.addEventListener('click', (e) => {
    e.preventDefault();
    resetToHome();
  });

  el.resetFeedBtn.addEventListener('click', resetToHome);
  el.emptyResetBtn.addEventListener('click', resetToHome);
  el.watchBackBtn.addEventListener('click', resetToHome);
  el.shortsBackBtn.addEventListener('click', resetToHome);

  // Sidebar navigation
  document.querySelectorAll('.sidebar-item[data-nav], .popover-item[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.nav;
      el.userPopover.classList.add('hidden');
      if (target === 'shorts') {
        openShortsViewer(0);
        return;
      }
      state.activeNav = target;
      state.selectedCategory = 'Tất cả';
      switchView('home');
      renderChips();
      renderHomeFeed();
      updateSidebarActive();
    });
  });

  document.querySelectorAll('.sidebar-item[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeNav = 'home';
      state.selectedCategory = btn.dataset.category;
      switchView('home');
      renderChips();
      renderHomeFeed();
      updateSidebarActive();
    });
  });

  // Search
  el.searchInput.addEventListener('input', () => {
    const val = el.searchInput.value;
    el.searchClearBtn.classList.toggle('hidden', !val);
    renderSearchSuggestions(val);
  });

  el.searchClearBtn.addEventListener('click', () => {
    el.searchInput.value = '';
    state.searchQuery = '';
    el.searchClearBtn.classList.add('hidden');
    el.searchSuggestions.classList.add('hidden');
    el.searchInput.focus();
    if (state.activeView === 'home') renderHomeFeed();
  });

  el.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    state.searchQuery = el.searchInput.value.trim();
    el.searchSuggestions.classList.add('hidden');
    state.activeNav = 'home';
    switchView('home');
    renderHomeFeed();
  });

  // Theme & Popovers
  el.themeToggleBtn.addEventListener('click', toggleTheme);
  el.popoverThemeBtn.addEventListener('click', () => {
    el.userPopover.classList.add('hidden');
    toggleTheme();
  });

  el.notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    el.userPopover.classList.add('hidden');
    el.notifPopover.classList.toggle('hidden');
  });

  el.clearNotifBtn.addEventListener('click', () => {
    state.notifications.forEach(n => { n.read = true; });
    renderNotifications();
  });

  el.avatarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    el.notifPopover.classList.add('hidden');
    el.userPopover.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.popover-anchor')) {
      el.notifPopover.classList.add('hidden');
      el.userPopover.classList.add('hidden');
    }
    if (!e.target.closest('.search-wrapper')) {
      el.searchSuggestions.classList.add('hidden');
    }
  });

  // Voice Search Modal
  el.voiceSearchBtn.addEventListener('click', () => el.voiceModal.classList.remove('hidden'));
  el.closeVoiceModal.addEventListener('click', () => el.voiceModal.classList.add('hidden'));
  document.querySelectorAll('.voice-sample').forEach(btn => {
    btn.addEventListener('click', () => {
      const phrase = btn.dataset.phrase;
      el.voiceModal.classList.add('hidden');
      el.searchInput.value = phrase;
      state.searchQuery = phrase;
      el.searchClearBtn.classList.remove('hidden');
      switchView('home');
      renderHomeFeed();
      showToast(`Đã nhận giọng nói: "${phrase}"`);
    });
  });

  // Create Video Modal
  el.createBtn.addEventListener('click', () => el.createModal.classList.remove('hidden'));
  el.closeCreateModal.addEventListener('click', () => el.createModal.classList.add('hidden'));
  el.cancelCreateBtn.addEventListener('click', () => el.createModal.classList.add('hidden'));

  el.createVideoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = el.newVideoTitle.value.trim();
    if (!title) return;

    const parts = el.newVideoDuration.value.split(':').map(n => parseInt(n, 10));
    const sec = parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])
      ? parts[0] * 60 + parts[1]
      : 720;

    const newVid = {
      id: `custom_${Date.now()}`,
      title,
      channelKey: 'vlog',
      category: el.newVideoCategory.value,
      viewsText: '1 lượt xem',
      timeAgo: 'Vừa xong',
      durationSec: sec,
      isLive: false,
      palette: ['#38bdf8', '#818cf8', '#090f1e'],
      sceneType: 'ai-matrix',
      thumbBadge: 'MỚI TẢI LÊN',
      likes: 1,
      hashtags: '#YouTubeMVP #Creator',
      description: el.newVideoDesc.value.trim() || 'Video mới được tải lên từ Antigravity YouTube MVP.',
      chapters: [{ time: 0, label: 'Mở đầu' }],
      comments: []
    };

    state.videos.unshift(newVid);
    persistState();
    el.createVideoForm.reset();
    el.newVideoDuration.value = '12:45';
    el.createModal.classList.add('hidden');
    resetToHome();
    showToast('Đã xuất bản video mới lên Trang chủ!');
  });

  // Player Controls
  el.playerCanvas.addEventListener('click', togglePlayPause);
  el.playPauseBtn.addEventListener('click', togglePlayPause);
  el.nextVideoBtn.addEventListener('click', playNextVideo);

  el.muteBtn.addEventListener('click', () => {
    state.player.muted = !state.player.muted;
    el.volHighIcon.classList.toggle('hidden', state.player.muted);
    el.volMuteIcon.classList.toggle('hidden', !state.player.muted);
  });

  el.volumeSlider.addEventListener('input', () => {
    state.player.volume = Number(el.volumeSlider.value);
    state.player.muted = state.player.volume === 0;
    el.volHighIcon.classList.toggle('hidden', state.player.muted);
    el.volMuteIcon.classList.toggle('hidden', !state.player.muted);
  });

  const speeds = [0.5, 1, 1.25, 1.5, 2];
  el.speedBtn.addEventListener('click', () => {
    const idx = (speeds.indexOf(state.player.speed) + 1) % speeds.length;
    state.player.speed = speeds[idx];
    el.speedBtn.textContent = `${state.player.speed}x`;
    showToast(`Tốc độ phát: ${state.player.speed}x`);
  });

  el.ambientToggleBtn.addEventListener('click', () => {
    state.ambientEnabled = !state.ambientEnabled;
    el.ambientToggleBtn.classList.toggle('active', state.ambientEnabled);
    el.ambientGlow.classList.toggle('disabled', !state.ambientEnabled);
    showToast(state.ambientEnabled ? 'Đã bật Ambient Mode' : 'Đã tắt Ambient Mode');
  });

  el.theaterBtn.addEventListener('click', () => {
    state.player.theater = !state.player.theater;
    el.watchLayout.classList.toggle('theater-mode', state.player.theater);
  });

  el.fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      el.playerContainer.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  });

  // Progress bar scrubbing & tooltip
  let isScrubbing = false;
  function seekFromEvent(e) {
    const rect = el.progressTrack.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    state.player.currentTime = ratio * state.player.duration;
    updatePlayerTimeUI();
  }

  el.progressTrack.addEventListener('mousedown', (e) => {
    isScrubbing = true;
    seekFromEvent(e);
  });
  window.addEventListener('mousemove', (e) => {
    if (isScrubbing) seekFromEvent(e);
  });
  window.addEventListener('mouseup', () => {
    isScrubbing = false;
  });

  el.progressTrack.addEventListener('mousemove', (e) => {
    const rect = el.progressTrack.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    el.progressHoverTooltip.style.left = `${ratio * 100}%`;
    el.progressHoverTooltip.textContent = formatDuration(ratio * state.player.duration);
    el.progressHoverTooltip.classList.remove('hidden');
  });
  el.progressTrack.addEventListener('mouseleave', () => {
    el.progressHoverTooltip.classList.add('hidden');
  });

  // Watch Page Actions
  el.subscribeBtn.addEventListener('click', () => {
    const video = state.videos.find(v => v.id === state.currentVideoId);
    if (video) toggleSubscribe(video.channelKey);
  });

  el.likeBtn.addEventListener('click', () => {
    const video = state.videos.find(v => v.id === state.currentVideoId);
    if (!video) return;
    if (state.likedIds.has(video.id)) {
      state.likedIds.delete(video.id);
    } else {
      state.likedIds.add(video.id);
      state.dislikedIds.delete(video.id);
      showToast('Đã thêm vào Video đã thích');
    }
    persistState();
    syncLikeDislikeButtons(video);
  });

  el.dislikeBtn.addEventListener('click', () => {
    const video = state.videos.find(v => v.id === state.currentVideoId);
    if (!video) return;
    if (state.dislikedIds.has(video.id)) {
      state.dislikedIds.delete(video.id);
    } else {
      state.dislikedIds.add(video.id);
      state.likedIds.delete(video.id);
    }
    persistState();
    syncLikeDislikeButtons(video);
  });

  el.shareBtn.addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url).catch(() => {});
    showToast('Đã sao chép liên kết video vào bộ nhớ tạm');
  });

  el.saveBtn.addEventListener('click', () => {
    if (state.currentVideoId) toggleWatchLater(state.currentVideoId);
  });

  el.downloadBtn.addEventListener('click', () => {
    showToast('Đang tải xuống bản xem ngoại tuyến (MVP)...');
  });

  el.watchDescBox.addEventListener('click', (e) => {
    if (e.target.closest('.chapter-pill')) return;
    const expanded = el.watchDescBox.classList.toggle('expanded');
    el.descToggleBtn.textContent = expanded ? 'Ẩn bớt' : '...thêm';
  });

  // Comments
  el.commentInput.addEventListener('focus', () => {
    el.commentActions.classList.remove('hidden');
  });
  el.commentInput.addEventListener('input', () => {
    el.commentSubmitBtn.disabled = !el.commentInput.value.trim();
  });
  el.commentCancelBtn.addEventListener('click', () => {
    el.commentInput.value = '';
    el.commentSubmitBtn.disabled = true;
    el.commentActions.classList.add('hidden');
  });
  el.commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = el.commentInput.value.trim();
    const video = state.videos.find(v => v.id === state.currentVideoId);
    if (!text || !video) return;

    video.comments.unshift({
      id: `c_${Date.now()}`,
      author: '@giangj',
      avatar: 'G',
      color: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
      time: 'Vừa xong',
      text,
      likes: 0
    });
    el.commentInput.value = '';
    el.commentSubmitBtn.disabled = true;
    el.commentActions.classList.add('hidden');
    renderComments(video);
    showToast('Đã đăng bình luận');
  });

  el.sortCommentsBtn.addEventListener('click', () => {
    state.sortCommentsNewest = !state.sortCommentsNewest;
    const video = state.videos.find(v => v.id === state.currentVideoId);
    if (video) renderComments(video);
  });

  // Up Next filter & autoplay
  document.querySelectorAll('[data-upnext]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-upnext]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.upNextFilter = btn.dataset.upnext;
      renderUpNext();
    });
  });

  el.autoplaySwitch.addEventListener('change', () => {
    state.autoplay = el.autoplaySwitch.checked;
    showToast(state.autoplay ? 'Đã bật Tự động phát' : 'Đã tắt Tự động phát');
  });

  // Shorts Viewer Controls
  el.openAllShortsBtn.addEventListener('click', () => openShortsViewer(0));
  el.shortsPrevBtn.addEventListener('click', () => openShortsViewer(state.currentShortIndex - 1));
  el.shortsNextBtn.addEventListener('click', () => openShortsViewer(state.currentShortIndex + 1));

  el.shortsPlayToggle.addEventListener('click', () => {
    state.shortsPlayer.playing = !state.shortsPlayer.playing;
    el.shortsPlayIcon.innerHTML = state.shortsPlayer.playing
      ? '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>'
      : '<path d="M8 5v14l11-7z"/>';
  });

  el.shortsLikeBtn.addEventListener('click', () => {
    const item = state.shorts[state.currentShortIndex];
    if (state.likedIds.has(item.id)) state.likedIds.delete(item.id);
    else state.likedIds.add(item.id);
    persistState();
    renderActiveShort();
  });

  el.shortsSubBtn.addEventListener('click', () => {
    const item = state.shorts[state.currentShortIndex];
    toggleSubscribe(item.channelKey);
    renderActiveShort();
  });

  el.shortsCommentBtn.addEventListener('click', () => {
    showToast('Tính năng bình luận Shorts đang phát triển trong MVP');
  });

  el.shortsShareBtn.addEventListener('click', () => {
    showToast('Đã sao chép liên kết Short');
  });

  // Keyboard shortcuts when watching
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
      return;
    }
    if (state.activeView === 'watch') {
      if (e.code === 'Space' || e.key.toLowerCase() === 'k') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.key.toLowerCase() === 'm') {
        el.muteBtn.click();
      } else if (e.key.toLowerCase() === 't') {
        el.theaterBtn.click();
      } else if (e.key.toLowerCase() === 'f') {
        el.fullscreenBtn.click();
      } else if (e.key === 'ArrowRight') {
        state.player.currentTime = Math.min(state.player.duration, state.player.currentTime + 5);
        updatePlayerTimeUI();
      } else if (e.key === 'ArrowLeft') {
        state.player.currentTime = Math.max(0, state.player.currentTime - 5);
        updatePlayerTimeUI();
      }
    } else if (state.activeView === 'shorts') {
      if (e.key === 'ArrowDown') openShortsViewer(state.currentShortIndex + 1);
      else if (e.key === 'ArrowUp') openShortsViewer(state.currentShortIndex - 1);
    }
  });
}

/* ================= INIT ================= */
function init() {
  applyTheme(state.theme);
  renderSidebarChannels();
  renderChips();
  renderNotifications();
  bindEvents();

  const hash = window.location.hash;
  if (hash.startsWith('#watch=')) {
    const vid = hash.replace('#watch=', '');
    if (state.videos.some(v => v.id === vid)) {
      openWatchPage(vid, false);
      return;
    }
  }
  renderHomeFeed();
}

init();
