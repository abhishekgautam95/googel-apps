import { GoogleApp, QuizQuestion } from './types';
import { expandedCurriculum } from './curriculum';

const baseGoogleApps: GoogleApp[] = [
  {
    id: 'intro',
    name: 'Google Apps',
    description: 'Welcome to the magical world of Google! Learn what Google Apps are and how they can make your life easier.',
    icon: 'Search',
    category: 'Various',
    color: 'bg-google-blue',
    funFact: 'Google handles over 8.5 billion searches every single day!',
    realLifeExample: 'Using Google Search to find information for your science project.'
  },
  {
    id: 'drive',
    name: 'Google Drive',
    description: 'Your magical digital backpack that never gets heavy and never loses your stuff!',
    icon: 'HardDrive',
    category: 'Storage',
    color: 'bg-google-green',
    funFact: 'Drive gives you 15 GB of free space! That is enough to store about 4,500 photos!',
    realLifeExample: 'Imagine keeping all your school project files, drawings, and photos safe in one place, even if your computer breaks.'
  },
  {
    id: 'docs',
    name: 'Google Docs',
    description: 'A super-smart paper where you and your friends can write stories together at the exact same time.',
    icon: 'FileText',
    category: 'Document',
    color: 'bg-google-blue',
    funFact: 'You can use your voice to type in Google Docs. Just talk, and it writes for you!',
    realLifeExample: 'Writing a group essay on space exploration where everyone types from their own homes.'
  },
  {
    id: 'slides',
    name: 'Google Slides',
    description: 'Create amazing presentations with cool animations, pictures, and videos to wow your class.',
    icon: 'Presentation',
    category: 'Presentation',
    color: 'bg-google-yellow',
    funFact: 'You can add YouTube videos directly into your slides to make them more fun!',
    realLifeExample: 'Presenting your science project about the solar system with flying planets and cool transitions.'
  },
  {
    id: 'sheets',
    name: 'Google Sheets',
    description: 'A magical grid that can do math for you and turn boring numbers into colorful charts.',
    icon: 'Table',
    category: 'Spreadsheet',
    color: 'bg-google-green',
    funFact: 'Sheets can translate words into different languages automatically using a secret formula!',
    realLifeExample: 'Tracking how much pocket money you saved this month and making a pie chart out of it.'
  },
  {
    id: 'forms',
    name: 'Google Forms',
    description: 'Build your own quizzes and surveys to find out what your friends think!',
    icon: 'ListTodo',
    category: 'Survey',
    color: 'bg-google-red',
    funFact: 'Forms automatically turns all the answers you get into beautiful charts.',
    realLifeExample: 'Making a poll to ask your class what theme the next party should be.'
  },
  {
    id: 'drawings',
    name: 'Google Drawings',
    description: 'A blank canvas to draw flowcharts, mind maps, and cool shapes!',
    icon: 'PenTool',
    category: 'Drawing',
    color: 'bg-purple-500',
    funFact: 'You can insert Drawings directly into your Docs and Slides!',
    realLifeExample: 'Creating a poster for the science fair.'
  },
  {
    id: 'other',
    name: 'Other Google Apps',
    description: 'Explore more amazing tools like Maps, Earth, Translate, and Meet!',
    icon: 'Plus',
    category: 'Various',
    color: 'bg-slate-600',
    funFact: 'Google Earth lets you zoom in from space all the way down to your own house!',
    realLifeExample: 'Using Google Translate to talk to a friend who speaks a different language.'
  }
];

export const googleApps: GoogleApp[] = baseGoogleApps.map(app => ({
  ...app,
  lesson: expandedCurriculum[app.id]
}));

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which Google App is best for writing a story with your friends at the same time?',
    options: ['Google Sheets', 'Google Docs', 'Google Drive', 'Google Forms'],
    correctAnswerIndex: 1,
    explanation: 'Google Docs is perfect for writing together in real-time!'
  },
  {
    id: 2,
    question: 'Where can you safely store all your digital files like a magical backpack?',
    options: ['Google Slides', 'Google Docs', 'Google Drive', 'Google Sheets'],
    correctAnswerIndex: 2,
    explanation: 'Google Drive safely stores all your files in the cloud.'
  },
  {
    id: 3,
    question: 'If you want to create a cool presentation with flying planets, you should use:',
    options: ['Google Slides', 'Google Forms', 'Google Docs', 'Google Drive'],
    correctAnswerIndex: 0,
    explanation: 'Google Slides is the ultimate tool for creating amazing presentations.'
  }
];
