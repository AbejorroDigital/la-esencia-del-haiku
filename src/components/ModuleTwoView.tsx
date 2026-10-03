import React from 'react';
import { ArrowRight, Sparkles, Zap, AlertTriangle, Quote, CheckCircle2, Split } from 'lucide-react';
import satoriHeroImage from '../assets/images/satori_lightning_bamboo_1791027001999.jpg';
import dewdropImage from '../assets/images/zen_moment_dewdrop_1791026800007.jpg';

interface ModuleTwoViewProps {
  onGoToStudio: () => void;
  onGoToComparator: () => void;
  onGoToClassroomExport: () => void;
}

export const ModuleTwoView: React.FC<ModuleTwoViewProps> = ({
  onGoToStudio,
  onGoToComparator,
  onGoToClassroomExport,
}) => {
  return (
    <article className="space-y-12">
      {/* Editorial Hero Marquee */}
      <section className="relative rounded-lg overflow-hidden border border-stone-200 bg-stone-900 text-white">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={satoriHeroImage}
            alt="Relámpago en el bambuzal nocturno, iluminación súbita Zen"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

          {/* Marquee Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 max-w-4xl">
            <div className="flex items-center gap-2 text-stone-300 text-xs font-mono tracking-widest uppercase mb-2">
              <span>Módulo 2</span>
              <span>·</span>
              <span>3 Horas Lectivas</span>
              <span>·</span>
              <span>Epifanía y Tensión Polar</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-stone-100 leading-tight">
              El Satori: La revelación y el chispazo del instante
            </h1>

            <p className="mt-3 text-stone-300 text-sm sm:text-base font-serif italic max-w-2xl leading-relaxed">
              La iluminación cotidiana, el Kireji (corte cesura) y el nanosegundo donde el observador y lo observado se funden.
            </p>
          </div>
        </div>

        {/* Operational strip */}
        <div className="px-6 py-3 bg-stone-950/90 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-4">
            <span>Conceptos clave: <strong>Satori (悟り)</strong>, <strong>Kizuki (気づき)</strong>, <strong>Kireji (切れ字)</strong>, <strong>Fueki Ryūkō (不易流行)</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onGoToStudio}
              className="hover:text-stone-100 underline underline-offset-4 transition-colors cursor-pointer"
            >
              Practicar en el Taller Mushin →
            </button>
          </div>
        </div>
      </section>

      {/* Main Two-Column Editorial Grid (70% reading / 30% margin notes) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Reading Column (8 cols) */}
        <div className="lg:col-span-8 space-y-10">
          {/* Section 2.1 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 2.1
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                ¿Qué es el Satori poético? El despertar en el nanosegundo cotidiano
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
                En la tradición del Budismo Zen, la palabra <strong>Satori</strong> (悟り) nombra la iluminación súbita: el despertar repentino a la naturaleza incondicionada de lo real, donde la ilusión de la mente fragmentada y el ego individual se disuelven de golpe.
              </p>
              <p>
                Al ser trasplantado a la poética por Matsuo Bashō, el satori no es una experiencia reservada a eremitas recluidos en monasterios inaccesibles. Es lo que D.T. Suzuki y R.H. Blyth denominaron con lucidez <strong>«un pequeño satori cotidiano»</strong> (*kizuki*, 気づき: el sobresalto o percatación súbita de la conciencia).
              </p>
              <p>
                En el transcurso ordinario de los días, los seres humanos habitamos un estado de sonambulismo perceptivo: miramos la realidad a través de etiquetas utilitarias. Miramos una silla pensando «sirve para descansar»; miramos un reloj pensando «llego tarde»; miramos el cielo calculando si debemos llevar paraguas. Nuestras convenciones mentales actúan como un blindaje que anestesia el impacto directo de la existencia.
              </p>
              <p>
                El satori ocurre cuando esa armadura conceptual se quiebra de improviso. Por una fracción infinitesimal de segundo, el flujo discursivo del cerebro se detiene. En ese relámpago, el sujeto que observa y el objeto observado dejan de ser dos entidades distantes: <strong>se funden en una sola respiración viva</strong>. El haiku es el intento de transcribir ese relámpago antes de que el intelecto despierte de nuevo para encasillarlo.
              </p>
            </div>

            {/* Core doctrine banner */}
            <div className="p-4 bg-stone-100 border-l-3 border-stone-800 rounded-r-md text-stone-800 text-sm font-serif italic leading-relaxed">
              «El haiku no describe la realidad: registra el momento exacto en que la realidad traspasó la conciencia del poeta como una descarga eléctrica.»
            </div>
          </section>

          {/* Section 2.2 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 2.2
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                La trampa de la descripción vacía: Por qué el haiku no es un inventario
              </h2>
            </div>

            <p className="text-stone-700 text-base leading-relaxed font-serif">
              Una vez que los estudiantes abandonan la rima y la metáfora, caen casi invariablemente en una segunda trampa: <strong>la descripción fotográfica inerte</strong>. Creen que basta con sentarse y registrar objetos naturales como un botánico o un perito judicial.
            </p>

            <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-md text-xs text-rose-900 space-y-1">
              <span className="font-bold flex items-center gap-1.5 uppercase font-mono tracking-wider text-rose-700">
                <AlertTriangle className="w-4 h-4" /> Contraejemplo de inventario plano (Sin Satori):
              </span>
              <div className="font-serif italic text-sm text-stone-800 my-1">
                El pájaro marrón<br />
                está sobre la rama del roble,<br />
                mueve las alas.
              </div>
              <p className="text-stone-600">
                Cumple con el 5-7-5. No usa metáforas. Trata de la naturaleza. Y sin embargo, <strong>el poema está muerto</strong>. No hay conmoción, no hay revelación de la impermanencia, no hay abismo. Es una crónica ornitológica pasiva.
              </p>
            </div>

            <p className="text-stone-700 text-base leading-relaxed font-serif">
              Para que exista un haiku auténtico, <strong>lo cotidiano debe rasgarse para desvelarse como absoluto</strong>. Masaoka Shiki, gran reformador del siglo XIX, acuñó el término <em>Shasei</em> (写生, bosquejo del natural). Sin embargo, el propio Shiki advirtió que el bosquejo que únicamente calca la apariencia física es un catálogo trivial. El verdadero <em>shasei</em> capta la vida latente del fenómeno en su condición irrepetible.
            </p>

            {/* Canonical Masterpiece Contrast */}
            <div className="p-5 bg-stone-50 border border-stone-300 rounded-md space-y-2">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block">
                El modelo canónico del chispazo:
              </span>
              <div className="font-serif text-xl italic text-stone-900 leading-relaxed">
                Relámpago en la noche:<br />
                el graznido de la garza<br />
                rasga la oscuridad.<br />
                <span className="text-xs font-sans not-italic text-stone-500 block mt-1.5">— Matsuo Bashō</span>
              </div>
              <p className="text-xs text-stone-700 font-sans leading-relaxed pt-2 border-t border-stone-200">
                El relámpago ciega durante un milisegundo y devuelve el universo a la oscuridad total. En mitad de esa ceguera súbita, el graznido desgarrador de la garza nocturna hace audible la inmensidad del vacío. Se tocan la luz fulgurante, la tiniebla infinita y el sonido salvaje. La mente del lector experimenta un corte vertical: <strong>eso es Satori</strong>.
              </p>
            </div>
          </section>

          {/* Section 2.3 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 2.3
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                El Kireji (切れ字): La palabra cortante que abre el abismo
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p>
                ¿Cómo se traslada ese chispazo de iluminación al lector sin recurrir a discursos explicativos? Mediante el mecanismo del <strong>Kire</strong> (切れ, el corte) y el <strong>Kireji</strong> (切れ字, la palabra cortante).
              </p>
              <p>
                En japonés, los poetas empleaban partículas gramaticales como <em>ya</em> (や), <em>kana</em> (かな) o <em>keri</em> (けり). Estas partículas carecen de significado conceptual: operan como una <strong>cesura respiratoria</strong> que corta la sintaxis ordinaria.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-xs font-sans">
                <div className="p-3 bg-stone-100 rounded border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">1. Quiebra la sintaxis</div>
                  <p className="text-stone-600">Impide que el poema sea una frase lineal de causa-efecto («porque llovió, me mojé»).</p>
                </div>
                <div className="p-3 bg-stone-100 rounded border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">2. Crea el vacío fértil (Ma)</div>
                  <p className="text-stone-600">Abre un espacio silencioso entre dos imágenes independientes.</p>
                </div>
                <div className="p-3 bg-stone-100 rounded border border-stone-200">
                  <div className="font-bold text-stone-900 mb-1">3. Salto de la chispa</div>
                  <p className="text-stone-600">Como en los bornes de un circuito, la chispa salta cuando la mente une los dos polos opuestos.</p>
                </div>
              </div>

              <p>
                En las lenguas occidentales, al no disponer de estas partículas, representamos el <em>Kireji</em> mediante signos tipográficos contundentes: los <strong>dos puntos (:)</strong>, la <strong>raya larga (—)</strong> o una cesura estructural.
              </p>
            </div>

            {/* Buson Kire Example */}
            <div className="my-6 p-6 border-y border-stone-300 bg-[#F7F4EE]/50 text-center space-y-2">
              <Quote className="w-6 h-6 text-stone-400 mx-auto" />
              <p className="font-serif text-xl italic text-stone-800 leading-relaxed max-w-xl mx-auto">
                «El peso de la nieve<br />
                en el tallo de bambú:<br />
                quiebre repentino.»
              </p>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
                — Yosa Buson (Kire tras el segundo verso)
              </span>
            </div>
          </section>

          {/* Section 2.4 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 2.4
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Fueki Ryūkō (不易流行): La colisión entre lo inmutable y lo efímero
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p>
                Hacia el final de su existencia errante, Bashō condensó el secreto del haiku en una fórmula imperecedera: <strong>Fueki Ryūkō</strong> (不易流行).
              </p>
              <ul className="space-y-2 text-sm font-sans list-disc list-inside text-stone-700">
                <li>
                  <strong>Fueki (不易):</strong> Lo inmutable, lo eterno. El fondo silencioso e impersonal del cosmos que permanece invariable a través de las eras (el estanque milenario, la noche helada, la cordillera).
                </li>
                <li>
                  <strong>Ryūkō (流行):</strong> Lo efímero, lo mudable. El acontecimiento singular que dura un segundo y jamás volverá a repetirse de idéntica manera (el salto de la rana, el relámpago, la hoja que se desprende).
                </li>
              </ul>
              <p>
                Un poema que solo contiene <em>Fueki</em> se desvanece en filosofía abstracta o en un paisaje estático. Un poema que solo contiene <em>Ryūkō</em> se degrada en una anécdota frívola. Solo cuando el relámpago efímero atraviesa el fondo de lo inmutable surge la vibración del Satori.
              </p>
            </div>
          </section>

          {/* Transition CTA to Studio */}
          <section className="p-6 bg-stone-900 text-stone-100 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Hora de capturar tu instante-bisagra
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Aplica la técnica del Kire (dos puntos) y pon a prueba tu poema contra la trampa del inventario descriptivo.
              </p>
            </div>
            <button
              onClick={onGoToStudio}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-950 bg-stone-100 hover:bg-white rounded-md transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Ir al Taller de Escritura</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </section>
        </div>

        {/* Marginal Editorial Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Satori Concept Card */}
          <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                Anatomía del Chispazo
              </span>
            </div>
            <h4 className="font-serif text-base font-bold text-stone-900">
              El salto polar del Kireji
            </h4>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed font-serif">
              En el haiku hay dos polos eléctricos: el Polo A (lo permanente) y el Polo B (lo súbito). La cesura (:) crea una separación física. La mente del lector debe saltar esa distancia; en ese salto salta la chispa.
            </p>
            <div className="mt-3 p-3 bg-stone-50 rounded border border-stone-200 font-mono text-[11px] text-stone-700">
              <div>[Polo A: Noche oscura]</div>
              <div className="text-amber-700 font-bold my-0.5">--- CORTE ( : ) ---</div>
              <div>[Polo B: Graznido de la garza]</div>
            </div>
          </div>

          {/* Dewdrop Macro Card */}
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs">
            <div className="h-44 overflow-hidden bg-stone-100">
              <img
                src={dewdropImage}
                alt="Gota de rocío en aguja de pino al amanecer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-1">
                Fueki Ryūkō en la materia
              </span>
              <h4 className="font-serif text-base font-bold text-stone-900">
                El pino milenario y el rocío
              </h4>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-serif">
                El pino perdura trescientos años (<em>Fueki</em>); la gota de rocío vive sesenta segundos (<em>Ryūkō</em>). El haiku une ambos en un solo aliento.
              </p>
            </div>
          </div>

          {/* Checklist for Module 2 Classroom */}
          <div className="p-5 bg-stone-100/70 border border-stone-200 rounded-lg text-xs space-y-3">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Sparkles className="w-4 h-4 text-stone-700" />
              <span>Lista de Chequeo · Tarea 2</span>
            </div>

            <ul className="space-y-2 text-stone-600 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">1.</span>
                <span>¿Hay un cambio de estado físico o sensorial en tu poema?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">2.</span>
                <span>¿Se utiliza un corte explícito (dos puntos : o raya —) para suspender el tiempo?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">3.</span>
                <span>¿Eliminaste conectores como "porque", "cuando" o "entonces"?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">4.</span>
                <span>¿Lo ordinario cobra una dimensión de asombro absoluto?</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
};
