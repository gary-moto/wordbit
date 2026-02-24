import { Metadata } from "next";
import CharacterCounter from "./CharacterCounter";
import ToolLayout from "@/components/ToolLayout";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "Character Counter - Count Characters, Letters & Digits",
  description: "Free online character counter with detailed breakdown: letters, digits, spaces, special characters. Includes social media character limits for Twitter, Instagram, LinkedIn, and more.",
  keywords: [
    "character counter", "character count", "letter counter", "count characters online",
    "character counter tool", "text character counter", "online character counter",
    "twitter character counter", "instagram character counter", "social media character limit",
    "count letters", "count digits", "count spaces", "special character counter",
    "character limit checker", "text length counter", "string length counter",
    "character count online free", "linkedin character limit", "youtube title limit",
    "facebook post limit", "tiktok caption limit", "SEO character counter",
    "meta description character counter", "meta title character limit",
    "character counter with spaces", "character counter without spaces",
    "free character counter", "instant character counter", "typing character counter",
    "real time character counter", "character counter no sign up", "text stats tool",
  ],
  alternates: { canonical: "https://wordbit.io/character-counter" },
  openGraph: {
    title: "Character Counter - Count Characters, Letters & Digits",
    description: "Detailed character breakdown with social media limits for Twitter, Instagram, LinkedIn and more.",
    url: "https://wordbit.io/character-counter",
  },
};

export default function CharacterCounterPage() {
  return (
    <ToolLayout>
      <ToolSchema name="Character Counter" description="Count characters, letters, digits, spaces and check social media limits." url="https://wordbit.io/character-counter" />
      <div className="text-center mb-8">
        <h1 style={{ fontFamily: "var(--font-serif)" }} className="text-3xl md:text-4xl font-bold text-[#2c2825] mb-3">Character Counter</h1>
        <p className="text-[#8a8078] max-w-xl mx-auto">Get a detailed breakdown of your text: letters, digits, spaces, and special characters. Check social media character limits.</p>
      </div>
      <CharacterCounter />
      <section className="mt-16">
        <div className="bg-[#fdf0eb] rounded-2xl p-6 md:p-8 border border-[#e8e2db]">
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-xl font-bold text-[#2c2825] mb-4 flex items-center gap-2"><span className="text-2xl">📖</span> How to Use</h2>
          <p className="text-[#8a8078] leading-relaxed">Type or paste your text above. The character breakdown updates in real-time. Scroll down to see how your text fits within popular social media character limits.</p>
        </div>
      </section>
    </ToolLayout>
  );
}
