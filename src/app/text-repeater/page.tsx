import { Metadata } from "next";
import TextRepeater from "./TextRepeater";
import ToolLayout from "@/components/ToolLayout";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "Text Repeater - Repeat Text N Times Online",
  description: "Free online text repeater tool. Repeat any text multiple times with a custom separator. Perfect for testing, placeholder content, social media, and more. One-click copy.",
  keywords: [
    "text repeater", "repeat text", "text repeater online", "repeat text online",
    "repeat words", "text multiplier", "copy paste repeater", "string repeater",
    "repeat sentence", "text repeat tool", "free text repeater", "online text repeater",
    "repeat text N times", "multiply text", "duplicate text", "text loop generator",
    "emoji repeater", "word repeater", "character repeater", "line repeater",
    "repeat text with separator", "bulk text generator", "text filler generator",
    "repeat message", "spam text generator", "fill text tool", "mass text creator",
    "text repeater copy", "text repeater free", "instant text repeater",
    "text repeater no sign up", "repeat text generator", "text duplication tool",
  ],
  alternates: { canonical: "https://wordbit.io/text-repeater" },
  openGraph: {
    title: "Text Repeater - Repeat Text N Times Online",
    description: "Repeat any text multiple times with a custom separator. One-click copy.",
    url: "https://wordbit.io/text-repeater",
  },
};

export default function TextRepeaterPage() {
  return (
    <ToolLayout>
      <ToolSchema name="Text Repeater" description="Repeat any text N times with an optional separator." url="https://wordbit.io/text-repeater" />
      <div className="text-center mb-8">
        <h1 style={{ fontFamily: "var(--font-serif)" }} className="text-3xl md:text-4xl font-bold text-[#2c2825] mb-3">Text Repeater</h1>
        <p className="text-[#8a8078] max-w-xl mx-auto">Repeat any text multiple times with a custom separator. Great for testing, placeholders, and creative projects.</p>
      </div>
      <TextRepeater />
      <section className="mt-16">
        <div className="bg-[#fdf0eb] rounded-2xl p-6 md:p-8 border border-[#e8e2db]">
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-xl font-bold text-[#2c2825] mb-4 flex items-center gap-2"><span className="text-2xl">📖</span> How to Use</h2>
          <p className="text-[#8a8078] leading-relaxed">Enter your text, set the repeat count and separator (use \n for new line, \t for tab), then click Repeat. Copy the result with one click.</p>
        </div>
      </section>
    </ToolLayout>
  );
}
