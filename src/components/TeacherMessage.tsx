import React from 'react';

export default function TeacherMessage() {
  return (
    <div className="bg-gradient-to-br from-google-blue to-google-green rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center text-white relative overflow-hidden flex-1 shadow-lg h-full">
      <div className="w-[140px] h-[140px] bg-white/20 rounded-full mb-6 flex items-center justify-center border-4 border-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] shrink-0">
        <span className="text-[72px]">👨‍🏫</span>
      </div>
      
      <h2 className="text-[28px] md:text-[32px] font-extrabold mb-4 font-heading tracking-tight leading-tight">
        Hello Champions! 👋
      </h2>
      
      <p className="text-base md:text-lg leading-[1.6] opacity-95 font-medium mb-10 font-sans">
        "Today we are going to discover something amazing! Ever wondered how Google saves your files even if your computer switches off? Let's solve this mystery together!"
      </p>
      
      <div className="mt-auto bg-white/15 p-5 rounded-[20px] w-full border border-white/30 backdrop-blur-md">
        <p className="text-xs uppercase tracking-widest font-bold mb-3 font-sans">Chapter Progress</p>
        <div className="h-2.5 bg-black/20 rounded-full overflow-hidden">
          <div className="w-[65%] h-full bg-white rounded-full"></div>
        </div>
        <p className="text-sm mt-3 font-extrabold font-sans">65% Complete</p>
      </div>
    </div>
  );
}
