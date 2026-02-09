import React from 'react';
import { SlideProps } from '../types';
import { GlitchHeader, Card, Tag, SlideHeader } from './UI';
import { DataFlowChart } from './Charts';
import {
  ArrowRight, Users, Target, Zap, Clock, TrendingUp,
  MessageSquare, Brain, Eye, Lightbulb, Rocket, BookOpen,
  FileText, Search, BarChart3, XCircle, CheckCircle2,
  Mic, Phone, Globe, AlertTriangle,
  Mail, Table, PenTool, Calendar, HelpCircle
} from 'lucide-react';

const base = import.meta.env.BASE_URL;

const TOTAL = 21;

// ═══════════════════════════════════════════
// БЛОК 1: ОТКРЫТИЕ (Слайды 1-3)
// ═══════════════════════════════════════════

// ─── SLIDE 01: Титульный ─────────────────────────────────────────

export const Slide01Title: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16 relative overflow-hidden">
    <SlideHeader tag="alpha education" slideNum={1} total={TOTAL} />
    <div className="flex-1 flex flex-col justify-center">
      <div className="anim-fade-up">
        <Tag>06.02.2026 | Павел Панферов</Tag>
      </div>
      <div className="anim-fade-up-d1">
        <GlitchHeader text="РАБОТА С ЗАПРОСАМИ" subtext="Как ставить задачи AI и получать результат" className="mt-2" />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl anim-fade-up-d2">
        <Card className="!p-6 bg-blue-50 border-primary/20">
          <div className="flex items-start gap-4">
            <TrendingUp size={28} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-bold text-slate-800">MIT Research</p>
              <p className="text-base text-slate-600 mt-1">Сотрудники с AI пишут на <strong className="text-primary">37% быстрее</strong> и на <strong className="text-primary">+20% качественнее</strong></p>
            </div>
          </div>
        </Card>
        <Card className="!p-6 bg-slate-50 border-slate-200">
          <div className="flex items-start gap-4">
            <MessageSquare size={28} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-bold text-slate-900">Тоби Лютке, CEO Shopify</p>
              <p className="text-base text-slate-700 mt-1 italic">«Почему эту задачу не может выполнить AI?»</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

// ─── SLIDE 02: Давайте знакомиться (REUSE) ──────────────────────

