import { motion } from 'motion/react';
import React, { useState } from 'react';
import { googleApps } from '../data';
import { HardDrive, FileText, Presentation, Table, ListTodo, PenTool, Search, Map, Plus } from 'lucide-react';
import { GoogleApp } from '../types';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  HardDrive: <HardDrive size={40} strokeWidth={2} />,
  FileText: <FileText size={40} strokeWidth={2} />,
  Presentation: <Presentation size={40} strokeWidth={2} />,
  Table: <Table size={40} strokeWidth={2} />,
  ListTodo: <ListTodo size={40} strokeWidth={2} />,
  PenTool: <PenTool size={40} strokeWidth={2} />,
  Search: <Search size={40} strokeWidth={2} />,
  Plus: <Plus size={40} strokeWidth={2} />
};

export default function InteractiveApps() {
  return (
    <div className="bg-white rounded-[32px] p-6 lg:p-8 flex flex-col border border-slate-200 shadow-[0_4px_6px_rgba(0,0,0,0.02)] h-full w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h3 className="m-0 text-2xl text-slate-800 font-extrabold font-heading">Google Apps Universe</h3>
        <span className="bg-slate-100 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-500 font-sans tracking-wide border border-slate-200">
          CLASS 5-8
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 h-full">
        {googleApps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>
    </div>
  );
}

const AppCard: React.FC<{ app: GoogleApp; index: number }> = ({ app, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getBg = () => {
    switch(app.id) {
      case 'intro': return 'bg-[#E1F5FE] text-[#0288D1] border-2 border-[#81D4FA]';
      case 'drive': return 'bg-[#E8F0FE] text-[#1967D2]';
      case 'docs': return 'bg-[#FFF4E5] text-[#A44C00] border-2 border-[#FBBC05]';
      case 'slides': return 'bg-[#FEF7E0] text-[#A44C00]';
      case 'sheets': return 'bg-[#E6F4EA] text-[#137333]';
      case 'forms': return 'bg-[#FCE8E6] text-[#C5221F]';
      case 'drawings': return 'bg-[#F3E5F5] text-[#7B1FA2]';
      case 'other': return 'bg-slate-100 text-slate-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="h-44 sm:h-48 md:h-52 w-full perspective-1000">
      <motion.div
        className={`relative w-full h-full duration-500 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className={`absolute w-full h-full backface-hidden rounded-[24px] p-4 flex flex-col items-center justify-center gap-2 ${getBg()} shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-current`}>
          <div className="scale-75 sm:scale-90 md:scale-100">{iconMap[app.icon] || <Search size={40} />}</div>
          <span className="font-extrabold text-sm sm:text-base font-sans text-center">{app.name}</span>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-800 text-white rounded-[24px] p-3 sm:p-4 flex flex-col shadow-md border-2 border-slate-700 overflow-hidden">
          <p className="font-sans text-xs sm:text-sm leading-relaxed mb-2 flex-1 font-medium overflow-y-auto custom-scrollbar">
            {app.description}
          </p>
          <div className="flex gap-2">
            <div className="bg-slate-700/50 rounded-xl p-2 shrink-0 flex-1">
              <p className="font-bold text-[9px] text-google-yellow mb-0.5 tracking-wider">FUN FACT</p>
              <p className="font-sans text-[10px] sm:text-xs leading-snug text-slate-200 line-clamp-2">{app.funFact}</p>
            </div>
            <Link 
              to={`/lesson/${app.id}`} 
              className="bg-google-blue hover:bg-blue-600 text-white p-2 rounded-xl text-xs font-bold flex items-center justify-center whitespace-nowrap transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Learn
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
