import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { googleApps } from '../data';
import { motion } from 'motion/react';
import { Volume2, ChevronRight, CheckCircle2, Award, Sparkles, BookOpen, AlertTriangle } from 'lucide-react';

export default function Lesson() {
  const { id } = useParams();
  const app = googleApps.find(a => a.id === id);

  // Scroll to top when lesson loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!app) {
    return (
      <div className="bg-white rounded-[32px] p-8 lg:p-10 flex flex-col items-center justify-center text-center border border-slate-200 shadow-sm h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">Lesson Not Found</h1>
        <Link to="/" className="px-6 py-3 bg-google-blue text-white rounded-xl font-bold">Go Back Home</Link>
      </div>
    );
  }

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // slightly slower for kids
      utterance.pitch = 1.1; // slightly friendly pitch
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Oops! Your browser doesn't support reading aloud.");
    }
  };

  const lesson = app.lesson;

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className={`${app.color} rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-md`}>
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 bg-white/20 rounded-[24px] flex items-center justify-center border-4 border-white/40 shadow-inner shrink-0 backdrop-blur-sm">
            <span className="text-5xl font-black">{app.name[7] || 'G'}</span>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-bold tracking-wide uppercase mb-3 backdrop-blur-sm">
              <BookOpen size={16} /> Chapter Module
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight mb-2">
              {app.name}
            </h1>
            <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl">
              {app.description}
            </p>
          </div>
        </div>
      </div>

      {!lesson ? (
        <div className="bg-white p-10 rounded-[32px] text-center border border-slate-200 shadow-sm">
          <span className="text-4xl mb-4 block">🚧</span>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Abhishek Sir is preparing this lesson!</h2>
          <p className="text-slate-500">Please check back soon for the full magical experience.</p>
          <Link to="/" className="inline-block mt-6 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-colors">
            Go Back
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Abhishek Sir Welcome */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-20 h-20 bg-google-blue rounded-full border-4 border-[#E8F0FE] flex items-center justify-center shrink-0 text-4xl shadow-md">
                👨‍🏫
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-extrabold text-slate-800 font-heading">Welcome Champions!</h2>
                  <button onClick={() => handleSpeak(`Welcome Champions! ${lesson.warmupQuestion}`)} className="p-2 bg-blue-50 text-google-blue hover:bg-blue-100 rounded-full transition-colors" title="Read Aloud">
                    <Volume2 size={20} />
                  </button>
                </div>
                <p className="text-lg text-slate-600 font-medium leading-relaxed bg-[#F0F4F8] p-4 rounded-2xl border-l-4 border-google-blue">
                  {lesson.warmupQuestion}
                </p>
              </div>
            </motion.div>

            {/* Story Time */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="bg-[#FFF4E5] rounded-[32px] p-8 border border-[#FFE0B2] shadow-sm relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-8xl opacity-10">📖</div>
              <h2 className="text-2xl font-extrabold text-[#E65100] mb-4 font-heading flex items-center gap-2">
                <span>Story Time:</span> {lesson.story.title}
              </h2>
              <p className="text-[#A44C00] text-lg leading-relaxed font-medium">
                {lesson.story.content}
              </p>
            </motion.div>

            {/* Real Life Problem & Explanation */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="bg-red-100 text-google-red p-2 rounded-xl"><AlertTriangle size={20} /></span>
                  The Problem
                </h3>
                <p className="text-slate-600 font-medium text-lg">{lesson.realLifeProblem}</p>
              </div>

              <div className="h-px bg-slate-100 w-full"></div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-6 font-heading flex items-center gap-2">
                  <span className="bg-green-100 text-google-green p-2 rounded-xl"><Sparkles size={24} /></span>
                  The Solution: {lesson.explanation.title}
                </h3>
                <div className="space-y-6">
                  {lesson.explanation.steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-google-blue/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-google-blue text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-1">{step.heading.replace(/^\d+\.\s*/, '')}</h4>
                        <p className="text-slate-600 font-medium">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission / Challenge */}
            <div className="bg-gradient-to-r from-google-blue to-purple-600 rounded-[32px] p-8 text-white shadow-md relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h2 className="text-2xl font-extrabold font-heading mb-2 flex items-center gap-2">
                <span>🎯</span> Your Mission!
              </h2>
              <p className="text-lg font-medium opacity-95 mb-6">
                {lesson.challenge}
              </p>
              <button className="bg-white text-google-blue font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-sm flex items-center gap-2">
                <CheckCircle2 size={20} /> I completed the mission!
              </button>
            </div>
            
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6 flex flex-col h-full">
            
            {/* Learning Objectives */}
            <div className="bg-white rounded-[32px] p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-800 mb-4 font-heading">What we will learn</h3>
              <ul className="space-y-3">
                {lesson.objectives.map((obj, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 font-medium text-sm">
                    <CheckCircle2 size={18} className="text-google-green shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fun Fact */}
            <div className="bg-[#FFF9C4] rounded-[32px] p-6 border border-[#FFD54F] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#A44C00] mb-2 font-heading flex items-center gap-2">
                <span className="text-2xl">💡</span> Fun Fact
              </h3>
              <p className="text-[#8D4200] font-medium text-sm leading-relaxed">{lesson.funFact}</p>
            </div>

            {/* Did You Know */}
            <div className="bg-[#E6F4EA] rounded-[32px] p-6 border border-[#A5D6A7] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#137333] mb-2 font-heading flex items-center gap-2">
                <span className="text-2xl">😲</span> Did you know?
              </h3>
              <p className="text-[#0D5302] font-medium text-sm leading-relaxed">{lesson.didYouKnow}</p>
            </div>

            {/* Pro Tips */}
            <div className="bg-[#F3E5F5] rounded-[32px] p-6 border border-[#CE93D8] shadow-sm">
              <h3 className="text-lg font-extrabold text-[#7B1FA2] mb-3 font-heading flex items-center gap-2">
                <span className="text-2xl">⭐</span> Pro Tips
              </h3>
              <ul className="space-y-2">
                {lesson.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-[#4A148C] font-medium text-sm">
                    <span className="font-bold shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rewards Card */}
            <div className="bg-slate-800 rounded-[32px] p-6 text-white text-center shadow-md mt-auto">
              <div className="w-16 h-16 bg-slate-700 rounded-2xl mx-auto flex items-center justify-center text-4xl mb-3 shadow-inner border border-slate-600">
                {lesson.badgeEmoji}
              </div>
              <h3 className="text-lg font-bold font-heading mb-1 text-google-yellow">Complete to Unlock</h3>
              <p className="font-bold text-slate-300 mb-3">{lesson.badgeName} Badge</p>
              <div className="inline-flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-full text-sm font-bold text-slate-200">
                <Award size={16} className="text-google-yellow" /> +{lesson.xpReward} XP
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Footer Navigation */}
      <div className="bg-white rounded-[32px] p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
        <Link to="/" className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-bold transition-colors w-full sm:w-auto text-center">
          &larr; Back to Chapters
        </Link>
        <Link to="/quiz" className="px-8 py-3.5 bg-google-green hover:bg-green-600 text-white rounded-2xl font-extrabold transition-colors shadow-md flex items-center justify-center gap-2 w-full sm:w-auto text-center">
          Take the Quiz <ChevronRight size={20} />
        </Link>
      </div>
    </div>
  );
}