export const Slide03Context: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="знакомство" slideNum={2} total={TOTAL} />
    <GlitchHeader text="Давайте знакомиться" subtext="Кто я и кто вы" />
    <div className="mt-6 flex gap-8 flex-1">
      {/* Left: Photo + Info */}
      <div className="w-[340px] flex flex-col flex-shrink-0 anim-fade-left">
        <div className="photo-glitch rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 w-[280px] h-[320px] relative mx-auto"
          style={{ backgroundImage: `url(${base}pavel-photo.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
          <img src={`${base}pavel-photo.jpg`} alt="Павел Панферов" className="w-full h-full object-cover object-top" />
          <div className="photo-scanline" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5">
            <h3 className="text-2xl font-bold text-white">Павел Панферов</h3>
            <p className="text-sm text-white/80 font-mono font-bold mt-1">CDTO WE DIGITAL</p>
          </div>
        </div>
        <div className="mt-4 space-y-2.5">
          {[
            "CDTO We Digital — топ-1 агентство ЦА",
            "3+ года в AI, основатель AI Lab",
            "4 года в Ташкенте"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-base text-slate-700">
              <ArrowRight size={16} className="text-primary flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Audience interaction */}
      <div className="flex-1 flex flex-col gap-5 anim-fade-right">
        <Card className="bg-blue-50 border-primary/20 flex-shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <Target size={22} className="text-primary" />
            <h3 className="text-xl font-bold text-slate-900">Цель на сегодня</h3>
          </div>
          <p className="text-lg text-slate-700">Научиться ставить задачи AI так, чтобы получать полезный результат с первого раза</p>
        </Card>
        <Card className="bg-violet-50 border-violet-200 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <Users size={22} className="text-violet-600" />
            <h3 className="text-xl font-bold text-slate-900">А теперь про вас</h3>
          </div>
          <div className="space-y-3 flex-1">
            {[
              "Кто вы? Чем занимается ваша компания?",
              "Используете ли AI в работе сейчас?",
              "Что хотите автоматизировать первым?",
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-violet-100">
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-base text-violet-600 font-bold flex-shrink-0">{i+1}</div>
                <p className="text-base text-slate-700 font-medium">{q}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 2: ПРОМПТИНГ 2026 (Слайды 4-7)
// ═══════════════════════════════════════════

// ─── SLIDE 04: Эволюция промптинга ───────────────────────────────

export const Slide04Evolution: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="контекст" slideNum={3} total={TOTAL} />
    <GlitchHeader text="ЭВОЛЮЦИЯ" subtext="От промптов к контекст-инженерии" />
    <div className="flex-1 flex flex-col justify-center mt-6">
      {/* Timeline */}
      <div className="relative">
        <div className="absolute top-12 left-0 right-0 h-1 bg-slate-200 rounded-full" />
        <div className="grid grid-cols-4 gap-4 relative z-10">
          {[
            { year: "2022", title: "Открытие", desc: "ChatGPT, первые эксперименты, \"напиши мне...\"", color: "bg-slate-400" },
            { year: "2023", title: "Расширение", desc: "Midjourney, Copilot, GPT-4. Все пробуют.", color: "bg-slate-500" },
            { year: "2024-25", title: "Фреймворки", desc: "RISEN, CRAFT. Промпт как навык.", color: "bg-primary" },
            { year: "2025-26", title: "Контекст", desc: "Context Engineering. Не ЧТО спросить, а ЧТО ДАТЬ.", color: "bg-primary-dark" },
          ].map((era, i) => (
            <div key={i} className={`flex flex-col items-center anim-fade-up-d${i + 1}`}>
              <div className={`w-8 h-8 rounded-full ${era.color} shadow-lg mb-6`} />
              <Card className="!p-5 text-center w-full">
                <div className="text-2xl font-mono font-bold text-primary mb-1">{era.year}</div>
                <div className="text-lg font-bold text-slate-800 mb-2">{era.title}</div>
                <p className="text-base text-slate-500">{era.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
      {/* Key insight */}
      <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-transparent border-l-8 border-primary rounded-r-xl anim-fade-up-d5">
        <p className="text-xl text-slate-700">
          <strong className="text-primary">Андрей Карпати (ex-OpenAI):</strong> «Самый горячий навык AI — это context engineering, а не prompt engineering»
        </p>
      </div>
    </div>
  </div>
);

// ─── SLIDE 05: До/После промпт ──────────────────────────────────

export const Slide05BeforeAfter: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="live demo" slideNum={4} total={TOTAL} />
    <GlitchHeader text="ДО И ПОСЛЕ" subtext="Один запрос — два результата" />
    <div className="flex-1 flex gap-6 mt-6">
      {/* BAD prompt */}
      <div className="flex-1 flex flex-col anim-fade-left">
        <div className="flex items-center gap-3 mb-4">
          <XCircle size={24} className="text-red-500" />
          <h3 className="text-xl font-bold text-red-600">Голый промпт</h3>
        </div>
        <Card className="flex-1 !p-6 border-red-200 bg-red-50/50">
          <div className="bg-white p-5 rounded-xl border border-red-100 font-mono text-base text-slate-700 leading-relaxed">
            «Напиши коммерческое предложение»
          </div>
          <div className="mt-5 space-y-3">
            <div className="flex items-start gap-2">
              <XCircle size={18} className="text-red-400 flex-shrink-0 mt-1" />
              <p className="text-base text-slate-600">Общий текст ни о чём</p>
            </div>
            <div className="flex items-start gap-2">
              <XCircle size={18} className="text-red-400 flex-shrink-0 mt-1" />
              <p className="text-base text-slate-600">Нет понимания клиента</p>
            </div>
            <div className="flex items-start gap-2">
              <XCircle size={18} className="text-red-400 flex-shrink-0 mt-1" />
              <p className="text-base text-slate-600">Шаблонные фразы</p>
            </div>
          </div>
          <div className="mt-4 text-center p-3 bg-red-100 rounded-lg text-base font-bold text-red-600">
            Результат: мусор на переделку
          </div>
        </Card>
      </div>
      {/* GOOD prompt */}
      <div className="flex-1 flex flex-col anim-fade-right">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 size={24} className="text-green-500" />
          <h3 className="text-xl font-bold text-green-600">С контекстом</h3>
        </div>
        <Card className="flex-1 !p-6 border-green-200 bg-green-50/50">
          <div className="bg-white p-5 rounded-xl border border-green-100 font-mono text-base text-slate-700 leading-relaxed">
            <p><strong className="text-primary">Роль:</strong> Ты — коммерческий директор IT-компании</p>
            <p className="mt-1"><strong className="text-primary">Клиент:</strong> Сеть магазинов техники, 50 точек</p>
            <p className="mt-1"><strong className="text-primary">Задача:</strong> КП на CRM-систему, бюджет $50K</p>
            <p className="mt-1"><strong className="text-primary">Тон:</strong> Профессионально, с цифрами ROI</p>
            <p className="mt-1"><strong className="text-primary">Формат:</strong> 2 страницы, 3 пакета услуг</p>
          </div>
          <div className="mt-5 space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-1" />
              <p className="text-base text-slate-600">Конкретика под клиента</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-1" />
              <p className="text-base text-slate-600">Готов к отправке</p>
            </div>
          </div>
          <div className="mt-4 text-center p-3 bg-green-100 rounded-lg text-base font-bold text-green-600">
            Результат: готовый документ
          </div>
        </Card>
      </div>
    </div>
  </div>
);

// ─── SLIDE 06: GIGO (REUSE) ────────────────────────────────────

export const Slide06GIGO: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="принцип" slideNum={5} total={TOTAL} />
    <GlitchHeader text="GIGO" subtext="Garbage In — Garbage Out" />
    <div className="flex-1 flex flex-col justify-center mt-6">
      <div className="anim-fade-up">
        <DataFlowChart />
      </div>
      <div className="mt-8 grid grid-cols-3 gap-6 anim-fade-up-d2">
        {[
          { icon: <AlertTriangle size={24} />, title: "Размытый промпт", desc: "\"Напиши что-нибудь про маркетинг\"", color: "text-red-500" },
          { icon: <FileText size={24} />, title: "Неполный контекст", desc: "Без данных о компании, клиенте, цели", color: "text-orange-500" },
          { icon: <BarChart3 size={24} />, title: "Грязные данные", desc: "Дубликаты, ошибки, устаревшая информация", color: "text-red-600" },
        ].map((item, i) => (
          <Card key={i} className="!p-5 text-center">
            <div className={`${item.color} flex justify-center mb-3`}>{item.icon}</div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h4>
            <p className="text-base text-slate-500 italic">{item.desc}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex gap-4 anim-fade-up-d3">
        <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
          <p className="text-base text-slate-500 font-mono">
            Gartner: некачественные данные обходятся компаниям в <strong className="text-primary">$12.9M/год</strong>
          </p>
        </div>
        <div className="flex-1 p-3 bg-red-50 rounded-xl border border-red-200 text-center">
          <p className="text-base text-red-600 font-bold">
            <AlertTriangle size={16} className="inline mr-2" />AI уверенно даёт неправильные ответы — всегда проверяйте факты и цифры
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ─── SLIDE 07: Фреймворки ──────────────────────────────────────

export const Slide07Frameworks: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="фреймворки" slideNum={6} total={TOTAL} />
    <GlitchHeader text="ФРЕЙМВОРКИ" subtext="RISEN / CRAFT / CO-STAR" />
    <div className="flex-1 flex gap-5 mt-6">
      {/* RISEN */}
      <Card className="flex-1 !p-5 anim-fade-up border-primary/30">
        <h3 className="text-xl font-bold text-primary mb-4">RISEN</h3>
        <div className="space-y-3">
          {[
            { letter: "R", name: "Role", example: "Ты — HR-директор с 10-летним опытом" },
            { letter: "I", name: "Instructions", example: "Напиши вакансию для Java-разработчика" },
            { letter: "S", name: "Steps", example: "1) Требования 2) Обязанности 3) Оффер" },
            { letter: "E", name: "End goal", example: "Привлечь 20+ релевантных откликов" },
            { letter: "N", name: "Narrowing", example: "Тон: дружелюбный, не корпоративный" },
          ].map((item) => (
            <div key={item.letter} className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-base flex-shrink-0">{item.letter}</span>
              <div>
                <span className="text-base font-bold text-slate-800">{item.name}</span>
                <p className="text-base text-slate-500 mt-0.5">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      {/* CRAFT */}
      <Card className="flex-1 !p-5 anim-fade-up-d1 border-violet-200">
        <h3 className="text-xl font-bold text-violet-600 mb-4">CRAFT</h3>
        <div className="space-y-3">
          {[
            { letter: "C", name: "Context", example: "Компания, отрасль, ситуация" },
            { letter: "R", name: "Role", example: "Кем должен быть AI" },
            { letter: "A", name: "Action", example: "Что конкретно сделать" },
            { letter: "F", name: "Format", example: "Таблица, список, письмо" },
            { letter: "T", name: "Target", example: "Для кого результат" },
          ].map((item) => (
            <div key={item.letter} className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-violet-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0">{item.letter}</span>
              <div>
                <span className="text-base font-bold text-slate-800">{item.name}</span>
                <p className="text-base text-slate-500 mt-0.5">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      {/* CO-STAR */}
      <Card className="flex-1 !p-5 anim-fade-up-d2 border-green-200">
        <h3 className="text-xl font-bold text-green-600 mb-4">CO-STAR</h3>
        <div className="space-y-3">
          {[
            { letter: "C", name: "Context", example: "Фон задачи" },
            { letter: "O", name: "Objective", example: "Цель запроса" },
            { letter: "S", name: "Style", example: "Стиль ответа" },
            { letter: "T", name: "Tone", example: "Тон коммуникации" },
            { letter: "A", name: "Audience", example: "Целевая аудитория" },
            { letter: "R", name: "Response", example: "Формат ответа" },
          ].map((item) => (
            <div key={item.letter} className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0">{item.letter}</span>
              <div>
                <span className="text-base font-bold text-slate-800">{item.name}</span>
                <p className="text-base text-slate-500 mt-0.5">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
    <div className="mt-4 text-center anim-fade-up-d3">
      <p className="text-lg text-slate-500 font-medium">Выберите один фреймворк и используйте как чек-лист</p>
    </div>
  </div>
);

// ─── SLIDE 08: RISEN на практике ─────────────────────────────────

export const Slide08RISENExample: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="практика" slideNum={7} total={TOTAL} />
    <GlitchHeader text="RISEN" subtext="Полный пример применения" />
    <div className="flex-1 flex gap-8 mt-4">
      {/* Left: framework breakdown */}
      <div className="w-1/2 flex flex-col gap-3 anim-fade-left">
        {[
          { letter: "R", label: "Role", text: "Ты — маркетолог сети магазинов электроники с опытом 7 лет в ритейле Узбекистана.", color: "bg-primary" },
          { letter: "I", label: "Instructions", text: "Напиши пост для Telegram-канала о распродаже ко Дню Влюблённых.", color: "bg-blue-600" },
          { letter: "S", label: "Steps", text: "1) Цепляющий заголовок, 2) Боль клиента, 3) Оффер с ценами, 4) Call-to-action с дедлайном.", color: "bg-violet-600" },
          { letter: "E", label: "End goal", text: "Получить 50+ переходов в каталог за первые 2 часа.", color: "bg-green-600" },
          { letter: "N", label: "Narrowing", text: "Тон: дружелюбный, с эмодзи. Длина: 800 знаков макс. Язык: русский.", color: "bg-orange-500" },
        ].map((item) => (
          <div key={item.letter} className="flex items-start gap-3 bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
            <span className={`w-9 h-9 rounded-lg ${item.color} text-white flex items-center justify-center font-bold text-lg flex-shrink-0`}>{item.letter}</span>
            <div className="min-w-0">
              <span className="text-sm font-mono text-slate-400 font-bold">{item.label}</span>
              <p className="text-base text-slate-800 mt-0.5">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Right: assembled prompt */}
      <div className="w-1/2 flex flex-col anim-fade-right">
        <div className="text-base font-mono text-slate-400 font-bold mb-3">ГОТОВЫЙ ПРОМПТ</div>
        <Card className="flex-1 !p-5 bg-slate-50 border-slate-200">
          <div className="font-mono text-base text-slate-800 leading-relaxed whitespace-pre-line">
{`Ты — маркетолог сети магазинов электроники с опытом 7 лет в ритейле Узбекистана.

Напиши пост для Telegram-канала о распродаже ко Дню Влюблённых.

Структура:
1) Цепляющий заголовок
2) Боль клиента (подарок-проблема)
3) Оффер: 3 товара с ценами (наушники, смартфон, колонка)
4) CTA с дедлайном «до 13 февраля»

