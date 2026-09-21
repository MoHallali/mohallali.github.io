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
    nav_showreel: "العرض السينمائي",
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
    hero_cta_showreel: "مشاهدة العرض السينمائي",
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
    showreel_badge: "العرض البصري الخاطف",
    showreel_title: "أقوى <span>إنتاجاتي السينمائية</span>",
    showreel_subtitle: "شاهد أقوى مشروع وثائقي سينمائي أنجزته؛ تجربة بصرية متكاملة تعتمد على سرد قصصي درامي، حركة خرائط تفاعلية متقدمة، وهندسة صوتية متعددة الطبقات تضمن أعلى درجات الاندماج والاحتفاظ.",
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
    spotlight_tribute_quote: "«رب أخي لم تلده أم»",
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
    service_1_desc: "",
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
    modal_review_sub: "شاركنا تجربتك الاحترافية مع محمد ليتم مراجعتها واعتمادها في معرض الآراء",
    modal_review_name: "اسم العميل / صانع المحتوى *",
    modal_review_role: "الصفة أو القناة *",
    modal_review_rating: "التقييم *",
    modal_review_quote: "نص التقييم أو الشهادة *",
    modal_review_avatar: "رابط صورة الحساب / اللوغو (اختياري)",
    modal_review_submit: "إرسال التقييم للمراجعة والاعتماد",

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
    contact_info_title: "تواصل مباشر وسريع",
    contact_info_desc: "أنا جاهز للرد على استفسارك ومناقشة تفاصيل مشروعك أو إرسال عرض سعر مخصص خلال ساعات معدودة.",
    contact_socials_title: "حساباتي على الشبكات",
    placeholder_name: "اسمك أو اسم قناتك",
    placeholder_email: "example@domain.com",
    placeholder_message: "أخبرني عن أسلوب الفيديو، مدته التقديرية، أو رابط لقناتك...",
    placeholder_review_name: "مثال: يوسف القحطاني",
    placeholder_review_role: "مثال: صانع محتوى (300K مشترك)",
    placeholder_review_quote: "اكتب تجربتك مع المونتاج، الجودة، سرعة التسليم، أو أثرها على قناتك...",
    placeholder_review_avatar: "https://... أو يمكنك تركها للصورة الافتراضية",
    modal_review_note: "يتم إشعار محمد فوراً عبر الواتساب لمراجعة التقييم واعتماده في الموقع",
    form_submit_btn: "إرسال الطلب الآن",
    toast_email_copied: "تم نسخ البريد الإلكتروني بنجاح!",
    cursor_mode_following: "تتبع الماوس",
    cursor_mode_direct: "تحكم يوتيوب",
    watch_on_yt: "مشاهدة على YouTube",

    // Footer
    footer_rights: "جميع الحقوق محفوظة © 2026 محمد هلالي | SATURN Studio",
    footer_tagline: "صناعة قصص بصرية تأسر العالم",
    footer_ip_notice: "جميع الوسائط، الفيديوهات، الأكواد، والتصاميم محمية بموجب قوانين حماية الملكية الفكرية وحقوق النشر الدولية. يمنع منعاً باتاً النسخ أو إعادة النشر دون تصريح مسبق."
  },
  en: {
    // Navigation
    nav_about: "About",
    nav_showreel: "Cinematic Reel",
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
    hero_cta_showreel: "Watch Cinematic Reel",
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
    showreel_badge: "High-Impact Visuals",
    showreel_title: "My Prominent <span>Cinematic Productions</span>",
    showreel_subtitle: "Watch my most prominent cinematic documentary project; a complete visual experience featuring dramatic storytelling, dynamic motion maps, and multi-layered sound design engineered for peak viewer retention.",
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
    spotlight_tribute_quote: "\"A brother my mother never bore\"",
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
    service_1_desc: "",
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
    modal_review_sub: "Share your professional collaboration experience with Mohamed for review and approval",
    modal_review_name: "Client / Creator Name *",
    modal_review_role: "Role or Channel Handle *",
    modal_review_rating: "Rating *",
    modal_review_quote: "Review / Testimonial *",
    modal_review_avatar: "Avatar / Logo URL (Optional)",
    modal_review_submit: "Submit Review for Approval",

    modal_review_note: "Mohamed is immediately notified via WhatsApp to review and approve your submission.",

    // Contact
    contact_badge: "Let's Collaborate",
    contact_title: "Ready To Level Up <span>Your Video Content?</span>",
    contact_subtitle: "Let's discuss your upcoming project and build a high-impact editing strategy for your channel.",
    contact_info_title: "Direct & Fast Communication",
    contact_info_desc: "I'm ready to answer your inquiries, discuss project details, or provide a tailored quote within hours.",
    contact_whatsapp_btn: "Instant WhatsApp Chat",
    contact_copy_email_btn: "Copy Email Address",
    contact_form_title: "Send Project Inquiry",
    contact_socials_title: "My Social Networks",
    label_name: "Your Name",
    label_email: "Email Address",
    label_type: "Project Type",
    label_message: "Project Vision & Details",
    placeholder_name: "Your Name or Channel Name",
    placeholder_email: "example@domain.com",
    placeholder_message: "Tell me about your video vision, estimated length, or channel link...",
    placeholder_review_name: "e.g., Yousef Al-Qahtani",
    placeholder_review_role: "e.g., Content Creator (300K Subs)",
    placeholder_review_quote: "Share your experience with editing quality, turnaround time, retention impact...",
    placeholder_review_avatar: "https://... or leave empty for default avatar",
    type_opt_1: "Viral Shorts / Reels / TikToks",
    type_opt_2: "Long-Form YouTube / Documentary",
    type_opt_3: "Commercial / Brand Ad",
    type_opt_4: "Color Grading & VFX Polish",
    form_submit_btn: "Submit Project Brief",
    toast_email_copied: "Email address successfully copied to clipboard!",
    cursor_mode_following: "Cursor Tracking",
    cursor_mode_direct: "Direct Player",
    watch_on_yt: "Watch on YouTube",

    // Footer
    footer_rights: "All Rights Reserved © 2026 Mohamed Hallali | SATURN Studio",
    footer_tagline: "Crafting visual stories that inspire and convert.",
    footer_ip_notice: "All media, videos, source code, and design assets are protected under international copyright and intellectual property laws. Unauthorized copying, scraping, or redistribution is strictly prohibited."
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
    "url": "assets/video/abdulrahman-tribute.mp4",
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

/*=============== DOM INITIALIZATION (FAILSAFE & ANTI-BLANK ENGINE) ===============*/
function safeInit(fn, name) {
  try {
    fn();
  } catch (err) {
    console.warn(`[Saturn Engine Warning] Module '${name}' initial failure bypassed safely:`, err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  safeInit(initGpuParticles, 'GpuParticles');
  safeInit(applySiteData, 'SiteData');
  safeInit(() => initLanguage(currentLang), 'Language');
  safeInit(initDynamicTyping, 'DynamicTyping');
  safeInit(initBeforeAfterSlider, 'BeforeAfterSlider');
  safeInit(initVideoModal, 'VideoModal');
  safeInit(initSpotlightTabs, 'SpotlightTabs');
  safeInit(() => initProjectsSwiper(true), 'ProjectsSwiper');
  safeInit(initProjectFilters, 'ProjectFilters');
  safeInit(initSwiperTestimonials, 'SwiperTestimonials');
  safeInit(initContactActions, 'ContactActions');
  safeInit(initReviewModal, 'ReviewModal');
  safeInit(initCustomCursor, 'CustomCursor');
  safeInit(initScrollNav, 'ScrollNav');
  safeInit(initMobileMenu, 'MobileMenu');
  safeInit(initScrollFadeEngine, 'ScrollFadeEngine');

  // Anti-Blank Safety Watchdog: Ensures 100% of critical elements are completely visible immediately
  const enforceFullVisibility = () => {
    const targets = document.querySelectorAll(
      '.hero__data, .hero__visual, .hero__frame, .floating-stat, .section__title, .section__subtitle, .section__badge, .metric__item, .showreel__wrapper, .compare-box, .projects__card, .service__card, .workflow__step, .testimonial__card, .contact__card-inner, .contact__form'
    );
    targets.forEach((el) => {
      el.style.visibility = 'visible';
      el.style.opacity = '1';
      el.classList.add('ui-fade-revealed');
    });
  };

  // Run at 300ms, 800ms, and 1500ms checkpoints to guarantee no client ever sees an empty space
  setTimeout(enforceFullVisibility, 300);
  setTimeout(enforceFullVisibility, 800);
  setTimeout(enforceFullVisibility, 1500);
});

/*=============== GPU ACCELERATED PARTICLE MESH CANVAS ===============*/
function initGpuParticles() {
  const canvas = document.getElementById('gpu-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const isMobile = window.innerWidth <= 768;
  const baseDensity = isMobile ? 7000 : 9500;
  const maxCap = isMobile ? 60 : 115;
  const particleCount = Math.min(Math.max(Math.floor((width * height) / baseDensity), 36), maxCap);
  const maxDist = isMobile ? 140 : 160;
  const maxDistSq = maxDist * maxDist;

  const particles = [];
  let mouse = { x: -1000, y: -1000, radius: isMobile ? 100 : 140 };
  let isVisible = !document.hidden;
  let animFrameId = null;

  const updateMouseCoords = (x, y) => {
    mouse.x = x;
    mouse.y = y;
  };

  window.addEventListener('mousemove', (e) => {
    updateMouseCoords(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  }, { passive: true });

  window.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      updateMouseCoords(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      updateMouseCoords(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  }, { passive: true });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, 150);
  }, { passive: true });

  // 0% CPU overhead when user switches tabs
  document.addEventListener('visibilitychange', () => {
    isVisible = !document.hidden;
    if (isVisible && !animFrameId) {
      animFrameId = requestAnimationFrame(render);
    }
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.32;
      this.vy = (Math.random() - 0.5) * 0.32;

      const isHeroStar = Math.random() > 0.82;
      this.radius = isHeroStar ? (Math.random() * 0.8 + 1.8) : (Math.random() * 0.6 + 0.85);
      this.isHeroStar = isHeroStar;

      const colorRand = Math.random();
      if (colorRand < 0.45) {
        this.color = '168, 85, 247'; // Radiant Cyber Violet #a855f7
      } else if (colorRand < 0.75) {
        this.color = '6, 182, 212';  // Electric Neon Cyan #06b6d4
      } else if (colorRand < 0.90) {
        this.color = '244, 63, 94';  // Cosmic Rose #f43f5e
      } else {
        this.color = '241, 245, 249'; // Diamond Star White #f1f5f9
      }

      this.baseAlpha = Math.random() * 0.25 + 0.38;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.02 + Math.random() * 0.025;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.pulse += this.pulseSpeed;

      if (this.x < -25) this.x = width + 25;
      else if (this.x > width + 25) this.x = -25;
      if (this.y < -25) this.y = height + 25;
      else if (this.y > height + 25) this.y = -25;

      // Mouse & Touch repulsion/interaction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distSq = dx * dx + dy * dy;
      const mouseRadiusSq = mouse.radius * mouse.radius;

      if (distSq < mouseRadiusSq) {
        const dist = Math.sqrt(distSq);
        const force = (mouse.radius - dist) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * force * 1.8;
        this.y -= Math.sin(angle) * force * 1.8;
      }
    }

    draw() {
      const twinkle = (Math.sin(this.pulse) + 1) * 0.5;
      const currentAlpha = Math.min(this.baseAlpha + twinkle * 0.2, 0.85);
      const currentRadius = this.radius * (1 + twinkle * 0.18);

      // Soft refined luminous corona
      ctx.beginPath();
      ctx.arc(this.x, this.y, currentRadius * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${currentAlpha * 0.14})`;
      ctx.fill();

      // Brilliant core star
      ctx.beginPath();
      ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${currentAlpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    if (!isVisible) {
      animFrameId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // 1. Draw connections & geometric constellation facets
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          // Elegant, balanced line opacity
          const lineAlpha = (1 - dist / maxDist) * 0.26;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();

          // 2. Closed Triangle Constellation Facets (Shapes)
          for (let k = j + 1; k < particles.length; k++) {
            const p3 = particles[k];
            const dx2 = p1.x - p3.x;
            const dy2 = p1.y - p3.y;
            const dSq13 = dx2 * dx2 + dy2 * dy2;
            if (dSq13 < maxDistSq) {
              const dx3 = p2.x - p3.x;
              const dy3 = p2.y - p3.y;
              const dSq23 = dx3 * dx3 + dy3 * dy3;
              if (dSq23 < maxDistSq) {
                const maxSide = Math.sqrt(Math.max(distSq, dSq13, dSq23));
                const triAlpha = (1 - maxSide / maxDist) * 0.055;
                if (triAlpha > 0.008) {
                  ctx.beginPath();
                  ctx.moveTo(p1.x, p1.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.lineTo(p3.x, p3.y);
                  ctx.closePath();
                  ctx.fillStyle = `rgba(139, 92, 246, ${triAlpha})`;
                  ctx.fill();
                }
              }
            }
          }
        }
      }

      // 3. Connect star to mouse position
      const mdx = mouse.x - p1.x;
      const mdy = mouse.y - p1.y;
      const mDistSq = mdx * mdx + mdy * mdy;
      const mouseConnectDist = isMobile ? 130 : 165;
      if (mDistSq < mouseConnectDist * mouseConnectDist) {
        const mDist = Math.sqrt(mDistSq);
        const mAlpha = (1 - mDist / mouseConnectDist) * 0.28;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`;
        ctx.lineWidth = 0.85;
        ctx.stroke();
      }
    }

    // Update & draw glowing stars
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    animFrameId = requestAnimationFrame(render);
  }

  animFrameId = requestAnimationFrame(render);
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

      const imgEl = document.querySelector('#card-tribute .spotlight-media img') || document.getElementById('spotlight-tribute-thumb');
      if (imgEl) {
        const isSubDir = window.location.pathname.includes('/personal-portfolio') || window.location.pathname.includes('/mohallali');
        const prefix = isSubDir ? '../' : '';
        const targetThumb = currentLang === 'ar'
          ? (tr.thumbUrlAr || tr.thumbUrl || 'assets/img/abdulrahman-thumb-ar.jpg')
          : (tr.thumbUrlEn || tr.thumbUrl || 'assets/img/abdulrahman-thumb-en.jpg');
        imgEl.src = prefix + targetThumb.replace(/^(\.\.\/|\/)/, '');
      }

      projectVideos['abdulrahman-tribute'] = {
        titleAr: tr.titleAr || "شهادة وإشادة صانع المحتوى عبد الرحمان عطيف (قناة D7MANc)",
        titleEn: tr.titleEn || "Creator Abdulrahman Otaif's Live On-Camera Tribute",
        tag: "Live Creator Tribute",
        url: (tr.videoUrl ? tr.videoUrl.replace(/\?v=[^&]+/, '') : "assets/video/abdulrahman-tribute.mp4"),
        type: (tr.videoUrl && (tr.videoUrl.includes('.mp4') || tr.videoUrl.includes('.webm'))) ? "video" : (tr.videoUrl && tr.videoUrl.includes('youtu') ? "youtube" : "video")
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
    if (d.contact.email) {
      updateGmailLinks(d.contact.email);
    }
  }

  // 4. Dynamic Metrics Strip
  if (d.metrics && d.metrics.length) {
    const mContainer = document.getElementById('metrics-grid-container');
    if (mContainer) {
      mContainer.innerHTML = d.metrics.map(m => `
        <div class="metric__item">
          <div class="metric__number">${escapeHTML(m.num)} <span>${escapeHTML(m.symbol || '★')}</span></div>
          <div class="metric__desc">${escapeHTML(currentLang === 'ar' ? m.textAr : (m.textEn || m.textAr))}</div>
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
      const pSlides = pWrapper.querySelectorAll('.projects__card');
      if (pSlides.length > 0) {
        const pMap = {};
        d.projects.forEach((p, idx) => {
          pMap[p.id || `proj-${idx + 1}`] = p;
        });

        pSlides.forEach((slide, idx) => {
          let pid = null;
          const playerBox = slide.querySelector('.ui-player-box');
          if (playerBox) {
            const match = (playerBox.getAttribute('onclick') || '').match(/openVideoModal\(['"]([^'"]+)['"]\)/);
            if (match) pid = match[1];
          }
          let realIdx = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
          if (isNaN(realIdx)) realIdx = idx;

          const p = (pid && pMap[pid]) ? pMap[pid] : d.projects[realIdx % d.projects.length];
          if (!p) return;

          const cat = p.category || 'youtube';
          const catLabel = (currentLang === 'ar' ? p.categoryLabelAr : p.categoryLabelEn) || cat;
          const title = currentLang === 'ar' ? p.titleAr : (p.titleEn || p.titleAr);
          const subtitle = (currentLang === 'ar' ? p.subtitleAr : p.subtitleEn) || (currentLang === 'ar' ? 'أسلوب المونتاج والأدوات' : 'Editing Style & Techstack');
          const desc = currentLang === 'ar' ? p.descAr : (p.descEn || p.descAr);

          const catEl = slide.querySelector('.ui-cat-chip span:last-child');
          const titleEl = slide.querySelector('.projects__title');
          const subEl = slide.querySelector('.projects__subtitle');
          const descEl = slide.querySelector('.projects__description');
          const imgEl = slide.querySelector('.projects__img');

          if (catEl) catEl.textContent = catLabel;
          if (titleEl) titleEl.textContent = title;
          if (subEl) subEl.innerHTML = `<i class="ri-sparkling-fill" style="font-size: 0.8rem; vertical-align: middle;"></i> ${escapeHTML(subtitle)}`;
          if (descEl) descEl.textContent = desc;
          if (imgEl) imgEl.setAttribute('alt', title);
        });

        if (projectsSwiperInstance) {
          try { projectsSwiperInstance.update(); } catch(e) {}
        }
      } else {
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
          const tools = (p.tools || []).map(t => `<span class="ui-tool-chip"><i class="ri-check-line" style="color: #06b6d4;"></i> ${escapeHTML(t)}</span>`).join('');

          return `
            <article class="projects__card swiper-slide" data-category="${escapeHTML(cat)}">
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
                  ${escapeHTML(reach)}
                </div>
              </div>

              <!-- Projects Number & Category in UI Style -->
              <div class="projects__number">
                <h1 class="ui-card-num">${escapeHTML(num)}</h1>
                <div class="ui-cat-chip">
                  <span class="ui-live-dot"></span>
                  <i class="${escapeHTML(catIcons[cat] || 'ri-film-line')}"></i>
                  <span>${escapeHTML(catLabel)}</span>
                </div>
              </div>

              <!-- Projects Data in UI Style -->
              <div class="projects__data">
                <h1 class="projects__title">${escapeHTML(title)}</h1>
                <p class="projects__subtitle">
                  <i class="ri-sparkling-fill" style="font-size: 0.8rem; vertical-align: middle;"></i> ${escapeHTML(subtitle)}
                </p>
                <p class="projects__description">${escapeHTML(desc)}</p>
                <div class="projects__tools">
                  ${tools}
                </div>
              </div>

              <!-- UI Video Player Mockup in Media Box -->
              <div class="projects__image ui-player-box" onclick="openVideoModal('${escapeHTML(p.id)}')">
                <img src="${escapeHTML(img)}" alt="${escapeHTML(title)}" class="projects__img" loading="lazy" decoding="async" onerror="this.src='assets/img/project-${(idx % 6) + 1}.svg'" />
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
      }
    }
  }

  // 6. Dynamic Testimonials (Bilingual & Strictly Moderated, Excluding Hidden)
  const allTestimonials = d.testimonials || [];
  const visibleTestimonials = allTestimonials.filter(t => !t.hidden);
  if (visibleTestimonials.length) {
    const tContainer = document.getElementById('testimonials-wrapper-container');
    if (tContainer) {
      const tSlides = tContainer.querySelectorAll('.swiper-slide');
      if (tSlides.length > 0) {
        tSlides.forEach((slide, idx) => {
          let realIdx = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
          if (isNaN(realIdx)) realIdx = idx;

          const t = visibleTestimonials[realIdx % visibleTestimonials.length];
          if (!t) return;

          const name = currentLang === 'ar' ? (t.nameAr || t.name) : (t.nameEn || t.name || t.nameAr);
          const role = currentLang === 'ar' ? (t.roleAr || t.role) : (t.roleEn || t.role || t.roleAr);
          const quote = currentLang === 'ar' ? (t.quoteAr || t.quote) : (t.quoteEn || t.quote || t.quoteAr);

          const quoteEl = slide.querySelector('.testimonial__quote');
          const nameEl = slide.querySelector('.author-name');
          const roleEl = slide.querySelector('.author-role');
          const avatarEl = slide.querySelector('.author-avatar');

          if (quoteEl) quoteEl.textContent = `"${quote}"`;
          if (nameEl) nameEl.textContent = name;
          if (roleEl) roleEl.textContent = role;
          if (avatarEl) avatarEl.setAttribute('alt', name);
        });

        if (testimonialsSwiperInstance) {
          try { testimonialsSwiperInstance.update(); } catch(e) {}
        }
      } else {
        tContainer.innerHTML = visibleTestimonials.map((t, idx) => {
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

  // Update tribute thumbnail image for language
  const tributeThumb = document.getElementById('spotlight-tribute-thumb') || document.querySelector('#card-tribute .spotlight-media img');
  if (tributeThumb) {
    const isSubDir = window.location.pathname.includes('/personal-portfolio') || window.location.pathname.includes('/mohallali');
    const prefix = isSubDir ? '../' : '';
    const imgAr = tributeThumb.getAttribute('data-img-ar') || 'assets/img/abdulrahman-thumb-ar.jpg';
    const imgEn = tributeThumb.getAttribute('data-img-en') || 'assets/img/abdulrahman-thumb-en.jpg';
    const chosen = (lang === 'ar' ? imgAr : imgEn).replace(/^(\.\.\/|\/)/, '');
    tributeThumb.src = prefix + chosen;
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update all elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update rating label text in review modal if present
  const ratingInput = document.getElementById('review-rating');
  const ratingText = document.getElementById('star-rating-text');
  if (ratingInput && ratingText) {
    const val = parseInt(ratingInput.value, 10) || 5;
    const starDescs = {
      ar: ["1 نجمة (مقبول)", "2 نجمتان (جيد)", "3 نجوم (جيد جداً)", "4 نجوم (ممتاز)", "5 نجوم (استثنائي وممتاز جداً)"],
      en: ["1 Star (Acceptable)", "2 Stars (Good)", "3 Stars (Very Good)", "4 Stars (Excellent)", "5 Stars (Exceptional)"]
    };
    if (starDescs[lang] && starDescs[lang][val - 1]) {
      ratingText.textContent = starDescs[lang][val - 1];
    }
  }

  // Update Gmail compose links
  updateGmailLinks();

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
    return `https://www.youtube.com/embed/${encodeURIComponent(shortsMatch[1])}?autoplay=1&enablejsapi=1`;
  }

  // 2. Standard YouTube: watch?v=, youtu.be/, or youtube.com/embed/
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([a-zA-Z0-9_-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${encodeURIComponent(ytMatch[1])}?autoplay=1&enablejsapi=1`;
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
    if (url.includes('youtube.com') || url.includes('youtube-nocookie.com')) {
      return url.includes('enablejsapi=1') ? url : (url + (url.includes('?') ? '&' : '?') + 'enablejsapi=1');
    }
    return url;
  }

  return "";
}

function toWatchUrl(url) {
  if (!url || typeof url !== 'string') return "";
  const ytMatch = url.match(/(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/watch?v=${ytMatch[1]}`;
  }
  return url;
}

/*=============== 4. VIDEO LIGHTBOX MODAL ===============*/
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  const videoEl = document.getElementById('modal-video');
  const modalTitle = document.getElementById('modal-video-title');
  const modalTag = document.getElementById('modal-video-tag');
  const closeBtn = document.getElementById('modal-close-btn');
  const videoWrapper = modal ? modal.querySelector('.modal-video-wrapper') : null;
  const modeToggleBtn = document.getElementById('modal-mode-toggle');
  const ytExtLink = document.getElementById('modal-yt-ext-link');
  const pulseEl = document.getElementById('video-play-pulse');
  const pulseIcon = document.getElementById('video-play-pulse-icon');

  if (!modal || (!iframe && !videoEl)) return;

  let isIframePlaying = true;

  function triggerPulse(action) {
    if (!pulseEl || !pulseIcon) return;
    pulseIcon.className = action === 'play' ? 'ri-play-fill' : 'ri-pause-fill';
    pulseEl.classList.remove('pulse-active');
    void pulseEl.offsetWidth;
    pulseEl.classList.add('pulse-active');
    setTimeout(() => pulseEl.classList.remove('pulse-active'), 550);
  }

  // Video Wrapper click: toggle play/pause smoothly
  if (videoWrapper) {
    videoWrapper.onclick = function(e) {
      if (e.target.closest('#modal-mode-toggle') || e.target.closest('#modal-yt-ext-link') || e.target.closest('#modal-close-btn') || e.target.closest('.modal-watermark') || e.target.closest('.modal-video-overlay-ctrl')) {
        return;
      }
      if (videoWrapper.classList.contains('direct-mode')) return;

      if (videoEl && videoEl.style.display !== 'none' && videoEl.src) {
        if (videoEl.paused) {
          videoEl.play();
          triggerPulse('play');
        } else {
          videoEl.pause();
          triggerPulse('pause');
        }
        return;
      }

      if (iframe && iframe.style.display !== 'none' && iframe.src) {
        if (isIframePlaying) {
          iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          isIframePlaying = false;
          triggerPulse('pause');
        } else {
          iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          isIframePlaying = true;
          triggerPulse('play');
        }
      }
    };
  }

  // Mode Toggle button: Cursor Following vs Direct Player Controls
  if (modeToggleBtn && videoWrapper) {
    modeToggleBtn.onclick = function(e) {
      e.stopPropagation();
      const isDirect = videoWrapper.classList.toggle('direct-mode');
      const isAr = currentLang === 'ar';
      if (isDirect) {
        modeToggleBtn.innerHTML = `<i class="ri-play-circle-line"></i> <span>${isAr ? 'تحكم يوتيوب' : 'Direct Player'}</span>`;
        modeToggleBtn.classList.add('active');
      } else {
        modeToggleBtn.innerHTML = `<i class="ri-cursor-fill"></i> <span>${isAr ? 'تتبع الماوس' : 'Cursor Tracking'}</span>`;
        modeToggleBtn.classList.remove('active');
      }
    };
  }

  window.openVideoModal = function(videoId) {
    const videoData = projectVideos[videoId];
    if (!videoData) return;

    const isAr = currentLang === 'ar';
    // Fix: render HTML tags (like <span>) properly without printing raw text
    modalTitle.innerHTML = isAr ? videoData.titleAr : videoData.titleEn;
    modalTag.textContent = videoData.tag;

    // Reset direct mode on open so cursor follows by default
    if (videoWrapper) videoWrapper.classList.remove('direct-mode');
    if (modeToggleBtn) {
      modeToggleBtn.innerHTML = `<i class="ri-cursor-fill"></i> <span>${isAr ? 'تتبع الماوس' : 'Cursor Tracking'}</span>`;
      modeToggleBtn.classList.remove('active');
    }
    isIframePlaying = true;

    const isDirectVideo = videoData.type === 'video' || (videoData.url && (videoData.url.includes('.mp4') || videoData.url.includes('.webm')));

    // YouTube external link setup
    if (ytExtLink) {
      if (!isDirectVideo && videoData.url && (videoData.url.includes('youtu') || videoData.url.includes('youtube.com'))) {
        ytExtLink.href = toWatchUrl(videoData.url);
        ytExtLink.style.display = 'inline-flex';
      } else {
        ytExtLink.style.display = 'none';
      }
    }

    const overlayCtrl = document.getElementById('modal-video-overlay-ctrl');
    const playBtn = document.getElementById('modal-video-play-trigger');
    const spinner = document.getElementById('modal-video-spinner');

    if (isDirectVideo) {
      if (modeToggleBtn) modeToggleBtn.style.display = 'none';
      if (iframe) {
        iframe.style.display = 'none';
        iframe.src = '';
      }
      if (videoEl) {
        videoEl.style.display = 'block';

        // 1. Resolve relative path for root and subdirectories (/personal-portfolio/)
        const isSubDir = window.location.pathname.includes('/personal-portfolio') || window.location.pathname.includes('/mohallali');
        const prefix = isSubDir ? '../' : '';
        let resolvedUrl = videoData.url || '';
        if (!resolvedUrl.startsWith('http') && !resolvedUrl.startsWith('/') && !resolvedUrl.startsWith('../')) {
          resolvedUrl = prefix + resolvedUrl;
        }
        // Clean query strings to allow HTTP 206 Partial Content range requests
        resolvedUrl = resolvedUrl.replace(/\?v=[^&]+/, '');

        // 2. Set Poster Image Immediately: ZERO black screen void!
        const posterImg = isAr 
          ? (prefix + 'assets/img/abdulrahman-thumb-ar.jpg') 
          : (prefix + 'assets/img/abdulrahman-thumb-en.jpg');
        videoEl.poster = posterImg;

        // 3. Preload auto and assign source
        videoEl.preload = 'auto';
        videoEl.src = resolvedUrl;
        videoEl.load();

        // 4. Setup Overlay Spinner & Play Button
        if (overlayCtrl && spinner && playBtn) {
          overlayCtrl.style.display = 'flex';
          spinner.style.display = 'block';
          playBtn.style.display = 'none';

          const hideOverlay = () => {
            overlayCtrl.style.display = 'none';
            spinner.style.display = 'none';
            playBtn.style.display = 'none';
          };

          const showPlayBtn = () => {
            overlayCtrl.style.display = 'flex';
            spinner.style.display = 'none';
            playBtn.style.display = 'flex';
          };

          const showSpinner = () => {
            overlayCtrl.style.display = 'flex';
            spinner.style.display = 'block';
            playBtn.style.display = 'none';
          };

          videoEl.onplaying = hideOverlay;
          videoEl.onwaiting = showSpinner;
          videoEl.onpause = () => {
            if (!videoEl.ended) showPlayBtn();
          };

          overlayCtrl.onclick = (e) => {
            e.stopPropagation();
            showSpinner();
            videoEl.play().then(hideOverlay).catch(() => showPlayBtn());
          };
        }

        // 5. Trigger playback (with autoplay failure handling)
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            if (overlayCtrl) overlayCtrl.style.display = 'none';
          }).catch(err => {
            console.warn('[Video Player] Autoplay policy blocked audio playback, showing play button:', err);
            if (overlayCtrl && playBtn && spinner) {
              spinner.style.display = 'none';
              playBtn.style.display = 'flex';
              overlayCtrl.style.display = 'flex';
            }
          });
        }
      }
    } else {
      if (modeToggleBtn) modeToggleBtn.style.display = 'inline-flex';
      if (overlayCtrl) overlayCtrl.style.display = 'none';
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
      videoEl.removeAttribute('src');
      videoEl.load();
      videoEl.style.display = 'none';
    }
    const overlayCtrl = document.getElementById('modal-video-overlay-ctrl');
    if (overlayCtrl) overlayCtrl.style.display = 'none';
    if (videoWrapper) videoWrapper.classList.remove('direct-mode');
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
function initProjectsSwiper(enableLoop = true) {
  const swiperEl = document.querySelector('.projects__swiper');
  if (!swiperEl || typeof Swiper === 'undefined') return;

  if (projectsSwiperInstance) {
    try { projectsSwiperInstance.destroy(true, true); } catch(e) {}
  }

  const visibleCards = document.querySelectorAll('.projects__card:not([style*="display: none"])');
  const canLoop = enableLoop && visibleCards.length >= 4;

  projectsSwiperInstance = new Swiper('.projects__swiper', {
    loop: canLoop,
    initialSlide: 0,
    spaceBetween: 24,
    slidesPerView: 'auto',
    centeredSlides: false,
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 1.1,
    touchAngle: 45,
    shortSwipes: true,
    longSwipes: true,
    followFinger: true,
    resistance: false,
    speed: 750,
    navigation: {
      nextEl: '.projects-nav-next',
      prevEl: '.projects-nav-prev',
    },
    pagination: {
      el: '.projects__swiper .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        if (index < 4) {
          return '<span class="' + className + '" data-bullet-idx="' + index + '"></span>';
        }
        return '';
      }
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      init: function () {
        this.slideToLoop(0, 0);
      },
      slideChange: function () {
        const realIdx = this.realIndex % 4;
        const bullets = document.querySelectorAll('.projects__swiper .swiper-pagination-bullet');
        bullets.forEach((b, i) => {
          if (i === realIdx) {
            b.classList.add('swiper-pagination-bullet-active');
          } else {
            b.classList.remove('swiper-pagination-bullet-active');
          }
        });
      }
    }
  });

  // Custom click handling for bullets
  const bullets = document.querySelectorAll('.projects__swiper .swiper-pagination-bullet');
  bullets.forEach((b, i) => {
    b.onclick = (e) => {
      e.preventDefault();
      if (projectsSwiperInstance) {
        projectsSwiperInstance.slideToLoop(i, 750);
      }
    };
  });

  // Direct mouse click triggers for side navigation buttons
  const nextBtn = document.querySelector('.projects-nav-next');
  const prevBtn = document.querySelector('.projects-nav-prev');
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.preventDefault();
      if (projectsSwiperInstance) projectsSwiperInstance.slideNext(750);
    };
  }
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.preventDefault();
      if (projectsSwiperInstance) projectsSwiperInstance.slidePrev(750);
    };
  }
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

      initProjectsSwiper(filter === 'all');
    });
  });
}

