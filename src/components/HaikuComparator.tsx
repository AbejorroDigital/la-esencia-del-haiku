import React, { useState } from 'react';
import {
  MODULE_1_COMPARISONS,
  MODULE_2_COMPARISONS,
  MODULE_3_COMPARISONS,
  MODULE_4_COMPARISONS,
  MODULE_5_COMPARISONS
} from '../data/courseData';
import { Sparkles, Info, BookOpen, Compass, Zap, MapPin, Milestone } from 'lucide-react';
import { HaikuComparisonItem } from '../types/course';

export const HaikuComparator: React.FC = () => {
  const [selectedSet, setSelectedSet] = useState<'m1' | 'm2' | 'm3' | 'm4' | 'm5'>('m5');
  const comparisons = selectedSet === 'm1'
    ? MODULE_1_COMPARISONS
    : selectedSet === 'm2'
    ? MODULE_2_COMPARISONS
    : selectedSet === 'm3'
    ? MODULE_3_COMPARISONS
    : selectedSet === 'm4'
    ? MODULE_4_COMPARISONS
    : MODULE_5_COMPARISONS;

  const [selectedItem, setSelectedItem] = useState<HaikuComparisonItem>(comparisons[0]);
  const [customVerse, setCustomVerse] = useState('');
  const [analyzedFeedback, setAnalyzedFeedback] = useState<string | null>(null);

  const testExamples = selectedSet === 'm1' ? [
    { label: 'Bashō: Estanque viejo', text: 'Un viejo estanque:\nsalta una rana,\nruido de agua.' },
    { label: 'Senryū: El prestamista', text: 'El prestamista...\ntambién mira los cerezos,\ncon cara de dinero.' },
    { label: 'Pseudo-Haiku: Flor triste', text: 'Mi alma llora,\ncomo solitaria flor silvestre\nbajo la lluvia.' },
    { label: 'Bashō: Cuervo otoñal', text: 'En la rama seca\nun cuervo se ha posado:\ntarde de otoño.' }
  ] : selectedSet === 'm2' ? [
    { label: 'Bashō: Relámpago y garza', text: 'Relámpago en la noche:\nel graznido de la garza\nrasga la oscuridad.' },
    { label: 'Inventario plano sin Satori', text: 'Veo un pájaro posado\nen una rama de roble;\nes de color pardo y canta.' },
    { label: 'Buson: Nieve y bambú', text: 'El peso de la nieve\nen el tallo de bambú:\nquiebre repentino.' },
    { label: 'Buson: Peine en la sombra', text: 'Pisé el peine de mi difunta esposa\nen la habitación a oscuras:\nun frío me recorrió el cuerpo.' }
  ] : selectedSet === 'm3' ? [
    { label: 'Bashō: Cuervo en rama seca (Sabi)', text: 'En la rama seca\nun cuervo se ha posado:\ntarde de otoño.' },
    { label: 'Melodrama (Falso Mono no Aware)', text: '¡Ay, pobre flor marchita!\nQué pena me da verte morir,\nel invierno destruye todo.' },
    { label: 'Issa: Mundo de rocío (Aware)', text: 'En este mundo de rocío,\nes sólo un mundo de rocío;\ny sin embargo...' },
    { label: 'Buson: Viento y roca (Yūgen & Ma)', text: 'Viento de otoño:\nlo que no se mueve\nes la piedra.' }
  ] : selectedSet === 'm4' ? [
    { label: 'Bashō: Patos en el mar invernal', text: 'El mar se oscurece:\nlos chillidos de los patos\nson apenas blancos.' },
    { label: 'Cliché orientalista postizo', text: 'Bajo los cerezos en flor\nbebo té verde con mi kimono,\nsueño con Kioto.' },
    { label: 'Kigo mediterráneo: Romero y cigarra', text: 'Al sol de la tarde\nel olor a romero seco:\ncanto de cigarra.' },
    { label: 'Kigo híbrido: Caquis y escarcha', text: 'Tarde de escarcha:\nlos caquis maduros\nen la rama desnuda.' }
  ] : [
    { label: 'Bashō: Jisei en el páramo', text: 'Enfermo en el camino:\nmis sueños corren\npor el páramo seco.' },
    { label: 'Falso Jisei melodramático', text: '¡Adiós mundo cruel!\nLa muerte viene por mí y tiemblo,\nolvidad mi triste nombre.' },
    { label: 'Buson: Jisei de ciruelo y alba', text: 'Piruleta de ciruelo:\nla noche blanca\ncomienza a amanecer.' },
    { label: 'Issa: Jisei del barreño', text: 'Lavándome en el barreño,\ndel nacimiento a la muerte:\npura tontería.' }
  ];

  const handleSwitchSet = (setKey: 'm1' | 'm2' | 'm3' | 'm4' | 'm5') => {
    setSelectedSet(setKey);
    const newItems = setKey === 'm1'
      ? MODULE_1_COMPARISONS
      : setKey === 'm2'
      ? MODULE_2_COMPARISONS
      : setKey === 'm3'
      ? MODULE_3_COMPARISONS
      : setKey === 'm4'
      ? MODULE_4_COMPARISONS
      : MODULE_5_COMPARISONS;
    setSelectedItem(newItems[0]);
    setAnalyzedFeedback(null);
  };

  const handleAnalyzeQuick = (text: string) => {
    setCustomVerse(text);
    const lower = text.toLowerCase();
    
    if (selectedSet === 'm5') {
      if (lower.includes('adiós') || lower.includes('cruel') || lower.includes('tiemblo') || lower.includes('olvidad') || lower.includes('morir')) {
        setAnalyzedFeedback('⚠️ Teatralidad y apego fúnebre detectados: El Jisei tradicional no se lamenta ni busca dramatismo. Busca la ligereza (Karumi) y la serenidad cósmica ante el tránsito natural (Shōji).');
      } else {
        setAnalyzedFeedback('🌸 Tono de Jisei y Karumi: Desprendimiento sereno y pacífico, disolución del yo en la naturaleza impersonal.');
      }
    } else if (selectedSet === 'm4') {
      if (lower.includes('kimono') || lower.includes('geisha') || lower.includes('pagoda') || lower.includes('kioto') || lower.includes('sake') || lower.includes('samurai') || lower.includes('cerezo')) {
        setAnalyzedFeedback('🏮 Cliché Orientalista detectado: Tópicos importados postizos. Bashō te enseña a aprender del pino junto al pino: mira tu calle, tu olivo, tu romero o tu jacarandá local.');
      } else if (!lower.includes('verano') && !lower.includes('invierno') && !lower.includes('otoño') && !lower.includes('primavera') && !lower.includes('sol') && !lower.includes('escarcha') && !lower.includes('frío') && !lower.includes('viento') && !lower.includes('lluvia') && !lower.includes('calor')) {
        setAnalyzedFeedback('🍂 Falta de Kigo perceptible: No se detecta ninguna señal estacional ni climática. El poema flota sin coordenada en el ciclo del cosmos.');
      } else {
        setAnalyzedFeedback('🌿 Kigo Vernáculo Auténtico: Enraizado en la verdad del entorno inmediato, conectando el instante con la estación viva sin exotismos forzados.');
      }
    } else if (selectedSet === 'm3') {
      if (lower.includes('¡ay') || lower.includes('pena') || lower.includes('muerte cruel') || lower.includes('pobre ') || lower.includes('lloro')) {
        setAnalyzedFeedback('⚠️ Melodrama y aspaviento detectados: Mono no Aware no es queja teatral contra la muerte. Es una suave, agradecida y serena tristeza ante la ley cósmica de la impermanencia.');
      } else if (text.trim().split(/\s+/).length > 18) {
        setAnalyzedFeedback('⚠️ Saturación de palabras (Falta de Ma): El poema está repleto de adjetivos y explicaciones. Practica la poda: retira palabras para que el vacío fértil (Ma) sostenga la resonancia.');
      } else {
        setAnalyzedFeedback('🍂 Resonancia de Sabi y Yūgen: Sobriedad austera de la imagen, respeto por la transitoriedad y espacio en blanco para que resuene el misterio.');
      }
    } else if (selectedSet === 'm2') {
      if (!text.includes(':') && !text.includes('—') && !text.includes('-') && !text.includes(';')) {
        setAnalyzedFeedback('⚡ Falta el Kire (corte cesura): El texto se lee como una frase continua. Añade dos puntos (:) o una raya (—) para separar el fondo inmutable (Fueki) del chispazo súbito (Ryūkō).');
      } else if (lower.includes('porque') || lower.includes('cuando') || lower.includes('mientras') || lower.includes('entonces')) {
        setAnalyzedFeedback('⚠️ Conectores discursivos detectados: Los nexos de causa-efecto anulan el Satori. Suprime "porque" o "cuando" y deja que las dos imágenes choquen directamente en el corte.');
      } else if (lower.includes('veo un') || lower.includes('hay un') || lower.includes('es de color')) {
        setAnalyzedFeedback('📷 Riesgo de Inventario Plano: Parece una ficha descriptiva o un catálogo visual pasivo. Busca un cambio de estado en el que la realidad te estremezca.');
      } else {
        setAnalyzedFeedback('⚡ Chispa de Satori y Kire identificados: Hay tensión polar entre lo inmutable y lo efímero, suspendida por una cesura fértil.');
      }
    } else {
      if (lower.includes('alma') || lower.includes('llora') || lower.includes('como') || lower.includes('mi ') || lower.includes('siento')) {
        setAnalyzedFeedback('⚠️ Predominio de Ego y Retórica Lírica (Pseudo-Haiku): Contiene pronombres personales o comparaciones que interponen la subjetividad del autor sobre la realidad.');
      } else if (lower.includes('dinero') || lower.includes('prestamista') || lower.includes('esposa') || lower.includes('político') || lower.includes('cara de')) {
        setAnalyzedFeedback('🎭 Mirada de Senryū: El foco está en el comportamiento, la vanidad o la ironía humana. Válido y brillante como Senryū, pero distinto a la reverencia cósmica del Haiku.');
      } else {
        setAnalyzedFeedback('🍃 Mirada de Haiku (Mushin): El poema deja que las cosas existan por sí mismas. No hay metáfora que distorsione el acontecimiento. La naturaleza habla sin el filtro del yo.');
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro card with set switcher */}
      <div className="p-6 bg-stone-100/60 border border-stone-200 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-1">
            Laboratorio de Contrastes Poéticos
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
            Compara ejemplos canónicos frente a desvíos comunes a lo largo de los cinco módulos del curso.
          </p>
        </div>

        {/* Set Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/60 rounded-md shrink-0">
          <button
            onClick={() => handleSwitchSet('m1')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              selectedSet === 'm1'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            M1: Senryū
          </button>
          <button
            onClick={() => handleSwitchSet('m2')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              selectedSet === 'm2'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            M2: Satori
          </button>
          <button
            onClick={() => handleSwitchSet('m3')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              selectedSet === 'm3'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            M3: Sabi
          </button>
          <button
            onClick={() => handleSwitchSet('m4')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              selectedSet === 'm4'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            M4: Kigo
          </button>
          <button
            onClick={() => handleSwitchSet('m5')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
              selectedSet === 'm5'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            M5: Jisei
          </button>
        </div>
      </div>

      {/* Grid of comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comparisons.map((item, idx) => {
          const isSelected = selectedItem === item;
          const badgeConfig = {
            haiku: { label: 'Haiku Canónico (俳句)', color: 'text-emerald-800 bg-emerald-50 border-emerald-200' },
            senryu: { label: 'Senryū Clásico (川柳)', color: 'text-amber-800 bg-amber-50 border-amber-200' },
            occidental_pseudo: {
              label: selectedSet === 'm5' ? 'Falso Jisei Melodramático' : selectedSet === 'm4' ? 'Cliché Orientalista' : selectedSet === 'm3' ? 'Melodrama / Lamento' : selectedSet === 'm2' ? 'Inventario Plano' : 'Falso Haiku Occidental',
              color: 'text-rose-800 bg-rose-50 border-rose-200'
            }
          }[item.type];

          return (
            <div
              key={idx}
              onClick={() => setSelectedItem(item)}
              className={`p-5 rounded-lg border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-white border-stone-800 shadow-sm ring-1 ring-stone-800'
                  : 'bg-white/60 border-stone-200 hover:border-stone-400 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className={`px-2 py-0.5 rounded-sm font-medium border ${badgeConfig.color}`}>
                  {badgeConfig.label}
                </span>
                <span className="text-stone-400 text-xs italic">{item.author}</span>
              </div>

              {/* Haiku verses */}
              <div className="my-4 py-3 px-4 bg-stone-50 border-l-2 border-stone-400 font-serif text-lg leading-relaxed text-stone-800 italic">
                {item.verse.map((line, lIdx) => (
                  <div key={lIdx}>{line}</div>
                ))}
              </div>

              <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                {item.explanation}
              </p>

              <div className="mt-3 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-xs text-stone-500 font-sans">
                <Sparkles className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="font-medium text-stone-700">Clave estética:</span> {item.keyAspect}
              </div>
            </div>
          );
        })}
      </div>

      {/* Focus detail panel */}
      {selectedItem && (
        <div className="p-6 bg-white border border-stone-200 rounded-lg shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-stone-700" />
            <span className="text-xs font-mono uppercase tracking-wider text-stone-500">
              Desglose Filosófico y Crítico · {selectedSet.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 p-4 bg-stone-50 rounded-md border border-stone-200/80 flex flex-col justify-center text-center">
              <div className="font-serif text-xl sm:text-2xl text-stone-900 italic leading-relaxed py-2">
                {selectedItem.verse.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-2 font-serif">— {selectedItem.author}</p>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-serif text-lg font-bold text-stone-900">
                {selectedSet === 'm1'
                  ? '¿Por qué este texto encarna o traiciona el espíritu del Haiku?'
                  : selectedSet === 'm2'
                  ? '¿Por qué hay aquí un chispazo de Satori o una simple descripción inerte?'
                  : selectedSet === 'm3'
                  ? '¿Cómo dialogan el Sabi, el Mono no Aware y el vacío fértil (Ma)?'
                  : selectedSet === 'm4'
                  ? '¿Cómo ancla el Kigo el poema en la estación real sin recurrir al exotismo?'
                  : '¿Cómo afronta el Jisei la disolución entre la vida y la muerte (Shōji)?'}
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {selectedItem.explanation}
              </p>

              <div className="p-3 bg-stone-100/70 rounded border border-stone-200 text-xs text-stone-700 space-y-1">
                <p className="font-semibold text-stone-900">Aplicación práctica en Google Classroom:</p>
                <p>
                  {selectedSet === 'm1'
                    ? 'Comprueba que tus estudiantes no estén entregando senryūs (chistes o comentarios humanos) ni poemas líricos saturados de "yo".'
                    : selectedSet === 'm2'
                    ? 'Revisa que en la tarea del Módulo 2 los estudiantes utilicen un corte (Kire) visible y no un informe pasivo del tiempo.'
                    : selectedSet === 'm3'
                    ? 'En el Módulo 3, asegúrate de que los estudiantes no caigan en quejas trágicas por la vejez o la muerte. La emoción emana de la sobriedad del Sabi.'
                    : selectedSet === 'm4'
                    ? 'En el Módulo 4, premia el Kigo vernáculo enraizado en la flora y fauna local.'
                    : 'En el Módulo 5, busca la levedad (Karumi) y la paz impersonal. El Jisei no es un epitafio quejumbroso, sino la reconciliación lúcida con el cosmos.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Micro-Tester */}
      <div className="p-6 bg-stone-900 text-stone-100 rounded-lg shadow-md">
        <div className="flex items-center gap-2 mb-3">
          <Compass className="w-4 h-4 text-amber-400" />
          <h4 className="font-serif text-base font-bold text-white">
            Explorador Rápido de Sensibilidad ({selectedSet === 'm5' ? 'Detector de Jisei & Karumi' : 'Diagnóstico Poético'})
          </h4>
        </div>
        <p className="text-xs text-stone-300 mb-4 leading-relaxed">
          Haz clic en uno de los versos de prueba o escribe uno propio para ver cómo reacciona el criterio estético:
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {testExamples.map((ex, i) => (
            <button
              key={i}
              onClick={() => handleAnalyzeQuick(ex.text)}
              className="text-xs px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded border border-stone-700 transition-colors"
            >
              {ex.label}
            </button>
          ))}
        </div>

        <textarea
          value={customVerse}
          onChange={(e) => handleAnalyzeQuick(e.target.value)}
          placeholder="Escribe aquí un verso de tres líneas para diagnosticar su naturaleza..."
          rows={3}
          className="w-full p-3 bg-stone-950 border border-stone-800 rounded text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-stone-500 font-serif leading-relaxed"
        />

        {analyzedFeedback && (
          <div className="mt-3 p-3 bg-stone-800/90 border border-stone-700 rounded text-xs text-stone-200">
            {analyzedFeedback}
          </div>
        )}
      </div>
    </div>
  );
};