Цель: 50+ переходов за 2 часа.

Тон: дружелюбный, с эмодзи.
Макс. 800 знаков. Язык: русский.`}
          </div>
        </Card>
        <div className="mt-3 p-3 bg-green-50 rounded-xl border border-green-200 text-center">
          <p className="text-base text-green-700 font-bold"><CheckCircle2 size={16} className="inline mr-2" />Результат: конкретный, готовый к публикации пост</p>
        </div>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 3: ПРАКТИКА (Слайды 9-10)
// ═══════════════════════════════════════════

// ─── SLIDE 09: Роли в промптинге ─────────────────────────────────

export const Slide09Roles: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="техника" slideNum={8} total={TOTAL} />

    <GlitchHeader text="РОЛИ" subtext="Секрет глубоких ответов" />
    <div className="flex-1 flex gap-8 mt-6">
      {/* BAD */}
      <div className="flex-1 anim-fade-left">
        <div className="flex items-center gap-3 mb-4">
          <XCircle size={24} className="text-red-500" />
          <h3 className="text-xl font-bold text-red-600">Плохо</h3>
        </div>
        <Card className="!p-6 border-red-200 bg-red-50/50 h-[calc(100%-48px)]">
          <div className="bg-white p-5 rounded-xl border border-red-100 font-mono text-lg text-slate-700">
            «Ты — эксперт. Помоги мне.»
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-base text-slate-600"><XCircle size={16} className="inline text-red-400 mr-2" />Слишком размыто — AI не знает какой эксперт</p>
            <p className="text-base text-slate-600"><XCircle size={16} className="inline text-red-400 mr-2" />Нет контекста специализации</p>
            <p className="text-base text-slate-600"><XCircle size={16} className="inline text-red-400 mr-2" />Шаблонный поверхностный ответ</p>
          </div>
        </Card>
      </div>
      {/* GOOD */}
      <div className="flex-1 anim-fade-right">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 size={24} className="text-green-500" />
          <h3 className="text-xl font-bold text-green-600">Хорошо</h3>
        </div>
        <Card className="!p-6 border-green-200 bg-green-50/50 h-[calc(100%-48px)]">
          <div className="bg-white p-5 rounded-xl border border-green-100 font-mono text-base text-slate-700 leading-relaxed">
            «Ты — HR-директор с 10-летним опытом в IT-компаниях СНГ, специализация на техническом рекрутинге. Ты нанял 200+ разработчиков и знаешь рынок Узбекистана.»
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-base text-slate-600"><CheckCircle2 size={16} className="inline text-green-500 mr-2" />Конкретная экспертиза</p>
            <p className="text-base text-slate-600"><CheckCircle2 size={16} className="inline text-green-500 mr-2" />Географический контекст</p>
            <p className="text-base text-slate-600"><CheckCircle2 size={16} className="inline text-green-500 mr-2" />Глубокий, релевантный ответ</p>
          </div>
        </Card>
      </div>
    </div>
    <div className="mt-4 p-4 bg-slate-900 text-white rounded-xl text-center anim-fade-up-d3">
      <p className="text-lg font-bold"><Lightbulb size={20} className="inline text-yellow-400 mr-2" />Не «Представь, что ты…» — говорите напрямую: «Ты — …»</p>
    </div>
  </div>
);

// ─── SLIDE 09: Практика ─────────────────────────────────────────

export const Slide09Practice: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="практика" slideNum={9} total={TOTAL} />
    <GlitchHeader text="ПРАКТИКА" subtext="Улучшите промпт по фреймворку" />
    <div className="flex-1 flex flex-col mt-6">
      <div className="grid grid-cols-3 gap-5">
        {[
          { role: "HR", bad: "Напиши вакансию для менеджера", hint: "Добавьте: компания, требования, тон, формат" },
          { role: "Руководитель", bad: "Составь план на квартал", hint: "Добавьте: отдел, цели, метрики, контекст" },
          { role: "PM", bad: "Напиши ТЗ для сайта", hint: "Добавьте: бизнес, аудитория, функционал, бюджет" },
        ].map((item, i) => (
          <Card key={i} className={`!p-5 anim-fade-up-d${i + 1}`}>
            <Tag>{item.role}</Tag>
            <div className="mt-3 p-4 bg-red-50 rounded-xl border border-red-100">
              <p className="text-sm font-mono text-red-600 font-bold mb-1">Плохой промпт:</p>
              <p className="text-base text-slate-700 italic">«{item.bad}»</p>
            </div>
            <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-700 font-medium"><Lightbulb size={14} className="inline mr-1" />{item.hint}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex gap-6 anim-fade-up-d4">
        <Card className="flex-1 !p-5 bg-blue-50 border-primary/20">
          <h4 className="text-lg font-bold text-slate-800 mb-2">Задание (5 минут)</h4>
          <div className="space-y-2">
            <p className="text-base text-slate-600">1. Выберите свой промпт по роли</p>
            <p className="text-base text-slate-600">2. Улучшите по фреймворку RISEN</p>
            <p className="text-base text-slate-600">3. Протестируйте в ChatGPT/Claude</p>
            <p className="text-base text-slate-600">4. Сравните результат до/после</p>
          </div>
        </Card>
        <Card className="w-1/3 !p-5 border-primary/30">
          <h4 className="text-lg font-bold text-primary mb-2">Эталон: вакансия</h4>
          <p className="text-base text-slate-600 font-mono leading-relaxed">
            Ты — рекрутер IT-компании в Ташкенте. Напиши вакансию для Middle Python-разработчика. Стек: Django, PostgreSQL. ЗП: $1500-2500. Тон: дружелюбный. Формат: заголовок + 4 секции.
          </p>
        </Card>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 4: ПРОДВИНУТЫЕ ТЕХНИКИ (Слайды 10-13)
// ═══════════════════════════════════════════

// ─── SLIDE 10: Context Engineering ──────────────────────────────

export const Slide10ContextEngineering: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="advanced" slideNum={10} total={TOTAL} />
    <GlitchHeader text="КОНТЕКСТ" subtext="Context Engineering" />
    <div className="flex-1 flex gap-8 mt-6">
      <div className="flex-1 anim-fade-left">
        <div className="space-y-3">
          {[
            { icon: <Brain size={22} />, name: "Системные инструкции", desc: "Кто ты, как себя вести, что важно", color: "bg-primary/10 text-primary" },
            { icon: <FileText size={22} />, name: "Данные и документы", desc: "Файлы, таблицы, базы знаний", color: "bg-violet-50 text-violet-600" },
            { icon: <MessageSquare size={22} />, name: "История диалога", desc: "Предыдущие сообщения и ответы", color: "bg-green-50 text-green-600" },
            { icon: <Search size={22} />, name: "Извлечённые данные", desc: "RAG, поиск, внешние API", color: "bg-orange-50 text-orange-600" },
            { icon: <BookOpen size={22} />, name: "Примеры (few-shot)", desc: "Покажи образец — AI повторит стиль", color: "bg-pink-50 text-pink-600" },
          ].map((item, i) => (
            <Card key={i} className={`!p-4 flex items-center gap-4 anim-fade-up-d${i + 1}`}>
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>{item.icon}</div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">{item.name}</h4>
                <p className="text-base text-slate-500">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-2/5 flex flex-col gap-6 anim-fade-right">
        <Card className="bg-slate-50 border-slate-200 !p-6 flex-1">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Аналогия</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl border border-slate-100">
              <p className="text-lg text-slate-800"><strong className="text-primary">Промпт</strong> — это ваш вопрос</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-100">
              <p className="text-lg text-slate-800"><strong className="text-primary">Контекст</strong> — это папка документов на столе консультанта</p>
            </div>
            <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-lg font-bold text-slate-900">Чем толще папка — тем точнее ответ</p>
            </div>
          </div>
        </Card>
        <div className="p-4 bg-blue-50 rounded-xl border border-primary/20">
          <p className="text-base text-slate-700"><strong className="text-primary">Лайфхак:</strong> Прикрепляйте файлы, примеры прошлых работ, стиль-гайды — AI использует всё это как контекст</p>
        </div>
      </div>
    </div>
  </div>
);

// ─── SLIDE 11: Транскрибация и золото (REUSE/ADAPT) ─────────────

export const Slide11CallGold: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="advanced" slideNum={11} total={TOTAL} />
    <GlitchHeader text="ЗОЛОТО В ЗВОНКАХ" subtext="Транскрибация + AI = задачи" />
    <div className="flex-1 flex gap-6 mt-6">
      <div className="flex-1 flex flex-col gap-5 anim-fade-left">
        <Card className="!p-5 bg-green-50 border-green-200">
          <h3 className="text-lg font-bold text-green-700 mb-3"><Mic size={20} className="inline mr-2" />Процесс</h3>
          <div className="space-y-3">
            {[
              "Записываете встречу/звонок",
              "Загружаете аудио в Google AI Studio (бесплатно)",
              "AI создаёт транскрипт",
              "Из транскрипта: задачи, решения, дедлайны",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                <p className="text-base text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="!p-5 border-violet-200 bg-violet-50">
          <h3 className="text-lg font-bold text-violet-700 mb-2">Промпт-шаблон</h3>
          <div className="bg-white p-4 rounded-lg border border-violet-100 font-mono text-base text-slate-700 leading-relaxed">
{`Проанализируй транскрипт встречи.
Выдели:
1. Ключевые решения
2. Задачи (кто, что, дедлайн)
3. Открытые вопросы
4. Следующие шаги
Формат: таблица`}
          </div>
        </Card>
      </div>
      <div className="w-2/5 flex flex-col gap-5 anim-fade-right">
        <h3 className="font-mono text-slate-400 text-base font-bold">ИНСТРУМЕНТЫ</h3>
        {[
          { name: "Google AI Studio", desc: "Бесплатно, до 1 часа аудио", tag: "FREE" },
          { name: "TLDV", desc: "Авто-запись Zoom/Meet + AI-summary", tag: "PAID" },
          { name: "Plaud Note", desc: "Физический рекордер + AI", tag: "DEVICE" },
          { name: "VoiceTrace", desc: "Мобильный рекордер + транскрипт", tag: "APP" },
        ].map((tool, i) => (
          <Card key={i} className="!p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-800">{tool.name}</h4>
                <p className="text-sm text-slate-500">{tool.desc}</p>
              </div>
              <span className="px-2.5 py-1 bg-primary/10 text-primary text-sm font-mono font-bold rounded-lg">{tool.tag}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

// ─── SLIDE 12: AI задаёт ВАМ вопросы ──────────────────────────

export const Slide12AIQuestions: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="техника" slideNum={12} total={TOTAL} />
    <GlitchHeader text="ОБРАТНЫЙ ПРОМПТ" subtext="AI задаёт ВАМ вопросы" />
    <div className="flex-1 flex gap-8 mt-6">
      <div className="flex-1 anim-fade-left">
        <Card className="!p-6 bg-blue-50 border-primary/30 h-full flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-4"><HelpCircle size={22} className="inline mr-2" />Универсальный шаблон</h3>
          <div className="bg-white p-6 rounded-xl border border-primary/20 font-mono text-lg text-slate-700 leading-relaxed flex-1 flex items-center">
            <p>«Прежде чем выполнять задачу, задай мне <strong className="text-primary">5 уточняющих вопросов</strong>, чтобы дать максимально точный результат.»</p>
          </div>
          <div className="mt-4 p-4 bg-white rounded-xl border border-blue-100">
            <p className="text-base text-slate-600"><strong>Зачем:</strong> AI сам выяснит то, что вы забыли указать. Экономит 2-3 итерации.</p>
          </div>
        </Card>
      </div>
      <div className="flex-1 anim-fade-right">
        <Card className="!p-6 bg-violet-50 border-violet-200 h-full flex flex-col">
          <h3 className="text-xl font-bold text-violet-600 mb-4"><Brain size={22} className="inline mr-2" />Сократический аналитик</h3>
          <div className="bg-white p-5 rounded-xl border border-violet-100 font-mono text-base text-slate-700 leading-relaxed flex-1">
{`Ты — Сократический аналитик.

