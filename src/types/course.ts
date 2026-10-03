export interface Module {
  id: number;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  kanji: string;
  kanjiMeaning: string;
  estimatedHours: string;
  concepts: string[];
  summary: string;
  isAvailable: boolean;
}

export interface RubricLevel {
  level: string;
  points: number;
  descriptor: string;
}

export interface RubricCriterion {
  criterion: string;
  weight: string;
  description: string;
  levels: RubricLevel[];
}

export interface HaikuComparisonItem {
  verse: string[];
  type: 'haiku' | 'senryu' | 'occidental_pseudo';
  author: string;
  explanation: string;
  keyAspect: string;
}

export interface PracticalExercise {
  title: string;
  objective: string;
  materialsNeeded: string[];
  steps: {
    phase: string;
    instruction: string;
    reflectionPrompt: string;
  }[];
  submissionFormat: string;
  classroomSubmissionTemplate: string;
  rubric: RubricCriterion[];
}
