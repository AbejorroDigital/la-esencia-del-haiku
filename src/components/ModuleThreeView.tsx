import React from 'react';
import { ArrowRight, Sparkles, Feather, Quote, HeartHandshake, Eye, Layers } from 'lucide-react';
import sabiHeroImage from '../assets/images/sabi_mono_no_aware_1791027165617.jpg';
import calligraphyImage from '../assets/images/calligraphy_mushin_washi_1791026789294.jpg';

interface ModuleThreeViewProps {
  onGoToStudio: () => void;
  onGoToComparator: () => void;
  onGoToClassroomExport: () => void;
}

export const ModuleThreeView: React.FC<ModuleThreeViewProps> = ({
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
            src={sabiHeroImage}
            alt="Pátina de madera antigua y hoja de arce, Sabi y Mono no Aware"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

          {/* Marquee Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 max-w-4xl">
            <div className="flex items-center gap-2 text-stone-300 text-xs font-mono tracking-widest uppercase mb-2">
              <span>Módulo 3</span>
              <span>·</span>
              <span>4 Horas Lectivas</span>
              <span>·</span>
              <span>Impermanencia y Vacío Fértil</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-stone-100 leading-tight">
              El alma del Haiku: Mono no Aware y Sabi
            </h1>

            <p className="mt-3 text-stone-300 text-sm sm:text-base font-serif italic max-w-2xl leading-relaxed">
              La suave tristeza por la transitoriedad, la pátina del tiempo y la resonancia del vacío fértil (Ma) y el misterio (Yūgen).
            </p>
          </div>
        </div>

        {/* Operational strip */}
        <div className="px-6 py-3 bg-stone-950/90 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-4">
            <span>Conceptos clave: <strong>Mono no Aware (物の哀れ)</strong>, <strong>Sabi (寂び)</strong>, <strong>Ma (間)</strong>, <strong>Yūgen (幽玄)</strong></span>
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
          {/* Section 3.1 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 3.1
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Mono no Aware (物の哀れ): La conmoción ante la belleza de lo efímero
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
                Si tuviéramos que elegir el núcleo gravitacional que define la sensibilidad poética japonesa, este sería sin duda <strong>Mono no Aware</strong> (物の哀れ).
              </p>
              <p>
                El insigne erudito dieciochesco Motoori Norinaga descompuso la expresión en sus raíces originarias: <em>Mono</em> (las cosas, los seres, los sucesos visibles) y <em>Aware</em> (un grito íntimo de asombro y empatía ante el mundo). Así, <em>Mono no Aware</em> significa literalmente «el conmoverse ante las cosas», o más exactamente: <strong>la suave, serena y agradecida tristeza provocada por la transitoriedad de toda belleza</strong>.
              </p>
              <p>
                En Occidente, la impermanencia (<em>Mujō</em>) suele vivirse como una condena o un ultraje contra el que hay que revelarse; en la estética japonesa, ocurre la inversión más lúcida: <strong>una flor es infinitamente hermosa precisamente porque va a morir mañana</strong>. Si los cerezos florecieran doce meses al año como coronas de plástico, nadie peregrinaría a contemplarlos. Es su fragilidad irrepetible la que arranca una reverencia silenciosa.
              </p>
            </div>

            {/* Core rule banner */}
            <div className="p-4 bg-stone-100 border-l-3 border-stone-800 rounded-r-md text-stone-800 text-sm font-serif italic leading-relaxed">
              «Mono no Aware no es melodrama ni llanto egocéntrico: es la ternura solemne de quien contempla la caída de una hoja y comprende en ella el destino de todas las galaxias.»
            </div>
          </section>

          {/* Section 3.2 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 3.2
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Sabi (寂び): La belleza de la pátina y la soledad serena
              </h2>
            </div>

            <p className="text-stone-700 text-base leading-relaxed font-serif">
              Emparentada con la raíz <em>sabireru</em> (oxidarse, envejecer con dignidad) y <em>sabishi</em> (solitario), la noción de <strong>Sabi</strong> es la piedra de toque del haiku de Bashō.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-sans text-xs">
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-md">
                <div className="font-bold text-stone-900 mb-1">La pátina del tiempo</div>
                <p className="text-stone-600 leading-relaxed">
                  No busca lo reluciente ni lo pulcro de fábrica, sino la huella indeleble de los inviernos: el musgo en la piedra, la madera agrietada por el sol, la taza rota recompuesta con resina de oro (<em>Kintsugi</em>).
                </p>
              </div>

              <div className="p-4 bg-stone-50 border border-stone-200 rounded-md">
                <div className="font-bold text-stone-900 mb-1">La soledad reconciliada</div>
                <p className="text-stone-600 leading-relaxed">
                  No es aislamiento neurótico ni amargura con los seres humanos, sino una paz sobria: sentirse hermano del viento frío, de la roca solitaria y de la noche que cae.
                </p>
              </div>
            </div>

            {/* Bashō Masterpiece */}
            <div className="p-5 bg-stone-50 border border-stone-300 rounded-md space-y-2">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider block">
                La cima canónica del Sabi:
              </span>
              <div className="font-serif text-xl italic text-stone-900 leading-relaxed">
                En la rama seca<br />
                un cuervo se ha posado:<br />
                tarde de otoño.<br />
                <span className="text-xs font-sans not-italic text-stone-500 block mt-1.5">— Matsuo Bashō (枯朶に 烏のとまりけり 秋の暮)</span>
              </div>
              <p className="text-xs text-stone-700 font-sans leading-relaxed pt-2 border-t border-stone-200">
                Pintura sumi-e despojada al límite. Ni una flor, ni un rayo dorado. Tres presencias rigurosas: la madera desnuda, el plumaje negro y la sombra del ocaso. La soledad no se describe con adjetivos: <strong>emana sola de la materia</strong>.
              </p>
            </div>
          </section>

          {/* Section 3.3 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 3.3
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                El vacío fértil (Ma, 間) y el misterio sutil (Yūgen, 幽玄)
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p>
                ¿Cómo puede un poema de tres líneas albergar el universo entero sin saturarse? A través de dos principios estructurales:
              </p>

              <div className="space-y-3 font-sans text-xs">
                <div className="p-3.5 bg-stone-100/80 rounded border border-stone-200">
                  <div className="font-bold text-stone-900 text-sm font-serif mb-1">Ma (間) · El vacío fértil</div>
                  <p className="text-stone-600 leading-relaxed">
                    En la arquitectura del té, en el arreglo floral (<em>Ikebana</em>) y en el haiku, el elemento más elocuente es el <strong>intervalo en blanco</strong>. Si rellenas los tres versos de palabras y explicaciones, ahogas el <em>Ma</em>. El poeta poda implacablemente para que el silencio circundante sea quien hable.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-100/80 rounded border border-stone-200">
                  <div className="font-bold text-stone-900 text-sm font-serif mb-1">Yūgen (幽玄) · La penumbra y la sugerencia</div>
                  <p className="text-stone-600 leading-relaxed">
                    Definido por Zeami como la gracia velada: contemplar un navío que se pierde tras una isla en la bruma. No iluminar todo con luz incisiva, sino sugerir con un detalle en la penumbra. Decir una décima parte para que el lector complete las nueve décimas restantes.
                  </p>
                </div>
              </div>

              {/* Issa Quote Pullquote */}
              <div className="my-6 p-6 border-y border-stone-300 bg-[#F7F4EE]/50 text-center space-y-2">
                <Quote className="w-6 h-6 text-stone-400 mx-auto" />
                <p className="font-serif text-xl italic text-stone-800 leading-relaxed max-w-xl mx-auto">
                  «En este mundo de rocío,<br />
                  es sólo un mundo de rocío;<br />
                  y sin embargo...»
                </p>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
                  — Kobayashi Issa (Tras la muerte de su hija Sato)
                </span>
                <p className="text-xs text-stone-600 font-sans max-w-md mx-auto pt-2">
                  Ese «y sin embargo...» (<em>sarinagara</em>) donde el poema se interrumpe es el <em>Ma</em> más conmovedor de la literatura: el silencio donde el amor y la pérdida se abrazan sin queja.
                </p>
              </div>
            </div>
          </section>

          {/* Transition CTA to Studio */}
          <section className="p-6 bg-stone-900 text-stone-100 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Hora de podar tus versos (Práctica de Ma)
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Escribe tu borrador sobre un objeto con pátina y utiliza el taller para retirar las palabras accesorias.
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
          {/* Aesthetic Balance Card */}
          <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-stone-700" />
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                La Trilogía Estética
              </span>
            </div>
            <h4 className="font-serif text-base font-bold text-stone-900">
              Wabi, Sabi y Yūgen
            </h4>
            <div className="mt-3 space-y-2 text-xs text-stone-600 font-sans">
              <p><strong>Wabi (侘):</strong> La sobriedad voluntaria, la humildad de los materiales rústicos.</p>
              <p><strong>Sabi (寂):</strong> La belleza que sólo el paso del tiempo y la intemperie pueden otorgar.</p>
              <p><strong>Yūgen (幽玄):</strong> El misterio sutil que late en lo no revelado.</p>
            </div>
          </div>

          {/* Calligraphy Texture Card */}
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs">
            <div className="h-44 overflow-hidden bg-stone-100">
              <img
                src={calligraphyImage}
                alt="Washi con tinta china y espacio en blanco"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-1">
                El poder del blanco
              </span>
              <h4 className="font-serif text-base font-bold text-stone-900">
                El vacío sostiene el trazo
              </h4>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-serif">
                Si pintas toda la hoja de negro, no hay pintura: hay mancha. En el haiku, el 80% del poema debe ser el blanco del papel (*Ma*).
              </p>
            </div>
          </div>

          {/* Checklist for Module 3 Classroom */}
          <div className="p-5 bg-stone-100/70 border border-stone-200 rounded-lg text-xs space-y-3">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Sparkles className="w-4 h-4 text-stone-700" />
              <span>Lista de Chequeo · Tarea 3</span>
            </div>

            <ul className="space-y-2 text-stone-600 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">1.</span>
                <span>¿Emana la emoción de una textura física concreta (óxido, musgo, corteza)?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">2.</span>
                <span>¿Eliminaste lamentos melodramáticos ("¡ay!", "dolor", "pena")?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">3.</span>
                <span>¿Has podado palabras para dejar que el vacío (*Ma*) sugiera más?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">4.</span>
                <span>¿La tristeza es serena y agradecida (*Mono no Aware*)?</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
};
