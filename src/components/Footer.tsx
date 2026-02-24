import Link from "next/link";
import { Pen } from "lucide-react";

const footerLinks = [
  { href: "/word-counter", label: "Word Counter" },
  { href: "/case-converter", label: "Case Converter" },
  { href: "/lorem-ipsum", label: "Lorem Ipsum" },
  { href: "/character-counter", label: "Characters" },
  { href: "/text-repeater", label: "Repeater" },
  { href: "/remove-duplicates", label: "Duplicates" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#e8e2db] bg-[#f5f0ea]">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#e07a5f] rounded-lg flex items-center justify-center">
              <Pen className="w-3.5 h-3.5 text-white" />
            </div>
            <span style={{ fontFamily: "var(--font-serif)" }} className="font-semibold text-[#2c2825]">WordBit</span>
            <span className="text-sm text-[#8a8078]">— Write better, faster</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#8a8078] hover:text-[#e07a5f] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-[#e8e2db] flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#8a8078]">
          <span>© {new Date().getFullYear()} WordBit. All rights reserved.</span>
          <nav className="flex gap-4">
            <Link href="/about" className="hover:text-[#e07a5f] transition-colors">About</Link>
            <Link href="/privacy-policy" className="hover:text-[#e07a5f] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#e07a5f] transition-colors">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
