import { Button } from "@/components/ui/button"
import { WA_LINK } from "@/data/site"
import { Reveal } from "@/components/undangen/reveal"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    name: "Basic",
    price: "Rp49rb",
    desc: "Untuk acara intim yang berkesan.",
    features: [
      "10 foto galeri",
      "1 tema pilihan",
      "RSVP & ucapan",
      "Countdown & peta lokasi",
      "Link nama tamu",
      "Aktif selamanya",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "Rp99rb",
    desc: "Paling dipilih pasangan.",
    features: [
      "20 foto galeri",
      "Semua fitur Basic",
      "Amplop digital",
      "Musik latar",
      "Dresscode & live streaming",
      "Aktif selamanya",
    ],
    highlight: true,
  },
  {
    name: "Eksklusif",
    price: "Rp199rb",
    desc: "Untuk momen sekali seumur hidup.",
    features: [
      "30 foto galeri",
      "Semua fitur Premium",
      "Tema interaktif & video",
      "Prioritas pengerjaan",
      "Revisi lebih fleksibel",
      "Aktif selamanya",
    ],
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="harga" className="bg-ink-950 py-24 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.3em] text-gold-400 uppercase">
            Harga
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.02] font-bold tracking-tight text-balance text-cream-50">
            Sekali bayar, <span className="text-gold-gradient italic">milik selamanya.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-50/60">
            Tanpa langganan, tanpa biaya perpanjangan. Dibuatkan dulu — bayar
            setelah kamu cocok.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px bg-cream-50/12 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={cn(
                "relative flex flex-col bg-ink-950 p-8 sm:p-10",
                p.highlight && "bg-ink-900"
              )}
            >
              <Reveal delay={i * 90} className="flex flex-1 flex-col">
                {p.highlight && (
                  <p className="mb-5 text-[10px] font-semibold tracking-[0.3em] text-gold-400 uppercase">
                    Paling Dipilih
                  </p>
                )}
                <h3 className="font-display text-2xl font-bold text-cream-50">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-cream-50/50 italic">{p.desc}</p>
                <p className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-bold text-gold-300">
                    {p.price}
                  </span>
                  <span className="text-xs tracking-wide text-cream-50/50">
                    sekali bayar
                  </span>
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-cream-50/12 pt-7">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-cream-50/75"
                    >
                      <span aria-hidden className="mt-[7px] h-1 w-4 shrink-0 bg-gold-500/70" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "mt-9 w-full font-semibold",
                    p.highlight
                      ? "bg-gold-500 text-ink-950 hover:bg-gold-400"
                      : "border border-gold-500/35 bg-transparent text-gold-300 hover:bg-gold-500 hover:text-ink-950"
                  )}
                  render={
                    <a
                      href={`${WA_LINK}%20Saya%20tertarik%20paket%20${p.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pilih {p.name}
                    </a>
                  }
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
