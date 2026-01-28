import React from 'react';
import { SlideProps } from '../types';
import { GlitchHeader, Card, Tag } from './UI';
import { StatComparisonChart, MaturityChart, DataFlowChart, PhaseCard, ROIBenchmark } from './Charts';
import {
  CheckCircle2, AlertTriangle, Database, Mic, Search, BarChart3,
  Rocket, User, ArrowRight, XCircle, Phone, Users, Globe,
  FileText, BookOpen, Lightbulb, MessageSquare, Brain, Eye, Zap, Target, Clock, TrendingUp
} from 'lucide-react';

const SlideHeader = () => (
  <div className="flex justify-between items-start mb-8 text-xs font-mono text-slate-400 font-bold">
    <div>28.01.2026 | ALPHA EDUCATION</div>
    <div>PAVEL PANFEROV | CDTO WE DIGITAL</div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 1: ОТКРЫТИЕ
// ═══════════════════════════════════════════

export const Slide01Title: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12 relative overflow-hidden">
    <SlideHeader />
    <GlitchHeader text="AI Трансформация" subtext="С чего стоит начать?" className="mb-8 anim-fade-up" />
    <div className="flex-1 flex flex-col justify-center">
      <div className="anim-fade-up-d2"><StatComparisonChart /></div>
      <div className="mt-12 text-center max-w-2xl mx-auto anim-fade-up-d3">
        <p className="text-xl text-slate-600 font-medium">
          <span className="text-primary font-bold text-2xl">88%</span> компаний используют AI.<br />
          <span className="text-red-500 font-bold text-2xl">74%</span> не получили от этого ожидаемой ценности.
        </p>
        <div className="mt-4 text-xs font-mono text-slate-400 bg-slate-100 inline-block px-3 py-1 rounded-full">
          ИСТОЧНИК: MCKINSEY & BCG 2025
        </div>
      </div>
    </div>
  </div>
);

export const Slide02Facts: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12 justify-center items-center">
    <div className="flex items-center gap-12 mb-8">
      <div className="text-center">
        <div className="text-8xl font-bold text-red-500 font-mono anim-count">74%</div>
        <div className="text-sm text-slate-500 mt-2 font-bold">НЕ ПОЛУЧИЛИ ЦЕННОСТИ</div>
      </div>
      <div className="w-px h-24 bg-slate-200" />
      <div className="text-center">
        <div className="text-8xl font-bold text-slate-300 font-mono anim-count-d1">95%</div>
        <div className="text-sm text-slate-500 mt-2 font-bold">ПИЛОТОВ БЕЗ ROI</div>
      </div>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 max-w-3xl text-center anim-fade-up-d2">
      $30-40 млрд инвестиций в GenAI. Проблема не в технологии.
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full anim-fade-up-d3">
      <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
        <XCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-slate-800">Что делают 74%</p>
          <p className="text-xs text-slate-500 mt-1">Покупают AI-инструмент и втыкают в старый процесс. ChatGPT для писем быстрее - но это не трансформация.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
        <CheckCircle2 size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-slate-800">Что делают 26%</p>
          <p className="text-xs text-slate-500 mt-1">Перестраивают процессы под AI, привязывают к бизнес-метрикам, назначают ответственного.</p>
        </div>
      </div>
    </div>
    <div className="mt-6 text-xs font-mono text-slate-400 bg-slate-100 px-3 py-1 rounded-full">BCG 2025 | MIT NANDA 2025</div>
  </div>
);

