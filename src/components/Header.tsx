import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const getNavClass = ({ isActive }: { isActive: boolean }) => {
    return isActive 
      ? "text-google-blue border-b-[3px] border-google-blue py-[22px] transition-colors"
      : "py-[22px] border-b-[3px] border-transparent hover:text-slate-800 transition-colors";
  };

  return (
    <header className="bg-white px-4 md:px-6 h-[72px] flex items-center justify-between border-b-2 border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)] sticky top-0 z-50 shrink-0">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-10 h-10 bg-google-blue rounded-[10px] flex items-center justify-center text-white font-black text-2xl">
          A
        </div>
        <span className="font-extrabold text-slate-800 text-lg md:text-xl font-heading">
          Learn with <span className="text-google-blue">Abhishek Sir</span>
        </span>
      </Link>

      <nav className="hidden md:flex gap-8 font-semibold text-slate-500 font-sans h-full items-center">
        <NavLink to="/" className={getNavClass} end>
          Explore
        </NavLink>
        <NavLink to="/courses" className={getNavClass}>
          My Courses
        </NavLink>
        <NavLink to="/activities" className={getNavClass}>
          Activities
        </NavLink>
        <NavLink to="/achievements" className={getNavClass}>
          Achievements
        </NavLink>
      </nav>

      <div className="flex items-center gap-4">
        <div className="bg-[#FFF9C4] px-3 py-1.5 rounded-full flex items-center gap-2 border border-[#FFD54F] cursor-pointer hover:bg-[#FFF5A0] transition-colors">
          <span className="text-lg">⭐</span>
          <span className="font-bold text-[#A44C00] font-sans">1,240 XP</span>
        </div>
        <div className="w-11 h-11 bg-slate-200 rounded-full border-2 border-google-blue cursor-pointer overflow-hidden flex-shrink-0">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}

