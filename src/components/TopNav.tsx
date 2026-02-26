"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const tools = [
  { href: "/word-counter", label: "Word Counter" },
  { href: "/case-converter", label: "Case Converter" },
  { href: "/lorem-ipsum", label: "Lorem Ipsum" },
  { href: "/character-counter", label: "Char Counter" },
  { href: "/text-repeater", label: "Repeater" },
  { href: "/remove-duplicates", label: "Remove Dupes" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 bg-[#ff6b6b] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="font-semibold text-[#111] text-lg tracking-tight">WordBit</span>
        </Link>

        {/* Desktop tabs */}
        <nav className="hidden md:flex items-center gap-1 nav-tabs overflow-x-auto ml-8">
          {tools.map((tool) => {
            const isActive = pathname === tool.href;
            return (
              <Link key={tool.href} href={tool.href}
                className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-[#ff6b6b] text-white font-medium"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}>
                {tool.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-gray-500 hover:text-gray-900" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {tools.map((tool) => {
            const isActive = pathname === tool.href;
            return (
              <Link key={tool.href} href={tool.href} onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm ${
                  isActive ? "bg-[#ff6b6b]/10 text-[#ff6b6b] font-medium" : "text-gray-600 hover:bg-gray-50"
                }`}>
                {tool.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
