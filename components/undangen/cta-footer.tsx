import { Button } from "@/components/ui/button"
import { WA_LINK } from "@/data/site"
import { Reveal } from "@/components/undangen/reveal"

export function FinalCta() {
  return (
    <section className="relative bg-ink-950 py-28 sm:py-40">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.3em] text-gold-400 uppercase">
            Mulai hari ini
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1] font-bold tracking-tight text-balance text-cream-50">
            Momen bahagiamu layak <span className="text-gold-gradient italic">dirayakan</span> dengan indah.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream-50/60">
            Ceritakan acaramu hari ini — biarkan kami yang menyulapnya jadi
            undangan digital yang bikin tamu terkesan.
          </p>
          <Button
            size="lg"
            className="mt-10 bg-gold-500 px-9 py-6 text-base font-semibold text-ink-950 hover:bg-gold-400"
            render={
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                Chat WhatsApp Sekarang →
              </a>
            }
          />
          <p className="mt-6 text-xs tracking-wide text-cream-50/45">
            Respon cepat • Tanpa komitmen • Bayar setelah cocok
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-cream-50/10 bg-ink-950 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-7 px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2.5" aria-label="Undangen">
          <span className="flex h-9 w-9 items-center justify-center bg-gold-500 font-display text-lg font-bold text-ink-950">
            U
          </span>
          <span className="font-display text-xl font-bold tracking-wide text-cream-50">
            Undangen
          </span>
        </a>
        <p className="max-w-md text-center text-sm leading-relaxed text-cream-50/50">
          Undangan digital premium — pernikahan, aqiqah, khitanan, ulang
          tahun, wisuda & korporat.
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-cream-50/50"
          aria-label="Navigasi footer"
        >
          {[
            ["#tema", "Tema"],
            ["#harga", "Harga"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="transition-colors hover:text-gold-300">
              {label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gold-300"
          >
            WhatsApp
          </a>
        </nav>
        <p className="text-xs text-cream-50/40">
          © 2026 Undangen by FinOwi Id • undangen.my.id
        </p>
      </div>
    </footer>
  )
}
