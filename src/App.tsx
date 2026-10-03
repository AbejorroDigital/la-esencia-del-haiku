import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomeCoverView } from './components/HomeCoverView';
import { ModuleOneView } from './components/ModuleOneView';
import { ModuleTwoView } from './components/ModuleTwoView';
import { ModuleThreeView } from './components/ModuleThreeView';
import { ModuleFourView } from './components/ModuleFourView';
import { ModuleFiveView } from './components/ModuleFiveView';
import { HaikuComparator } from './components/HaikuComparator';
import { InteractiveHaikuStudio } from './components/InteractiveHaikuStudio';
import { ClassroomRubricView } from './components/ClassroomRubricView';
import { CourseCurriculum } from './components/CourseCurriculum';
import { StudentNotebookModal } from './components/StudentNotebookModal';
import { BookOpen, Sparkles, Feather } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'inicio' | 'modulo1' | 'modulo2' | 'modulo3' | 'modulo4' | 'modulo5' | 'comparador' | 'taller' | 'tarea' | 'programa'
  >('inicio');
  const [isNotebookModalOpen, setIsNotebookModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans selection:bg-stone-300 selection:text-stone-900">
      {/* Top Bar following contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab as any)}
        onOpenNotebook={() => setIsNotebookModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {activeTab === 'inicio' && (
          <HomeCoverView
            onStartCourse={() => setActiveTab('modulo1')}
            onSelectModule={(id) => {
              if (id === 1) setActiveTab('modulo1');
              if (id === 2) setActiveTab('modulo2');
              if (id === 3) setActiveTab('modulo3');
              if (id === 4) setActiveTab('modulo4');
              if (id === 5) setActiveTab('modulo5');
            }}
            onOpenNotebook={() => setIsNotebookModalOpen(true)}
            onGoToStudio={() => setActiveTab('taller')}
          />
        )}

        {activeTab === 'modulo1' && (
          <ModuleOneView
            onGoToStudio={() => setActiveTab('taller')}
            onGoToComparator={() => setActiveTab('comparador')}
            onGoToClassroomExport={() => setIsNotebookModalOpen(true)}
          />
        )}

        {activeTab === 'modulo2' && (
          <ModuleTwoView
            onGoToStudio={() => setActiveTab('taller')}
            onGoToComparator={() => setActiveTab('comparador')}
            onGoToClassroomExport={() => setIsNotebookModalOpen(true)}
          />
        )}

        {activeTab === 'modulo3' && (
          <ModuleThreeView
            onGoToStudio={() => setActiveTab('taller')}
            onGoToComparator={() => setActiveTab('comparador')}
            onGoToClassroomExport={() => setIsNotebookModalOpen(true)}
          />
        )}

        {activeTab === 'modulo4' && (
          <ModuleFourView
            onGoToStudio={() => setActiveTab('taller')}
            onGoToComparator={() => setActiveTab('comparador')}
            onGoToClassroomExport={() => setIsNotebookModalOpen(true)}
          />
        )}

        {activeTab === 'modulo5' && (
          <ModuleFiveView
            onGoToStudio={() => setActiveTab('taller')}
            onGoToComparator={() => setActiveTab('comparador')}
            onGoToClassroomExport={() => setIsNotebookModalOpen(true)}
          />
        )}

        {activeTab === 'comparador' && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Sección Práctica · Análisis Diferencial
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">
                Haiku frente a Senryū y la Retórica Occidental
              </h2>
            </div>
            <HaikuComparator />
          </div>
        )}

        {activeTab === 'taller' && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Taller Contemplativo · Escritura Autónoma
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">
                Taller Mushin y Auditor de Artificios
              </h2>
            </div>
            <InteractiveHaikuStudio onOpenNotebook={() => setIsNotebookModalOpen(true)} />
          </div>
        )}

        {activeTab === 'tarea' && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Autoevaluación Formativa · Diagnóstico del Poema
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">
                El Espejo del Haijin
              </h2>
            </div>
            <ClassroomRubricView />
          </div>
        )}

        {activeTab === 'programa' && (
          <div className="space-y-6">
            <div className="border-b border-stone-200 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                Plan de Estudios General
              </span>
              <h2 className="text-3xl font-serif font-bold text-stone-900 mt-1">
                Los 5 Módulos del Curso
              </h2>
            </div>
            <CourseCurriculum
              onSelectModule={(id) => {
                if (id === 1) setActiveTab('modulo1');
                if (id === 2) setActiveTab('modulo2');
                if (id === 3) setActiveTab('modulo3');
                if (id === 4) setActiveTab('modulo4');
                if (id === 5) setActiveTab('modulo5');
              }}
            />
          </div>
        )}
      </main>

      {/* Student Personal Notebook Modal */}
      <StudentNotebookModal
        isOpen={isNotebookModalOpen}
        onClose={() => setIsNotebookModalOpen(false)}
        onOpenStudio={() => setActiveTab('taller')}
      />

      {/* Editorial Footer */}
      <footer className="mt-16 border-t border-stone-200 bg-[#F5F2EB] py-10 text-stone-600 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-serif font-bold text-stone-900 text-sm mb-2">
              La Esencia del Haiku: Más allá de la métrica
            </h4>
            <p className="leading-relaxed text-stone-500 font-serif">
              Aplicación de aprendizaje autónomo y contemplación poética sobre la esencia estética, espiritual y filosófica del Haiku japonés.
            </p>
            <p className="mt-2 text-stone-700 font-medium">
              Diseño pedagógico: Prof. Carlos García Torín
            </p>
          </div>

          <div>
            <h4 className="font-mono uppercase tracking-wider text-stone-800 text-[11px] mb-2 font-semibold">
              Fuentes Doctrinales
            </h4>
            <p className="leading-relaxed text-stone-500 font-serif">
              Fundamentado en los tratados poéticos clásicos: <em>Sanzōshi</em> de Hattori Dohō, los diarios de viaje de Matsuo Bashō, la doctrina de Fueki Ryūkō y los estudios de R.H. Blyth y D.T. Suzuki.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono uppercase tracking-wider text-stone-800 text-[11px] mb-2 font-semibold">
              Espacio Autónomo y Privado
            </h4>
            <p className="leading-relaxed text-stone-500">
              Tus composiciones y reflexiones se almacenan localmente en tu navegador. Puedes revisar, editar o descargar tu colección en cualquier momento desde tu Cuaderno de Campo.
            </p>
            <button
              onClick={() => setIsNotebookModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-stone-900 hover:text-stone-700 font-medium underline underline-offset-4 mt-1 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" /> Abrir mi Cuaderno de Haikus
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 mt-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between text-stone-400 gap-2">
          <span>Curso de Aprendizaje Autónomo · Cátedra de Poética Japonesa</span>
          <span className="font-serif italic">«El relámpago en la noche y el graznido de la garza»</span>
        </div>
      </footer>
    </div>
  );
}
