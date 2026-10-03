import { Module, PracticalExercise, HaikuComparisonItem } from '../types/course';

export const COURSE_INFO = {
  title: 'La Esencia del Haiku: Más allá de la métrica',
  subtitle: 'Plataforma de Aprendizaje Autónomo sobre la vía contemplativa, estética y espiritual de la poesía breve japonesa',
  authorRole: 'Profesor Carlos García Torín · Especialista en Literatura Japonesa y Diseño Instruccional',
  totalModules: 5,
  courseOverview: `Este curso tiene como propósito desmitificar la simplificación occidental que reduce el haiku a una fórmula matemática de 3 versos y 17 sílabas (5-7-5). El verdadero haiku no es un acertijo métrico ni un ejercicio de ingenio retórico: es una vía de despertar espiritual (*Dō*), una disciplina de la mirada nacida del silencio, la contemplación despojada del ego y la captación del instante eterno.`,
};

export const MODULES_LIST: Module[] = [
  {
    id: 1,
    slug: 'modulo-1-estructura-intelecto',
    number: 'Módulo 1',
    title: 'La trampa de la estructura y el abandono del intelecto',
    subtitle: 'Métrica vs. Esencia, Haiku vs. Senryū, y la estética de la mente vacía (Mushin)',
    kanji: '無心',
    kanjiMeaning: 'Mushin · Mente vacía / Sin ego',
    estimatedHours: '3 horas de estudio y práctica',
    concepts: ['Kokoro (心)', 'Mushin (無心)', 'Onji vs. Sílaba', 'Haiku vs. Senryū', 'La imagen sin metáfora'],
    summary: 'Desmontaje de la obsesión silábica, diferenciación ontológica frente al Senryū, y renuncia radical a la metáfora para que la naturaleza hable sin el filtro del yo.',
    isAvailable: true,
  },
  {
    id: 2,
    slug: 'modulo-2-satori-instante',
    number: 'Módulo 2',
    title: 'El Satori: La revelación y el chispazo del instante',
    subtitle: 'La iluminación cotidiana y el nanosegundo donde sujeto y objeto se funden',
    kanji: '悟り',
    kanjiMeaning: 'Satori · Despertar súbito',
    estimatedHours: '3 horas de estudio y práctica',
    concepts: ['Satori (悟り)', 'Kireji (切れ字)', 'El corte perceptivo', 'Lo ordinario como absoluto'],
    summary: 'El haiku como sismógrafo del despertar: cómo registrar el relámpago de conciencia sin convertirlo en mera crónica descriptiva.',
    isAvailable: true,
  },
  {
    id: 3,
    slug: 'modulo-3-mono-no-aware-sabi',
    number: 'Módulo 3',
    title: 'El alma del Haiku: Mono no Aware y Sabi',
    subtitle: 'La suave tristeza por la transitoriedad y la belleza del tiempo desgastado',
    kanji: '寂び',
    kanjiMeaning: 'Sabi · Soledad serena / Pátina',
    estimatedHours: '4 horas de estudio y práctica',
    concepts: ['Mono no Aware (物の哀れ)', 'Sabi (寂)', 'Ma (間 - Vacío fértil)', 'Yūgen (幽玄)'],
    summary: 'La reverberación del vacío y el misterio sutil: aprender a decir menos para que el silencio del lector complete el universo.',
    isAvailable: true,
  },
  {
    id: 4,
    slug: 'modulo-4-kigo-occidente',
    number: 'Módulo 4',
    title: 'El Kigo y la adaptación a Occidente',
    subtitle: 'La resonancia cósmica de las estaciones y la superación del exotismo artificial',
    kanji: '季語',
    kanjiMeaning: 'Kigo · Palabra de estación',
    estimatedHours: '3 horas de estudio y práctica',
    concepts: ['Kigo (季語)', 'Saijiki (歳時記)', 'Geografía emocional', 'Descolonización del cliché'],
    summary: 'Cómo conectar con la pulsión estacional propia de nuestro entorno geográfico sin impostar sauces ni cerezos artificiales.',
    isAvailable: true,
  },
  {
    id: 5,
    slug: 'modulo-5-haijin-jisei',
    number: 'Módulo 5',
    title: 'Los grandes Haijin y el Jisei',
    subtitle: 'Bashō, Buson, Issa, Shiki y el poema de despedida de la vida',
    kanji: '辞世',
    kanjiMeaning: 'Jisei · Poema de muerte',
    estimatedHours: '4 horas de estudio y práctica',
    concepts: ['Ichigo Ichie (一期一会)', 'Bashō / Buson / Issa / Shiki', 'Shōji (生死)', 'Jisei (辞世)'],
    summary: 'Las cuatro miradas canónicas y el testamento poético: la disolución serena de la frontera entre vivir y morir.',
    isAvailable: true,
  },
];

export const MODULE_1_COMPARISONS: HaikuComparisonItem[] = [
  {
    verse: [
      'Un viejo estanque:',
      'salta una rana,',
      'ruido de agua.'
    ],
    type: 'haiku',
    author: 'Matsuo Bashō (古池や 蛙飛びこむ 水の音)',
    explanation: 'No hay artificio, no hay opinión sobre si el estanque es triste o alegre. El poeta desaparece. Se funden el silencio ancestral (estanque) y el dinamismo efímero (salto), revelando la totalidad cósmica.',
    keyAspect: 'Mushin puro, comunión con la naturaleza, ausencia de ego.',
  },
  {
    verse: [
      'El prestamista...',
      'también mira los cerezos,',
      'con cara de dinero.'
    ],
    type: 'senryu',
    author: 'Poema anónimo del periodo Edo',
    explanation: 'Comparte exactamente la métrica de 17 onji, pero su lente no está en la trascendencia de la flor, sino en la ridícula flaqueza psicológica del ser humano. Hay ironía, crítica social y observación moral.',
    keyAspect: 'Enfoque en la psicología y comedia humana; satírico, no espiritual.',
  },
  {
    verse: [
      'Mi alma llora,',
      'como solitaria flor silvestre',
      'bajo la lluvia.'
    ],
    type: 'occidental_pseudo',
    author: 'Ejemplo de error occidental frecuente',
    explanation: 'Tiene métrica 5-7-5, pero es la antítesis del haiku: está saturado de ego ("mi alma"), recurre al símil ("como flor") y proyecta patetismo emocional intelectualizado sobre el vegetal.',
    keyAspect: 'Falso haiku: hipertrofia del ego, metáfora explícita y sentimentalismo.',
  },
  {
    verse: [
      'En la rama seca',
      'un cuervo se ha posado:',
      'tarde de otoño.'
    ],
    type: 'haiku',
    author: 'Matsuo Bashō (枯朶に 烏のとまりけり 秋の暮)',
    explanation: 'Pintura sumi-e despojada al límite. El cuervo, la rama y el crepúsculo. Ningún adjetivo intenta convencerte de la soledad; la soledad (Sabi) emana sola de la yuxtaposición exacta de la realidad.',
    keyAspect: 'La imagen directa habla por sí sola.',
  }
];

export const MODULE_1_EXERCISE: PracticalExercise = {
  title: 'Tarea Evaluativa: El despojo del ego y la imagen pura',
  objective: 'Desarrollar la capacidad de registrar un instante de la realidad circundante libre de metáforas, juicios racionales o proyección emocional subjetiva, distinguiendo la mirada del Haiku frente al artificio literario.',
  materialsNeeded: [
    'Cuaderno de notas o soporte analógico/digital',
    'Temporizador para 15 minutos de silencio',
    'Un espacio con presencia natural (un árbol, una ventana, la lluvia en un cristal, un rayo de sol sobre la mesa)'
  ],
  steps: [
    {
      phase: 'Fase 1: Vaciado interior (Mushin) - 15 minutos',
      instruction: 'Siéntate en silencio durante 15 minutos frente a un elemento natural simple. No busques escribir nada durante este tiempo. No intentes "crear poesía". Respira y simplemente observa cómo la luz, el viento, la sombra o el agua existen sin necesitar tu aprobación.',
      reflectionPrompt: '¿Qué pensamientos o impulsos de "embellecer" o calificar la escena surgieron en tu mente? Obsérvalos y déjalos pasar.'
    },
    {
      phase: 'Fase 2: El registro de la cosa en sí (Mono sono mono)',
      instruction: 'Identifica el momento exacto en que ocurrió un hecho mínimo (la caída de una hoja, el crujido de una rama, un insecto sobre una grieta, la gota resbalando). Escribe exactamente lo ocurrido con sustantivos y verbos fácticos. Prohibido terminantemente usar palabras como: "alma", "belleza", "tristeza", "como", "parece", "recuerdo".',
      reflectionPrompt: 'Si eliminas los adjetivos valorativos, ¿la escena sigue vibrando por sí sola?'
    },
    {
      phase: 'Fase 3: Destilación en 3 líneas',
      instruction: 'Condensa la observación en tres líneas sin forzar la cuenta matemática de sílabas. La prioridad absoluta es que la imagen respire y no tenga filtro del yo.',
      reflectionPrompt: '¿Estás tú en el poema o está únicamente la naturaleza revelada?'
    },
    {
      phase: 'Fase 4: Justificación reflexiva para Classroom',
      instruction: 'Redacta un párrafo reflexivo (100-150 palabras) explicando por qué tu texto es un intento de haiku y no un senryū ni un poema lírico subjetivo.',
      reflectionPrompt: '¿En qué punto sentiste la tentación de intelectualizar y cómo la desarmaste?'
    }
  ],
  submissionFormat: 'Entrega en Google Classroom: 1) El Haiku resultante (3 líneas), 2) Bitácora del instante observado (fecha, hora y elemento), 3) Párrafo reflexivo de despojo del ego.',
  classroomSubmissionTemplate: `### ENTREGA DE TAREA - MÓDULO 1
**Nombre del Estudiante:** [Tu Nombre Completo]
**Fecha y Hora de la Observación:** [Ej: Martes 14 de Mayo, 18:30 h]
**Lugar / Elemento Natural:** [Ej: Banco de madera húmedo tras la llovizna]

---

#### 1. Mi Haiku (Imagen sin ego)
[Línea 1 - El marco / contexto]
[Línea 2 - El hecho o acción mínima]
[Línea 3 - La resonancia del instante]

#### 2. Autoanálisis de Artificios
- ¿Contiene metáforas o comparaciones ("como", "cual")?: [No]
- ¿Contiene adjetivos subjetivos ("hermoso", "triste")?: [No]
- ¿Aparece la primera persona ("yo", "mi", "siento")?: [No]

#### 3. Párrafo Reflexivo (Distinción frente al Senryū y al Intelecto)
[Explica aquí en 100-150 palabras cómo experimentaste el silencio de la mente (Mushin) y por qué este texto responde a la sensibilidad espiritual (Kokoro) y no a la ironía humana del Senryū].`,
  rubric: [
    {
      criterion: 'Ausencia de Ego y Lenguaje Figurado (Mushin)',
      weight: '35%',
      description: 'Evalúa la capacidad de desterrar metáforas, símiles, personificaciones y adjetivos emocionales para dejar que la realidad hable por sí misma.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Totalmente limpio de metáforas, sin pronombres en 1ª persona ni adjetivos sentimentales. La imagen es directa, silenciosa y contundente.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Casi limpio, pero desliza un adjetivo levemente interpretativo o una personificación sutil que no arruina la contemplación.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Persisten figuras retóricas menores, comparaciones indirectas o el ego del autor tamizando lo que se observa.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Uso explícito de metáforas ("como perlas", "llora mi pena"), egocentrismo poético o sentimentalismo confesional.' }
      ]
    },
    {
      criterion: 'Diferenciación Haiku vs. Senryū',
      weight: '25%',
      description: 'El poema capta la resonancia del orden natural y cósmico, evitando la sátira, el chiste o el mero comentario de la conducta humana.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Evidencia clara comunión con la naturaleza y respeto sagrado por el fenómeno; nula intención moralizante o cómica.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Se sitúa en la naturaleza, aunque con un leve guiño reflexivo que roza el comentario humano.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Confunde el haiku con un senryū involuntario, centrándose más en la anécdota social que en el fenómeno natural.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'El texto es explícitamente un chiste, una queja social o una burla mundana.' }
      ]
    },
    {
      criterion: 'Concreción del Instante (Aquí y Ahora)',
      weight: '20%',
      description: 'El texto ancla un nanosegundo irrepetible en lugar de una abstracción general o una idea filosófica teórica.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Captura un segundo sensorial específico e irrepetible con nitidez fotográfica y resonancia profunda.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Describe una escena temporal reconocible, aunque con una ligera dispersión en el tiempo.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Describe un paisaje genérico ("en el bosque siempre hay paz") sin anclaje en un acontecimiento puntual.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Conceptos abstractos sin soporte sensorial (habla de "el tiempo", "la vida" o "el destino").' }
      ]
    },
    {
      criterion: 'Reflexión Pedagógica y Metacognición',
      weight: '20%',
      description: 'Capacidad de justificar teóricamente el proceso de despojo mediante los conceptos aprendidos (Kokoro, Mushin).',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Demuestra comprensión íntima de Kokoro y Mushin; autoidentifica con lucidez los impulsos del intelecto que debió suprimir.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Usa correctamente los conceptos clave y reflexiona sobre el proceso, con menor grado de autocrítica.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Comentario descriptivo básico sin articulación profunda de los conceptos teóricos del módulo.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Ausencia de reflexión o justificación meramente mecánica ("hice tres versos").' }
      ]
    }
  ]
};

