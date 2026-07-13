import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="bg-white rounded-[32px] p-8 lg:p-10 flex flex-col justify-center border border-slate-200 shadow-[0_4px_6px_rgba(0,0,0,0.02)] h-full w-full">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 text-google-blue font-heading font-bold text-sm w-fit mb-6 border border-blue-100">
        <Sparkles size={16} />
        <span>Chapter 1: The Magic of Cloud Computing</span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-extrabold text-slate-800 tracking-tight mb-4 leading-tight">
        Smart Learning with <br className="hidden md:block" />
        <span className="text-google-blue">Google Apps</span>
      </h1>

      <p className="font-sans text-lg text-slate-600 max-w-2xl mb-8 font-medium leading-relaxed">
        Unlock your digital superpowers! Join Abhishek Sir on an exciting adventure to master the tools that make studying, creating, and collaborating totally awesome.
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <Link to="/courses" className="px-6 py-3.5 bg-google-blue hover:bg-blue-600 text-white rounded-2xl font-heading font-bold text-lg shadow-md transition-all flex items-center gap-2 cursor-pointer w-fit">
          Start Learning
          <Sparkles size={20} />
        </Link>
      </div>
    </div>
  );
}
