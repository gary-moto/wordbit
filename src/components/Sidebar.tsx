"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Type, FileText, Shuffle, AlignLeft, Repeat, ListFilter, Home as HomeIcon,
  Menu, X, ChevronLeft, ChevronRight, Pen,
} from "lucide-react";
import { useState, useEffect } from "react";

const tools = [
  { href: "/", label: "Home", icon: HomeIcon, color: "text-amber-400" },
  { href: "/word-counter", label: "Word Counter", icon: FileText, color: "text-blue-400" },
  { href: "/case-converter", label: "Case Converter", icon: Shuffle, color: "text-emerald-400" },
  { href: "/lorem-ipsum", label: "Lorem Ipsum", icon: AlignLeft, color: "text-violet-400" },
  { href: "/character-counter", label: "Char Counter", icon: Type, color: "text-orange-400" },
  { href: "/text-repeater", label: "Text Repeater", icon: Repeat, color: "text-rose-400" },
  { href: "/remove-duplicates", label: "Remove Dupes", icon: ListFilter, color: "text-cyan-400" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#2c2825] shadow-lg h-14 flex items-center px-4">
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu" className="p-2 text-[#a09890] hover:text-white">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <Link href="/" className="flex items-center gap-2 ml-2">
          <div className="w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Pen className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg text-white" style={{ fontFamily: "var(--font-serif)" }}>WordBit</span>
        </Link>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-[#2c2825] shadow-xl z-40 transition-all duration-300 flex flex-col
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${collapsed ? "w-[68px]" : "w-56"}`}>

        {/* Logo */}
        <div className={`h-14 flex items-center border-b border-[#3d3633] flex-shrink-0 ${collapsed ? "justify-center px-2" : "px-4"}`}>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Pen className="w-4 h-4 text-white" />
            </div>
            {!collapsed && <span className="font-bold text-lg text-white" style={{ fontFamily: "var(--font-serif)" }}>WordBit</span>}
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isActive = pathname === tool.href;
            return (
              <Link key={tool.href} href={tool.href} title={tool.label}
                className={`flex items-center gap-3 rounded-lg transition-all ${
                  collapsed ? "justify-center px-2 py-2.5" : "px-3 py-2.5"
                } ${isActive
                  ? "bg-[#e07a5f]/15 text-[#f4a88a] font-medium"
                  : "text-[#a09890] hover:bg-[#3d3633] hover:text-[#d4cdc5]"
                }`}>
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-[#e07a5f]" : tool.color}`} />
                {!collapsed && <span className="text-sm">{tool.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Collapse toggle */}
        <button onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
          className="hidden lg:flex items-center justify-center h-10 border-t border-[#3d3633] text-[#6b6360] hover:text-[#a09890] transition-colors flex-shrink-0">
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </aside>

      <div className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${collapsed ? "w-[68px]" : "w-56"}`} />
    </>
  );
}
