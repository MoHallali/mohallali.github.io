# 🎬 Mohamed Hallali — Cinematic Video Editor & Storyteller Portfolio
### بورتفوليو المونتير السينمائي المحترف | SATURN Studio

<p align="center">
  <a href="https://mohallali.surge.sh"><img src="https://img.shields.io/badge/Live%20Demo-Surge%20CDN-7c3aed?style=for-the-badge&logo=surge&logoColor=white" alt="Surge Live Demo" /></a>
  <a href="https://mohallali.github.io"><img src="https://img.shields.io/badge/Mirror-GitHub%20Pages-06b6d4?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages" /></a>
  <img src="https://img.shields.io/badge/Performance-100%25-10b981?style=for-the-badge&logo=speedtest&logoColor=white" alt="Performance 100%" />
  <img src="https://img.shields.io/badge/Security-Hardened%20150%25-f59e0b?style=for-the-badge&logo=auth0&logoColor=white" alt="Security Hardened" />
  <img src="https://img.shields.io/badge/Resolution-4K%20ProRes%20Ready-ef4444?style=for-the-badge&logo=apple&logoColor=white" alt="4K ProRes" />
</p>

---

## 🌟 نبذة عامة | Overview

مرحباً بك في المستودع الرسمي لبورتفوليو **محمد هلّالي (Mohamed Hallali)** — مونتير فيديو ومخرج إبداعي متخصص في تحويل اللقطات الخام إلى قصص سينمائية تجذب ملايين المشاهدات وتضاعف معدل الاحتفاظ بالجمهور (Audience Retention Rate) لكبار صناع المحتوى (YouTubers)، الوكالات الإعلانية، والشركات العالمية.

تمت هندسة هذا الموقع بأحدث تقنيات الويب الأصلية (Vanilla JavaScript & Modern CSS) دون أي أطر عمل ثقيلة، ليعمل بسرعة فائقة وزمن استجابة أقل من 50ms، مع قدرة استيعاب آلاف الزوار المتزامنين عبر شبكات التوزيع العالمية (CDN).

Welcome to the official repository for **Mohamed Hallali's Cinematic Video Editor Portfolio**. Engineered with performance-first Vanilla JavaScript, custom UI/UX design, instant bilingual switching (Arabic & English), and military-grade security.

---

## 🚀 الروابط الحية | Live Deployments