export const Slide03Context: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Давайте знакомиться" subtext="Кто я и кто вы" />
    <div className="mt-4 flex gap-8 flex-1">
      {/* Left: Photo + Info */}
      <div className="w-[340px] flex flex-col flex-shrink-0 anim-fade-left">
        <div className="photo-glitch rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-[260px] h-[300px] relative mx-auto"
          style={{ backgroundImage: 'url(/pavel-photo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
          <img src="/pavel-photo.jpg" alt="Павел Панферов" className="w-full h-full object-cover object-top" />
          <div className="photo-scanline" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">Павел Панферов</h3>
            <p className="text-xs text-white/80 font-mono font-bold">CDTO WE DIGITAL</p>
          </div>
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <ArrowRight size={14} className="text-primary flex-shrink-0" />
            <span>CDTO We Digital</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <ArrowRight size={14} className="text-primary flex-shrink-0" />
            <span>3+ года в AI, основатель AI Lab</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <ArrowRight size={14} className="text-primary flex-shrink-0" />
            <span>4 года в Ташкенте, нашёл жену, полюбил самаркандский плов</span>
          </div>
        </div>
        <div className="mt-3 flex gap-2 flex-wrap">
          <div className="px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-mono text-primary font-bold">AI LAB</div>
          <div className="px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-mono text-primary font-bold">3+ ГОДА В AI</div>
          <div className="px-2.5 py-1 bg-violet-50 border border-violet-200 rounded-full text-[10px] font-mono text-violet-600 font-bold">WE DIGITAL</div>
        </div>
      </div>
      {/* Right: Audience interaction */}
      <div className="flex-1 flex flex-col gap-4 anim-fade-right">
        <Card className="bg-blue-50 border-primary/20 flex-shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <Target size={20} className="text-primary" />
            <h3 className="text-lg font-bold text-slate-900">Цель на сегодня</h3>
          </div>
          <p className="text-base text-slate-700">Конкретная дорожная карта, которую можно начать завтра</p>
        </Card>
        <Card className="bg-violet-50 border-violet-200 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <Users size={20} className="text-violet-600" />
            <h3 className="text-lg font-bold text-slate-900">А теперь про вас</h3>
          </div>
          <div className="space-y-3 flex-1">
            {[
              "Кто вы? Чем занимается ваша компания?",
              "Какие AI-инструменты уже используете?",
              "Были ли победы? Или пока больше разочарований?",
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-violet-100">
                <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center text-xs text-violet-600 font-bold flex-shrink-0">{i+1}</div>
                <p className="text-sm text-slate-700 font-medium">{q}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 2: УРОВНИ ЗРЕЛОСТИ
// ═══════════════════════════════════════════

export const Slide04Maturity: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Уровни Зрелости" subtext="Где вы сейчас?" />
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <BarChart3 className="text-primary" /> Модель Gartner + MIT
        </h3>
        <MaturityChart />
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-primary text-sm text-slate-700 rounded-r-lg">
          Самый большой скачок в деньгах происходит при переходе с <strong className="text-primary-dark">Уровня 2</strong> на <strong className="text-primary-dark">Уровня 3</strong>.
        </div>
      </div>
      <Card className="flex flex-col h-full bg-slate-50">
        <h3 className="font-mono text-primary mb-4 font-bold tracking-wider">ЭКСПРЕСС-ТЕСТ</h3>
        <div className="space-y-3 flex-1 overflow-y-auto pr-2">
          {["Есть ли AI-стратегия, привязанная к KPI?", "Ваши данные чистые и централизованные?",
            "Используете ли инструменты системно?", "Есть ли ответственный за AI?",
            "Перестроили ли процессы под AI?", "Считаете ли ROI?"
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-primary hover:shadow-md transition-all cursor-pointer group">
              <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-[10px] text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors font-bold">{i+1}</div>
              <span className="text-sm text-slate-600 font-medium group-hover:text-slate-900">{q}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
          0-12: НАЧИНАЙТЕ | 13-24: СТРОЙТЕ ФУНДАМЕНТ | 25+: МАСШТАБИРУЙТЕ
        </div>
      </Card>
    </div>
  </div>
);

export const Slide05Test: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12 justify-center items-center text-center">
    <GlitchHeader text="Запишите балл" subtext="Экспресс-тест — интерпретация" className="mb-12" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl w-full">
      <Card className="!bg-red-50 border-red-200 text-center !p-8">
        <div className="text-3xl font-bold text-red-500 font-mono mb-2">6-12</div>
        <p className="text-sm text-slate-600 font-medium">Образование + quick wins</p>
      </Card>
      <Card className="!bg-amber-50 border-amber-200 text-center !p-8">
        <div className="text-3xl font-bold text-amber-500 font-mono mb-2">13-18</div>
        <p className="text-sm text-slate-600 font-medium">Стройте фундамент</p>
      </Card>
      <Card className="!bg-blue-50 border-primary/30 text-center !p-8">
        <div className="text-3xl font-bold text-primary font-mono mb-2">19-24</div>
        <p className="text-sm text-slate-600 font-medium">Масштабируйте пилоты</p>
      </Card>
      <Card className="!bg-green-50 border-green-200 text-center !p-8">
        <div className="text-3xl font-bold text-green-500 font-mono mb-2">25-30</div>
        <p className="text-sm text-slate-600 font-medium">Вы точно не ошиблись залом?</p>
      </Card>
    </div>
    <p className="mt-10 text-lg text-slate-600 italic">В конце лекции у вас будет план для вашего уровня.</p>
  </div>
);

export const Slide06WhyFail: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Почему 74% провалились" subtext="Три корневые причины — MIT NANDA 2025" />
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
      <Card className="flex flex-col justify-between">
        <div>
          <div className="text-4xl font-bold text-slate-900 font-mono mb-3 anim-count">55%</div>
          <h3 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide">Не перестроили процессы</h3>
          <p className="text-sm text-slate-600">
            Берут сломанный ручной процесс и автоматизируют как есть. Результат - автоматизированный хаос.
          </p>
          <div className="mt-3 p-2.5 bg-red-50 rounded-lg border border-red-100">
            <p className="text-xs text-red-700"><strong>Пример:</strong> Телеком внедрил AI для найма. Но процесс утверждения остался прежним - 5 шагов одобрения. AI ускорил первый этап, создав пробку на остальных.</p>
          </div>
        </div>
        <div className="text-xs text-slate-400 font-mono mt-3">MIT 2025</div>
      </Card>
      <Card className="flex flex-col justify-between bg-red-50 border-red-200">
        <div>
          <div className="text-4xl font-bold text-red-500 font-mono mb-3 anim-count-d1">95%</div>
          <h3 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide">Нет связи с P&L</h3>
          <p className="text-sm text-slate-600">
            Пилот работает технически, но изолирован от бизнеса. AI живёт отдельно от процессов, данных и людей.
          </p>
          <div className="mt-3 p-2.5 bg-white rounded-lg border border-red-100">
            <p className="text-xs text-slate-600"><strong>3 слоя изоляции:</strong></p>
            <ul className="text-xs text-slate-500 mt-1 space-y-0.5">
              <li>Техническая: AI отдельно от систем</li>
              <li>Процессная: выход AI не в workflow</li>
              <li>Управленческая: никто не отвечает</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-slate-400 font-mono mt-3">MIT NANDA 2025</div>
      </Card>
      <Card className="flex flex-col justify-between bg-blue-50 border-primary/20">
        <div>
          <div className="text-4xl font-bold text-primary font-mono mb-3 anim-count-d2">#1</div>
          <h3 className="text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide">Нет лидера трансформации</h3>
          <p className="text-sm text-slate-600">
            Руководство видит AI как «эксперимент IT-отдела», а не стратегическую инициативу. Остальные причины - следствие этой.
          </p>
          <div className="mt-3 p-2.5 bg-white rounded-lg border border-primary/10">
            <p className="text-xs text-slate-600"><strong>Признаки:</strong></p>
            <ul className="text-xs text-slate-500 mt-1 space-y-0.5">
              <li>Нет владельца AI-проекта</li>
              <li>Нет плана управления изменениями</li>
              <li>63% лидеров не имеют навыков</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-slate-400 font-mono mt-3">McKinsey 2025</div>
      </Card>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 3: ФУНДАМЕНТ — ДАННЫЕ
// ═══════════════════════════════════════════

export const Slide07DataFoundation: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Фундамент" subtext="AI без данных = Гадалка" />
    <div className="mt-8 flex flex-col items-center">
      <DataFlowChart />
      <p className="text-center font-mono text-sm text-slate-500 mt-4 max-w-md bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
        GIGO — «Мусор на входе = мусор на выходе»
      </p>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <div className="text-primary mb-2 font-mono font-bold bg-blue-50 inline-block px-2 rounded">ШАГ 01</div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Аудит</h3>
        <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
          <li>CRM заполняется корректно?</li>
          <li>Данные в 5 разных форматах?</li>
          <li>Есть ли единая База Знаний?</li>
        </ul>
      </Card>
      <Card>
        <div className="text-primary mb-2 font-mono font-bold bg-blue-50 inline-block px-2 rounded">ШАГ 02</div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Сбор</h3>
        <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
          <li>Запись офлайн встреч</li>
          <li>Запись звонков с клиентами</li>
          <li>Внутренние синки и решения</li>
        </ul>
      </Card>
      <Card>
        <div className="text-primary mb-2 font-mono font-bold bg-blue-50 inline-block px-2 rounded">ШАГ 03</div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Очистка</h3>
        <p className="text-sm text-slate-600">Стандартизируйте форматы. Уберите мусор. Объедините таблицы.</p>
      </Card>
    </div>
  </div>
);

export const Slide08ThreeSteps: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12 justify-center">
    <GlitchHeader text="Данные — чеклист" subtext="Что проверить прямо сейчас" className="mb-10" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      {[
        { q: "CRM заполняется корректно (даты = даты, суммы = числа)?", icon: <Database size={20} /> },
        { q: "Встречи записываются?", icon: <Mic size={20} /> },
        { q: "Звонки с клиентами логируются?", icon: <Phone size={20} /> },
        { q: "Финансовые данные в единой системе?", icon: <BarChart3 size={20} /> },
        { q: "У каждого отдела свои таблицы или одна общая?", icon: <FileText size={20} /> },
        { q: "Обратная связь клиентов — где хранится?", icon: <MessageSquare size={20} /> },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:border-primary hover:shadow-md transition-all">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">{item.icon}</div>
          <p className="text-sm text-slate-700 font-medium">{item.q}</p>
        </div>
      ))}
    </div>
  </div>
);

export const Slide09CallGold: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Золото в звонках" subtext="Что мы теряем?" />
    <div className="mt-8 flex gap-8 flex-1">
      <div className="w-1/3 flex flex-col gap-4">
        <Card className="bg-red-50 border-red-200">
          <div className="flex items-center gap-2 mb-2 text-red-500">
            <XCircle size={18} /><h3 className="font-bold">Как сейчас</h3>
          </div>
          <p className="text-sm text-slate-600">Поговорили и забыли. Данные остались в головах. РОП не может прослушать 100% звонков.</p>
        </Card>
        <Card className="bg-blue-50 border-primary/20 flex-1">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <CheckCircle2 size={18} /><h3 className="font-bold">С AI Анализом</h3>
          </div>
          <ul className="space-y-4 text-sm text-slate-700">
            <li className="flex gap-2"><span className="font-mono text-primary font-bold">РОП:</span> Следовал ли скрипту?</li>
            <li className="flex gap-2"><span className="font-mono text-primary font-bold">КЛИЕНТ:</span> Что хотел на самом деле?</li>
            <li className="flex gap-2"><span className="font-mono text-primary font-bold">КАЧЕСТВО:</span> Был ли негатив?</li>
          </ul>
        </Card>
      </div>
      <div className="w-2/3 grid grid-cols-2 gap-4">
        <Card className="col-span-2 bg-slate-50">
          <h3 className="font-mono text-slate-400 mb-4 font-bold">ИНСТРУМЕНТЫ</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "TLDV / Fireflies", desc: "ОНЛАЙН ВСТРЕЧИ", hl: false },
              { name: "Plaud Note", desc: "ОФЛАЙН (НОСИМЫЙ)", hl: false },
              { name: "Kotib AI", desc: "УЗБЕКСКИЙ ЯЗЫК (98%)", hl: false },
              { name: "Google AI Studio", desc: "БЕСПЛАТНЫЙ АНАЛИЗ", hl: true },
              { name: "NotebookLM", desc: "БАЗА ЗНАНИЙ", hl: false },
            ].map((t, i) => (
              <div key={i} className={`p-4 rounded-lg shadow-sm border ${t.hl ? 'bg-blue-50 border-primary/30' : 'bg-white border-slate-200'}`}>
                <div className={`font-bold ${t.hl ? 'text-primary' : 'text-slate-800'}`}>{t.name}</div>
                <div className="text-[10px] text-slate-500 font-bold mt-1">{t.desc}</div>
              </div>
            ))}
          </div>
        </Card>
        <div className="col-span-2 p-4 border-l-4 border-primary bg-white shadow-sm rounded-r-lg">
          <div className="text-xl font-bold text-slate-900">+35% Продаж</div>
          <div className="text-sm text-slate-500">Кейс Safia (AI бейджики)</div>
        </div>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 4: ИНСТРУМЕНТЫ
