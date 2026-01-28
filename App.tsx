import React, { useState, useEffect, useCallback } from 'react';
import { GridBackground } from './components/UI';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {
  Slide01Title, Slide02Facts, Slide03Context,
  Slide04Maturity, Slide05Test, Slide06WhyFail,
  Slide07DataFoundation, Slide08ThreeSteps, Slide09CallGold,
  Slide10GoogleAI,
  Slide11Phase0, Slide12Phase1, Slide13Phase2, Slide14Phase3,
  Slide15Metrics, Slide16Baseline,
  Slide17People, Slide18AIInterview,
  Slide19Summary, Slide20Contacts
} from './components/Slides';

const SLIDES = [
  Slide01Title, Slide02Facts, Slide03Context,
  Slide04Maturity, Slide05Test, Slide06WhyFail,
  Slide07DataFoundation, Slide08ThreeSteps, Slide09CallGold,
  Slide10GoogleAI,
  Slide11Phase0, Slide12Phase1, Slide13Phase2, Slide14Phase3,
  Slide15Metrics, Slide16Baseline,
  Slide17People, Slide18AIInterview,
  Slide19Summary, Slide20Contacts
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (isTransitioning || idx === currentSlide || idx < 0 || idx >= SLIDES.length) return;
    setDirection(idx > currentSlide ? 1 : -1);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(idx);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 300);
  }, [currentSlide, isTransitioning]);

  const handleNext = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const handlePrev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); handleNext(); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); handlePrev(); }
      if (e.key === 'f') {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
      }
      if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      if (e.key === 'End') { e.preventDefault(); goTo(SLIDES.length - 1); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, goTo]);

  const CurrentSlideComponent = SLIDES[currentSlide];

  return (
    <div className="relative w-screen h-screen bg-slate-50 text-slate-900 overflow-hidden selection:bg-primary selection:text-white">
      <GridBackground />

      <main className={`relative z-10 w-full h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
        <div className="absolute inset-2 md:inset-8 border border-white bg-white/50 backdrop-blur-md shadow-2xl overflow-hidden rounded-2xl ring-1 ring-black/5">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-300 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-300 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-300 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-300 rounded-br-lg" />
          <CurrentSlideComponent isActive={!isTransitioning} />
        </div>
      </main>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 w-full z-20 p-4 md:p-8 flex justify-between items-end pointer-events-none">
        <div className="flex gap-1.5 pointer-events-auto bg-white/80 p-2 rounded-full border border-slate-200 shadow-sm backdrop-blur-sm">
          {SLIDES.map((_, idx) => (
            <button key={idx} onClick={() => goTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-primary shadow-sm' : 'w-2 bg-slate-300 hover:bg-slate-400'}`} />
          ))}
        </div>
        <div className="flex gap-4 pointer-events-auto">
          <button onClick={handlePrev} disabled={currentSlide === 0}
            className="p-3 bg-white border border-slate-200 hover:border-primary hover:text-primary text-slate-500 disabled:opacity-30 shadow-md rounded-full transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={handleNext} disabled={currentSlide === SLIDES.length - 1}
            className="p-3 bg-white border border-slate-200 hover:border-primary hover:text-primary text-slate-500 disabled:opacity-30 shadow-md rounded-full transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full z-20 p-4 flex justify-between items-center text-[10px] md:text-xs font-mono text-slate-400 font-bold pointer-events-none">
        <div className="bg-white/50 px-3 py-1 rounded-full border border-slate-200 backdrop-blur-sm">AI_TRANSFORMATION_DECK</div>
        <div className="flex items-center gap-2 bg-white/50 px-3 py-1 rounded-full border border-slate-200 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          LIVE
        </div>
      </div>
    </div>
  );
}
