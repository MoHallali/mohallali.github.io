# 🎬 دليل استخدام وتخصيص موقع بورتفوليو مونتير الفيديو (Video Editor Portfolio)

مرحباً بك! تم بناء هذا الموقع ليكون بورتفوليو فائق الاحترافية مخصصاً لـ **مونتير وصانع فيديو (Video Editor)**، ومصمماً بأحدث تقنيات الويب والتصميم التفاعلي لجذب كبار صناع المحتوى (YouTubers)، الشركات، والبراندات العالمية.

---

## 🌟 الميزات الحصرية المدمجة بالموقع:
1. **دعم ثنائي اللغة فوري (عربي ⇄ English):** تبديل سلس للغة والاتجاه بضغطة زر واحدة (RTL & LTR).
2. **مشغل فيديو منبثق (Video Lightbox Modal):** تشغيل مقاطعك وشو ريل الخاص بك بضغطة زر مباشرة داخل الموقع دون تشتيت العميل أو نقله لمنصة أخرى.
3. **سلايدر مقارنة تفاعلي (Before & After Slider):** يتيح للعميل سحب الخط لرؤية الفرق بين لقطات الخام (Raw Log) والنتيجة بعد التلوين والمؤثرات (Color Grading / VFX).
4. **شريط الأرقام والإنجازات (Social Proof & Metrics):** إبراز أرقام حقيقية (عدد المشاهدات، المشاريع المنجزة، معدل الاحتفاظ بالجمهور).
5. **فلترة المشاريع حسب التصنيف (Filterable Portfolio):** فلترة فورية بين (Reels/Shorts, YouTube Long-Form, Commercials, Motion Graphics).
6. **زر واتساب مباشر ومحادثة فورية:** بضغطة واحدة يفتح محادثة واتساب برسالة مسبقة التجهيز.
7. **زر نسخ البريد مع إشعار نجاح (Toast Notification).**
8. **سلايدر آراء العملاء (Testimonials Marquee).**
9. **مؤشر ماوس مضيء (Custom Glow Cursor) وخلفيات ضوئية متحركة ناعمة.**

---

## 🛠️ كيف تخصص بياناتك وروابطك الخاصة؟

### 1. تعديل روابط الفيديوهات في مشغل الفيديو:
افتح الملف `assets/js/main.js` وابحث عن الكائن `projectVideos` في السطور (188 - 225):
```javascript
const projectVideos = {
  "proj-1": {
    titleAr: "عنوان الفيديو بالعربي",
    titleEn: "Video Title in English",
    tag: "YouTube Long-Form",
    url: "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
  },
  // ... وبالمثل لباقي المشاريع والشو ريل "showreel"
};
```
> استبدل `YOUR_VIDEO_ID` بكود أي فيديو خاص بك على يوتيوب أو فيميو (Vimeo Embed).

---

### 2. تعديل رقم الواتساب والبريد الإلكتروني:
- **رقم الواتساب:** في ملف `index.html` ابحث عن `https://wa.me/201000000000` واستبدل `201000000000` برقم هاتفك مسبوقاً بكود دولتك (بدون علامة + أو أصفار إضافية).
- **البريد الإلكتروني:** في ملف `assets/js/main.js` ابحث عن المتغير `emailVal` وضعه:
  ```javascript
  const emailVal = "yourname@example.com";
  ```

---

### 3. تعديل الروابط الاجتماعية (Social Links):
في ملف `index.html`، ابحث عن قسم `hero__socials` وقم بوضع روابط قنواتك على (YouTube, Instagram, TikTok, LinkedIn, Behance).

---

## 🚀 كيفية نشر الموقع مجاناً على GitHub Pages (مثل الموقع المرجعي):
1. قم بإنشاء مستودع جديد على حسابك في GitHub (مثلاً: `my-portfolio`).
2. ارفع كافة الملفات الموجودة في هذا المجلد إلى المستودع:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/my-portfolio.git
   git push -u origin main
   ```
3. ادخل على **Settings** في مستودع GitHub الخاص بك، ثم اختر **Pages** من القائمة الجانبية.
4. تحت **Build and deployment**، اختر الفرع **main** ومجلد **/ (root)** واضغط **Save**.
5. ستحصل فوراً على رابط مجاني وسريع جداً مثل:
   `https://USERNAME.github.io/my-portfolio/`
