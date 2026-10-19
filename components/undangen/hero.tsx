import { Button } from "@/components/ui/button"
import { WA_LINK, themeDemoUrl } from "@/data/site"
import { Reveal } from "@/components/undangen/reveal"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-16">
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-4 pt-20 pb-24 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pt-28">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.3em] text-gold-400 uppercase">
            Undangen — “undangan” dalam bahasa Karo
          </p>
          <h1 className="mt-6 font-display text-[clamp(3.2rem,9vw,6.5rem)] leading-[0.98] font-bold tracking-tight text-balance text-cream-50">
            Undangan yang
            <br />
            <span className="text-gold-gradient italic">bercerita.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream-50/70 sm:text-lg">
            Undangan digital premium untuk pernikahan dan setiap momen
            berharga — dirancang khusus untukmu, dibuatkan dulu, bayar setelah
            cocok.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-gold-500 px-7 font-semibold text-ink-950 hover:bg-gold-400"
              render={<a href="#tema">Jelajahi Tema</a>}
            />
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide text-cream-50/80 underline decoration-gold-500/60 decoration-2 underline-offset-8 transition-colors hover:text-gold-300"
            >
              Pesan via WhatsApp
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-cream-50/10 pt-7">
            {[
              { value: "7", label: "Tema eksklusif" },
              { value: "∞", label: "Aktif selamanya" },
              { value: "Rp0", label: "Di muka*" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-bold text-gold-300">
                  {s.value}
                </dd>
                <dd className="mt-1.5 text-xs tracking-wide text-cream-50/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-[11px] text-cream-50/45">
            *Dibuatkan dulu — bayar setelah kamu jatuh cinta dengan hasilnya.
          </p>
        </Reveal>

        {/* Sampul undangan — personal, seperti aslinya */}
        <Reveal delay={150} className="lg:pb-2">
          <figure className="relative mx-auto w-full max-w-sm">
            <div className="border border-gold-500/35 bg-ink-900 px-8 py-10 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.8)]">
              <div
                aria-hidden
                className="h-[10px] w-full"
                style={{
                  background:
                    "linear-gradient(to bottom, #B8862F 0 2px, #17110F 2px 6px, #F1E8D6 6px 8px, #17110F 8px 10px)",
                }}
              />
              <p className="mt-7 text-center text-[11px] tracking-[0.35em] text-gold-400 uppercase">
                Kepada Yth.
              </p>
              <p className="mt-2 text-center text-[11px] tracking-[0.2em] text-cream-50/50 uppercase">
                Bapak / Ibu / Saudara/i
              </p>
              <p className="mt-5 text-center font-display text-4xl font-bold text-gold-gradient italic">
                Tamu Undangan
              </p>
              <p className="mx-auto mt-5 max-w-[17rem] text-center text-xs leading-relaxed text-cream-50/55">
                Setiap tamu menerima undangan yang menyebut namanya — seperti
                undangan fisik yang ditulis tangan.
              </p>
              <div className="mx-auto mt-7 flex max-w-[13rem] items-center justify-center gap-2 border border-gold-500/30 bg-gold-500/10 px-4 py-2.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
                <span className="text-xs font-medium tracking-wide text-gold-200">
                  Buka undangan
                </span>
              </div>
              <div
                aria-hidden
                className="mt-7 h-[10px] w-full"
                style={{
                  background:
                    "linear-gradient(to top, #B8862F 0 2px, #17110F 2px 6px, #F1E8D6 6px 8px, #17110F 8px 10px)",
                }}
              />
            </div>
            <figcaption className="mt-5 text-center">
              <a
                href={themeDemoUrl("sinematik-nusantara")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-[0.2em] text-gold-300 uppercase underline decoration-gold-500/40 underline-offset-8 transition-colors hover:text-gold-200"
              >
                Rasakan demo live →
              </a>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
