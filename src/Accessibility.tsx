import { useState } from 'react';
import { Accessibility as AccessibilityIcon, Sun, Moon, Type, AlignLeft } from 'lucide-react';

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  const toggleContrast = () => {
    setContrast(!contrast);
    if (!contrast) {
      document.documentElement.style.filter = 'contrast(1.2) brightness(0.9)';
      document.documentElement.style.backgroundColor = '#000';
    } else {
      document.documentElement.style.filter = 'none';
      document.documentElement.style.backgroundColor = '';
    }
  };

  const changeFontSize = (delta: number) => {
    const newSize = fontSize + delta;
    if (newSize >= 80 && newSize <= 150) {
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
    }
  };

  const resetAccessibility = () => {
    setContrast(false);
    setFontSize(100);
    document.documentElement.style.filter = 'none';
    document.documentElement.style.fontSize = '100%';
    document.documentElement.style.backgroundColor = '';
    document.querySelectorAll('a').forEach(a => {
      (a as HTMLElement).style.textDecoration = '';
      (a as HTMLElement).style.fontWeight = '';
    });
  };

  return (
    <div className="fixed bottom-24 left-6 z-[100]" dir="rtl">
      {/* כפתור נגישות צף */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-transform hover:scale-110"
        title="תפריט נגישות"
      >
        <AccessibilityIcon className="w-7 h-7" />
      </button>

      {/* תפריט נגישות */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white border-2 border-gray-200 rounded-2xl p-4 shadow-2xl w-64 animate-in fade-in slide-in-from-bottom-4 text-black">
          <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 text-right">נגישות</h3>
          
          <div className="space-y-4">
            <button 
              onClick={toggleContrast}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded-lg transition-colors text-right"
            >
              <span>ניגודיות גבוהה</span>
              {contrast ? <Sun className="w-5 h-5 text-blue-600" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>

            <div className="flex items-center justify-between p-2">
              <span className="flex items-center gap-2"><Type className="w-5 h-5" /> גודל טקסט</span>
              <div className="flex gap-2">
                <button onClick={() => changeFontSize(10)} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md font-bold text-black">+</button>
                <button onClick={() => changeFontSize(-10)} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md font-bold text-black">-</button>
              </div>
            </div>

            <button 
              onClick={() => {
                document.querySelectorAll('a').forEach(a => {
                  (a as HTMLElement).style.textDecoration = 'underline';
                  (a as HTMLElement).style.fontWeight = 'bold';
                });
              }}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded-lg transition-colors text-right"
            >
              <span>הדגשת קישורים</span>
              <AlignLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button 
              onClick={resetAccessibility}
              className="w-full mt-2 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition-colors"
            >
              ביטול נגישות
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;