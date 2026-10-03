import React from 'react';
import { ArrowRight, Sparkles, Compass, MapPin, Globe, Leaf } from 'lucide-react';
import kigoHeroImage from '../assets/images/kigo_seasons_persimmons_1791027316262.jpg';
import dewdropImage from '../assets/images/zen_moment_dewdrop_1791026800007.jpg';

interface ModuleFourViewProps {
  onGoToStudio: () => void;
  onGoToComparator: () => void;
  onGoToClassroomExport: () => void;
}

export const ModuleFourView: React.FC<ModuleFourViewProps> = ({
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
            src={kigoHeroImage}
            alt="Caquis maduros con escarcha al amanecer, Kigo y estaciones"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

          {/* Marquee Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 max-w-4xl">
            <div className="flex items-center gap-2 text-stone-300 text-xs font-mono tracking-widest uppercase mb-2">
              <span>Módulo 4</span>
              <span>·</span>
              <span>3 Horas Lectivas</span>
              <span>·</span>
              <span>Estaciones y Geografía Poética</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-stone-100 leading-tight">
              El Kigo y la adaptación a Occidente
            </h1>

            <p className="mt-3 text-stone-300 text-sm sm:text-base font-serif italic max-w-2xl leading-relaxed">
              La resonancia cósmica de las estaciones, el Saijiki y la superación del cliché orientalista.
            </p>
          </div>
        </div>

        {/* Operational strip */}
        <div className="px-6 py-3 bg-stone-950/90 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-4">
            <span>Conceptos clave: <strong>Kigo (季語)</strong>, <strong>Saijiki (歳時記)</strong>, <strong>Ki-omoi</strong>, <strong>Descolonización del cliché</strong></span>
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
          {/* Section 4.1 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 4.1
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                ¿Qué es el Kigo (季語)? El anclaje del haiku en el orden cósmico
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900">
                En la tradición lírica japonesa, el <strong>Kigo</strong> (季語, literalmente «palabra de estación») no es una etiqueta meteorológica accesoria ni una indicación decorativa: es el <strong>cordón umbilical que ancla el instante finito en la respiración inagotable del cosmos</strong>.
              </p>
              <p>
                Para la cosmovisión sintoísta y budista, el ser humano no se yergue como un dominador soberbio frente al entorno natural, sino como una criatura más entre el musgo, las piedras y las nubes. La vida entera está regida por los ciclos estacionales. Nacer, madurar, perder la lozanía y disolverse no son castigos: son las cuatro estaciones de la materia viva.
              </p>
              <p>
                Los poetas clásicos estructuraban el año en cinco grandes divisiones catalogadas en los <strong>Saijiki</strong> (歳時記, los monumentales almanaques poéticos estacionales):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 font-sans text-xs">
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <span className="font-bold text-stone-900 block font-serif">Primavera (Haru · 春)</span>
                  <span className="text-stone-600">Deshielo, floración inicial, bruma suave, cantos de ranas y golondrinas.</span>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <span className="font-bold text-stone-900 block font-serif">Verano (Natsu · 夏)</span>
                  <span className="text-stone-600">Chicharras, resolana sofocante, luciérnagas, aguaceros, verdor denso.</span>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <span className="font-bold text-stone-900 block font-serif">Otoño (Aki · 秋)</span>
                  <span className="text-stone-600">Luna clara de cosecha, rocío frío, cuervos en ramas desnudas, hojas secas.</span>
                </div>
                <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                  <span className="font-bold text-stone-900 block font-serif">Invierno (Fuyu · 冬)</span>
                  <span className="text-stone-600">Escarcha matinal, charcos helados, aves migratorias, nieve, carbón ardiente.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4.2 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 4.2
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                El debate occidental: La descolonización del cliché y el exotismo de postal
              </h2>
            </div>

            <p className="text-stone-700 text-base leading-relaxed font-serif">
              Cuando el haiku fue recibido en Occidente a principios del siglo XX, muchos poetas cayeron en una trampa ridícula: el <strong>«japonismo de postal»</strong>. Creyeron que para escribir haikus debían disfrazarse de japoneses imaginarios.
            </p>

            {/* Cliché Warning Box */}
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-md text-xs text-amber-900 space-y-1 font-sans">
              <span className="font-bold uppercase font-mono tracking-wider text-amber-800">
                El pastiche orientalista que debemos erradicar:
              </span>
              <p className="italic font-serif text-stone-800 text-sm my-1">
                «Bajo los cerezos en flor,<br />
                bebo sake en mi kimono,<br />
                escucho la campana del templo.»
              </p>
              <p className="text-stone-600">
                Escrito en Madrid, Buenos Aires, Ciudad de México o Santiago de Chile, este verso es una caricatura postiza. No hay experiencia viva, sino imitación de cromos exóticos.
              </p>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif mt-4">
              <p>
                La enseñanza capital de Matsuo Bashō fue categórica:
              </p>
              <div className="p-3 bg-stone-100 rounded text-center text-sm italic text-stone-800 font-serif">
                «Aprende del pino junto al pino; aprende del bambú junto al bambú.»
              </div>
              <p>
                Bashō jamás escribió sobre una flor que no hubiera pisado ni sobre un pájaro que no hubiera escuchado en sus caminatas descalzas por Japón. <strong>Si Bashō hubiera vivido en los Andes, en la Pampa, en el Mediterráneo o en el Caribe, jamás habría forzado un cerezo en flor</strong>. Habría escrito sobre el olor acre de los olivares bajo el sol de agosto, sobre el cardo seco azotado por el viento del sur, sobre los jacarandás alfombrando de violeta el asfalto o sobre la niebla del río.
              </p>
            </div>

            {/* Translation Table */}
            <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white my-4 shadow-xs">
              <table className="w-full text-xs text-left">
                <thead className="bg-stone-100 border-b border-stone-200 text-stone-700 uppercase tracking-wider font-mono">
                  <tr>
                    <th className="p-3">Cliché Japonés Importado</th>
                    <th className="p-3">Kigo Vernáculo Autóctono (Ejemplos Hispanos)</th>
                    <th className="p-3">Estación Viva</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700 font-sans">
                  <tr>
                    <td className="p-3 font-serif italic text-stone-400">Sakura (Cerezo forzado)</td>
                    <td className="p-3 font-semibold text-stone-900">Almendro en flor, jacarandá, ceibo, azahar</td>
                    <td className="p-3">Primavera temprana</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-serif italic text-stone-400">Semi (Chicharra japonesa)</td>
                    <td className="p-3 font-semibold text-stone-900">Cigarra mediterránea, bicho de luz, resolana</td>
                    <td className="p-3">Pleno verano</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-serif italic text-stone-400">Momiji (Arce japonés)</td>
                    <td className="p-3 font-semibold text-stone-900">Caqui maduro, pámpanos de vid, hoja de plátano</td>
                    <td className="p-3">Otoño tardío</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-serif italic text-stone-400">Kogarashi (Viento de Edo)</td>
                    <td className="p-3 font-semibold text-stone-900">Cierzo, tramontana, pampero, zonda</td>
                    <td className="p-3">Invierno cortante</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4.3 */}
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Capítulo 4.3
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                Kigo explícito frente a Kigo latente (Ki-omoi)
              </h2>
            </div>

            <div className="text-stone-700 text-base leading-relaxed space-y-4 font-serif">
              <p>
                Los maestros del género no necesitan nombrar la estación con mayúsculas. De hecho, consideran de superior sutileza el <strong>Kigo latente</strong> (donde la estación se respira sin necesidad de enunciar la palabra «otoño» o «invierno»).
              </p>
              <p>
                Analicemos el caso maestro de Bashō:
              </p>
              <div className="p-4 bg-stone-50 border-l-2 border-stone-800 font-serif text-lg italic text-stone-900">
                El mar se oscurece:<br />
                los chillidos de los patos<br />
                son apenas blancos.<br />
                <span className="text-xs font-sans not-italic text-stone-500 block mt-2">— Matsuo Bashō (Kigo: patos salvajes / kamo = invierno)</span>
              </div>
              <p>
                Bashō no dice «hace frío en invierno». Nombra los patos salvajes en el mar crepuscular, y el lector siente físicamente la helada sobre la piel.
              </p>
              <p>
                El <strong>Muki-haiku</strong> (haiku sin kigo) practicado por poetas modernos como Santōka Taneda u Ozaki Hōsai tiene valor testimonial en el Japón contemporáneo; sin embargo, en el aula y en la formación pedagógica, el Kigo sigue siendo el remedio más eficaz contra la abstracción desbocada del ego occidental.
              </p>
            </div>
          </section>

          {/* Transition CTA to Studio */}
          <section className="p-6 bg-stone-900 text-stone-100 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-white">
                Hora de crear tu propio Saijiki local
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Identifica el Kigo autóctono de tu ciudad o entorno rural y redacta tu tarea para Google Classroom.
              </p>
            </div>
            <button
              onClick={onGoToStudio}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-950 bg-stone-100 hover:bg-white rounded-md transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Abrir Taller de Escritura</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </section>
        </div>

        {/* Marginal Editorial Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Persimmon Seasonal Card */}
          <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Leaf className="w-4 h-4 text-amber-700" />
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                La Biología del Poema
              </span>
            </div>
            <h4 className="font-serif text-base font-bold text-stone-900">
              El Kigo como brújula cósmica
            </h4>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed font-serif">
              Un haiku no vive en el vacío de la estratosfera: tiene los pies hundidos en la tierra húmeda de un mes concreto del año. Sin Kigo, el poema flota sin gravedad.
            </p>
          </div>

          {/* Local Geographic Card */}
          <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-stone-700" />
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                Descolonización Poética
              </span>
            </div>
            <h4 className="font-serif text-base font-bold text-stone-900">
              La mirada que habita su tierra
            </h4>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed font-serif">
              Honrar el haiku no es disfrazarse de samurai; es mirar tu plaza, tu árbol de la acera o tu río con la misma inocencia con que Bashō miraba los arrozales de Honshu.
            </p>
          </div>

          {/* Checklist for Module 4 Classroom */}
          <div className="p-5 bg-stone-100/70 border border-stone-200 rounded-lg text-xs space-y-3">
            <div className="flex items-center gap-1.5 font-bold text-stone-900">
              <Sparkles className="w-4 h-4 text-stone-700" />
              <span>Lista de Chequeo · Tarea 4</span>
            </div>

            <ul className="space-y-2 text-stone-600 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">1.</span>
                <span>¿Es un elemento de tu entorno físico inmediato?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">2.</span>
                <span>¿Descartaste por completo kimonos, pagodas o cerezos importados?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">3.</span>
                <span>¿Fija la estación sin necesidad de explicarla con adjetivos?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-stone-900 font-bold">4.</span>
                <span>¿El poema dialoga con la flora, fauna o clima de tu latitud?</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
};
