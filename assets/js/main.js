/**
 * Cinematic Video Editor Portfolio Engine
 * Author: Antigravity AI
 * Features: Bilingual (AR/EN), Video Modal Lightbox, Before/After Slider,
 * Custom Cursor, Dynamic Typist, Filterable Grid, Swiper, and Interactive Forms.
 */

// Global State
let currentLang = localStorage.getItem('site_lang') || 'ar';

// Security: HTML Entity Sanitizer to prevent XSS (Cross-Site Scripting)
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Translations Dictionary
const translations = {
  ar: {
    // Navigation
    nav_about: "من أنا",
    nav_showreel: "الشو ريل",
    nav_before_after: "قبل وبعد",
    nav_portfolio: "الأعمال",
    nav_services: "خدماتي",
    nav_workflow: "خطوات العمل",
    nav_reviews: "آراء العملاء",
    nav_contact: "تواصل معي",
    nav_hire_me: "وظفني الآن",

    // Hero
    hero_available: "متاح لاستقبال مشاريع جديدة",
    hero_greeting: "أهلاً بك، أنا مونتير محترف",
    hero_title_1: "أحول لقطاتك الخام إلى",
    hero_title_highlight: "قصص سينمائية فيروسية",
    hero_title_2: "تخطف الأنظار وتحقق ملايين المشاهدات",
    hero_desc: "أساعد كبار اليوتيوبرز، صناع المحتوى، والبراندات العالمية في مضاعفة معدل الاحتفاظ بالمشاهدين (Retention Rate) عبر مونتاج فائق الدقة، تلوين سينمائي، ومؤثرات صوتية تأسر الانتباه من الثانية الأولى.",
    hero_cta_showreel: "مشاهدة الشو ريل",
    hero_cta_contact: "ابدأ مشروعك الآن",

    // Floating badges
    badge_views: "أكثر من 50 مليون",
    badge_views_sub: "مشاهدة محققة للعملاء",
    badge_color: "تلوين سينمائي 4K",
    badge_color_sub: "DaVinci Resolve Pro",
    badge_retention: "+70% معدل احتفاظ",
    badge_retention_sub: "ريتم سريع وجذاب",

    // Metrics
    metric_1_num: "+50M",
    metric_1_text: "مشاهدة محققة على يوتيوب وتيك توك",
    metric_2_num: "+180",
    metric_2_text: "فيديو تم تسليمه بنجاح واحترافية",
    metric_3_num: "+68%",
    metric_3_text: "متوسط زيادة نسبة المشاهدة (Retention)",
    metric_4_num: "99.4%",
    metric_4_text: "نسبة رضا العملاء والتقييمات الإيجابية",

    // Showreel & Spotlight
    showreel_badge: "أبرز الأعمال • إشادة الشركاء",
    showreel_title: "أقوى إنتاجاتي السينمائية.. <span>وشـهادة أعتز بها</span>",
    showreel_subtitle: "شاهد أقوى مشروع وثائقي أنجزته، يليه اعتراف عفوي من صانع المحتوى عبد الرحمان عطيف في ختام الحلقة يصف فيه الشراكة والجهد المبذول.",
    spotlight_tab_both: "عرض شامل (جنباً إلى جنب)",
    spotlight_tab_master: "العمل السينمائي الأقوى",
    spotlight_tab_tribute: "إشادة عبد الرحمان عطيف",
    spotlight_master_badge: "OFFICIAL MASTERPIECE",
    spotlight_master_views: "+404K Views",
    spotlight_master_title: "القصة الكاملة لاغتيال أول امرأة تحكم دولة إسلامية في التاريخ!",
    spotlight_master_desc: "وثائقي يوتيوب سينمائي معتمد على رتم درامي سريع، خرائط تفاعلية متحركة، وتصميم صوتي متعدد الطبقات يحقق أعلى معدل احتفاظ.",
    spotlight_master_action: "مشاهدة العمل الكامل",
    spotlight_tribute_badge: "LIVE CREATOR TRIBUTE",
    spotlight_tribute_creator: "عبد الرحمان عطيف",
    spotlight_tribute_shoutout: "إشادة حية وأخوية",
    spotlight_tribute_quote: "«أقسم بالله العلي العظيم رب أخٍ لم تلده أمك... رزقني الله بأخ مثلك، فشكراً يا محمد الله يديك الصحة والعافية ويقدرني ربي أكون عند حسن ظنك.»",
    spotlight_tribute_desc: "كلمة عفوية مسجلة في ختام الحلقة مباشرة من صانع المحتوى عبد الرحمان عطيف يشيد فيها بمحمد هلالي، مؤكداً عمق الشراكة، الأمانة، والاحترافية.",
    spotlight_tribute_action: "استمع للإشادة كاملة (فيديو)",

    // Before & After
    compare_badge: "القوة التحويلية للمونتاج",
    compare_title: "الفرق قبل وبعد <span>التلوين والمؤثرات</span>",
    compare_subtitle: "اسحب المؤشر لترى كيف نحول التصوير الخام الرمادي (S-Log Raw) إلى مشهد سينمائي متكامل الألوان والأبعاد.",
    badge_raw: "التصوير الخام S-LOG",
    badge_graded: "تلوين سينمائي + VFX",
    compare_hint: "اسحب الخط يميناً ويساراً للمقارنة المباشرة",

    // Portfolio
    portfolio_badge: "معرض الأعمال الفعلي",
    portfolio_title: "فيديوهات حققت <span>أعلى التفاعلات</span>",
    portfolio_subtitle: "تصفح نماذج متنوعة من الفيديوهات القصيرة، محتوى يوتيوب الطويل، الإعلانات، ومؤثرات الموشن.",
    filter_all: "جميع المشاريع",
    filter_shorts: "فيديوهات قصيرة (Reels & TikTok)",
    filter_youtube: "يوتيوب وبودكاست (Long-Form)",
    filter_commercial: "إعلانات تجارية وبراندات",
    filter_motion: "موشن جرافيك و VFX",
    watch_video_btn: "مشاهدة الفيديو",

    // Services
    services_badge: "حلول مونتاج شاملة",
    services_title: "ماذا أقدم <span>لقناتك أو علامتك التجارية؟</span>",
    services_subtitle: "خدمات تحرير فيديو مدروسة هندسياً لرفع التفاعل، زيادة المبيعات، وبناء هوية بصرية فريدة.",
    service_1_title: "صناعة الفيديوهات الفيروسية (Shorts & Reels)",
    service_1_desc: "تفكيك وتصميم ريلز وتيك توك بأسلوب أليكس هورموزي وإيمان قادزي: خطافات بصرية ساحرة (Hooks)، نصوص متحركة ديناميكية، وتأثيرات صوتية تجعل المشاهد يكمل حتى النهاية.",
    service_2_title: "مونتاج يوتيوب عالي الاحتفاظ (Retention Editing)",
    service_2_desc: "هيكلة الفيديوهات الطويلة، إدارة الرتم (Pacing)، إدراج البي رول السينمائي، تصميم الصوت (Sound Design)، لضمان رفع متوسط مدة المشاهدة إلى مستويات قياسية.",
    service_3_title: "التلوين السينمائي الاحترافي (Color Grading)",
    service_3_desc: "تلوين لقطات الكاميرات الاحترافية (Sony, RED, Arri, Blackmagic) عبر DaVinci Resolve، مع ضبط درجات البشرة وتطبيق لوكات ألوان سينمائية مميزة.",
    service_4_title: "الموشن جرافيك والمؤثرات البصرية (Motion Graphics & VFX)",
    service_4_desc: "تحريك العناصر ثنائية وثلاثية الأبعاد، تتبع الحركة (Camera Tracking)، تصميم العناوين السينمائية، شاشات العرض المستقبلية (HUDs)، وإزالة العيوب باحترافية.",
    service_5_title: "تصميم وهندسة الصوت (Sound Design & Foley)",
    service_5_desc: "الصوت يشكل 50% من نجاح أي فيديو. نقوم بتنقية الصوت، موازنة الترددات، إضافة المؤثرات الصوتية (Risers, Impacts, Whooshes) وخلق تجربة سمعية محيطية غامرة.",
    service_6_title: "تصميم أغلفة اليوتيوب والتغليف البصري (Packaging & CTR)",
    service_6_desc: "مساعدتك في اختيار اللقطات الأكثر جذباً، وتصميم الأغلفة المصغرة (Thumbnails) التي تضمن أعلى نسبة نقر إلى الظهور (High CTR).",

    // Workflow
    workflow_badge: "منهجية العمل المتقنة",
    workflow_title: "كيف ننفذ مشروعك من <span>البداية حتى التسليم؟</span>",
    workflow_subtitle: "خطة واضحة ومنظمة تضمن تسليم العمل في الموعد المحدد وبأعلى معايير الجودة العالمية.",
    step_1_title: "1. الإحاطة واستلام المواد",
    step_1_desc: "رفع الملفات الخام والملاحظات عبر Google Drive أو Frame.io وتحديد الهدف والرؤية الفنية.",
    step_2_title: "2. بناء القصة والقص الأولي",
    step_2_desc: "انتقاء أفضل اللقطات، ترتيب السرد، ضبط التوقيت والإيقاع (Rough Cut & Pacing).",
    step_3_title: "3. السحر البصري والصوتي",
    step_3_desc: "إضافة التلوين، المؤثرات البصرية، النصوص المتحركة، وهندسة الصوت الفائقة.",
    step_4_title: "4. المراجعة والتعديلات",
    step_4_desc: "مراجعة العميل للفيديو مع إمكانية إضافة الملاحظات وتعديلها بسرعة فائقة.",
    step_5_title: "5. التسليم النهائي 4K",
    step_5_desc: "تصدير الفيديو بأعلى جودة ممكنة جاهزاً للنشر المباشر وتحقيق النجاح.",

    // Testimonials
    reviews_badge: "شهادات حقيقية",
    reviews_title: "ماذا يقول <span>صناع المحتوى والعملاء؟</span>",
    reviews_subtitle: "آراء موثوقة من يوتيوبرز، وكالات تسويق، ورواد أعمال عملنا معاً على مشاريعهم.",
    reviews_add_btn: "أضف تقييمك أو شهادتك هنا",
    modal_review_title: "إضافة رأيك أو شهادتك",
    modal_review_sub: "شاركنا تجربتك الاحترافية ليتم نشرها في معرض آراء العملاء",
    modal_review_name: "اسم العميل / صانع المحتوى *",
    modal_review_role: "الصفة أو القناة *",
    modal_review_rating: "التقييم *",
    modal_review_quote: "نص التقييم أو الشهادة *",
    modal_review_avatar: "رابط صورة الحساب / اللوغو (اختياري)",
    modal_review_submit: "إرسال التقييم ونشره الآن",

    // Contact
    contact_badge: "فلنبدأ صناعة النجاح",
    contact_title: "هل أنت مستعد لرفع <span>مستوى فيديوهاتك؟</span>",
    contact_subtitle: "دعنا نتحدث عن مشروعك القادم ونبني استراتيجية مونتاج تضمن لك التفوق على منافسيك.",
    contact_whatsapp_btn: "محادثة فورية عبر واتساب",
    contact_copy_email_btn: "نسخ البريد الإلكتروني",
    contact_form_title: "أرسل تفاصيل مشروعك",
    label_name: "الاسم الكريم",
    label_email: "البريد الإلكتروني",
    label_type: "نوع المشروع المطلوب",
    label_message: "تفاصيل ورؤية الفيديو",
    type_opt_1: "فيديوهات قصيرة ريلز / تيك توك",
    type_opt_2: "فيديو يوتيوب طويل / وثائقي",
    type_opt_3: "إعلان تجاري لعلامة تجارية",
    type_opt_4: "تلوين سينمائي ومؤثرات بصرية",
    form_submit_btn: "إرسال الطلب الآن",
    toast_email_copied: "تم نسخ البريد الإلكتروني بنجاح!",

    // Footer
    footer_rights: "جميع الحقوق محفوظة © لمونتير الفيديو المحترف",
    footer_tagline: "صناعة قصص بصرية تأسر العالم"
  },
  en: {
    // Navigation
    nav_about: "About",
    nav_showreel: "Showreel",
    nav_before_after: "Before & After",
    nav_portfolio: "Portfolio",
    nav_services: "Services",
    nav_workflow: "Workflow",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    nav_hire_me: "Hire Me",

    // Hero
    hero_available: "Available for new projects",
    hero_greeting: "Hello, I'm a Master Video Editor",
    hero_title_1: "Transforming Raw Footage Into",
    hero_title_highlight: "High-Converting Viral Stories",
    hero_title_2: "That Capture Audiences & Multiply Views",
    hero_desc: "I help top YouTubers, creators, and global brands skyrocket their retention rate with elite narrative pacing, cinema-grade color grading, and dynamic sound design that hooks viewers from the first second.",
    hero_cta_showreel: "Watch Showreel",
    hero_cta_contact: "Start Your Project",

    // Floating badges
    badge_views: "50M+ Views",
    badge_views_sub: "Generated for clients",
    badge_color: "4K Color Grade",
    badge_color_sub: "DaVinci Resolve Pro",
    badge_retention: "+70% Retention",
    badge_retention_sub: "Dynamic Pacing Arc",

    // Metrics
    metric_1_num: "50M+",
    metric_1_text: "Organic Views on YouTube & TikTok",
    metric_2_num: "180+",
    metric_2_text: "High-Impact Videos Delivered",
    metric_3_num: "+68%",
    metric_3_text: "Average Watch Time / Retention Boost",
    metric_4_num: "99.4%",
    metric_4_text: "Client Satisfaction & 5-Star Rating",

    // Showreel & Spotlight
    showreel_badge: "Featured Works • Partner Tribute",
    showreel_title: "Masterpiece Production & <span>Creator Tribute</span>",
    showreel_subtitle: "Experience my flagship documentary project, alongside an authentic on-camera tribute from 500K creator Abdulrahman Otaif praising our collaboration.",
    spotlight_tab_both: "Side-by-Side View",
    spotlight_tab_master: "Masterpiece Project",
    spotlight_tab_tribute: "Creator Tribute",
    spotlight_master_badge: "OFFICIAL MASTERPIECE",
    spotlight_master_views: "+404K Views",
    spotlight_master_title: "The Assassination of the First Woman to Rule an Islamic State",
    spotlight_master_desc: "Cinematic YouTube documentary featuring high-velocity pacing, dynamic motion maps, and multi-layered sound design engineered for maximum retention.",
    spotlight_master_action: "Watch Full Masterpiece",
    spotlight_tribute_badge: "LIVE CREATOR TRIBUTE",
    spotlight_tribute_creator: "Abdulrahman Otaif",
    spotlight_tribute_shoutout: "Live On-Camera Shoutout",
    spotlight_tribute_quote: "\"By Almighty God, you are a brother my mother never bore... I thank God for blessing me with a brother like you. Thank you Mohamed, and may God keep our bond strong.\"",
    spotlight_tribute_desc: "An authentic, unscripted studio tribute recorded at the close of an episode by creator Abdulrahman Otaif, celebrating trust, storytelling craft, and creative chemistry.",
    spotlight_tribute_action: "Watch Full Tribute (Video)",

    // Before & After
    compare_badge: "The Editing Transformation",
    compare_title: "Raw Log Footage vs. <span>Cinematic Master</span>",
    compare_subtitle: "Drag the slider to experience how dull raw camera sensors (S-Log) turn into vibrant cinematic scenes.",
    badge_raw: "RAW S-LOG FOOTAGE",
    badge_graded: "COLOR GRADED + VFX",
    compare_hint: "Drag the divider left and right to inspect the details",

    // Portfolio
    portfolio_badge: "Proven Portfolio",
    portfolio_title: "Videos Engineered For <span>Maximum Engagement</span>",
    portfolio_subtitle: "Browse viral short-form content, documentary-style YouTube cuts, commercials, and VFX edits.",
    filter_all: "All Projects",
    filter_shorts: "Shorts & TikToks",
    filter_youtube: "YouTube (Long-Form)",
    filter_commercial: "Commercials & Brands",
    filter_motion: "Motion Graphics & VFX",
    watch_video_btn: "Watch Video",

    // Services
    services_badge: "Comprehensive Capabilities",
    services_title: "What I Deliver For <span>Your Brand & Channel</span>",
    services_subtitle: "Engineered post-production solutions built to increase watch time, drive conversions, and build authority.",
    service_1_title: "Viral Short-Form Content (Reels & TikTok)",
    service_1_desc: "Hormozi and Iman Gadzhi pacing: hypnotic hooks, kinetic typography, dynamic zooms, and sound effects that eliminate viewer drop-offs.",
    service_2_title: "High-Retention YouTube Editing",
    service_2_desc: "Masterful narrative structure, micro-tension, pacing arcs, custom B-roll integration, and soundscapes designed to optimize YouTube's algorithm.",
    service_3_title: "Cinematic Color Grading",
    service_3_desc: "Professional color grading for Sony, RED, Arri, and Blackmagic footage in DaVinci Resolve. Perfect skin tones, mood palettes, and film emulation.",
    service_4_title: "Motion Graphics & VFX",
    service_4_desc: "2D/3D animated typography, 3D camera tracking, custom HUD overlays, lower thirds, map animations, and seamless green-screen compositing.",
    service_5_title: "Sound Design & Audio Mastering",
    service_5_desc: "Audio represents 50% of the viewer experience. Dialogue cleanup, EQ, risers, sub-bass impacts, whooshes, and atmospheric immersive soundscapes.",
    service_6_title: "Packaging & High CTR Thumbnails",
    service_6_desc: "Selecting the highest converting frame moments, visual contrast balancing, and crafting thumbnails that trigger clicks.",

    // Workflow
    workflow_badge: "Seamless Process",
    workflow_title: "How We Turn Concepts Into <span>Finished Masterpieces</span>",
    workflow_subtitle: "A frictionless 5-step collaborative roadmap ensuring reliable delivery and exceptional quality every single time.",
    step_1_title: "1. Creative Brief & Media Ingest",
    step_1_desc: "Upload raw footage and briefs easily via Google Drive or Frame.io with aligned goals.",
    step_2_title: "2. Story Structure & Rough Cut",
    step_2_desc: "Extracting key narrative hooks, assembling the narrative arc, and establishing perfect rhythm.",
    step_3_title: "3. Color, Sound & Motion Polish",
    step_3_desc: "Applying cinema color grades, kinetic text, VFX tracking, and multi-layered sound design.",
    step_4_title: "4. Frame-Accurate Feedback",
    step_4_desc: "Reviewing cuts with rapid turnaround iterations until 100% satisfaction.",
    step_5_title: "5. 4K Master Delivery",
    step_5_desc: "Exporting high-bitrate master files formatted for YouTube, TikTok, or broadcast.",

    // Testimonials
    reviews_badge: "Real Testimonials",
    reviews_title: "What <span>Creators & Brands Say</span>",
    reviews_subtitle: "Feedback from prominent YouTubers, marketing agencies, and business founders.",
    reviews_add_btn: "Add Your Review or Testimonial",
    modal_review_title: "Add Your Review",
    modal_review_sub: "Share your professional collaboration experience to be featured on this showcase",
    modal_review_name: "Client / Creator Name *",
    modal_review_role: "Role or Channel Handle *",
    modal_review_rating: "Rating *",
    modal_review_quote: "Review / Testimonial *",
    modal_review_avatar: "Avatar / Logo URL (Optional)",
    modal_review_submit: "Submit Review Now",

    // Contact
    contact_badge: "Let's Collaborate",
    contact_title: "Ready To Level Up <span>Your Video Content?</span>",
    contact_subtitle: "Let's discuss your upcoming project and build a high-impact editing strategy for your channel.",
    contact_whatsapp_btn: "Instant WhatsApp Chat",
    contact_copy_email_btn: "Copy Email Address",
    contact_form_title: "Send Project Inquiry",
    label_name: "Your Name",
    label_email: "Email Address",
    label_type: "Project Type",
    label_message: "Project Vision & Details",
    type_opt_1: "Viral Shorts / Reels / TikToks",
    type_opt_2: "Long-Form YouTube / Documentary",
    type_opt_3: "Commercial / Brand Ad",
    type_opt_4: "Color Grading & VFX Polish",
    form_submit_btn: "Submit Project Brief",
    toast_email_copied: "Email address successfully copied to clipboard!",

    // Footer
    footer_rights: "All Rights Reserved © Professional Video Editor",
    footer_tagline: "Crafting visual stories that inspire and convert."
  }
};