| المنصة | الرابط المباشر | الحالة | الحماية والأداء |
| :--- | :--- | :---: | :---: |
| **Surge Anycast CDN** | [mohallali.surge.sh](https://mohallali.surge.sh) | 🟢 مباشر (Live) | 10 Global Anycast Edge Nodes |
| **GitHub Pages** | [mohallali.github.io](https://mohallali.github.io) | 🟢 مباشر (Live) | Fastly Edge CDN + SSL |

---

## ✨ المميزات الحصرية المدمجة | Key Features

### 1. 🌐 نظام ثنائي اللغة فوري (Instant Bilingual AR ⇄ EN)
- تبديل فوري وسلس بين الاتجاهين **RTL** (العربية) و **LTR** (الإنجليزية) بنقرة واحدة ودون الحاجة لإعادة تحميل الصفحة.
- حفظ لغة الزائر المفضلة تلقائياً في المتصفح.

### 2. 🎞️ مشغل فيديو سينمائي مخصص (Cinematic Video Lightbox)
- مشغل منبثق فائق السرعة يدعم فيديوهات يوتيوب (YouTube)، يوتيوب شورتس (Shorts 9:16)، ريلز وتيك توك، وفيديوهات الويب المباشرة MP4/WebM.
- معالجة ذكية للأبعاد الرأسية (9:16) والأفقية (16:9 4K) تلقائياً.

### 3. 🎨 سلايدر مقارنة الألوان التفاعلي (Before & After Grading Slider)
- أداة تفاعلية بسحب المؤشر لعرض الفارق الجوهري بين التصوير الخام الرمادي (S-Log Raw) والنتيجة بعد التلوين السينمائي (Color Grading / VFX).

### 4. 🌟 قسم إشادة واعتراف صناع المحتوى (Creator Video Tribute Spotlight)
- مساحة بارزة مخصصة لشهادة صانع المحتوى السعودي الشهير **عبد الرحمان عطيف (قناة D7MANc - 500K مشترك)**، تتضمن مشغل فيديو مباشر وبوستر الاستوديو.

### 5. 📬 نظام تقييمات العملاء وإشعارات الواتساب (WhatsApp Review Pipeline)
- نموذج تفاعلي يتيح للعملاء إرسال تقييماتهم وشهاداتهم.
- **إشعار فوري على الواتساب الشخصي (+213697970981)** بتفاصيل التقييم فور إرساله.
- **صندوق مراجعة آمن (Moderation Inbox)**: لا يُنشر أي تقييم في الموقع إلا بعد مراجعته والموافقة عليه في لوحة التحكم.
- نسخ سحابية متزامنة عبر قنوات مشفرة (`ntfy.sh` و `FormSubmit`).

### 6. ⚡ أداء فائق وقوة تحمل عالية (High-Traffic Scalability)
- تحميل كسول ذكي (`loading="lazy"` و `decoding="async"`) لكافة الصور والوسائط.
- اتصال مسبق لشبكات التوزيع (`preconnect` و `dns-prefetch`).
- منع التحميل التلقائي للفيديوهات الثقيلة (`preload="none"`) لحفظ باقة الزوار وتقليل استهلاك السيرفر عند دخول آلاف الزوار معاً.
- معالجة حركة الماوس والمؤشر المضيء بـ `requestAnimationFrame` و `passive event listeners`.

---

## 🔒 معايير الأمان والحماية (150% Security Hardening)

- [x] **حماية تامة من هجمات XSS**: تعقيم كامل لجميع المدخلات والبيانات الديناميكية عبر دالة `escapeHTML()`.
- [x] **سياسة أمان المحتوى الصارمة (Content Security Policy - CSP)**: تقييد مصادر النصوص، الخطوط، وإطارات الفيديو.
- [x] **حماية النوافذ المنبثقة**: إضافة `rel="noopener noreferrer"` لكافة الروابط الخارجية لمنع هجمات Tabnabbing.
- [x] **حماية ضد التكرار والسبام (Rate Limiting & Cooldown)**: منع إرسال أكثر من تقييم في فترات قصيرة مع فخ برمجي خفي (Honeypot).
- [x] **حماية لوحة التحكم (CSRF & Origin Validation)**: التحقق الصارم من مصدر الطلبات وتفادي Directory Traversal.
- [x] **فحص بصمة الصور (Magic Bytes Verification)**: التأكد من سلامة ملفات الصور المرفوعة ومنع الملفات الملغومة.

---

## 🛠️ حزمة التقنيات | Tech Stack

- **الواجهة الأمامية**: HTML5 Semantic, Modern CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+).
- **المكتبات**: [Swiper.js 11](https://swiperjs.com/) للسلايدرات التفاعلية، [Remix Icon](https://remixicon.com/) للأيقونات المتجهة.
- **السيرفر المحلي ولوحة التحكم**: Python HTTP Server, Hardened Security Layer, Auto-compiler.
- **الاستضافة والـ CDN**: Surge Anycast Edge CDN, GitHub Pages & Actions.

---

## 📁 هيكلية المشروع | Project Structure

```text
├── index.html                    # الصفحة الرئيسية للموقع (عربي / إنجليزي)
├── 200.html                      # نسخة الـ Single Page App والتوجيه لـ Surge
├── 404.html                      # صفحة الخطأ المخصصة
├── README.md                     # التوثيق الرسمي للمشروع
├── assets/
│   ├── css/
│   │   └── style.css             # التنسيقات الكاملة، المتغيرات اللونية والأنيميشن
│   ├── js/
│   │   ├── main.js               # محرك الواجهة، اللغات، المشغل، والأمان
│   │   └── data.js               # بيانات الموقع المترجمة والمحدثة آلياً
│   ├── img/                      # الصور، اللوغوهات، وأغلفة المشاريع
│   └── video/                    # مقاطع الفيديو المحسنة للويب
├── admin/                        # لوحة التحكم الخاصة (Admin Studio Dashboard - محلياً)
├── admin_server.py               # سيرفر التحكم المحلي المؤمن والمحمي
└── compiler.py                   # أداة البناء والمزامنة الآلية للملفات
```

---

## 📬 تواصل مع المونتير | Contact & Inquiries

- 💬 **واتساب مباشر (WhatsApp)**: [+213697970981](https://wa.me/213697970981)
- ✉️ **البريد الإلكتروني (Email)**: [hallali.mohamed4@gmail.com](mailto:hallali.mohamed4@gmail.com)
- 📸 **إنستغرام (Instagram)**: [@mimo.hallali](https://www.instagram.com/mimo.hallali/?__pwa=1)
- 🎵 **تيك توك (TikTok)**: [@mo.hallali](https://www.tiktok.com/@mo.hallali)

---

<p align="center">
  <sub>تم التطوير والتصميم بأعلى معايير الإتقان © 2026 محمد هلّالي — جميع الحقوق محفوظة.</sub>
</p>
