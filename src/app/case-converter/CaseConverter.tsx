"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const toTitleCase = (s: string) => s.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase());
  const toSentenceCase = (s: string) => s.toLowerCase().replace(/(^\s*|[.!?]\s+)(\w)/g, (_, p, c) => p + c.toUpperCase());
  const toCamelCase = (s: string) => s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
  const toSnakeCase = (s: string) => s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "");
  const toKebabCase = (s: string) => s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");

  const conversions = [
    { label: "UPPERCASE", fn: () => setResult(text.toUpperCase()) },
    { label: "lowercase", fn: () => setResult(text.toLowerCase()) },
    { label: "Title Case", fn: () => setResult(toTitleCase(text)) },
    { label: "Sentence case", fn: () => setResult(toSentenceCase(text)) },
    { label: "camelCase", fn: () => setResult(toCamelCase(text)) },
    { label: "snake_case", fn: () => setResult(toSnakeCase(text)) },
    { label: "kebab-case", fn: () => setResult(toKebabCase(text)) },
  ];

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full h-40 p-5 resize-y text-[#2c2825] text-base" />

      <div className="flex flex-wrap gap-2.5 mt-5">
        {conversions.map((c) => (
          <button key={c.label} onClick={c.fn} disabled={!text.trim()}
            className="btn-accent">
            {c.label}
          </button>
        ))}
      </div>

      {result && (
        <div className="mt-6 result-animate">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#2c2825]">Result</span>
            <button onClick={copyResult} className="flex items-center gap-1 text-sm text-[#8a8078] hover:text-[#e07a5f] transition-colors">
              {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
            </button>
          </div>
          <div className="result-box">{result}</div>
        </div>
      )}
    </div>
  );
}
