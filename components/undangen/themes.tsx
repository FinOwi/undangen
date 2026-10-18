import { THEMES, themeDemoUrl } from "@/data/site"
import { Reveal } from "@/components/undangen/reveal"

/**
 * Galeri tema sebagai indeks editorial bernomor — bukan grid kartu generik.
 */
export function Themes() {
  return (
    <section id="tema" className="bg-ink-950 py-24 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs font-medium tracking-[0.3em] text-gold-400 uppercase">
                Koleksi Tema
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.02] font-bold tracking-tight text-balance text-cream-50">
                Satu <span className="text-gold-gradient italic">dunia.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-md text-base leading-relaxed text-cream-50/65 lg:pt-16">
              Setiap tema disutradarai sebagai pengalaman, bukan sekadar ganti
              warna. Klik dan rasakan demonya, persis seperti yang akan
              dilihat tamumu. Koleksi baru segera hadir.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-cream-50/12">
          {THEMES.map((t, i) => (
            <li key={t.slug} className="border-b border-cream-50/12">
              <Reveal delay={Math.min(i * 30, 180)}>
                <a
                  href={themeDemoUrl(t.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-5 py-5 transition-colors duration-200 hover:bg-gold-500/[0.06] sm:gap-8 sm:py-6"
                >
                  <span className="w-10 shrink-0 font-display text-sm text-gold-500/70 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-2xl font-bold text-cream-50 transition-transform duration-200 group-hover:translate-x-2 sm:text-3xl">
                      {t.name}
                      {t.badge && (
                        <span className="ml-3 align-middle font-sans text-[10px] font-semibold tracking-[0.25em] text-gold-400 uppercase">
                          {t.badge}
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-sm text-cream-50/50 italic">
                      {t.tagline}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-xl text-gold-500/60 transition-all duration-200 group-hover:translate-x-1 group-hover:text-gold-300"
                  >
                    →
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
