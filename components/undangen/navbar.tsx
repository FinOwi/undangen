import { Button } from "@/components/ui/button"
import { WA_LINK } from "@/data/site"

const LINKS = [
  { href: "#tema", label: "Tema" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#cara-pesan", label: "Cara Pesan" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream-50/10 bg-ink-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5" aria-label="Undangen">
          <span className="flex h-9 w-9 items-center justify-center bg-gold-500 font-display text-lg font-bold text-ink-950">
            U
          </span>
          <span className="font-display text-xl font-bold tracking-wide text-cream-50">
            Undangen
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-cream-50/65 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button
          size="sm"
          className="bg-gold-500 font-semibold text-ink-950 hover:bg-gold-400"
          render={
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Pesan via WhatsApp
            </a>
          }
        />
      </div>
    </header>
  )
}