// Profession Rotation Arrays
const professions = {
  ar: [
    "مونتير فيديو سينمائي",
    "خبير فيديوهات قصيرة وفيروسية",
    "متخصص تلوين ومؤثرات بصرية",
    "صانع قصص بصرية عالية الاحتفاظ"
  ],
  en: [
    "Cinematic Video Editor",
    "Viral Shorts & Reels Specialist",
    "Colorist & VFX Artist",
    "High-Retention Storyteller"
  ]
};

// Project Video Sample Data (Used for Lightbox Modal)
let projectVideos = {
  "showreel": {
    "titleAr": "القصة الكاملة لاغتيال أول امرأة تحكم دولة إسلامية في التاريخ!",
    "titleEn": "The Assassination of the First Woman to Rule an Islamic State",
    "tag": "Official Masterpiece",
    "url": "https://www.youtube.com/embed/euCoUp4_go0?autoplay=1"
  },
  "abdulrahman-tribute": {
    "titleAr": "شهادة وإشادة صانع المحتوى عبد الرحمان عطيف (قناة D7MANc)",
    "titleEn": "Creator Abdulrahman Otaif's Live On-Camera Tribute",
    "tag": "Live Creator Tribute",
    "url": "assets/video/abdulrahman-testimonial.mp4",
    "type": "video"
  },
  "proj-1": {
    "titleAr": "القصة الكاملة لاغتيال أول امرأة تحكم دولة إسلامية في التاريخ!",
    "titleEn": "The full story of the assassination of the first woman in history to rule an Islamic state!",
    "tag": "YouTube Documentary",
    "url": "https://www.youtube.com/embed/euCoUp4_go0?autoplay=1"
  },
  "proj-2": {
    "titleAr": "ليلة القبض على رفيق بن لادن في اليمن",
    "titleEn": "The Night Bin Laden’s Associate Was Arrested in Yemen",
    "tag": "YouTube Long-Form",
    "url": "https://www.youtube.com/embed/60f8xluWIBw?autoplay=1"
  },
  "proj-3": {
    "titleAr": "من مذيعة الجزيرة إلى عشيقة بشار الأسد؟ لونا الشبل",
    "titleEn": "From Al Jazeera Presenter to Bashar al-Assad’s Mistress? Luna Al-Shibl",
    "tag": "YouTube Long-Form",
    "url": "https://www.youtube.com/embed/8UJ69GTNXpI?autoplay=1"
  },
  "proj-4": {
    "titleAr": "مدينة بلا رجال",
    "titleEn": "A City Without Men",
    "tag": "Shorts & Reels",
    "url": "https://www.instagram.com/d7manc/reel/DXFRdzajou8/"
  }
};