Когда я описываю задачу:
1. Не решай сразу
2. Задай 5-7 точных вопросов
3. После моих ответов — уточни ещё
4. Только потом дай решение

Цель: помочь МНЕ лучше понять
свою задачу через вопросы.`}
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-base text-violet-700 font-medium">Результат:</p>
            <p className="text-base text-slate-600">AI находит слепые зоны, о которых вы не думали</p>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

// ─── SLIDE 13: Deep Research ────────────────────────────────────

export const Slide13DeepResearch: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="advanced" slideNum={13} total={TOTAL} />
    <GlitchHeader text="DEEP RESEARCH" subtext="Исследования за минуты" />
    <div className="flex-1 flex flex-col mt-6">
      <div className="grid grid-cols-3 gap-5 anim-fade-up">
        {[
          { name: "Perplexity", pros: ["Источники и ссылки", "Актуальный поиск", "Бесплатный план"], color: "border-blue-300", tagColor: "text-blue-600 bg-blue-50" },
          { name: "ChatGPT", pros: ["Deep Research (Pro)", "Работа с файлами", "Фото, голос, видео на входе"], color: "border-green-300", tagColor: "text-green-600 bg-green-50" },
          { name: "Gemini", pros: ["Google Deep Research", "Связь с Google Docs", "2M токенов контекста"], color: "border-violet-300", tagColor: "text-violet-600 bg-violet-50" },
        ].map((tool, i) => (
          <Card key={i} className={`!p-5 ${tool.color}`}>
            <div className={`inline-block px-3 py-1 rounded-lg text-base font-bold ${tool.tagColor} mb-3`}>{tool.name}</div>
            <div className="space-y-2.5">
              {tool.pros.map((pro, j) => (
                <div key={j} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                  <p className="text-base text-slate-700">{pro}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <Card className="mt-5 !p-5 bg-slate-50 border-slate-200 anim-fade-up-d2">
        <h3 className="text-lg font-bold text-slate-900 mb-3"><Search size={20} className="inline mr-2 text-primary" />Демо-промпт для исследования</h3>
        <div className="bg-white p-5 rounded-xl border border-slate-100 font-mono text-base text-slate-800 leading-relaxed">
          «Проведи глубокое исследование рынка [ОТРАСЛЬ] в Узбекистане за 2025-2026. Найди: объём рынка, ключевых игроков, тренды, регулирование. Все данные с источниками. Формат: структурированный отчёт.»
        </div>
      </Card>
      <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-primary/20 anim-fade-up-d3">
        <p className="text-lg text-slate-700"><Lightbulb size={18} className="inline text-yellow-500 mr-2" /><strong>Совет:</strong> Используйте 2-3 инструмента параллельно и сверяйте результаты</p>
      </div>
    </div>
  </div>
);

// ─── SLIDE: Источники контекста ────────────────────────────────

export const SlideContextSources: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="контекст" slideNum={14} total={TOTAL} />
    <GlitchHeader text="ГДЕ БРАТЬ КОНТЕКСТ" subtext="5 источников данных для AI" />
    <div className="flex-1 flex flex-col justify-center mt-4">
      <div className="grid grid-cols-3 gap-5">
        {[
          { icon: <FileText size={28} />, name: "Документация", desc: "PDF, DOCX, CSV, таблицы — загружайте прямо в чат", iconBg: "bg-blue-100", iconColor: "text-blue-600", cardColor: "bg-blue-50 border-blue-200" },
          { icon: <Phone size={28} />, name: "Саммери звонков", desc: "TLDV, Copilot, Granola — транскрипты и выжимки встреч", iconBg: "bg-green-100", iconColor: "text-green-600", cardColor: "bg-green-50 border-green-200" },
          { icon: <MessageSquare size={28} />, name: "Telegram-чаты", desc: "CSV-выгрузка истории — переписки с клиентами и командой", iconBg: "bg-violet-100", iconColor: "text-violet-600", cardColor: "bg-violet-50 border-violet-200" },
          { icon: <Search size={28} />, name: "Deep Research", desc: "ChatGPT, Claude, Perplexity — ресерч с источниками", iconBg: "bg-orange-100", iconColor: "text-orange-600", cardColor: "bg-orange-50 border-orange-200" },
          { icon: <Globe size={28} />, name: "Сайты", desc: "Скачать как PDF/HTML — конкуренты, рынок, документация", iconBg: "bg-cyan-100", iconColor: "text-cyan-600", cardColor: "bg-cyan-50 border-cyan-200" },
        ].map((item, i) => (
          <Card key={i} className={`!p-5 ${item.cardColor} text-center flex flex-col items-center anim-fade-up-d${i + 1}`}>
            <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-3 ${item.iconColor}`}>
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-2">{item.name}</h4>
            <p className="text-base text-slate-600">{item.desc}</p>
          </Card>
        ))}
        {/* 6th cell: insight */}
        <Card className="!p-5 bg-slate-900 text-white border-slate-700 text-center flex flex-col items-center justify-center anim-fade-up-d5">
          <Lightbulb size={28} className="text-yellow-400 mb-3" />
          <p className="text-lg font-bold">Чем больше контекста — тем точнее результат</p>
          <p className="text-base text-slate-300 mt-2">Не спрашивайте лучше — давайте больше данных</p>
        </Card>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 5: ИНСТРУМЕНТЫ (Слайды 16-17)
