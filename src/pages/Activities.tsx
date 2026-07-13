import React from 'react';
import { Link } from 'react-router-dom';

export default function Activities() {
  return (
    <div className="bg-white rounded-[32px] p-8 lg:p-10 flex flex-col border border-slate-200 shadow-[0_4px_6px_rgba(0,0,0,0.02)] h-full">
      <h1 className="font-display text-4xl font-extrabold text-slate-800 tracking-tight mb-4 leading-tight">
        Fun Activities
      </h1>
      <p className="font-sans text-lg text-slate-600 mb-8 font-medium">
        Play games, take quizzes, and earn more XP!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#34A853] rounded-[32px] p-8 flex flex-col items-start justify-between text-white shadow-sm gap-5 border border-[#2E964A]">
          <span className="text-5xl bg-white/20 p-4 rounded-2xl shadow-inner shrink-0">🎮</span>
          <div>
            <h4 className="m-0 text-2xl font-extrabold font-heading text-white mb-2">Cloud Catcher</h4>
            <p className="m-0 text-base font-semibold opacity-90 font-sans text-green-50">Catch the right apps to earn 50 XP!</p>
          </div>
          <button className="bg-white text-[#34A853] border-none px-6 py-3 rounded-2xl font-extrabold cursor-pointer hover:bg-green-50 transition-colors shadow-md mt-4">
            PLAY NOW
          </button>
        </div>

        <div className="bg-[#4285F4] rounded-[32px] p-8 flex flex-col items-start justify-between text-white shadow-sm gap-5 border border-[#3068c2]">
          <span className="text-5xl bg-white/20 p-4 rounded-2xl shadow-inner shrink-0">📝</span>
          <div>
            <h4 className="m-0 text-2xl font-extrabold font-heading text-white mb-2">Quiz Zone</h4>
            <p className="m-0 text-base font-semibold opacity-90 font-sans text-blue-50">Test your knowledge!</p>
          </div>
          <Link to="/quiz" className="bg-white text-[#4285F4] border-none px-6 py-3 rounded-2xl font-extrabold cursor-pointer hover:bg-blue-50 transition-colors shadow-md mt-4">
            GO TO QUIZ
          </Link>
        </div>
      </div>
    </div>
  );
}
