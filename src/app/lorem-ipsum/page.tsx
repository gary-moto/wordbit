import { Metadata } from "next";
import LoremIpsumGenerator from "./LoremIpsumGenerator";
import ToolLayout from "@/components/ToolLayout";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator - Generate Placeholder Text",
  description: "Free online Lorem Ipsum generator. Generate placeholder text in paragraphs, sentences, or words. Configurable count with one-click copy. Perfect for designers and developers.",
  keywords: [
    "lorem ipsum generator", "lorem ipsum", "placeholder text generator",
    "dummy text generator", "lipsum generator", "filler text generator",
    "random text generator", "lorem ipsum copy paste", "generate lorem ipsum",
    "lorem ipsum paragraphs", "lorem ipsum sentences", "lorem ipsum words",
    "design placeholder text", "web design dummy text", "mockup text generator",
    "free lorem ipsum", "online lorem ipsum generator", "custom lorem ipsum",
    "lorem ipsum online", "placeholder text", "blind text generator",
    "sample text generator", "lorem ipsum dolor sit amet", "lipsum",
    "text placeholder", "dummy content generator", "wireframe text",
    "prototype text generator", "UI placeholder text", "layout filler text",
    "lorem ipsum tool", "generate dummy text", "copy lorem ipsum",
  ],
  alternates: { canonical: "https://wordbit.io/lorem-ipsum" },
  openGraph: {
    title: "Lorem Ipsum Generator - Generate Placeholder Text",
    description: "Generate placeholder text in paragraphs, sentences, or words with one-click copy.",
    url: "https://wordbit.io/lorem-ipsum",
  },
};

export default function LoremIpsumPage() {
  return (
    <ToolLayout>
      <ToolSchema name="Lorem Ipsum Generator" description="Generate placeholder text in paragraphs, sentences, or words." url="https://wordbit.io/lorem-ipsum" />
      <div className="text-center mb-8">
        <h1 style={{ fontFamily: "var(--font-serif)" }} className="text-3xl md:text-4xl font-bold text-[#2c2825] mb-3">Lorem Ipsum Generator</h1>
        <p className="text-[#8a8078] max-w-xl mx-auto">Generate placeholder text for your designs, mockups, and layouts. Choose paragraphs, sentences, or words.</p>
      </div>
      <LoremIpsumGenerator />
      <section className="mt-16">
        <div className="bg-[#fdf0eb] rounded-2xl p-6 md:p-8 border border-[#e8e2db]">
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-xl font-bold text-[#2c2825] mb-4 flex items-center gap-2"><span className="text-2xl">📖</span> How to Use</h2>
          <p className="text-[#8a8078] leading-relaxed">Select the type (paragraphs, sentences, or words), set the count, and click Generate. Use the Copy button to copy the text to your clipboard.</p>
        </div>
      </section>
    </ToolLayout>
  );
}