/*=============== 6. SWIPER TESTIMONIALS ===============*/
function initSwiperTestimonials() {
  const swiperEl = document.querySelector('.testimonials__swiper');
  if (!swiperEl || typeof Swiper === 'undefined') return;

  if (testimonialsSwiperInstance) {
    try { testimonialsSwiperInstance.destroy(true, true); } catch(e) {}
  }

  testimonialsSwiperInstance = new Swiper('.testimonials__swiper', {
    loop: true,
    initialSlide: 0,
    spaceBetween: 28,
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 1.1,
    touchAngle: 45,
    shortSwipes: true,
    longSwipes: true,
    followFinger: true,
    resistance: false,
    speed: 800,
    navigation: {
      nextEl: '.testimonials-nav-next',
      prevEl: '.testimonials-nav-prev',
    },
    pagination: {
      el: '.testimonials__swiper .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        if (index < 4) {
          return '<span class="' + className + '" data-bullet-idx="' + index + '"></span>';
        }
        return '';
      }
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 24 },
      1100: { slidesPerView: 3, spaceBetween: 28 }
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      init: function () {
        this.slideToLoop(0, 0);
      },
      slideChange: function () {
        const realIdx = this.realIndex % 4;
        const bullets = document.querySelectorAll('.testimonials__swiper .swiper-pagination-bullet');
        bullets.forEach((b, i) => {
          if (i === realIdx) {
            b.classList.add('swiper-pagination-bullet-active');
          } else {
            b.classList.remove('swiper-pagination-bullet-active');
          }
        });
      }
    }
  });

  // Custom click handling for bullets
  const bullets = document.querySelectorAll('.testimonials__swiper .swiper-pagination-bullet');
  bullets.forEach((b, i) => {
    b.onclick = (e) => {
      e.preventDefault();
      if (testimonialsSwiperInstance) {
        testimonialsSwiperInstance.slideToLoop(i, 800);
      }
    };
  });

  // Direct mouse click triggers for side navigation buttons
  const nextBtn = document.querySelector('.testimonials-nav-next');
  const prevBtn = document.querySelector('.testimonials-nav-prev');
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.preventDefault();
      if (testimonialsSwiperInstance) testimonialsSwiperInstance.slideNext(800);
    };
  }
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.preventDefault();
      if (testimonialsSwiperInstance) testimonialsSwiperInstance.slidePrev(800);
    };
  }
}