// ═══════════════════════════════════════════

export const Slide10GoogleAI: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Инструменты" subtext="Начните с того, что есть" />
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
      <Card className="relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 p-4 opacity-5"><Search size={120} className="text-slate-900" /></div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">Google Workspace AI</h3>
        <p className="text-sm text-slate-500 mb-4 font-medium bg-slate-100 p-2 rounded inline-block">Уже встроено. Просто включите.</p>
        <div className="space-y-3">
          {[
            { app: "Gmail", feat: "СУММАРИЗАЦИЯ" },
            { app: "Docs", feat: "ДРАФТЫ" },
            { app: "Meet", feat: "АВТО-ЗАМЕТКИ" },
            { app: "Sheets", feat: "АНАЛИЗ ДАННЫХ" },
            { app: "Drive", feat: "ПОИСК ПО СМЫСЛУ" },
          ].map((r, i) => (
            <div key={i} className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-sm font-bold text-slate-700">{r.app}</span>
              <span className="text-xs text-primary font-mono font-bold bg-blue-50 px-2 rounded">{r.feat}</span>
            </div>
          ))}
        </div>
      </Card>
      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-red-500 uppercase tracking-widest text-sm font-bold flex items-center gap-2"><AlertTriangle size={16} /> 42% СВЕРНУЛИ AI — ANTI-PATTERNS</h3>
        <div className="rounded-xl overflow-hidden border border-red-200 shadow-sm">
          <img src="/illust-tank.png" alt="Танк за хлебом" className="w-full h-28 object-cover object-center" />
        </div>
        <Card className="bg-red-50 border-red-200">
          <div className="font-bold text-slate-800 mb-1">«Купим Copilot всем»</div>
          <div className="text-xs text-slate-500">40 чел × $20/мес = $9,600/год. 80% не пользуются.</div>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <div className="font-bold text-slate-800 mb-1">«Нам нужна своя LLM»</div>
          <div className="text-xs text-slate-500">Зачем? Вы не OpenAI.</div>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <div className="font-bold text-slate-800 mb-1">«Автоматизируем всё сразу»</div>
          <div className="text-xs text-slate-500">Привет, ошибки и налоговая.</div>
        </Card>
        <div className="mt-auto p-4 bg-blue-50 border border-primary/20 rounded-lg text-center text-sm text-slate-700 shadow-sm">
          Вопрос не «Какой AI купить?», а<br /><strong className="text-primary text-base">«Какую бизнес-проблему я решаю?»</strong>
        </div>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 5: ДОРОЖНАЯ КАРТА
