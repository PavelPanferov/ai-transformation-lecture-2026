import React from 'react';

/**
 * PROJECTOR-OPTIMIZED UI COMPONENTS
 * All font sizes bumped 2 levels vs previous presentation.
 * Minimum readable size: text-sm (14px). No text-[10px] anywhere.
 */

export const GlitchHeader: React.FC<{ text: string; subtext?: string; className?: string }> = ({ text, subtext, className = "" }) => (
  <div className={`relative group ${className}`}>
    <h1 className="text-5xl md:text-8xl font-bold font-sans uppercase tracking-tighter relative z-10 text-slate-900">
      {text}
    </h1>
    <h1 className="text-5xl md:text-8xl font-bold font-sans uppercase tracking-tighter absolute top-0 left-0 text-primary opacity-0 group-hover:opacity-40 animate-glitch-2 select-none z-0">
      {text}
    </h1>
    {subtext && (
      <div className="mt-3 flex items-center space-x-3">
        <div className="h-[2px] w-10 bg-primary" />
        <p className="text-lg md:text-xl font-mono text-slate-500 uppercase tracking-widest font-semibold">{subtext}</p>
      </div>
    )}
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; border?: boolean }> = ({ children, className = "", border = true }) => (
  <div className={`relative bg-white shadow-lg rounded-2xl p-8 overflow-hidden border border-slate-100 ${className}`}>
    {border && (
      <>
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl-sm" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr-sm" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 rounded-bl-sm" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br-sm" />
      </>
    )}
    {children}
  </div>
);

export const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }} />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-full w-full opacity-30" />
  </div>
);

export const Tag: React.FC<{children: React.ReactNode}> = ({children}) => (
  <span className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-sm uppercase tracking-wider font-mono mb-2 rounded">
    {children}
  </span>
);

/** Slide header bar — shows metadata at top of each slide */
export const SlideHeader: React.FC<{ tag?: string; slideNum?: number; total?: number }> = ({ tag, slideNum, total }) => (
  <div className="flex justify-between items-center mb-6 text-sm font-mono text-slate-400">
    {tag && <Tag>{tag}</Tag>}
    {slideNum !== undefined && total !== undefined && (
      <span className="text-base font-bold">{String(slideNum).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    )}
  </div>
);