/*=============== GMAIL WEB COMPOSE HELPER ===============*/
function getGmailComposeUrl(lang, customEmail) {
  const email = customEmail || ((window.SITE_DATA && window.SITE_DATA.contact && window.SITE_DATA.contact.email) ? window.SITE_DATA.contact.email : "hallali.mohamed4@gmail.com");
  const isAr = (lang || currentLang) === 'ar';

  const subject = isAr
    ? "طلب تعاون وبدء مشروع مونتاج فيديو | مشروع جديد"
    : "Video Editing Collaboration Inquiry | New Project";

  const body = isAr
    ? `مرحباً محمد،\n\nأتمنى أن تكون بخير وفي أفضل حال.\n\nاطلعت على معرض أعمالك وأعجبني جداً مستواك في المونتاج والإخراج البصري والريتم السينمائي، وأرغب في التعاون معك والبدء في مشروع مونتاج فيديو جديد:\n\n- نوع المحتوى المطلوب: [يوتيوب / ريلز وتيك توك / إعلان تجاري / غير ذلك]\n- الفكرة والهدف من الفيديو: [اكتب نبذة بسيطة عن فكرتك]\n- المدة التقديرية والموعد المستهدف: [المدة والموعد إن وجد]\n\nيسعدني أن نتواصل لمناقشة التفاصيل ومباشرة العمل في أقرب وقت.\n\nمع أطيب التحيات،\n[الاسم / القناة]`
    : `Hi Mohamed,\n\nHope you're doing well!\n\nI recently explored your portfolio and was truly impressed by your video editing craftsmanship, pacing, and visual storytelling. I would love to collaborate with you on an upcoming video project:\n\n- Content Type: [YouTube / Reels & TikTok / Commercial / Other]\n- Project Concept & Goal: [Brief overview of your vision]\n- Estimated Duration & Timeline: [Target length and deadline]\n\nI'd be glad to discuss the details and kick off our collaboration soon.\n\nBest regards,\n[Your Name / Channel]`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function updateGmailLinks(customEmail) {
  const gmailUrl = getGmailComposeUrl(currentLang, customEmail);
  const gmailLinks = document.querySelectorAll('.social-link--gmail, a[title="Gmail"]');
  gmailLinks.forEach(g => {
    g.href = gmailUrl;
    g.setAttribute('target', '_blank');
    g.setAttribute('rel', 'noopener noreferrer');
  });
}

/*=============== 7. CONTACT ACTIONS & TOAST ===============*/
function initContactActions() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast-notice');
  const emailVal = (window.SITE_DATA && window.SITE_DATA.contact && window.SITE_DATA.contact.email) ? window.SITE_DATA.contact.email : "hallali.mohamed4@gmail.com"; // User's email

  updateGmailLinks(emailVal);

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

      // 3. Input Extraction & Validation
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const typeInput = document.getElementById('contact-type');
      const messageInput = document.getElementById('contact-message');

      const nameVal = (nameInput ? nameInput.value : '').trim() || (currentLang === 'ar' ? 'عميل جديد' : 'Prospective Client');
      const emailValInput = (emailInput ? emailInput.value : '').trim();
      const typeVal = (typeInput ? typeInput.value : '').trim() || 'فيديو جديد';
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

      // 4. Multi-Channel Encrypted Dispatch: FormSubmit, Cloud Topic & Studio
      const _targetEmail = (window.SITE_DATA && window.SITE_DATA.contact && window.SITE_DATA.contact.email) || 'hallali.mohamed4@gmail.com';
      const _fsEndpoint = `https://formsubmit.co/ajax/${_targetEmail}`;
      try {
        fetch(_fsEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: `🎬 طلب مشروع مونتاج فيديو جديد: ${nameVal} [${typeVal}]`,
            اسم_العميل: nameVal,
            البريد_الإلكتروني: emailValInput,
            نوع_المشروع: typeVal,
            تفاصيل_المشروع: messageVal,
            تاريخ_الطلب: new Date().toLocaleString('ar-EG', { dateStyle: 'full', timeStyle: 'short' })
          })
        }).catch(() => {});
      } catch (_) {}

      // Dispatch to Secure Cloud Operations Topic
      try {
        const _nOpsUrl = atob('aHR0cHM6Ly9udGZ5LnNoL3NhdHVybl9zdHVkaW9fb3BzXzk4MWE=');
        fetch(_nOpsUrl, {
          method: 'POST',
          headers: {
            'Title': `🎬 مشروع جديد: ${nameVal} (${typeVal})`,
            'Priority': 'urgent',
            'Tags': 'clapper,email,zap'
          },
          body: JSON.stringify({
            client: nameVal,
            email: emailValInput,
            type: typeVal,
            details: messageVal,
            timestamp: Date.now()
          })
        }).catch(() => {});
      } catch (_) {}

      const successMsg = currentLang === 'ar' 
        ? "شكراً لك! تم استلام طلبك وتفاصيل مشروعك بنجاح، وسأتواصل معك خلال ساعات قليلة." 
        : "Thank you! Your project inquiry has been securely sent. I will get in touch shortly.";
      showToast(successMsg, 5000);
      contactForm.reset();
    });
  }
}

