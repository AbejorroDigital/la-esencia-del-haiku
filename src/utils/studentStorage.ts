/**
 * Utilidad de persistencia local (localStorage) para el aprendizaje autónomo.
 * Permite al estudiante llevar su progreso, registrar sus haikus en el cuaderno personal
 * y realizar autoevaluaciones sin necesidad de servidores externos ni cuentas de terceros.
 */

export interface SavedHaiku {
  id: string;
  moduleId: number;
  moduleTitle: string;
  lines: [string, string, string];
  context?: string;
  reflection?: string;
  tags?: string[];
  createdAt: string;
}

export interface StudentProgress {
  completedModules: number[];
  currentModule: number;
  totalTimeMinutes: number;
  soundEnabled: boolean;
}

const STORAGE_KEYS = {
  HAIKUS: 'haiku_cuaderno_estudiante_v1',
  PROGRESS: 'haiku_progreso_estudiante_v1',
};

export const studentStorage = {
  // Cuaderno de Haikus
  getSavedHaikus(): SavedHaiku[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.HAIKUS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveHaiku(haiku: Omit<SavedHaiku, 'id' | 'createdAt'>): SavedHaiku {
    const list = this.getSavedHaikus();
    const newEntry: SavedHaiku = {
      ...haiku,
      id: 'haiku_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      createdAt: new Date().toISOString(),
    };
    const updated = [newEntry, ...list];
    try {
      localStorage.setItem(STORAGE_KEYS.HAIKUS, JSON.stringify(updated));
    } catch (e) {
      console.warn('Error guardando en localStorage:', e);
    }
    return newEntry;
  },

  deleteHaiku(id: string): void {
    const list = this.getSavedHaikus();
    const filtered = list.filter((h) => h.id !== id);
    try {
      localStorage.setItem(STORAGE_KEYS.HAIKUS, JSON.stringify(filtered));
    } catch (e) {
      console.warn(e);
    }
  },

  // Progreso en el curso
  getProgress(): StudentProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      return data
        ? JSON.parse(data)
        : {
            completedModules: [],
            currentModule: 1,
            totalTimeMinutes: 0,
            soundEnabled: true,
          };
    } catch {
      return {
        completedModules: [],
        currentModule: 1,
        totalTimeMinutes: 0,
        soundEnabled: true,
      };
    }
  },

  toggleModuleCompleted(moduleId: number): boolean {
    const progress = this.getProgress();
    const isCompleted = progress.completedModules.includes(moduleId);
    const updated = isCompleted
      ? progress.completedModules.filter((id) => id !== moduleId)
      : [...progress.completedModules, moduleId];

    progress.completedModules = updated;
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn(e);
    }
    return !isCompleted;
  },

  isModuleCompleted(moduleId: number): boolean {
    const progress = this.getProgress();
    return progress.completedModules.includes(moduleId);
  },
};
