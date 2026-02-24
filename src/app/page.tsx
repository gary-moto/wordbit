import Link from "next/link";
import { FileText, Shuffle, AlignLeft, Type, Repeat, ListFilter, ArrowRight } from "lucide-react";

const tools = [
  {
    href: "/word-counter", title: "Word Counter",
    description: "Count words, characters, sentences, paragraphs, and estimate reading time — all in real time.",
    icon: FileText, emoji: "📝",
  },
  {
    href: "/case-converter", title: "Case Converter",
    description: "Transform text between UPPER, lower, Title, Sentence, camelCase, snake_case, and kebab-case.",
    icon: Shuffle, emoji: "🔄",
  },
  {
    href: "/lorem-ipsum", title: "Lorem Ipsum Generator",
    description: "Generate placeholder text in paragraphs, sentences, or words with one-click copy.",
    icon: AlignLeft, emoji: "📖",
  },
  {
    href: "/character-counter", title: "Character Counter",
    description: "Detailed character breakdown with social media limits — letters, digits, spaces, special chars.",
    icon: Type, emoji: "🔢",
  },
  {
    href: "/text-repeater", title: "Text Repeater",
    description: "Repeat any text N times with custom separators. Perfect for testing and placeholder content.",
    icon: Repeat, emoji: "🔁",
  },
  {
    href: "/remove-duplicates", title: "Remove Duplicates",
    description: "Deduplicate lines instantly with sorting, trimming, and whitespace cleanup options.",
    icon: ListFilter, emoji: "✂️",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 text-center px-4">
        <p className="text-[#e07a5f] font-medium text-sm tracking-wide uppercase mb-4">Free tools for writers & creators</p>
        <h1 style={{ fontFamily: "var(--font-serif)" }} className="text-5xl md:text-7xl font-bold text-[#2c2825] mb-6 leading-tight">
          Your words,<br />
          <span className="text-[#e07a5f] italic">refined.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8a8078] max-w-xl mx-auto leading-relaxed">
          Beautiful, fast text utilities that run entirely in your browser. No signup, no tracking, no nonsense.
        </p>
      </section>

      {/* Tool Grid */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool, i) => (
            <Link key={tool.href} href={tool.href}
              className={`tool-card group block p-6 bg-white rounded-2xl border border-[#e8e2db] hover:border-[#e07a5f]/30 ${
                i % 3 === 1 ? "md:translate-y-4" : ""
              }`}>
              <div className="text-3xl mb-4">{tool.emoji}</div>
              <h2 style={{ fontFamily: "var(--font-serif)" }}
                className="text-xl font-semibold text-[#2c2825] mb-2 group-hover:text-[#e07a5f] transition-colors flex items-center gap-2">
                {tool.title}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h2>
              <p className="text-[#8a8078] text-sm leading-relaxed">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why section */}
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="bg-[#2c2825] rounded-3xl p-8 md:p-14 text-center">
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-3xl font-bold text-white mb-10">
            Why writers love WordBit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: "⚡", title: "Instant", desc: "Results update as you type. No waiting, no reloads." },
              { emoji: "🔒", title: "Private", desc: "Everything runs locally. Your text never leaves your device." },
              { emoji: "📱", title: "Everywhere", desc: "Desktop, tablet, phone — it just works." },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#a09890]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
