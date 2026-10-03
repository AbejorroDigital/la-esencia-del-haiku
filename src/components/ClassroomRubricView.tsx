import React, { useState } from 'react';
import {
  MODULE_1_EXERCISE,
  MODULE_2_EXERCISE,
  MODULE_3_EXERCISE,
  MODULE_4_EXERCISE,
  MODULE_5_EXERCISE
} from '../data/courseData';
import { Award, CheckCircle, Calculator, Check, Sparkles, BookOpen } from 'lucide-react';
import { studentStorage } from '../utils/studentStorage';

export const ClassroomRubricView: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isCompleted, setIsCompleted] = useState<boolean>(
    studentStorage.isModuleCompleted(1)
  );

  const currentExercise =
    selectedModule === 1
      ? MODULE_1_EXERCISE
      : selectedModule === 2
      ? MODULE_2_EXERCISE
      : selectedModule === 3
      ? MODULE_3_EXERCISE
      : selectedModule === 4
      ? MODULE_4_EXERCISE
      : MODULE_5_EXERCISE;

  // Store selected score for each of the 4 criteria
  const [selectedScores, setSelectedScores] = useState<{ [mod: number]: number[] }>({
    1: [10, 10, 10, 10],
    2: [10, 10, 10, 10],
    3: [10, 10, 10, 10],
    4: [10, 10, 10, 10],
    5: [10, 10, 10, 10],
  });

  const currentScores = selectedScores[selectedModule] || [10, 10, 10, 10];

  const weights = currentExercise.rubric.map((r) => {
    const num = parseInt(r.weight.replace('%', ''), 10);
    return isNaN(num) ? 0.25 : num / 100;
  });

  const handleSelectScore = (critIdx: number, points: number) => {
    const updated = [...currentScores];
    updated[critIdx] = points;
    setSelectedScores({
      ...selectedScores,
      [selectedModule]: updated,
    });
  };

  const calculatedWeightedScore = currentScores.reduce((acc, curr, idx) => {
    return acc + curr * (weights[idx] || 0.25);
  }, 0);

  const handleToggleCompletion = () => {
    const newState = studentStorage.toggleModuleCompleted(selectedModule);
    setIsCompleted(newState);
  };

  const handleSelectModuleChange = (modId: 1 | 2 | 3 | 4 | 5) => {
    setSelectedModule(modId);
    setIsCompleted(studentStorage.isModuleCompleted(modId));
  };

  return (
    <div className="space-y-8">
      {/* Module Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-stone-100/90 rounded-xl border border-stone-200">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-semibold px-2">
          Autoevaluación Guiada por Módulo:
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: 1 as const, label: 'M1: Estructura & Mushin' },
            { id: 2 as const, label: 'M2: Satori & Kireji' },
            { id: 3 as const, label: 'M3: Sabi & Aware' },
            { id: 4 as const, label: 'M4: Kigo Local' },
            { id: 5 as const, label: 'M5: Haijin & Jisei' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => handleSelectModuleChange(m.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                selectedModule === m.id
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200/70 border border-stone-200'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {/* Header card */}
      <div className="p-6 bg-gradient-to-br from-stone-100/90 to-amber-50/40 border border-stone-200 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
              El Espejo del Haijin · Autoevaluación Módulo {selectedModule}
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-stone-900">
            {currentExercise.title}
          </h3>
          <p className="text-stone-600 text-xs leading-relaxed">
            {currentExercise.objective}
          </p>

          <div className="pt-2">
            <button
              onClick={handleToggleCompletion}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                isCompleted
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-700' : 'text-stone-400'}`} />
              <span>
                {isCompleted
                  ? '✓ Módulo Marcado como Completado'
                  : 'Marcar Módulo como Completado en mi Progreso'}
              </span>
            </button>
          </div>
        </div>

        {/* Live Score Tally Box & Feedback */}
        <div className="p-5 bg-white border border-stone-200 rounded-xl shadow-xs text-center shrink-0 min-w-[200px] space-y-1">
          <span className="text-[11px] font-mono uppercase text-stone-400 block">
            Índice de Afinidad Poética
          </span>
          <div className="text-3xl font-serif font-bold text-stone-900">
            {calculatedWeightedScore.toFixed(1)}{' '}
            <span className="text-sm font-sans text-stone-400">/ 10</span>
          </div>
          <span
            className={`text-xs font-medium inline-block px-2.5 py-0.5 rounded-full ${
              calculatedWeightedScore >= 9
                ? 'bg-emerald-100 text-emerald-900'
                : calculatedWeightedScore >= 7
                ? 'bg-amber-100 text-amber-900'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            {calculatedWeightedScore >= 9
              ? 'Nivel Destacado'
              : calculatedWeightedScore >= 7
              ? 'Nivel Competente'
              : 'En Desarrollo'}
          </span>

          <p className="text-[11px] text-stone-500 font-serif italic pt-2 border-t border-stone-100 mt-2">
            {calculatedWeightedScore >= 9
              ? '«El verso respira libre del ego lírico.»'
              : calculatedWeightedScore >= 7
              ? '«Buen despojo; afina el silencio entre versos.»'
              : '«Suelta el intelecto y vuelve a contemplar.»'}
          </p>
        </div>
      </div>

      {/* Criteria Breakdown */}
      <div className="space-y-6">
        {currentExercise.rubric.map((criterion, critIdx) => (
          <div
            key={critIdx}
            className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs"
          >
            <div className="p-4 bg-stone-50 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-stone-400 mr-2">0{critIdx + 1}.</span>
                <span className="font-serif font-bold text-base text-stone-900">
                  {criterion.criterion}
                </span>
                <span className="ml-2 text-xs font-sans font-medium text-stone-500 bg-stone-200/60 px-2 py-0.5 rounded">
                  Ponderación: {criterion.weight}
                </span>
              </div>
              <p className="text-xs text-stone-500 italic max-w-md">
                {criterion.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
              {criterion.levels.map((lvl, lvlIdx) => {
                const isSelected = currentScores[critIdx] === lvl.points;

                return (
                  <button
                    key={lvlIdx}
                    onClick={() => handleSelectScore(critIdx, lvl.points)}
                    className={`p-4 text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-50/60 ring-2 ring-stone-900 z-10'
                        : 'hover:bg-stone-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-stone-900">
                          {lvl.level}
                        </span>
                        <span className="font-mono text-xs font-bold text-stone-700 bg-white border border-stone-200 px-1.5 py-0.5 rounded">
                          {lvl.points} pts
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed mt-2 font-sans">
                        {lvl.descriptor}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-stone-100/80 flex items-center gap-1 text-[11px] text-stone-400">
                      {isSelected ? (
                        <span className="text-stone-900 font-medium flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-stone-900" /> Nivel Seleccionado
                        </span>
                      ) : (
                        <span>Clic para autodiagnosticar</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
