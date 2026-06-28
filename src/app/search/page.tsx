"use client";

import Link from "next/link";
import AnimatedStat from "./AnimatedStat";

export interface Professor {
  id: number;
  name: string;
  initials: string;
  college: string;
  dept: string;
  area: string[];
  country: string;
  publications: number;
  avatarColor?: string;
}

const mockProfessors: Professor[] = [
  {
    id: 1,
    name: "Dr. Aris Vance",
    initials: "AV",
    college: "IIT Kanpur",
    dept: "Chemical Engineering",
    area: ["Multicomponent Distillation", "Thermodynamics"],
    country: "India",
    publications: 32,
    avatarColor: "bg-violet-100 text-violet-700",
  },
  {
    id: 2,
    name: "Prof. Sarah Jenkins",
    initials: "SJ",
    college: "MIT",
    dept: "Physics",
    area: ["Quantum Computing", "Condensed Matter"],
    country: "United States",
    publications: 58,
    avatarColor: "bg-blue-100 text-blue-700",
  },
];

const stats = [
  { value: "125K+", label: "Researchers",  icon: "👥", bg: "bg-violet-50", iconBg: "bg-violet-100" },
  { value: "98+",   label: "Countries",    icon: "📖", bg: "bg-green-50",  iconBg: "bg-green-100"  },
  { value: "2.4K+", label: "Institutions", icon: "🏛️", bg: "bg-amber-50",  iconBg: "bg-amber-100"  },
  { value: "1.3M+", label: "Publications", icon: "📄", bg: "bg-blue-50",   iconBg: "bg-blue-100"   },
];

const popularTags = ["Computer Science", "Engineering", "Medicine", "Physics", "Biology"];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">

      {/* ── Hero ── */}
      <section
        className="relative py-14 px-8 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/worldmap.svg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />

        {/* Decorative circles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="absolute left-[4%] top-1/2 -translate-y-1/2 opacity-25" width="180" height="180">
            <circle cx="90" cy="90" r="80" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
            <circle cx="90" cy="90" r="50" fill="none" stroke="#a5b4fc" strokeWidth="1" />
          </svg>
          <svg className="absolute right-[3%] top-1/3 opacity-25" width="160" height="160">
            <circle cx="80" cy="80" r="70" fill="none" stroke="#93c5fd" strokeWidth="1.5" />
            <circle cx="80" cy="80" r="42" fill="none" stroke="#93c5fd" strokeWidth="1" />
          </svg>
        </div>

        <h1 className="text-[2rem] font-bold text-white font-serif mb-2 relative z-10">
          Global Researcher Directory
        </h1>
        <p className="text-slate-200 text-sm mb-6 relative z-10">
          A database engine seeded by OpenAlex to search, verify, and track academic researchers.
        </p>
        <button className="relative z-10 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-medium text-sm px-6 py-3 rounded-lg">
          🔍 Search here
        </button>
      </section>

      {/* ── Search bar ── */}
      <div className="px-8">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm -mt-px">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">

            {/* Name search */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search by name or keyword..."
                className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-md text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-400"
              />
            </div>

            {/* Department */}
            <div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2">
              <span className="text-slate-400 text-sm">🏛️</span>
              <select className="flex-1 bg-transparent text-sm text-slate-700 outline-none cursor-pointer">
                <option>All Departments</option>
                <option>Chemical Engineering</option>
                <option>Physics</option>
                <option>Computer Science</option>
              </select>
            </div>

            {/* Country */}
            <div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2">
              <span className="text-slate-400 text-sm">🌐</span>
              <select className="flex-1 bg-transparent text-sm text-slate-700 outline-none cursor-pointer">
                <option>All Countries</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>

            {/* Back to Home */}
            <Link
              href="/"
              className="bg-[#1a1f36] hover:bg-[#252b47] transition-colors text-white text-sm font-medium px-4 py-2 rounded-md flex items-center justify-center gap-2"
            >
              🏠 Back to Home
            </Link>
          </div>

          {/* Popular tags */}
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="text-xs text-slate-500">Popular:</span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                className="text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full px-3 py-0.5 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <main className="flex-1 px-8 py-6">

        {/* Section header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-violet-100 rounded-md flex items-center justify-center text-violet-700 text-sm">
              👥
            </div>
            <div>
              <h2 className="text-[15px] font-semibold text-slate-800">Featured Researchers</h2>
              <p className="text-xs text-slate-400 mt-0.5">Discover leading experts across various fields</p>
            </div>
          </div>
          <button className="text-indigo-600 text-[13px] flex items-center gap-1 hover:underline">
            View all researchers →
          </button>
        </div>

        {/* Researcher cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {mockProfessors.map((prof) => (
            <div
              key={prof.id}
              className="bg-white border border-slate-200 rounded-xl p-4 relative hover:shadow-md transition-shadow"
            >
              {/* Bookmark */}
              <button className="absolute top-3 right-3 text-slate-300 hover:text-indigo-500 transition-colors">
                🔖
              </button>

              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${prof.avatarColor}`}
                >
                  {prof.initials}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800">{prof.name}</p>
                  <p className="text-xs text-slate-500 mb-2.5">
                    {prof.dept} • {prof.college} ({prof.country === "United States" ? "USA" : prof.country})
                  </p>

                  {/* Research tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {prof.area.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[11px] text-slate-400">
                    <span>📍 {prof.country}</span>
                    <span>🏛️ {prof.college}</span>
                    <span>📄 {prof.publications} Publications</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <AnimatedStat
              key={s.label}
              value={s.value}
              label={s.label}
              icon={s.icon}
              bg={s.bg}
              iconBg={s.iconBg}
            />
          ))}
        </div>

      </main>

    </div>
  );
}