export const CLASSROOM_ANNOUNCEMENT_MD = `## 🌸 BIENVENIDA AL CURSO: "La Esencia del Haiku: Más allá de la métrica"

**Diseñador instruccional y docente:** Profesor Carlos García Torín  
**Cátedra:** Poética Japonesa, Teoría Literaria y Prácticas Contemplativas  

Estimadas y estimados estudiantes:

Les doy la más cálida y cordial bienvenida a este viaje de aprendizaje y contemplación poética.

En Occidente se nos ha transmitido con frecuencia una idea reduccionista: que escribir un haiku consiste simplemente en contar sílabas con los dedos (5-7-5). Si fuese tan simple, cualquier autómata o juego de salón escolar sería poesía. 

A lo largo de este curso desmitificaremos esa visión mecanicista para descubrir lo que el haiku verdaderamente es: **una vía espiritual y una forma de mirar el mundo**, un adiestramiento de la atención pura donde el ego literario se silencia para que la realidad viva se manifieste en su verdad más profunda.

### ¿Cómo será nuestro viaje? (El proceso del curso en 5 etapas)

1. **Módulo 1: La trampa de la estructura y el abandono del intelecto**  
   Desmontaremos el mito de las 17 sílabas, aprenderemos a distinguir el Haiku del Senryū (la reverencia natural frente a la sátira humana) y ejercitaremos el vaciado mental (*Mushin*) desterrando las metáforas y el artificio del ego.
2. **Módulo 2: El Satori: La revelación y el chispazo del instante**  
   Descubriremos el haiku como registro de un pequeño despertar súbito (*Satori*), fundiendo al observador con lo observado a través de la cesura sagrada del *Kireji*.
3. **Módulo 3: El alma del Haiku: Mono no Aware y Sabi**  
   Cultivaremos la empatía luminosa ante la impermanencia (*Mono no Aware*), la serena belleza del tiempo desgastado (*Sabi*) y la potencia del silencio fértil (*Ma*) que deja entrever el misterio (*Yūgen*).
4. **Módulo 4: El Kigo y la adaptación a Occidente**  
   Comprenderemos el latido cósmico de la palabra de estación (*Kigo*), aprendiendo a componer desde nuestra propia geografía, flora y clima local sin caer en la imitación artificial de clichés japoneses.
5. **Módulo 5: Los grandes Haijin y el Jisei**  
   Exploraremos la mirada canónica de Bashō, Buson, Issa y Shiki (*Ichigo Ichie*), culminando con la tradición del poema de despedida (*Jisei*) y la disolución serena de la frontera entre vivir y morir (*Shōji*).

---

### Un mensaje de bienvenida del Profesor Carlos García Torín:

> *"Aprender a escribir haiku no es memorizar un recetario métrico ni perseguir el aplauso literario; es reaprender a mirar el mundo como si fuese la primera mañana del universo. Les deseo de todo corazón el mayor de los éxitos y lo mejor en este aprendizaje. Que cada verso sea para ustedes una pausa de silencio y un reencuentro con la belleza serena de lo cotidiano."*
> 
> — **Prof. Carlos García Torín**

Los invito a ingresar a la pestaña **Trabajo de clase** y comenzar con la lectura y taller del **Módulo 1**. ¡Bienvenidos y feliz camino!`;

export const MODULE_1_CLASSROOM_MD = `# CURSO GOOGLE CLASSROOM: LA ESENCIA DEL HAIKU
## MÓDULO 1: La trampa de la estructura y el abandono del intelecto

---

### DATOS GENERALES DEL TEMA
- **Profesor/a:** Cátedra de Poética Japonesa y Teoría Literaria
- **Unidad Temática:** Módulo 1 de 5
- **Tiempo estimado:** 3 horas pedagógicas (1.5 h lectura y asimilación teórica / 1.5 h ejercicio contemplativo)
- **Conceptos clave:** *Kokoro* (心), *Mushin* (無心), *Onji* (音数), *Senryū* (川柳), *Mono sono mono* (物そのもの).

---

### 1. MATERIAL DE ESTUDIO (TEORÍA Y PROFUNDIZACIÓN)

#### 1.1 La ilusión occidental del 5-7-5
En casi todas las escuelas occidentales se enseña que un haiku es un poema compuesto por tres versos de 5, 7 y 5 sílabas métricas. Este es el primer obstáculo que debemos derribar.

En japonés tradicional no existen las "sílabas" en el sentido fonético de las lenguas romances o sajonas, sino los **onji** (音字) o **morae** (unidades de peso temporal sonoro). Una vocal larga cuenta como dos tiempos; una consonante nasal final (*n*) cuenta como otro tiempo. Por ello, 17 sílabas en español o en inglés equivalen en densidad sonora a casi 25 o 30 moras japonesas, convirtiendo a menudo la traducción occidental en un poema excesivamente discursivo y pesado.

Pero lo más grave no es la diferencia fonética: es la **ilusión de que la métrica engendra el haiku**. Muchos practicantes se obsesionan con ajustar las palabras contando con los nudillos, rellenando con artículos o ripios innecesarios. Matsuo Bashō, el padre canónico del haiku, rompió en numerosas ocasiones el patrón estricto cuando la vibración del instante lo exigía (*jiamari* o exceso de moras, y *jitarazu* o defecto de moras). 

> **Regla de oro:** Si un poema cumple estrictamente con 5-7-5 pero está concebido desde el intelecto y el cálculo retórico, podrá ser cualquier cosa, pero **no es haiku**.

---

#### 1.2 Haiku versus Senryū: El espejo del cosmos frente a la comedia humana
Para comprender qué es el haiku, es indispensable entender qué **no** es. Durante el periodo Edo se popularizó en Japón otra forma poética que comparte exactamente la misma estructura de 17 onji: el **Senryū** (川柳, llamado así por el poeta Karai Senryū).

¿En qué se diferencian radicalmente?

| Criterio | El Haiku (俳句) | El Senryū (川柳) |
| :--- | :--- | :--- |
| **Núcleo de la mirada** | La naturaleza impersonal, el cosmos, el ciclo de las estaciones. | La naturaleza humana, las debilidades morales, las profesiones, las costumbres. |
| **Tono anímico** | Reverente, asombrado, silencioso, sagrado. | Irónico, satírico, mordaz, humorístico o cínico. |
| **Papel del intelecto** | El intelecto calla para que la realidad se revele. | El intelecto agudo produce el remate cómico o la picardía. |
| **Vínculo espiritual** | Una vía de comunión despojada del ego (*Dō*). | Una crónica mundana de la sociedad urbana. |

Observemos el contraste:

* **Haiku (Bashō):**
  > *Un viejo estanque:*  
  > *salta una rana,*  
  > *ruido de agua.*  
  *(Contemplación donde el sonido acentúa la infinitud del silencio cósmico).*

* **Senryū (Anónimo):**
  > *El prestamista...*  
  > *también mira los cerezos,*  
  > *con cara de dinero.*  
  *(Mirada humana mordaz, psicológica y burlesca sobre la codicia).*

Gran parte de lo que los poetas hispanohablantes componen creyendo hacer haiku son, en realidad, senryū involuntarios: anécdotas urbanas, chistes ingeniosos o juicios sobre las personas.

---

#### 1.3 Kokoro (心) y Mushin (無心): El abandono de la fábrica del ego
La poética japonesa distingue dos facultades esenciales:
1. **Kokoro (心):** Traducido comúnmente como "corazón-mente". No es el corazón sentimental de la balada romántica, sino la capacidad de resonar íntimamente con el mundo; la receptividad pura del ser ante el latido de las cosas.
2. **Mushin (無心):** Literalmente "mente vacía" o "no-mente". Proviene de la filosofía Zen y de las artes marciales. Implica una conciencia desprovista de prejuicios, de vanidad literaria, de ambición estética y de autoafirmación.

El poeta común occidental escribe desde el **ego literario**: busca que el lector admire su vocabulario, su ingenio, su tristeza refinada o su originalidad. El *haijin* (poeta de haiku) hace exactamente lo contrario: **desaparece de la escena**.

Bashō instruía a sus discípulos con estas palabras imborrables:
> *"Aprende del pino junto al pino; aprende del bambú junto al bambú. En ese aprender debes desprenderte de ti mismo. Aprender significa penetrar en la cosa hasta que su vida secreta se vuelva una con la tuya; entonces, el poema brotará espontáneamente."*

Si miras un árbol pensando "voy a escribir un poema brillante sobre este árbol", tu intelecto ha creado un muro infranqueable. Solo cuando el observador y lo observado son la misma cosa, el haiku es posible.

---

#### 1.4 La estética del despojo: Prohibición de la metáfora y el artificio
En la poesía lírica occidental, la metáfora es reina: "Tus ojos son dos zafiros", "La noche es un manto de terciopelo". En el haiku tradicional, **la metáfora es un pecado estético**.

¿Por qué se prohíbe el lenguaje figurado complejo, la alegoría y el símil?
Porque la metáfora es una invención del razonamiento humano. Cuando dices:
> *"La luna parece una moneda de plata olvidada en el tejado"*

Estás interponiendo tu cerebro, tu asociación cultural y tu ocurrencia entre el lector y la luna. Has asesinado a la luna real para reemplazarla por una ocurrencia ingeniosa de tu ego.

El haiku exige la verdad de **Mono sono mono** (物そのもの - la cosa en sí):
> *La luna clara:*  
> *sobre las esteras,*  
> *sombra de pino.*  
*(Enomoto Kikaku)*

No hay adjetivos ornamentales ("mágica luna", "pino majestuoso"). La fuerza del haiku reside en la **yuxtaposición pura de dos realidades concretas** que, al tocarse en el papel, despiden un relámpago de revelación. Si la imagen es auténtica, no necesita muletas retóricas.

---

### 2. TAREA EVALUATIVA Y PRÁCTICA (PARA ENTREGAR EN CLASSROOM)

#### Título de la tarea:
**"El Despojo del Ego: 15 Minutos de Silencio y la Imagen Limpia"**

#### Instrucciones paso a paso para el estudiante:
1. **Vaciado interior (15 min):** Elige un rincón con un elemento de la naturaleza (un tiesto en el balcón, un árbol de la calle, el vapor de una taza junto a la ventana, una hormiga sobre la madera). Siéntate sin móvil, sin bolígrafo y en silencio durante 15 minutos exactos. Respira. Si tu mente empieza a fabricar versos, descártalos.
2. **El hallazgo del instante:** Espera a que un acontecimiento nimio e impersonal ocurra ante tus ojos. No busques lo extraordinario; busca lo inadvertido.
3. **Escritura despojada:** Escribe un poema de 3 líneas donde registres ese hecho. 
   - **Prohibiciones estrictas:** Prohibido usar "como", "parece", "yo", "mi", "siento", "bello", "triste".
   - **Métrica libre:** No te preocupes por forzar el 5-7-5. Busca la concisión respiratoria: un verso corto, uno ligeramente más largo y uno de cierre resonante.
4. **Párrafo reflexivo (100-150 palabras):** Describe qué sentiste al suprimir el deseo de adornar la escena y cómo lograste que el poema no fuera un senryū cómico ni una metáfora lírica.

---

### 3. RÚBRICA FORMATIVA DE EVALUACIÓN (GOOGLE CLASSROOM)

| Criterio | Ponderación | Nivel Destacado (10-9 pts) | Nivel Competente (8-7 pts) | Nivel Básico (6-5 pts) | Nivel Insuficiente (4-1 pts) |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **1. Ausencia de Ego y Metáfora (Mushin)** | 35% | Imagen 100% directa y despojada. Sin metáforas, símiles, personificaciones ni pronombres de primera persona. | Imagen directa con algún adjetivo levemente calificativo que no rompe la atmósfera. | Aparecen metáforas indirectas o una marcada proyección sentimental del autor. | Poema plagado de comparaciones explícitas ("como"), egocentrismo lírico o metáforas tradicionales. |
| **2. Enfoque Haiku vs. Senryū** | 25% | Comunión sagrada con la naturaleza impersonal; desprovisto de moraleja, sátira o chiste social. | Predominio de lo natural, con una leve tentación reflexiva sobre la conducta humana. | Confusión con la sátira social o la anécdota urbana ligera (senryū involuntario). | El texto es abiertamente una burla, una queja mundana o una anécdota chistosa. |
| **3. Concreción del Instante** | 20% | Atrapa un nanosegundo sensorial irrepetible y tangible ("aquí y ahora"). | Escena sensorial concreta, aunque con leve dispersión temporal. | Paisaje genérico o generalización abstracta ("el otoño siempre es bello"). | Abstracciones puras sin sustento sensorial ("el tiempo vuela", "el destino"). |
| **4. Reflexión Metacognitiva** | 20% | Autoanálisis lúcido y profundo articulando con rigor los conceptos de Kokoro y Mushin. | Reflexión correcta sobre el proceso de despojo, con uso adecuado de los términos. | Comentario superficial de la experiencia sin sustento teórico claro. | Omisión del párrafo reflexivo o justificación meramente mecánica. |
`;

