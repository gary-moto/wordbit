"use client";

import { ReactNode } from "react";

export default function ToolLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-14">
      {children}
    </div>
  );
}
