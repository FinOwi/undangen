import { Reveal } from "@/components/undangen/reveal"

const FITUR = [
  {
    no: "01",
    title: "Link nama tamu",
    desc: "Setiap tamu disapa namanya — seperti undangan tulis tangan.",
    icon: (
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
  },
  {
    no: "02",
    title: "Musik latar",
    desc: "Lagu pilihanmu mengalun begitu undangan dibuka.",
    icon: (
      <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    ),
  },
  {
    no: "03",
    title: "Video prewedding",
    desc: "Sematkan video YouTube atau file langsung di undangan.",
    icon: (
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 2c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33ZM9.75 15.02V8.48l5.75 3.27-5.75 3.27Z" />
    ),
  },
  {
    no: "04",
    title: "Amplop digital",
    desc: "Rekening & kado fisik, tombol salin sekali sentuh.",
    icon: (
      <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7c-1.66 0-4 .5-4 3 0 1.93 2.34 3 4 3s4-1.07 4-3c0-2.5-2.34-3-4-3ZM2 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2" />
    ),
  },
  {
    no: "05",
    title: "RSVP & ucapan",
    desc: "Konfirmasi kehadiran plus dinding ucapan dari tamu.",
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    ),
  },
  {
    no: "06",
    title: "Aktif selamanya",
    desc: "Sekali bayar, online selamanya — tanpa perpanjangan.",
    icon: (
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    ),
  },
]

/** Kelengkapan undangan — ATM dari "kesan mahal = alur lengkap" ala kompetitor. */
export function Fitur() {
  return (
    <section className="bg-cream-50 py-24 text-ink-950 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.3em] text-gold-700 uppercase">
            Kelengkapan
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.02] font-bold tracking-tight text-balance">
            Semua yang tamumu <span className="italic text-gold-700">butuhkan.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {FITUR.map((f, i) => (
            <div key={f.no} className="border-t border-ink-950/15 py-7">
              <Reveal delay={(i % 3) * 90}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 text-gold-700"
                  aria-hidden
                >
                  {f.icon}
                </svg>
                <h3 className="mt-4 font-display text-xl font-bold">
                  <span className="mr-2 text-sm font-sans font-semibold tracking-[0.2em] text-gold-700/70">
                    {f.no}
                  </span>
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-950/60">
                  {f.desc}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
