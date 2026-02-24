"use client";

import { useState } from "react";

const socialLimits = [
  { name: "Twitter/X", limit: 280, color: "bg-[#e07a5f]" },
  { name: "Instagram Caption", limit: 2200, color: "bg-[#d4a373]" },
  { name: "Facebook Post", limit: 63206, color: "bg-[#c08b6e]" },
  { name: "LinkedIn Post", limit: 3000, color: "bg-[#b07d62]" },
  { name: "YouTube Title", limit: 100, color: "bg-[#e07a5f]" },
  { name: "TikTok Caption", limit: 2200, color: "bg-[#8a8078]" },
  { name: "Pinterest Pin", limit: 500, color: "bg-[#d4a373]" },
  { name: "Meta Title (SEO)", limit: 60, color: "bg-[#c08b6e]" },
  { name: "Meta Description", limit: 160, color: "bg-[#b07d62]" },
];

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const total = text.length;
  const noSpaces = text.replace(/\s/g, "").length;
  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  const digits = (text.match(/[0-9]/g) || []).length;
  const spaces = (text.match(/\s/g) || []).length;
  const special = total - letters - digits - spaces;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  const stats = [
    { label: "Total Characters", value: total },
    { label: "Without Spaces", value: noSpaces },
    { label: "Letters", value: letters },
    { label: "Digits", value: digits },
    { label: "Spaces", value: spaces },
    { label: "Special Chars", value: special },
    { label: "Words", value: words },
  ];

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full h-48 p-5 resize-y text-[#2c2825] text-base" />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="text-2xl font-bold text-[#e07a5f] number-display">{s.value}</div>
            <div className="text-sm text-[#8a8078] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <h3 style={{ fontFamily: "var(--font-serif)" }} className="text-lg font-semibold text-[#2c2825] mt-8 mb-4">Social Media Limits</h3>
      <div className="space-y-3">
        {socialLimits.map((sl) => {
          const pct = Math.min(100, (total / sl.limit) * 100);
          const over = total > sl.limit;
          return (
            <div key={sl.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#2c2825]">{sl.name}</span>
                <span className={over ? "text-red-600 font-medium" : "text-[#8a8078]"}>
                  {total}/{sl.limit} {over && "⚠️ Over limit!"}
                </span>
              </div>
              <div className="w-full h-2 bg-[#f0ebe5] rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all ${over ? "bg-red-500" : sl.color}`}
                  style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