export const MODULE_2_COMPARISONS: HaikuComparisonItem[] = [
  {
    verse: [
      'Relámpago en la noche:',
      'el graznido de la garza',
      'rasga la oscuridad.'
    ],
    type: 'haiku',
    author: 'Matsuo Bashō (稲妻や 闇の方へ行く 五位の声)',
    explanation: 'El relámpago ciega por una fracción de segundo y devuelve el mundo a la negrura absoluta; justo entonces, el sonido áspero de la garza que vuela hacia la noche conecta la luz invisible con la audición pura. La mente del lector experimenta un corte súbito: el despertar.',
    keyAspect: 'Satori canónico: revelación donde lo efímero (relámpago) revela la infinitud del vacío (noche).',
  },
  {
    verse: [
      'Veo un pájaro posado',
      'en una rama de roble;',
      'es de color pardo y canta.'
    ],
    type: 'occidental_pseudo',
    author: 'Ejemplo de descripción plana sin Satori',
    explanation: 'Tiene elementos naturales y cumple formalmente, pero no hay revelación ni misterio ontológico. Es un inventario fotográfico muerto, una simple ficha ornitológica sin conmoción ni corte perceptivo.',
    keyAspect: 'Falso haiku: mera crónica descriptiva desprovista de chispazo de iluminación.',
  },
  {
    verse: [
      'El peso de la nieve',
      'en el tallo de bambú:',
      'quiebre repentino.'
    ],
    type: 'haiku',
    author: 'Yosa Buson (雪折の 竹のひびきや 夜の底)',
    explanation: 'El instante-bisagra exacto en que la tensión acumulada del invierno cede. El crujido seco en el silencio de la noche congela el flujo ordinario del tiempo: el observador se funde con la fractura física del mundo.',
    keyAspect: 'Kire perceptivo: el nanosegundo donde el tiempo discursivo se detiene.',
  },
  {
    verse: [
      'Pisé el peine de mi difunta esposa',
      'en la habitación a oscuras:',
      'un frío me recorrió el cuerpo.'
    ],
    type: 'haiku',
    author: 'Yosa Buson (身にしむや 亡妻の櫛を 閨に踏む)',
    explanation: 'Un objeto ordinario y doméstico desvela instantáneamente el peso absoluto de la muerte y la ausencia. El contacto táctil del pie descalzo es el vehículo de un micro-satori desgarrador y concreto.',
    keyAspect: 'Lo ordinario desvelado como absoluto.',
  }
];

export const MODULE_2_EXERCISE: PracticalExercise = {
  title: 'Tarea Evaluativa: La captura del relámpago (El micro-satori cotidiano y el Kireji)',
  objective: 'Identificar el nanosegundo en que lo cotidiano se revela como sagrado o absoluto mediante la técnica del corte (Kire), evitando la mera crónica descriptiva o el inventario visual sin alma.',
  materialsNeeded: [
    'Cuaderno o soporte de notas',
    'Estado de vigilia y atención a los cambios de estado (luz/sombra, silencio/sonido, quietud/movimiento)',
    '15 minutos de exploración del entorno cotidiano'
  ],
  steps: [
    {
      phase: 'Fase 1: El rastreo del instante-bisagra (Kizuki)',
      instruction: 'No busques un paisaje estático. Busca un acontecimiento mínimo donde ocurra un cambio de estado: la gota que cae del grifo y altera la calma, una polilla que golpea la lámpara, el crujido de un mueble al enfriarse, una ráfaga que levanta el polvo.',
      reflectionPrompt: '¿En qué nanosegundo preciso la realidad dejó de ser un fondo continuo y saltó a primer plano?'
    },
    {
      phase: 'Fase 2: La aplicación del Kire (El corte cesura)',
      instruction: 'Separa tu poema en dos polos de tensión: 1) El contexto inmutable o silencioso, 2) El acontecimiento súbito que rasga ese fondo. Utiliza los dos puntos (:) o un guion largo (—) como equivalente occidental del Kireji (ya, kana, keri).',
      reflectionPrompt: '¿Hay un abismo de asombro entre la primera parte y la segunda, o se lee como una frase corrida normal?'
    },
    {
      phase: 'Fase 3: Destilación en 3 versos',
      instruction: 'Escribe el haiku cuidando que no haya explicaciones de causa-efecto ("porque llovió, me mojé"). Deja que los dos elementos choquen en la mente del lector produciendo el chispazo.',
      reflectionPrompt: 'Si eliminas los conectores lógicos, ¿el relámpago sigue iluminando la escena?'
    },
    {
      phase: 'Fase 4: Metacognición para Classroom',
      instruction: 'Redacta un texto de 100-150 palabras justificando por qué tu poema supera la mera descripción visual (inventario) y contiene un auténtico satori de lo ordinario.',
      reflectionPrompt: '¿Qué verdad sobre la existencia o la impermanencia se desveló en ese segundo?'
    }
  ],
  submissionFormat: 'Entrega en Google Classroom: 1) Haiku con corte (Kire) visible, 2) Descripción del cambio de estado sensorial observado, 3) Autoanálisis sobre la diferencia entre descripción pasiva y revelación ontológica.',
  classroomSubmissionTemplate: `### ENTREGA DE TAREA - MÓDULO 2: EL SATORI Y EL INSTANTE
**Nombre del Estudiante:** [Tu Nombre Completo]
**Fecha y Hora del Instante:** [Ej: Viernes 22:15 h]
**Cambio de estado observado:** [Ej: El encendido súbito de una farola sobre la llovizna]

---

#### 1. Mi Haiku del Satori (Con cesura / Kire)
[Elemento A: Marco inmutable / silencio] :
[Elemento B: El acontecimiento súbito]
[Resonancia del corte en el lector]

#### 2. Autoauditoría del Chispazo
- ¿Es una simple descripción de cosas presentes ("aquí hay un árbol")?: [No, hay un cambio de estado]
- ¿Existe un corte o Kire (dos puntos, pausa, salto perceptivo)?: [Sí]
- ¿Lo cotidiano se desvela con trascendencia o peso existencial?: [Sí]

#### 3. Párrafo Reflexivo (La chispa frente al inventario descriptivo)
[Explica en 100-150 palabras por qué este poema no es un simple informe visual y cómo experimentaste la revelación en la que el observador y lo observado se hicieron uno solo].`,
  rubric: [
    {
      criterion: 'Chispa de Revelación (Satori cotidiano)',
      weight: '35%',
      description: 'Evalúa si el poema captura un nanosegundo de iluminación donde lo ordinario se desvela como absoluto, superando la mera crónica pasiva.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Captura un auténtico relámpago perceptivo; el suceso mínimo estremece la conciencia del lector y desvela la totalidad.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Existe un momento de asombro perceptible, aunque con un leve vestigio de explicación que amortigua el impacto.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Se aproxima a la revelación, pero predomina el inventario de objetos o la observación estática sin tensión ontológica.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Simple informe documental o crónica pedestre sin asombro, emoción estética ni revelación.' }
      ]
    },
    {
      criterion: 'Estructura del Corte (Kire / Kireji)',
      weight: '25%',
      description: 'El poema utiliza eficazmente la cesura para yuxtaponer dos polos de la realidad (lo continuo y lo efímero) sin conectores subordinados.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'El corte genera una pausa fértil y un abismo resonante entre los dos polos; ausencia total de nexos causales discursivos.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'El corte está presente y funciona, aunque la transición sintáctica resulta ligeramente predecible.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Corte débil o dependiente de conectores gramaticales ("y entonces", "mientras") que diluyen la energía.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Texto corrido en una sola frase discursiva sin corte, pausa ni contraste entre dos realidades.' }
      ]
    },
    {
      criterion: 'Fusión de Sujeto y Objeto (Fueki Ryūkō)',
      weight: '20%',
      description: 'Demuestra la interacción entre lo inmutable (fondo cósmico) y lo mudable (acontecimiento efímero), sin proyecciones narcisistas.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Equilibrio maestro entre la permanencia y el cambio; la mirada del autor se disuelve en el fenómeno mismo.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Se percibe la interacción entre lo eterno y lo efímero con adecuada fidelidad sensorial.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Desequilibrio evidente: o todo es estático o el suceso carece de marco resonante.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'El poema gira alrededor del autor y sus pensamientos, impidiendo la comunión con el fenómeno.' }
      ]
    },
    {
      criterion: 'Rigor Metacognitivo en Classroom',
      weight: '20%',
      description: 'Capacidad de justificar conceptualmente cómo el poema encarna la noción de Satori y rompe con la poesía descriptiva occidental.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Articulación pedagógica impecable de los conceptos de Satori, Kireji y Fueki Ryūkō, con profunda autocrítica.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Explicación coherente que reconoce con solvencia la diferencia entre descripción pasiva y revelación.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Reflexión parcial o redundante con respecto a lo ya expresado en los versos.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Ausencia de reflexión o comentario puramente anecdótico sin referencia teórica.' }
      ]
    }
  ]
};