/*=============== DOM INITIALIZATION ===============*/
document.addEventListener('DOMContentLoaded', () => {
  initGpuParticles();
  applySiteData();
  initLanguage(currentLang);
  initDynamicTyping();
  initBeforeAfterSlider();
  initVideoModal();
  initSpotlightTabs();
  initProjectFilters();
  initSwiperTestimonials();
  initContactActions();
  initReviewModal();
  initCustomCursor();
  initScrollNav();
  initMobileMenu();
  initScrollFadeEngine();
});

/*=============== GPU ACCELERATED PARTICLE MESH CANVAS ===============*/
function initGpuParticles() {
  const canvas = document.getElementById('gpu-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
  let mouse = { x: -1000, y: -1000, radius: 120 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.28;
      this.vy = (Math.random() - 0.5) * 0.28;
      this.radius = Math.random() * 1.8 + 0.8;
      this.color = Math.random() > 0.5 ? 'rgba(124, 58, 237, ' : 'rgba(6, 182, 212, ';
      this.baseAlpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 1.4;
        this.y -= Math.sin(angle) * force * 1.4;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.baseAlpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color + '0.8)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw lines between near particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    // Update & draw particles
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/*=============== APPLY DYNAMIC SITE DATA FROM DASHBOARD ===============*/
let testimonialsSwiperInstance = null;
let projectsSwiperInstance = null;

function applySiteData() {
  if (!window.SITE_DATA) return;
  const d = window.SITE_DATA;

  // 1. Profile & Brand
  if (d.profile) {
    const brandEl = document.getElementById('brand-logo-text');
    if (brandEl && d.profile.brandName) {
      brandEl.textContent = d.profile.brandName;
    }

    if (d.profile.titleLine1Ar) translations.ar.hero_title_1 = d.profile.titleLine1Ar;
    if (d.profile.titleHighlightAr) translations.ar.hero_title_highlight = d.profile.titleHighlightAr;
    if (d.profile.titleLine2Ar) translations.ar.hero_title_2 = d.profile.titleLine2Ar;
    if (d.profile.descAr) translations.ar.hero_desc = d.profile.descAr;
    if (d.profile.statusAr) translations.ar.hero_available = d.profile.statusAr;

    if (d.profile.titleLine1En) translations.en.hero_title_1 = d.profile.titleLine1En;
    if (d.profile.titleHighlightEn) translations.en.hero_title_highlight = d.profile.titleHighlightEn;
    if (d.profile.titleLine2En) translations.en.hero_title_2 = d.profile.titleLine2En;
    if (d.profile.descEn) translations.en.hero_desc = d.profile.descEn;
    if (d.profile.statusEn) translations.en.hero_available = d.profile.statusEn;

    if (d.profile.badgeViewsAr) translations.ar.badge_views = d.profile.badgeViewsAr;
    if (d.profile.badgeViewsEn) translations.en.badge_views = d.profile.badgeViewsEn;
    if (d.profile.badgeViewsSubAr) translations.ar.badge_views_sub = d.profile.badgeViewsSubAr;
    if (d.profile.badgeViewsSubEn) translations.en.badge_views_sub = d.profile.badgeViewsSubEn;

    if (d.profile.badgeColorAr) translations.ar.badge_color = d.profile.badgeColorAr;
    if (d.profile.badgeColorEn) translations.en.badge_color = d.profile.badgeColorEn;
    if (d.profile.badgeColorSubAr) translations.ar.badge_color_sub = d.profile.badgeColorSubAr;
    if (d.profile.badgeColorSubEn) translations.en.badge_color_sub = d.profile.badgeColorSubEn;

    if (d.profile.professionsAr && d.profile.professionsAr.length) {
      professions.ar = d.profile.professionsAr;
    }
    if (d.profile.professionsEn && d.profile.professionsEn.length) {
      professions.en = d.profile.professionsEn;
    }
  }

  // 2. Showreel URL & Text
  if (d.showreel) {
    if (d.showreel.titleAr) translations.ar.showreel_title = d.showreel.titleAr;
    if (d.showreel.titleEn) translations.en.showreel_title = d.showreel.titleEn;
    if (d.showreel.subtitleAr) translations.ar.showreel_subtitle = d.showreel.subtitleAr;
    if (d.showreel.subtitleEn) translations.en.showreel_subtitle = d.showreel.subtitleEn;

    if (d.showreel.url) {
      projectVideos['showreel'] = {
        titleAr: d.showreel.titleAr || "القصة الكاملة لاغتيال أول امرأة تحكم دولة إسلامية في التاريخ!",
        titleEn: d.showreel.titleEn || "The Assassination of the First Woman to Rule an Islamic State",
        tag: "Official Masterpiece",
        url: d.showreel.url
      };
    }

    if (d.showreel.tribute) {
      const tr = d.showreel.tribute;
      if (tr.quoteAr) translations.ar.spotlight_tribute_quote = tr.quoteAr;
      if (tr.quoteEn) translations.en.spotlight_tribute_quote = tr.quoteEn;
      if (tr.creatorName) translations.ar.spotlight_tribute_creator = tr.creatorName;
      if (tr.titleAr) translations.ar.spotlight_tribute_badge = tr.titleAr;

      const qEl = document.querySelector('[data-i18n="spotlight_tribute_quote"]');
      if (qEl) qEl.textContent = (currentLang === 'ar' ? tr.quoteAr : (tr.quoteEn || tr.quoteAr)) || qEl.textContent;

      const cEl = document.querySelector('[data-i18n="spotlight_tribute_creator"]');
      if (cEl && tr.creatorName) cEl.textContent = tr.creatorName;

      const tagEl = document.querySelector('#card-tribute .ui-reach-pill');
      if (tagEl && tr.creatorTag) tagEl.innerHTML = `<i class="ri-user-star-line"></i> ${escapeHTML(tr.creatorTag)}`;

      const imgEl = document.querySelector('#card-tribute .spotlight-media img');
      if (imgEl && tr.thumbUrl) imgEl.src = tr.thumbUrl;

      projectVideos['abdulrahman-tribute'] = {
        titleAr: tr.titleAr || "شهادة وإشادة صانع المحتوى عبد الرحمان عطيف (قناة D7MANc)",
        titleEn: tr.titleEn || "Creator Abdulrahman Otaif's Live On-Camera Tribute",
        tag: "Live Creator Tribute",
        url: tr.videoUrl || "assets/video/abdulrahman-testimonial.mp4",
        type: (tr.videoUrl && (tr.videoUrl.endsWith('.mp4') || tr.videoUrl.endsWith('.webm'))) ? "video" : (tr.videoUrl && tr.videoUrl.includes('youtu') ? "youtube" : "video")
      };
    }
  }

  // 3. Contact & Socials
  if (d.contact) {
    if (d.contact.whatsapp) {
      document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
        a.href = `https://wa.me/${d.contact.whatsapp}?text=${encodeURIComponent('مرحباً! اطلعت على معرض أعمالك وأود مناقشة مشروع فيديو')}`;
      });
    }
    if (d.contact.youtube) {
      document.querySelectorAll('a[title="YouTube"]').forEach(a => { a.href = d.contact.youtube; });
    }
    if (d.contact.instagram) {
      document.querySelectorAll('a[title="Instagram"]').forEach(a => { a.href = d.contact.instagram; });
    }
    if (d.contact.tiktok) {
      document.querySelectorAll('a[title="TikTok"]').forEach(a => { a.href = d.contact.tiktok; });
    }
    if (d.contact.linkedin) {
      document.querySelectorAll('a[title="LinkedIn"]').forEach(a => { a.href = d.contact.linkedin; });
    }
  }

  // 4. Dynamic Metrics Strip
  if (d.metrics && d.metrics.length) {
    const mContainer = document.getElementById('metrics-grid-container');
    if (mContainer) {
      mContainer.innerHTML = d.metrics.map(m => `
        <div class="metric__item">
          <div class="metric__number">${m.num} <span>${m.symbol || '★'}</span></div>
          <div class="metric__desc">${currentLang === 'ar' ? m.textAr : (m.textEn || m.textAr)}</div>
        </div>
      `).join('');
    }
  }

  // 5. Dynamic Projects Swiper (Habib / Panda Coders Style)
  if (d.projects && d.projects.length) {
    d.projects.forEach(p => {
      projectVideos[p.id] = {
        titleAr: p.titleAr,
        titleEn: p.titleEn || p.titleAr,
        tag: (currentLang === 'ar' ? p.categoryLabelAr : p.categoryLabelEn) || p.category,
        url: p.url
      };
    });

    const pWrapper = document.getElementById('projects-swiper-wrapper') || document.getElementById('projects-grid-container');
    if (pWrapper) {
      const catIcons = {
        shorts: 'ri-smartphone-line',
        youtube: 'ri-youtube-line',
        commercial: 'ri-megaphone-line',
        motion: 'ri-magic-line'
      };

      pWrapper.innerHTML = d.projects.map((p, idx) => {
        const num = p.num || (idx < 9 ? `0${idx + 1}` : `${idx + 1}`);
        const cat = p.category || 'youtube';
        const catLabel = (currentLang === 'ar' ? p.categoryLabelAr : p.categoryLabelEn) || cat;
        const title = currentLang === 'ar' ? p.titleAr : (p.titleEn || p.titleAr);
        const subtitle = (currentLang === 'ar' ? p.subtitleAr : p.subtitleEn) || (currentLang === 'ar' ? 'أسلوب المونتاج والريتم' : 'Editing Style & Techstack');
        const desc = currentLang === 'ar' ? p.descAr : (p.descEn || p.descAr);

        // Thumbnail detection
        const ytMatch = (p.url || '').match(/(?:embed\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        const ytId = ytMatch ? ytMatch[1] : null;
        let img = p.image || '';
        if (img && !img.endsWith('.svg')) {
          // keep custom img
        } else if (ytId) {
          img = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
        } else {
          img = img || `assets/img/project-${(idx % 6) + 1}.svg`;
        }

        const reach = p.reach || '🔥 +400K Views';
        const tools = (p.tools || []).map(t => `<span class="ui-tool-chip"><i class="ri-check-line" style="color: #06b6d4;"></i> ${t}</span>`).join('');

        return `
          <article class="projects__card swiper-slide" data-category="${cat}">
            <div class="blob"></div>

            <!-- UI Window Header Bar -->
            <div class="ui-window-header">
              <div class="ui-window-controls">
                <span class="ui-dot ui-dot--red"></span>
                <span class="ui-dot ui-dot--yellow"></span>
                <span class="ui-dot ui-dot--green"></span>
              </div>
              <div class="ui-window-badge">
                <i class="ri-terminal-window-line"></i> <span>TIMELINE 4K</span>
              </div>
              <div class="ui-reach-pill">
                ${reach}
              </div>
            </div>

            <!-- Projects Number & Category in UI Style -->
            <div class="projects__number">
              <h1 class="ui-card-num">${num}</h1>
              <div class="ui-cat-chip">
                <span class="ui-live-dot"></span>
                <i class="${catIcons[cat] || 'ri-film-line'}"></i>
                <span>${catLabel}</span>
              </div>
            </div>

            <!-- Projects Data in UI Style -->
            <div class="projects__data">
              <h1 class="projects__title">${title}</h1>
              <p class="projects__subtitle">
                <i class="ri-sparkling-fill" style="font-size: 0.8rem; vertical-align: middle;"></i> ${subtitle}
              </p>
              <p class="projects__description">${desc}</p>
              <div class="projects__tools">
                ${tools}
              </div>
            </div>

            <!-- UI Video Player Mockup in Media Box -->
            <div class="projects__image ui-player-box" onclick="openVideoModal('${p.id}')">
              <img src="${img}" alt="${title}" class="projects__img" onerror="this.src='assets/img/project-${(idx % 6) + 1}.svg'" />
              <div class="ui-player-overlay"></div>

              <!-- Resolution Tag -->
              <span class="ui-player-res-tag">
                <i class="ri-hd-line"></i> 4K PRORES
              </span>

              <!-- Center Frosted Glass Play Controller -->
              <div class="ui-center-play">
                <div class="ui-play-ring-pulse"></div>
                <i class="ri-play-fill"></i>
              </div>

              <!-- Bottom UI Player HUD Bar -->
              <div class="ui-player-hud">
                <div class="ui-player-time">
                  <i class="ri-play-mini-fill"></i> <span>04:25</span>
                </div>
                <div class="ui-player-scrubber">
                  <div class="ui-player-progress" style="width: 76%;"></div>
                </div>
                <div class="ui-player-waves">
                  <span class="wave-bar" style="animation-delay: 0s;"></span>
                  <span class="wave-bar" style="animation-delay: 0.25s;"></span>
                  <span class="wave-bar" style="animation-delay: 0.5s;"></span>
                  <span class="wave-bar" style="animation-delay: 0.15s;"></span>
                </div>
              </div>

              <!-- Hover Arrow Link Button -->
              <a href="javascript:void(0)" class="projects__button" aria-label="Watch Video">
                <i class="ri-arrow-right-up-long-line"></i>
              </a>
            </div>
          </article>
        `;
      }).join('');

      initProjectsSwiper();
    }
  }

  // 6. Dynamic Testimonials (Bilingual)
  if (d.testimonials) {
    // Merge any client-submitted reviews cached in current browser session
    try {
      const cached = JSON.parse(localStorage.getItem('cached_testimonials') || '[]');
      if (Array.isArray(cached) && cached.length) {
        cached.forEach(c => {
          const exists = d.testimonials.some(existing => (
            (existing.nameAr === c.nameAr || existing.name === c.nameAr) &&
            (existing.quoteAr === c.quoteAr || existing.quote === c.quoteAr)
          ));
          if (!exists) {
            d.testimonials.push(c);
          }
        });
      }
    } catch (_) {}

    const tContainer = document.getElementById('testimonials-wrapper-container');
    if (tContainer && d.testimonials.length) {
      tContainer.innerHTML = d.testimonials.map((t, idx) => {
        const name = currentLang === 'ar' ? (t.nameAr || t.name) : (t.nameEn || t.name || t.nameAr);
        const role = currentLang === 'ar' ? (t.roleAr || t.role) : (t.roleEn || t.role || t.roleAr);
        const quote = currentLang === 'ar' ? (t.quoteAr || t.quote) : (t.quoteEn || t.quote || t.quoteAr);
        const ratingCount = Math.min(Math.max(parseInt(t.rating, 10) || 5, 1), 5);
        return `
        <div class="swiper-slide">
          <div class="testimonial__card">
            <div>
              <div class="testimonial__rating">
                ${'<i class="ri-star-fill"></i>'.repeat(ratingCount)}
              </div>
              <p class="testimonial__quote">"${escapeHTML(quote)}"</p>
            </div>
            <div class="testimonial__author">
              <img src="${escapeHTML(t.avatar || `assets/img/avatar-${(idx%4)+1}.svg`)}" alt="${escapeHTML(name)}" class="author-avatar" onerror="this.src='assets/img/avatar-${(idx%4)+1}.svg'">
              <div>
                <div class="author-name">${escapeHTML(name)}</div>
                <div class="author-role">${escapeHTML(role)}</div>
              </div>
            </div>
          </div>
        </div>
      `;
      }).join('');

      // Re-init swiper if already rendered
      if (testimonialsSwiperInstance) {
        try {
          testimonialsSwiperInstance.destroy(true, true);
        } catch (e) {}
        initSwiperTestimonials();
      }
    }
  }

  // 7. Dynamic Services
  if (d.services && d.services.length) {
    const sContainer = document.getElementById('services-grid-container') || document.querySelector('.services__grid');
    if (sContainer) {
      sContainer.innerHTML = d.services.map(s => {
        const title = currentLang === 'ar' ? (s.titleAr || s.title) : (s.titleEn || s.title || s.titleAr);
        const desc = currentLang === 'ar' ? (s.descAr || s.desc) : (s.descEn || s.desc || s.descAr);
        const feats = currentLang === 'ar' ? (s.featuresAr || s.features || []) : (s.featuresEn || s.features || s.featuresAr || []);
        const featsHtml = feats.map(f => `<li class="service__feature"><i class="ri-check-line"></i> ${escapeHTML(f)}</li>`).join('');
        return `
          <div class="service__card">
            <div class="service__icon-wrap"><i class="${escapeHTML(s.icon || 'ri-tools-line')}"></i></div>
            <h3 class="service__title">${escapeHTML(title)}</h3>
            <p class="service__desc">${escapeHTML(desc)}</p>
            <ul class="service__features">
              ${featsHtml}
            </ul>
            <div class="service__software">${escapeHTML(s.software || '')}</div>
          </div>
        `;
      }).join('');
    }
  }

  // 8. Dynamic Workflow
  if (d.workflow && d.workflow.length) {
    const wContainer = document.getElementById('workflow-grid-container') || document.querySelector('.workflow__grid');
    if (wContainer) {
      wContainer.innerHTML = d.workflow.map((w, idx) => {
        const num = w.num || (idx < 9 ? `0${idx+1}` : `${idx+1}`);
        const title = currentLang === 'ar' ? (w.titleAr || w.title) : (w.titleEn || w.title || w.titleAr);
        const desc = currentLang === 'ar' ? (w.descAr || w.desc) : (w.descEn || w.desc || w.descAr);
        return `
          <div class="workflow__step">
            <div class="step__number">${escapeHTML(num)}</div>
            <h3 class="step__title">${escapeHTML(title)}</h3>
            <p class="step__desc">${escapeHTML(desc)}</p>
          </div>
        `;
      }).join('');
    }
  }
}

/*=============== 1. LANGUAGE ENGINE (AR / EN) ===============*/
function initLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Re-apply site data for language
  applySiteData();

  // Update button badge
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.innerHTML = lang === 'ar' 
      ? '<i class="ri-global-line"></i> English' 
      : '<i class="ri-global-line"></i> العربية';
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Re-render typist
  restartDynamicTyping();
}

// Language toggle handler
const langToggleBtn = document.getElementById('lang-toggle-btn');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    initLanguage(newLang);
  });
}

