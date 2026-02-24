"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function RemoveDuplicates() {
  const [text, setText] = useState("");
  const [sort, setSort] = useState(false);
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [trimLines, setTrimLines] = useState(true);
  const [collapseSpaces, setCollapseSpaces] = useState(false);
  const [removeEmpty, setRemoveEmpty] = useState(true);
  const [result, setResult] = useState("");
  const [stats, setStats] = useState<{ original: number; unique: number; removed: number } | null>(null);
  const [copied, setCopied] = useState(false);

  const process = () => {
    let lines = text.split("\n");
    if (trimLines) lines = lines.map(l => l.trim());
    if (collapseSpaces) lines = lines.map(l => l.replace(/\s+/g, " "));
    const nonEmpty = removeEmpty ? lines.filter(l => l.length > 0) : lines;
    const original = nonEmpty.length;

    const seen = new Set<string>();
    const unique: string[] = [];
    for (const line of nonEmpty) {
      if (removeEmpty && line.length === 0) continue;
      const key = caseSensitive ? line : line.toLowerCase();
      if (!seen.has(key)) { seen.add(key); unique.push(line); }
    }

    if (sort) unique.sort((a, b) => a.localeCompare(b));

    setResult(unique.join("\n"));
    setStats({ original, unique: unique.length, removed: original - unique.length });
  };

  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Paste your lines here (one per line)..."
        className="w-full h-48 p-5 resize-y text-[#2c2825] text-base font-mono" />

      <div className="flex flex-wrap items-center gap-4 mt-4">
        {[
          { label: "Sort alphabetically", checked: sort, onChange: (v: boolean) => setSort(v) },
          { label: "Case sensitive", checked: caseSensitive, onChange: (v: boolean) => setCaseSensitive(v) },
          { label: "Trim line edges", checked: trimLines, onChange: (v: boolean) => setTrimLines(v) },
          { label: "Collapse extra spaces", checked: collapseSpaces, onChange: (v: boolean) => setCollapseSpaces(v) },
          { label: "Remove empty lines", checked: removeEmpty, onChange: (v: boolean) => setRemoveEmpty(v) },
        ].map((opt) => (
          <label key={opt.label} className="flex items-center gap-2 text-sm text-[#2c2825]">
            <input type="checkbox" checked={opt.checked} onChange={(e) => opt.onChange(e.target.checked)} className="rounded" />
            {opt.label}
          </label>
        ))}
        <button onClick={process} disabled={!text.trim()} className="btn-accent">Remove Duplicates</button>
      </div>

      {stats && (
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="stat-card">
            <div className="text-2xl font-bold text-[#e07a5f]">{stats.original}</div>
            <div className="text-sm text-[#8a8078]">Original Lines</div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-[#6b9080]">{stats.unique}</div>
            <div className="text-sm text-[#8a8078]">Unique Lines</div>
          </div>
          <div className="stat-card">
            <div className="text-2xl font-bold text-[#c96a50]">{stats.removed}</div>
            <div className="text-sm text-[#8a8078]">Removed</div>
          </div>
        </div>
      )}

      {result && (
        <div className="mt-6 result-animate">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#2c2825]">Result</span>
            <button onClick={copy} className="flex items-center gap-1 text-sm text-[#8a8078] hover:text-[#e07a5f] transition-colors">
              {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
            </button>
          </div>
          <div className="result-box font-mono max-h-64 overflow-y-auto">{result}</div>
        </div>
      )}
    </div>
  );
}
