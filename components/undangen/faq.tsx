import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/undangen/reveal"

const FAQS = [
  {
    q: "Benarkah aktif selamanya?",
    a: "Ya. Sekali bayar, undanganmu tetap online selamanya tanpa biaya perpanjangan tahunan.",
  },
  {
    q: "Bagaimana sistem 'bayar setelah cocok'?",
    a: "Kami buatkan dulu undanganmu sesuai data yang kamu kirim. Kamu cek drafnya — kalau cocok baru bayar, kalau tidak cocok tidak perlu bayar.",
  },
  {
    q: "Acara apa saja yang bisa dibuatkan?",
    a: "Pernikahan, aqiqah, khitanan, ulang tahun, wisuda, syukuran, pertunangan, hingga acara korporat. Satu brand untuk semua momen bahagia.",
  },
  {
    q: "Apakah bisa revisi?",
    a: "Bisa. Selama tahap draf, kamu boleh minta penyesuaian nama, tanggal, foto, dan teks hingga sesuai keinginanmu.",
  },
  {
    q: "Bagaimana tamu membuka undangan?",
    a: "Cukup satu link. Setiap tamu bahkan bisa dapat link personal dengan namanya sendiri.",
  },
  {
    q: "Berapa lama pengerjaannya?",
    a: "Umumnya 1–3 hari kerja setelah data lengkap kami terima, tergantung antrean dan paket yang dipilih.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-cream-50 py-24 text-ink-950 sm:py-36">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.3em] text-gold-700 uppercase">
              FAQ
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.02] font-bold tracking-tight text-balance">
              Sering <span className="italic text-gold-700">ditanyakan.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Accordion className="lg:pt-14">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-display text-lg font-bold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-ink-950/65">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