// ═══════════════════════════════════════════

// ─── SLIDE: Когда какой инструмент ─────────────────────────────

export const Slide14Tools: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="инструменты" slideNum={15} total={TOTAL} />
    <GlitchHeader text="ИНСТРУМЕНТЫ" subtext="Когда какой AI использовать" />
    <div className="flex-1 mt-4 flex gap-5">
      {/* Left column: Core tools */}
      <div className="flex-1 flex flex-col gap-3 anim-fade-left">
        <h3 className="text-base font-mono font-bold text-slate-500 mb-1">ТЕКСТ И ДАННЫЕ</h3>
        {[
          { task: "Текст, письма, КП", tools: "ChatGPT · Claude · Grok", icon: <FileText size={20} />, color: "border-blue-200 bg-blue-50" },
          { task: "Исследования", tools: "Perplexity + Deep Research", icon: <Search size={20} />, color: "border-green-200 bg-green-50" },
          { task: "Работа с документами", tools: "Claude · Gemini", icon: <BookOpen size={20} />, color: "border-violet-200 bg-violet-50" },
          { task: "Презентации", tools: "Gamma", icon: <BarChart3 size={20} />, color: "border-orange-200 bg-orange-50" },
        ].map((row, i) => (
          <Card key={i} className={`!p-4 ${row.color} flex items-center gap-4`}>
            <div className="text-slate-700 flex-shrink-0">{row.icon}</div>
            <div>
              <p className="text-lg font-bold text-slate-900">{row.task}</p>
              <p className="text-base text-primary font-mono font-bold">{row.tools}</p>
            </div>
          </Card>
        ))}
      </div>
      {/* Right column: Creative & specialized */}
      <div className="flex-1 flex flex-col gap-3 anim-fade-right">
        <h3 className="text-base font-mono font-bold text-slate-500 mb-1">КРЕАТИВ И МЕДИА</h3>
        {[
          { task: "Изображения", tools: "Midjourney · DALL-E 3 · Ideogram", icon: <PenTool size={20} />, color: "border-pink-200 bg-pink-50" },
          { task: "Видео", tools: "Sora · Runway · Higgsfield", icon: <Eye size={20} />, color: "border-red-200 bg-red-50" },
          { task: "Сайты и MVP", tools: "Lovable · V0", icon: <Globe size={20} />, color: "border-cyan-200 bg-cyan-50" },
          { task: "Аудио → текст", tools: "TLDV · Granola · AI Studio", icon: <Mic size={20} />, color: "border-emerald-200 bg-emerald-50" },
        ].map((row, i) => (
          <Card key={i} className={`!p-4 ${row.color} flex items-center gap-4`}>
            <div className="text-slate-700 flex-shrink-0">{row.icon}</div>
            <div>
              <p className="text-lg font-bold text-slate-900">{row.task}</p>
              <p className="text-base text-primary font-mono font-bold">{row.tools}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <div className="mt-3 p-4 bg-slate-900 text-white rounded-xl flex items-center gap-4 anim-fade-up-d2">
      <Lightbulb size={24} className="text-yellow-400 flex-shrink-0" />
      <p className="text-base"><strong>Deep Research</strong> доступен в ChatGPT, Gemini, Claude и Grok — используйте для глубоких исследований с источниками</p>
    </div>
  </div>
);

// ─── SLIDE 15: Работа с таблицами ───────────────────────────────

export const Slide15Tables: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="инструменты" slideNum={16} total={TOTAL} />
    <GlitchHeader text="ТАБЛИЦЫ + AI" subtext="Анализ данных без программирования" />
    <div className="flex-1 flex gap-6 mt-6">
      <div className="flex-1 anim-fade-left">
        <h3 className="text-lg font-mono font-bold text-slate-400 mb-4">ЧТО УМЕЕТ AI С ДАННЫМИ</h3>
        <div className="space-y-3">
          {[
            { icon: <BarChart3 size={20} />, text: "Анализ трендов и аномалий" },
            { icon: <Table size={20} />, text: "Pivot-таблицы и группировки" },
            { icon: <PenTool size={20} />, text: "Формулы Excel / Google Sheets" },
            { icon: <Search size={20} />, text: "Очистка и дедупликация" },
            { icon: <TrendingUp size={20} />, text: "Визуализации и графики" },
          ].map((item, i) => (
            <Card key={i} className="!p-4 flex items-center gap-4">
              <div className="text-primary">{item.icon}</div>
              <p className="text-base text-slate-700 font-medium">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-5 anim-fade-right">
        <Card className="!p-5 bg-violet-50 border-violet-200">
          <h3 className="text-lg font-bold text-violet-700 mb-3">Промпт для анализа</h3>
          <div className="bg-white p-4 rounded-xl border border-violet-100 font-mono text-base text-slate-700 leading-relaxed">
{`Проанализируй прикреплённый CSV:
1. Общая статистика (строки, столбцы)
2. Топ-5 трендов
3. Аномалии и выбросы
4. 3 actionable инсайта
Формат: таблица + краткие выводы`}
          </div>
        </Card>
        <Card className="!p-5 border-primary/20 bg-blue-50">
          <h3 className="text-lg font-bold text-primary mb-3"><Lightbulb size={18} className="inline mr-2" />Советы</h3>
          <div className="space-y-2">
            <p className="text-base text-slate-700">• <strong>CSV лучше XLSX</strong> — AI лучше понимает</p>
            <p className="text-base text-slate-700">• <strong>Понятные столбцы</strong> — не "col1", а "revenue_2025"</p>
            <p className="text-base text-slate-700">• <strong>Проверяйте расчёты</strong> — AI может ошибаться в числах</p>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 6: QUICK WINS + ИГРА (Слайды 16-17)
// ═══════════════════════════════════════════

// ─── SLIDE 16: 5 мгновенных побед ──────────────────────────────

export const Slide16QuickWins: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="quick wins" slideNum={17} total={TOTAL} />
    <GlitchHeader text="5 ПОБЕД" subtext="Результат за минуты" />
    <div className="flex-1 flex items-center mt-4">
      <div className="grid grid-cols-5 gap-4 w-full">
        {[
          { icon: <Mail size={28} />, task: "Письмо клиенту", time: "30 сек", color: "bg-blue-50 border-blue-200 text-blue-600" },
          { icon: <FileText size={28} />, task: "Протокол из заметок", time: "1 мин", color: "bg-violet-50 border-violet-200 text-violet-600" },
          { icon: <Users size={28} />, task: "Вакансия", time: "1 мин", color: "bg-green-50 border-green-200 text-green-600" },
          { icon: <Table size={28} />, task: "Формула Excel", time: "20 сек", color: "bg-orange-50 border-orange-200 text-orange-600" },
          { icon: <Calendar size={28} />, task: "Подготовка к встрече", time: "2 мин", color: "bg-pink-50 border-pink-200 text-pink-600" },
        ].map((item, i) => (
          <Card key={i} className={`!p-5 text-center flex flex-col items-center justify-center ${item.color} anim-fade-up-d${i + 1}`}>
            <div className="mb-3">{item.icon}</div>
            <h4 className="text-lg font-bold text-slate-800 mb-2">{item.task}</h4>
            <div className="flex items-center gap-2 justify-center">
              <Clock size={16} className="text-slate-400" />
              <span className="text-2xl font-mono font-bold text-primary">{item.time}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
    <div className="mt-4 p-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl text-center anim-fade-up-d5">
      <p className="text-xl font-bold">Суммарная экономия: ~5 минут на задачу × 10 задач/день = <span className="text-yellow-300">50 минут/день</span></p>
    </div>
  </div>
);

// ═══════════════════════════════════════════
// БЛОК 7: ЗАКРЫТИЕ (Слайды 19-22)
// ═══════════════════════════════════════════

// ─── SLIDE 18: AI Интервью (REUSE) ─────────────────────────────

export const Slide18AIInterview: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="методология" slideNum={18} total={TOTAL} />
    <GlitchHeader text="AI ИНТЕРВЬЮ" subtext="Аудит процессов за 15 минут" />
    <div className="mt-6 flex-1 flex gap-6">
      <div className="w-1/2 flex flex-col gap-4">
        <Card className="bg-violet-50 border-violet-200 flex-shrink-0">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare size={22} className="text-violet-600" />
            <h3 className="text-lg font-bold text-slate-800">Промпт для AI-аудита</h3>
          </div>
          <div className="bg-white p-5 rounded-xl border border-violet-100 font-mono text-base text-slate-700 leading-relaxed whitespace-pre-line">
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
        <div className="text-base text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <strong className="text-primary">Пример темы:</strong> «Как устроен процесс найма в моей компании от заявки до выхода сотрудника»
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <h3 className="font-mono text-slate-400 text-base font-bold">ЧТО НАЙДЁТ AI</h3>
        <Card className="!p-5">
          <div className="flex items-center gap-3 mb-2">
            <Eye size={22} className="text-primary" />
            <h4 className="text-lg font-bold text-slate-800">Повторяющиеся операции</h4>
          </div>
          <p className="text-base text-slate-500">Ручной ввод, копирование между системами, ежедневные отчёты</p>
        </Card>
        <Card className="!p-5">
          <div className="flex items-center gap-3 mb-2">
            <Brain size={22} className="text-primary" />
            <h4 className="text-lg font-bold text-slate-800">Узкие места</h4>
          </div>
          <p className="text-base text-slate-500">Где процесс зависит от одного человека, где теряется информация</p>
        </Card>
        <Card className="!p-5">
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb size={22} className="text-primary" />
            <h4 className="text-lg font-bold text-slate-800">Quick Wins</h4>
          </div>
          <p className="text-base text-slate-500">Что автоматизировать первым для максимального эффекта</p>
        </Card>
        <div className="mt-auto p-4 bg-slate-900 text-white rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <Rocket size={20} className="text-primary-light" />
            <span className="text-lg font-bold">Домашка</span>
          </div>
          <p className="text-base mt-2 text-slate-300">Вставьте промпт в ChatGPT/Claude, замените [ТЕМА] на свой процесс. Проведите аудит.</p>
        </div>
      </div>
    </div>
  </div>
);

// ─── SLIDE 19: Рефлексия ────────────────────────────────────────

export const Slide19Reflection: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16">
    <SlideHeader tag="рефлексия" slideNum={19} total={TOTAL} />
    <GlitchHeader text="ИТОГИ" subtext="Что берём с собой" />
    <div className="flex-1 flex flex-col justify-center mt-4">
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { num: "01", q: "Что было самым полезным?", icon: <Lightbulb size={28} className="text-yellow-500" /> },
          { num: "02", q: "Какую задачу автоматизирую первой?", icon: <Rocket size={28} className="text-primary" /> },
          { num: "03", q: "Какой навык буду качать?", icon: <TrendingUp size={28} className="text-green-500" /> },
        ].map((item, i) => (
          <Card key={i} className={`!p-6 text-center anim-fade-up-d${i + 1}`}>
            <div className="flex justify-center mb-3">{item.icon}</div>
            <div className="text-3xl font-mono font-bold text-primary mb-3">{item.num}</div>
            <p className="text-lg text-slate-700 font-medium">{item.q}</p>
          </Card>
        ))}
      </div>
      <Card className="!p-6 bg-primary/5 border-primary/20 text-center anim-fade-up-d4">
        <h3 className="text-xl font-bold text-primary mb-2">Commitment Card</h3>
        <p className="text-lg text-slate-700">Запишите <strong>одно конкретное действие</strong>, которое вы сделаете в ближайшие <strong className="text-primary">48 часов</strong></p>
      </Card>
      <div className="mt-6 p-6 bg-slate-900 text-white rounded-xl text-center anim-fade-up-d5">
        <p className="text-2xl font-bold">
          «AI — стажёр с энциклопедическими знаниями.<br/>
          Чем точнее задача — тем лучше результат.»
        </p>
      </div>
    </div>
  </div>
);

// ─── SLIDE 20: Спасибо + Q&A (REUSE) ───────────────────────────

export const Slide20Contacts: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16 justify-between">
    <SlideHeader tag="q&a" slideNum={20} total={TOTAL} />
    <GlitchHeader text="СПАСИБО" subtext="Время для вопросов" />
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <Card className="text-center !p-6 flex flex-col items-center">
          <img src={`${base}qr-telegram.png`} alt="QR Blog" className="w-32 h-32 mb-3 rounded-lg" />
          <p className="text-lg font-bold text-slate-800">Мой блог</p>
          <p className="text-base text-primary font-mono">@Panferov_AI_dev</p>
        </Card>
        <Card className="text-center !p-6 flex flex-col items-center border-primary/30 shadow-lg">
          <img src={`${base}qr-personal.png`} alt="QR Personal" className="w-32 h-32 mb-3 rounded-lg" />
          <p className="text-lg font-bold text-slate-800">Консультации</p>
          <p className="text-base text-primary font-mono">@panferovp</p>
          <p className="text-sm text-slate-500 mt-1 font-mono">+998 94 000 13 70</p>
        </Card>
        <Card className="text-center !p-6 flex flex-col items-center border-violet-300 shadow-lg bg-violet-50">
          <img src={`${base}qr-feedback.jpg`} alt="QR Feedback" className="w-32 h-32 mb-3 rounded-lg" />
          <p className="text-lg font-bold text-slate-800">Обратная связь</p>
          <p className="text-base text-violet-600">Поделитесь впечатлениями</p>
        </Card>
      </div>
    </div>
    <div className="flex justify-between items-end border-t border-slate-200 pt-6">
      <div className="text-base font-mono text-slate-500 font-bold">
        Павел Панферов | CDTO We Digital | 06.02.2026
      </div>
      <div className="px-8 py-3 bg-slate-900 text-white font-bold font-mono text-base hover:bg-primary transition-colors cursor-pointer rounded-lg shadow-lg anim-pulse-glow">
        Q&A SESSION
      </div>
    </div>
  </div>
);

// ─── SLIDE: Обратная связь Alpha Education ─────────────────────

export const SlideFeedback: React.FC<SlideProps> = ({ isActive }) => (
  <div className="h-full flex flex-col p-10 md:p-16 items-center justify-center">
    <SlideHeader slideNum={21} total={TOTAL} />
    <div className="flex flex-col items-center anim-fade-up">
      <Tag>alpha education</Tag>
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mt-4 tracking-tight">ОБРАТНАЯ СВЯЗЬ</h1>
      <p className="text-xl text-slate-500 mt-3 font-mono">Поделитесь впечатлениями</p>
    </div>
    <div className="mt-10 anim-fade-up-d1">
      <Card className="!p-8 border-violet-200 bg-violet-50/50 flex flex-col items-center">
        <img src={`${base}qr-feedback.jpg`} alt="QR Feedback" className="w-64 h-64 rounded-xl shadow-lg" />
        <p className="text-lg font-bold text-slate-800 mt-5">Отсканируйте QR-код</p>
        <p className="text-base text-violet-600 mt-1">Ваше мнение помогает нам стать лучше</p>
      </Card>
    </div>
    <div className="mt-8 text-base font-mono text-slate-400 font-bold anim-fade-up-d2">
      Павел Панферов | CDTO We Digital | 06.02.2026
    </div>
  </div>
);

// ─── Export all slides ───────────────────────────────────────────

export const ALL_SLIDES = [
  Slide01Title,
  Slide03Context,
  Slide04Evolution,
  Slide05BeforeAfter,
  Slide06GIGO,
  Slide07Frameworks,
  Slide08RISENExample,
  Slide09Roles,
  Slide09Practice,
  Slide10ContextEngineering,
  Slide11CallGold,
  Slide12AIQuestions,
  Slide13DeepResearch,
  SlideContextSources,
  Slide14Tools,
  Slide15Tables,
  Slide16QuickWins,
  Slide18AIInterview,
  Slide19Reflection,
  Slide20Contacts,
  SlideFeedback,
];
