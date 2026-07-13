import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function LearningPath() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-[24px] p-5 md:p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200 shadow-[0_4px_6px_rgba(0,0,0,0.02)] w-full relative overflow-hidden"
    >
      <div className="font-extrabold text-slate-400 text-xs md:text-sm uppercase tracking-widest font-sans shrink-0 hidden md:block">
        Learning Path
      </div>
      
      <div className="flex-1 flex items-center justify-center gap-2 w-full max-w-2xl mx-auto">
        <div className="w-10 h-10 bg-google-blue rounded-full text-white flex items-center justify-center font-extrabold text-sm shadow-md shrink-0 relative z-10">1</div>
        <div className="flex-1 h-1.5 bg-google-blue rounded-full"></div>
        <div className="w-10 h-10 bg-google-blue rounded-full text-white flex items-center justify-center font-extrabold text-sm shadow-md shrink-0 relative z-10">2</div>
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full"></div>
        <div className="w-10 h-10 bg-white border-[3px] border-slate-200 rounded-full text-slate-400 flex items-center justify-center font-extrabold text-sm shrink-0 relative z-10">3</div>
        <div className="flex-1 h-1.5 bg-slate-100 rounded-full hidden sm:block"></div>
        <div className="w-10 h-10 bg-white border-[3px] border-slate-200 rounded-full text-slate-400 items-center justify-center font-extrabold text-sm shrink-0 relative z-10 hidden sm:flex">🏁</div>
      </div>

      <Link to="/lesson/docs" className="font-extrabold text-slate-800 font-sans text-sm md:text-base shrink-0 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors">
        Next: <span className="text-google-red">The Magic of Docs</span>
      </Link>
    </motion.div>
  );
}
