import { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "About WordBit",
  description: "WordBit offers free online text tools — word counter, case converter, lorem ipsum generator, and more. Fast, private, runs in your browser.",
  alternates: { canonical: "https://wordbit.io/about" },
};

export default function AboutPage() {
  return (
    <ToolLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2c2825] mb-4">About WordBit</h1>

        <div className="space-y-6 text-[#5a524b]">
          <p className="text-lg">WordBit is a collection of free, fast text tools that run entirely in your browser. No sign-ups. No uploads. No data stored.</p>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-3">Our Tools</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Word Counter</strong> — Count words, characters, sentences, and paragraphs in real-time</li>
              <li><strong>Case Converter</strong> — Transform text to UPPERCASE, lowercase, Title Case, and more</li>
              <li><strong>Lorem Ipsum Generator</strong> — Generate placeholder text for your designs</li>
              <li><strong>Character Counter</strong> — Detailed character breakdown with social media limits</li>
              <li><strong>Text Repeater</strong> — Repeat text with custom separators</li>
              <li><strong>Remove Duplicates</strong> — Remove duplicate lines with sorting options</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-3">Why WordBit?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>100% Private</strong> — Your text never leaves your device</li>
              <li><strong>Instant</strong> — No loading, no waiting, everything processes in real-time</li>
              <li><strong>Free Forever</strong> — No premium plans, no feature gates</li>
              <li><strong>No Account Required</strong> — Just open and use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-3">Contact</h2>
            <p>Have feedback or suggestions? Reach us at hello@wordbit.io.</p>
          </section>
        </div>
      </div>
    </ToolLayout>
  );
}
