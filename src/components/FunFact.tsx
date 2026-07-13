import React from 'react';
import { motion } from 'motion/react';

export default function FunFact() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-google-yellow rounded-[32px] p-6 lg:p-8 flex flex-col text-[#5F4B00] shadow-sm hover:shadow-md transition-shadow h-full"
    >
      <h4 className="m-0 mb-3 text-lg md:text-xl font-extrabold flex items-center gap-2 font-heading">
        <span className="text-2xl">💡</span> Did You Know?
      </h4>
      <p className="m-0 text-sm md:text-base leading-relaxed font-bold">
        Google Drive is like a giant library in the sky that never runs out of space for your homework!
      </p>
      <div className="mt-auto bg-white/40 p-3 rounded-2xl text-sm font-extrabold w-fit text-[#5F4B00] shadow-sm">
        Fun Fact #42
      </div>
    </motion.div>
  );
}
