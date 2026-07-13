import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trophy, AlertCircle, Heart, Star, ChevronLeft } from 'lucide-react';

const GOOD_ITEMS = [
  { id: 'drive', emoji: '☁️', name: 'Drive' },
  { id: 'docs', emoji: '📝', name: 'Docs' },
  { id: 'slides', emoji: '🎬', name: 'Slides' },
  { id: 'sheets', emoji: '📊', name: 'Sheets' },
  { id: 'forms', emoji: '📋', name: 'Forms' },
  { id: 'drawings', emoji: '🎨', name: 'Drawings' }
];

const BAD_ITEMS = [
  { id: 'bug', emoji: '🐛', name: 'Bug' },
  { id: 'virus', emoji: '🦠', name: 'Virus' },
  { id: 'spam', emoji: '🗑️', name: 'Spam' },
  { id: 'hacker', emoji: '🦹', name: 'Hacker' }
];

interface FallingItem {
  id: string;
  type: 'good' | 'bad';
  emoji: string;
  x: number;
  y: number;
  speed: number;
  uid: number;
}

export default function GameCloudCatcher() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [items, setItems] = useState<FallingItem[]>([]);
  const [basketX, setBasketX] = useState(50); // percentage
  
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const uidCounter = useRef(0);
  
  const GAME_SPEED = 0.5; // percentage per frame
  const BASKET_WIDTH = 15; // percentage

  const startGame = () => {
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
    setLives(3);
    setItems([]);
    uidCounter.current = 0;
  };

  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        let newX = ((e.clientX - rect.left) / rect.width) * 100;
        // Clamp to edges
        newX = Math.max(BASKET_WIDTH / 2, Math.min(100 - BASKET_WIDTH / 2, newX));
        setBasketX(newX);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (containerRef.current && e.touches[0]) {
        const rect = containerRef.current.getBoundingClientRect();
        let newX = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        newX = Math.max(BASKET_WIDTH / 2, Math.min(100 - BASKET_WIDTH / 2, newX));
        setBasketX(newX);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isPlaying, isGameOver]);

  useEffect(() => {
    if (!isPlaying || isGameOver) return;

    let lastSpawnTime = Date.now();
    let currentSpeedMultiplier = 1;

    const gameLoop = () => {
      const now = Date.now();
      
      // Speed up over time
      currentSpeedMultiplier = 1 + (score / 200);
      
      // Spawn new items
      if (now - lastSpawnTime > 1000 / currentSpeedMultiplier) {
        const isGood = Math.random() > 0.3; // 70% chance of good item
        const itemTemplate = isGood 
          ? GOOD_ITEMS[Math.floor(Math.random() * GOOD_ITEMS.length)]
          : BAD_ITEMS[Math.floor(Math.random() * BAD_ITEMS.length)];
        
        const newItem: FallingItem = {
          id: itemTemplate.id,
          type: isGood ? 'good' : 'bad',
          emoji: itemTemplate.emoji,
          x: Math.random() * 90 + 5, // 5% to 95%
          y: -10,
          speed: GAME_SPEED * currentSpeedMultiplier * (Math.random() * 0.5 + 0.8), // Randomize speed a bit
          uid: uidCounter.current++
        };
        
        setItems(prev => [...prev, newItem]);
        lastSpawnTime = now;
      }

      // Update items & check collisions
      setItems(prevItems => {
        const updatedItems: FallingItem[] = [];
        
        for (let i = 0; i < prevItems.length; i++) {
          const item = prevItems[i];
          const newY = item.y + item.speed;
          
          // Collision detection (roughly at y=90)
          if (newY > 85 && newY < 95) {
            // Check horizontal collision
            const dist = Math.abs(item.x - basketX);
            if (dist < BASKET_WIDTH / 2 + 5) { // +5 for item width
              // Caught!
              if (item.type === 'good') {
                setScore(s => s + 10);
              } else {
                setLives(l => {
                  const newLives = l - 1;
                  if (newLives <= 0) setIsGameOver(true);
                  return newLives;
                });
              }
              continue; // Don't add to updatedItems (remove it)
            }
          }
          
          // Remove if off screen
          if (newY > 110) {
            if (item.type === 'good' && !isGameOver) {
              // Missed a good item -> lose life
               setLives(l => {
                  const newLives = l - 1;
                  if (newLives <= 0) setIsGameOver(true);
                  return newLives;
                });
            }
            continue;
          }
          
          updatedItems.push({ ...item, y: newY });
        }
        return updatedItems;
      });

      requestRef.current = requestAnimationFrame(gameLoop);
    };

    requestRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isPlaying, isGameOver, basketX, score]);


  return (
    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm flex flex-col overflow-hidden relative" style={{ height: 'calc(100vh - 120px)', minHeight: '600px' }}>
      
      {/* Header */}
      <div className="bg-google-blue p-4 flex justify-between items-center text-white shrink-0 z-10">
        <Link to="/activities" className="flex items-center gap-1 hover:bg-white/20 px-3 py-1.5 rounded-xl font-bold transition-colors">
          <ChevronLeft size={20} /> Back
        </Link>
        <h1 className="text-xl md:text-2xl font-extrabold font-heading flex items-center gap-2">
          ☁️ Cloud Catcher
        </h1>
        <div className="w-20"></div> {/* Spacer for centering */}
      </div>

      {/* Game Area */}
      <div className="flex-1 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden" ref={containerRef}>
        
        {/* HUD */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10 pointer-events-none">
          <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-2">
            <Trophy className="text-google-yellow" size={24} />
            <span className="text-2xl font-extrabold text-slate-800 font-heading">{score}</span>
          </div>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart key={i} className={`w-8 h-8 ${i < lives ? 'text-google-red fill-google-red' : 'text-slate-300 fill-slate-300'}`} />
            ))}
          </div>
        </div>

        {/* Start Screen */}
        {!isPlaying && !isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-20 p-6 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner">
              ☁️
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 mb-2 font-heading">Cloud Catcher</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-md font-medium">
              Catch the good Google Apps in your cloud! Avoid the bugs, viruses, and spam. Don't let the good apps fall!
            </p>
            
            <div className="flex gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📄 📊 🎬</div>
                <div className="font-bold text-google-green">Catch These (+10)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🐛 🦠 🗑️</div>
                <div className="font-bold text-google-red">Avoid These (-1 ❤️)</div>
              </div>
            </div>

            <button 
              onClick={startGame}
              className="px-8 py-4 bg-google-blue hover:bg-blue-600 text-white rounded-2xl font-extrabold text-xl shadow-lg transition-transform hover:scale-105"
            >
              Start Game!
            </button>
          </div>
        )}

        {/* Game Over Screen */}
        {isGameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-md z-30 p-6 text-center text-white">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center text-5xl mb-6 border border-slate-700 shadow-inner">
              💥
            </div>
            <h2 className="text-4xl font-extrabold mb-2 font-heading text-google-red">Game Over!</h2>
            <p className="text-xl mb-6 font-medium text-slate-300">You scored <span className="text-google-yellow font-bold">{score}</span> points</p>
            
            {score >= 200 && (
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl mb-8 flex items-center gap-4">
                <Star className="text-google-yellow fill-google-yellow w-12 h-12" />
                <div className="text-left">
                  <div className="font-bold text-google-yellow">New Badge Unlocked!</div>
                  <div className="text-sm font-medium">Cloud Ninja</div>
                </div>
              </div>
            )}

            <button 
              onClick={startGame}
              className="px-8 py-4 bg-google-green hover:bg-green-600 text-white rounded-2xl font-extrabold text-xl shadow-lg transition-transform hover:scale-105"
            >
              Play Again
            </button>
          </div>
        )}

        {/* Falling Items */}
        {items.map(item => (
          <div 
            key={item.uid}
            className="absolute text-4xl select-none"
            style={{ 
              left: `${item.x}%`, 
              top: `${item.y}%`,
              transform: 'translateX(-50%)',
              filter: item.type === 'bad' ? 'drop-shadow(0 0 10px rgba(255,0,0,0.5))' : 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
            }}
          >
            {item.emoji}
          </div>
        ))}

        {/* Basket / Cloud */}
        {isPlaying && !isGameOver && (
          <div 
            className="absolute bottom-10 h-16 bg-white border-2 border-slate-200 rounded-full shadow-lg flex items-center justify-center overflow-hidden transition-transform"
            style={{ 
              left: `${basketX}%`, 
              width: `${BASKET_WIDTH}%`,
              transform: 'translateX(-50%)',
              minWidth: '100px'
            }}
          >
            <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white flex items-center justify-center relative">
              {/* Cloud bumps */}
              <div className="absolute -top-4 -left-2 w-8 h-8 bg-blue-50 rounded-full"></div>
              <div className="absolute -top-6 left-1/4 w-12 h-12 bg-blue-50 rounded-full"></div>
              <div className="absolute -top-5 right-1/4 w-10 h-10 bg-blue-50 rounded-full"></div>
              <div className="absolute -top-3 -right-2 w-8 h-8 bg-blue-50 rounded-full"></div>
              <span className="text-2xl relative z-10 mt-2 opacity-50">📥</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