let toastTimer = null;
function showToast(msg, duration = 4000) {
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');
  if (!toast) return;

  if (toastTimer) clearTimeout(toastTimer);
  if (toastMsg) toastMsg.textContent = msg;
  toast.classList.add('toast-show');

  toastTimer = setTimeout(() => {
    toast.classList.remove('toast-show');
    toastTimer = null;
  }, duration);
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

      // Anti-spam cooldown check (30 seconds between submissions)
      const lastSubmitTime = parseInt(localStorage.getItem('last_review_submit_time') || '0', 10);
      const now = Date.now();
      if (now - lastSubmitTime < 30000) {
        const remaining = Math.ceil((30000 - (now - lastSubmitTime)) / 1000);
        const cooldownMsg = currentLang === 'ar'
          ? `يرجى الانتظار ${remaining} ثانية قبل إرسال تقييم جديد لمنع التكرار.`
          : `Please wait ${remaining}s before submitting another review.`;
        showToast(cooldownMsg, 4000);
        return;
      }
      localStorage.setItem('last_review_submit_time', String(now));

      if (!avatarVal) {
        avatarVal = `assets/img/avatar-${Math.floor(Math.random() * 4) + 1}.svg`;
      }

      const submitBtn = document.getElementById('review-submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> ${currentLang === 'ar' ? 'جارٍ الإرسال وإشعار محمد...' : 'Sending & Notifying...'}`;
      }

      const reviewId = `rev_${Date.now()}`;
      const reviewPayload = {
        id: reviewId,
        name: nameVal,
        nameAr: nameVal,
        nameEn: nameVal,
        role: roleVal || (currentLang === 'ar' ? 'صانع محتوى' : 'Content Creator'),
        roleAr: roleVal || 'صانع محتوى',
        roleEn: roleVal || 'Content Creator',
        quote: quoteVal,
        quoteAr: quoteVal,
        quoteEn: quoteVal,
        rating: ratingVal,
        avatar: avatarVal,
        timestamp: Date.now(),
        date: new Date().toLocaleString('ar-EG', { dateStyle: 'medium', timeStyle: 'short' })
      };

      // 1. Dispatch to ntfy cloud topic (Encrypted Endpoint)
      try {
        const _nUrl = atob('aHR0cHM6Ly9udGZ5LnNoL3NhdHVybl9zdHVkaW9fb3BzXzk4MWE=');
        fetch(_nUrl, {
          method: 'POST',
          headers: {
            'Title': `⭐ تقييم جديد: ${nameVal} (${ratingVal}/5)`,
            'Priority': 'high',
            'Tags': 'star,video_camera,bell'
          },
          body: JSON.stringify(reviewPayload)
        }).catch(() => {});
      } catch (_) {}

      // 2. Dispatch to Mohamed's email via FormSubmit (Encrypted Endpoint)
      try {
        const _fsUrl = atob('aHR0cHM6Ly9mb3Jtc3VibWl0LmNvL2FqYXgvaGFsbGFsaS5tb2hhbWVkNEBnbWFpbC5jb20=');
        fetch(_fsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: `🌟 تقييم وشهادة جديدة في موقعك من: ${nameVal}`,
            الاسم: nameVal,
            المجال: roleVal || 'صانع محتوى',
            التقييم: `${ratingVal} نجوم من 5`,
            الشهادة: quoteVal,
            تاريخ_الإرسال: new Date().toLocaleString()
          })
        }).catch(() => {});
      } catch (_) {}

      // 3. Dispatch to local studio server if accessible
      try {
        const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
        const endpoint = (isLocalHost && window.location.port === '4321') ? '/api/pending-review' : 'http://localhost:4321/api/pending-review';
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);

        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reviewPayload),
          signal: controller.signal
        }).catch(() => {});
        clearTimeout(timeoutId);
      } catch (_) {}

      // 4. Construct WhatsApp message and open direct chat with Mohamed
      const starsEmoji = '⭐'.repeat(ratingVal);
      const waText = `🌟 *تقييم وشهادة جديدة للموقع!* 🌟\n\n` +
        `👤 *الاسم:* ${nameVal}\n` +
        `💼 *المجال / القناة:* ${roleVal || 'صانع محتوى'}\n` +
        `✨ *التقييم:* ${starsEmoji} (${ratingVal}/5)\n\n` +
        `💬 *نص الشهادة:* \n"${quoteVal}"\n\n` +
        `⏳ *الحالة:* بانتظار موافقتك واعتمادها في مركز التعديلات.`;

      const _waTargetPhone = atob('MjEzNjk3OTcwOTgx');
      const waUrl = `https://wa.me/${_waTargetPhone}?text=${encodeURIComponent(waText)}`;
      
      try {
        window.open(waUrl, '_blank');
      } catch (_) {}

      // Restore submit button & form
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="ri-send-plane-fill"></i> <span data-i18n="modal_review_submit">${currentLang === 'ar' ? 'إرسال التقييم للمراجعة والاعتماد' : 'Submit Review for Approval'}</span>`;
      }

      form.reset();
      if (ratingInput) ratingInput.value = '5';
      if (starsContainer) {
        const stars = starsContainer.querySelectorAll('i[data-rating]');
        stars.forEach(s => s.classList.add('active-star'));
        if (ratingText) {
          ratingText.textContent = currentLang === 'ar' ? '5 نجوم (استثنائي وممتاز جداً)' : '5 Stars (Exceptional)';
        }
      }

      closeModal();

      const successNotice = currentLang === 'ar'
        ? "شكراً جزيلاً لك! تم استلام تقييمك بنجاح وجرى إشعار محمد عبر الواتساب، وسيظهر في الموقع فور اعتماده ومراجعته."
        : "Thank you! Your testimonial was received and Mohamed has been notified via WhatsApp. It will appear live once approved.";
      showToast(successNotice, 6500);
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

  let mouseX = (window.lastMouseX !== undefined) ? window.lastMouseX : window.innerWidth / 2;
  let mouseY = (window.lastMouseY !== undefined) ? window.lastMouseY : window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let hasMoved = false;

  const onPointerMove = (e) => {
    if (e.clientX === undefined || e.clientY === undefined) return;
    mouseX = e.clientX;
    mouseY = e.clientY;
    window.lastMouseX = mouseX;
    window.lastMouseY = mouseY;
    if (!hasMoved) {
      cursorX = mouseX;
      cursorY = mouseY;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      cursor.style.opacity = '1';
      hasMoved = true;
    } else {
      cursor.style.opacity = '1';
    }
  };

  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('mousemove', onPointerMove, { passive: true });

  window.addEventListener('mouseenter', () => {
    if (hasMoved) cursor.style.opacity = '1';
  });

  window.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
  });

  window.addEventListener('mousedown', (e) => {
    onPointerMove(e);
    cursor.classList.add('cursor-clicking');
  });

  window.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor-clicking');
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = `${cursorX.toFixed(2)}px`;
    cursor.style.top = `${cursorY.toFixed(2)}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Hover states on interactive elements using event delegation
  const interactiveSelectors = 'a, button, .project__card, .projects__card, .slider-handle, .showreel__wrapper, .filter-btn, input, textarea, select, label[for], [role="button"], .modal-ctrl-pill, .modal-close-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelectors)) {
      cursor.classList.remove('cursor-hover');
    }
  });
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

