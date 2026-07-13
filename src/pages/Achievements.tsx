import React from 'react';
import { Link } from 'react-router-dom';

export default function Achievements() {
  return (
    <div className="bg-white rounded-[32px] p-8 lg:p-10 flex flex-col border border-slate-200 shadow-[0_4px_6px_rgba(0,0,0,0.02)] h-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 border-b border-slate-100 pb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-[#FFF9C4] rounded-2xl flex items-center justify-center text-4xl border-2 border-[#FFD54F]">⭐</div>
          <div>
            <h1 className="font-display text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Trophy Room
            </h1>
            <p className="font-sans text-lg text-slate-600 font-medium">
              You have <span className="font-bold text-[#A44C00]">1,240 XP</span>! Keep going to unlock more badges.
            </p>
          </div>
        </div>
        
        <Link to="/certificates" className="bg-google-blue hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold transition-colors flex items-center gap-2">
          <span>View Certificates</span>
          <span className="text-xl">📜</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-slate-50 p-6 rounded-[24px] flex flex-col items-center text-center border border-slate-200">
          <div className="w-20 h-20 bg-[#FFEBEE] rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-sm">🚀</div>
          <h3 className="font-bold text-slate-800">Fast Learner</h3>
        </div>
        <div className="bg-slate-50 p-6 rounded-[24px] flex flex-col items-center text-center border border-slate-200">
          <div className="w-20 h-20 bg-[#E3F2FD] rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-sm">💎</div>
          <h3 className="font-bold text-slate-800">Cloud Master</h3>
        </div>
        <div className="bg-slate-50 p-6 rounded-[24px] flex flex-col items-center text-center border border-slate-200">
          <div className="w-20 h-20 bg-[#F1F8E9] rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-sm">🧠</div>
          <h3 className="font-bold text-slate-800">Quiz Genius</h3>
        </div>
        <div className="bg-slate-50 p-6 rounded-[24px] flex flex-col items-center text-center border border-slate-200 opacity-60">
          <div className="w-20 h-20 bg-[#FFFDE7] rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-sm">🔒</div>
          <h3 className="font-bold text-slate-800">Mystery Badge</h3>
        </div>
      </div>
    </div>
  );
}
