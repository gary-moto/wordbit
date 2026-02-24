import { Metadata } from "next";
import CaseConverter from "./CaseConverter";
import ToolLayout from "@/components/ToolLayout";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "Case Converter - Change Text Case Online",
  description: "Free online case converter. Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and kebab-case instantly.",
  keywords: [
    "case converter", "text case converter", "change text case", "uppercase converter",
    "lowercase converter", "title case converter", "sentence case converter",
    "camelCase converter", "snake_case converter", "kebab-case converter",
    "text case changer", "convert to uppercase", "convert to lowercase",
    "capitalize text", "text capitalization tool", "online case converter",
    "free case converter", "case change tool", "text transformer",
    "string case converter", "programming case converter", "CSS case converter",
    "variable name converter", "text formatting tool", "case converter online free",
    "toggle case", "swap case", "proper case converter", "all caps converter",
    "small caps converter", "case converter no sign up", "instant case converter",
  ],
  alternates: { canonical: "https://wordbit.io/case-converter" },
  openGraph: {
    title: "Case Converter - Change Text Case Online",
    description: "Convert text to UPPERCASE, lowercase, Title Case, camelCase, snake_case and more.",
    url: "https://wordbit.io/case-converter",
  },
};

export default function CaseConverterPage() {
  return (
    <ToolLayout>
      <ToolSchema name="Case Converter" description="Convert text between different cases: UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case." url="https://wordbit.io/case-converter" />
      <div className="text-center mb-8">
        <h1 style={{ fontFamily: "var(--font-serif)" }} className="text-3xl md:text-4xl font-bold text-[#2c2825] mb-3">Case Converter</h1>
        <p className="text-[#8a8078] max-w-xl mx-auto">Convert your text to any case format instantly. UPPERCASE, lowercase, Title Case, camelCase, snake_case, and more.</p>
      </div>
      <CaseConverter />
      <section className="mt-16">
        <div className="bg-[#fdf0eb] rounded-2xl p-6 md:p-8 border border-[#e8e2db]">
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-xl font-bold text-[#2c2825] mb-4 flex items-center gap-2"><span className="text-2xl">📖</span> How to Use</h2>
          <p className="text-[#8a8078] leading-relaxed">Type or paste your text, then click any conversion button. The result appears below with a copy button for easy use.</p>
        </div>
      </section>
    </ToolLayout>
  );
}
