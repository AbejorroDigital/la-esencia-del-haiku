import React from 'react';
import { ArrowRight, BookOpen, Sparkles, AlertCircle, Quote, Compass, Feather } from 'lucide-react';
import heroImage from '../assets/images/haiku_hero_zen_contemplation_1791026778985.jpg';
import calligraphyImage from '../assets/images/calligraphy_mushin_washi_1791026789294.jpg';
import dewdropImage from '../assets/images/zen_moment_dewdrop_1791026800007.jpg';

interface ModuleOneViewProps {
  onGoToStudio: () => void;
  onGoToComparator: () => void;
  onGoToClassroomExport: () => void;
}

export const ModuleOneView: React.FC<ModuleOneViewProps> = ({
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
            src={heroImage}
            alt="Jardín Zen japonés con agua y cuenco de piedra"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

          {/* Marquee Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 max-w-4xl">
            <div className="flex items-center gap-2 text-stone-300 text-xs font-mono tracking-widest uppercase mb-2">
              <span>Módulo 1</span>
              <span>·</span>
              <span>3 Horas Lectivas</span>
              <span>·</span>
              <span>Filosofía Zen y Poética</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-stone-100 leading-tight">
              La trampa de la estructura y el abandono del intelecto
            </h1>

            <p className="mt-3 text-stone-300 text-sm sm:text-base font-serif italic max-w-2xl leading-relaxed">
              Métrica vs. Esencia, Haiku vs. Senryū, y la estética de la mente vacía (Mushin).
            </p>
          </div>
        </div>

        {/* Operational strip */}
        <div className="px-6 py-3 bg-stone-950/90 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-4">
            <span>Conceptos clave: <strong>Kokoro (心)</strong>, <strong>Mushin (無心)</strong>, <strong>Onji</strong>, <strong>Senryū</strong></span>
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
          {/* Section 1.1 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 1.1
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                La ilusión occidental del 5-7-5
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
                En casi todas las escuelas occidentales se enseña que un haiku es un poema compuesto mecánicamente por tres versos de 5, 7 y 5 sílabas métricas. Este es el primer espejismo que cualquier aspirante a la comprensión profunda debe disolver con urgencia.
              </p>
              <p>
                En japonés clásico no existen las sílabas en el sentido fonético de nuestras lenguas romances o sajonas, sino los <em>onji</em> (音字) o <em>morae</em>: unidades de peso temporal y de respiración acústica. Una vocal prolongada cuenta como dos tiempos sonoros; una consonante nasal final (<em>n</em>) cuenta como otro tiempo autónomo. Por esta razón fonética, diecisiete sílabas en español o en inglés suelen equivaler a casi veintiocho o treinta moras japonesas, transformando a menudo las traducciones o adaptaciones forzadas en poemas farragosos, pesados y excesivamente discursivos.
              </p>
              <p>
                Sin embargo, la desviación fonética no es el error más grave: el daño auténtico radica en la <strong>superstición matemática</strong> de creer que la métrica engendra la poesía. Miles de personas cuentan con los dedos para encajar palabras con calzador, rellenando con artículos forzados o adjetivos vacíos sólo para cumplir la fórmula aritmética. Matsuo Bashō, quien llevó el haiku a su cumbre espiritual, rompió en innumerables ocasiones el esquema estricto (<em>jiamari</em> por exceso o <em>jitarazu</em> por defecto) cuando la respiración del instante vivo lo exigía.
              </p>
            </div>

            {/* Core rule banner */}
            <div className="p-4 bg-stone-100 border-l-3 border-stone-800 rounded-r-md text-stone-800 text-sm font-serif italic leading-relaxed">
              «Si un poema cumple estrictamente con el esquema 5-7-5 pero ha sido concebido desde la fábrica del intelecto y el cálculo retórico, podrá ser una curiosidad métrica o un acertijo escolar, pero jamás será un haiku.»
            </div>
          </section>

          {/* Section 1.2 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 1.2
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Haiku versus Senryū: El espejo del cosmos frente a la comedia humana
              </h2>
            </div>

            <p className="text-stone-700 text-base leading-relaxed font-serif">
              Para comprender la pureza del haiku es indispensable examinar qué <em>no</em> es. Durante el florecimiento urbano del periodo Edo en Japón, se popularizó otra forma poética que comparte exactamente la misma envoltura formal de diecisiete onji: el <strong>Senryū</strong> (川柳), bautizado en honor al maestro Karai Senryū.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white my-4 shadow-xs">
              <table className="w-full text-xs text-left">
                <thead className="bg-stone-100 border-b border-stone-200 text-stone-700 uppercase tracking-wider font-mono">
                  <tr>
                    <th className="p-3">Dimensión</th>
                    <th className="p-3">El Haiku (俳句)</th>
                    <th className="p-3">El Senryū (川柳)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  <tr>
                    <td className="p-3 font-semibold text-stone-900 bg-stone-50/60">Foco de la mirada</td>
                    <td className="p-3">La naturaleza impersonal, los ciclos cósmicos, la flor, la roca.</td>
                    <td className="p-3">La naturaleza humana, las debilidades morales, las pasiones y costumbres.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-900 bg-stone-50/60">Tono anímico</td>
                    <td className="p-3">Reverente, asombrado, silencioso, contemplativo.</td>
                    <td className="p-3">Mordaz, irónico, pícaro, satírico o humorístico.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-900 bg-stone-50/60">Rol del intelecto</td>
                    <td className="p-3">El intelecto calla por completo para que la realidad se revele.</td>
                    <td className="p-3">El intelecto agudo produce el remate ingenioso o la burla.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-stone-900 bg-stone-50/60">Dimensión espiritual</td>
                    <td className="p-3">Vía de despertar y disolución del ego (<em>Dō</em>).</td>
                    <td className="p-3">Crónica mundana y psicológica de la sociedad civil.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-stone-700 text-base leading-relaxed font-serif">
              Un gran porcentaje de los textos que los lectores occidentales escriben bajo la etiqueta de "haiku" son, en rigor, <strong>senryū involuntarios</strong>: anécdotas domésticas, comentarios ingeniosos sobre el tráfico, desahogos románticos o chistes breves. Conocer esta frontera es crucial para limpiar nuestra intención creadora.
            </p>

            <div className="pt-2">
              <button
                onClick={onGoToComparator}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-900 hover:text-stone-700 underline underline-offset-4"
              >
                Abrir laboratorio comparativo en pantalla completa →
              </button>
            </div>
          </section>

          {/* Section 1.3 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 1.3
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Kokoro (心) y Mushin (無心): El abandono de la fábrica del ego
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p>
                La poética y la filosofía Zen distinguen dos facultades esenciales para aproximarse al fenómeno del poema:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-sans text-xs">
                <div className="p-4 bg-stone-50 border border-stone-200 rounded-md">
                  <div className="text-xl font-bold font-serif-japanese text-stone-900 mb-1">心 · Kokoro</div>
                  <div className="font-semibold text-stone-800 mb-1">El corazón-mente / Sensibilidad íntima</div>
                  <p className="text-stone-600 leading-relaxed">
                    No es el sentimentalismo edulcorado de la balada romántica, sino la capacidad de vibrar en simpatía con la vibración del mundo. La porosidad del ser ante la realidad.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 border border-stone-200 rounded-md">
                  <div className="text-xl font-bold font-serif-japanese text-stone-900 mb-1">無心 · Mushin</div>
                  <div className="font-semibold text-stone-800 mb-1">La mente vacía / Libre de ego</div>
                  <p className="text-stone-600 leading-relaxed">
                    Proveniente de la vía Zen y de los maestros de espada. Una conciencia sin intencionalidad literaria, sin vanidad de autor y sin el parloteo de las opiniones.
                  </p>
                </div>
              </div>

              <p>
                El poeta lírico convencional escribe para exhibirse: desea que el lector admire su virtuosismo léxico, su originalidad, su tristeza refinada o su agudeza mental. El <em>haijin</em> (practicante del haiku) hace exactamente lo contrario: <strong>se retira de la escena</strong>. No hay un "yo" que se interponga como un cristal empañado entre el sol y la hierba.
              </p>
            </div>

            {/* Bashō Quote Pullquote */}
            <div className="my-6 p-6 border-y border-stone-300 bg-[#F7F4EE]/50 text-center space-y-2">
              <Quote className="w-6 h-6 text-stone-400 mx-auto" />
              <p className="font-serif text-lg sm:text-xl italic text-stone-800 leading-relaxed max-w-xl mx-auto">
                «Aprende del pino junto al pino; aprende del bambú junto al bambú. En ese aprender debes liberarte de ti mismo. Penetrar en la cosa hasta que su vida secreta se haga una con la tuya: ahí nace el poema.»
              </p>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
                — Matsuo Bashō, registrado por Hattori Dohō en Sanzōshi
              </span>
            </div>
          </section>

          {/* Section 1.4 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 1.4
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                La estética del despojo: Prohibición sagrada de la metáfora
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p>
                En Occidente la metáfora es el trofeo indiscutible del poeta: <em>"Tus cabellos son hebras de sol"</em>, <em>"El mar es un tigre azul rugiendo"</em>. En el haiku canónico tradicional, en cambio, <strong>la metáfora deliberada está proscrita</strong>.
              </p>
              <p>
                ¿Por qué una restricción tan tajante? Porque la metáfora es una construcción artificial del razonamiento intelectual. Cuando afirmas:
              </p>
              <div className="p-3 bg-stone-100 rounded text-center text-sm italic text-stone-700 font-serif">
                «La luna en la noche parece una moneda de plata abandonada en el tejado»
              </div>
              <p>
                has reemplazado la luna viva —con su frialdad, su luz sobre el rocío y su silencio abrumador— por un artefacto creado por tu cerebro para demostrar tu ingenio. Has asesinado a la luna para ensalzar tu analogía humana.
              </p>
              <p>
                El haiku reclama la verdad incondicional de <strong>Mono sono mono</strong> (物そのもの - <em>la cosa en sí misma</em>). No requiere adornos:
              </p>
              <div className="p-4 bg-stone-50 border-l-2 border-stone-800 font-serif text-lg italic text-stone-900">
                La luna clara:<br />
                sobre las esteras,<br />
                sombra de pino.<br />
                <span className="text-xs font-sans not-italic text-stone-500 block mt-2">— Enomoto Kikaku</span>
              </div>
              <p>
                No hay ningún adjetivo calificativo ("magnífica luna", "místico pino"). La sacudida poética proviene de la <strong>yuxtaposición pura</strong> de dos presencias materiales que, al entrar en contacto silencioso dentro de la mente vacía del observador, despiertan un chispazo cósmico de revelación.
              </p>
            </div>
          </section>

          {/* Transition CTA to Studio */}
          <section className="p-6 bg-stone-900 text-stone-100 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Hora de la práctica contemplativa
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Experimenta los 15 minutos de silencio y utiliza el Auditor de Artificios para escribir tu tarea evaluativa.
              </p>
            </div>
            <button
              onClick={onGoToStudio}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-950 bg-stone-100 hover:bg-white rounded-md transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Abrir Taller Mushin</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </section>
        </div>

        {/* Marginal Editorial Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Calligraphy Card */}
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs">
            <div className="h-44 overflow-hidden bg-stone-100">
              <img
                src={calligraphyImage}
                alt="Caligrafía japonesa sobre papel washi"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-1">
                Visualización Estética
              </span>
              <h4 className="font-serif text-base font-bold text-stone-900">
                La economía del trazo (Sumi-e)
              </h4>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-serif">
                Así como la pintura sumi-e con tinta china jamás rellena todo el papel y concede al blanco del lienzo el poder de sugerir el viento y la niebla, el haiku no llena el verso de explicaciones: deja que el silencio del lector complete la eternidad.
              </p>
            </div>
          </div>

          {/* Dewdrop Card */}
          <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs">
            <div className="h-44 overflow-hidden bg-stone-100">
              <img
                src={dewdropImage}
                alt="Gota de rocío en una aguja de pino al amanecer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block mb-1">
                La física del instante
              </span>
              <h4 className="font-serif text-base font-bold text-stone-900">
                El nanosegundo irrepetible
              </h4>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed font-serif">
                Una gota de rocío suspendida no es una abstracción: dura un segundo antes de evaporarse bajo el sol naciente. El haiku es el sismógrafo de esa fragilidad que jamás volverá a repetirse.
              </p>
            </div>
          </div>

          {/* Key reminders check for Classroom students */}
          <div className="p-5 bg-stone-100/70 border border-stone-200 rounded-lg text-xs space-y-3">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Sparkles className="w-4 h-4 text-stone-700" />
              <span>Lista de Chequeo para tu Autoestudio</span>
            </div>

            <ul className="space-y-2 text-stone-600 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">1.</span>
                <span>¿Hay algún "yo", "mi" o "siento" en tus versos? Si lo hay, bórralo.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">2.</span>
                <span>¿Usaste la palabra "como" o "parece"? Si la usaste, es metáfora occidental.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">3.</span>
                <span>¿El poema busca hacer reír o burlarse de alguien? Entonces es un Senryū.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">4.</span>
                <span>¿Nombra un hecho físico real y concreto ocurrido aquí y ahora? Si es así, estás en la senda.</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
};
