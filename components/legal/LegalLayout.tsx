import Link from 'next/link';
import Image from 'next/image';

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="Comms Connect" width={120} height={30} className="h-6 w-auto" />
          </Link>
          <Link
            href="/#shop"
            className="px-4 py-1.5 bg-white text-black text-[13px] font-medium rounded-full hover:bg-white/90 transition-colors duration-300"
          >
            Zurück zum Shop
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-10">{title}</h1>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted/90 leading-relaxed">
            {children}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60">
          <span>&copy; {new Date().getFullYear()} Comms Connect GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
            <Link href="/widerrufsbelehrung" className="hover:text-white transition-colors">Widerrufsbelehrung</Link>
            <Link href="/versand" className="hover:text-white transition-colors">Versand & Zahlung</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
