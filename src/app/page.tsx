import Link from "next/link";
import { FileText, Shuffle, AlignLeft, Type, Repeat, ListFilter, ArrowRight } from "lucide-react";

const tools = [
  {
    href: "/word-counter", title: "Word Counter",
    description: "Count words, characters, sentences, paragraphs, and estimate reading time.",
    icon: FileText,
  },
  {
    href: "/case-converter", title: "Case Converter",
    description: "Transform text between UPPER, lower, Title, Sentence, camelCase, and more.",
    icon: Shuffle,
  },
  {
    href: "/lorem-ipsum", title: "Lorem Ipsum",
    description: "Generate placeholder text in paragraphs, sentences, or words.",
    icon: AlignLeft,
  },
  {
    href: "/character-counter", title: "Character Counter",
    description: "Detailed character breakdown with social media limits.",
    icon: Type,
  },
  {
    href: "/text-repeater", title: "Text Repeater",
    description: "Repeat any text N times with custom separators.",
    icon: Repeat,
  },
  {
    href: "/remove-duplicates", title: "Remove Duplicates",
    description: "Deduplicate lines instantly with sorting and trimming options.",
    icon: ListFilter,
  },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Hero */}
      <section className="pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#111] tracking-tight mb-4">
          Text tools that<br />
          <span className="text-[#ff6b6b]">just work.</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-md mx-auto">
          Fast, private, no signup. Everything runs in your browser.
        </p>
      </section>

      {/* Tool Cards */}
      <section className="pb-24 grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link key={tool.href} href={tool.href}
              className="group block p-6 rounded-2xl border border-gray-100 hover:border-[#ff6b6b]/30 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-[#ff6b6b]/10 transition-colors">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#ff6b6b] transition-colors" />
              </div>
              <h2 className="text-lg font-semibold text-[#111] mb-1 flex items-center gap-2">
                {tool.title}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#ff6b6b]" />
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">{tool.description}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
