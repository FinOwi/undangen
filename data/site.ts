export interface Theme {
  slug: string
  name: string
  tagline: string
  /** tailwind gradient classes for the card art */
  art: string
  /** overlay text color class */
  artText: string
  badge?: string
}

export const THEMES: Theme[] = [
  {
    slug: "peta-perjalanan",
    name: "Peta Perjalanan",
    tagline: "Kota 3D interaktif: 10 pemberhentian, 13 achievement",
    art: "from-sky-200 via-slate-200 to-emerald-100",
    artText: "text-slate-800",
    badge: "Baru",
  }
]

export const WA_NUMBER = "6288279406268"
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Halo%20Undangen!%20Saya%20mau%20pesan%20undangan%20digital.`

export function themeDemoUrl(slug: string) {
  return `https://undangen.my.id/tema/${slug}/`
}
