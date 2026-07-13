import React from 'react';

export default function Certificates() {
  return (
    <div className="bg-white rounded-[32px] p-8 lg:p-10 flex flex-col border border-slate-200 shadow-[0_4px_6px_rgba(0,0,0,0.02)] h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-[#FFF9C4] rounded-2xl flex items-center justify-center text-4xl border-2 border-[#FFD54F]">📜</div>
        <div>
          <h1 className="font-display text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            My Certificates
          </h1>
          <p className="font-sans text-lg text-slate-600 font-medium">
            View and download your earned certificates!
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-50 p-6 rounded-[24px] flex flex-col border border-slate-200">
          <div className="h-40 bg-[#E8F0FE] rounded-xl border-2 border-dashed border-blue-200 flex items-center justify-center mb-4">
            <span className="text-4xl">🎓</span>
          </div>
          <h3 className="font-bold text-slate-800 text-lg">Google Apps Master</h3>
          <p className="text-sm text-slate-500 mb-4">Awarded for completing Chapter 1</p>
          <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-xl font-bold mt-auto transition-colors w-full">
            Download PDF
          </button>
        </div>
        <div className="bg-slate-50 p-6 rounded-[24px] flex flex-col border border-slate-200 opacity-60">
          <div className="h-40 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center mb-4">
            <span className="text-4xl grayscale">🎓</span>
          </div>
          <h3 className="font-bold text-slate-800 text-lg">AI Explorer</h3>
          <p className="text-sm text-slate-500 mb-4">Complete Intro to AI to unlock</p>
          <button className="bg-slate-100 text-slate-400 px-4 py-2 rounded-xl font-bold mt-auto cursor-not-allowed w-full">
            Locked
          </button>
        </div>
      </div>
    </div>
  );
}
