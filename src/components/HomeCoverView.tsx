import React from 'react';
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Heart,
  Feather,
  Zap,
  MapPin,
  Clock,
  CheckCircle2,
  Bell,
  GraduationCap,
  BookmarkCheck,
  Check
} from 'lucide-react';
import heroImage from '../assets/images/haiku_hero_zen_contemplation_1791026778985.jpg';
import calligraphyImage from '../assets/images/calligraphy_mushin_washi_1791026789294.jpg';
import { zenAudio } from '../utils/audio';
import { studentStorage } from '../utils/studentStorage';

interface HomeCoverViewProps {
  onStartCourse: () => void;
  onSelectModule: (modId: number) => void;
  onOpenNotebook: () => void;
  onGoToStudio: () => void;
}

export const HomeCoverView: React.FC<HomeCoverViewProps> = ({
  onStartCourse,
  onSelectModule,
  onOpenNotebook,
  onGoToStudio,
}) => {
  const handlePlayChime = () => {
    zenAudio.playSingingBowl(3.5);
  };

  const completedList = studentStorage.getProgress().completedModules;

  const modulePillars = [
    {
      id: 1,
      num: 'Módulo 1',
      title: 'La trampa de la estructura y el abandono del intelecto',
      desc: 'Desmontamos el mito del 5-7-5 occidental. Diferenciamos el Haiku del Senryū y cultivamos la mente vacía de ego (Mushin) sin metáforas ni artificios.',
      tag: 'Forma & Mushin',
      icon: Feather,
      color: 'border-amber-200 bg-amber-50/50 text-amber-900',
    },
    {
      id: 2,
      num: 'Módulo 2',
      title: 'El Satori: La revelación y el chispazo del instante',
      desc: 'El haiku como sismógrafo del despertar cotidiano: el nanosegundo en que sujeto y objeto se funden mediante la cesura poética del Kireji.',
      tag: 'Revelación & Kireji',
      icon: Zap,
      color: 'border-stone-200 bg-stone-50 text-stone-900',
    },
    {
      id: 3,
      num: 'Módulo 3',
      title: 'El alma del Haiku: Mono no Aware y Sabi',
      desc: 'La conmovedora tristeza ante lo que se desvanece (Mono no Aware), la pátina del tiempo (Sabi) y el vacío fértil (Ma) que insinúa el misterio (Yūgen).',
      tag: 'Impermanencia & Sabi',
      icon: Heart,
      color: 'border-rose-200 bg-rose-50/50 text-rose-950',
    },
    {
      id: 4,
      num: 'Módulo 4',
      title: 'El Kigo y la adaptación a Occidente',
      desc: 'La respiración cósmica estacional (Kigo) adaptada a nuestro clima y geografía propia, superando el cliché de falsos cerezos en flor.',
      tag: 'Estación & Ecosistema',
      icon: MapPin,
      color: 'border-emerald-200 bg-emerald-50/50 text-emerald-950',
    },
    {
      id: 5,
      num: 'Módulo 5',
      title: 'Los grandes Haijin y el Jisei',
      desc: 'Las miradas canónicas de Bashō, Buson, Issa y Shiki (Ichigo Ichie) y el poema de despedida de la vida que disuelve la frontera entre vivir y morir (Shōji).',
      tag: 'Maestros & Jisei',
      icon: Sparkles,
      color: 'border-indigo-200 bg-indigo-50/50 text-indigo-950',
    },
  ];

  return (
    <article className="space-y-12 sm:space-y-16">
      {/* Hero Cover Marquee */}
      <section className="relative rounded-2xl overflow-hidden border border-stone-300/80 bg-stone-900 text-white shadow-md">
        <div className="relative min-h-[380px] sm:min-h-[460px] w-full flex flex-col justify-end">
          <img
            src={heroImage}
            alt="Jardín zen con cuenco de piedra y rocío, contemplación del Haiku"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-900/30" />

          {/* Marquee Content */}
          <div className="relative z-10 p-6 sm:p-12 max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono tracking-widest uppercase text-stone-200 border border-white/20">
                Aprendizaje Autónomo · Vía Contemplativa
              </span>
              <span className="text-stone-300 text-xs font-serif italic">
                5 Módulos · Taller de Escritura · Cuaderno Personal
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
              La Esencia del Haiku
              <span className="block text-xl sm:text-3xl lg:text-4xl text-stone-300 font-normal mt-2 italic font-serif">
                Más allá de la métrica
              </span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl font-serif">
              Desmitificamos la idea de que el haiku es un simple conteo escolar de 5-7-5 sílabas. Una experiencia amena, profunda y autónoma para reaprender a mirar el instante con los ojos limpios de ego.
            </p>

            {/* Quick Action CTA Row */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onStartCourse}
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-100 hover:bg-white text-stone-950 text-sm font-semibold rounded-lg shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Comenzar con el Módulo 1</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handlePlayChime}
                className="flex items-center gap-2 px-4 py-2.5 bg-stone-800/80 hover:bg-stone-700/90 text-stone-200 text-sm font-medium rounded-lg backdrop-blur-sm border border-stone-600/50 transition-all cursor-pointer"
                title="Tocar cuenco zen de atención plena"
              >
                <Bell className="w-4 h-4 text-amber-300" />
                <span>Cuenco Zen (Mushin)</span>
              </button>

              <button
                onClick={onOpenNotebook}
                className="flex items-center gap-2 px-4 py-2.5 bg-stone-800/80 hover:bg-stone-700/90 text-stone-200 text-sm font-medium rounded-lg backdrop-blur-sm border border-stone-600/50 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-stone-300" />
                <span>Mi Cuaderno de Campo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher & Course Designer Dedication Card */}
      <section className="bg-gradient-to-br from-[#F5EFE6] via-[#F8F5EE] to-[#EDE4D5] rounded-2xl p-6 sm:p-10 border border-stone-300/80 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none transform translate-x-20 -translate-y-20">
          <img
            src={calligraphyImage}
            alt="Caligrafía kanji decorativa"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-stone-600 text-xs font-mono uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-stone-700" />
              <span>Diseño Curricular y Cátedra</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-tight">
              Mensaje del Profesor Carlos García Torín
            </h2>

            <div className="relative pl-5 border-l-2 border-amber-700/60 text-stone-700 font-serif italic text-base sm:text-lg leading-relaxed">
              <p>
                «Aprender a escribir haiku no es memorizar un recetario métrico ni perseguir el aplauso del intelecto; es reaprender a contemplar el mundo como si fuese la primera mañana de la creación. Les deseo de corazón el mayor de los éxitos y lo mejor en este aprendizaje: que cada palabra sea un despojo y cada silencio, una revelación.»
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-900 text-amber-100 flex items-center justify-center font-serif font-bold text-base shadow-xs">
                CG
              </div>
              <div>
                <p className="font-serif font-bold text-stone-900 text-sm">
                  Prof. Carlos García Torín
                </p>
                <p className="text-xs text-stone-500 font-sans">
                  Diseñador del curso · Literatura, Poética Japonesa y Diseño Instruccional
                </p>
              </div>
            </div>
          </div>

          {/* Quick stats / highlights */}
          <div className="bg-white/85 backdrop-blur-xs p-6 rounded-xl border border-stone-200/90 shadow-xs space-y-4 shrink-0 sm:min-w-[280px]">
            <h3 className="font-serif font-bold text-stone-900 text-sm border-b border-stone-200 pb-2">
              Pilares del Aprendizaje Autónomo
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-600 font-sans">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>5 Módulos temáticos a tu propio ritmo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Autoevaluación formativa interactiva</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Taller con auditor de ego y cuenco tibetano</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cuaderno personal con guardado local privado</span>
              </li>
            </ul>

            <button
              onClick={onGoToStudio}
              className="w-full mt-2 py-2 px-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Feather className="w-3.5 h-3.5" />
              <span>Abrir Taller Contemplativo</span>
            </button>
          </div>
        </div>
      </section>

      {/* The 5-Step Learning Journey (Ruta Pedagógica) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
            Ruta de Aprendizaje Autónomo
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            El Proceso del Curso en 5 Etapas
          </h2>
          <p className="text-stone-600 text-sm font-serif">
            Un itinerario pedagógico diseñado para desmontar el ego literario paso a paso, desde la comprensión del silencio hasta el poema de despedida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modulePillars.map((m) => {
            const Icon = m.icon;
            const isDone = completedList.includes(m.id);

            return (
              <div
                key={m.id}
                onClick={() => onSelectModule(m.id)}
                className={`group p-6 rounded-xl border ${m.color} hover:shadow-md transition-all cursor-pointer flex flex-col justify-between relative`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      {m.num}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {isDone && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200 flex items-center gap-1">
                          <Check className="w-3 h-3" /> Hecho
                        </span>
                      )}
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/80 border border-stone-200">
                        {m.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-semibold text-stone-800 group-hover:text-amber-900">
                  <span>{isDone ? 'Repasar Módulo' : 'Estudiar Módulo'}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* Quick Hub Card */}
          <div
            onClick={onStartCourse}
            className="p-6 rounded-xl border border-stone-300 bg-stone-900 text-white flex flex-col justify-between hover:bg-stone-800 transition-all cursor-pointer shadow-xs"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                Primer Paso
              </span>
              <h3 className="font-serif font-bold text-xl text-white">
                ¿Listo para iniciar la mirada sin ego?
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Adéntrate en el Módulo 1 y descubre por qué contar sílabas con los dedos es el mayor enemigo de la contemplación del haiku.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-700 flex items-center justify-between text-xs font-semibold text-amber-200">
              <span>Iniciar Ahora</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Accessible Pedagogical Manifesto */}
      <section className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
          <BookOpen className="w-5 h-5 text-stone-700" />
          <h3 className="font-serif font-bold text-xl text-stone-900">
            ¿Cómo abordar tu aprendizaje autónomo?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-600 font-sans leading-relaxed">
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-stone-900">
              1. A tu propio ritmo
            </h4>
            <p>
              No hay plazos de entrega ni calificaciones ajenas. Lee con calma y regálate pausas de silencio. Si un concepto como <em>Mushin</em> o <em>Mono no Aware</em> te conmueve, pasa tiempo en silencio antes de escribir.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-stone-900">
              2. Practica en tu Cuaderno
            </h4>
            <p>
              Usa el Taller Mushin interactivo para componer tus versos, escuchar la campana zen y chequear el auditor de ego. Guarda tus mejores creaciones en tu Cuaderno de Campo personal.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-stone-900">
              3. Autoevaluación honesta
            </h4>
            <p>
              Utiliza la herramienta de autodiagnóstico para cada módulo. Te permitirá contrastar tus versos con las cuatro premisas formativas y recibir consejos pedagógicos inmediatos.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};
