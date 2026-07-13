export type AppCategory = 'Document' | 'Storage' | 'Presentation' | 'Spreadsheet' | 'Survey' | 'Drawing' | 'Navigation' | 'Various';

export interface LessonContent {
  objectives: string[];
  warmupQuestion: string;
  story: { title: string; content: string };
  realLifeProblem: string;
  explanation: { title: string; steps: { heading: string; detail: string }[] };
  funFact: string;
  didYouKnow: string;
  tips: string[];
  commonMistakes: string[];
  challenge: string;
  homework: string;
  badgeName: string;
  badgeEmoji: string;
  xpReward: number;
}

export interface GoogleApp {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: AppCategory;
  color: string;
  funFact: string;
  realLifeExample: string;
  lesson?: LessonContent;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}
