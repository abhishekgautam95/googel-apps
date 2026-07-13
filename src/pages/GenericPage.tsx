import React from 'react';

export default function GenericPage({ title, emoji, desc }: { title: string, emoji: string, desc: string }) {
  return (
    <div className="bg-white rounded-[32px] p-8 lg:p-10 flex flex-col border border-slate-200 shadow-[0_4px_6px_rgba(0,0,0,0.02)] h-[70vh]">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl border border-blue-100">{emoji}</div>
        <div>
          <h1 className="font-display text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="font-sans text-lg text-slate-600 font-medium">
            {desc}
          </p>
        </div>
      </div>
      
      <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
        <span className="text-4xl mb-4">🚧</span>
        <h2 className="text-xl font-bold text-slate-700 mb-2">Content Loading...</h2>
        <p className="text-slate-500 max-w-md">Abhishek Sir is working hard to bring you the best {title.toLowerCase()}!</p>
      </div>
    </div>
  );
}
