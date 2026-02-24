import { Metadata } from "next";
import WordCounter from "./WordCounter";
import ToolLayout from "@/components/ToolLayout";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "Word Counter - Count Words, Characters & Sentences",
  description: "Free online word counter tool. Count words, characters, sentences, paragraphs, and estimate reading time in real-time. Perfect for essays, blog posts, and social media.",
  keywords: [
    "word counter", "word count", "character counter", "count words online",
    "word counter tool", "free word counter", "online word counter",
    "sentence counter", "paragraph counter", "reading time calculator",
    "word count checker", "essay word counter", "blog word counter",
    "how many words", "text word count", "count characters",
    "words in text", "word frequency counter", "writing word count",
    "article word counter", "document word counter", "word count online free",
    "character count tool", "text analyzer", "text statistics",
    "content word counter", "SEO word counter", "word count for essay",
    "speaking time calculator", "words per minute", "text length checker",
    "word counter no sign up", "instant word counter",
  ],
  alternates: { canonical: "https://wordbit.io/word-counter" },
  openGraph: {
    title: "Word Counter - Count Words, Characters & Sentences",
    description: "Count words, characters, sentences, paragraphs and estimate reading time in real-time.",
    url: "https://wordbit.io/word-counter",
  },
};

export default function WordCounterPage() {
  return (
    <ToolLayout>
      <ToolSchema name="Word Counter" description="Count words, characters, sentences, paragraphs and estimate reading time." url="https://wordbit.io/word-counter" faqs={[
        { question: "How is reading time calculated?", answer: "Reading time is based on an average reading speed of 200 words per minute. Speaking time uses 130 words per minute." },
        { question: "How are paragraphs counted?", answer: "Paragraphs are counted by blocks of text separated by blank lines." },
      ]} />
      <div className="text-center mb-10">
        <h1 style={{ fontFamily: "var(--font-serif)" }} className="text-3xl md:text-4xl font-bold text-[#2c2825] mb-3">Word Counter</h1>
        <p className="text-[#8a8078] max-w-xl mx-auto">Count words, characters, sentences, paragraphs, and estimate reading time — all in real-time as you type.</p>
      </div>
      <WordCounter />
      <section className="mt-16">
        <div className="bg-[#fdf0eb] rounded-2xl p-6 md:p-8 border border-[#e8e2db]">
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-xl font-bold text-[#2c2825] mb-4 flex items-center gap-2"><span className="text-2xl">📖</span> How to Use</h2>
          <p className="text-[#8a8078] leading-relaxed">Simply type or paste your text in the box above. The word count, character count, sentence count, paragraph count, and estimated reading/speaking time will update instantly as you type.</p>
        </div>
      </section>
      <section className="mt-8 mb-8">
        <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-xl font-bold text-[#2c2825] mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 border border-[#e8e2db]">
            <h3 className="font-semibold text-[#2c2825] mb-2">❓ How is reading time calculated?</h3>
            <p className="text-[#8a8078] text-sm">Reading time is based on an average reading speed of 200 words per minute. Speaking time uses 130 words per minute.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#e8e2db]">
            <h3 className="font-semibold text-[#2c2825] mb-2">❓ How are paragraphs counted?</h3>
            <p className="text-[#8a8078] text-sm">Paragraphs are counted by blocks of text separated by blank lines.</p>
          </div>
        </div>
      </section>
    </ToolLayout>
  );
}
