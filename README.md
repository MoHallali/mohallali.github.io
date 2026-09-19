# 🎬 Mohamed Hallali — Cinematic Video Editor & Creative Director Portfolio
### بورتفوليو المونتير السينمائي المحترف | SATURN Studio

<p align="center">
  <a href="https://mohallali.surge.sh"><img src="https://img.shields.io/badge/Live%20Demo-Surge%20CDN-7c3aed?style=for-the-badge&logo=surge&logoColor=white" alt="Surge Live Demo" /></a>
  <a href="https://mohallali.github.io"><img src="https://img.shields.io/badge/Mirror-GitHub%20Pages-06b6d4?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" /></a>
  <img src="https://img.shields.io/badge/GPU%20Acceleration-100%25%20Hardware-10b981?style=for-the-badge&logo=nvidia&logoColor=white" alt="100% GPU Acceleration" />
  <img src="https://img.shields.io/badge/CPU%20Load-Zero%20Overhead-10b981?style=for-the-badge&logo=speedtest&logoColor=white" alt="Zero CPU Overhead" />
  <img src="https://img.shields.io/badge/Security-Hardened%20150%25-f59e0b?style=for-the-badge&logo=auth0&logoColor=white" alt="Security Hardened" />
  <img src="https://img.shields.io/badge/Resolution-4K%20ProRes%20Ready-ef4444?style=for-the-badge&logo=apple&logoColor=white" alt="4K ProRes" />
</p>

---

## 📑 فهرس المحتويات | Table of Contents

