"use client";

export function AdRails() {
  return (
    <>
      {/* LEFT RAIL (desktop only) */}
      <aside className="hidden 2xl:block fixed left-4 top-1/2 -translate-y-1/2 w-[180px] z-10" aria-label="Advertisement">
        <div
          className="border border-dashed border-gray-200 rounded-xl p-3 text-center"
          data-ad-slot="left-rail-1"
          style={{ minHeight: 600, minWidth: 160 }}
        >
          <p className="text-xs text-gray-300 uppercase tracking-wide mb-2">Ad</p>
          <div className="bg-gray-50 border border-gray-100 rounded-lg py-16 px-2">
            <p className="text-gray-300 text-xs">160×600</p>
          </div>
        </div>
      </aside>

      {/* RIGHT RAIL (desktop only) */}
      <aside className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 w-[180px] z-10" aria-label="Advertisement">
        <div className="space-y-4">
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
          <div
            className="border border-dashed border-gray-200 rounded-xl p-3 text-center"
            data-ad-slot="right-rail-2"
            style={{ minHeight: 250, minWidth: 160 }}
          >
            <p className="text-xs text-gray-300 uppercase tracking-wide mb-2">Ad</p>
            <div className="bg-gray-50 border border-gray-100 rounded-lg py-8 px-2">
              <p className="text-gray-300 text-xs">160×250</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