export const MODULE_2_CLASSROOM_MD = `# CURSO GOOGLE CLASSROOM: LA ESENCIA DEL HAIKU
## MÓDULO 2: El Satori: La revelación y el chispazo del instante

---

### DATOS GENERALES DEL TEMA
- **Profesor/a:** Cátedra de Poética Japonesa y Teoría Literaria
- **Unidad Temática:** Módulo 2 de 5
- **Tiempo estimado:** 3 horas pedagógicas (1.5 h teoría y exégesis / 1.5 h práctica del instante-bisagra)
- **Conceptos clave:** *Satori* (悟り), *Kizuki* (気づき - El darse cuenta), *Kireji* (切れ字 - Palabra cortante), *Fueki Ryūkō* (不易流行 - Lo inmutable y lo mudable).

---

### 1. MATERIAL DE ESTUDIO (TEORÍA Y PROFUNDIZACIÓN)

#### 2.1 ¿Qué es el Satori poético? Más allá de la iluminación mística
En la tradición del Budismo Zen, el **Satori** (悟り) designa la iluminación súbita: el despertar repentino a la verdadera naturaleza de la realidad, donde la ilusión de la mente fragmentada y el ego individual se disuelven de golpe.

Trasladado al territorio del haiku por Matsuo Bashō, el satori no es una experiencia reservada a monjes ascetas sentados durante cuarenta años en cuevas del Himalaya. Es lo que D.T. Suzuki y R.H. Blyth denominaron **«un pequeño satori cotidiano»** (*kizuki*, 気づき, o el sobresalto de la conciencia).

El haiku es, en su raíz ontológica, el **sismógrafo de un nanosegundo de despertar**. 

En la vida ordinaria caminamos en estado de sonambulismo perceptivo: miramos las cosas a través de etiquetas utilitarias. Miramos una silla pensando "sirve para sentarse"; miramos un reloj pensando "llego tarde"; miramos una flor pensando "es bonita". Nuestras categorías mentales amortiguan el impacto directo de la existencia.

El satori ocurre cuando esa coraza conceptual se quiebra de improviso. Por una fracción de segundo, la mente discursiva se detiene en seco. En ese instante infinitesimal, el sujeto que mira y el objeto mirado dejan de ser dos entidades separadas: **se funden en una sola realidad viva**. El haiku es el intento de fijar en palabras ese relámpago antes de que el intelecto regrese a ponerle nombres y explicaciones.

---

#### 2.2 La trampa de la descripción vacía: Por qué el haiku no es un "inventario"
Este es el error más recurrente de los practicantes occidentales que ya han superado la tentación de la rima: creer que un haiku es una simple fotografía verbal o un informe meteorológico.

Leamos este contraejemplo:
> *El pájaro marrón*  
> *está sobre la rama del árbol,*  
> *mueve las alas.*  

¿Cumple con la temática natural? Sí. ¿Tiene tres versos? Sí. ¿Está libre de metáforas groseras? Sí. Y sin embargo, **está muerto**. Es una descripción plana, un inventario ornitológico inerte. Carece de *chispazo*. No hay revelación, no hay abismo, no hay vértigo ontológico.

Para que haya haiku, **lo cotidiano debe desvelarse como sagrado o absoluto**. 

Masaoka Shiki (creador del término moderno *haiku* a finales del siglo XIX) defendió el concepto de *Shasei* (写生, bosquejo del natural). Sin embargo, el propio Shiki advirtió que el *shasei* que solo copia la cáscara externa de la realidad se convierte en un catálogo aburrido. El verdadero boceto del natural es aquel donde el espíritu de la cosa resplandece en su singularidad única e irrepetible.

Observemos la diferencia abismal con Bashō:
> *Relámpago en la noche:*  
> *el graznido de la garza*  
> *rasga la oscuridad.*  
*(Inazuma ya / yami no kata e yuku / goi no koe)*

Aquí no hay inventario: el relámpago ciega durante un milisegundo y devuelve el universo a la negrura absoluta. En mitad de esa oscuridad impenetrable, el sonido áspero e invisible de la garza nocturna rasga el espacio. Se tocan la luz fugaz, el silencio cósmico y la vida salvaje. La mente del lector sufre una sacudida: eso es Satori.

---

#### 2.3 El Kireji (切れ字): La palabra cortante que abre el abismo
¿Cómo se logra técnicamente provocar esa revelación en el lector? Mediante el **Kire** (切れ, el corte) y el **Kireji** (切れ字, la palabra cortante).

En la métrica japonesa clásica, los poetas utilizaban partículas gramaticales que no tienen traducción léxica directa, como *ya* (や), *kana* (かな) o *keri* (けり). Estas partículas no significan nada en sí mismas; su función es actuar como un **freno respiratorio**, una cesura que suspende el tiempo discursivo.

El Kireji cumple tres funciones magistrales:
1. **Rompe la sintaxis discursiva:** Evita que el poema sea una frase continuada de causa y efecto (*"como llovió, me mojé"*).
2. **Separa dos polos de tensión:** Crea un vacío fértil (*Ma*) entre dos imágenes concretas.
3. **Hace saltar la chispa:** Al colocar dos realidades autónomas separadas por un corte, la mente del lector se ve obligada a saltar el abismo que las separa. En ese salto, como entre los dos electrodos de una batería, salta la chispa del Satori.

En las lenguas occidentales, al no disponer de partículas como *ya* o *kana*, representamos el *Kireji* mediante **signos de puntuación contundentes**: los dos puntos (:), la raya larga (—) o un punto y aparte.

Ejemplo de corte y tensión polar:
> *El peso de la nieve*  
> *en el tallo de bambú:*  
> *quiebre repentino.*  
*(Yosa Buson)*

Los dos puntos tras el bambú congelado suspenden el aliento: la tensión acumulada durante horas de nevada se concentra en la pausa, hasta que el quiebre sonoro devuelve al lector a la vigilia del presente.

---

#### 2.4 Fueki Ryūkō (不易流行): Lo inmutable y lo efímero
Bashō formuló en sus últimos años de vida una de las doctrinas estéticas más luminosas de Japón: **Fueki Ryūkō** (不易流行).
* **Fueki (不易):** Lo inmutable, lo eterno, el fondo silencioso de la naturaleza que permanece inalterado a través de los milenios (el estanque viejo, la noche oscura, la montaña).
* **Ryūkō (流行):** Lo mudable, lo transitorio, el suceso efímero que ocurre una sola vez y jamás volverá a repetirse (el salto de la rana, el relámpago, la hoja que cae).

Un haiku perfecto es la **colisión armónica entre Fueki y Ryūkō**:
- Si el poema solo muestra *Fueki* (lo eterno), se vuelve una filosofía abstracta o un paisaje estático y aburrido.
- Si solo muestra *Ryūkō* (lo pasajero), se convierte en una anécdota anecdótica y superficial.

Cuando el suceso efímero choca contra el fondo de lo inmutable, el tiempo se detiene: **eso es el Satori del Haiku**.

---

### 2. TAREA EVALUATIVA (INSTRUCCIONES PARA GOOGLE CLASSROOM)

**Título de la Tarea:**  
**"Tarea 2: La captura del relámpago (El micro-satori cotidiano y el Kireji)"**

#### Instrucciones para el alumno:
1. **La cacería del instante-bisagra (Kizuki):**  
   Durante las próximas 24 horas, mantén encendido un estado de atención periférica. No busques paisajes monumentales. Busca un **cambio de estado sensorial** en lo cotidiano:
   - El tintineo de una cucharilla que cesa de repente.
   - El reflejo del sol poniente que enciende una ventana lejana durante 3 segundos.
   - Una ráfaga de aire que voltea una hoja de periódico en una calle vacía.
   - La caída de una manzana sobre la tierra húmeda.
2. **Aplicación del Corte (Kire):**  
   Escribe un poema de tres versos articulado en torno a una cesura clara (: o —). En un polo debe estar el fondo silencioso (*Fueki*); en el otro polo, el acontecimiento súbito (*Ryūkō*).
3. **Depuración anti-inventario:**  
   Revisa tu texto: ¿Es una simple lista de objetos o se produce un salto eléctrico de sentido en el corte? Elimina cualquier explicación causal (*"porque", "cuando", "entonces"*).
4. **Párrafo de justificación reflexiva (100 a 150 palabras):**  
   Explica cuál fue el cambio de estado físico percibido y cómo la tensión del *Kireji* permitió que lo ordinario se manifestara como absoluto.

---

### 3. RÚBRICA FORMATIVA DE EVALUACIÓN (GOOGLE CLASSROOM)

| Criterio | Ponderación | Nivel Destacado (10-9 pts) | Nivel Competente (8-7 pts) | Nivel Básico (6-5 pts) | Nivel Insuficiente (<5 pts) |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **1. Chispa de Revelación (Satori)** | 35% | Captura un auténtico relámpago perceptivo; el suceso mínimo estremece la conciencia y desvela la totalidad. | Asombro perceptible con un leve vestigio de explicación que amortigua ligeramente el impacto. | Predomina el inventario de objetos o la observación estática sin tensión ontológica. | Simple informe documental, fotografía plana o crónica sin conmoción ni revelación. |
| **2. Estructura del Corte (Kire / Kireji)** | 25% | El corte genera una pausa fértil y un abismo resonante; ausencia total de nexos causales o discursivos. | El corte está presente y funciona, aunque la transición sintáctica resulta algo predecible. | Corte débil o dependiente de conectores gramaticales ("y entonces", "mientras") que diluyen la energía. | Frase corrida en prosa sin corte, pausa ni contraste entre dos realidades. |
| **3. Tensión Fueki Ryūkō** | 20% | Fusión magistral entre lo inmutable (fondo cósmico) y lo efímero (acontecimiento irrepetible). | Se percibe la interacción entre lo eterno y lo transitorio con adecuada nitidez sensorial. | Desequilibrio: o el poema es totalmente estático o el suceso carece de marco resonante. | Poema centrado en los pensamientos del autor sin anclaje en la tensión cósmica. |
| **4. Justificación Metacognitiva** | 20% | Articulación impecable de los conceptos de Satori, Kireji y Fueki Ryūkō con lúcida autocrítica. | Explicación solvente que distingue con claridad la descripción pasiva frente a la revelación. | Comentario superficial o redundante con respecto a lo ya expresado en los versos. | Ausencia de justificación o comentario puramente anecdótico sin rigor conceptual. |
`;

export const MODULE_3_COMPARISONS: HaikuComparisonItem[] = [
  {
    verse: [
      'En la rama seca',
      'un cuervo se ha posado:',
      'tarde de otoño.'
    ],
    type: 'haiku',
    author: 'Matsuo Bashō (枯朶に 烏のとまりけり 秋の暮)',
    explanation: 'El canon indiscutible de Sabi y Yūgen. No hay ni un solo adjetivo que intente convencerte de la soledad. El contraste cromático entre la rama deshojada, el plumaje negro del cuervo y la penumbra del crepúsculo sugiere una soledad cósmica infinita nacida del despojo radical.',
    keyAspect: 'Sabi supremo: la belleza austera del tiempo y la soledad serena sin autocompasión.',
  },
  {
    verse: [
      '¡Ay, pobre flor marchita!',
      'Qué pena me da verte morir,',
      'el invierno destruye todo.'
    ],
    type: 'occidental_pseudo',
    author: 'Ejemplo de patetismo melodrama occidental',
    explanation: 'Confunde el "Mono no Aware" con el melodrama o la lástima neurótica. Usa exclamaciones teatrales ("¡Ay!"), lenguaje hiperbólico y lamento del ego que se resiste a la muerte, en lugar de la suave y agradecida tristeza zen ante la ley cósmica de la impermanencia.',
    keyAspect: 'Falso Mono no Aware: histeria dramática y sentimentalismo en lugar de aceptación reverente.',
  },
  {
    verse: [
      'En este mundo de rocío,',
      'es sólo un mundo de rocío;',
      'y sin embargo...'
    ],
    type: 'haiku',
    author: 'Kobayashi Issa (露の世は 露の世ながら さりながら)',
    explanation: 'Compuesto tras la muerte de su pequeña hija Sato. Issa conoce la doctrina budista de que la vida terrenal es tan fugaz como una gota de rocío matinal. Y sin embargo (sarinagara), el corazón humano late y duele. Es la cumbre de Mono no Aware: abrazar el dolor sin resentimiento cósmico.',
    keyAspect: 'Mono no Aware puro: la conmoción del corazón ante la fragilidad de lo amado.',
  },
  {
    verse: [
      'Viento de otoño:',
      'lo que no se mueve',
      'es la piedra.'
    ],
    type: 'haiku',
    author: 'Yosa Buson (秋風の 吹けども青し 栗のいが)',
    explanation: 'Utilización magistral del vacío fértil (Ma) y la sugestión (Yūgen). El viento barre las hojas, el polvo y los seres vivos; la quietud silenciosa de la roca revela con sutileza estremecedora la fuerza invisible del paso del tiempo.',
    keyAspect: 'Yūgen y Ma: sugerir la inmensidad del viento a través de la inmovilidad de la roca.',
  }
];

export const MODULE_3_EXERCISE: PracticalExercise = {
  title: 'Tarea Evaluativa: La pátina del tiempo y el vacío fértil (Mono no Aware y Sabi)',
  objective: 'Evocar la belleza de lo transitorio, lo desgastado y lo inacabado mediante la sobriedad del Sabi y la resonancia del vacío (Ma / Yūgen), suprimiendo todo dramatismo o adjetivación quejumbrosa.',
  materialsNeeded: [
    'Cuaderno de observación',
    'Un objeto o elemento que evidencie el paso inexorable del tiempo (madera con pátina, piedra cubierta de musgo, herramienta oxidada, muro agrietado, fruto maduro cayendo)',
    '15 minutos de contemplación en soledad serena'
  ],
  steps: [
    {
      phase: 'Fase 1: Reconocimiento del Sabi (La pátina y la huella)',
      instruction: 'Enfoca tu mirada en una imperfección natural provocada por el desgaste del tiempo. No busques lo nuevo, pulido o reluciente. Observa la cicatriz, la fisura o el envejecimiento orgánico de la materia sin juzgarlo como "deterioro negativo".',
      reflectionPrompt: '¿Puedes percibir la nobleza de esa materia que ha resistido a la lluvia y a los soles?'
    },
    {
      phase: 'Fase 2: El cultivo del vacío (Ma)',
      instruction: 'Escribe un borrador de tres versos. A continuación, elimina la mitad de las palabras. Quita explicaciones obvias. Deja que el silencio entre las líneas (*Ma*) sea más amplio que el texto.',
      reflectionPrompt: '¿Estás dejando espacio para que la imaginación del lector complete el misterio de la escena?'
    },
    {
      phase: 'Fase 3: Destilación del Mono no Aware',
      instruction: 'Comprueba el tono afectivo: no debe haber lamentos personales ("¡qué desgracia!"), sino una aceptación tranquila, humilde y conmovedora de la impermanencia (*Mujō*).',
      reflectionPrompt: '¿La tristeza que emana de los versos es serena y agradecida o quejumbrosa?'
    },
    {
      phase: 'Fase 4: Justificación reflexiva para Classroom',
      instruction: 'Redacta un texto de 100 a 150 palabras justificando cómo tu poema articula el Sabi y el Mono no Aware a través de la sugerencia (Yūgen) y el vacío fértil (Ma).',
      reflectionPrompt: '¿Qué verdad callada late detrás de las palabras que elegiste no decir?'
    }
  ],
  submissionFormat: 'Entrega en Google Classroom: 1) Haiku de resonancia Sabi / Mono no Aware (3 versos despojados), 2) Fotografía mental del elemento desgastado observado, 3) Párrafo de justificación reflexiva (Ma y Yūgen).',
  classroomSubmissionTemplate: `### ENTREGA DE TAREA - MÓDULO 3: MONO NO AWARE Y SABI
**Nombre del Estudiante:** [Tu Nombre Completo]
**Fecha y Contexto de Observación:** [Ej: Domingo por la tarde, peldaño de piedra gastado en un jardín antiguo]
**Elemento con pátina del tiempo (Sabi):** [Ej: Clavo oxidado en una viga de madera agrietada]

---

#### 1. Mi Haiku (Sabi y Sugestión Yūgen)
[Línea 1 - El vestigio del tiempo / marco sobrio]
[Línea 2 - La presencia de lo transitorio]
[Línea 3 - La reverberación en el vacío (Ma)]

#### 2. Autoauditoría de Sensibilidad
- ¿Contiene quejas o aspavientos melodramáticos ("ay", "pobre", "dolor")?: [No, aceptación serena]
- ¿Deja espacio en blanco (Ma) para que el lector intuya el misterio (Yūgen)?: [Sí]
- ¿Se manifiesta la belleza de lo humilde, lo imperfecto y lo desgastado (Sabi)?: [Sí]

#### 3. Párrafo Reflexivo (La resonancia del vacío fértil)
[Explica en 100-150 palabras cómo trabajaste la contención verbal para sugerir la impermanencia cósmica sin nombrarla explícitamente y cómo dialogan el Sabi y el Mono no Aware en tu poema].`,
  rubric: [
    {
      criterion: 'Encarnación de Sabi y Mono no Aware',
      weight: '35%',
      description: 'El poema capta la pátina del tiempo, la soledad cósmica serena y la conmoción ante la transitoriedad, desprovisto de melodrama o lamentos subjetivos.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Atmósfera sobrecogedora de Sabi puro; conmoción serena ante la impermanencia sin el menor atisbo de melodrama o lástima egoica.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Evoca con acierto la belleza de lo desgastado y efímero, con algún matiz ligeramente melancólico que roza la subjetividad.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Aproximación superficial a la vejez o el deterioro, con tentación de juzgar negativamente el paso del tiempo.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Melodrama quejumbroso, lamentos por la vejez o quejas existenciales ajenas a la dignidad del Sabi.' }
      ]
    },
    {
      criterion: 'Uso del Vacío Fértil (Ma) y Sugerencia (Yūgen)',
      weight: '25%',
      description: 'Economía verbal estricta: dice lo mínimo imprescindible para que el misterio y la inmensidad resuenen en el espacio no dicho.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Maestría en la contención; el silencio entre las líneas es inmenso y sugiere una profundidad cósmica insondable (Yūgen).' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Buena concisión y sugerencia, aunque con alguna palabra prescindible que explica de más la escena.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Texto excesivamente explicativo o descriptivo que deja poco margen para la intuición del lector.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Discurso cerrado y exhaustivo donde todo está dicho y no existe vacío fértil alguno.' }
      ]
    },
    {
      criterion: 'Pureza de la Imagen y Contención Emocional',
      weight: '20%',
      description: 'La emoción surge de las propiedades físicas y sensoriales de las cosas (óxido, musgo, sombra, frío), no de adjetivos abstractos.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Sensorialidad pura; la textura del tiempo emana exclusivamente de los objetos concretos.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Predominio de lo concreto, con algún adjetivo convencional de apoyo.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Uso frecuente de conceptos abstractos ("el paso del tiempo", "la soledad", "la memoria") sin anclaje táctil.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Abstracción filosófica total o sentimentalismo sin sustancia física.' }
      ]
    },
    {
      criterion: 'Justificación Conceptual y Metacognición',
      weight: '20%',
      description: 'Capacidad de analizar teóricamente el proceso poético utilizando con rigor los términos Mono no Aware, Sabi, Ma y Yūgen.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Reflexión pedagógica brillante; domina la sutileza conceptual y fundamenta las decisiones de poda verbal con lucidez.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Explicación adecuada con empleo correcto de los cuatro conceptos estéticos.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Uso impreciso o confuso de los términos estéticos japoneses.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Omisión de la reflexión o comentario mecánico sin sustento teórico.' }
      ]
    }
  ]
};

