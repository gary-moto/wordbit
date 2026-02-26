"use client";

import { ReactNode } from "react";

export default function ToolLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {/* Main Content — centered single column */}
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
        {children}
      </div>

      {/* AD SLOT — Right rail only, hidden on mobile/tablet */}
      <aside className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 w-[180px]" aria-label="Advertisement">
        <div
          className="border border-dashed border-gray-200 rounded-xl p-3 text-center"
          data-ad-slot="right-rail-1"
          style={{ minHeight: 600, minWidth: 160 }}
        >
          <p className="text-xs text-gray-300 uppercase tracking-wide mb-2">Ad</p>
          <div className="bg-gray-50 border border-gray-100 rounded-lg py-16 px-2">
            <p className="text-gray-300 text-xs">160×600</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
