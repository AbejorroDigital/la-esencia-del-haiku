import React, { useState, useEffect } from 'react';
import { X, BookOpen, Trash2, Copy, Check, Download, Calendar, Feather, Tag } from 'lucide-react';
import { studentStorage, SavedHaiku } from '../utils/studentStorage';

interface StudentNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStudio?: () => void;
}

export const StudentNotebookModal: React.FC<StudentNotebookModalProps> = ({
  isOpen,
  onClose,
  onOpenStudio,
}) => {
  const [haikus, setHaikus] = useState<SavedHaiku[]>([]);
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<number | 'all'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isExportingAll, setIsExportingAll] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setHaikus(studentStorage.getSavedHaikus());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredHaikus =
    selectedModuleFilter === 'all'
      ? haikus
      : haikus.filter((h) => h.moduleId === selectedModuleFilter);

  const handleDelete = (id: string) => {
    studentStorage.deleteHaiku(id);
    setHaikus(studentStorage.getSavedHaikus());
  };

  const handleCopySingle = (h: SavedHaiku) => {
    const text = `${h.lines.join('\n')}\n\n— Compuesto en el ${h.moduleTitle}\n${h.reflection ? `Reflexión: ${h.reflection}` : ''}`;
    navigator.clipboard.writeText(text);
    setCopiedId(h.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportNotebook = () => {
    if (haikus.length === 0) return;
    const content = `# Mi Cuaderno de Haikus · Aprendizaje Autónomo
Curso: La Esencia del Haiku: Más allá de la métrica
Diseñador del curso: Prof. Carlos García Torín
Fecha de exportación: ${new Date().toLocaleDateString('es-ES')}

Total de haikus registrados: ${haikus.length}

${haikus
  .map(
    (h, idx) => `---
### ${idx + 1}. ${h.moduleTitle} (${new Date(h.createdAt).toLocaleDateString('es-ES')})
${h.context ? `*Entorno observado:* ${h.context}\n` : ''}
${h.lines[0]}
${h.lines[1]}
${h.lines[2]}

${h.reflection ? `**Reflexión contemplativa:**\n${h.reflection}\n` : ''}`
  )
  .join('\n\n')}
`;

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cuaderno_haikus_${new Date().toISOString().slice(0, 10)}.md`;
    link.click();
    URL.revokeObjectURL(url);
    setIsExportingAll(true);
    setTimeout(() => setIsExportingAll(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
      <div className="bg-[#FBF9F5] w-full max-w-3xl rounded-2xl shadow-2xl border border-stone-300 flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-stone-100/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 text-amber-100 flex items-center justify-center shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-stone-900">
                Mi Cuaderno de Campo (Diario del Haijin)
              </h2>
              <p className="text-xs text-stone-500 font-sans">
                Tus haikus guardados durante las prácticas autónomas del curso ({haikus.length} registrados)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {haikus.length > 0 && (
              <button
                onClick={handleExportNotebook}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-stone-300 text-xs font-medium text-stone-700 rounded-md hover:bg-stone-50 transition-colors shadow-2xs"
                title="Descargar mi cuaderno en archivo Markdown"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isExportingAll ? '¡Descargado!' : 'Descargar Cuaderno'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter bar */}
        <div className="px-6 py-2.5 bg-stone-50 border-b border-stone-200 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-stone-400 font-mono uppercase text-[11px] mr-1">Filtrar:</span>
          <button
            onClick={() => setSelectedModuleFilter('all')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              selectedModuleFilter === 'all'
                ? 'bg-stone-900 text-white font-medium shadow-2xs'
                : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            Todos ({haikus.length})
          </button>
          {[1, 2, 3, 4, 5].map((num) => {
            const count = haikus.filter((h) => h.moduleId === num).length;
            return (
              <button
                key={num}
                onClick={() => setSelectedModuleFilter(num)}
                className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap ${
                  selectedModuleFilter === num
                    ? 'bg-stone-900 text-white font-medium shadow-2xs'
                    : 'text-stone-600 hover:bg-stone-200'
                }`}
              >
                Módulo {num} ({count})
              </button>
            );
          })}
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredHaikus.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-stone-200/70 text-stone-400 flex items-center justify-center">
                <Feather className="w-6 h-6" />
              </div>
              <div className="max-w-md mx-auto space-y-1">
                <h4 className="font-serif font-bold text-stone-700 text-base">
                  Tu cuaderno está en blanco
                </h4>
                <p className="text-xs text-stone-500 font-serif">
                  Aún no has guardado composiciones para este filtro. Ve al <strong>Taller Mushin</strong> o a cualquiera de los 5 módulos para escribir y archivar tus haikus.
                </p>
              </div>
              {onOpenStudio && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenStudio();
                  }}
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-md shadow-xs transition-colors"
                >
                  Abrir Taller de Escritura
                </button>
              )}
            </div>
          ) : (
            filteredHaikus.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs space-y-3 hover:border-stone-300 transition-colors"
              >
                <div className="flex items-center justify-between text-xs border-b border-stone-100 pb-2">
                  <span className="font-mono text-stone-500 font-medium">
                    {item.moduleTitle}
                  </span>
                  <div className="flex items-center gap-3 text-stone-400 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.createdAt).toLocaleDateString('es-ES', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <button
                      onClick={() => handleCopySingle(item)}
                      className="hover:text-stone-700 transition-colors p-1"
                      title="Copiar haiku"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="hover:text-rose-600 transition-colors p-1"
                      title="Eliminar de mi cuaderno"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {item.context && (
                  <p className="text-[11px] text-stone-500 italic">
                    Entorno: {item.context}
                  </p>
                )}

                {/* Verses display */}
                <div className="p-4 bg-amber-50/30 rounded-lg border-l-3 border-stone-800 font-serif text-base sm:text-lg text-stone-900 leading-relaxed space-y-1">
                  <p>{item.lines[0]}</p>
                  <p>{item.lines[1]}</p>
                  <p>{item.lines[2]}</p>
                </div>

                {item.reflection && (
                  <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-md border border-stone-100">
                    <span className="font-semibold text-stone-800 block mb-1">
                      Reflexión de aprendizaje:
                    </span>
                    <p className="leading-relaxed font-serif italic text-stone-700">
                      {item.reflection}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100/60 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
          <span className="font-serif italic">
            «Tus poemas son huellas de tu propia atención serena.»
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition-colors font-medium"
          >
            Cerrar Cuaderno
          </button>
        </div>
      </div>
    </div>
  );
};