/*=============== 2. DYNAMIC PROFESSION TYPEWRITER ===============*/
let typeTimeout;
let charIndex = 0;
let professionIndex = 0;
let isDeleting = false;

function initDynamicTyping() {
  restartDynamicTyping();
}

function restartDynamicTyping() {
  clearTimeout(typeTimeout);
  charIndex = 0;
  isDeleting = false;
  typeWriter();
}

function typeWriter() {
  const target = document.getElementById('profession-typing');
  if (!target) return;

  const currentList = professions[currentLang];
  const fullText = currentList[professionIndex % currentList.length];

  if (isDeleting) {
    target.textContent = fullText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    target.textContent = fullText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 105;

  if (!isDeleting && charIndex === fullText.length) {
    typeSpeed = 2800; // Dignified pause at full title
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    professionIndex++;
    typeSpeed = 650;
  }

  typeTimeout = setTimeout(typeWriter, typeSpeed);
}

/*=============== 3. BEFORE & AFTER COMPARISON SLIDER ===============*/
function initBeforeAfterSlider() {
  const container = document.querySelector('.slider-container');
  const handle = document.querySelector('.slider-handle');

  if (!container || !handle) return;

  let isDragging = false;

  const updatePosition = (clientX) => {
    const rect = container.getBoundingClientRect();
    if (rect.width <= 0) return;

    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    container.style.setProperty('--pos', `${percentage.toFixed(2)}%`);
  };

  // Ensure default 50%
  container.style.setProperty('--pos', '50%');

  // Unified Pointer Events (Modern Browsers & Mobile)
  container.addEventListener('pointerdown', (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    isDragging = true;
    try {
      container.setPointerCapture(e.pointerId);
    } catch (_) {}
    updatePosition(e.clientX);
  });

  container.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  });

  const endDrag = (e) => {
    if (isDragging) {
      isDragging = false;
      if (e && e.pointerId) {
        try {
          container.releasePointerCapture(e.pointerId);
        } catch (_) {}
      }
    }
  };

  container.addEventListener('pointerup', endDrag);
  container.addEventListener('pointercancel', endDrag);

  // Additional Touch Fallbacks
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      isDragging = true;
      updatePosition(e.touches[0].clientX);
    }
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length > 0) {
      if (e.cancelable) e.preventDefault();
      updatePosition(e.touches[0].clientX);
    }
  }, { passive: false });

  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchcancel', () => { isDragging = false; });
}

