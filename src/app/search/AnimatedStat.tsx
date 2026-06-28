"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  bg: string;
  iconBg: string;
}

function parseValue(value: string): { number: number; suffix: string } {
  const suffix = value.replace(/[\d.]/g, "");
  const raw = value.replace(/[^0-9.]/g, "");
  return { number: parseFloat(raw), suffix };
}

export default function AnimatedStat({ value, label, icon, iconBg }: AnimatedStatProps) {
  const { number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = number / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, number);
            setDisplay(parseFloat(current.toFixed(1)));
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  const hasDecimal = value.includes(".");
  const formatted = hasDecimal ? display.toFixed(1) : Math.floor(display).toString();

  return (
    <div ref={ref} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3">
      <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center text-lg flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-lg font-bold text-slate-800 leading-none tabular-nums">
          {formatted}{suffix}
        </p>
        <p className="text-[11px] text-slate-400 mt-0.5">{label}</p>
      </div>
    </div>
  );
}