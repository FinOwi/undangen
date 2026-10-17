import { Reveal } from "@/components/undangen/reveal"

const MOMENTS = [
  {
    no: "01",
    title: "Sampul terbuka untuknya",
    desc: "Nama tamu tertera di cover — seperti undangan fisik yang ditulis tangan khusus untuknya. Satu link, satu tamu, satu sapaan personal.",
  },
  {
    no: "02",
    title: "Musik menyambut",
    desc: "Lagu pilihanmu mengalun begitu undangan dibuka. Momen itu langsung punya suasananya sendiri.",
  },
  {
    no: "03",
    title: "Cerita mengalir",
    desc: "Mempelai, galeri, kisah cinta, rundown acara — tamu menggulir pelan, dan harimu terasa semakin dekat.",
  },
  {
    no: "04",
    title: "Satu sentuhan untuk hadir",
    desc: "Konfirmasi kehadiran, kirim ucapan, hingga amplop digital — semuanya tanpa perlu install aplikasi apa pun.",
  },
]

/** Perjalanan tamu — narasi vertikal, bukan daftar fitur. */
export function Ritual() {
  return (
    <section id="pengalaman" className="bg-ink-950 py-24 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-xs font-medium tracking-[0.3em] text-gold-400 uppercase">
                Pengalaman Tamu
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.02] font-bold tracking-tight text-balance text-cream-50">
                Bukan dibuka. <span className="text-gold-gradient italic">Disambut.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-md text-base leading-relaxed text-cream-50/65 lg:pt-16">
              Inilah yang dirasakan tamu dari detik pertama — sebuah ritual
              kecil, bukan sekadar halaman web.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14">
          {MOMENTS.map((m, i) => (
            <li
              key={m.no}
              className="grid gap-3 border-t border-cream-50/12 py-8 sm:grid-cols-[80px_1fr_1.4fr] sm:gap-8 sm:py-10"
            >
              <Reveal>
                <span className="font-display text-5xl font-bold text-gold-500/35 tabular-nums">
                  {m.no}
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h3 className="font-display text-2xl font-bold text-cream-50 sm:text-[1.7rem]">
                  {m.title}
                </h3>
              </Reveal>
              <Reveal delay={160}>
                <p className="max-w-lg text-sm leading-relaxed text-cream-50/60 sm:text-base">
                  {m.desc}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
