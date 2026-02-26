import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <span>© {new Date().getFullYear()} WordBit</span>
        <span className="text-gray-200">·</span>
        <a href="https://calcify.io" className="hover:text-[#ff6b6b] transition-colors">Calcify</a>
        <a href="https://quickpix.io" className="hover:text-[#ff6b6b] transition-colors">QuickPix</a>
        <a href="https://devpop.io" className="hover:text-[#ff6b6b] transition-colors">DevPop</a>
        <nav className="flex gap-4">
          <Link href="/about" className="hover:text-[#ff6b6b] transition-colors">About</Link>
          <Link href="/privacy-policy" className="hover:text-[#ff6b6b] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[#ff6b6b] transition-colors">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
