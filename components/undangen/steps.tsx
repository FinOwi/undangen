import { Reveal } from "@/components/undangen/reveal"

const STEPS = [
  {
    no: "01",
    title: "Ceritakan momenmu",
    desc: "Chat via WhatsApp — ceritakan acaramu dan tema impianmu. Semakin personal ceritanya, semakin berjiwa undangannya.",
  },
  {
    no: "02",
    title: "Kami merancang",
    desc: "Undangan dibuatkan khusus untukmu, biasanya dalam 1–3 hari. Bukan template yang diganti nama.",
  },
  {
    no: "03",
    title: "Kamu periksa",
    desc: "Revisi sampai kamu jatuh cinta. Belum cocok? Belum bayar. Sesederhana itu.",
  },
  {
    no: "04",
    title: "Sebar & rayakan",
    desc: "Link personal untuk setiap tamu, siap disebar. Aktif selamanya — kenanganmu tak punya tanggal kedaluwarsa.",
  },
]

export function Steps() {
  return (
    <section id="cara-pesan" className="bg-cream-50 py-24 text-ink-950 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.3em] text-gold-700 uppercase">
            Cara Pesan
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.02] font-bold tracking-tight text-balance">
            Dari cerita menjadi <span className="italic text-gold-700">undangan.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-950/60">
            Empat langkah tenang — tanpa formulir rumit, tanpa uang muka.
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.no}
              className="border-t-2 border-ink-950/80 py-7"
            >
              <Reveal delay={i * 90}>
                <span className="font-display text-sm font-bold tracking-[0.2em] text-gold-700">
                  {s.no}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-950/60">
                  {s.desc}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
