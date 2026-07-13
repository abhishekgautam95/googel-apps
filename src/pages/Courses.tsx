import React from 'react';
import { Link } from 'react-router-dom';

export default function Courses() {
  return (
    <div className="bg-white rounded-[32px] p-8 lg:p-10 flex flex-col border border-slate-200 shadow-[0_4px_6px_rgba(0,0,0,0.02)] h-full">
      <h1 className="font-display text-4xl font-extrabold text-slate-800 tracking-tight mb-4 leading-tight">
        My Courses
      </h1>
      <p className="font-sans text-lg text-slate-600 mb-8 font-medium">
        Here are all the amazing courses you can explore.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#E8F0FE] p-6 rounded-[24px] border border-blue-100 flex flex-col h-full">
          <h2 className="font-heading text-xl font-bold text-[#1967D2] mb-2">Google Apps Mastery</h2>
          <p className="font-sans text-slate-600 text-sm mb-4">Master all the magical Google tools!</p>
          <Link to="/" className="mt-auto bg-google-blue hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-bold self-start transition-colors block text-center">Continue</Link>
        </div>
        <div className="bg-[#FFF4E5] p-6 rounded-[24px] border border-orange-100 flex flex-col h-full">
          <h2 className="font-heading text-xl font-bold text-[#A44C00] mb-2">Intro to AI</h2>
          <p className="font-sans text-slate-600 text-sm mb-4">Learn how robots think and learn.</p>
          <Link to="/ai" className="mt-auto bg-[#FBBC05] hover:bg-yellow-500 text-white px-4 py-2 rounded-xl font-bold self-start transition-colors block text-center">Start</Link>
        </div>
        <div className="bg-[#E6F4EA] p-6 rounded-[24px] border border-green-100 flex flex-col h-full">
          <h2 className="font-heading text-xl font-bold text-[#137333] mb-2">Robotics Fun</h2>
          <p className="font-sans text-slate-600 text-sm mb-4">Build your own virtual robots.</p>
          <Link to="/robotics" className="mt-auto bg-google-green hover:bg-green-600 text-white px-4 py-2 rounded-xl font-bold self-start transition-colors block text-center">Start</Link>
        </div>
        <div className="bg-slate-50 p-6 rounded-[24px] border border-slate-200 flex flex-col h-full">
          <h2 className="font-heading text-xl font-bold text-slate-800 mb-2">Computer Basics</h2>
          <p className="font-sans text-slate-600 text-sm mb-4">Learn what's inside a computer.</p>
          <Link to="/computer" className="mt-auto bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-xl font-bold self-start transition-colors block text-center">Start</Link>
        </div>
      </div>
    </div>
  );
}