export const MODULE_3_CLASSROOM_MD = `# CURSO GOOGLE CLASSROOM: LA ESENCIA DEL HAIKU
## MÓDULO 3: El alma del Haiku: Mono no Aware y Sabi

---

### DATOS GENERALES DEL TEMA
- **Profesor/a:** Cátedra de Poética Japonesa y Teoría Literaria
- **Unidad Temática:** Módulo 3 de 5
- **Tiempo estimado:** 4 horas pedagógicas (2 h teoría estética y lectura comentada / 2 h contemplación y escritura del despojo)
- **Conceptos clave:** *Mono no Aware* (物の哀れ), *Sabi* (寂び), *Wabi* (侘び), *Ma* (間 - Vacío fértil), *Yūgen* (幽玄 - Misterio sutil y penumbra).

---

### 1. MATERIAL DE ESTUDIO (TEORÍA Y PROFUNDIZACIÓN)

#### 3.1 Mono no Aware (物の哀れ): La conmoción ante la belleza de lo efímero
Si tuviéramos que elegir el concepto medular que atraviesa toda la historia de la sensibilidad artística de Japón, este sería sin duda **Mono no Aware** (物の哀れ). 

El gran erudito dieciochesco Motoori Norinaga descompuso la expresión en sus raíces originarias:
- *Mono* (物): Las cosas, los seres, los acontecimientos del mundo visible.
- *Aware* (哀れ): Originalmente, una exclamación espontánea de asombro conmovido (*¡Ah!*), que con los siglos decantó en un sentimiento de honda empatía y delicada melancolía.

Por tanto, *Mono no Aware* se traduce habitualmente como **«la compasión o el conmoverse ante las cosas»**, o más precisamente: **la suave, serena y agradecida tristeza provocada por la transitoriedad de toda belleza**.

En la cosmovisión occidental judeocristiana o moderna, la impermanencia (*Mujō*, 無常) suele experimentarse como una maldición, una tragedia que debe combatirse o una fuente de angustia nihilista. En la estética japonesa, ocurre exactamente lo contrario: **una cosa es infinitamente bella precisamente porque no dura**. 

Los cerezos en flor (*sakura*) no serían motivo de peregrinación ni estremecimiento si florecieran durante doce meses al año como flores de plástico; conmueven hasta las lágrimas porque sabemos que el viento de mañana desparramará sus pétalos sobre el barro. El haiku es el recipiente que acoge esa lágrima sin aspavientos dramáticos.

> **Advertencia pedagógica fundamental:** *Mono no Aware* no es llanto melodramático, ni depresión, ni rebeldía contra el destino. Es una aceptación reverente, noble y tierna de que todo lo que amamos pasará.

---

#### 3.2 Sabi (寂び): La belleza de la pátina y la soledad serena
La palabra **Sabi** comparte su raíz etimológica con *sabireru* (desgastarse, oxidarse) y con *sabishi* (solitario). Sin embargo, en la poética del haiku acuñada por Matsuo Bashō, el *Sabi* asciende a categoría suprema del espíritu.

El *Sabi* es la **belleza del tiempo impreso en la materia**:
- No es la lozanía brillante de la juventud recién estrenada, sino la dignidad silenciosa de la madera corroída por la intemperie.
- Es el musgo que cubre el peldaño de piedra del templo.
- Es la vasija agrietada que fue reparada con resina de oro (*Kintsugi*), mostrando sus cicatrices con orgullo humilde.
- Es la soledad del invierno cuando todos los árboles han quedado despojados de follaje.

Bashō insistía en que el *Sabi* no es una soledad neurótica ni un aislamiento resentido con la sociedad, sino una **soledad cósmica reconciliada**: el estado del caminante que se siente en íntima hermandad con la roca fría, la brizna de hierba seca y la lluvia nocturna.

Leamos el haiku canónico donde el *Sabi* alcanza su cumbre absoluta:
> *En la rama seca*  
> *un cuervo se ha posado:*  
> *tarde de otoño.*  
*(Matsuo Bashō - Karetaki ni / karasu no tomarikeri / aki no kure)*

Obsérvese la sobriedad monacal. No hay flores. No hay colores vivos. Solo tres elementos materiales: una rama sin hojas, un cuervo inmóvil y la penumbra del crepúsculo de otoño. El poema emana un frío ancestral y una paz solemne. Ese silencio despojado es *Sabi*.

---

#### 3.3 El vacío fértil (Ma, 間) y la sugerencia inagotable (Yūgen, 幽玄)
¿Cómo puede un poema de apenas tres versos y diecisiete sílabas albergar la inmensidad del universo sin reventar por el exceso de palabras? Mediante dos principios estéticos complementarios: **Ma** y **Yūgen**.

##### A. Ma (間): El espacio en blanco que respira
En la arquitectura tradicional japonesa, en los arreglos florales (*Ikebana*) y en la música del teatro Nō, el elemento constructivo más decisivo no es la materia edificada o la nota tocada, sino **el intervalo**: el vacío (*Ma*).

El *Ma* no es la nada nihilista; es un **vacío preñado de posibilidades**. En el haiku, el poeta solo escribe diez o doce palabras; el resto del poema es puro *Ma*. Si un autor llena los tres versos con descripciones minuciosas, adjetivos explicativos y opiniones personales, asesina el *Ma*. El lector no tiene por dónde entrar. 

El maestro de haiku retira palabras con una tijera implacable para que el silencio circundante vibre con la fuerza de un trueno silencioso.

##### B. Yūgen (幽玄): El misterio en la penumbra
El filósofo Zeami definió el **Yūgen** como la gracia sutil que se oculta detrás de la superficie visible:
- Es contemplar un barco que desaparece detrás de una isla remota en el mar.
- Es mirar el sol ocultándose tras una colina cubierta de niebla.
- Es sugerir más de lo que se nombra, dejando que una insinuación velada despierte en el lector una conmoción infinita.

El poeta mediocre muestra todo con luces de quirófano; el maestro de haiku apenas desliza una sombra en la penumbra.

Comparemos cómo opera en este desgarrador poema de Kobayashi Issa tras la muerte de su hija Sato:
> *En este mundo de rocío,*  
> *es sólo un mundo de rocío;*  
> *y sin embargo...*  
*(Kobayashi Issa - Tsuyu no yo wa / tsuyu no yo nagara / sari nagara)*

Issa conoce la doctrina budista: sabe que la existencia es efímera como el rocío que evapora el sol de la mañana. Su intelecto lo acepta. Y sin embargo (*sarinagara*)... El poema se interrumpe ahí. Esos puntos suspensivos son el *Ma* más estremecedor de la literatura universal: el espacio donde se desborda todo el amor, todo el duelo y todo el *Mono no Aware* de un padre que llora en silencio.

---

### 2. TAREA EVALUATIVA (INSTRUCCIONES PARA GOOGLE CLASSROOM)

**Título de la Tarea:**  
**"Tarea 3: La pátina del tiempo y el vacío fértil (Mono no Aware y Sabi)"**

#### Instrucciones para el alumno:
1. **La búsqueda de la huella del tiempo (Sabi):**  
   Sal a caminar o recorre tu entorno buscando una superficie, objeto o ser que exponga la pátina del tiempo y la transitoriedad (*Sabi*): una pared desconchada, una madera húmeda y agrietada, una hoja marchita que flota en un charco, un candado oxidado.
2. **La poda radical (Práctica del Ma):**  
   Escribe un primer borrador de tres versos. A continuación, elimina cualquier adjetivo sentimental (*"triste", "solitario", "hermoso", "viejo"*). Deja únicamente los sustantivos materiales y los verbos mínimos. Si puedes decir la escena en 8 o 10 palabras en lugar de 17, hazlo. Permite que el blanco de la página (*Ma*) sostenga el peso cósmico del poema.
3. **El tono de Mono no Aware:**  
   Asegúrate de que el poema transmita una serena reverencia hacia la impermanencia, desprovista de melodrama, autocompasión o quejas contra la muerte.
4. **Justificación reflexiva en Classroom (100 a 150 palabras):**  
   Explica qué elementos podaste para permitir que el vacío (*Ma*) operara y cómo lograste sugerir la inmensidad (*Yūgen*) sin nombrarla de manera directa.

---

### 3. RÚBRICA FORMATIVA DE EVALUACIÓN (GOOGLE CLASSROOM)

| Criterio de Evaluación | Ponderación | Nivel Destacado (10-9 pts) | Nivel Competente (8-7 pts) | Nivel Básico (6-5 pts) | Nivel Insuficiente (<5 pts) |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **1. Encarnación de Sabi y Mono no Aware** | 35% | Atmósfera sobrecogedora de Sabi y conmoción serena ante lo efímero; ausencia absoluta de melodrama, lamento o sentimentalismo. | Evoca con acierto la belleza de lo desgastado y transitorio, con algún matiz levemente melancólico que roza lo subjetivo. | Aproximación superficial al desgaste o envejecimiento, juzgando el paso del tiempo como algo meramente negativo. | Melodrama quejumbroso, lágrimas teatrales o quejas contra el deterioro físico ajenas a la dignidad del Sabi. |
| **2. Uso del Vacío Fértil (Ma) y Yūgen** | 25% | Maestría en la contención verbal; lo no dicho resuena con inmensa hondura y el misterio (*Yūgen*) se despliega en el lector. | Buena capacidad de sugerencia y concisión, con alguna palabra redundante que explica de más la escena. | Poema excesivamente descriptivo o discursivo que deja poco espacio al silencio del lector. | Discurso cerrado y explicativo donde todo se declara y no existe vacío fértil alguno. |
| **3. Concreción Sensorial de la Pátina** | 20% | La emoción emana exclusivamente de las propiedades táctiles y físicas de la materia (óxido, musgo, grieta, corteza, frío). | Predominio de lo concreto, apoyado en algún adjetivo convencional de soporte. | Uso reiterado de abstracciones ("el tiempo", "la soledad", "la memoria") sin anclaje físico tangible. | Disquisición puramente conceptual sin contacto con la materia ni con la realidad sensorial. |
| **4. Justificación Metacognitiva** | 20% | Reflexión pedagógica brillante; domina con rigor los conceptos de Mono no Aware, Sabi, Ma y Yūgen, fundamentando su proceso de poda. | Explicación solvente con empleo adecuado de los cuatro términos estéticos japoneses. | Comprensión parcial o confusa de los conceptos estéticos. | Omisión de la justificación reflexiva o comentario puramente anecdótico sin rigor crítico. |
`;