// ═══════════════════════════════════════════

export const Slide11Phase0: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Дорожная карта" subtext="План действий по фазам" />
    <div className="mt-8 grid grid-cols-4 gap-4 flex-1 pb-8">
      <PhaseCard phase="СЕЙЧАС" title="Фаза 0: Фундамент" items={[
        "Аудит данных (Claude)", "Включить Workspace AI", "Запись встреч (TLDV)", "Привычка (ChatGPT $20)"
      ]} />
      <PhaseCard phase="МЕСЯЦ 1" title="Фаза 1: Quick Wins" highlight items={[
        "Все: Gmail/Docs", "Финансы: Claude/Sheets", "HR: Онбординг (NotebookLM)", "Контент: Драфты за 10 мин"
      ]} />
      <PhaseCard phase="МЕСЯЦ 2-3" title="Фаза 2: Масштаб" items={[
        "Conv. Intelligence (Sales)", "Внутренняя База Знаний", "Обучение команды (2р/мес)"
      ]} />
      <PhaseCard phase="МЕСЯЦ 4-6" title="Фаза 3: Экосистема" items={[
        "Единые AI-воркфлоу", "Кастомные агенты", "Продажа AI клиентам"
      ]} />
    </div>
  </div>
);

export const Slide12Phase1: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Фаза 0" subtext="Что делать на этой неделе" />
    <div className="mt-8 space-y-5 flex-1 max-w-3xl">
      {[
        { n: 1, text: "Загрузите таблицу в Claude: «Критически посмотри на мои данные»", icon: <Database size={20} /> },
        { n: 2, text: "Включите AI-фичи в Google Workspace для всей команды", icon: <Globe size={20} /> },
        { n: 3, text: "Начните записывать встречи (TLDV бесплатен)", icon: <Mic size={20} /> },
        { n: 4, text: "Купите подписку ($20 — дешевле ужина в ресторане) и экспериментируйте в быту", icon: <Zap size={20} /> },
      ].map((item) => (
        <div key={item.n} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary transition-all">
          <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{item.n}</div>
          <div className="text-primary flex-shrink-0">{item.icon}</div>
          <p className="text-base text-slate-700 font-medium">{item.text}</p>
        </div>
      ))}
    </div>
    <div className="mt-auto p-4 bg-blue-50 border border-primary/20 rounded-lg shadow-sm">
      <p className="text-sm text-slate-700 font-medium">Подсказка: начните с бытовых задач - планирование, рецепты, письма. Привычка формируется быстрее без рабочего стресса.</p>
    </div>
  </div>
);