// Helper: Normalize & strictly validate YouTube / Vimeo / Shorts URL into trusted embed URL
function toEmbedUrl(url) {
  if (!url || typeof url !== 'string') return "";
  url = url.trim();

  // 1. YouTube Shorts: youtube.com/shorts/VIDEO_ID
  const shortsMatch = url.match(/(?:youtube\.com\/shorts\/|youtu\.be\/shorts\/)([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) {
    return `https://www.youtube.com/embed/${encodeURIComponent(shortsMatch[1])}?autoplay=1`;
  }

  // 2. Standard YouTube: watch?v=, youtu.be/, or youtube.com/embed/
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([a-zA-Z0-9_-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${encodeURIComponent(ytMatch[1])}?autoplay=1`;
  }

  // 3. Vimeo: vimeo.com/VIDEO_ID
  const vimeoMatch = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)/);
  if (vimeoMatch && vimeoMatch[3]) {
    return `https://player.vimeo.com/video/${encodeURIComponent(vimeoMatch[3])}?autoplay=1`;
  }

  // 4. Instagram Reel / Post
  const instaMatch = url.match(/instagram\.com\/(?:[^\/]+\/)?(?:reel|p)\/([a-zA-Z0-9_-]+)/);
  if (instaMatch && instaMatch[1]) {
    return `https://www.instagram.com/reel/${encodeURIComponent(instaMatch[1])}/embed/`;
  }

  // 5. If already safe YouTube/Vimeo embed
  if (/^https:\/\/(www\.)?(youtube\.com\/embed\/|youtube-nocookie\.com\/embed\/|player\.vimeo\.com\/video\/)[a-zA-Z0-9_-]+/.test(url)) {
    return url;
  }

  return "";
}

/*=============== 4. VIDEO LIGHTBOX MODAL ===============*/
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  const videoEl = document.getElementById('modal-video');
  const modalTitle = document.getElementById('modal-video-title');
  const modalTag = document.getElementById('modal-video-tag');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || (!iframe && !videoEl)) return;

  window.openVideoModal = function(videoId) {
    const videoData = projectVideos[videoId];
    if (!videoData) return;

    const isAr = currentLang === 'ar';
    modalTitle.textContent = isAr ? videoData.titleAr : videoData.titleEn;
    modalTag.textContent = videoData.tag;

    const isDirectVideo = videoData.type === 'video' || (videoData.url && (videoData.url.endsWith('.mp4') || videoData.url.endsWith('.webm')));

    if (isDirectVideo) {
      if (iframe) {
        iframe.style.display = 'none';
        iframe.src = '';
      }
      if (videoEl) {
        videoEl.style.display = 'block';
        videoEl.src = videoData.url;
        videoEl.play().catch(() => {});
      }
    } else {
      if (videoEl) {
        videoEl.pause();
        videoEl.style.display = 'none';
        videoEl.src = '';
      }
      if (iframe) {
        iframe.style.display = 'block';
        iframe.src = toEmbedUrl(videoData.url);
      }
    }

    const modalBox = modal.querySelector('.modal-content-box');
    if (modalBox) {
      if (videoData.tag === 'Shorts & Reels' || (videoData.url && videoData.url.includes('/reel/')) || (videoData.url && videoData.url.includes('/shorts/'))) {
        modalBox.classList.add('modal-vertical');
      } else {
        modalBox.classList.remove('modal-vertical');
      }
    }

    modal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('modal-active');
    const modalBox = modal.querySelector('.modal-content-box');
    if (modalBox) modalBox.classList.remove('modal-vertical');
    if (iframe) iframe.src = '';
    if (videoEl) {
      videoEl.pause();
      videoEl.src = '';
    }
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Escape key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal-active')) {
      closeModal();
    }
  });
}