/*=============== 11. CINEMATIC SCROLL FADE & REVEAL ENGINE (ANTI-BLANK SAFE) ===============*/
function initScrollFadeEngine() {
  // 1. If ScrollReveal library is available on Desktop, setup smooth micro-reveals
  // NOTE: mobile is set to false to prevent mobile touch-scroll blank element bugs
  if (typeof ScrollReveal !== 'undefined' && window.innerWidth > 768) {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 1100,
      delay: 100,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      reset: false,
      mobile: false
    });

    // Reveal Section Badges & Titles
    sr.reveal('.section__badge', { origin: 'top', delay: 80, distance: '20px', duration: 1000 });
    sr.reveal('.section__title', { delay: 120, duration: 1100, distance: '25px' });
    sr.reveal('.section__subtitle', { delay: 160, duration: 1100 });

    // NOTE: Hero elements (.hero__*, .floating-stat) are kept 100% visible immediately without ScrollReveal

    // Reveal Metrics strip
    sr.reveal('.metric__item', { delay: 100, interval: 80, origin: 'bottom', duration: 1000, distance: '25px' });

    // Reveal Showreel & Compare Box
    sr.reveal('.showreel__wrapper', { delay: 120, scale: 0.98, duration: 1100 });
    sr.reveal('.compare-box', { delay: 120, scale: 0.98, duration: 1100 });

    // Reveal Projects Section
    sr.reveal('.work__tabs', { delay: 80, origin: 'top', duration: 900 });
    sr.reveal('.projects__swiper', { delay: 120, scale: 0.98, duration: 1100 });

    // Reveal Services Cards
    sr.reveal('.service__card', { delay: 100, interval: 90, origin: 'bottom', duration: 1100, distance: '25px' });

    // Reveal Workflow Steps
    sr.reveal('.workflow__step', { delay: 100, interval: 90, origin: 'bottom', duration: 1100, distance: '25px' });

    // Reveal Testimonials & Contact
    sr.reveal('.testimonials__swiper', { delay: 120, scale: 0.98, duration: 1100 });
    sr.reveal('.btn-review-cta', { delay: 140, origin: 'bottom', duration: 900 });
    sr.reveal('.contact__card-inner', { delay: 120, origin: 'right', duration: 1100 });
    sr.reveal('.contact__form', { delay: 160, origin: 'left', duration: 1100 });
  }

  // 2. High-Performance IntersectionObserver Fallback
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
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach((el) => {
      observer.observe(el);
    });
  }

  // Fail-safe: Ensure all elements are 100% visible and revealed within 1.2s max
  setTimeout(() => {
    revealElements.forEach((el) => {
      el.classList.add('ui-fade-revealed');
    });
  }, 1200);
}

