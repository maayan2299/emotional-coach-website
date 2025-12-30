import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Brain, Heart, Sparkles, Smile } from "lucide-react";
import { useState, useEffect } from 'react';

const galleryImage1 = "/image1.jpg";
const galleryImage2 = "/image2.jpg";
const galleryImage3 = "/image3.jpg";
const galleryImage4 = "/image4.jpg";

const Index = () => {
  const [isNlpDialogOpen, setIsNlpDialogOpen] = useState(false);
  const [isPsychologyDialogOpen, setIsPsychologyDialogOpen] = useState(false);
  const [isImaginationDialogOpen, setIsImaginationDialogOpen] = useState(false);
  const [isMindfulnessDialogOpen, setIsMindfulnessDialogOpen] = useState(false);
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const emailAddress = "san02484@gmail.com";

  // צבעים קבועים לשימוש בכל האתר לאחידות
  const colors = {
    textDark: "#2C3E3F", // כחול-ירוק כהה לכותרות
    textLight: "#5A6E6F", // גוון ביניים לטקסט רץ
    accent: "#3D5A5C", // צבע הדגשה
    bg: "#F8F6F0" // צבע שמנת לרקע
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const services = [
    {
      icon: Brain,
      title: "NLP",
      description: "תכנות נוירו-לשוני לשינוי דפוסי חשיבה, רגש והתנהגות. שחרור פחדים וחרדות, חיזוק ביטחון עצמי, ושינוי דפוסים מגבילים.",
      onClick: () => setIsNlpDialogOpen(true)
    },
    {
      icon: Heart,
      title: "פסיכולוגיה חיובית",
      description: "גישה שמתמקדת בחוזקות, במשאבים ובדברים הטובים שבאדם. בניית הרגלים המחזקים תחושת שמחה, הכרת תודה ואופטימיות.",
      onClick: () => setIsPsychologyDialogOpen(true)
    },
    {
      icon: Sparkles,
      title: "דימיון מודרך",
      description: "שיטה עדינה ועוצמתית להתחברות לעולם הפנימי. הרגעה, שחרור מתחים, עיבוד רגשות ויצירת שינוי חיובי מבפנים.",
      onClick: () => setIsImaginationDialogOpen(true)
    },
    {
      icon: Smile,
      title: "מיינדפולנס (קשיבות)",
      description: "להיות נוכחים ברגע הזה עם קבלה וחמלה. הרגעת מחשבות, הפחתת מתח וחרדה, והתחברות לשקט הפנימי.",
      onClick: () => setIsMindfulnessDialogOpen(true)
    }
  ];

  const testimonials = [
    { 
      text: "שני ליוותה אותי בתהליך רגשי עמוק ומרגש. כבר מהפגישה הראשונה הרגשתי הקשבה, חום וביטחון. בזכות הליווי שלה הצלחתי להתחבר לעצמי, לשחרר פחדים ישנים ולראות את החיים בעיניים חדשות. שני היא מטפלת עם לב גדול, נוכחות מרגיעה ויכולת אמיתית לגעת בנפש."
    },
    { 
      text: "הגעתי לשני אחרי מצוקה נפשית שעברתי, ישר התקבלתי בברכה וקיבלתי יחס חם, משפחתי, מכיל, מחבק ומקצועי. קיבלתי ארגז כלים להמשך החיים איך להתמודד, ויותר מזה איך לראות ולפתוח את החיים. מדובר במלכה."
    },
    { 
      text: "שני ליוותה את בתי בת ה-7 ברגישות, קשב ואמפתיה אמיתית. היא יצרה חיבור מיוחד עם בתי והפכה את המפגשים לחוויה חיובית ומעצימה. ראינו שינוי מדהים בביתנו. היא רכשה כלים מעשיים מה שגורם לה להיות היום רגועה, בטוחה בעצמה ומלאה שמחה. אנחנו אסירי תודה על המקצועיות, הסבלנות והלב הרחב של שני. ממליצה בחום רב!"
    },
    { 
      text: "הגעתי לשני בעקבות תחילת תהליך רגשי עם הבן שלי. כל התהליך ליוותה אותנו בצורה מאוד אישית ואוזן קשב וניתן היה להבחין בשינוי שהבן שלי עבר כבר בתחילת הדרך. האוירה במפגשים מאוד נעימה והבן שלי הגיע למפגשים ברצון ואפילו גם חיכה להם. ממליצה בחום."
    },
    { 
      text: "הגעתי לשני בתקופה לא פשוטה, מלאה בלבול וחששות. כבר במפגש הראשון הרגשתי שאני במקום בטוח — היא מקשיבה באמת, בלי לשפוט, ויודעת לראות לעומק מה שאני בעצמי לא הצלחתי לשים עליו את האצבע. במהלך התהליך עם שני עברתי שינוי משמעותי: למדתי להקשיב לעצמי, לזהות את החוזקות שבי, ולשחרר פחדים שהחזיקו אותי הרבה זמן. הכלים שקיבלתי ממשיכים ללוות אותי ביום-יום, וההשפעה שלהם מורגשת בכל תחום בחיים שלי. שני היא שילוב נדיר של מקצועיות, רגישות ונשמה גדולה. אני מודה על כל רגע בתהליך וממליץ בחום לכל מי שרוצה לצמוח, להתחזק ולמצוא שלווה מבפנים."
    }
  ];

  const galleryImages = [
    { src: galleryImage1, alt: "צמיחה והעצמה אישית - שני אלימלך" },
    { src: galleryImage2, alt: "פריחה וחופש פנימי" },
    { src: galleryImage3, alt: "תהליך טיפולי וחיבור רגשי" },
    { src: galleryImage4, alt: "רוגע ושלווה בקליניקה" }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextTestimonial();
    if (distance < -50) prevTestimonial();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 90;
      window.scrollTo({ top: element.offsetTop - navHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }} dir="rtl">
      <style>{`
        /* ייבוא Heebo במשקלים שונים */
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap');
        
        /* הגדרת פונט גלובלית - Heebo Regular לטקסט רץ */
        body { 
          font-family: 'Heebo', sans-serif; 
          font-weight: 400; 
          color: ${colors.textLight}; 
          line-height: 1.8;
        }
        
        /* הגדרת כותרות - Heebo BOLD (700) */
        h1, h2, h3, h4, h5, h6, .font-heading { 
          font-family: 'Heebo', sans-serif;
          font-weight: 700; /* Bold - מודגש וחזק */
          color: ${colors.textDark};
          line-height: 1.3;
        }

        /* התאמה למובייל - h1 יותר עדין */
        @media (max-width: 768px) {
          h1 {
            font-weight: 500; /* Medium - עדין יותר במובייל */
          }
        }

        /* אנימציות */
        .scroll-animate { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .scroll-animate.animate-in { opacity: 1; transform: translateY(0); }
      `}</style>
      
      {/* תפריט ניווט */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm py-2' : 'bg-white/80 py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center gap-10 mx-auto font-medium">
              <button onClick={() => scrollToSection('hero')} className="text-lg hover:text-[#2C3E3F] transition-colors py-2">דף הבית</button>
              <button onClick={() => scrollToSection('about')} className="text-lg hover:text-[#2C3E3F] transition-colors py-2">אודות</button>
              <button onClick={() => scrollToSection('services')} className="text-lg hover:text-[#2C3E3F] transition-colors py-2">התמחויות</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-lg hover:text-[#2C3E3F] transition-colors py-2">המלצות</button>
              <button onClick={() => scrollToSection('contact')} className="text-white bg-[#3D5A5C] px-8 py-2 rounded-full shadow-md hover:bg-[#2C3E3F] transition-colors">צור קשר</button>
            </div>
            {/* תפריט מובייל */}
             <button className="md:hidden text-[#3D5A5C]" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} /></svg>
            </button>
          </div>
           <div id="mobile-menu" className="hidden md:hidden pb-6 text-center bg-white shadow-lg flex flex-col gap-4 pt-4 rounded-b-2xl mt-2">
            <button onClick={() => scrollToSection('hero')} className="text-[#3D5A5C] font-medium text-lg">דף הבית</button>
            <button onClick={() => scrollToSection('about')} className="text-[#3D5A5C] font-medium text-lg">אודות</button>
            <button onClick={() => scrollToSection('contact')} className="font-bold text-[#3D5A5C] text-lg bg-[#F8F6F0] py-2 mx-10 rounded-full">צור קשר</button>
          </div>
        </div>
      </nav>

      <div className="h-20 md:h-32"></div>

      <main>
        {/* --- חלק עליון: שם, משפט וגלים --- */}
        <section id="hero" className="pt-8 pb-12 md:pt-16 md:pb-24 text-center">
          <div className="container mx-auto px-4 max-w-4xl scroll-animate">
            
            {/* שם - פונט Heebo Bold */}
            <h1 className="text-5xl md:text-8xl mb-6 md:mb-8 tracking-wide font-heading">
              שני אלימלך
            </h1>

            {/* משפט - עם ריווח נעים */}
            <p className="text-lg md:text-3xl font-medium leading-relaxed mb-8 md:mb-12 mx-auto max-w-3xl px-2" style={{color: colors.textDark}}>
              "מאמנת רגשית המתמחה בתהליכי שינוי פנימי,<br className="hidden md:block"/>
              צמיחה אישית והעצמה."
            </p>

            {/* גל */}
            <div className="w-48 md:w-72 mx-auto mb-8 md:mb-12">
              <img src="/wave.png" alt="גל מעוצב" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* --- חלק אודות: נעים להכיר --- */}
        <section id="about" className="pb-16 md:pb-32 text-center">
          <div className="container mx-auto px-6 max-w-3xl scroll-animate space-y-6 md:space-y-8">
            
            {/* כותרת אודות - Bold */}
            <h2 className="text-3xl md:text-5xl">
              נעים להכיר
            </h2>

            {/* תת כותרת */}
            <div className="text-lg md:text-2xl font-normal" style={{color: colors.textDark}}>
              <span className="font-bold">שני אלימלך</span> | מאמנת רגשית ומאסטר ב-NLP
              <div className="text-base md:text-lg mt-2 md:mt-3 opacity-90">נשואה לחבר הכי טוב שלי ואמא לשלושה ילדים אהובים.</div>
            </div>

            {/* טקסט רץ - מרווח ונושם */}
            <div className="text-base md:text-xl font-normal space-y-4 md:space-y-6 px-2 md:px-10 leading-7 md:leading-8" style={{color: colors.textLight}}>
              <p>אני מלווה ילדים, נוער ומבוגרים בתהליכי שינוי וצמיחה, בשילוב כלים מעולמות ה-NLP, הפסיכולוגיה החיובית והדמיון המודרך.</p>
              <p>בקליניקה שלי אני יוצרת מרחב בטוח, חומל ומאפשר – מקום שבו אפשר פשוט להיות, להרגיש ולצמוח.</p>
            </div>

          </div>
        </section>

        {/* --- התמחויות --- */}
        <section id="services" className="bg-white py-16 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-12 md:mb-20 text-center text-3xl md:text-5xl">תחומי התמחות</h2>
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="scroll-animate bg-[#F8F6F0] hover:shadow-xl transition-all cursor-pointer border-none shadow-sm h-full flex flex-col" onClick={service.onClick}>
                  <CardHeader className="text-center pt-8 md:pt-10">
                    <div className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center mb-4 md:mb-6 shadow-sm">
                      <service.icon className="w-8 h-8 md:w-10 md:h-10" style={{color: colors.accent}} />
                    </div>
                    <CardTitle className="text-xl md:text-2xl mb-2 font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pb-8 md:pb-10 px-6 md:px-8 flex-grow">
                    <p className="font-normal leading-relaxed text-sm md:text-base">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- המלצות --- */}
        <section id="testimonials" className="bg-white py-16 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-12 md:mb-20 text-center text-3xl md:text-5xl">מטופלים ממליצים</h2>
            <div className="max-w-4xl mx-auto relative">
              {/* כרטיס ההמלצה */}
              <div 
                className="bg-[#F8F6F0] rounded-3xl p-8 md:p-12 shadow-lg min-h-[300px] md:min-h-[350px] flex items-center justify-center scroll-animate"
                onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
                onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
                onTouchEnd={handleTouchEnd}
              >
                <p className="text-base md:text-xl leading-relaxed text-center px-4 md:px-8" style={{color: colors.textLight}}>
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* חצים לניווט */}
              <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
                  style={{color: colors.accent}}
                  aria-label="המלצה קודמת"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* נקודות אינדיקציה */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className="transition-all rounded-full"
                      style={{
                        width: currentTestimonial === index ? '32px' : '10px',
                        height: '10px',
                        backgroundColor: currentTestimonial === index ? colors.accent : '#D1D5DB'
                      }}
                      aria-label={`המלצה ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
                  style={{color: colors.accent}}
                  aria-label="המלצה הבאה"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7 transform rotate-180 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- גלריה --- */}
        <section id="gallery" className="py-16 md:py-32" style={{ backgroundColor: colors.bg }}>
          <div className="container mx-auto px-6">
            <h2 className="mb-12 md:mb-20 text-center text-3xl md:text-5xl">מסע של צמיחה</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
              {galleryImages.map((img, i) => (
                <div key={i} className="scroll-animate overflow-hidden rounded-2xl shadow-lg">
                  <img src={img.src} alt={img.alt} className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700 ease-in-out" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- צור קשר --- */}
        <section id="contact" className="bg-white py-16 md:py-32">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <h2 className="mb-10 md:mb-16 text-3xl md:text-5xl">צרו קשר</h2>
            <Card className="border-none shadow-2xl bg-white rounded-3xl overflow-hidden">
              <CardContent className="py-12 md:py-16 px-8 md:px-10 space-y-8 md:space-y-12">
                <p className="text-xl md:text-2xl font-medium text-[#2C3E3F]">מוזמנים לקבוע פגישה או לכל שאלה</p>
                <div className="text-base md:text-lg space-y-4 md:space-y-5 font-normal">
                  <p className="flex justify-center items-center gap-3"><span className="font-bold text-[#3D5A5C]">טלפון:</span> <a href="tel:0545134815" dir="ltr" className="hover:text-[#3D5A5C] transition-colors">054-5134815</a></p>
                  <p className="flex justify-center items-center gap-3"><span className="font-bold text-[#3D5A5C]">מייל:</span> san02484@gmail.com</p>
                  <p className="flex justify-center items-center gap-3"><span className="font-bold text-[#3D5A5C]">קליניקה:</span> נס ציונה / ראשון לציון</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4 md:pt-6">
                  <Button className="text-white h-12 md:h-14 px-10 md:px-12 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all font-medium" style={{backgroundColor: colors.accent}} onClick={() => window.location.href='tel:0545134815'}>התקשרו אלי</Button>
                  <Button variant="outline" className="h-12 md:h-14 px-10 md:px-12 text-base md:text-lg rounded-full border-2 hover:bg-gray-50 font-medium" style={{borderColor: colors.accent, color: colors.accent}} onClick={() => setIsEmailDialogOpen(true)}>שלחו מייל</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="text-white py-12 md:py-16 px-6 text-center" style={{backgroundColor: colors.accent}}>
        <div className="container mx-auto space-y-3 md:space-y-4">
          <p className="font-normal opacity-90 text-base md:text-lg">© 2025 שני אלימלך - כל הזכויות שמורות</p>
          <div className="flex justify-center gap-6 text-sm opacity-80">
            <button onClick={() => setIsAccessibilityOpen(true)} className="hover:underline transition-all">הצהרת נגישות</button>
          </div>
        </div>
      </footer>

      {/* --- דיאלוגים (חלונות קופצים) --- */}
      
      {/* נגישות */}
      <Dialog open={isAccessibilityOpen} onOpenChange={setIsAccessibilityOpen}>
        <DialogContent className="max-w-2xl bg-white text-right p-10 rounded-3xl" dir="rtl">
          <DialogHeader><DialogTitle className="text-3xl border-b pb-6 mb-4 font-heading">הצהרת נגישות</DialogTitle></DialogHeader>
          <div className="space-y-5 text-gray-700 py-4 font-normal text-lg leading-relaxed">
            <p>שני אלימלך רואה חשיבות רבה במתן שירות שוויוני ושיפור חוויית הגלישה לאנשים עם מוגבלות.</p>
            <p><strong>התאמות שבוצעו:</strong> תפריט נגישות, התאמה למקלדת, תגיות Alt לתמונות, ומבנה קריא.</p>
            <p><strong>רכז נגישות:</strong> שני אלימלך | 054-5134815</p>
          </div>
          <Button onClick={() => setIsAccessibilityOpen(false)} style={{backgroundColor: colors.accent}} className="w-full text-white h-12 text-lg rounded-full mt-4">סגור</Button>
        </DialogContent>
      </Dialog>

      {/* דיאלוגים לתחומי התמחות */}
      <Dialog open={isNlpDialogOpen} onOpenChange={setIsNlpDialogOpen}>
        <DialogContent className="bg-white text-right p-10 rounded-3xl" dir="rtl">
          <DialogHeader className="mb-6"><DialogTitle className="text-3xl text-[#3D5A5C] font-heading">NLP - תכנות נוירו-לשוני</DialogTitle></DialogHeader>
          <DialogDescription className="text-gray-600 text-lg leading-8 font-normal">
            שיטה לשינוי דפוסי חשיבה וחיזוק הביטחון העצמי באמצעות כלים מעשיים. ה-NLP מאפשר לנו להבין איך המוח מקודד חוויות ולשנות את המשמעות שאנחנו מעניקים להן.
          </DialogDescription>
        </DialogContent>
      </Dialog>
      
       <Dialog open={isPsychologyDialogOpen} onOpenChange={setIsPsychologyDialogOpen}>
        <DialogContent className="bg-white text-right p-10 rounded-3xl" dir="rtl">
          <DialogHeader className="mb-6"><DialogTitle className="text-3xl text-[#3D5A5C] font-heading">פסיכולוגיה חיובית</DialogTitle></DialogHeader>
          <DialogDescription className="text-gray-600 text-lg leading-8 font-normal">
            במקום להתמקד רק בקושי, אנחנו מתמקדים בחוזקות ובמשאבים שיש לך. המטרה היא לא רק "לתקן" את מה שלא עובד, אלא להצמיח את מה שכן עובד ולשפר את איכות החיים.
          </DialogDescription>
        </DialogContent>
      </Dialog>
      
      <Dialog open={isImaginationDialogOpen} onOpenChange={setIsImaginationDialogOpen}>
        <DialogContent className="bg-white text-right p-10 rounded-3xl" dir="rtl">
          <DialogHeader className="mb-6"><DialogTitle className="text-3xl text-[#3D5A5C] font-heading">דמיון מודרך</DialogTitle></DialogHeader>
          <DialogDescription className="text-gray-600 text-lg leading-8 font-normal">
            שפה שהמוח הלא-מודע מבין מצוין. דרך הרפיה ושימוש בדימויים, אנחנו יכולים לעקוף את ההתנגדויות של המוח הלוגי וליצור שינוי רגשי עמוק ומהיר.
          </DialogDescription>
        </DialogContent>
      </Dialog>

      <Dialog open={isMindfulnessDialogOpen} onOpenChange={setIsMindfulnessDialogOpen}>
        <DialogContent className="bg-white text-right p-10 rounded-3xl" dir="rtl">
          <DialogHeader className="mb-6"><DialogTitle className="text-3xl text-[#3D5A5C] font-heading">מיינדפולנס</DialogTitle></DialogHeader>
          <DialogDescription className="text-gray-600 text-lg leading-8 font-normal">
            היכולת להיות נוכח ברגע הזה ללא שיפוטיות. תרגול מיינדפולנס עוזר להשקיט את "רעשי הרקע" בראש, להפחית מתח וחרדה, ולהחזיר את השליטה והרוגע לחיים.
          </DialogDescription>
        </DialogContent>
      </Dialog>

      <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
        <DialogContent className="bg-white text-center p-10 rounded-3xl">
          <DialogHeader className="mb-4"><DialogTitle className="text-3xl font-heading">שלחו מייל</DialogTitle></DialogHeader>
          <div className="py-8 space-y-8">
            <p className="text-2xl font-medium text-[#2C3E3F]" dir="ltr">{emailAddress}</p>
            <Button onClick={handleCopyEmail} style={{backgroundColor: colors.accent}} className="text-white w-full h-14 text-lg rounded-full font-medium">{emailCopied ? "הכתובת הועתקה!" : "העתק כתובת"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* כפתור וואטסאפ צף */}
      <a href="https://wa.me/972545134815" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 32 32" className="w-8 h-8 md:w-9 md:h-9" fill="currentColor"><path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.957 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.231-0.403 0.26-0.748 0.087s-1.461-0.539-2.78-1.716c-1.028-0.918-1.723-2.053-1.924-2.398s-0.022-0.534 0.152-0.707c0.156-0.155 0.346-0.403 0.518-0.605s0.231-0.346 0.347-0.575c0.116-0.231 0.058-0.432-0.028-0.605s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.431-0.010-0.661-0.010s-0.603 0.087-0.919 0.432c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.231 2.4 3.868 5.856 5.341 3.456 1.474 3.456 0.981 4.080 0.92s2.049-0.836 2.337-1.646c0.289-0.807 0.289-1.501 0.201-1.646s-0.315-0.231-0.66-0.403z"/></svg>
      </a>
    </div>
  );
};

export default Index;