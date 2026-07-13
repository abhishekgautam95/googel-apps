import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Badges() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-[32px] p-6 lg:p-8 flex flex-col shadow-[0_4px_6px_rgba(0,0,0,0.02)] border border-slate-200 h-full"
    >
      <h4 className="m-0 mb-4 text-lg md:text-xl font-extrabold text-slate-800 font-heading">Your Badges</h4>
      <div className="flex flex-wrap gap-3">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFEBEE] rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-sm">🚀</div>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#E3F2FD] rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-sm">💎</div>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F1F8E9] rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-sm">🧠</div>
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FFFDE7] rounded-xl flex items-center justify-center text-2xl opacity-40 shadow-sm border border-[#FFF59D]">🔒</div>
      </div>
      <Link to="/achievements" className="mt-auto bg-[#F0F4F8] hover:bg-slate-200 text-slate-600 border-none p-3.5 rounded-2xl font-bold font-sans cursor-pointer transition-colors w-full shadow-sm text-center block">
        View Trophy Room
      </Link>
    </motion.div>
  );
}