/*=============== SPOTLIGHT VIEW SWITCHER TABS ===============*/
function initSpotlightTabs() {
  const tabs = document.querySelectorAll('.spotlight-tab-btn');
  const grid = document.getElementById('spotlight-grid');
  if (!tabs.length || !grid) return;

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update grid mode class
      grid.classList.remove('mode-both', 'mode-master', 'mode-tribute');
      grid.classList.add(`mode-${mode}`);

      // Smooth scroll sync if ScrollReveal is present
      if (window.ScrollReveal) {
        window.ScrollReveal().sync();
      }
    });
  });
}

/*=============== 5. PROJECTS SWIPER & FILTER SYSTEM ===============*/
function initProjectsSwiper() {
  const swiperEl = document.querySelector('.projects__swiper');
  if (!swiperEl || typeof Swiper === 'undefined') return;

  if (projectsSwiperInstance) {
    try { projectsSwiperInstance.destroy(true, true); } catch(e) {}
  }

  projectsSwiperInstance = new Swiper('.projects__swiper', {
    loop: false,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    speed: 950,
    touchRatio: 0.95,
    touchAngle: 45,
    resistanceRatio: 0.75,
    pagination: {
      el: '.projects__swiper .swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn, .work__button');
  const projectCards = document.querySelectorAll('.projects__card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active-filter', 'work-active'));
      btn.classList.add('active-filter', 'work-active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });

      if (projectsSwiperInstance) {
        projectsSwiperInstance.update();
        projectsSwiperInstance.slideTo(0, 900);
      }
    });
  });
}

