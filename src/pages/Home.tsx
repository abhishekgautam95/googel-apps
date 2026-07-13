import React from 'react';
import TeacherMessage from '../components/TeacherMessage';
import Hero from '../components/Hero';
import InteractiveApps from '../components/InteractiveApps';
import FunFact from '../components/FunFact';
import Badges from '../components/Badges';
import MiniGameBanner from '../components/MiniGameBanner';
import QuizSection from '../components/Quiz';
import LearningPath from '../components/LearningPath';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 xl:gap-6 auto-rows-min">
      {/* Row 1 & 2 */}
      <div className="xl:col-span-3 xl:row-span-2 flex flex-col h-full">
        <TeacherMessage />
      </div>
      
      <div className="xl:col-span-9 flex flex-col h-full">
        <Hero />
      </div>
      
      <div className="xl:col-span-9 flex flex-col h-full">
        <InteractiveApps />
      </div>

      {/* Row 3 */}
      <div className="xl:col-span-3 flex flex-col h-full">
        <FunFact />
      </div>

      <div className="xl:col-span-4 flex flex-col h-full">
        <Badges />
      </div>

      <div className="xl:col-span-5 flex flex-col h-full">
        <MiniGameBanner />
      </div>

      {/* Row 4 */}
      <div className="xl:col-span-12 flex flex-col h-full">
        <QuizSection />
      </div>

      {/* Row 5 */}
      <div className="xl:col-span-12 flex flex-col mt-2">
        <LearningPath />
      </div>
    </div>
  );
}
