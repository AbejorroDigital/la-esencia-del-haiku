import React, { useState } from 'react';
import { ArrowRight, Sparkles, Feather, Compass, Compass as CompassIcon, User, Sun, Heart, Eye, Milestone } from 'lucide-react';
import jiseiHeroImage from '../assets/images/jisei_withered_field_1791027471902.jpg';
import calligraphyImage from '../assets/images/calligraphy_mushin_washi_1791026789294.jpg';

interface ModuleFiveViewProps {
  onGoToStudio: () => void;
  onGoToComparator: () => void;
  onGoToClassroomExport: () => void;
}

export const ModuleFiveView: React.FC<ModuleFiveViewProps> = ({
  onGoToStudio,
  onGoToComparator,
  onGoToClassroomExport,
}) => {
  const [selectedMaster, setSelectedMaster] = useState<'basho' | 'buson' | 'issa' | 'shiki'>('basho');

  const mastersData = {
    basho: {
      name: 'Matsuo Bashō (1644–1694)',
      kanji: '松尾芭蕉',
      epithet: 'El caminante errante y la intemperie sagrada',
      essence: 'La poesía concebida como vía espiritual (Dō). Vivió en constante desarraigo, viajando miles de kilómetros con su sombrero de paja y su bastón.',
      jisei: 'Enfermo en el camino:\nmis sueños corren\npor el páramo seco.',
      jiseiJapanese: '旅に病んで 夢は枯野を かけめぐる',
      keyConcept: 'Ichigo Ichie (一期一会 · un encuentro irrepetible) y Karumi (ligereza).',
      analysis: 'En su lecho de muerte en Osaka, no hay lamentos ni miedo: su cuerpo yace inmóvil, pero sus sueños continúan corriendo libres por los pastizales secos de invierno.'
    },
    buson: {
      name: 'Yosa Buson (1716–1784)',
      kanji: '与謝蕪村',
      epithet: 'El ojo del pintor y la arquitectura de la luz',
      essence: 'Pintor supremo de la escuela Nanga. Su mirada es plástica, visual y cromática; capta la luz, el volumen y los contrastes sin sentimentalismo.',
      jisei: 'Piruleta de ciruelo:\nla noche blanca\ncomienza a amanecer.',
      jiseiJapanese: '白梅に 明くる夜ばかりと なりにけり',
      keyConcept: 'Shikaku (la visión pictórica pura) y el refinamiento formal.',
      analysis: 'En su última noche invernal, Buson contempla mentalmente la flor blanca del ciruelo que sustituye a la muerte por luz pura antes del alba.'
    },
    issa: {
      name: 'Kobayashi Issa (1763–1828)',
      kanji: '小林一茶',
      epithet: 'La ternura y la compasión universal hacia lo humilde',
      essence: 'Herido por la muerte de su madre, de sus cuatro hijos y de su esposa, transmutó la tragedia en amor compasivo hacia moscas, caracoles y gorriones huérfanos.',
      jisei: 'Lavándome en el barreño,\ndel nacimiento a la muerte:\npura tontería.',
      jiseiJapanese: '盥から 盥にうつる ちんぷんかん',
      keyConcept: 'Jihi (compasión budista) y llaneza humorística.',
      analysis: 'El barreño donde bañan al recién nacido y el barreño donde asean el cadáver. Issa despide la vida con tierna risa ante la vanidad del ego humano.'
    },
    shiki: {
      name: 'Masaoka Shiki (1867–1902)',
      kanji: '正岡子規',
      epithet: 'El revolucionario moderno desde el lecho del dolor',
      essence: 'Postrado por tuberculosis ósea durante años, independizó el Haiku y fundó la poética moderna basada en el Shasei (bosquejo del natural).',
      jisei: 'La savia de la luffa se ha helado:\nlas flemas\nya no pueden salir.',
      jiseiJapanese: '糸瓜咲て 痰のつまりし 仏かな',
      keyConcept: 'Shasei (写生 · dibujo directo del natural) y estoicismo radical.',
      analysis: 'La savia de luffa era su medicina contra la tos. Al congelarse, Shiki constata su propia asfixia inminente con la serenidad de un cronista del natural.'
    }
  };

  const activeMaster = mastersData[selectedMaster];

  return (
    <article className="space-y-12">
      {/* Editorial Hero Marquee */}
      <section className="relative rounded-lg overflow-hidden border border-stone-200 bg-stone-900 text-white">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={jiseiHeroImage}
            alt="Páramo invernal con bastón y sombrero de paja de caminante, el Jisei"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

          {/* Marquee Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 max-w-4xl">
            <div className="flex items-center gap-2 text-stone-300 text-xs font-mono tracking-widest uppercase mb-2">
              <span>Módulo 5 · Culminación</span>
              <span>·</span>
              <span>4 Horas Lectivas</span>
              <span>·</span>
              <span>Los Cuatro Maestros y el Jisei</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-stone-100 leading-tight">
              Los grandes Haijin y el Jisei
            </h1>

            <p className="mt-3 text-stone-300 text-sm sm:text-base font-serif italic max-w-2xl leading-relaxed">
              Bashō, Buson, Issa, Shiki y el poema de despedida de la vida: la disolución serena entre el vivir y el morir (Shōji).
            </p>
          </div>
        </div>

        {/* Operational strip */}
        <div className="px-6 py-3 bg-stone-950/90 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-4">
            <span>Conceptos clave: <strong>Ichigo Ichie (一期一会)</strong>, <strong>Shōji (生死)</strong>, <strong>Jisei (辞世)</strong>, <strong>Karumi (軽み)</strong></span>
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
          {/* Section 5.1 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 5.1
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Los Cuatro Pilares del Haiku: Las cuatro miradas canónicas
              </h2>
            </div>

            <p className="text-stone-700 text-base leading-relaxed font-serif">
              El haiku no es un dogma uniforme ni una receta cerrada. Se sostiene sobre cuatro miradas canónicas, cada una de las cuales conquistó una cumbre diferente de despojo del ego:
            </p>

            {/* Interactive Master Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {(['basho', 'buson', 'issa', 'shiki'] as const).map((key) => {
                const isSelected = selectedMaster === key;
                const m = mastersData[key];
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedMaster(key)}
                    className={`p-3 rounded border text-left transition-all ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-stone-50 hover:bg-white text-stone-700 border-stone-200'
                    }`}
                  >
                    <span className="text-[10px] font-mono block opacity-60 uppercase">
                      {m.kanji}
                    </span>
                    <span className="font-serif font-bold text-sm block mt-0.5 truncate">
                      {m.name.split(' ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Master Spotlight Card */}
            <div className="p-6 bg-white border border-stone-200 rounded-lg shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                    {activeMaster.kanji} · Maestro Seleccionado
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-0.5">
                    {activeMaster.name}
                  </h3>
                  <p className="text-xs text-stone-600 font-serif italic mt-0.5">
                    {activeMaster.epithet}
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed font-sans">
                {activeMaster.essence}
              </p>

              <div className="p-4 bg-stone-50 border-l-2 border-stone-800 rounded-r text-stone-900">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                  Su Poema de Despedida (Jisei Canónico):
                </span>
                <div className="font-serif text-lg italic whitespace-pre-line leading-relaxed">
                  {activeMaster.jisei}
                </div>
                <span className="text-xs font-serif-japanese text-stone-500 block mt-2">
                  {activeMaster.jiseiJapanese}
                </span>
              </div>

              <p className="text-xs text-stone-600 font-sans italic border-t border-stone-100 pt-3">
                <strong>Clave estética:</strong> {activeMaster.analysis}
              </p>
            </div>
          </section>

          {/* Section 5.2 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 5.2
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                El Jisei (辞世): La muerte sin melodrama
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p>
                En la tradición samurái y en la poética zen, el <strong>Jisei</strong> (辞世) es el poema de despedida que una persona compone en el umbral inminente de la propia muerte.
              </p>
              <p>
                Cuando a un poeta lírico occidental le llega la hora postrera, suele pronunciar discursos solemnes, súplicas de salvación o lamentos desesperados contra el silencio. El maestro de haiku, en cambio, escribe tres versos sencillos con su pincel y se disuelve sin estrépito.
              </p>
              <p>
                El Jisei no es un epitafio esculpido en mármol para vanidad de los descendientes: es un <strong>gesto de supremo desprendimiento</strong>. No hay temor al castigo ultramundano, ni apego a la biografía, ni amargura.
              </p>
            </div>

            {/* Core doctrine banner */}
            <div className="p-4 bg-stone-100 border-l-3 border-stone-800 rounded-r-md text-stone-800 text-sm font-serif italic leading-relaxed">
              «El Jisei no celebra al moribundo: celebra la continuidad inmortal del mundo que seguirá existiendo cuando él haya desaparecido.»
            </div>
          </section>

          {/* Section 5.3 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 5.3
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Shōji (生死): La disolución de la frontera entre vivir y morir
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p>
                En la filosofía budista que sustenta el haiku, la vida (<em>Shō</em>) y la muerte (<em>Ji</em>) no son dos enemigos en lucha a muerte: son <strong>las dos caras indivisibles de una misma moneda cósmica</strong> (<strong>Shōji</strong>, 生死).
              </p>
              <p>
                Así como la ola se alza del océano y vuelve a disolverse en el océano sin que el agua sufra merma alguna, la forma humana se manifiesta durante unas décadas y regresa al gran vacío del que brotó. Quien comprende esto se emancipa de la ambición literaria. La poesía deja de ser un instrumento de autoafirmación y se transforma en una ofrenda de silenciosa atención.
              </p>
            </div>
          </section>

          {/* Transition CTA to Studio */}
          <section className="p-6 bg-stone-900 text-stone-100 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                El poema final: Escribe tu propio Jisei
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Despójate del ego y practica la ligereza suprema (Karumi) en el taller interactivo.
              </p>
            </div>
            <button
              onClick={onGoToStudio}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-950 bg-stone-100 hover:bg-white rounded-md transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Abrir Taller Contemplativo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </section>
        </div>

        {/* Marginal Editorial Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Concept Card */}
          <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Milestone className="w-4 h-4 text-stone-700" />
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                La Ética del Camino (Dō)
              </span>
            </div>
            <h4 className="font-serif text-base font-bold text-stone-900">
              Karumi (軽み) · La Ligereza
            </h4>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed font-serif">
              En sus últimos años, Bashō abandonó la gravedad solemne para predicar la ligereza (<em>Karumi</em>): la poesía debe ser tan transparente y humilde como un plato de arroz o el vuelo de una hoja.
            </p>
          </div>

          {/* Calligraphy Card */}
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs">
            <div className="h-44 overflow-hidden bg-stone-100">
              <img
                src={calligraphyImage}
                alt="Washi y trazo de tinta"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-1">
                La Culminación
              </span>
              <h4 className="font-serif text-base font-bold text-stone-900">
                El final del ego literario
              </h4>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-serif">
                Has recorrido los cinco módulos: la mente vacía (*Mushin*), la revelación (*Satori*), la soledad pátina (*Sabi*), las estaciones (*Kigo*) y la despedida serena (*Jisei*).
              </p>
            </div>
          </div>

          {/* Checklist for Module 5 Classroom */}
          <div className="p-5 bg-stone-100/70 border border-stone-200 rounded-lg text-xs space-y-3">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Sparkles className="w-4 h-4 text-stone-700" />
              <span>Lista de Chequeo · Tarea 5</span>
            </div>

            <ul className="space-y-2 text-stone-600 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">1.</span>
                <span>¿Elegiste uno de los 4 maestros (Bashō, Buson, Issa o Shiki)?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">2.</span>
                <span>¿Suprimiste cualquier queja o súplica melodramática?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">3.</span>
                <span>¿Enlazaste tu disolución con un elemento natural continuo?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">4.</span>
                <span>¿El poema transmite ligereza pura (*Karumi*)?</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
};