/*=============== 6. SWIPER TESTIMONIALS ===============*/
function initSwiperTestimonials() {
  if (typeof Swiper !== 'undefined') {
    testimonialsSwiperInstance = new Swiper('.testimonials__swiper', {
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      speed: 1000,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 }
      }
    });
  }
}

/*=============== 7. CONTACT ACTIONS & TOAST ===============*/
function initContactActions() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notice');
  const emailVal = (window.SITE_DATA && window.SITE_DATA.contact && window.SITE_DATA.contact.email) ? window.SITE_DATA.contact.email : "hallali.mohamed4@gmail.com"; // User's email

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailVal).then(() => {
        showToast(translations[currentLang].toast_email_copied);
      });
    });
  }

  // Contact Form Submission Handler (Fortified with Honeypot, Anti-Spam & Rate Limiting)
  const contactForm = document.getElementById('contact-form');
  let lastSubmitTime = 0;
  let submissionCount = 0;

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // 1. Anti-Bot Honeypot check
      const honeypot = document.getElementById('contact-hp');
      if (honeypot && honeypot.value.trim() !== '') {
        // Drop automated bot submissions silently
        contactForm.reset();
        return;
      }

      // 2. Client-side Rate Limiting (Anti-flooding protection)
      const now = Date.now();
      if (now - lastSubmitTime < 5000) {
        const waitMsg = currentLang === 'ar'
          ? "يرجى الانتظار 5 ثوانٍ قبل إرسال طلب جديد."
          : "Please wait 5 seconds before submitting again.";
        showToast(waitMsg);
        return;
      }

      if (submissionCount >= 5 && (now - lastSubmitTime < 60000)) {
        const floodMsg = currentLang === 'ar'
          ? "تم تجاوز الحد المسموح به من المحاولات مؤقتاً. يرجى المحاولة بعد قليل."
          : "Too many attempts. Please try again in a minute.";
        showToast(floodMsg);
        return;
      }

      // 3. Input Validation
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');
      const emailValInput = (emailInput ? emailInput.value : '').trim();
      const messageVal = (messageInput ? messageInput.value : '').trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValInput)) {
        const invalidEmailMsg = currentLang === 'ar'
          ? "يرجى إدخال بريد إلكتروني صالح."
          : "Please enter a valid email address.";
        showToast(invalidEmailMsg);
        return;
      }

      if (messageVal.length < 5) {
        const shortMsg = currentLang === 'ar'
          ? "يرجى تقديم تفاصيل أكثر عن الفيديو المطلوب."
          : "Please describe your project in a few more words.";
        showToast(shortMsg);
        return;
      }

      lastSubmitTime = now;
      submissionCount++;

      const successMsg = currentLang === 'ar' 
        ? "شكراً لك! تم استلام طلبك وسأتواصل معك خلال ساعات قليلة." 
        : "Thank you! Your inquiry was received. I will reply within a few hours.";
      showToast(successMsg);
      contactForm.reset();
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = msg;
  toast.classList.add('toast-show');

  setTimeout(() => {
    toast.classList.remove('toast-show');
  }, 3500);
}

/*=============== 7.5 CLIENT REVIEW MODAL & SUBMISSION ===============*/
function initReviewModal() {
  const openBtn = document.getElementById('btn-open-review-modal');
  const modal = document.getElementById('review-modal');
  const closeBtn = document.getElementById('review-modal-close');
  const form = document.getElementById('review-form');
  const starsContainer = document.getElementById('review-stars-container');
  const ratingInput = document.getElementById('review-rating');
  const ratingText = document.getElementById('star-rating-text');

  if (!modal) return;

  function openModal() {
    modal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
    const firstInput = document.getElementById('review-name');
    if (firstInput) setTimeout(() => firstInput.focus(), 150);
  }

  function closeModal() {
    modal.classList.remove('modal-active');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal-active')) {
      closeModal();
    }
  });

  // Star rating interactivity
  const starDescriptions = {
    ar: ["1 نجمة (مقبول)", "2 نجمتان (جيد)", "3 نجوم (جيد جداً)", "4 نجوم (ممتاز)", "5 نجوم (استثنائي وممتاز جداً)"],
    en: ["1 Star (Acceptable)", "2 Stars (Good)", "3 Stars (Very Good)", "4 Stars (Excellent)", "5 Stars (Exceptional)"]
  };

  if (starsContainer) {
    const stars = starsContainer.querySelectorAll('i[data-rating]');
    
    function updateStarsDisplay(val) {
      stars.forEach(s => {
        const r = parseInt(s.getAttribute('data-rating'), 10);
        if (r <= val) {
          s.classList.add('active-star');
        } else {
          s.classList.remove('active-star');
        }
      });
      if (ratingInput) ratingInput.value = val;
      if (ratingText) {
        const list = starDescriptions[currentLang] || starDescriptions.ar;
        ratingText.textContent = list[val - 1] || `${val} Stars`;
      }
    }

    stars.forEach(s => {
      s.addEventListener('mouseenter', () => {
        const hoverVal = parseInt(s.getAttribute('data-rating'), 10);
        stars.forEach(item => {
          const r = parseInt(item.getAttribute('data-rating'), 10);
          item.style.color = (r <= hoverVal) ? '#f59e0b' : '#475569';
        });
      });

      s.addEventListener('click', () => {
        const clickedVal = parseInt(s.getAttribute('data-rating'), 10);
        updateStarsDisplay(clickedVal);
      });
    });

    starsContainer.addEventListener('mouseleave', () => {
      const currentVal = parseInt(ratingInput ? ratingInput.value : '5', 10);
      stars.forEach(item => {
        item.style.color = '';
      });
      updateStarsDisplay(currentVal);
    });
  }

  // Form submission handler
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Honeypot check
      const hp = document.getElementById('review-hp');
      if (hp && hp.value.trim() !== '') {
        closeModal();
        return;
      }

      const nameInput = document.getElementById('review-name');
      const roleInput = document.getElementById('review-role');
      const quoteInput = document.getElementById('review-quote');
      const avatarInput = document.getElementById('review-avatar');

      const nameVal = (nameInput ? nameInput.value : '').trim();
      const roleVal = (roleInput ? roleInput.value : '').trim();
      const quoteVal = (quoteInput ? quoteInput.value : '').trim();
      let avatarVal = (avatarInput ? avatarInput.value : '').trim();
      const ratingVal = parseInt(ratingInput ? ratingInput.value : '5', 10) || 5;

      if (!nameVal || !quoteVal) return;

      if (quoteVal.length < 8) {
        const shortMsg = currentLang === 'ar'
          ? "يرجى كتابة نص تقييم يحتوي على تفاصيل أكثر (8 أحرف على الأقل)."
          : "Please write a more detailed testimonial (at least 8 characters).";
        showToast(shortMsg);
        return;
      }

      if (!avatarVal) {
        avatarVal = `assets/img/avatar-${Math.floor(Math.random() * 4) + 1}.svg`;
      }

      const submitBtn = document.getElementById('review-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> ${currentLang === 'ar' ? 'جارٍ النشر...' : 'Publishing...'}`;
      }

      const newTestimonial = {
        nameAr: nameVal,
        nameEn: nameVal,
        roleAr: roleVal,
        roleEn: roleVal,
        quoteAr: quoteVal,
        quoteEn: quoteVal,
        rating: ratingVal,
        avatar: avatarVal
      };

      // Try server API if on local studio environment
      try {
        const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
        if (isLocalHost) {
          const endpoint = (window.location.port === '4321') ? '/api/add-testimonial' : 'http://localhost:4321/api/add-testimonial';
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 3500);

          await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTestimonial),
            signal: controller.signal
          });
          clearTimeout(timeoutId);
        }
      } catch (err) {
        // Continue gracefully
      }

      // Update in-memory site data and re-render Swiper
      if (!window.SITE_DATA) window.SITE_DATA = {};
      if (!Array.isArray(window.SITE_DATA.testimonials)) {
        window.SITE_DATA.testimonials = [];
      }
      window.SITE_DATA.testimonials.push(newTestimonial);

      // Persist in localStorage for visitor session
      try {
        const localCached = JSON.parse(localStorage.getItem('cached_testimonials') || '[]');
        localCached.push(newTestimonial);
        localStorage.setItem('cached_testimonials', JSON.stringify(localCached));
      } catch (_) {}

      // Re-apply site data and slide to the newly submitted review
      applySiteData();
      if (testimonialsSwiperInstance) {
        try {
          testimonialsSwiperInstance.update();
          const targetIndex = window.SITE_DATA.testimonials.length - 1;
          testimonialsSwiperInstance.slideTo(targetIndex, 800);
        } catch (_) {}
      }

      // Restore submit button & form
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="ri-send-plane-fill"></i> <span data-i18n="modal_review_submit">${currentLang === 'ar' ? 'إرسال التقييم ونشره الآن' : 'Submit Review Now'}</span>`;
      }

      form.reset();
      if (ratingInput) ratingInput.value = '5';
      if (starsContainer) {
        const stars = starsContainer.querySelectorAll('i[data-rating]');
        stars.forEach(s => s.classList.add('active-star'));
        if (ratingText) {
          ratingText.textContent = currentLang === 'ar' ? '5 نجوم (ممتاز جداً)' : '5 Stars (Exceptional)';
        }
      }

      closeModal();

      const successNotice = currentLang === 'ar'
        ? "شكراً لك! تمت إضافة ونشر تقييمك بنجاح، ويمكن للجميع مشاهدته الآن."
        : "Thank you! Your review has been published successfully and is now live.";
      showToast(successNotice);
    });
  }
}

/*=============== 8. CUSTOM GLOW CURSOR ===============*/
function initCustomCursor() {
  const cursor = document.querySelector('.cursor-glow') || document.querySelector('.cursor-dot');
  if (!cursor) return;

  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 768);
  if (isTouchDevice) {
    cursor.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let hasMoved = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!hasMoved) {
      cursorX = mouseX;
      cursorY = mouseY;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      cursor.style.opacity = '1';
      hasMoved = true;
    }
  }, { passive: true });

  window.addEventListener('mouseenter', () => {
    if (hasMoved) cursor.style.opacity = '1';
  });

  window.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  window.addEventListener('mousedown', () => {
    cursor.classList.add('cursor-clicking');
  });

  window.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor-clicking');
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.16;
    cursorY += (mouseY - cursorY) * 0.16;
    cursor.style.left = `${cursorX.toFixed(2)}px`;
    cursor.style.top = `${cursorY.toFixed(2)}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states on interactive elements using event delegation
  const interactiveSelectors = 'a, button, .project__card, .projects__card, .slider-handle, .showreel__wrapper, .filter-btn, input, textarea, select, label[for], [role="button"]';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.add('cursor-hover');
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.remove('cursor-hover');
    }
  }, { passive: true });
}

