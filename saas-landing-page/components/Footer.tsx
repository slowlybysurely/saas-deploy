import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold text-xl text-[#4f46e5]">
            WriteFlow
          </Link>
          <p className="text-xs text-zinc-500">
            © 2024 WriteFlow AI. All rights reserved.
          </p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-zinc-500">
          <Link href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">Contact</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</Link>
        </nav>
      </div>
    </footer>
  );
}