export const Slide13Phase2: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Фаза 1" subtext="Быстрые победы — первый месяц" />
    <div className="mt-8 flex-1">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md">
        <table className="w-full text-sm text-left">
          <thead><tr className="text-slate-400 font-mono text-xs border-b border-slate-100">
            <th className="pb-3">ОТДЕЛ</th><th className="pb-3">ЗАДАЧА</th><th className="pb-3">ИНСТРУМЕНТ</th><th className="pb-3">ЭФФЕКТ</th>
          </tr></thead>
          <tbody className="text-slate-700">
            {[
              ["Все", "Email и документы", "Gmail/Docs Gemini", "30-60 мин/день"],
              ["Финансы", "Анализ таблиц", "Claude/Sheets", "15 мин вместо 2 дней"],
              ["Продажи", "Запись звонков", "TLDV/Fireflies", "Видишь потери"],
              ["Контент", "Тексты, брифы", "ChatGPT/Claude", "Черновик за 10 мин"],
              ["HR", "Онбординг", "NotebookLM", "Подкаст за 7 мин"],
            ].map((r, i) => (
              <tr key={i} className="border-b border-slate-50">
                <td className="py-3 font-bold">{r[0]}</td>
                <td className="py-3">{r[1]}</td>
                <td className="py-3 font-mono text-primary text-xs font-bold">{r[2]}</td>
                <td className="py-3 font-bold text-primary">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="mt-6 p-4 bg-blue-50 border-l-4 border-primary rounded-r-lg text-sm text-slate-700">
      <strong>Кейс:</strong> Финдир получила Claude Code. На второй день: задачу, которую ждала 2 дня — получила за 15 минут.
    </div>
  </div>
);

export const Slide14Phase3: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Фазы 2-3" subtext="Масштабирование и экосистема" />
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
      <Card className="bg-slate-50 flex flex-col">
        <div className="text-xs font-mono text-slate-400 mb-2 font-bold">МЕСЯЦ 2-3: МАСШТАБ</div>
        <ul className="text-base text-slate-700 space-y-4 mt-4 flex-1">
          <li className="flex gap-3"><Phone size={18} className="text-primary flex-shrink-0" /> Conversation Intelligence для продаж</li>
          <li className="flex gap-3"><BookOpen size={18} className="text-primary flex-shrink-0" /> Внутренняя база знаний компании</li>
          <li className="flex gap-3"><Users size={18} className="text-primary flex-shrink-0" /> Обучение: 2 встречи в месяц</li>
        </ul>
      </Card>
      <Card className="bg-slate-50 flex flex-col">
        <div className="text-xs font-mono text-slate-400 mb-2 font-bold">МЕСЯЦ 4-6: ЭКОСИСТЕМА</div>
        <ul className="text-base text-slate-700 space-y-4 mt-4 flex-1">
          <li className="flex gap-3"><Rocket size={18} className="text-primary flex-shrink-0" /> Единые AI-воркфлоу по отделам</li>
          <li className="flex gap-3"><Brain size={18} className="text-primary flex-shrink-0" /> Кастомные агенты для рутины</li>
          <li className="flex gap-3"><Globe size={18} className="text-primary flex-shrink-0" /> Продажа AI-сервисов клиентам</li>
        </ul>
      </Card>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 6: МЕТРИКИ
// ═══════════════════════════════════════════

export const Slide15Metrics: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Как измерить" subtext="ROI AI-внедрения" />
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-slate-500 flex items-center gap-2 font-bold"><BarChart3 size={16} /> МЕТРИКИ</h3>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md">
          <table className="w-full text-sm text-left">
            <thead><tr className="text-slate-400 font-mono text-xs border-b border-slate-100">
              <th className="pb-2">ЧТО</th><th className="pb-2">КАК</th>
            </tr></thead>
            <tbody className="text-slate-700">
              {[
                ["Часы", "Было 8ч → Стало 2ч"],
                ["Деньги", "Часы × Ставку"],
                ["Скорость", "2 дня → 3 часа"],
                ["Adoption", "% активных пользователей"],
              ].map((r, i) => (
                <tr key={i} className="border-b border-slate-50">
                  <td className={`py-3 font-bold ${i === 3 ? 'text-primary' : ''}`}>{r[0]}</td>
                  <td className="py-3">{r[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ROIBenchmark />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="font-mono text-slate-500 flex items-center gap-2 font-bold"><TrendingUp size={16} /> ФОРМУЛА</h3>
        <Card className="bg-slate-50 flex-1 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <div className="text-xs font-mono text-slate-400 mb-1">ШАГ 1</div>
              <p className="text-base text-slate-700 font-medium">Зафиксируйте показатели <strong className="text-primary">ДО</strong> внедрения</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <div className="text-xs font-mono text-slate-400 mb-1">ШАГ 2</div>
              <p className="text-base text-slate-700 font-medium">Внедрите на <strong className="text-primary">1 процесс</strong> (пилот)</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <div className="text-xs font-mono text-slate-400 mb-1">ШАГ 3</div>
              <p className="text-base text-slate-700 font-medium">Сравните через <strong className="text-primary">2-4 недели</strong></p>
            </div>
          </div>
        </Card>
        <div className="p-4 bg-violet-50 border border-violet-200 rounded-lg shadow-sm">
          <p className="text-sm text-slate-700 font-medium">AI - революция снизу. Ваши сотрудники уже используют AI. Ваша задача - научить их основам и безопасному использованию.</p>
        </div>
      </div>
    </div>
  </div>
);

export const Slide16Baseline: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12 justify-center items-center text-center">
    <AlertTriangle size={56} className="text-amber-500 mb-6 anim-count" />
    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-6 anim-fade-up-d1">
      Без базлайна = без ROI
    </h2>
    <p className="text-xl text-slate-600 max-w-xl mb-10">
      Зафиксируйте показатели <strong className="text-primary">ДО</strong> внедрения.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl w-full">
      {[
        { icon: <Clock size={24} />, label: "Часы на типовые задачи" },
        { icon: <TrendingUp size={24} />, label: "Стоимость deliverable" },
        { icon: <ArrowRight size={24} />, label: "Количество правок" },
        { icon: <Zap size={24} />, label: "Время от брифа до сдачи" },
      ].map((item, i) => (
        <Card key={i} className="text-center !p-5">
          <div className="text-primary mb-3 flex justify-center">{item.icon}</div>
          <p className="text-sm text-slate-600 font-medium">{item.label}</p>
        </Card>
      ))}
    </div>
    <p className="mt-8 text-sm text-slate-400 font-mono bg-slate-100 px-4 py-2 rounded-full">
      Без этих цифр через полгода вы не докажете ничего
    </p>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 7: ЛЮДИ
// ═══════════════════════════════════════════

export const Slide17People: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="Три типа" subtext="Как работать с командой" />
    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
      <Card className="bg-green-50 border-green-200 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Энтузиасты</h3>
          <span className="text-2xl font-bold text-green-500 font-mono">15%</span>
        </div>
        <p className="text-base text-slate-600 mb-4">Уже пользуются, хотят больше</p>
        <div className="mt-auto p-3 bg-white rounded-lg border border-green-100">
          <p className="text-sm text-slate-700"><strong>Действие:</strong> Дать ресурсы, сделать амбассадорами</p>
        </div>
      </Card>
      <Card className="bg-white border-primary/20 shadow-lg flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Нейтральные</h3>
          <span className="text-2xl font-bold text-primary font-mono">65%</span>
        </div>
        <p className="text-base text-slate-600 mb-4">«Покажите — и я попробую»</p>
        <div className="mt-auto p-3 bg-blue-50 rounded-lg border border-primary/10">
          <p className="text-sm text-slate-700"><strong>Действие:</strong> Обучение + quick wins на их задачах</p>
        </div>
      </Card>
      <Card className="bg-slate-50 border-slate-200 flex flex-col opacity-80">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Скептики</h3>
          <span className="text-2xl font-bold text-slate-400 font-mono">20%</span>
        </div>
        <p className="text-base text-slate-600 mb-4">«Мы и без Excel жили нормально»</p>
        <div className="mt-auto p-3 bg-white rounded-lg border border-slate-100">
          <p className="text-sm text-slate-700"><strong>Действие:</strong> Не давить. Показать на примере коллег</p>
        </div>
      </Card>
    </div>
  </div>
);

export const Slide18AIInterview: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12">
    <GlitchHeader text="AI Интервью" subtext="Методология аудита процессов" />
    <div className="mt-6 flex-1 flex gap-6">
      <div className="w-1/2 flex flex-col gap-4">
        <Card className="bg-violet-50 border-violet-200 flex-shrink-0">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={20} className="text-violet-600" />
            <h3 className="font-bold text-slate-800">Промпт для AI-аудита</h3>
          </div>
          <div className="bg-white p-4 rounded-lg border border-violet-100 font-mono text-xs text-slate-700 leading-relaxed whitespace-pre-line">
{`Ты - Senior бизнес-аналитик.

Твоя задача: проинтервьюировать меня
на тему [ТЕМА], выяснить мои текущие
процессы и найти места для
автоматизации.

Правила:
1. Задавай по ОДНОМУ вопросу
2. Копай вглубь, уточняй детали
3. Ищи повторяющиеся ручные операции
4. В конце дай отчёт: процессы,
   боли, рекомендации по автоматизации`}
          </div>
        </Card>
        <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
          <strong className="text-primary">Пример темы:</strong> «Как устроен процесс найма в моей компании от заявки до выхода сотрудника»
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <h3 className="font-mono text-slate-400 text-sm font-bold">ЧТО НАЙДЁТ AI</h3>
        <Card className="!p-5">
          <div className="flex items-center gap-3 mb-2">
            <Eye size={20} className="text-primary" />
            <h4 className="font-bold text-slate-800">Повторяющиеся операции</h4>
          </div>
          <p className="text-sm text-slate-500">Ручной ввод, копирование между системами, ежедневные отчёты</p>
        </Card>
        <Card className="!p-5">
          <div className="flex items-center gap-3 mb-2">
            <Brain size={20} className="text-primary" />
            <h4 className="font-bold text-slate-800">Узкие места</h4>
          </div>
          <p className="text-sm text-slate-500">Где процесс зависит от одного человека, где теряется информация</p>
        </Card>
        <Card className="!p-5">
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb size={20} className="text-primary" />
            <h4 className="font-bold text-slate-800">Quick Wins</h4>
          </div>
          <p className="text-sm text-slate-500">Что автоматизировать первым для максимального эффекта</p>
        </Card>
        <div className="mt-auto p-4 bg-slate-900 text-white rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <Rocket size={18} className="text-primary-light" />
            <span className="font-bold">Домашка:</span>
          </div>
          <p className="text-sm mt-2 text-slate-300">Откройте ChatGPT/Claude, вставьте промпт, замените [ТЕМА] на свой процесс. Посмотрите, что найдёт.</p>
        </div>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 8: ЗАКРЫТИЕ
// ═══════════════════════════════════════════

export const Slide19Summary: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12 justify-between">
    <div className="flex-1 flex flex-col justify-center">
      <div className="space-y-8 max-w-3xl">
        {[
          { n: "01", text: "Данные — фундамент. Без чистых данных AI бесполезен." },
          { n: "02", text: "Начните с того, что уже есть. Google Workspace AI включён, а вы не знали." },
          { n: "03", text: "AI усиливает сильных. Качайте экспертизу — AI её умножит. (Кстати, эту презентацию сделал AI за 4 часа.)" },
        ].map((item) => (
          <div key={item.n} className="flex items-start gap-4">
            <span className="text-3xl font-mono font-bold text-primary">{item.n}</span>
            <p className="text-2xl text-slate-800 font-bold leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="p-8 bg-gradient-to-r from-blue-50 to-transparent border-l-8 border-primary rounded-r-xl shadow-sm anim-fade-up-d5">
      <p className="text-2xl md:text-3xl font-bold text-slate-800 italic">
        «Вас не заменит AI. Вас заменит человек, который использует AI лучше вас.»
      </p>
    </div>
  </div>
);

export const Slide20Contacts: React.FC<SlideProps> = () => (
  <div className="h-full flex flex-col p-8 md:p-12 justify-between">
    <GlitchHeader text="Спасибо" subtext="Время для вопросов" />
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <Card className="text-center !p-6 flex flex-col items-center">
          <img src="/qr-telegram.png" alt="QR Blog" className="w-28 h-28 mb-3 rounded-lg" />
          <p className="text-base font-bold text-slate-800">Мой блог</p>
          <p className="text-sm text-primary font-mono">@Panferov_AI_dev</p>
        </Card>
        <Card className="text-center !p-6 flex flex-col items-center border-primary/30 shadow-lg">
          <img src="/qr-personal.png" alt="QR Personal" className="w-28 h-28 mb-3 rounded-lg" />
          <p className="text-base font-bold text-slate-800">Платные консультации</p>
          <p className="text-sm text-primary font-mono">@panferovp</p>
          <p className="text-xs text-slate-500 mt-1 font-mono">+998 94 000 13 70</p>
        </Card>
        <Card className="text-center !p-6 flex flex-col items-center justify-center">
          <BookOpen size={28} className="text-primary mx-auto mb-3" />
          <p className="text-base font-bold text-slate-800">Alpha Education</p>
          <p className="text-sm text-slate-500">Курсы по AI</p>
        </Card>
      </div>
    </div>
    <div className="flex justify-between items-end border-t border-slate-200 pt-6">
      <div className="text-sm font-mono text-slate-500 font-bold">
        Павел Панферов | CDTO We Digital
      </div>
      <div className="px-8 py-3 bg-slate-900 text-white font-bold font-mono text-sm hover:bg-primary transition-colors cursor-pointer rounded-lg shadow-lg anim-pulse-glow">
        Q&A SESSION
      </div>
    </div>
  </div>
);
