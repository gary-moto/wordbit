"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function TextRepeater() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(5);
  const [separator, setSeparator] = useState("\\n");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const sep = separator.replace(/\\n/g, "\n").replace(/\\t/g, "\t");
    setResult(Array(count).fill(text).join(sep));
  };

  const copy = () => { navigator.clipboard.writeText(result); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <div>
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#2c2825] mb-1">Text to Repeat</label>
          <textarea value={text} onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to repeat..."
            className="w-full h-24 p-5 resize-y text-[#2c2825] text-base" />
        </div>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-[#2c2825] mb-1">Repeat Count</label>
            <input type="number" min={1} max={10000} value={count}
              onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-28 px-3 py-2 text-[#2c2825]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2c2825] mb-1">Separator</label>
            <input type="text" value={separator} onChange={(e) => setSeparator(e.target.value)}
              placeholder="e.g. \n or , or space"
              className="w-40 px-3 py-2 text-[#2c2825]" />
          </div>
          <div className="flex items-end">
            <button onClick={generate} disabled={!text} className="btn-accent">Repeat</button>
          </div>
        </div>
      </div>

      {result && (
        <div className="result-animate">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#2c2825]">Result ({result.length} characters)</span>
            <button onClick={copy} className="flex items-center gap-1 text-sm text-[#8a8078] hover:text-[#e07a5f] transition-colors">
              {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
            </button>
          </div>
          <div className="result-box max-h-64 overflow-y-auto">{result}</div>
        </div>
      )}
    </div>
  );
}
