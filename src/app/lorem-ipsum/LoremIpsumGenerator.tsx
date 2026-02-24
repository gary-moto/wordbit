"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const LOREM_WORDS = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum".split(" ");

function generateWords(count: number): string {
  const result: string[] = [];
  for (let i = 0; i < count; i++) result.push(LOREM_WORDS[i % LOREM_WORDS.length]);
  result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1);
  return result.join(" ") + ".";
}

function generateSentences(count: number): string {
  const sentences: string[] = [];
  for (let i = 0; i < count; i++) {
    const len = 8 + Math.floor(Math.random() * 12);
    const start = (i * 7) % LOREM_WORDS.length;
    const words: string[] = [];
    for (let j = 0; j < len; j++) words.push(LOREM_WORDS[(start + j) % LOREM_WORDS.length]);
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    sentences.push(words.join(" ") + ".");
  }
  return sentences.join(" ");
}

function generateParagraphs(count: number): string {
  const paras: string[] = [];
  for (let i = 0; i < count; i++) paras.push(generateSentences(4 + Math.floor(Math.random() * 4)));
  return paras.join("\n\n");
}

export default function LoremIpsumGenerator() {
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [count, setCount] = useState(3);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    if (type === "paragraphs") setResult(generateParagraphs(count));
    else if (type === "sentences") setResult(generateSentences(count));
    else setResult(generateWords(count));
  };

  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#2c2825] mb-1">Type</label>
          <select value={type} onChange={(e) => setType(e.target.value as typeof type)}
            className="px-3 py-2 text-[#2c2825]">
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#2c2825] mb-1">Count</label>
          <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-24 px-3 py-2 text-[#2c2825]" />
        </div>
        <button onClick={generate} className="btn-accent">Generate</button>
      </div>

      {result && (
        <div className="result-animate">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#2c2825]">Generated Text</span>
            <button onClick={copy} className="flex items-center gap-1 text-sm text-[#8a8078] hover:text-[#e07a5f] transition-colors">
              {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
            </button>
          </div>
          <div className="result-box max-h-96 overflow-y-auto">{result}</div>
        </div>
      )}
    </div>
  );
}