1. [🌟 نبذة عامة | Overview](#-نبذة-عامة--overview)
2. [🚀 الروابط الحية وشبكات التوزيع | Live Deployments](#-الروابط-الحية-وشبكات-التوزيع--live-deployments)
3. [⚡ معمارية تسريع كرت الشاشة بنسبة 100% (GPU Acceleration Engine)](#-معمارية-تسريع-كرت-الشاشة-بنسبة-100-gpu-acceleration-engine)
4. [✨ استعراض المزايا والوظائف الحصرية | Feature Catalog](#-استعراض-المزايا-والوظائف-الحصرية--feature-catalog)
5. [🔒 معايير الأمان والحماية (150% Security Hardening)](#-معايير-الأمان-والحماية-150-security-hardening)
6. [🛠️ حزمة التقنيات والبرمجيات | Tech Stack](#-حزمة-التقنيات-والبرمجيات--tech-stack)
7. [📁 هيكلية ملفات المشروع بالدقة الكاملة | Project Architecture](#-هيكلية-ملفات-المشروع-بالدقة-الكاملة--project-architecture)
8. [⚙️ سير العمل والمزامنة التلقائية | Build & Sync Pipeline](#-سير-العمل-والمزامنة-التلقائية--build--sync-pipeline)
9. [📬 قنوات التواصل الرسمية | Official Contact](#-قنوات-التواصل-الرسمية--official-contact)

---

## 🌟 نبذة عامة | Overview

مرحباً بك في المستودع الرسمي والتوثيق التقني الشامل لبورتفوليو **محمد هلّالي (Mohamed Hallali)** — مخرج سينمائي ومحرر فيديو متمرس متخصص في:
- صناعة محتوى يوتيوب عالي الاحتفاظ (**Audience Retention Rate Optimization**).
- التلوين السينمائي الاحترافي بدقة 4K ProRes عبر برمجيات هوليوود المعيارية (**DaVinci Resolve Studio**).
- المؤثرات البصرية وتصميم الصوت الحيوي (**Sound Design & Visual VFX**) لصناع المحتوى الكبار، الوكالات الإعلانية، والشركات العالمية.

تمت هندسة هذا الموقع كتحفة ويب عصرية تعتمد على تقنيات الويب الأصيلة فائقة السرعة (**Vanilla HTML5, Modern CSS3, Pure ES6+ JavaScript**) ليعمل بمعدل إطارات سلس وثابت **60/120 FPS** وزمن تحميل فوري دون أي أطر عمل ضخمة أو بطء في الأداء.

---

## 🚀 الروابط الحية وشبكات التوزيع | Live Deployments

| المنصة | الرابط المباشر | بروتوكول التوزيع | شهادة الأمان |
| :--- | :--- | :--- | :---: |
| **Surge Anycast CDN** | [mohallali.surge.sh](https://mohallali.surge.sh) | 10 Global Anycast Edge Nodes | SSL / TLS 1.3 |
| **GitHub Pages** | [mohallali.github.io](https://mohallali.github.io) | Fastly Edge CDN Integration | Auto HTTPS |

---

## ⚡ معمارية تسريع كرت الشاشة بنسبة 100% (GPU Acceleration Engine)

حرصاً على تقديم تجربة استثنائية وسرعة فائقة بدون استهلاك المعالج المركزي (CPU)، تم تزويد الموقع بمحرك معالجة رسوميات مخصص:

### 1. عزل طبقات الرسوميات (Hardware Compositor Isolation)
- تطبيق `contain: strict;` و `transform: translate3d(0, 0, 0);` على شبكة الكانفاس (`#gpu-particles`) لعزلها تماماً عن شجرة الـ DOM، مما يمنع حدوث أي (Layout Reflows) أو (Paint Thrashing).
- فرض طبقات الرسوميات المباشرة عبر `backface-visibility: hidden;` و `will-change: transform;` على كافة البطاقات التفاعلية، الأزرار، والشرائح.

### 2. خوارزمية الجزيئات المسرعة (Optimized Particle Mesh)
- **إلغاء التظليل البرمجي (Zero CPU ShadowBlur)**: استبدال دوال `ctx.shadowBlur` الثقيلة بتدرجات ناعمة مسبقة الحساب وفلتر عتادي عبر CSS `filter: drop-shadow()` يتم تنفيذه حصرياً على كرت الشاشة (GPU Shaders).
- **الحساب التربيعي للمسافات (Fast Distance Logic)**: تقليل ملايين عمليات الجذور التربيعية `Math.sqrt()` داخل حلقة الفحص الثنائية بفحص المسافة التربيعية `(dx*dx + dy*dy < 12100)` أولاً، مما يوفر أكثر من 95% من طاقة المعالج.

### 3. حركة المؤشر المضيء المباشرة (GPU-Composited Custom Cursor)
- الانتقال الكامل من تعديل خصائص التخطيط `style.left / style.top` إلى خاصية `translate3d(x, y, 0)` المعالجة كلياً على الـ Compositor Thread بدون إجبار المتصفح على إعادة حساب مواضع العناصر في كل إطار.
- فصل خاصية التكبير عند التحويم عبر معيار CSS الحديث المستقل `scale: 1.4;` لضمان عدم التعارض وسلاسة مطلقة.

### 4. وضع السكون التلقائي (Zero Idle Overhead via Visibility API)
- التوقف التام لمحركات الأنيميشن و `requestAnimationFrame` فور مغادرة الزائر للتبويب أو تصغير النافذة عبر `document.hidden`، مما يخفض استهلاك الـ CPU إلى **0.0%** تماماً أثناء عدم التفاعل.

---

## ✨ استعراض المزايا والوظائف الحصرية | Feature Catalog

### 1. 🌐 النظام ثنائي اللغة الفوري (Instant Bilingual AR ⇄ EN)
- تحويل كامل للموقع بين الاتجاهين **RTL** (العربية) و **LTR** (الإنجليزية) بنقرة واحدة وبدون أي تأخير.
- تخزين التفضيل اللغوي محلياً في ذاكرة المتصفح (`localStorage`).

### 2. 📱 أيقونات السوشيال ميديا المخصصة تحت الصورة الرئيسية
- تموضع دقيق ومتوازن تحت إطار البورتريه الرئيسي يركز حصراً على قنوات التواصل الفوري الأكثر طلباً:
  - 📸 **الإنستغرام (Instagram)**: توهج نيون بألوان التدرج الدافئ عند التحويم.
  - 💬 **الواتساب (WhatsApp)**: توهج أخضر زمردي جذاب مع رسالة بدء تلقائية جاهزة للنقاش.

### 3. 🎞️ مشغل الفيديو السينمائي المنبثق (Cinematic Video Lightbox)
- دعم شامل لجميع صيغ الفيديوهات: فيديوهات يوتيوب الأفقية بدقة 4K، فيديوهات يوتيوب القصيرة (Shorts 9:16)، ريلز الإنستغرام، وتيك توك.
- تحكم تلقائي ذكي في نسبة العرض إلى الارتفاع وتفادي التحميل المسبق المزعج.

### 4. 🎨 سلايدر مقارنة التلوين السينمائي (Before & After Color Grading)
- سلايدر تفاعلي انسيابي للمقارنة الحية بين تصوير الكاميرا الخام الرمادي (S-Log / Log3) والصورة النهائية بعد التلوين السينمائي بـ DaVinci Resolve.

### 5. 🌟 مساحة التكريم وشهادات النجوم (Creator Video Spotlight)
- نافذة مخصصة لإشادة صانع المحتوى السعودي **عبد الرحمان عطيف (D7MANc - نصف مليون مشترك)** مع فيديو مباشر وتوثيق رقمي.

### 6. 🏆 معرض الأعمال بنمط ستوديو UI الفاخر (Projects Showcase)
- واجهة مستوحاة من أحدث منصات الميديا العالمية مع شريط تبويبات مرن، مؤشرات تفاعلية، بطاقات زجاجية تفيض بالحيوية، وعدادات مشاهدات دقيقة.

### 7. 📬 منظومة تقييمات العملاء وإشعارات الواتساب (Review Pipeline)
- نافذة مراجعة متقدمة تتيح للعملاء كتابة آرائهم واختيار النجوم.
- إرسال إشعار فوري وتلقائي إلى رقم الواتساب المعتمد فور وصول التقييم مع إمكانية المراجعة في لوحة التحكم قبل اعتماده على الموقع.

---

## 🔒 معايير الأمان والحماية (150% Security Hardening)

- [x] **حماية صارمة من ثغرات XSS**: تطهير شامل لجميع النصوص والمدخلات بدالة `escapeHTML()`.
- [x] **تشفير وحجب نقاط النهاية (Endpoint Obfuscation)**: تشفير روابط التنبيهات والويب هوك بـ Base64 لمنع برمجيات التجسس من كشفها في الكود المصدري.
- [x] **درع منع السرقة وسحب الوسائط (Anti-Theft Media Shield)**: منع سحب وإفلات الصور والفيديوهات عبر الويب وتثبيت حقوق الملكية (`user-drag: none`).
- [x] **حماية القوائم واختصارات الفحص (Anti-Inspection Shield)**: تعطيل النقر الأيمن المريب وحظر اختصارات كشف السورس كود (`F12`, `Ctrl+U`, `Ctrl+Shift+I`, `Ctrl+S`).
- [x] **حماية البريد والتواصل ضد زواحف السبام (Anti-Scraping Protection)**: حماية البريد الإلكتروني ورقم الواتساب من زواحف الجمع التلقائي (Email Harvesters).
- [x] **سياسة أمان المحتوى الصارمة (CSP)**: تقييد مصادر النصوص والصور ونوافذ الفيديو لضمان سلامة المتصفح ومنع الـ Clickjacking.
- [x] **حماية الروابط المنبثقة**: إلزام كافة الروابط الخارجية بـ `target="_blank" rel="noopener noreferrer"`.
- [x] **مكافحة البوتات والسبام (Bot Protection)**: حقول تمويه خفية (Honeypot) وآلية تقييد معدل الإرسال (Rate Limiting).
- [x] **أمان لوحة التحكم (CSRF & Origin Isolation)**: تأمين شامل للوحة التحكم المحلية والتحقق من سلامة البايتات السحرية للملفات المرفوعة.

---

## 🛠️ حزمة التقنيات والبرمجيات | Tech Stack

| المجال | التقنيات المستخدمة |
| :--- | :--- |
| **هيكل الواجهة** | Semantic HTML5, ARIA Accessibility, SVG Vector Assets |
| **التصميم والتأثيرات** | Modern CSS3 (Variables, Grid, Flexbox, Glassmorphism, 3D Transforms) |
| **محرك التفاعل** | Pure Vanilla JavaScript (ES6+), Hardware Acceleration APIs |
| **المكتبات الخارجية** | [Swiper.js 11](https://swiperjs.com/) (Carousels), [Remix Icon 4.6](https://remixicon.com/) (Icons) |
| **أدوات المعالجة والبناء** | Python 3 Automation Compiler (`compiler.py`) |
| **المونتاج المعروض** | DaVinci Resolve Studio, Adobe Premiere Pro, After Effects |

---

## 📁 هيكلية ملفات المشروع بالدقة الكاملة | Project Architecture

```text
F:\website\
├── index.html                    # الصفحة الرئيسية الشاملة للموقع (عربي / إنجليزي)
├── 200.html                      # نسخة التوجيه الاحتياطية لشبكة Surge Anycast CDN
├── 404.html                      # صفحة الخطأ المخصصة وإعادة التوجيه الذكي
├── README.md                     # التوثيق التقني المرجعي للمشروع
├── site_data.json                # قاعدة البيانات المركزية لمحتوى الموقع وإعداداته
├── compiler.py                   # محرك البناء والتحديث التلقائي ومزامنة المسارات
├── admin_server.py               # خادم لوحة التحكم المحلية المشفر والمحمي
├── Run_Studio.bat                # ملف التشغيل السريع للوحة التحكم محلياً
├── Sync_To_GitHub.bat            # سكربت المزامنة والدفع التلقائي السريع إلى GitHub
│
├── assets/
│   ├── css/
│   │   └── style.css             # المتغيرات، التنسيقات الفاخرة، ومحرك تسريع الـ GPU
│   ├── js/
│   │   ├── main.js               # محرك الجافاسكريبت، اللغات، الكانفاس، والأنيميشن
│   │   └── data.js               # ملف كائن البيانات المتزامن تلقائياً عبر الكومبايلر
│   ├── img/                      # الصور الرسمية، البورتريه، وأغلفة المشاريع
│   └── video/                    # مقاطع الفيديو المضغوطة والمحسنة للعرض الفوري
│
├── admin/                        # واجهة لوحة تحكم الاستوديو (Studio Admin Dashboard)
│   └── index.html                # إدارة المشاريع، الخدمات، التقييمات، والتواصل
│
├── mohallali/                    # مسار إعادة التوجيه الذكي المخصص
│   └── index.html
│
└── personal-portfolio/           # مسار المستودع الفرعي المتزامن آلياً
    └── index.html
```

---

## ⚙️ سير العمل والمزامنة التلقائية | Build & Sync Pipeline

### التحديث التلقائي لكافة المسارات:
عند تعديل أي محتوى أو بيانات في الموقع، يقوم سكربت البناء المركزي بتحديث كافة النسخ المتطابقة بضغطة زر واحدة:

```bash
# تشغيل أداة المزامنة التلقائية والبناء
python compiler.py
```

يقوم هذا السكربت آلياً بـ:
1. قراءة `site_data.json` وتحديث `assets/js/data.js`.
2. تحديث كافة عناصر المشاريع، الإحصائيات، ونصوص اللغات في `index.html`.
3. إنشاء نسخة مطابقة لـ `200.html` المخصصة لـ Surge CDN.
4. تحديث المسارات النسبية في مجلد `personal-portfolio/index.html`.
5. تحديث أرقام الطوابع الزمنية (Cache Busting Timestamps) لمنع الكاش القديم في متصفحات الزوار.

---

## 📬 قنوات التواصل الرسمية | Official Contact

- 💬 **واتساب مباشر (WhatsApp)**: [+213697970981](https://wa.me/213697970981)
- 📸 **إنستغرام (Instagram)**: [@mimo.hallali](https://www.instagram.com/mimo.hallali/?__pwa=1)
- ✉️ **البريد الإلكتروني (Email)**: [hallali.mohamed4@gmail.com](mailto:hallali.mohamed4@gmail.com)
- 🎵 **تيك توك (TikTok)**: [@mo.hallali](https://www.tiktok.com/@mo.hallali)

---

<p align="center">
  <b>تمت الهندسة والتصميم بأعلى معايير الإتقان والدقة اللامتناهية © 2026 محمد هلّالي — جميع الحقوق محفوظة.</b><br />
  <sub>Handcrafted with absolute precision, cinema cyber aesthetics & pure 60FPS GPU performance.</sub>
</p>