/*=============== 9. SCROLL NAVIGATION & ACTIVE LINK ===============*/
function initScrollNav() {
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Header background change
        if (header) {
          if (scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }

        // Active Nav Indicator
        sections.forEach((current) => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 140;
          const sectionId = current.getAttribute('id');
          const navLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

          if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              navLink.classList.add('active-link');
            } else {
              navLink.classList.remove('active-link');
            }
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/*=============== 10. MOBILE MENU TOGGLE ===============*/
function initMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('show-menu');
      if (isOpen) {
        navToggle.classList.remove('ri-menu-4-line');
        navToggle.classList.add('ri-close-line');
      } else {
        navToggle.classList.remove('ri-close-line');
        navToggle.classList.add('ri-menu-4-line');
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('ri-close-line');
        navToggle.classList.add('ri-menu-4-line');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('show-menu') && !navMenu.contains(e.target) && e.target !== navToggle) {
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('ri-close-line');
        navToggle.classList.add('ri-menu-4-line');
      }
    });
  }
}

/*=============== 11. CINEMATIC SCROLL FADE & REVEAL ENGINE ===============*/
function initScrollFadeEngine() {
  // 1. If ScrollReveal library is available, setup cinematic slow spring reveals
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '45px',
      duration: 1600,
      delay: 180,
      easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
      reset: false,
      mobile: true
    });

    // Reveal Section Badges & Titles
    sr.reveal('.section__badge', { origin: 'top', delay: 120, distance: '30px', duration: 1400 });
    sr.reveal('.section__title', { delay: 240, duration: 1600, distance: '45px' });
    sr.reveal('.section__subtitle', { delay: 380, duration: 1600 });

    // Reveal Hero elements & 3D Badges
    sr.reveal('.hero__greeting-wrap', { delay: 180, origin: 'top', duration: 1400 });
    sr.reveal('.hero__title', { delay: 300, duration: 1650, distance: '50px' });
    sr.reveal('.profession-badge-wrap', { delay: 450, duration: 1500 });
    sr.reveal('.hero__description', { delay: 550, duration: 1550 });
    sr.reveal('.hero__btns .btn', { delay: 680, interval: 200, origin: 'bottom', duration: 1450 });
    sr.reveal('.hero__socials .social-link', { delay: 780, interval: 110, scale: 0.85, duration: 1300 });
    sr.reveal('.hero__frame', { delay: 450, scale: 0.94, duration: 1700 });
    sr.reveal('.floating-stat', { delay: 850, interval: 300, scale: 0.88, duration: 1500 });

    // Reveal Metrics strip
    sr.reveal('.metric__item', { delay: 200, interval: 160, origin: 'bottom', duration: 1500, distance: '40px' });

    // Reveal Showreel & Compare Box
    sr.reveal('.showreel__wrapper', { delay: 220, scale: 0.95, duration: 1600 });
    sr.reveal('.compare-box', { delay: 220, scale: 0.95, duration: 1600 });

    // Reveal Projects Section
    sr.reveal('.work__tabs', { delay: 180, origin: 'top', duration: 1400 });
    sr.reveal('.projects__swiper', { delay: 280, scale: 0.96, duration: 1650 });

    // Reveal Services Cards (Cascade Stagger)
    sr.reveal('.service__card', { delay: 200, interval: 180, origin: 'bottom', duration: 1600, distance: '40px' });

    // Reveal Workflow Steps (Cascade Stagger)
    sr.reveal('.workflow__step', { delay: 180, interval: 160, origin: 'bottom', duration: 1550, distance: '35px' });

    // Reveal Testimonials & Contact
    sr.reveal('.testimonials__swiper', { delay: 220, scale: 0.96, duration: 1600 });
    sr.reveal('.btn-review-cta', { delay: 350, origin: 'bottom', duration: 1400 });
    sr.reveal('.contact__card-inner', { delay: 220, origin: 'right', duration: 1600 });
    sr.reveal('.contact__form', { delay: 320, origin: 'left', duration: 1600 });
  }

  // 2. High-Performance IntersectionObserver Fallback / Supplement
  const revealElements = document.querySelectorAll(
    '.showreel__wrapper, .compare-box, .contact__card-inner, .contact__form, .service__card, .workflow__step'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ui-fade-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => {
      el.classList.add('ui-fade-init');
      observer.observe(el);
    });
  }
}

/*=============== 12. ADVANCED PRIVACY & SOURCE CODE SHIELD ===============*/
(function initCodeShield() {
  // 1. Disable Right-Click Context Menu on desktop (keep mobile touch natural)
  document.addEventListener('contextmenu', (e) => {
    if (e.pointerType === 'touch' || ('ontouchstart' in window && window.innerWidth <= 1024)) {
      return; // Do not block mobile touch
    }
    e.preventDefault();
    return false;
  }, { capture: true });

  // 2. Block Inspect & View Source Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // Block F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Block Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect)
    if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes((e.key || '').toUpperCase())) {
      e.preventDefault();
      return false;
    }
    // Block Ctrl+U (View Source)
    if (e.ctrlKey && (e.key || '').toUpperCase() === 'U') {
      e.preventDefault();
      return false;
    }
    // Block Ctrl+S (Save Webpage)
    if (e.ctrlKey && (e.key || '').toUpperCase() === 'S') {
      e.preventDefault();
      return false;
    }
  }, { capture: true });

  // 3. Silence debug console logs in production
  if (!['localhost', '127.0.0.1'].includes(window.location.hostname)) {
    try {
      console.log = function() {};
      console.info = function() {};
      console.debug = function() {};
      console.warn = function() {};
    } catch (_) {}
  }
})();

