import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Mail, Phone, Brain, Heart, Sparkles, Smile, Copy, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from 'react';

const hacarmelImage = "/hacarmel.png";
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
  
  // Touch states for swipe
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const emailAddress = "san02484@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Animation Observer
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
      text: "הגעתי לשני אחרי מצוקה נפשית שעברתי, ישר התקבלתי בברכה וקיבלתי יחס חם, משפחתי, מכיל, מחבק ומקצועי. קיבלתי ארגז כלים להמשך החיים איך להתמודד, ויותר מזה איך לראות ולתפוס את החיים. מדובר במלכה ❤"
    },
    {
      text: "הגעתי לשני בעקבות תהליך רגשי עם הבן שלי. היא ליוותה אותנו בצורה מאוד אישית ובאוזן קשבת. ניתן היה להבחין בשינוי שהבן שלי עבר כבר בתחילת הדרך. האווירה במפגשים מאוד נעימה והבן שלי הגיע למפגשים ברצון ואפילו חיכה להם. ממליצה בחום  ♥"
    },
    {
      text: "שני ליוותה את בתי בת ה-7  ברגישות, קשב ואמפתיה אמיתית. היא יצרה חיבור מיוחד עם בתי והפכה את המפגשים לחוויה חיובית ומעצימה. ראינו שינוי מדהים בביתנו. היא רכשה כלים מעשיים מה שגורם לה להיות היום רגועה, בטוחה בעצמה ומלאה שמחה. אנחנו אסירי תודה על המקצועיות, הסבלנות והלב הרחב של שני. ממליצה בחום רב!"
    },
    {
      text: "הגעתי לשני בתקופה לא פשוטה, מלאה בלבול וחששות. כבר במפגש הראשון הרגשתי שאני במקום בטוח — היא מקשיבה באמת, בלי לשפוט, ויודעת לראות לעומק מה שאני בעצמי לא הצלחתי לשים עליו את האצבע. במהלך התהליך עם שני עברתי שינוי משמעותי: למדתי להקשיב לעצמי, לזהות את החוזקות שבי, ולשחרר פחדים שהחזיקו אותי הרבה זמן. הכלים שקיבלתי ממשיכים ללוות אותי ביום-יום, וההשפעה שלהם מורגשת בכל תחום בחיים שלי. שני היא שילוב נדיר של מקצועיות, רגישות ונשמה גדולה. אני מודה על כל רגע בתהליך וממליץ בחום לכל מי שרוצה לצמוח, להתחזק ולמצוא שלווה מבפנים."
    }
  ];

  const galleryImages = [
    { src: galleryImage1, alt: "העצמה וצמיחה אישית" },
    { src: galleryImage2, alt: "חופש ופריחה פנימית" },
    { src: galleryImage3, alt: "חיבור ומשחק" },
    { src: galleryImage4, alt: "רגעי שקט ופריחה" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0]" dir="rtl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        body {
          font-family: 'Assistant', sans-serif;
        }
        
        .playfair {
          font-family: 'Playfair Display', serif;
        }
        
        /* Scroll Animation Styles */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-animate-delay-1 {
          transition-delay: 0.1s;
        }
        
        .scroll-animate-delay-2 {
          transition-delay: 0.2s;
        }
        
        .scroll-animate-delay-3 {
          transition-delay: 0.3s;
        }
        
        .scroll-animate-delay-4 {
          transition-delay: 0.4s;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Gallery hover effect */
        .gallery-image {
          transition: all 0.5s ease;
        }
        
        .gallery-image:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(61, 90, 92, 0.3);
        }

        /* Wave Divider */
        .wave-divider {
          position: relative;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }
        
        .wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 60px;
        }
        
        @media (max-width: 768px) {
          .wave-divider svg {
            height: 40px;
          }
        }
      `}</style>
      
      {/* Elegant Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Navigation Links - Center */}
            <div className="hidden md:flex items-center gap-8 mx-auto">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-lg font-medium text-[#3D5A5C] hover:text-[#4A6B6D] transition-colors duration-300"
              >
                דף הבית
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-lg font-medium text-[#3D5A5C] hover:text-[#4A6B6D] transition-colors duration-300"
              >
                אודות
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-lg font-medium text-[#3D5A5C] hover:text-[#4A6B6D] transition-colors duration-300"
              >
                תחומי התמחות
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-lg font-medium text-[#3D5A5C] hover:text-[#4A6B6D] transition-colors duration-300"
              >
                המלצות
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-lg font-medium text-white bg-[#3D5A5C] hover:bg-[#4A6B6D] px-7 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              >
                צור קשר
              </button>
            </div>
            
            {/* Mobile Menu Button - Left Side */}
            <button 
              className="md:hidden text-[#3D5A5C] hover:text-[#4A6B6D] transition-colors"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) menu.classList.toggle('hidden');
              }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden pb-4 pt-2">
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => {
                  scrollToSection('hero');
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('hidden');
                }}
                className="text-lg font-medium text-[#3D5A5C] hover:text-[#4A6B6D] py-3 px-4 rounded-lg hover:bg-[#F8F6F0] transition-all duration-300 text-right"
              >
                דף הבית
              </button>
              <button 
                onClick={() => {
                  scrollToSection('about');
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('hidden');
                }}
                className="text-lg font-medium text-[#3D5A5C] hover:text-[#4A6B6D] py-3 px-4 rounded-lg hover:bg-[#F8F6F0] transition-all duration-300 text-right"
              >
                אודות
              </button>
              <button 
                onClick={() => {
                  scrollToSection('services');
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('hidden');
                }}
                className="text-lg font-medium text-[#3D5A5C] hover:text-[#4A6B6D] py-3 px-4 rounded-lg hover:bg-[#F8F6F0] transition-all duration-300 text-right"
              >
                תחומי התמחות
              </button>
              <button 
                onClick={() => {
                  scrollToSection('testimonials');
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('hidden');
                }}
                className="text-lg font-medium text-[#3D5A5C] hover:text-[#4A6B6D] py-3 px-4 rounded-lg hover:bg-[#F8F6F0] transition-all duration-300 text-right"
              >
                המלצות
              </button>
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('hidden');
                }}
                className="text-lg font-medium text-white bg-[#3D5A5C] hover:bg-[#4A6B6D] py-3 px-4 rounded-lg transition-all duration-300 text-right"
              >
                צור קשר
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24"></div>
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-b from-white to-[#F8F6F0] pt-8 md:pt-12 pb-4 md:pb-6">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Logo Image */}
              <div className="w-full mx-auto scroll-animate" style={{ maxWidth: '700px' }}>
                <img 
                  src={hacarmelImage}
                  alt="לפרוח מבפנים - שני אלימלך" 
                  style={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                    opacity: 1,
                    visibility: 'visible'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="wave-divider">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="#F8F6F0"/>
          </svg>
        </div>

        {/* About Section */}
<section id="about" className="relative bg-[#F8F6F0] pt-6 md:pt-8 pb-12 md:pb-16">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="mb-2 text-center text-3xl md:text-4xl font-bold text-[#2C3E3F] playfair scroll-animate">
        <span className="block text-[#3D5A5C] text-5xl md:text-6xl mb-6">נעים להכיר</span>
        <span className="block">שני אלימלך | מאמנת רגשית ומאסטר ב-NLP</span>
      </h2>
      
      <div className="space-y-6 text-center max-w-3xl mx-auto">
        <p className="text-lg md:text-xl leading-relaxed text-[#5A6E6F] font-medium scroll-animate scroll-animate-delay-1">
          נשואה לחבר הכי טוב שלי ואמא לשלושה ילדים אהובים.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-[#5A6E6F] scroll-animate scroll-animate-delay-1">
          אני מלווה ילדים, נוער ומבוגרים בתהליכי שינוי, צמיחה וחיבור לעצמם, בשילוב כלים מעולמות ה-NLP, הפסיכולוגיה החיובית, הדמיון המודרך ויומן המסע.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-[#5A6E6F] scroll-animate scroll-animate-delay-2">
          הדרך המקצועית שלי התחילה מתוך מסע אישי: רצון להבין את עצמי לעומק, לרפא כאבים, לזהות חוזקות, וליצור חיים מדויקים יותר. התהליכים שעברתי הובילו אותי לתשוקה הגדולה שלי – לעזור לאחרים לראות את האור שבתוכם, לשחרר פחדים, ולהתחבר לכוחות הפנימיים שממתינים להיחשף.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-[#5A6E6F] scroll-animate scroll-animate-delay-3">
          אני מאמינה שכל אדם, בכל גיל, יכול ללמוד להקשיב לעצמו, לרפא פצעים ישנים, ולבנות מציאות של שלווה, ביטחון ואהבה.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-[#5A6E6F] font-medium scroll-animate scroll-animate-delay-3">
          בקליניקה שלי אני יוצרת מרחב בטוח, חומל ומאפשר – מקום שבו אפשר להיות, להרגיש, להשתחרר ולצמוח.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Wave Divider */}
        <div className="wave-divider" style={{ backgroundColor: '#F8F6F0' }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#FFFFFF"/>
          </svg>
        </div>

        {/* Services Section */}
        <section id="services" className="relative bg-white py-24 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold text-[#2C3E3F] playfair scroll-animate">
              תחומי התמחות
            </h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={index} 
                    className={`scroll-animate scroll-animate-delay-${index + 1} group border border-[#3D5A5C]/20 bg-[#F8F6F0] hover:border-[#3D5A5C] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
                    onClick={service.onClick}
                  >
                    <CardHeader className="space-y-4 pb-4">
                      <div className="mx-auto w-14 h-14 rounded-full bg-white flex items-center justify-center transition-all duration-500 group-hover:bg-[#3D5A5C]">
                        <IconComponent className="w-7 h-7 text-[#3D5A5C] transition-all duration-500 group-hover:text-white" />
                      </div>
                      <CardTitle className="text-center text-xl text-[#2C3E3F] playfair">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-base leading-relaxed text-[#5A6E6F]">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="wave-divider" style={{ backgroundColor: '#FFFFFF' }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#F8F6F0"/>
          </svg>
        </div>

        {/* Gallery Section */}
        <section id="gallery" className="relative bg-[#F8F6F0] py-24 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-6 text-center text-4xl md:text-5xl font-bold text-[#2C3E3F] playfair scroll-animate">
              מסע של צמיחה
            </h2>
            <p className="mb-16 text-center text-xl text-[#5A6E6F] max-w-2xl mx-auto scroll-animate scroll-animate-delay-1">
              כל מסע מתחיל בצעד קטן - צעד לעבר העצמה, חופש ופריחה פנימית
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className={`scroll-animate scroll-animate-delay-${index + 1} overflow-hidden rounded-2xl shadow-lg border-2 border-[#3D5A5C]/20`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dialogs */}
        <Dialog open={isNlpDialogOpen} onOpenChange={setIsNlpDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto mx-4 sm:mx-auto bg-white" dir="rtl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-center mb-6 text-[#2C3E3F] playfair">NLP - תכנות נוירו-לשוני</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-right space-y-6 text-base leading-relaxed text-[#5A6E6F]" dir="rtl">
              <p>
                <strong>NLP</strong> (ראשי תיבות של Neuro-Linguistic Programming) – בעברית: תכנות נוירו-לשוני – היא שיטה לפיתוח אישי ולשינוי דפוסי חשיבה, רגש והתנהגות.
              </p>
              
              <p>
                הרעיון המרכזי הוא שהמוח, השפה וההתנהגות שלנו מחוברים זה לזה:
              </p>
              
              <ul className="space-y-3 mr-6">
                <li>
                  <strong>Neuro (נוירו)</strong> – מתייחס לאופן שבו אנו חווים את העולם דרך החושים והמחשבות.
                </li>
                <li>
                  <strong>Linguistic (לינגוויסטי)</strong> – עוסק בשפה שבה אנו משתמשים, הן עם אחרים והן עם עצמנו (המחשבות שלנו הן גם סוג של שפה).
                </li>
                <li>
                  <strong>Programming (תכנות)</strong> – מדבר על כך שניתן "לתכנת מחדש" דפוסים והרגלים לא מיטיבים, וליצור מחשבות והתנהגויות חדשות שתומכות בנו.
                </li>
              </ul>
              
              <div className="bg-[#F8F6F0] p-6 rounded-lg space-y-3 border border-[#3D5A5C]/20">
                <p className="font-semibold text-lg text-[#2C3E3F]">באמצעות כלים מעשיים של NLP ניתן:</p>
                <ul className="space-y-2 mr-6">
                  <li>✨ לשחרר פחדים וחרדות</li>
                  <li>✨ לחזק ביטחון עצמי</li>
                  <li>✨ לשנות דפוסי חשיבה מגבילים</li>
                  <li>✨ לשפר תקשורת עם אחרים ועם עצמנו</li>
                  <li>✨ להציב מטרות ולהשיג אותן בקלות ובהנאה</li>
                </ul>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Dialog open={isPsychologyDialogOpen} onOpenChange={setIsPsychologyDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto mx-4 sm:mx-auto bg-white" dir="rtl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-center mb-6 text-[#2C3E3F] playfair">פסיכולוגיה חיובית</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-right space-y-6 text-base leading-relaxed text-[#5A6E6F]" dir="rtl">
              <p>
                גישה טיפולית שמתמקדת לא רק בקשיים ובבעיות – אלא בעיקר בחוזקות, במשאבים ובדברים הטובים שבאדם ובחייו.
              </p>
              
              <p>
                המטרה היא לעזור לאדם לגלות מה גורם לו לפרוח, להרגיש משמעות, סיפוק ואושר, ולבנות הרגלים שמחזקים תחושת שמחה, הכרת תודה ואופטימיות.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Dialog open={isImaginationDialogOpen} onOpenChange={setIsImaginationDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto mx-4 sm:mx-auto bg-white" dir="rtl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-center mb-6 text-[#2C3E3F] playfair">דימיון מודרך</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-right space-y-6 text-base leading-relaxed text-[#5A6E6F]" dir="rtl">
              <p>
                שיטה טיפולית עדינה ועוצמתית, המשתמשת בכוחו של הדמיון כדי לעזור לאדם להתחבר לעולם הפנימי שלו — לרגשות, לזיכרונות ולכוחות הריפוי שבו.
              </p>
              
              <p>
                במהלך הטיפול, המטפל מנחה את המטופל בדמיון לתמונות, סיטואציות או מסעות פנימיים, שמטרתם להרגיע, לשחרר מתחים, לעבד רגשות, וליצור שינוי חיובי מבפנים.
              </p>
              
              <p>
                הדמיון מאפשר לגוף ולנפש לעבוד יחד – כך שהתהליכים הרגשיים הופכים לחוויה עמוקה, מרגיעה ומשחררת.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Dialog open={isMindfulnessDialogOpen} onOpenChange={setIsMindfulnessDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto mx-4 sm:mx-auto bg-white" dir="rtl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-center mb-6 text-[#2C3E3F] playfair">מיינדפולנס (קשיבות)</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-right space-y-6 text-base leading-relaxed text-[#5A6E6F]" dir="rtl">
              <p>
                שיטה שמלמדת אותנו להיות נוכחים ברגע הזה – בלי שיפוט, ועם קבלה וחמלה.
              </p>
              
              <p>
                דרך נשימה, תשומת לב לגוף ולמחשבות, אנחנו לומדים להרגיע את המחשבות, להפחית מתח וחרדה, ולהתחבר לשקט הפנימי שלנו.
              </p>
            </DialogDescription>
          </DialogContent>
        </Dialog>

        <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
          <DialogContent className="max-w-md mx-4 sm:mx-auto bg-white" dir="rtl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4 text-[#2C3E3F] playfair">שלחו מייל</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-center space-y-6" dir="rtl">
              <div className="bg-[#F8F6F0] p-4 rounded-lg border border-[#3D5A5C]/20">
                <p className="text-lg font-medium text-[#2C3E3F] break-all" dir="ltr">
                  {emailAddress}
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <Button
                  onClick={handleCopyEmail}
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 text-lg border-2 border-[#3D5A5C]/30 hover:bg-[#F8F6F0] hover:border-[#3D5A5C] transition-all duration-300"
                >
                  {emailCopied ? (
                    <>
                      <Check className="h-5 w-5" />
                      הועתק בהצלחה!
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5" />
                      העתק כתובת מייל
                    </>
                  )}
                </Button>
                
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md border-2 border-[#3D5A5C]/30 bg-white font-medium text-lg hover:bg-[#F8F6F0] hover:border-[#3D5A5C] transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                  פתח בתוכנת המייל
                </a>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>

        {/* Testimonials Section */}
        <section id="testimonials" className="relative bg-white py-24 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold text-[#2C3E3F] playfair scroll-animate">
              המלצות
            </h2>
            <div className="mx-auto max-w-3xl relative scroll-animate scroll-animate-delay-1">
              <div
                ref={testimonialRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="select-none touch-pan-y"
              >
                <Card className="border border-[#3D5A5C]/20 bg-[#F8F6F0] shadow-lg">
                  <CardContent className="pt-10 pb-12 px-8">
                    <div className="text-center space-y-6">
                      <div className="text-4xl text-[#3D5A5C] mb-4">❝</div>
                      <p className="text-lg md:text-xl leading-relaxed text-[#5A6E6F] italic">
                        {testimonials[currentTestimonial].text}
                      </p>
                      <div className="text-4xl text-[#3D5A5C] mt-4 rotate-180">❝</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Navigation Arrows - Desktop Only */}
              <button
                onClick={prevTestimonial}
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-[-60px] bg-white hover:bg-[#3D5A5C] text-[#3D5A5C] hover:text-white rounded-full p-3 shadow-lg border-2 border-[#3D5A5C]/30 transition-all duration-300 hover:scale-110 items-center justify-center"
                aria-label="המלצה קודמת"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-[-60px] bg-white hover:bg-[#3D5A5C] text-[#3D5A5C] hover:text-white rounded-full p-3 shadow-lg border-2 border-[#3D5A5C]/30 transition-all duration-300 hover:scale-110 items-center justify-center"
                aria-label="המלצה הבאה"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Swipe Indicator for Mobile */}
              <div className="md:hidden text-center mt-4 text-sm text-[#5A6E6F] opacity-60">
                החליקי ימינה או שמאלה למעבר בין המלצות
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-[#3D5A5C] w-8' 
                        : 'bg-[#3D5A5C]/30 hover:bg-[#3D5A5C]'
                    }`}
                    aria-label={`עבור להמלצה ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="wave-divider" style={{ backgroundColor: '#FFFFFF' }}>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#F8F6F0"/>
          </svg>
        </div>

        {/* Contact Section */}
        <section id="contact" className="relative bg-[#F8F6F0] py-24 md:py-32">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold text-[#2C3E3F] playfair scroll-animate">
              צרו קשר
            </h2>
            <div className="mx-auto max-w-2xl scroll-animate scroll-animate-delay-1">
              <Card className="border border-[#3D5A5C]/20 bg-white shadow-lg">
                <CardContent className="pt-10 pb-12">
                  <div className="space-y-10 text-center">
                    <p className="text-2xl md:text-3xl leading-relaxed text-[#5A6E6F]">
                      מוזמנים ליצור קשר לקביעת פגישה או לכל שאלה
                    </p>
                    <div className="space-y-4">
                      <p className="text-xl md:text-2xl text-[#2C3E3F]">
                        <strong>טלפון:</strong> <span dir="ltr">054-5134815</span>
                      </p>
                      <p className="text-xl md:text-2xl text-[#2C3E3F] break-all">
                        <strong>מייל:</strong> <span dir="ltr">san02484@gmail.com</span>
                      </p>
                      <p className="text-xl md:text-2xl text-[#2C3E3F]">
                        <strong>קליניקה:</strong> נס ציונה / ראשון לציון
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                      <a 
                        href="tel:0545134815"
                        className="inline-flex items-center justify-center gap-3 min-w-[220px] h-14 text-xl rounded-md border-2 border-[#3D5A5C]/30 bg-white px-8 font-medium shadow-sm hover:bg-[#F8F6F0] hover:border-[#3D5A5C] transition-all duration-300"
                      >
                        <Phone className="h-6 w-6" />
                        התקשרו אלי
                      </a>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="gap-3 min-w-[220px] h-14 text-xl border-2 border-[#3D5A5C]/30 hover:bg-[#F8F6F0] hover:border-[#3D5A5C] transition-all duration-300"
                        onClick={() => setIsEmailDialogOpen(true)}
                      >
                        <Mail className="h-6 w-6" />
                        שלחו מייל
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-[#3D5A5C] border-t border-[#4A6B6D]/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* About */}
            <div className="text-center md:text-right">
              <h3 className="text-lg font-bold text-white mb-4 playfair">אודות</h3>
              <p className="text-[#E8F0F1] leading-relaxed">
                מרחב בטוח לצמיחה אישית. ליווי רגשי מקצועי בשילוב NLP ופסיכולוגיה חיובית.
              </p>
            </div>
            
            {/* Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-4 playfair">יצירת קשר</h3>
              <div className="space-y-2 text-[#E8F0F1]">
                <p dir="ltr">054-5134815</p>
                <p dir="ltr" className="break-all">san02484@gmail.com</p>
                <p>נס ציונה / ראשון לציון</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#4A6B6D]/30 text-center">
            <p className="text-[#E8F0F1] text-base">© 2025 שני אלימלך - כל הזכויות שמורות</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/972545134815"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="פנה אלינו בוואטסאפ"
      >
        <svg viewBox="0 0 32 32" className="w-9 h-9" fill="currentColor">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.957 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.231-0.403 0.26-0.748 0.087s-1.461-0.539-2.78-1.716c-1.028-0.918-1.723-2.053-1.924-2.398s-0.022-0.534 0.152-0.707c0.156-0.155 0.346-0.403 0.518-0.605s0.231-0.346 0.347-0.575c0.116-0.231 0.058-0.432-0.028-0.605s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.431-0.010-0.661-0.010s-0.603 0.087-0.919 0.432c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.231 2.4 3.868 5.856 5.341 3.456 1.474 3.456 0.981 4.080 0.92s2.049-0.836 2.337-1.646c0.289-0.807 0.289-1.501 0.201-1.646s-0.315-0.231-0.66-0.403z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;