export const MODULE_4_COMPARISONS: HaikuComparisonItem[] = [
  {
    verse: [
      'El mar se oscurece:',
      'los chillidos de los patos',
      'son apenas blancos.'
    ],
    type: 'haiku',
    author: 'Matsuo Bashō (海暮れて 鴨の声ほのかに白し)',
    explanation: 'El Kigo es "patos salvajes" (kamo), que en el archipiélago japonés migran en invierno. No hace falta decir "hace frío": la penumbra sobre el mar y el graznido blanquecino de las aves despiertan en el lector la vibración del invierno exacto.',
    keyAspect: 'Kigo orgánico: la estación encarnada en la fauna local sin proclamas meteorológicas.',
  },
  {
    verse: [
      'Bajo los cerezos en flor',
      'bebo té verde con mi kimono,',
      'sueño con Kioto.'
    ],
    type: 'occidental_pseudo',
    author: 'Ejemplo de cliché orientalista occidental',
    explanation: 'El error por antonomasia de los poetas occidentales: el "japonismo de postal". Forzar palabras como kimono, sake, pagoda o geisha es una caricatura postiza. El haiku tradicional exige la verdad del entorno inmediato, no un disfraz exótico.',
    keyAspect: 'Falso Kigo: impostación de clichés y exotismo artificial sin arraigo en la realidad vivida.',
  },
  {
    verse: [
      'Al sol de la tarde',
      'el olor a romero seco:',
      'canto de cigarra.'
    ],
    type: 'haiku',
    author: 'Poética ibérica / mediterránea contemporánea',
    explanation: 'Adaptación soberbia del Kigo a Occidente. No necesita cerezos japoneses: el romero seco, la resolana y la cigarra anclan con nitidez el rigor del verano mediterráneo. Respeta el espíritu de Bashō utilizando la flora y fauna propia.',
    keyAspect: 'Kigo vernáculo auténtico: la estación propia captada sin complejos coloniales.',
  },
  {
    verse: [
      'Tarde de escarcha:',
      'los caquis maduros',
      'en la rama desnuda.'
    ],
    type: 'haiku',
    author: 'Kigo compartido entre Oriente y Occidente',
    explanation: 'El caqui (kaki) y la escarcha (shimobashira) sitúan el límite exacto entre el otoño tardío y el comienzo del invierno. La nota naranja del fruto maduro contrasta con el hielo matinal.',
    keyAspect: 'Concreción biológica estacional sin adjetivos abstractos.',
  }
];

export const MODULE_4_EXERCISE: PracticalExercise = {
  title: 'Tarea Evaluativa: El Saijiki Vernáculo (El Kigo local sin clichés exóticos)',
  objective: 'Desarrollar la capacidad de registrar el pulso estacional del entorno geográfico inmediato del estudiante (flora, fauna, clima local), erradicando la imitación artificial de tópicos japoneses para arraigar el haiku en la verdad del paisaje propio.',
  materialsNeeded: [
    'Cuaderno de campo',
    'Exploración a pie del barrio, parque, campo o costa donde resida el estudiante',
    'Observación atenta del ciclo estacional actual en su territorio'
  ],
  steps: [
    {
      phase: 'Fase 1: Auditoría y purga de clichés orientalistas',
      instruction: 'Prohíbete a ti mismo nombrar nada que no forme parte de tu vida cotidiana o paisaje real: fuera cerezos si no los tienes delante, fuera pagodas, kimonos, té verde ceremonial o espadas samurai. Recuerda la máxima: Bashō no escribió sobre flores que no pisaba.',
      reflectionPrompt: '¿Estás mirando tu calle con tus propios ojos o estás mirando un grabado japonés del siglo XVIII?'
    },
    {
      phase: 'Fase 2: Identificación del Kigo autóctono (Saijiki propio)',
      instruction: 'Identifica una presencia de la naturaleza local que solo pueda existir en esta época del año: el olor a tierra mojada tras meses de estío, el vaho de la respiración al amanecer, una fruta de temporada (castaña, higo, uva, naranja), la llegada de un ave migratoria (golondrina, estornino).',
      reflectionPrompt: '¿Este elemento grita la estación por sí solo sin necesidad de nombrar la palabra "verano" u "otoño"?'
    },
    {
      phase: 'Fase 3: Destilación en 3 versos',
      instruction: 'Construye tu haiku en torno a este Kigo vernáculo. Cuida que la estación no sea un adorno accesorio, sino el eje que sostiene todo el poema.',
      reflectionPrompt: 'Si eliminas el Kigo, ¿se desploma el poema? Si la respuesta es sí, el Kigo es auténtico.'
    },
    {
      phase: 'Fase 4: Justificación reflexiva para Classroom',
      instruction: 'Redacta un texto de 100 a 150 palabras justificando por qué tu Kigo pertenece al paisaje donde habitas y cómo dialoga con la tradición sin caer en la caricatura.',
      reflectionPrompt: '¿Cómo enriquece la poesía la descolonización de la mirada?'
    }
  ],
  submissionFormat: 'Entrega en Google Classroom: 1) Haiku con Kigo local explícito o implícito, 2) Ficha del Kigo elegido (especie botánica, animal o fenómeno meteorológico local), 3) Párrafo reflexivo sobre la adaptación del haiku a la geografía propia.',
  classroomSubmissionTemplate: `### ENTREGA DE TAREA - MÓDULO 4: EL KIGO Y EL ENTORNO LOCAL
**Nombre del Estudiante:** [Tu Nombre Completo]
**Ciudad / Región geográfica:** [Ej: Valle Central de Chile / Ribera del Ebro, España]
**Estación del año:** [Ej: Finales de invierno / Comienzo de primavera]
**Kigo autóctono elegido:** [Ej: La floración del almendro / La helada matinal sobre el cardo]

---

#### 1. Mi Haiku con Kigo Vernáculo
[Línea 1 - El anclaje estacional o contexto]
[Línea 2 - El fenómeno local observado]
[Línea 3 - La resonancia del instante]

#### 2. Autoauditoría de Clichés
- ¿Contiene tópicos japoneses artificiales (kimono, cerezo forzado, pagoda)?: [No, 100% paisaje local]
- ¿El elemento estacional forma parte de la experiencia directa del autor?: [Sí]
- ¿El Kigo fija la época del año sin necesidad de explicarla?: [Sí]

#### 3. Párrafo Reflexivo (Descolonización de la mirada)
[Explica en 100-150 palabras por qué elegiste este Kigo vernáculo y cómo aplicaste la lección de Bashō ("aprende del pino junto al pino") a la flora, fauna o clima de tu propia tierra].`,
  rubric: [
    {
      criterion: 'Autenticidad y Pertinencia del Kigo Local',
      weight: '35%',
      description: 'El poema encarna con fidelidad la pulsión estacional a través de elementos genuinos del entorno geográfico inmediato del estudiante.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Kigo vernáculo extraordinario; transmite con nitidez sensorial y verdad biológica la estación propia sin artificios.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Referencia estacional reconocible y autóctona, aunque con una formulación ligeramente general.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Referencia estacional débil o abstracta ("hace calor", "hace frío") que carece de encarnación sensorial precisa.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Ausencia total de referencia estacional o Kigo irrelevante para la escena.' }
      ]
    },
    {
      criterion: 'Despojo Radical de Clichés Orientalistas',
      weight: '25%',
      description: 'Superación total del exotismo postizo; el poema surge de la experiencia real vivida y no de postales de Kioto.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Absolutamente libre de tópicos orientalistas; mirada honesta, contemporánea y arraigada en su paisaje real.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Casi limpio, con alguna referencia forzada a la estética japonesa que no invalida el poema.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Persiste una impostación de exotismo o imitación decorativa de costumbres ajenas a su contexto.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Caricatura orientalista plagada de clichés de postal sin verdad vivencial.' }
      ]
    },
    {
      criterion: 'Integración Estructural de la Estación',
      weight: '20%',
      description: 'El Kigo no es un adorno añadido, sino la columna vertebral que otorga coherencia y resonancia cósmica al poema.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'El Kigo es inseparable del poema; sin él, la escena pierde su sentido existencial.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Buena articulación del Kigo con el resto de los versos, con leve independencia de los términos.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'El Kigo parece pegado artificialmente como una etiqueta informativa sin resonar en la escena.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Contradicción estacional o desconexión absoluta entre el elemento temporal y la acción.' }
      ]
    },
    {
      criterion: 'Justificación Conceptual y Geográfica',
      weight: '20%',
      description: 'Capacidad de justificar con rigor la adaptación del concepto de Saijiki y Kigo a su contexto biogeográfico específico.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Reflexión lúcida y pedagógica; argumenta la importancia de la mirada descolonizada con fundamentación teórica sólida.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Explicación adecuada de la elección del Kigo local y su relevancia para la práctica poética.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Comentario descriptivo sobre el clima sin articulación con las categorías teóricas del módulo.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Omisión de la justificación o comentario superficial sin reflexión geográfica.' }
      ]
    }
  ]
};

