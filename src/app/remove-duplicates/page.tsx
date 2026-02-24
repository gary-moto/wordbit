import { Metadata } from "next";
import RemoveDuplicates from "./RemoveDuplicates";
import ToolLayout from "@/components/ToolLayout";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines - Deduplicate Text Online",
  description: "Free online tool to remove duplicate lines from text. Paste your lines and get unique results instantly. Options to sort, trim, and toggle case sensitivity.",
  keywords: [
    "remove duplicates", "remove duplicate lines", "deduplicate text", "duplicate line remover",
    "remove duplicate text", "unique lines tool", "text deduplication", "remove repeated lines",
    "online duplicate remover", "free duplicate remover", "delete duplicate lines",
    "unique text filter", "line deduplicator", "remove duplicate entries",
    "text duplicate checker", "find duplicates in text", "eliminate duplicates",
    "sort and deduplicate", "unique lines online", "distinct lines tool",
    "remove duplicate words", "text cleanup tool", "clean text online",
    "duplicate text remover", "filter duplicate lines", "remove copies",
    "remove same lines", "deduplicate list", "unique list generator",
    "remove duplicates online free", "instant duplicate remover", "text dedup tool",
  ],
  alternates: { canonical: "https://wordbit.io/remove-duplicates" },
  openGraph: {
    title: "Remove Duplicate Lines - Deduplicate Text Online",
    description: "Remove duplicate lines from text instantly. Sort, trim, and toggle case sensitivity.",
    url: "https://wordbit.io/remove-duplicates",
  },
};

export default function RemoveDuplicatesPage() {
  return (
    <ToolLayout>
      <ToolSchema name="Remove Duplicate Lines" description="Remove duplicate lines from text with options to sort and trim." url="https://wordbit.io/remove-duplicates" />
      <div className="text-center mb-8">
        <h1 style={{ fontFamily: "var(--font-serif)" }} className="text-3xl md:text-4xl font-bold text-[#2c2825] mb-3">Remove Duplicate Lines</h1>
        <p className="text-[#8a8078] max-w-xl mx-auto">Paste your lines of text and remove duplicates instantly. Options to sort alphabetically and toggle case sensitivity.</p>
      </div>
      <RemoveDuplicates />
      <section className="mt-16">
        <div className="bg-[#fdf0eb] rounded-2xl p-6 md:p-8 border border-[#e8e2db]">
          <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-xl font-bold text-[#2c2825] mb-4 flex items-center gap-2"><span className="text-2xl">📖</span> How to Use</h2>
          <p className="text-[#8a8078] leading-relaxed">Paste your text with one item per line. Toggle options for sorting, case sensitivity, and trimming. Click Remove Duplicates to get unique lines.</p>
        </div>
      </section>
    </ToolLayout>
  );
}
