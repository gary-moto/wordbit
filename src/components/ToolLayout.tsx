"use client";

import { ReactNode } from "react";

export default function ToolLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {/* AD SLOT - LEFT RAIL */}
      <aside className="hidden 2xl:block fixed left-[calc(50%-38rem)] top-1/2 -translate-y-1/2 w-40" aria-label="Advertisement">
        <div
          className="bg-gradient-to-b from-[#f0ebe5] to-[#faf8f5] border-2 border-dashed border-[#e8e2db] rounded-xl p-3 text-center"
          data-ad-slot="left-rail-1"
          style={{ minHeight: 600, minWidth: 160 }}
        >
          <p className="text-xs text-[#a09890] uppercase tracking-wide font-medium mb-2">Ad</p>
          <div className="bg-white border border-[#e8e2db] rounded-lg py-16 px-2">
            <p className="text-[#c4bdb5] text-xs">160×600</p>
          </div>
        </div>
      </aside>

      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {children}
      </div>

      {/* AD SLOT - RIGHT RAIL */}
      <aside className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 w-72" aria-label="Advertisement">
        <div className="space-y-6">
          <div
            className="bg-gradient-to-b from-[#f0ebe5] to-[#faf8f5] border-2 border-dashed border-[#e8e2db] rounded-xl p-4 text-center"
            data-ad-slot="right-rail-1"
            style={{ minHeight: 250, minWidth: 300 }}
          >
            <p className="text-xs text-[#a09890] uppercase tracking-wide font-medium mb-2">Ad</p>
            <div className="bg-white border border-[#e8e2db] rounded-lg py-12 px-4">
              <p className="text-[#c4bdb5] text-xs">300×250</p>
              <p className="text-[#d4cdc5] text-xs mt-1">Sidebar Ad</p>
            </div>
          </div>
          <div
            className="bg-gradient-to-b from-[#f0ebe5] to-[#faf8f5] border-2 border-dashed border-[#e8e2db] rounded-xl p-4 text-center"
            data-ad-slot="right-rail-2"
            style={{ minHeight: 250, minWidth: 300 }}
          >
            <p className="text-xs text-[#a09890] uppercase tracking-wide font-medium mb-2">Ad</p>
            <div className="bg-white border border-[#e8e2db] rounded-lg py-12 px-4">
              <p className="text-[#c4bdb5] text-xs">300×250</p>
              <p className="text-[#d4cdc5] text-xs mt-1">Sidebar Ad</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