export const MODULE_4_CLASSROOM_MD = `# CURSO GOOGLE CLASSROOM: LA ESENCIA DEL HAIKU
## MÓDULO 4: El Kigo y la adaptación a Occidente

---

### DATOS GENERALES DEL TEMA
- **Profesor/a:** Cátedra de Poética Japonesa y Teoría Literaria
- **Unidad Temática:** Módulo 4 de 5
- **Tiempo estimado:** 3 horas pedagógicas (1.5 h teoría estacional y debate crítico / 1.5 h trabajo de campo botánico-climático)
- **Conceptos clave:** *Kigo* (季語 - Palabra de estación), *Saijiki* (歳時記 - Diccionario estacional), *Ki-omoi* (季重い - Sentimiento estacional latente), *Descolonización del cliché orientalista*.

---

### 1. MATERIAL DE ESTUDIO (TEORÍA Y PROFUNDIZACIÓN)

#### 4.1 ¿Qué es el Kigo (季語)? El anclaje del haiku en el latido del cosmos
En la tradición poética japonesa clásica, el **Kigo** (季語, literalmente «palabra de estación») no es un aditamento facultativo ni una mera indicación de calendario; es el **eje gravitatorio que conecta el poema con el orden cósmico**.

Para la sensibilidad tradicional japonesa, el ser humano no está situado *frente* a la naturaleza como un espectador soberbio que la domina, sino *dentro* de ella, sometido a su respiración cíclica. Nacer, madurar, decaer y morir son las estaciones de la materia.

El Kigo es el vocablo que sitúa el acontecimiento en una coordenada temporal irrepetible. Tradicionalmente, la poética divide el año en cinco estaciones canónicas:
1. **Primavera (Haru, 春):** Deshielo, bruma suave, floración temprana, ranas que despiertan.
2. **Verano (Natsu, 夏):** Calor sofocante, chicharras, luciérnagas, aguaceros repentinos, verdor espeso.
3. **Otoño (Aki, 秋):** Viento fresco, luna clara, espigas de mijo, rocío, cuervos en ramas desnudas, hojas rojizas (*Momiji*).
4. **Invierno (Fuyu, 冬):** Escarcha, aguanieve, patos salvajes migratorios, cuencos helados, carbón encendido.
5. **Año Nuevo (Shinnen, 新年):** Considerado una estación poética propia en el calendario lunar, asociada a la renovación sagrada del tiempo.

Los poetas japoneses utilizaban y siguen utilizando el **Saijiki** (歳時記): enciclopedias monumentales donde miles de palabras estacionales están catalogadas con sus matices, sus asociaciones históricas y ejemplos canónicos.

---

#### 4.2 El gran debate occidental: La superación del "japonismo de postal"
Cuando el haiku cruzó los océanos a comienzos del siglo XX, muchos escritores occidentales incurrieron en una caricatura lamentable: creyeron que para escribir haiku debían disfrazarse de japoneses.

Es común encontrar en talleres y antologías hispanohablantes poemas escritos en Madrid, Buenos Aires, Ciudad de México o Bogotá que rezan:
> *Bajo los cerezos en flor,*  
> *bebo sake en mi kimono,*  
> *escucho la campana del templo.*  

Esto no es poesía: es **pastiche orientalista**, exotismo de folleto turístico. Carece de verdad vivencial.

La lección inmortal de Bashō fue muy clara:
> *«Aprende del pino junto al pino; aprende del bambú junto al bambú.»*

Bashō jamás escribió sobre una planta que no hubiera tocado con sus manos, ni sobre un pájaro que no hubiera escuchado cantar en los bosques de Honshu. **Si Matsuo Bashō hubiera nacido en el Mediterráneo, en la Pampa argentina, en los Andes o en el Caribe, jamás habría escrito sobre cerezos en flor**. Habría escrito sobre el olor agrio de los olivares bajo el sol de agosto, sobre el cardo seco golpeado por el viento pampeano, sobre el maíz que amarillea en la milpa o sobre la lluvia tropical que borra el horizonte.

El desafío del practicante en español es **construir su propio Saijiki vernáculo**:
- En lugar de cerezos artificiales (*sakura*): el almendro en flor, el jazmín de noche, el jacarandá cubriendo el asfalto de violeta.
- En lugar de cigarras de Kioto (*semi*): el zumbido metálico de las chicharras en el monte seco, el graznido de las gaviotas en el puerto.
- En lugar del viento frío de Edo (*Kogarashi*): el cierzo, la tramontana, el zonda o el pampero.

---

#### 4.3 Kigo explícito frente a Kigo latente
No siempre es necesario nombrar la palabra "verano" o "invierno" de manera discursiva. De hecho, los maestros consideran de mayor maestría el **Kigo latente** o indirecto: aquel donde la presencia física de la cosa impone la estación con una evidencia incontestable.

Comparemos:
- **Kigo explícito y pobre:** *«En esta tarde fría de invierno...»* (Informa con palabras abstractas).
- **Kigo latente y magistral (Bashō):**  
  > *El mar se oscurece:*  
  > *los chillidos de los patos*  
  > *son apenas blancos.*  
  *(En Japón, los patos salvajes son aves invernales. La conjunción del mar oscuro y el graznido blanquecino hiela los huesos del lector sin necesidad de pronunciar la palabra invierno).*

El debate sobre el **Muki-haiku** (haiku sin kigo): en el Japón moderno, poetas como Santōka Taneda u Ozaki Hōsai prescindieron en ocasiones del Kigo estricto para centrarse en la soledad humana o en el desamparo existencial. Sin embargo, para los estudiantes en formación, el Kigo sigue siendo el antídoto más eficaz contra la abstracción filosófica, pues obliga al autor a poner los pies en la tierra y la mirada en el ciclo cósmico que lo rodea.

---

### 2. TAREA EVALUATIVA (INSTRUCCIONES PARA GOOGLE CLASSROOM)

**Título de la Tarea:**  
**"Tarea 4: El Saijiki Vernáculo: Creación de un Kigo propio sin clichés orientales"**

#### Instrucciones para el alumno:
1. **Auditoría de clichés (Prohibición estricta):**  
   Queda terminantemente prohibido usar términos exóticos importados: cerezo, pagoda, geisha, kimono, sake, té verde ceremonial, bambú (salvo que vivas en una zona con cañas autóctonas). Mira por tu ventana.
2. **Identificación de tu Kigo local:**  
   Sal a caminar por tu entorno real. Identifica un signo inequívoco de la estación climática actual en tu geografía:
   - Una fruta que madura ahora mismo en los árboles o mercados locales.
   - El comportamiento de los animales urbanos o rurales (el vuelo rasante de los vencejos, las hormigas acumulando grano, las hojas secas de los plátanos de sombra en las aceras).
   - Un fenómeno meteorológico característico de tu región (la niebla densa matinal, el rocío blanco sobre los coches, la resolana que hace hervir el asfalto).
3. **Escritura del haiku (3 versos):**  
   Compón un haiku donde este Kigo autóctono sea el corazón del poema. No expliques la estación; deja que el elemento hable por sí solo.
4. **Párrafo de justificación reflexiva (100 a 150 palabras):**  
   Explica por qué elegiste ese elemento vernáculo, cuál es su correspondencia estacional en tu latitud y cómo experimentaste la descolonización de tu mirada poética.

---

### 3. RÚBRICA FORMATIVA DE EVALUACIÓN (GOOGLE CLASSROOM)

| Criterio de Evaluación | Ponderación | Nivel Destacado (10-9 pts) | Nivel Competente (8-7 pts) | Nivel Básico (6-5 pts) | Nivel Insuficiente (<5 pts) |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **1. Autenticidad del Kigo Local** | 35% | Kigo vernáculo magistral; evoca con verdad sensorial y precisión biológica la estación propia en su geografía real. | Referencia estacional reconocible y autóctona, aunque con una formulación algo general o predecible. | Referencia estacional difusa o abstracta ("hace calor", "frío") sin encarnación en un ser o fenómeno concreto. | Ausencia total de referencia estacional o Kigo irrelevante y desconectado del tiempo. |
| **2. Despojo de Clichés Orientalistas** | 25% | Absolutamente limpio de tópicos o exotismos de postal; mirada honesta, directa y arraigada en el paisaje donde vive. | Casi despojado, con alguna referencia decorativa menor a Japón que no llega a desvirtuar la escena. | Persiste una imitación forzada de tópicos orientales ajenos a la vida cotidiana del estudiante. | Caricatura orientalista plagada de clichés de folleto turístico sin verdad vivencial. |
| **3. Integración Estructural de la Estación** | 20% | El Kigo es la columna vertebral del poema; sin él, la escena se desmorona y pierde su sentido cósmico. | Buena articulación del Kigo con el resto de los versos, con leve autonomía de las partes. | El Kigo aparece como un dato pegado superficialmente sin resonar con el instante registrado. | Contradicción temporal o desconexión absoluta entre el Kigo y el resto del poema. |
| **4. Justificación Metacognitiva** | 20% | Reflexión lúcida y pedagógica; fundamenta con solvencia la adaptación del Saijiki a su territorio biogeográfico. | Explicación solvente de la elección del Kigo local y su correspondencia estacional. | Comentario descriptivo sobre el clima sin articulación con las categorías teóricas del módulo. | Omisión de la justificación reflexiva o comentario puramente anecdótico sin rigor. |
`;

export const MODULE_5_COMPARISONS: HaikuComparisonItem[] = [
  {
    verse: [
      'Enfermo en el camino:',
      'mis sueños corren',
      'por el páramo seco.'
    ],
    type: 'haiku',
    author: 'Matsuo Bashō (旅に病んで 夢は枯野を かけめぐる) · Jisei canónico',
    explanation: 'El poema final dictado por Bashō en su lecho de muerte en Osaka (1694). No hay lamentos por su cuerpo enfermo ni súplicas de salvación ultramundana. El haijin errante se disuelve en el camino: sus sueños continúan corriendo libres por los pastizales secos de invierno.',
    keyAspect: 'Jisei supremo: la extinción física vivida como viaje continuo y fidelidad al camino (Dō).',
  },
  {
    verse: [
      '¡Adiós mundo cruel!',
      'La muerte viene por mí y tiemblo,',
      'olvidad mi triste nombre.'
    ],
    type: 'occidental_pseudo',
    author: 'Ejemplo de falso testamento lírico occidental',
    explanation: 'El error occidental por excelencia: egocentrismo trágico, desesperación ante la nada, dramatismo teatral y resentimiento contra la vida. En la sensibilidad japonesa del Jisei, la muerte se recibe con la misma serenidad natural con que el árbol despide una hoja seca.',
    keyAspect: 'Falso Jisei: patetismo melodramático, miedo egocéntrico y vanidad ante el morir.',
  },
  {
    verse: [
      'Piruleta de ciruelo:',
      'la noche blanca',
      'comienza a amanecer.'
    ],
    type: 'haiku',
    author: 'Yosa Buson (白梅に 明くる夜ばかりと なりにけり) · Jisei de Buson',
    explanation: 'Dictado en su última noche de invierno (1783). Buson, pintor hasta el último aliento, contempla mentalmente el resplandor blanco de los ciruelos floreciendo en la noche. No hay dolor ni temor: solo luz pura y pintura disolviéndose en el alba.',
    keyAspect: 'Mirada plástica y pictórica hasta el último hálito.',
  },
  {
    verse: [
      'Lavándome en el barreño,',
      'del nacimiento a la muerte:',
      'pura tontería.'
    ],
    type: 'haiku',
    author: 'Kobayashi Issa (盥から 盥にうつる ちんぷんかん) · Jisei de Issa',
    explanation: 'El barreño donde bañan al recién nacido y el barreño donde lavan el cadáver antes del entierro. Con su inigualable humildad e ironía tierna, Issa resume toda la peripecia humana como un juego fugaz sin pretensiones de grandeza.',
    keyAspect: 'Humildad cósmica y superación de la pompa funeraria.',
  }
];

export const MODULE_5_EXERCISE: PracticalExercise = {
  title: 'Tarea Evaluativa: El Jisei: Composición del propio poema de despedida (Disolución del Shōji)',
  objective: 'Componer un haiku en clave de Jisei (poema de despedida de la vida), despojándose del miedo neurótico a la propia muerte y encarnando la mirada de uno de los 4 grandes maestros (Bashō, Buson, Issa o Shiki).',
  materialsNeeded: [
    'Cuaderno de notas o soporte sobrio',
    '30 minutos de contemplación en silencio absoluto',
    'Meditación sobre la propia finitud y la continuidad impersonal del cosmos'
  ],
  steps: [
    {
      phase: 'Fase 1: Elección de la mirada maestra de afinidad',
      instruction: 'Elige con cuál de los 4 maestros resuena más tu espíritu: 1) Bashō (el caminante expuesto a la intemperie), 2) Buson (el pintor de la luz y el color puro), 3) Issa (la compasión tierna y humilde hacia lo mínimo), o 4) Shiki (el observador estoico y lúcido de la materia inmediata).',
      reflectionPrompt: '¿Cómo mira el mundo ese maestro y de qué manera adoptas su lente despojada?'
    },
    {
      phase: 'Fase 2: La disolución de la frontera vida-muerte (Shōji)',
      instruction: 'Imagina que este es el último poema que escribirás en la Tierra. Prohibido terminantemente quejarte, pedir perdón o despedirte de forma melodramática. Enlaza tu existencia con un elemento natural que seguirá existiendo tras tu partida (el viento, el río, el canto de un grillo, el polvo que flota en el rayo de sol).',
      reflectionPrompt: '¿Tu poema emana paz y reconciliación cósmica o miedo?'
    },
    {
      phase: 'Fase 3: Destilación en 3 versos (Economía de Karumi)',
      instruction: 'Escribe el haiku con extrema ligereza (*Karumi*). No busques solemnidad pesada de epitafio en mármol. El Jisei debe ser tan liviano como una pompa de jabón o una brizna de paja.',
      reflectionPrompt: '¿Se siente el poema ligero y transparente como el aire matinal?'
    },
    {
      phase: 'Fase 4: Justificación reflexiva para Classroom',
      instruction: 'Redacta un texto de 100 a 150 palabras justificando cuál de los cuatro maestros inspiró tu composición y cómo experimentaste la noción budista de Shōji (la unidad de vivir y morir).',
      reflectionPrompt: '¿Qué aprendiste sobre el ego literario a lo largo de este curso?'
    }
  ],
  submissionFormat: 'Entrega en Google Classroom: 1) Tu poema Jisei (3 versos), 2) Declaración del maestro de referencia (Bashō, Buson, Issa o Shiki), 3) Párrafo de justificación reflexiva sobre la disolución del Shōji.',
  classroomSubmissionTemplate: `### ENTREGA DE TAREA - MÓDULO 5: LOS GRANDES HAIJIN Y EL JISEI
**Nombre del Estudiante:** [Tu Nombre Completo]
**Maestro de afinidad elegido:** [Bashō / Buson / Issa / Shiki]
**Elemento natural de disolución:** [Ej: El viento entre los cañaverales / La escarcha en el tejado]

---

#### 1. Mi Poema Jisei (Despedida en Karumi)
[Línea 1 - El suceso o elemento cósmico que permanece]
[Línea 2 - El tránsito del ser sin queja]
[Línea 3 - La ligereza del silencio final]

#### 2. Autoauditoría de Temple
- ¿Contiene quejas, súplicas o aspavientos trágicos?: [No, serenidad absoluta]
- ¿Refleja la ligereza (Karumi) y la mirada del maestro elegido?: [Sí]
- ¿Supera la dualidad vida-muerte fundiéndose con el cosmos (Shōji)?: [Sí]

#### 3. Párrafo Reflexivo (La vía del Haiku y la despedida del ego)
[Explica en 100-150 palabras cómo la escritura de este Jisei culmina tu comprensión del haiku como vía espiritual (Dō) alejada del intelecto y del ego literario].`,
  rubric: [
    {
      criterion: 'Serenidad ante la Disolución (Shōji)',
      weight: '35%',
      description: 'El poema disuelve la dualidad entre la vida y la muerte con nobleza, ligereza y serenidad cósmica, sin el menor rastro de patetismo o terror neurótico.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Atmósfera sobrecogedora de reconciliación y paz suprema; disolución total del yo en la naturaleza impersonal.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Serenidad manifiesta ante la finitud, aunque con un leve matiz de solemnidad occidental que no rompe la dignidad.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Tentación visible de dramatismo, tristeza melancólica o apego a la propia biografía.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Melodrama funerario, queja contra la muerte o teatralidad morbosa opuesta al espíritu del Jisei.' }
      ]
    },
    {
      criterion: 'Fidelidad a la Mirada del Maestro Elegido',
      weight: '25%',
      description: 'Evidencia asimilación de la estética de Bashō (intemperie/vía), Buson (pintura/luz), Issa (ternura/humildad) o Shiki (estoicismo/shasei).',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Captura con maestría el timbre y la textura del maestro seleccionado, asimilando su manera de mirar.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Rasgos reconocibles de la mirada del maestro, con adecuada coherencia estilística.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Imitación externa sin comprensión profunda de las premisas poéticas del maestro.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Desconexión total con las directrices estéticas de los cuatro grandes Haijin.' }
      ]
    },
    {
      criterion: 'Ligereza y Economía Verbal (Karumi)',
      weight: '20%',
      description: 'El poema huye del peso marmóreo del epitafio occidental; posee la ligereza transparente de una hoja que cae.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Sutileza aérea; Karumi consumado donde el poema se sostiene con una levedad casi inmaterial.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Buena contención verbal y ligereza, con alguna palabra ligeramente grave.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Poema pesado o solemne que se asemeja más a una inscripción mortuoria.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Retórica fúnebre recargada y ampulosa.' }
      ]
    },
    {
      criterion: 'Metacognición y Cierre del Curso',
      weight: '20%',
      description: 'Capacidad de recapitular los aprendizajes del curso (Mushin, Satori, Sabi, Kigo y Shōji) en la reflexión evaluativa.',
      levels: [
        { level: 'Excelente (90-100%)', points: 10, descriptor: 'Reflexión magistral de cierre; articula con lucidez cómo el haiku transformó su mirada sobre el lenguaje y el ego.' },
        { level: 'Satisfactorio (75-89%)', points: 8, descriptor: 'Reflexión sólida y coherente sobre la experiencia de componer el Jisei y el proceso formativo.' },
        { level: 'En Desarrollo (50-74%)', points: 6, descriptor: 'Comentario general sin síntesis profunda de los conceptos teóricos vertebradores.' },
        { level: 'Insuficiente (<50%)', points: 3, descriptor: 'Omisión de la justificación reflexiva o comentario mecánico sin profundidad.' }
      ]
    }
  ]
};

