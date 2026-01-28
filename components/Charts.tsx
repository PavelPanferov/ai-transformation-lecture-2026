import React from 'react';

export const StatComparisonChart = () => (
  <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full h-64">
    <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        <circle cx="50%" cy="50%" r="45%" stroke="#e2e8f0" strokeWidth="8" fill="transparent" />
        <circle cx="50%" cy="50%" r="45%" stroke="#2563eb" strokeWidth="8" fill="transparent"
          strokeDasharray="283" strokeDashoffset="34" strokeLinecap="round"
          className="animate-[dash1_2s_ease-out_forwards]" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl md:text-6xl font-bold text-slate-800 font-mono">88%</span>
        <span className="text-[10px] uppercase text-slate-500 mt-2 font-bold tracking-wider">Компаний внедряют AI</span>
      </div>
    </div>
    <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        <circle cx="50%" cy="50%" r="45%" stroke="#e2e8f0" strokeWidth="8" fill="transparent" />
        <circle cx="50%" cy="50%" r="45%" stroke="#ef4444" strokeWidth="8" fill="transparent"
          strokeDasharray="283" strokeDashoffset="74" strokeLinecap="round"
          className="animate-[dash2_2s_ease-out_forwards]" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl md:text-6xl font-bold text-red-500 font-mono">74%</span>
        <span className="text-[10px] uppercase text-slate-500 mt-2 font-bold tracking-wider">Не получили ценности</span>
      </div>
    </div>
    <style>{`
      @keyframes dash1 { from { stroke-dashoffset: 283; } to { stroke-dashoffset: 34; } }
      @keyframes dash2 { from { stroke-dashoffset: 283; } to { stroke-dashoffset: 74; } }
    `}</style>
  </div>
);

export const MaturityChart = () => {
  const levels = [
    { id: 1, label: "Слышали", pct: "30%", color: "bg-slate-300" },
    { id: 2, label: "Пробуем", pct: "30%", color: "bg-slate-400" },
    { id: 3, label: "Работает", pct: "25%", color: "bg-primary" },
    { id: 4, label: "Системно", pct: "9%", color: "bg-primary-dark/80" },
    { id: 5, label: "В ДНК", pct: "6%", color: "bg-primary-dark" },
  ];
  return (
    <div className="flex items-end justify-between h-48 w-full gap-2">
      {levels.map((lvl) => (
        <div key={lvl.id} className="flex flex-col items-center gap-2 flex-1 group">
          <div className="text-xs font-mono text-slate-400 font-bold group-hover:text-primary transition-colors">{lvl.pct}</div>
          <div className={`w-full rounded-t-lg ${lvl.color} relative transition-all duration-500 hover:opacity-100 opacity-90 shadow-md`}
            style={{ height: `${lvl.id * 20}%` }}>
            {lvl.id === 3 && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap animate-bounce">
                $$$ ROI START
              </div>
            )}
          </div>
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-tighter text-center h-8 flex items-center text-slate-600">{lvl.label}</div>
        </div>
      ))}
    </div>
  );
};

export const DataFlowChart = () => (
  <div className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-xl border border-slate-200 relative overflow-hidden shadow-inner">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.1)_1px,transparent_1px)] bg-[size:10px_10px]" />
    <div className="z-10 text-center relative bg-white p-2 rounded-lg shadow-sm">
      <div className="w-16 h-16 border-2 border-red-500 rounded-lg flex items-center justify-center text-red-500 font-bold mb-2 bg-red-50 text-sm">TRASH</div>
      <div className="text-xs text-slate-500 font-bold">МУСОР</div>
    </div>
    <div className="flex-1 h-1 bg-slate-200 mx-4 relative overflow-hidden rounded-full">
      <div className="absolute top-0 left-0 h-full w-1/3 bg-red-400 animate-[moveRight_2s_linear_infinite]" />
    </div>
    <div className="z-10 text-center relative bg-white p-2 rounded-lg shadow-sm">
      <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold mb-2 shadow-lg text-sm">AI</div>
      <div className="text-xs text-slate-500 font-bold">МОДЕЛЬ</div>
    </div>
    <div className="flex-1 h-1 bg-slate-200 mx-4 relative overflow-hidden rounded-full">
      <div className="absolute top-0 left-0 h-full w-1/3 bg-red-400 animate-[moveRight_2s_linear_infinite]" />
    </div>
    <div className="z-10 text-center relative bg-white p-2 rounded-lg shadow-sm">
      <div className="w-16 h-16 border-2 border-red-500 rounded-lg flex items-center justify-center text-red-500 font-bold mb-2 bg-red-50 text-sm">TRASH</div>
      <div className="text-xs text-slate-500 font-bold">МУСОР</div>
    </div>
    <style>{`@keyframes moveRight { 0% { transform: translateX(-100%); } 100% { transform: translateX(400%); } }`}</style>
  </div>
);

export const PhaseCard: React.FC<{
  phase: string; title: string; items: string[]; highlight?: boolean; badge?: string;
}> = ({ phase, title, items, highlight = false, badge }) => (
  <div className={`flex flex-col p-5 rounded-xl border shadow-lg min-w-[200px] h-full ${highlight ? 'border-primary ring-1 ring-primary/20 bg-white' : 'bg-slate-50 border-slate-200'}`}>
    <div className={`text-xs font-mono mb-2 font-bold ${highlight ? 'text-primary' : 'text-slate-400'}`}>{phase}</div>
    <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
    <ul className="text-xs text-slate-600 space-y-3 list-disc list-inside font-medium flex-1">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
    {badge && (
      <div className="mt-3 pt-2 text-[10px] text-primary font-bold bg-blue-50 p-2 rounded text-center">{badge}</div>
    )}
  </div>
);

export const ROIBenchmark = () => (
  <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-transparent border-l-8 border-primary rounded-r-xl shadow-sm">
    <div className="text-center">
      <div className="text-5xl font-bold text-primary font-mono">$5.44</div>
      <div className="text-xs text-slate-500 mt-1 font-bold">НА КАЖДЫЙ $1</div>
    </div>
    <div className="w-[1px] h-12 bg-slate-200" />
    <p className="text-sm text-slate-600">
      Средний ROI AI-автоматизации маркетинга за 3 года
      <br /><span className="text-xs text-slate-400 font-mono">Thunderbit 2026</span>
    </p>
  </div>
);
