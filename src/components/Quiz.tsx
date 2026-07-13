import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { quizQuestions } from '../data';
import { CheckCircle2, XCircle, Trophy } from 'lucide-react';

export default function QuizSection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const question = quizQuestions[currentQuestionIndex];

  const handleSelect = (index: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(index);
    const correct = index === question.correctAnswerIndex;
    setIsCorrect(correct);
    setShowExplanation(true);
    
    if (correct) {
      setScore(s => s + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
      });
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
      if (score === quizQuestions.length) {
        confetti({
          particleCount: 300,
          spread: 100,
          origin: { y: 0.4 },
          colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
        });
      }
    }
  };

  return (
    <div className="bg-white rounded-[32px] p-6 md:p-10 border border-slate-200 shadow-[0_4px_6px_rgba(0,0,0,0.02)] flex flex-col md:flex-row gap-8 lg:gap-12 w-full relative overflow-hidden">
      
      {/* Decorative background element similar to Bento styling */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-google-blue/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Left side: Quiz Header & Progress */}
      <div className="w-full md:w-1/3 flex flex-col justify-between">
        <div>
          <div className="w-16 h-16 bg-google-green text-white rounded-[16px] flex items-center justify-center mb-6 shadow-md shadow-google-green/20">
            <Trophy size={32} />
          </div>
          <h2 className="font-extrabold text-3xl font-heading text-slate-800 mb-3">Quiz Time! 🎮</h2>
          <p className="font-sans text-slate-500 font-medium leading-relaxed">
            Let's see what you remember from our adventure. Earn XP and unlock badges!
          </p>
        </div>
        
        {!quizComplete && (
          <div className="mt-8 bg-[#F0F4F8] p-5 rounded-[20px] border border-slate-200">
            <p className="text-xs uppercase tracking-widest font-bold mb-3 font-sans text-slate-500">Question Progress</p>
            <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden mb-3">
              <div 
                className="h-full bg-google-blue rounded-full transition-all duration-500" 
                style={{ width: `${((currentQuestionIndex) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-sm font-bold font-sans">
              <span className="text-google-blue">{currentQuestionIndex + 1} of {quizQuestions.length}</span>
              <span className="text-google-green">Score: {score}</span>
            </div>
          </div>
        )}
      </div>

      {/* Right side: Questions or Completion */}
      <div className="w-full md:w-2/3">
        <AnimatePresence mode="wait">
          {!quizComplete ? (
            <motion.div 
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col h-full"
            >
              <h3 className="font-heading font-bold text-2xl text-slate-800 mb-6 leading-tight">
                {question.question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {question.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrectOption = idx === question.correctAnswerIndex;
                  
                  let buttonClass = "w-full text-left p-5 rounded-[20px] font-sans text-base font-bold border-2 transition-all duration-300 flex items-center justify-between ";
                  
                  if (showExplanation) {
                    if (isCorrectOption) {
                      buttonClass += "bg-[#E6F4EA] border-[#34A853] text-[#137333]";
                    } else if (isSelected && !isCorrectOption) {
                      buttonClass += "bg-[#FCE8E6] border-[#EA4335] text-[#C5221F]";
                    } else {
                      buttonClass += "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                    }
                  } else {
                    buttonClass += "bg-white border-slate-200 hover:border-google-blue text-slate-700 hover:bg-[#E8F0FE] hover:text-[#1967D2]";
                  }

                  return (
                    <button 
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={showExplanation}
                      className={buttonClass}
                    >
                      <span className="flex-1 pr-2 leading-tight">{option}</span>
                      {showExplanation && isCorrectOption && <CheckCircle2 className="text-[#34A853] shrink-0" size={24} />}
                      {showExplanation && isSelected && !isCorrectOption && <XCircle className="text-[#EA4335] shrink-0" size={24} />}
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-5 rounded-[20px] border-2 flex flex-col sm:flex-row items-center justify-between gap-4 ${isCorrect ? 'bg-[#E6F4EA] border-[#34A853]/20' : 'bg-[#FCE8E6] border-[#EA4335]/20'}`}
                >
                  <div>
                    <p className={`font-heading font-bold text-lg mb-1 ${isCorrect ? 'text-[#137333]' : 'text-[#C5221F]'}`}>
                      {isCorrect ? 'Awesome job! 🎉' : 'Oops! Not quite right. 🤔'}
                    </p>
                    <p className="font-sans text-slate-700 text-sm font-medium">{question.explanation}</p>
                  </div>
                  
                  <button 
                    onClick={handleNext}
                    className="shrink-0 px-6 py-3 bg-slate-800 text-white rounded-[16px] font-heading font-bold hover:bg-slate-700 transition-colors"
                  >
                    {currentQuestionIndex < quizQuestions.length - 1 ? 'Next' : 'Results'}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center h-full bg-[#FFF9C4]/30 rounded-[24px] p-8 border-2 border-[#FFD54F]/30"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-md mb-6">🏆</div>
              <h3 className="font-display font-extrabold text-3xl text-slate-800 mb-2">You did it!</h3>
              <p className="font-sans text-xl text-slate-600 mb-6 font-medium">
                You scored <span className="font-bold text-google-blue">{score}</span> out of {quizQuestions.length}!
              </p>
              
              <div className="bg-white border-2 border-[#FFD54F] rounded-[20px] px-8 py-4 mb-8 shadow-sm flex flex-col items-center">
                <span className="text-3xl mb-2">💎</span>
                <p className="font-heading font-black text-[#A44C00] text-xl mb-1">+ 500 XP Earned!</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Cloud Master Badge</p>
              </div>
              
              <button 
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setScore(0);
                  setQuizComplete(false);
                  setSelectedAnswer(null);
                  setShowExplanation(false);
                }}
                className="px-8 py-3.5 bg-google-blue text-white rounded-2xl font-heading font-bold shadow-md hover:bg-blue-600 transition-colors"
              >
                Play Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
