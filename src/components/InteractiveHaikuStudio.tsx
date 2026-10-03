import React, { useState, useEffect } from 'react';
import {
  MODULE_1_EXERCISE,
  MODULE_2_EXERCISE,
  MODULE_3_EXERCISE,
  MODULE_4_EXERCISE,
  MODULE_5_EXERCISE
} from '../data/courseData';
import {
  Bell,
  Play,
  Pause,
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  Copy,
  Check,
  BookmarkPlus,
  BookOpen,
  Sparkles,
  Feather
} from 'lucide-react';
import { zenAudio } from '../utils/audio';
import { studentStorage } from '../utils/studentStorage';

interface InteractiveHaikuStudioProps {
  onOpenNotebook?: () => void;
  defaultModuleId?: number;
}

export const InteractiveHaikuStudio: React.FC<InteractiveHaikuStudioProps> = ({
  onOpenNotebook,
  defaultModuleId = 1,
}) => {
  const [selectedModule, setSelectedModule] = useState<1 | 2 | 3 | 4 | 5>(
    (defaultModuleId as any) || 1
  );

  // Timer state (15 min default = 900 seconds)
  const [secondsLeft, setSecondsLeft] = useState(900);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Student inputs
  const [observationContext, setObservationContext] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [reflectionText, setReflectionText] = useState('');
  const [saveSuccessMessage, setSaveSuccessMessage] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);

  const currentExercise =
    selectedModule === 1
      ? MODULE_1_EXERCISE
      : selectedModule === 2
      ? MODULE_2_EXERCISE
      : selectedModule === 3
      ? MODULE_3_EXERCISE
      : selectedModule === 4
      ? MODULE_4_EXERCISE
      : MODULE_5_EXERCISE;

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      zenAudio.playSingingBowl(4);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, secondsLeft]);

  const toggleTimer = () => {
    if (!isTimerRunning && secondsLeft === 900) {
      zenAudio.playSingingBowl(3);
    }
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = (seconds: number) => {
    setIsTimerRunning(false);
    setSecondsLeft(seconds);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Ego / Artifice Scanner
  const fullVerse = `${line1} ${line2} ${line3}`.toLowerCase();

  const egoWords = ['yo', 'mi', 'mis', 'me', 'conmigo', 'siento', 'pienso', 'creo', 'mi alma', 'alma', 'dolor'];
  const metaphorWords = ['como', 'parece', 'cual', 'semeja', 'recuerda a', 'espejo de', 'manto de'];
  const emotionAdjectives = ['triste', 'bello', 'hermoso', 'mágico', 'cruel', 'sublime', 'maravilloso', 'horrible'];

  const detectedEgo = egoWords.filter((w) => new RegExp(`\\b${w}\\b`, 'i').test(fullVerse));
  const detectedMetaphors = metaphorWords.filter((w) => new RegExp(`\\b${w}\\b`, 'i').test(fullVerse));
  const detectedEmotions = emotionAdjectives.filter((w) => new RegExp(`\\b${w}\\b`, 'i').test(fullVerse));

  const totalWarnings = detectedEgo.length + detectedMetaphors.length + detectedEmotions.length;

  const countApproxSyllables = (text: string) => {
    if (!text.trim()) return 0;
    // Approximating Spanish vocalic nuclei
    const clean = text.trim().toLowerCase();
    const vowels = clean.match(/[aeiouáéíóúü]/gi);
    return vowels ? vowels.length : 0;
  };

  const handleSaveToNotebook = () => {
    if (!line1.trim() && !line2.trim() && !line3.trim()) return;

    studentStorage.saveHaiku({
      moduleId: selectedModule,
      moduleTitle: `Módulo ${selectedModule}: ${currentExercise.title}`,
      lines: [
        line1.trim() || '...',
        line2.trim() || '...',
        line3.trim() || '...',
      ],
      context: observationContext.trim(),
      reflection: reflectionText.trim(),
    });

    setSaveSuccessMessage(true);
    setTimeout(() => setSaveSuccessMessage(false), 3000);
  };

  const handleCopyText = () => {
    const text = `${line1}\n${line2}\n${line3}\n\n— Haiku autónomo (Módulo ${selectedModule})\n${observationContext ? `Contexto: ${observationContext}\n` : ''}${reflectionText ? `Reflexión: ${reflectionText}` : ''}`;
    navigator.clipboard.writeText(text);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Exercise selector and header */}
      <div className="p-6 bg-stone-100/70 border border-stone-200 rounded-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold">
            Taller Contemplativo Autónomo
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 1 as const, label: 'M1: Mushin' },
              { id: 2 as const, label: 'M2: Satori' },
              { id: 3 as const, label: 'M3: Sabi & Aware' },
              { id: 4 as const, label: 'M4: Kigo Local' },
              { id: 5 as const, label: 'M5: Jisei' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModule(m.id)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                  selectedModule === m.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-300'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif font-bold text-stone-900">
            {currentExercise.title}
          </h3>
          <p className="text-stone-700 text-sm mt-1 leading-relaxed">
            {currentExercise.objective}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contemplation Timer & Guide (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-5 bg-white border border-stone-200 rounded-xl shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500">
                Fase 1: Silencio Interior
              </h4>
              <Bell className="w-3.5 h-3.5 text-stone-400" />
            </div>

            {/* Timer visual display */}
            <div className="text-center py-6 border border-stone-100 rounded-lg bg-stone-50/50">
              <div className="text-4xl sm:text-5xl font-mono font-light tracking-tight text-stone-900 mb-1">
                {formatTime(secondsLeft)}
              </div>
              <span className="text-[11px] text-stone-500 font-serif italic">
                {isTimerRunning ? 'Respira con calma · Mente en reposo' : 'Tiempo sugerido de contemplación'}
              </span>

              <div className="mt-5 flex items-center justify-center gap-2">
                <button
                  onClick={toggleTimer}
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md transition-all shadow-xs ${
                    isTimerRunning
                      ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isTimerRunning ? 'Pausar' : 'Comenzar Silencio'}</span>
                </button>

                <button
                  onClick={() => resetTimer(900)}
                  title="Reiniciar a 15 min"
                  className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-md transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1 mt-3">
                <button
                  onClick={() => resetTimer(300)}
                  className="text-[10px] text-stone-400 hover:text-stone-700 px-1.5 py-0.5 rounded hover:bg-stone-100"
                >
                  5m
                </button>
                <span className="text-stone-300">·</span>
                <button
                  onClick={() => resetTimer(600)}
                  className="text-[10px] text-stone-400 hover:text-stone-700 px-1.5 py-0.5 rounded hover:bg-stone-100"
                >
                  10m
                </button>
                <span className="text-stone-300">·</span>
                <button
                  onClick={() => resetTimer(900)}
                  className="text-[10px] text-stone-400 hover:text-stone-700 px-1.5 py-0.5 rounded hover:bg-stone-100"
                >
                  15m
                </button>
              </div>
            </div>

            {/* Steps Guide */}
            <div className="mt-5 space-y-3">
              <h5 className="text-xs font-semibold text-stone-800">
                Pasos de la Práctica Autónoma:
              </h5>
              <div className="space-y-2 text-xs text-stone-600">
                {currentExercise.steps.map((s, i) => (
                  <div key={i} className="p-2.5 rounded bg-stone-50 border border-stone-100">
                    <span className="font-semibold text-stone-800 block text-[11px]">
                      {s.phase}
                    </span>
                    <p className="mt-1 text-stone-600 leading-relaxed">
                      {s.instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Haiku Editor & Artifice Auditor (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 bg-white border border-stone-200 rounded-xl shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500">
                Fase 2: Registro del Instante
              </h4>
              <span className="text-xs text-stone-400 font-serif italic">
                3 versos limpios de artificio
              </span>
            </div>

            {/* Context field */}
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Entorno, objeto o momento contemplado:
              </label>
              <input
                type="text"
                value={observationContext}
                onChange={(e) => setObservationContext(e.target.value)}
                placeholder="Ej: La lluvia sobre las hojas del limonero / El té enfriándose en la mesa..."
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900 font-sans"
              />
            </div>

            {/* The 3 Lines Inputs */}
            <div className="space-y-3 p-4 bg-[#FBF9F5] border border-stone-200/80 rounded-lg">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1 font-mono">
                  <span>Línea 1 (El marco / contexto):</span>
                  <span className="text-[11px] text-stone-400">
                    ~{countApproxSyllables(line1)} sílabas
                  </span>
                </div>
                <input
                  type="text"
                  value={line1}
                  onChange={(e) => setLine1(e.target.value)}
                  placeholder="En la rama seca..."
                  className="w-full text-base font-serif px-3.5 py-2 bg-white border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1 font-mono">
                  <span>Línea 2 (El hecho mínimo / acción):</span>
                  <span className="text-[11px] text-stone-400">
                    ~{countApproxSyllables(line2)} sílabas
                  </span>
                </div>
                <input
                  type="text"
                  value={line2}
                  onChange={(e) => setLine2(e.target.value)}
                  placeholder="un cuervo se ha posado:"
                  className="w-full text-base font-serif px-3.5 py-2 bg-white border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1 font-mono">
                  <span>Línea 3 (La resonancia del instante):</span>
                  <span className="text-[11px] text-stone-400">
                    ~{countApproxSyllables(line3)} sílabas
                  </span>
                </div>
                <input
                  type="text"
                  value={line3}
                  onChange={(e) => setLine3(e.target.value)}
                  placeholder="tarde de otoño."
                  className="w-full text-base font-serif px-3.5 py-2 bg-white border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            {/* Reflection Textarea */}
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                Reflexión personal del proceso (¿Qué artificios o juicios tuviste que desarmar?):
              </label>
              <textarea
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                rows={3}
                placeholder="Escribe brevemente tu vivencia: cómo lograste soltar el ego lírico o qué sentiste durante el silencio..."
                className="w-full text-xs p-3 bg-stone-50 border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900 font-sans leading-relaxed"
              />
            </div>

            {/* Real-time Artifice Auditor Panel */}
            <div className="p-4 rounded-lg border border-stone-200 bg-stone-50/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  Auditor de Artificios y Ego Lírico
                </span>
                <span
                  className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full ${
                    totalWarnings === 0
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {totalWarnings === 0 ? '✓ Verso Libre de Artificio' : `⚠️ ${totalWarnings} alerta(s)`}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className={`p-2.5 rounded border ${detectedEgo.length > 0 ? 'bg-amber-50 border-amber-300' : 'bg-white border-stone-200'}`}>
                  <span className="font-mono text-[10px] text-stone-400 uppercase block">Ego / Yo / Sentimiento</span>
                  <p className="text-xs font-medium text-stone-800 mt-0.5">
                    {detectedEgo.length > 0 ? `Detectado: "${detectedEgo.join(', ')}"` : '✓ Sin huellas de ego'}
                  </p>
                </div>

                <div className={`p-2.5 rounded border ${detectedMetaphors.length > 0 ? 'bg-amber-50 border-amber-300' : 'bg-white border-stone-200'}`}>
                  <span className="font-mono text-[10px] text-stone-400 uppercase block">Metáforas / Símiles</span>
                  <p className="text-xs font-medium text-stone-800 mt-0.5">
                    {detectedMetaphors.length > 0 ? `Detectado: "${detectedMetaphors.join(', ')}"` : '✓ Imagen directa pura'}
                  </p>
                </div>

                <div className={`p-2.5 rounded border ${detectedEmotions.length > 0 ? 'bg-amber-50 border-amber-300' : 'bg-white border-stone-200'}`}>
                  <span className="font-mono text-[10px] text-stone-400 uppercase block">Adjetivos Emocionales</span>
                  <p className="text-xs font-medium text-stone-800 mt-0.5">
                    {detectedEmotions.length > 0 ? `Detectado: "${detectedEmotions.join(', ')}"` : '✓ Sin juicios de valor'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSaveToNotebook}
                  disabled={!line1.trim() && !line2.trim() && !line3.trim()}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
                >
                  <BookmarkPlus className="w-4 h-4" />
                  <span>Guardar en mi Cuaderno</span>
                </button>

                {onOpenNotebook && (
                  <button
                    onClick={onOpenNotebook}
                    className="flex items-center gap-1.5 px-3 py-2 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-medium rounded-md transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                    <span>Ver mi Cuaderno</span>
                  </button>
                )}
              </div>

              <button
                onClick={handleCopyText}
                className="flex items-center gap-1.5 px-3 py-2 text-stone-600 hover:text-stone-900 text-xs font-medium transition-colors"
              >
                {hasCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{hasCopied ? '¡Copiado!' : 'Copiar texto'}</span>
              </button>
            </div>

            {saveSuccessMessage && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-xs flex items-center justify-between animate-fade-in">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ¡Haiku guardado con éxito en tu Cuaderno de Campo!
                </span>
                {onOpenNotebook && (
                  <button
                    onClick={onOpenNotebook}
                    className="text-emerald-950 font-semibold underline text-xs ml-3"
                  >
                    Abrir Cuaderno
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