export const MODULE_5_CLASSROOM_MD = `# CURSO GOOGLE CLASSROOM: LA ESENCIA DEL HAIKU
## MÓDULO 5: Los grandes Haijin y el Jisei

---

### DATOS GENERALES DEL TEMA
- **Profesor/a:** Cátedra de Poética Japonesa y Teoría Literaria
- **Unidad Temática:** Módulo 5 de 5 (Cierre y Culminación del Curso)
- **Tiempo estimado:** 4 horas pedagógicas (2 h estudio de los cuatro pilares / 2 h contemplación y composición del Jisei)
- **Conceptos clave:** *Ichigo Ichie* (一期一会 - Un encuentro, una oportunidad), *Karumi* (軽み - Ligereza espiritual), *Shōji* (生死 - La no dualidad vida-muerte), *Jisei* (辞世 - Poema de despedida de la vida).

---

### 1. MATERIAL DE ESTUDIO (TEORÍA Y PROFUNDIZACIÓN)

#### 5.1 Los Cuatro Pilares del Haiku: Las cuatro miradas canónicas sobre el cosmos
La historia del haiku se sostiene sobre cuatro cumbres maestras. Cada una de ellas encarnó una forma radicalmente distinta, pero complementaria, de mirar el universo sin el filtro del ego:

##### 1. Matsuo Bashō (松尾芭蕉, 1644–1694): La vía del caminante y la intemperie
Bashō no consideraba el haiku una profesión literaria, sino un camino espiritual de autorrealización (**Haiku-Dō**). Renunció a la comodidad burguesa de la capital para emprender viajes a pie de miles de kilómetros con su sombrero de paja y su bastón de bambú.
* **Mirada:** La exposición voluntaria a la intemperie. El contacto directo con la roca, el barro y la lluvia.
* **Concepto clave:** *Ichigo Ichie* (一期一会, cada instante es irrepetible; jamás volverás a cruzarte con esta misma brisa) y *Karumi* (la ligereza madura de sus últimos años, donde la poesía debe fluir como agua de manantial sin pesadez retórica).

##### 2. Yosa Buson (与謝蕪村, 1716–1784): El ojo del pintor y la arquitectura de la luz
Buson fue simultáneamente uno de los más grandes pintores de la escuela literata (*Nanga*) y un maestro supremo del verso.
* **Mirada:** Cinematográfica, plástica y cromática. Buson no sermonea: pinta con diecisiete sílabas. Posee un sentido soberbio de la perspectiva espacial, los contrastes de sombra y la vibración visual de las cosas.
* **Aporte esencial:** Rescató al haiku del peligro de caer en un moralismo rígido, devolviéndole la sensualidad de las texturas, la luz de los faroles y el color de las flores en la penumbra.

##### 3. Kobayashi Issa (小林一茶, 1763–1828): La ternura y la compasión universal
La biografía de Issa estuvo marcada por la desgracia: perdió a su madre en la infancia, fue desheredado, y vio morir a sus cuatro hijos recién nacidos y a su amada esposa.
* **Mirada:** En lugar de amargarse en el nihilismo, su dolor se transmutó en una empatía infinita hacia los seres más desamparados: las moscas, las pulgas, los caracoles, los gorriones huérfanos.
* **Aporte esencial:** El calor humano y la humildad radical. Issa nos enseña que nada en la creación es demasiado insignificante para ser amado por el haiku.

##### 4. Masaoka Shiki (正岡子規, 1867–1902): La revolución moderna desde el lecho del dolor
Aquejado de tuberculosis ósea, postrado en un futón durante años con dolores atroces, Shiki renovó la poética en los albores del siglo XX.
* **Mirada:** Científica, directa y contemporánea. Fue quien acuñó formalmente el término *Haiku* (independizándolo de las cadenas del *Hokku* y el *Renga* colectivo).
* **Concepto clave:** *Shasei* (写生, el boceto del natural tomado directamente del modelo real). Desde su ventana, observando una brizna de hierba o el vuelo de una libélula, conquistó la libertad espiritual absoluta mientras su cuerpo se consumía.

---

#### 5.2 El Jisei (辞世): El poema de despedida de la vida
En la tradición espiritual y samurái de Japón, el **Jisei** (辞世) es el poema de despedida que una persona compone en el umbral inminente de la muerte.

Cuando a un maestro occidental le llega la hora suprema, con frecuencia pronuncia discursos solemnes, testamentos solemnes o lamentos desesperados. El maestro de haiku, en cambio, escribe tres versos con la mano temblorosa y se disuelve en el silencio. 

El Jisei no es un epitafio esculpido en mármol: es un **gesto de desprendimiento absoluto**. No hay autocompasión, no hay miedo al castigo ni soberbia de haber vivido.

Analicemos los cuatro Jisei canónicos de los grandes maestros:

1. **El Jisei de Bashō (1694):**
   > *Enfermo en el camino:*  
   > *mis sueños corren*  
   > *por el páramo seco.*  
   *(Tabi ni yande / yume wa kareno o / kakemeguru)*  
   *Bashō muere en una posada de Osaka en pleno viaje. No se queja de la fiebre ni del fin. Su cuerpo está inmóvil en el lecho, pero su espíritu de caminante errante continúa corriendo libremente por la estepa invernal desolada. Es la fidelidad al camino hasta el último aliento.*

2. **El Jisei de Buson (1783):**
   > *Piruleta de ciruelo:*  
   > *la noche blanca*  
   > *comienza a amanecer.*  
   *(Shiraume ni / akuru yo bakari to / narinikeri)*  
   *En su lecho invernal, Buson no ve oscuridad; ve el blanco purísimo de los ciruelos floreciendo mientras el alba despunta. Pura luz pictórica que sustituye a la muerte.*

3. **El Jisei de Issa (1827):**
   > *Lavándome en el barreño,*  
   > *del nacimiento a la muerte:*  
   > *pura tontería.*  
   *(Tarae kara / tarae ni utsuru / chimpumpun)*  
   *El barreño de madera donde bañan al recién nacido y el barreño donde lavan el cadáver antes del entierro. Issa se despide riéndose con ternura de las pretensiones de grandeza del ego humano.*

4. **El Jisei de Shiki (1902):**
   > *La savia de la luffa se ha helado:*  
   > *las flemas*  
   > *ya no pueden salir.*  
   *Shiki murió con 35 años. La savia de la planta luffa se utilizaba en Japón como remedio para aliviar la tos en la tuberculosis terminal. El frío congela la medicina; el poeta describe su propia asfixia con la fría precisión de un pintor del natural, sin la menor queja.*

---

#### 5.3 Shōji (生死): La disolución de la frontera entre vivir y morir
En la filosofía budista que sustenta el haiku, la vida (*Shō*) y la muerte (*Ji*) no son dos enemigos enfrentados en guerra perpetua: son **las dos fases indivisibles de una misma onda cósmica** (**Shōji**, 生死).

Así como la ola se levanta del océano y vuelve a disolverse en el océano sin que el agua sufra ninguna merma, la forma individual se manifiesta durante unos años y regresa al silencio cósmico del que surgió. Quien comprende esto se libera del ego literario. La poesía deja de ser una ambición para convertirse en una ofrenda transparente de atención pura.

---

### 2. TAREA EVALUATIVA (INSTRUCCIONES PARA GOOGLE CLASSROOM)

**Título de la Tarea:**  
**"Tarea 5: El Jisei: Composición del propio poema de despedida (Disolución del Shōji)"**

#### Instrucciones para el alumno:
1. **Meditación de la finitud:**  
   Apaga pantallas y ruidos durante 30 minutos. Contempla con honestidad tu condición mortal: algún día, tu respiración cesará y el mundo continuará girando exactamente igual. Siente la paz que emana de esa certeza.
2. **Elección del maestro de resonancia:**  
   Decide desde qué mirada compondrás tu Jisei:
   - La intemperie errante de **Bashō**.
   - La belleza visual despojada de **Buson**.
   - La humildad tierna y compasiva de **Issa**.
   - La observación lúcida e inmediata de **Shiki**.
3. **Escritura del Jisei (3 versos):**  
   Escribe tu poema de despedida. Queda terminantemente prohibido caer en lamentos trágicos o despedidas melodramáticas. Conecta tu disolución física con un elemento del cosmos que permanecerá vivo (el viento, el río, la sombra de un árbol, el canto de un pájaro).
4. **Párrafo de justificación reflexiva (100 a 150 palabras):**  
   Explica qué maestro inspiró tu poema, cómo lograste la ligereza (*Karumi*) y de qué manera este curso transformó tu manera de mirar y escribir.

---

### 3. RÚBRICA FORMATIVA DE EVALUACIÓN (GOOGLE CLASSROOM)

| Criterio de Evaluación | Ponderación | Nivel Destacado (10-9 pts) | Nivel Competente (8-7 pts) | Nivel Básico (6-5 pts) | Nivel Insuficiente (<5 pts) |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **1. Serenidad ante la Disolución (Shōji)** | 35% | Reconciliación serena y luminosa con la finitud; disolución total del yo en la naturaleza impersonal sin el menor rastro de patetismo o queja. | Serenidad manifiesta ante la muerte, con algún matiz de solemnidad occidental que no rompe la dignidad. | Persiste una melancolía quejumbrosa o apego egocéntrico a la propia biografía. | Melodrama fúnebre, quejas teatrales contra el destino o miedo neurótico impropio del Jisei. |
| **2. Fidelidad a la Mirada Maestra** | 25% | Encarna con maestría el temple y la perspectiva del maestro elegido (Bashō, Buson, Issa o Shiki), demostrando asimilación profunda. | Rasgos evidentes y reconocibles de la mirada del maestro, con adecuada coherencia estética. | Imitación externa o mecánica sin comprensión profunda de las premisas del maestro. | Desconexión total con las directrices estéticas de los cuatro grandes Haijin. |
| **3. Ligereza y Economía Verbal (Karumi)** | 20% | Levedad consumada; el poema fluye sin el peso del mármol ni la retórica del epitafio, transparente como el aire. | Buena contención verbal y ligereza, con alguna palabra innecesariamente grave. | Poema denso o pomposo que recuerda a una inscripción funeraria tradicional. | Retórica fúnebre recargada y pesada. |
| **4. Metacognición y Síntesis Final** | 20% | Reflexión pedagógica brillante de cierre; sintetiza con lucidez cómo la vía del haiku desmanteló el ego literario. | Justificación sólida del proceso poético y del maestro de referencia con uso adecuado de los términos. | Comentario descriptivo sin síntesis de los conceptos vertebradores del curso. | Omisión de la justificación reflexiva o comentario superficial sin profundidad. |
`;




