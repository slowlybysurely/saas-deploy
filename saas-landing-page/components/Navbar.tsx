import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-[#4f46e5]">
          WriteFlow
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="#features" className="hover:text-zinc-900 transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</Link>
          <Link href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/login" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            Log In
          </Link>
          <Link
            href="/start"
            className="bg-[#4f46e5] text-white px-5 py-2 rounded-full hover:bg-[#4338ca] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
