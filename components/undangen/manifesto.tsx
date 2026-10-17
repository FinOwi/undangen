import { Reveal } from "@/components/undangen/reveal"

/**
 * Manifesto — bab pembuka narasi. Kertas vs kenangan.
 */
export function Manifesto() {
  return (
    <section className="bg-cream-50 py-24 text-ink-950 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.3em] text-gold-700 uppercase">
              Manifesto
            </p>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.02] font-bold tracking-tight text-balance">
                Kertas bisa hilang.
                <br />
                <span className="italic text-gold-700">Momen tidak.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 grid gap-6 text-base leading-relaxed text-ink-950/70 sm:grid-cols-2 sm:text-lg">
                <p>
                  Undangan kertas berakhir di laci — atau tempat sampah. Link
                  yang kamu sebar hari ini masih bisa dibuka cucumu puluhan
                  tahun lagi.
                </p>
                <p>
                  Kami tidak menjual template. Kami menyutradarai caramu
                  menyambut tamu: namanya disebut, musik mengalun, ceritamu
                  mengalir — seperti nonton film pendek tentang harimu.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
