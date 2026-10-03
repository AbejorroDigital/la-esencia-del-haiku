import React from 'react';
import { MODULES_LIST, COURSE_INFO } from '../data/courseData';
import { BookOpen, Clock, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

interface CourseCurriculumProps {
  onSelectModule: (moduleId: number) => void;
}

export const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ onSelectModule }) => {
  return (
    <div className="space-y-8">
      {/* Syllabus presentation header */}
      <div className="p-6 bg-stone-100/70 border border-stone-200 rounded-lg">
        <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
          Estructura Curricular Completa · Google Classroom
        </span>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
          {COURSE_INFO.title}
        </h3>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          {COURSE_INFO.courseOverview}
        </p>
      </div>

      {/* Module roadmaps */}
      <div className="space-y-4">
        {MODULES_LIST.map((mod) => (
          <div
            key={mod.id}
            className={`p-6 rounded-lg border transition-all ${
              mod.isAvailable
                ? 'bg-white border-stone-300 shadow-xs hover:border-stone-800'
                : 'bg-stone-50/70 border-stone-200/80 opacity-90'
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* Kanji Icon Tile */}
                <div className="w-14 h-14 rounded-md bg-stone-100 border border-stone-200 flex flex-col items-center justify-center shrink-0">
                  <span className="font-serif-japanese text-xl font-bold text-stone-800">
                    {mod.kanji}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-semibold text-stone-700">
                      {mod.number}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-stone-500">{mod.kanjiMeaning}</span>
                    <span className="text-stone-300">·</span>
                    <span className="flex items-center gap-1 text-stone-500">
                      <Clock className="w-3 h-3" /> {mod.estimatedHours}
                    </span>
                  </div>

                  <h4 className="text-lg font-serif font-bold text-stone-900">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-stone-500 font-serif italic">
                    {mod.subtitle}
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed pt-1 max-w-2xl">
                    {mod.summary}
                  </p>

                  {/* Concept tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] text-stone-500">
                    {mod.concepts.map((concept, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 bg-stone-100 rounded text-stone-700"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status and Action */}
              <div className="flex items-center gap-3 lg:self-center shrink-0 pt-2 lg:pt-0">
                {mod.isAvailable ? (
                  <button
                    onClick={() => onSelectModule(mod.id)}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded-md hover:bg-stone-800 transition-colors shadow-xs"
                  >
                    <span>Estudiar Módulo Activo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-400 bg-stone-100 rounded border border-stone-200">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Siguiente en el programa</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
