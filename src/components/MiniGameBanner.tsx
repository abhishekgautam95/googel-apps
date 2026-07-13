import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function MiniGameBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#34A853] rounded-[32px] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between text-white shadow-sm hover:shadow-md transition-shadow h-full gap-5 border border-[#2E964A]"
    >
      <div className="flex items-center gap-4 w-full md:w-auto">
        <span className="text-4xl md:text-5xl bg-white/20 p-3 rounded-2xl shadow-inner shrink-0">🎮</span>
        <div>
          <h4 className="m-0 text-xl font-extrabold font-heading text-white">Mini Game: Cloud Catcher</h4>
          <p className="m-0 text-sm md:text-base font-semibold opacity-90 font-sans mt-1 text-green-50">Catch the right apps to earn 50 XP!</p>
        </div>
      </div>
      <Link to="/game" className="bg-white text-[#34A853] border-none px-8 py-3.5 rounded-2xl font-extrabold text-base cursor-pointer hover:bg-green-50 transition-colors shrink-0 w-full md:w-auto shadow-md block text-center">
        PLAY NOW
      </Link>
    </motion.div>
  );
}
