import React from 'react';

/** GIGO DataFlow — projector-optimized (larger boxes and text) */
export const DataFlowChart = () => (
  <div className="flex items-center justify-between w-full p-6 bg-slate-50 rounded-2xl border border-slate-200 relative overflow-hidden shadow-inner">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
    <div className="z-10 text-center relative bg-white p-3 rounded-xl shadow-sm">
      <div className="w-24 h-24 border-2 border-red-500 rounded-xl flex items-center justify-center text-red-500 font-bold mb-2 bg-red-50 text-lg">TRASH</div>
      <div className="text-sm text-slate-500 font-bold">МУСОР</div>
    </div>
    <div className="flex-1 h-1.5 bg-slate-200 mx-6 relative overflow-hidden rounded-full">
      <div className="absolute top-0 left-0 h-full w-1/3 bg-red-400 animate-[moveRight_2s_linear_infinite]" />
    </div>
    <div className="z-10 text-center relative bg-white p-3 rounded-xl shadow-sm">
      <div className="w-24 h-24 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold mb-2 shadow-lg text-lg">AI</div>
      <div className="text-sm text-slate-500 font-bold">МОДЕЛЬ</div>
    </div>
    <div className="flex-1 h-1.5 bg-slate-200 mx-6 relative overflow-hidden rounded-full">
      <div className="absolute top-0 left-0 h-full w-1/3 bg-red-400 animate-[moveRight_2s_linear_infinite]" />
    </div>
    <div className="z-10 text-center relative bg-white p-3 rounded-xl shadow-sm">
      <div className="w-24 h-24 border-2 border-red-500 rounded-xl flex items-center justify-center text-red-500 font-bold mb-2 bg-red-50 text-lg">TRASH</div>
      <div className="text-sm text-slate-500 font-bold">МУСОР</div>
    </div>
    <style>{`@keyframes moveRight { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }`}</style>
  </div>
);