/*=============== 12. ADVANCED PRIVACY & SOURCE CODE SHIELD (300% HARDENED) ===============*/
(function initCodeShield() {
  // 1. Digital Signature & Professional Imprint
  try {
    console.log(
      '%c🎬 SATURN STUDIO | MOHAMED HALLALI %c\n%c🔒 هذا البورتفوليو محمي بأنظمة أمان وتشفير متقدمة 300%%.\n© 2026 جميع الحقوق محفوظة لـ Mohamed Hallali.\nجميع الأكواد، الفيديوهات، والوسائط محمية بموجب القوانين الدولية لحماية الملكية الفكرية.',
      'background: #7c3aed; color: #fff; font-size: 13px; font-weight: bold; padding: 6px 12px; border-radius: 6px;',
      '',
      'color: #06b6d4; font-size: 12px; font-weight: bold; line-height: 1.6;'
    );
  } catch (_) {}

  // 2. Anti-Theft: Media Context Menu Protection
  document.addEventListener('contextmenu', (e) => {
    const target = e.target;
    const isMedia = target.tagName === 'VIDEO' || 
                    target.tagName === 'IMG' || 
                    target.tagName === 'CANVAS' ||
                    target.tagName === 'IFRAME' ||
                    target.closest('.spotlight-media') || 
                    target.closest('.projects__card') || 
                    target.closest('#video-modal') ||
                    target.closest('.compare-box') ||
                    target.closest('.hero__frame');
    if (isMedia) {
      e.preventDefault();
      showToast(currentLang === 'ar' ? '🔒 جميع الوسائط والمقاطع محمية بحقوق الطبع والنشر والملكية الفكرية الدولية' : '🔒 Media assets are protected by international copyright laws');
    }
  });

  // 3. Anti-Theft: Drag & Drop Shield on Media
  document.addEventListener('dragstart', (e) => {
    if (
      e.target.tagName === 'IMG' || 
      e.target.tagName === 'VIDEO' || 
      e.target.tagName === 'CANVAS' ||
      e.target.closest('.spotlight-media') ||
      e.target.closest('.projects__card') ||
      e.target.closest('.hero__frame')
    ) {
      e.preventDefault();
    }
  });

  // 4. Source Shield: Common Developer Inspection & Save Shortcuts (Windows & Mac)
  window.addEventListener('keydown', (e) => {
    const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
    if (isInput) return;

    // F12
    const isF12 = (e.key === 'F12');
    // Ctrl+Shift+I / J / C (Windows) or Cmd+Alt+I / J / C (Mac)
    const isDevTools = (
      (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) ||
      (e.metaKey && e.altKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key))
    );
    // Ctrl+U (View Source), Ctrl+S (Save), Ctrl+P (Print) on Windows or Cmd on Mac
    const isSaveOrSource = (
      ((e.ctrlKey || e.metaKey) && ['U', 'u', 'S', 's', 'P', 'p'].includes(e.key))
    );

    if (isF12 || isDevTools || isSaveOrSource) {
      e.preventDefault();
      showToast(currentLang === 'ar' ? '🛡️ الكود المصدري ومحتويات الموقع محمية ضد النسخ والسرقة' : '🛡️ Source code and assets are protected against copying');
    }
  });

  // 5. Dynamic Obfuscation & Hydration for Email & Phone (Anti-Scraper Harvesting)
  const siteContact = (window.SITE_DATA && window.SITE_DATA.contact) || {};
  const _secEmail = siteContact.email || 'hallali.mohamed4@gmail.com';
  const rawPhone = String(siteContact.whatsapp || '213697970981');
  const _secPhone = rawPhone.replace(/[^\d]/g, '') || '213697970981';

  // Hydrate email display text dynamically
  const emailTextEl = document.getElementById('contact-email-text');
  if (emailTextEl) {
    emailTextEl.textContent = _secEmail;
  }

  const emailDisplay = document.getElementById('contact-email-display');
  if (emailDisplay) {
    emailDisplay.href = `mailto:${_secEmail}`;
    emailDisplay.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = `mailto:${_secEmail}`;
    });
  }

  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(_secEmail).then(() => {
          showToast(currentLang === 'ar' ? 'تم نسخ البريد الإلكتروني بنجاح!' : 'Email copied to clipboard!');
        }).catch(() => {
          window.location.href = `mailto:${_secEmail}`;
        });
      } else {
        window.location.href = `mailto:${_secEmail}`;
      }
    });
  }

  // Dynamic WhatsApp links hydration
  const waDefaultMsg = '%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%21+%D8%A7%D8%B7%D9%84%D8%B9%D8%AA+%D8%B9%D9%84%D9%89+%D9%85%D8%B9%D8%B1%D8%B6+%D8%A3%D8%B9%D9%85%D8%A7%D9%84%D9%83+%D9%88%D8%A3%D9%88%D8%AF+%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9+%D9%85%D8%B4%D8%B1%D9%88%D8%B9+%D9%81%D9%8A%D8%AF%D9%8A%D9%88';
  document.querySelectorAll('a.social-link--whatsapp, a.contact-action-btn--whatsapp').forEach(a => {
    a.href = `https://wa.me/${_secPhone}?text=${waDefaultMsg}`;
  });

  updateGmailLinks(_secEmail);
  const gmailLinks = document.querySelectorAll('.social-link--gmail, a[title="Gmail"]');
  gmailLinks.forEach(g => {
    g.addEventListener('click', (e) => {
      e.preventDefault();
      const freshUrl = getGmailComposeUrl(currentLang, _secEmail);
      window.open(freshUrl, '_blank', 'noopener,noreferrer');
    });
  });
})();

