"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.trim() ? (text.match(/[.!?]+/g) || []).length || (text.trim() ? 1 : 0) : 0;
  const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
  const readingTime = words > 0 ? Math.max(1, Math.ceil(words / 200)) : 0;
  const speakingTime = words > 0 ? Math.max(1, Math.ceil(words / 130)) : 0;

  const stats = [
    { label: "Words", value: words },
    { label: "Characters", value: characters },
    { label: "No Spaces", value: charactersNoSpaces },
    { label: "Sentences", value: sentences },
    { label: "Paragraphs", value: paragraphs },
    { label: "Reading Time", value: `${readingTime} min` },
    { label: "Speaking Time", value: `${speakingTime} min` },
  ];

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here..."
        className="w-full h-64 p-5 resize-y text-[#2c2825] text-base leading-relaxed"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="text-2xl font-bold text-[#e07a5f] number-display">{stat.value}</div>
            <div className="text-sm text-[#8a8078] mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {text.trim() && (
        <button onClick={() => setText("")}
          className="mt-4 px-4 py-2 text-sm text-[#8a8078] hover:text-[#e07a5f] transition-colors">
          Clear Text
        </button>
      )}
    </div>
  );
}
