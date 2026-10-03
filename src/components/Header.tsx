import React, { useState, useEffect } from 'react';
import { Bell, BookOpen, CheckCircle } from 'lucide-react';
import { zenAudio } from '../utils/audio';
import { studentStorage } from '../utils/studentStorage';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenNotebook: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenNotebook,
}) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [haikusCount, setHaikusCount] = useState(0);

  useEffect(() => {
    const list = studentStorage.getSavedHaikus();
    setHaikusCount(list.length);
  }, [activeTab]);

  const handleRingBell = () => {
    setIsPlayingSound(true);
    zenAudio.playSingingBowl(3.5);
    setTimeout(() => setIsPlayingSound(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('inicio')}
          className="text-left group flex items-baseline gap-2 focus:outline-none cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-stone-900 group-hover:text-stone-700 transition-colors">
            La Esencia del Haiku
          </span>
          <span className="hidden lg:inline text-xs font-serif text-stone-400 italic">
            · Aprendizaje Autónomo
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-5 text-sm font-medium text-stone-600">
          <button
            onClick={() => setActiveTab('inicio')}
            className={`transition-colors pb-1 text-sm cursor-pointer ${
              activeTab === 'inicio'
                ? 'text-stone-900 border-b-2 border-stone-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => setActiveTab('modulo1')}
            className={`transition-colors pb-1 text-sm cursor-pointer ${
              activeTab === 'modulo1' || activeTab === 'teoria'
                ? 'text-stone-900 border-b-2 border-stone-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            M1
          </button>
          <button
            onClick={() => setActiveTab('modulo2')}
            className={`transition-colors pb-1 text-sm cursor-pointer ${
              activeTab === 'modulo2'
                ? 'text-stone-900 border-b-2 border-stone-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            M2
          </button>
          <button
            onClick={() => setActiveTab('modulo3')}
            className={`transition-colors pb-1 text-sm cursor-pointer ${
              activeTab === 'modulo3'
                ? 'text-stone-900 border-b-2 border-stone-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            M3
          </button>
          <button
            onClick={() => setActiveTab('modulo4')}
            className={`transition-colors pb-1 text-sm cursor-pointer ${
              activeTab === 'modulo4'
                ? 'text-stone-900 border-b-2 border-stone-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            M4
          </button>
          <button
            onClick={() => setActiveTab('modulo5')}
            className={`transition-colors pb-1 text-sm cursor-pointer ${
              activeTab === 'modulo5'
                ? 'text-stone-900 border-b-2 border-stone-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            M5
          </button>
          <button
            onClick={() => setActiveTab('taller')}
            className={`transition-colors pb-1 text-sm cursor-pointer ${
              activeTab === 'taller'
                ? 'text-stone-900 border-b-2 border-stone-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Taller Mushin
          </button>
          <button
            onClick={() => setActiveTab('comparador')}
            className={`transition-colors pb-1 text-sm cursor-pointer ${
              activeTab === 'comparador'
                ? 'text-stone-900 border-b-2 border-stone-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Comparador
          </button>
          <button
            onClick={() => setActiveTab('tarea')}
            className={`transition-colors pb-1 text-sm cursor-pointer ${
              activeTab === 'tarea'
                ? 'text-stone-900 border-b-2 border-stone-800 font-semibold'
                : 'hover:text-stone-900'
            }`}
          >
            Autoevaluación
          </button>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleRingBell}
            title="Campana de silencio Zen (Mushin)"
            className={`p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-all cursor-pointer ${
              isPlayingSound ? 'text-amber-700 bg-amber-50 animate-pulse' : ''
            }`}
            aria-label="Tocar campana de atención Zen"
          >
            <Bell className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenNotebook}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-stone-50 bg-stone-900 rounded-md hover:bg-stone-800 transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mi Cuaderno</span>
            {haikusCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 bg-amber-200 text-stone-900 rounded-full font-mono text-[10px] font-bold">
                {haikusCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
